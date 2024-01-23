<script setup lang="ts">
const prismic = usePrismic();
const route = useRoute();
const { data: page } = useAsyncData("[artist-uid]", () =>
    prismic.client.getByUID("artist", route.params.uid as string)
);

const expoData = computed(() => {
    return page.value?.data.slices4.find((slice: { id: string }) => slice.id === route.params.id) as any;

})

const optionalPressLink = computed(() => {
    if (expoData?.value?.primary.press[0] && expoData?.value?.primary.press[0]?.text) {
        return `/artists/${route.params.uid}/elsewhere/${route.params.id}/press`
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
   
    <NuxtLayout :title="expoData.primary.title" :date="String(`${new Date(String(expoData.primary.date_from)).toLocaleDateString('en-gb', { month: 'short', day: 'numeric' })}—${new Date(String(expoData.primary.date_to)).toLocaleDateString('en-gb', {
        month: 'short', day: 'numeric', year:
            'numeric'
    })}
                `)" :release="expoData.primary.press_release.url" :press="optionalPressLink" :back="'/artists/' + route.params.uid + '/elsewhere'">
       
           <UiLightBox :gallery="expoData.items"/>
     
    </NuxtLayout>
</div>
</template>
