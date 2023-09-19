<script setup lang="ts">
const prismic = usePrismic();
const { data: page } = useAsyncData("[edition]", () =>
    prismic.client.getByType("edition", {
        orderings: [
            { field: "my.artist.name", direction: "asc" }
        ],
    })
);

const uniqueAuthors = computed(() => {
    const names = page.value?.results.map((author) => {
        return author?.data.author;
    });
    return names?.filter((value, index, self) => {
        return self.indexOf(value) === index;
    });

})


const filters = ref([]);
const filteredAuthors = computed(() => {
    const filtered = page.value?.results || [];
    if (filters.value.length === 0) {
        return filtered;
    } else {
        return filtered.filter((author) => {
            return filters.value.some((filter) => filter === author?.data.author);
        });
    }
});

function setFilter(val: any) {
    filters.value = [val as never]
}
function resetFilter() {
    filters.value = []
}

const currentImg = ref(0)
const galleryAuthor = ref(Object as any)
const galleryOpen = ref(false)
function openGallery(a: any) {
    galleryAuthor.value = a
    window.addEventListener("keydown", handleKeyDown)
    currentImg.value = galleryAuthor?.value.data.gallery.length

    galleryOpen.value = true
}
function closeGallery() {
    galleryAuthor.value = Object as any
    galleryOpen.value = false;
}
function handleKeyDown(event: any) {
    if (event.key === "ArrowLeft") {
        prevImg();
    } else if (event.key === "ArrowRight") {
        nextImg();
    }
}
function prevImg() {
    const galleryLength = galleryAuthor.value?.data.gallery.length || 0
    currentImg.value <= 0 ? currentImg.value = galleryLength : currentImg.value--
}


function nextImg() {
    if (galleryOpen.value) {
        currentImg.value > galleryAuthor?.value.data.gallery.length - 1 ? currentImg.value = 0 : currentImg.value++
    }
}

onBeforeUnmount(() => {
    window.removeEventListener("keydown", handleKeyDown);
})

useHead({
    title: "Fanta-MLN | Exhibitions",
});

</script>
<template>
    <!-- Top spacer -->
    <div class="w-full h-[3rem] md:h-[5rem]">
    </div>
    <main class="p-3 md:p-5 flex md:flex-nowrap flex-wrap">
        <!-- SideBar -->
        <section class="md:w-[28rem] w-full h-auto text-st pb-6">
            <div class="md:sticky top-[6.25rem]">
                <div>
                    <section class="text-st md:pe-5 pe-3">
                        <div @click="resetFilter" class="hover:cursor-pointer pb-5">
                            All editions
                        </div>

                        <div @click="setFilter(name)" :class="filters.includes(name as never) ? 'italic' : 'not-italic'"
                            class="hover:cursor-pointer" v-for="(name, index) in uniqueAuthors" :key="index">
                            {{ name }}
                        </div>
                        <div class="pt-5">
                            To order a copy: <br> info@fanta-mln.it </div>
                    </section>
                </div>
            </div>
        </section>
        <!-- Content -->
        <section class="w-full pb-10">
            <div class="w-full grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
                <TransitionGroup name="list">
                    <div @click="openGallery(author)" v-for="(author, index) in filteredAuthors || []"
                        :key="author?.data?.gallery[0]?.image.url || index" class="col-span-1 hover:cursor-pointer">
                        <div class="flex flex-wrap w-full">
                            <img v-if="author?.data?.gallery[0]?.image.url"
                                class="object-cover aspect-[5/6] w-full hover:opacity-75 transition duration-100 lazyload "
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                :key="author.data.gallery[0].image.url" :data-src="author.data.gallery[0].image.url"
                                :height="author.data.gallery[0].image.dimensions.height"
                                :width="author.data.gallery[0].image.dimensions.width" />
                        </div>
                    </div>
                </TransitionGroup>
            </div>
            <!-- Gallery -->
            <transition name="fade">
                <section v-if="galleryOpen"
                    class="gallery fixed bg-[#dfdfdfcf] h-screen w-screen top-0 left-0 backdrop-blur-sm select-none z-30">
                    <div class="flex p-1 md:p-5 justify-center h-full max-h-screen">
                        <!-- Left -->
                        <div @click="prevImg" class="w-[2rem] md:w-[8rem] h-full relative hover:cursor-pointer">
                            <span class="left-0 absolute text-[1.5rem]
                        top-0 bottom-0 m-auto h-[2rem]">
                                &#8592;

                            </span>
                        </div>
                        <!-- Text Slide -->
                        <div v-show="currentImg === galleryAuthor?.data.gallery.length"
                            class="flex-1 md:grid md:grid-cols-2 flex justify-center flex-col transition">
                            <div class="col-span-1 md:h-full md:flex items-center">
                                <div>
                                    <p class="pb-5">{{ galleryAuthor?.data?.title }}</p>
                                    <PrismicRichText class="" :field="galleryAuthor?.data.Specifications" />
                                </div>
                            </div>
                            <div class="col-span-1 md:h-full md:flex items-center pt-5 md:pt-0">
                                <PrismicRichText class="" :field="galleryAuthor?.data.extended_description" />
                            </div>

                        </div>
                        <!-- Image -->
                        <div v-show="index === currentImg" v-for="(image, index) in galleryAuthor?.data.gallery"
                            :key="image.image.url"
                            class="flex-1 flex flex-col items-center justify-center md:justify-between transition">
                            <div class="md:flex-1  w-full flex justify-center md:mb-5 transition">
                                <div class="relative md:h-full w-full transition">
                                    <img class="md:absolute w-auto md:h-full m-auto md:top-0 bottom-0 left-0 right-0 transition"
                                        :src="image.image.url ?? ''" alt="" />
                                </div>
                            </div>
                            <div class="justify-self-start w-full">
                                <PrismicRichText class="justify-self-start w-full"
                                    :field="galleryAuthor?.data.Specifications" />
                            </div>

                        </div>
                        <!-- Right -->
                        <div @click="nextImg" class="w-[2rem] md:w-[8rem] h-full relative hover:cursor-pointer">
                            <span class="right-0 absolute text-[1.5rem] top-0 bottom-0 m-auto h-[2rem]">
                                &#8594;
                            </span>
                            <span @click="closeGallery"
                                class="right-0 fixed w-full text-st text-center md:text-right md:absolute top-5 z-10">
                                Close
                            </span>
                        </div>
                    </div>
                </section>
            </transition>
        </section>
        <!-- SideBar -->
        <section class="md:w-0 lg:w-[28rem] text-st">

        </section>
    </main>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.list-enter-active {
    transition: all 0.5s ease;
}

.list-enter-from {
    opacity: 0;

}
</style>