<script setup lang="ts">
const prismic = usePrismic();
const route = useRoute();
const { data: page } = useAsyncData("[artist-uid]", () =>
    prismic.client.getByUID("artist", route.params.uid as string)
);

const expoData = computed(() => {
    return page.value?.data.slices3.find(slice => slice.id === route.params.id) as any;
})


useHead({
    title: "Fanta-MLN | " + page.value?.data.name,
    meta: [
        {
            name: "description",
            content: page.value?.data.meta_description || '',
        },
    ],
});
</script>

<template>
    <div>

   
    <NuxtLayout :title="expoData?.primary?.title" :date="String(`${new Date(String(expoData.primary.date_from)).toLocaleDateString('en-gb', { month: 'short', day: 'numeric' })}—${new Date(String(expoData.primary.date_to)).toLocaleDateString('en-gb', {
        month: 'short', day: 'numeric', year:
            'numeric'
    })}
                `)" :release="expoData.primary.press_release.url" :press="`/artists/${route.params.uid}/exhibitions/${route.params.id}/press`" :back="'/artists/' + route.params.uid + '/exhibitions'">

        <UiLightBox :gallery="expoData.items" />

    </NuxtLayout>
</div>
</template>
