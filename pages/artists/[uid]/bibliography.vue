<script setup lang="ts">
const prismic = usePrismic();
const route = useRoute();
const { data: page } = useAsyncData("[artist-uid]", () =>
  prismic.client.getByUID("artist", route.params.uid as string)
);

useHead({
  title: "Fanta-MLN | " + page.value?.data.name,
  meta: [
    {
      name: "description",
      content: page.value?.data.meta_description?? '',
    },
  ],
});
</script>

<template>
   <NuxtLayout :title="page?.data.name" :author="page?.data.bio"
        :links="[{ title: 'Works', url: `/artists/${route.params.uid}/works` }, { title: 'Exhibitions', url: `/artists/${route.params.uid}/exhibitions` }, { title: 'Elsewhere', url: `/artists/${route.params.uid}/elsewhere`},{ title: 'CV', url: `/artists/${route.params.uid}/cv`}, {title: 'Bibliography', url: `/artists/${route.params.uid}/bibliography`}]"
        back="/artists">
 
        <PrismicRichText class="text-st" :field="page?.data?.bibliography" />

   </NuxtLayout>
</template>
