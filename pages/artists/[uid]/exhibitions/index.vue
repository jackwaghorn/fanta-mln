<script setup lang="ts">
const prismic = usePrismic();
const route = useRoute();
const { data: page } = useAsyncData("[artist-uid]", () =>
    prismic.client.getByUID("artist", route.params.uid as string)
);

const categorizeAndSortByDate = computed(() => {
    const categorizedItems: { year: number; items: any[] }[] = [];
    const slices = (page.value?.data.slices3 as { slice_type: string }[]) ?? [];

    slices.sort((a, b) => new Date(b.primary.date_from) - new Date(a.primary.date_from))
    slices.forEach((obj) => {

        const year = obj.primary?.date_from ? new Date(String(obj.primary.date_from)).getFullYear() : null;


        const yearCategory = categorizedItems.find((category) => category.year === year);

        if (!yearCategory) {
            categorizedItems.push({ year: year ?? 0, items: [obj] });
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
                        <NuxtImg v-if="expo.cover_image?.url" loading="lazy"
                            class="object-cover aspect-[5/3] w-full group-hover:opacity-75 transition duration-100"
                            placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                            sizes="md:50vw lg:30vw xl:25vw" :src="`${expo.cover_image?.url}?&cs=srgb`"
                            :height="expo.cover_image?.dimensions.height" :width="expo.cover_image?.dimensions.width" />
                        <NuxtImg v-else-if="expo.items[0].image.url" loading="lazy"
                            class="object-cover aspect-[5/3] w-full group-hover:opacity-75 transition duration-100"
                            placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                            sizes="md:50vw lg:30vw xl:25vw" :src="`${expo.items[0].image.url}?&cs=srgb`"
                            :height="expo.items[0].image.dimensions.height" :width="expo.items[0].image.dimensions.width" />
                        <img v-else
                            class="object-cover aspect-[5/3] w-full group-hover:opacity-75 transition duration-100 bg-gray-200"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" />




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
