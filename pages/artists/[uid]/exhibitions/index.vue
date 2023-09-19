<script setup lang="ts">
const prismic = usePrismic();
const route = useRoute();
const { data: page } = useAsyncData("[artist-uid]", () =>
    prismic.client.getByUID("artist", route.params.uid as string)
);

const sortByDate = computed(() => {
    const slices = page.value?.data.slices.filter(slice => slice.slice_type === "exhibition_slice") ?? [];
    const sortedItems = slices.sort((a: any, b: any) => {
        return new Date(b.date_from).getTime() - new Date(a.date_from).getTime();
    });
    return sortedItems;
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

        <section class="w-full pb-5 grid grid-cols-2 xl:grid-cols-3 gap-3 md:gap-5">

            <NuxtLink :to="'/artists/' + route.params.uid + '/exhibitions/' + expo.id"
                v-for="(expo, index) in sortByDate || []" :key="index"
                class="pb-2 md:pb-5 text-st col-span-1 not-italic group">
                <div class="flex flex-wrap w-full not-italic">
                    <img v-if="expo.items[0].image.url"
                        class="object-cover aspect-[5/3] w-full group-hover:opacity-75 transition duration-100 lazyload"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                        :data-srcset="`${expo.items[0].image.url}&?&w=500&fit=crop 1024w, ${expo.items[0].image.url}&?&w=384&fit=crop 640w,`"
                        sizes="(min-width: 640px) 50vw, 33vw" :height="expo.items[0].image.dimensions.height"
                        :width="expo.items[0].image.dimensions.width"
                        />

                    <img v-else
                        class="object-cover aspect-[5/3] w-full group-hover:opacity-75 transition duration-100 lazyload"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                        :data-src="expo.items[0].video_embed.thumbnail_url" alt="" />
                    <div class="text-t w-full pt-1">{{ expo.primary.title }}</div>

                    <div class="text-t w-full"> {{ new Date(expo.primary.date_from as any).toLocaleDateString('en-gb', {
                        month:
                            "short", day: "numeric"
                    }) }}—{{ new Date(expo.primary.date_to as any).toLocaleDateString('en-gb', {
    month: "short", day: "numeric",
}) }} </div>
                </div>

            </NuxtLink>
        </section>
    </NuxtLayout>
</div>
</template>
