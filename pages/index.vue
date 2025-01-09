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
  meta: [
    {
      name: "description",
      content: "Fanta-MLN is a Milan based contemporary art gallery with a program that focuses on Italian and international emerging artists, alternating solo exhibitions with curated group shows.",
    },
    {
      name: "keywords",
      content: "Fanta-MLN, art gallery, gallery, contemporary art, Milan, Italy, exhibitions, group shows, Alessandro Agudio, Noah Barker, Roberto Fassone, Gina Folly, Michèle Graf, Selina Grüter, Jason Hirata, Lorenza Longhi, Luzie Meyer, Margherita Raso, Angharad Williams",
    },
  ]


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
