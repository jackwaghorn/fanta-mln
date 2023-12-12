<script setup lang="ts">
const prismic = usePrismic();
const route = useRoute();
const { data: page } = useAsyncData("[fair-uid]", () =>
    prismic.client.getByUID("fair", route.params.uid as string)
);

const optionalReleaseLink = computed(() => {
    if (page?.value?.data?.press_release.url) {
        return page?.value?.data?.press_release?.url
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
                `)" :release="optionalReleaseLink" back="/fairs">



            <UiLightBox :gallery="page?.data.gallery ?? []" />
        </NuxtLayout>
    </div>
</template>

