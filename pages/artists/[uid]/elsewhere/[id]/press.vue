<script setup lang="ts">
import { htmlSerializer } from '~/htmlSerializer';
const prismic = usePrismic();
const route = useRoute();
const { data: page } = useAsyncData("[artist-uid]", () =>
    prismic.client.getByUID("artist", route.params.uid as string)
);

const expoData = computed(() => {
    return page.value?.data.slices4.find(slice => slice.id === route.params.id) as any;
})

</script>

<template>
    <div>
         <Html :lang="'en'">
            <Title>Fanta-MLN | {{ page?.data?.name }}</Title>
            <Meta name="description" :content="page?.data?.meta_description" />
            </Html>
        <NuxtLayout :title="expoData?.primary?.title" :date="String(`${new Date(String(expoData.primary.date_from)).toLocaleDateString('en-gb', { month: 'short', day: 'numeric' })}—${new Date(String(expoData.primary.date_to)).toLocaleDateString('en-gb', {
            month: 'short', day: 'numeric', year:
                'numeric'
        })}
                `)" :release="expoData.primary.press_release.url"
            :press="`/artists/${route.params.uid}/elsewhere/${route.params.id}/press`"
            :back="`/artists/${route.params.uid}/elsewhere/${route.params.id}`">
            <section class="text-st">
                <PrismicRichText :field="expoData.primary.press" :serializer="htmlSerializer" />

            </section>
        </NuxtLayout>
    </div>
</template>

