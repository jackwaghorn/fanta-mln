<script setup lang="ts">
const prismic = usePrismic();
const { data: page } = useAsyncData("[exhibition]", () =>
  prismic.client.getSingle("exhibition", {
    orderings: [
      { field: "my.exhibition.date_to", direction: "desc" },
    ],
  })
)
useHead({
    title: "Fanta-MLN",

});
</script>
<template>
  <main class="h-full flex flex-col items-center justify-center">
    <h1 class="text-st">
      {{ page ? page?.data?.title : '' }}
    </h1>
  
    <p class="text-st">
      {{ page ? page?.data?.date_from : '' }} — {{ page ? page?.data?.date_to : '' }}
    </p>
  </main>
</template>
