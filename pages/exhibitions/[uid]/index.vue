<script setup lang="ts">
const prismic = usePrismic();
const route = useRoute();
const { data: page } = useAsyncData("[exhibition-uid]", () =>
    prismic.client.getByUID("exhibition", route.params.uid as string)
);

useHead({
    title: `Fanta-MLN | ${page.value?.data.title}`,
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
        <NuxtLayout :title="page?.data.title" :author="page?.data.author" :date="String(`${new Date(String(page?.data.date_from)).toLocaleDateString('en-gb', { month: 'short', day: 'numeric' })}—${new Date(String(page?.data.date_to)).toLocaleDateString('en-gb', {
            month: 'short', day: 'numeric', year:
                'numeric'
        })}
                `)" :release="page?.data.press_release.url" :press="`/exhibitions/${page?.uid}/press`"
            back="/exhibitions">


            <UiLightBox :gallery="page?.data.gallery ?? []" />
        </NuxtLayout>
    </div>
</template>

