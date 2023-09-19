<script setup lang="ts">
const prismic = usePrismic();
const { data: page } = useAsyncData("[info]", () =>
    prismic.client.getSingle("info")
);

useHead({
    title: 'Fanta-MLN | Info', 
    meta: [
        {
            name: "description",
            content: page.value?.data.meta_description || '',
        },
    ],
});
</script>

<template>
    <NuxtLayout title="Practical info">
     
        <PrismicRichText class="pb-5 text-st" :field="page?.data.address" />
        <PrismicRichText class="pb-5 text-st" :field="page?.data.contact" />
        <PrismicRichText class="pb-5 text-st" :field="page?.data.hours" />
        <div class="text-st" v-for="(link, index) in page?.data.links">
            <PrismicRichText :class="[index < 1 ? 'pb-5' : '']" :field="link.link" />
        </div>
    </NuxtLayout>
</template>
