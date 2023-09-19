<script setup lang="ts">
const prismic = usePrismic();
const { data: page } = useAsyncData("[artist]", () =>
    prismic.client.getByType("artist", {
        orderings: [
            { field: "my.artist.name", direction: "asc" }
        ],
    })
);
useHead({
    title: "Fanta-MLN | Artists",

});
</script>
<template>
    <div>
    <NuxtLayout title="Artists">

        <NuxtLink :to="`/artists/${artist.uid}`" v-for="(artist, index) in page?.results" :key="index"
            class="w-full text-st pb-1 block">
            {{ artist?.data.name }}
        </NuxtLink>

    </NuxtLayout>
</div>
</template>
