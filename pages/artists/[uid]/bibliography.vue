<script setup lang="ts">
import { htmlSerializer } from '~/htmlSerializer';
const prismic = usePrismic();
const route = useRoute();
const { data: page } = useAsyncData("[artist-uid]", () =>
  prismic.client.getByUID("artist", route.params.uid as string)
);
</script>

<template>
  <div>
    <Html :lang="'en'">
    <Title>Fanta-MLN | {{ page?.data?.name }}</Title>
    <Meta name="description" :content="page?.data?.meta_description" />
    </Html>
    <NuxtLayout :title="page?.data.name" :author="page?.data.bio"
      :links="[{ title: 'Works', url: `/artists/${route.params.uid}` }, { title: 'Exhibitions', url: `/artists/${route.params.uid}/exhibitions` }, { title: 'Elsewhere', url: `/artists/${route.params.uid}/elsewhere` }, { title: 'CV', url: `/artists/${route.params.uid}/cv` }, { title: 'Bibliography', url: `/artists/${route.params.uid}/bibliography` }]"
      back="/artists">

      <PrismicRichText class="text-st" :field="page?.data?.bibliography" :serializer="htmlSerializer" />

    </NuxtLayout>
  </div>
</template>
