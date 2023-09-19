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
    <div>
    <NuxtLayout title="Practical info">
        <section class="w-full flex justify-center">
            <div class="w-full lg:w-10/12 xl:w-8/12">
        <PrismicRichText class="pb-5 text-st" :field="page?.data.address" />
        <PrismicRichText class="pb-5 text-st" :field="page?.data.contact" />
        <PrismicRichText class="pb-5 text-st" :field="page?.data.hours" />
        <div class="text-st" v-for="(link, index) in page?.data.links">
            <PrismicRichText :class="[index < 1 ? 'pb-5' : '']" :field="link.link" />
        </div>
        </div>
        </section>
    </NuxtLayout>
</div>
</template>
