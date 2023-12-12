<script setup lang="ts">
const prismic = usePrismic();
const { data: page } = useAsyncData("[artist]", () =>
    prismic.client.getByType("artist"), {
    transform: (res) => {
        return res?.results.slice().sort((a: any, b: any) => {
            const aLastName = a?.data?.name?.split(" ").pop();
            const bLastName = b.data.name?.split(" ").pop();
            return aLastName?.localeCompare(bLastName);
        })
    }
}
);
useHead({
    title: "Fanta-MLN | Artists",

});
</script>
<template>
    <div>
        <NuxtLayout title="Artists">

            <NuxtLink :to="`/artists/${artist.uid}`" v-for="(artist, index) in page || []" :key="index"
                class="w-full text-st pb-1 block">
                {{ artist?.data.name }}
            </NuxtLink>

        </NuxtLayout>
    </div>
</template>
