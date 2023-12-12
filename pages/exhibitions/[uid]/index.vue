<script setup lang="ts">
const prismic = usePrismic();
const route = useRoute();
const { data: page } = useAsyncData("[exhibition-uid]", () =>
    prismic.client.getByUID("exhibition", route.params.uid as string)
);

const optionalPressLink = computed(() => {
    if (page?.value?.data?.press[0] && page?.value?.data?.press[0]?.text) {
        return `/exhibitions/${page?.value.uid}/press`
    } else {
        return null
    }
})




</script>

<template>
    <div>
        <Html :lang="'en'">
        <Title>Fanta-MLN | {{ page?.data?.title }}</Title>
        <Meta name="description" :content="page?.data?.meta_description" />
        </Html>
        <NuxtLayout :title="page?.data.title" :author="page?.data.author" :date="String(`${new Date(String(page?.data.date_from)).toLocaleDateString('en-gb', { month: 'short', day: 'numeric' })}—${new Date(String(page?.data.date_to)).toLocaleDateString('en-gb', {
            month: 'short', day: 'numeric', year:
                'numeric'
        })}
                `)" :release="page?.data.press_release.url" :press="optionalPressLink" back="/exhibitions">


            <UiLightBox :gallery="page?.data.gallery ?? []" />
        </NuxtLayout>
    </div>
</template>

