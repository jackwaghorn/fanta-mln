<script setup lang="ts">
const prismic = usePrismic();
const { data: page } = useAsyncData("[exhibition]", () =>
    prismic.client.getByType("exhibition")
);
const categorizeAndSortByDate = computed(() => {
    const categorizedItems: { year: number; items: any[] }[] = [];
    page.value?.results.forEach((obj) => {
        const year = new Date(String(obj.data.date_from)).getFullYear();

        const yearCategory = categorizedItems.find((category) => category.year === year);

        if (!yearCategory) {
            categorizedItems.push({ year: year, items: [obj] });
        } else {
            yearCategory.items.push(obj);
        }
    });

    const sortedCategories = categorizedItems.sort((a, b) => b.year - a.year);
    return sortedCategories;
});

useHead({
    title: "Fanta-MLN | Exhibitions",
  
});
</script>
<template>
    <NuxtLayout title="Exhibitions">
        <div v-for="(year, index) in categorizeAndSortByDate" :key="index"
            class="w-full pb-5 grid grid-cols-2 xl:grid-cols-3 gap-3 md:gap-5">
            <div class="pb-5 text-st w-full col-span-2 xl:col-span-3">
                {{ year.year }}
            </div>
            <NuxtLink :to="'/exhibitions/' + news.uid" v-for="(news, index) in year?.items || []" :key="index"
                class="pb-2 md:pb-5 text-st col-span-1 group">

                <div class="flex flex-wrap w-full">
                    <NuxtImg v-if="news.data.gallery[0].image.url"
                        class="object-cover aspect-[5/3] w-full group-hover:opacity-75 transition duration-100"
                        :src="news.data.gallery[0].image.url" :height="news.data.gallery[0].image.dimensions.height"
                        :width="news.data.gallery[0].image.dimensions.width" />

                    <NuxtImg v-else class="object-cover aspect-[5/3] w-full group-hover:opacity-75 transition duration-100"
                        :src="news.data.gallery[0].video_embed.thumbnail_url" />
                    <div class="text-t w-full pt-1">{{ news.data.title }}</div>
                    <div class="text-t w-full">{{ news.data.author }}</div>
                    <div class="text-t w-full"> {{ new Date(news.data.date_from).toLocaleDateString('en-gb', {
                        month:
                            "short", day: "numeric"
                    }) }}—{{ new Date(news.data.date_to).toLocaleDateString('en-gb', {
    month: "short", day: "numeric",
}) }} </div>
                </div>

            </NuxtLink>
        </div>
    </NuxtLayout>
</template>
