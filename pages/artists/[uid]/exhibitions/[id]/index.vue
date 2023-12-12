<script setup lang="ts">
const prismic = usePrismic();
const route = useRoute();
const { data: page } = useAsyncData("[artist-uid]", () =>
    prismic.client.getByUID("artist", route.params.uid as string)
);

const { data: expoData } = useAsyncData("[exhibition-uid]", () =>
    prismic.client.getByUID("exhibition", route.params.id as string)
);

const optionalPressLink = computed(() => {
    if (expoData?.value?.data?.press[0] && expoData?.value?.data?.press[0]?.text) {
        return `/artists/${route.params.uid}/exhibitions/${route.params.id}/press`
    } else {
        return null
    }
})
</script>

<template>
    <div>
        <Html :lang="'en'">
        <Title>Fanta-MLN | {{ page?.data?.name }}</Title>
        <Meta name="description" :content="page?.data?.meta_description" />
        </Html>

        <NuxtLayout :title="expoData?.data?.title" :date="String(`${new Date(String(expoData?.data?.date_from)).toLocaleDateString('en-gb', { month: 'short', day: 'numeric' })}—${new Date(String(expoData?.data?.date_to)).toLocaleDateString('en-gb', {
            month: 'short', day: 'numeric', year:
                'numeric'
        })}
                `)" :release="expoData?.data?.press_release?.url" :press="optionalPressLink"
            :back="'/artists/' + route.params.uid + '/exhibitions'">

            <UiLightBox :gallery="expoData?.data.gallery" />

        </NuxtLayout>
    </div>
</template>
