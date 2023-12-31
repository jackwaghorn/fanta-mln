<script setup lang="ts">
const prismic = usePrismic();
const { data: page } = useAsyncData("[fair]", () =>
    prismic.client.getByType("fair", {
        orderings: [
            { field: "my.fair.date_from", direction: "desc" }
        ],
    })
);
const categorizeAndSortByDate = computed(() => {
    const categorizedItems: { year: number; items: any[] }[] = [];
    page.value?.results.forEach((obj: any) => {
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
    title: "Fanta-MLN | Fairs",
});
</script>
<template>
    <div>
        <NuxtLayout title="Fairs">
            <div v-for="(year, index) in categorizeAndSortByDate" :key="index"
                class="w-full pb-5 grid grid-cols-2 xl:grid-cols-3 gap-5">
                <div class="pb-5 text-st w-full col-span-2 xl:col-span-3">
                    {{ year.year }}
                </div>
                <NuxtLink :to="'/fairs/' + news.uid" v-for="(news, index) in year?.items || []" :key="index"
                    class="pb-2 md:pb-5 text-st col-span-1 group">
                    <div class="flex flex-wrap w-full">
                        <NuxtImg v-if="news?.data?.cover_image?.url" loading="lazy"
                            class="object-cover aspect-[5/3] w-full group-hover:opacity-75 transition duration-100"
                            placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                            sizes="md:50vw lg:30vw xl:25vw" :src="`${news?.data?.cover_image?.url}?&cs=srgb`"
                            :height="news.data.cover_image.dimensions.height"
                            :width="news.data.cover_image.dimensions.width" />
                        <NuxtImg v-else-if="news?.data?.gallery[0]?.image?.url" loading="lazy"
                            class="object-cover aspect-[5/3] w-full group-hover:opacity-75 transition duration-100"
                            placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                            sizes="md:50vw lg:30vw xl:25vw" :src="`${news?.data?.gallery[0]?.image?.url}?&cs=srgb`"
                            :height="news.data.gallery[0].image.dimensions.height"
                            :width="news.data.gallery[0].image.dimensions.width" />
                        <img v-else
                            class="object-cover aspect-[5/3] w-full group-hover:opacity-75 transition duration-100 bg-gray-200"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" />
                        <div class="text-t w-full pt-1">{{ news.data.title }}</div>
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
    </div>
</template>
