<script setup lang="ts">
const prismic = usePrismic();
const { data: page } = useAsyncData("[exhibition]", () =>
  prismic.client.getSingle("exhibition", {
    orderings: [
      { field: "my.exhibition.date_from", direction: "desc" },
    ],
  })
)
useHead({
  title: "Fanta-MLN",

});
</script>
<template>
  <main class="h-full flex flex-col items-center justify-center">
    <NuxtLink class="text-center" :to="'/exhibitions/' + page?.uid">
      <h1 class="text-st">
        {{ page ? page?.data?.title : '' }}
      </h1>

      <p class="text-st">
        {{ page ? page?.data?.date_from : '' }} — {{ page ? page?.data?.date_to : '' }}
      </p>
    </NuxtLink>
  </main>
</template>
