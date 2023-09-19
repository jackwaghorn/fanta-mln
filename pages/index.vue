<script setup lang="ts">


const prismic = usePrismic();
const { data: page } = useAsyncData("[homepage]", () =>
  prismic.client.getSingle("homepage")
);

useHead({
  title: 'Fanta-MLN',
  meta: [
    {
      name: "description",
      content: page.value?.data.meta_description || "",
    },
  ],
});
</script>

<template>
  <main class="h-full flex items-center justify-center">
    <PrismicRichText class="text-st text-center" :field="page?.data.sample_text" />
  </main>
</template>
