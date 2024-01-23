<script setup lang="ts">
const prismic = usePrismic();
const route = useRoute();
const { data: page } = useAsyncData("[artist-uid]", () =>
    prismic.client.getByUID("artist", route.params.uid as string)
);

const { data: exhibitions } = useAsyncData("[exhibition]", () =>
    prismic.client.getByType("exhibition", {
        orderings: [
            { field: "my.exhibition.date_from", direction: "desc" }
        ],
        pageSize: 100
    }), {
    transform: (res) => {

        const categorizedItems: { year: number; items: any[] }[] = [];

        const array = res.results?.filter(result => result?.data?.author?.includes(page?.value?.data.name))
        array.forEach((obj) => {
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
    }
}
);

</script>
<template>
    <div>
        <Html :lang="'en'">
        <Title>Fanta-MLN | {{ page?.data?.name }}</Title>
        </Html>
        <NuxtLayout :title="page?.data.name" :author="page?.data.bio"
            :links="[{ title: 'Works', url: `/artists/${route.params.uid}` }, { title: 'Exhibitions', url: `/artists/${route.params.uid}/exhibitions` }, { title: 'Elsewhere', url: `/artists/${route.params.uid}/elsewhere` }, { title: 'CV', url: `/artists/${route.params.uid}/cv` }, { title: 'Bibliography', url: `/artists/${route.params.uid}/bibliography` }]"
            :back="'/artists/' + route.params.uid">

            <div v-for="(year, index) in exhibitions" :key="index"
                class="w-full pb-5 grid grid-cols-2 xl:grid-cols-3 gap-3 md:gap-5">
                <div class="pb-5 text-st w-full col-span-2 xl:col-span-3">
                    {{ year.year }}
                </div>
                <NuxtLink :to="'/artists/' + route.params.uid + '/exhibitions/' + expo.uid"
                    v-for="(expo, index) in year?.items || []" :key="index" class="pb-2 md:pb-5 text-st col-span-1 group">
                    <div class="flex flex-wrap w-full">
                        <NuxtImg v-if="expo.data.cover_image?.url" loading="lazy"
                            class="object-cover aspect-[5/3] w-full group-hover:opacity-75 transition duration-100"
                            placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                            sizes="md:50vw lg:30vw xl:25vw" :src="`${expo.data.cover_image?.url}?&cs=srgb`"
                            :height="expo.data.cover_image?.dimensions.height"
                            :width="expo.data.cover_image?.dimensions.width" />

                        <NuxtImg v-else-if="expo?.data?.gallery[0]?.image?.url" loading="lazy"
                            class="object-cover aspect-[5/3] w-full group-hover:opacity-75 transition duration-100"
                            placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                            sizes="md:50vw lg:30vw xl:25vw" :src="`${expo.data.gallery[0].image.url}?&cs=srgb`"
                            :height="expo.data.gallery[0].image.dimensions.height"
                            :width="expo.data.gallery[0].image.dimensions.width" />
                        <img v-else
                            class="object-cover aspect-[5/3] w-full group-hover:opacity-75 transition duration-100 bg-gray-200"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" />

                        <div class="text-t w-full pt-1">{{ expo.data.title }}</div>
                        <div class="text-t w-full">{{ expo.data.author }}</div>
                        <div class="text-t w-full"> {{ new Date(expo.data.date_from).toLocaleDateString('en-gb', {
                            month:
                                "short", day: "numeric"
                        }) }}—{{ new Date(expo.data.date_to).toLocaleDateString('en-gb', {
    month: "short", day: "numeric",
}) }} </div>
                    </div>

                </NuxtLink>
            </div>

        </NuxtLayout>


    </div>
</template>
