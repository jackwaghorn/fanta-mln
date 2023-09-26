<script setup lang="ts">
const prismic = usePrismic();
const route = useRoute();
const { data: page } = useAsyncData("[artist-uid]", () =>
    prismic.client.getByUID("artist", route.params.uid as string)
);



const categorizeAndSortByDate = computed(() => {
    const categorizedItems: { year: number; items: any[] }[] = [];
    const slices = page.value?.data.slices.filter(slice => slice.slice_type === "exhibition_slice") ?? [];
    slices.forEach((obj) => {

        const year = new Date(String(obj.primary.date_from)).getFullYear();

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
    title: "Fanta-MLN | " + page.value?.data.name,

});
</script>
<template>
    <div>
        <NuxtLayout :title="page?.data.name" :author="page?.data.bio"
            :links="[{ title: 'Works', url: `/artists/${route.params.uid}/works` }, { title: 'Exhibitions', url: `/artists/${route.params.uid}/exhibitions` }, { title: 'Elsewhere', url: `/artists/${route.params.uid}/elsewhere` }, { title: 'CV', url: `/artists/${route.params.uid}/cv` }, { title: 'Bibliography', url: `/artists/${route.params.uid}/bibliography` }]"
            :back="'/artists/' + route.params.uid">

            <div v-for="(year, index) in categorizeAndSortByDate" :key="index"
                class="w-full pb-5 grid grid-cols-2 xl:grid-cols-3 gap-3 md:gap-5">
                <div class="pb-5 text-st w-full col-span-2 xl:col-span-3">
                    {{ year.year }}
                </div>
                <NuxtLink :to="'/artists/' + route.params.uid + '/exhibitions/' + expo.id"
                    v-for="(expo, index) in year?.items || []" :key="index" class="pb-2 md:pb-5 text-st col-span-1 group">

                    <div class="flex flex-wrap w-full">
                        <NuxtImg v-if="expo.items[0].image.url"
                            class="object-cover aspect-[5/3] w-full group-hover:opacity-75 transition duration-100"
                            :src="expo.items[0].image.url" :height="expo.items[0].image.dimensions.height"
                            :width="expo.items[0].image.dimensions.width" />

                        <NuxtImg v-else
                            class="object-cover aspect-[5/3] w-full group-hover:opacity-75 transition duration-100"
                            :src="expo.items[0].video_embed.thumbnail_url" />
                        <div class="text-t w-full pt-1">{{ expo.primary.title }}</div>
                        <div class="text-t w-full">{{ expo.primary.author }}</div>
                        <div class="text-t w-full"> {{ new Date(expo.primary.date_from).toLocaleDateString('en-gb', {
                            month:
                                "short", day: "numeric"
                        }) }}—{{ new Date(expo.primary.date_to).toLocaleDateString('en-gb', {
    month: "short", day: "numeric",
}) }} </div>
                    </div>

                </NuxtLink>
            </div>

        </NuxtLayout>
    </div>
</template>
