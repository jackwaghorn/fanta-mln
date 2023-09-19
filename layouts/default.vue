<script setup>
const props = defineProps(["title", "author", "date", "release", "press", "back", "links"])
</script>
<template>
    <!-- Top spacer -->
    <div class="w-full h-[3rem] md:h-[5rem]">
    </div>
    <main class="p-3 md:p-5 flex md:flex-nowrap flex-wrap">
        <!-- SideBar -->
        <section class="md:w-[28rem] w-full h-auto text-st pb-6">
            <div class="md:sticky top-[6.25rem]">
                <div class="md:pe-5 pe-3">
                    <p> {{ title }}</p>
                    <p> {{ author }}</p>
                    <p> {{ date }}</p>
                    <p> {{ release }}</p>
                    <a v-if="press" target="_blank" :href="press.url">{{ press.title }}</a>
                    <p class="mt-5" v-if="links">
                        <NuxtLink :to="link.url" v-for="(link, index) in links" class="block">{{ link.title }}</NuxtLink>
                    </p>
                    <NuxtLink :to="back" v-if="back" class="hidden md:block mt-5">Back</NuxtLink>
                </div>
            </div>
        </section>
        <!-- Content -->
        <section class="w-full pb-10">
            <slot />
            <div v-if="back" class="h-[3rem] pt-3">      <!-- Back button mobile -->
        <section class="fixed bottom-0 right-0 left-0 p-3 md:hidden h-[6rem] bg-white z-10">
            <NuxtLink :to="back" v-if="back" class="mt-5 text-st">Back</NuxtLink>
        </section></div>
        </section>
        <!-- SideBar -->
        <section class="md:w-0 lg:w-[28rem] text-st">

        </section>

    </main>
</template>
