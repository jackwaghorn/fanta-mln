<script setup lang="ts">
const prismic = usePrismic();
const route = useRoute();
const { data: page } = useAsyncData("[artist-uid]", () =>
    prismic.client.getByUID("artist", route.params.uid as string)
);

const { data: fairPage } = useAsyncData("[fair]", () =>
    prismic.client.getByType("fair", {
        orderings: [{ field: "my.fair.date_from", direction: "desc" }]
    })
);

const categorizeAndSortByDate = computed(() => {
    const categorizedItems: { year: number; items: any[] }[] = [];

    const artistSlices = (page.value?.data.slices4 ?? []).map(slice => ({
        ...slice,
        date_from: slice.primary?.date_from
    }));


    const fairResults = (fairPage.value?.results ?? [])
        .filter(result => result?.data?.author === page?.value?.data?.name)
        .map(result => ({
            ...result,
            date_from: result.data?.date_from
        }));

    const combinedData = [...artistSlices, ...fairResults];

    combinedData.sort((a, b) => new Date(b?.date_from) - new Date(a?.date_from));

    combinedData.forEach(obj => {
        const year = obj.date_from ? new Date(String(obj.date_from)).getFullYear() : null;
        const yearCategory = categorizedItems.find(category => category.year === year);

        if (!yearCategory) {
            categorizedItems.push({ year: year ?? 0, items: [obj] });
        } else {
            yearCategory.items.push(obj);
        }
    });
    return categorizedItems.sort((a, b) => b.year - a.year);
});



</script>
<template>
    <div>
        <Html :lang="'en'">
        <Title>Fanta-MLN | {{ page?.data?.name }}</Title>
        <Meta name="description" :content="page?.data?.meta_description" />
        </Html>
        <NuxtLayout :title="page?.data.name" :author="page?.data.bio"
            :links="[{ title: 'Works', url: `/artists/${route.params.uid}` }, { title: 'Exhibitions', url: `/artists/${route.params.uid}/exhibitions` }, { title: 'Elsewhere', url: `/artists/${route.params.uid}/elsewhere` }, { title: 'CV', url: `/artists/${route.params.uid}/cv` }, { title: 'Bibliography', url: `/artists/${route.params.uid}/bibliography` }]"
            :back="`/artists/${route.params.uid}`">

            <div v-for="(year, index) in categorizeAndSortByDate" :key="index"
                class="w-full pb-5 grid grid-cols-2 xl:grid-cols-3 gap-3 md:gap-5">
                <div class="pb-5 text-st w-full col-span-2 xl:col-span-3">
                    {{ year.year }}
                </div>

                <template v-for="(expo, index) in year?.items || []" :key="index">
                    <!-- Fairs -->
                    <NuxtLink v-if="expo?.last_publication_date"
                        :to="{ path: '/fairs/' + expo.uid, query: { artistpage: route.params.uid } }"
                        class="pb-2 md:pb-5 text-st col-span-1 group">
                        <div class="flex flex-wrap w-full">
                            <NuxtImg v-if="expo?.data?.cover_image?.url" loading="lazy"
                                class="object-cover aspect-[5/3] w-full group-hover:opacity-75 transition duration-100"
                                placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                sizes="md:50vw lg:30vw xl:25vw" :src="`${expo?.data?.cover_image?.url}?&cs=srgb`"
                                :height="expo.data.cover_image.dimensions.height"
                                :width="expo.data.cover_image.dimensions.width" />
                            <NuxtImg v-else-if="expo?.data?.gallery[0]?.image?.url" loading="lazy"
                                class="object-cover aspect-[5/3] w-full group-hover:opacity-75 transition duration-100"
                                placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                sizes="md:50vw lg:30vw xl:25vw" :src="`${expo?.data?.gallery[0]?.image?.url}?&cs=srgb`"
                                :height="expo.data.gallery[0].image.dimensions.height"
                                :width="expo.data.gallery[0].image.dimensions.width" />
                            <img v-else
                                class="object-cover aspect-[5/3] w-full group-hover:opacity-75 transition duration-100 bg-gray-200"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" />
                            <div class="text-t w-full pt-1">{{ expo.data.title }}</div>
                            <div class="text-t w-full"> {{ new Date(expo.data.date_from).toLocaleDateString('en-gb', {
                                month:
                                "short", day: "numeric"
                                }) }}—{{ new Date(expo.data.date_to).toLocaleDateString('en-gb', {
                                month: "short", day: "numeric",
                                }) }} </div>
                        </div>
                    </NuxtLink>
                    <!-- Artist elsewhere -->
                    <NuxtLink v-else :to="'/artists/' + route.params.uid + '/elsewhere/' + expo.id"
                        class="pb-2 md:pb-5 text-st col-span-1 group">

                        <div class="flex flex-wrap w-full">
                            <NuxtImg v-if="expo.items[0].image.url" loading="lazy"
                                class="object-cover aspect-[5/3] w-full group-hover:opacity-75 transition duration-100"
                                placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                sizes="md:50vw lg:30vw xl:25vw" :src="`${expo.items[0].image.url}?&cs=srgb`"
                                :height="expo.items[0].image.dimensions.height"
                                :width="expo.items[0].image.dimensions.width" />
                            <img v-else
                                class="object-cover aspect-[5/3] w-full group-hover:opacity-75 transition duration-100 bg-gray-200"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" />
                            <div class="text-t w-full pt-1">{{ expo.primary.title }}</div>
                            <div class="text-t w-full">{{ expo.primary.author }}</div>
                            <div class="text-t w-full"> {{ new Date(expo.primary.date_from).toLocaleDateString('en-gb',
                                {
                                month:
                                "short", day: "numeric"
                                }) }}—{{ new Date(expo.primary.date_to).toLocaleDateString('en-gb', {
                                month: "short", day: "numeric",
                                }) }} </div>
                        </div>
                    </NuxtLink>
                </template>
            </div>
        </NuxtLayout>
    </div>
</template>
