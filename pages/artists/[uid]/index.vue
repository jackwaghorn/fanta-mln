<script setup lang="ts">
const prismic = usePrismic();
const route = useRoute();
const { data: page } = useAsyncData("[artist-uid]", () =>
    prismic.client.getByUID("artist", route.params.uid as string)
);

</script>

<template>
    <div>
        <Html :lang="'en'">
        <Title>{{ page?.data?.name }} | Fanta-MLN</Title>
        <Meta name="description" :content="`${page?.data?.name} ${page?.data?.meta_description}`" />
        <Meta name="keywords" :content="page?.data?.keywords" />

        </Html>
        <NuxtLayout :title="page?.data.name" :author="page?.data.bio"
            :links="[{ title: 'Works', url: `/artists/${route.params.uid}` }, { title: 'Exhibitions', url: `/artists/${route.params.uid}/exhibitions` }, { title: 'Elsewhere', url: `/artists/${route.params.uid}/elsewhere` }, { title: 'CV', url: `/artists/${route.params.uid}/cv` }, { title: 'Bibliography', url: `/artists/${route.params.uid}/bibliography` }]"
            back="/artists">
            <UiLightBox :gallery="page?.data.works ?? []" />
        </NuxtLayout>
    </div>
</template>
