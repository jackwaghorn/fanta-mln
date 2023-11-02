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
                    <table class="w-full pb-5 text-st block">
                        <tbody class="w-full ">
                            <tr v-for="(link, index) in page?.data.contact_links" :key="'contact-' + index">
                                <th class="text-start pe-14 font-normal">{{ link.title }}</th>
                                <td>{{ link.address }}</td>
                            </tr>
                        </tbody>
                    </table>

                    <PrismicRichText class="pb-5 text-st" :field="page?.data.hours" />
                    <PrismicRichText class="pb-5 text-st" :field="page?.data.links" />
                </div>
            </section>
        </NuxtLayout>
    </div>
</template>
