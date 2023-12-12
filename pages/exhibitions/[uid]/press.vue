<script setup lang="ts">
import { htmlSerializer } from '~/htmlSerializer';
const prismic = usePrismic();
const route = useRoute();
const { data: page } = useAsyncData("[exhibition-uid]", () =>
    prismic.client.getByUID("exhibition", route.params.uid as string)
);

</script>

<template>
    <div>
           <Html :lang="'en'">
            <Title>Fanta-MLN | {{ page?.data?.title }}</Title>
            <Meta name="description" :content="page?.data?.meta_description" />
            </Html>
        <NuxtLayout :title="page?.data.title" :author="page?.data.author" :date="String(`${new Date(String(page?.data.date_from)).toLocaleDateString('en-gb', { month: 'short', day: 'numeric' })}—${new Date(String(page?.data.date_to)).toLocaleDateString('en-gb', {
            month: 'short', day: 'numeric', year:
                'numeric'
        })}
                `)" :release="page?.data.press_release.url" :press="`/exhibitions/${page?.uid}/press`"
            :back="`/exhibitions/${page?.uid}`">

            <section>



                <PrismicRichText class="text-st" :field="page?.data.press" :serializer="htmlSerializer" />





            </section>
        </NuxtLayout>
    </div>
</template>

