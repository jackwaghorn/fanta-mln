<script setup lang="ts">
const props = defineProps(['gallery'])
const currentImg = ref(0)
const galleryOpen = ref(false)
function openGallery(index: number) {
    window.addEventListener("keydown", handleKeyDown)
    currentImg.value = index
    galleryOpen.value = true
    document.body.style.overflow = "hidden"
}
function closeGallery() {
  
    document.body.style.overflow = "auto"
    galleryOpen.value = false
}
function handleKeyDown(event: any) {
    if (event.key === "ArrowLeft") {
        prevImg();
    } else if (event.key === "ArrowRight") {
        nextImg();
    }
}
function prevImg() {
    currentImg.value === 0 ? currentImg.value = props.gallery.length - 1 : currentImg.value--
}

function nextImg() {
    currentImg.value === props.gallery.length - 1 ? currentImg.value = 0 : currentImg.value++
}
onBeforeUnmount(() => {
    window.removeEventListener("keydown", handleKeyDown);
})
</script>
<template>
    <section>
        <div class="w-full grid grid-cols-2 xl:grid-cols-3 gap-3 md:gap-5">
            <div v-for="(image, index) in gallery" :key="index" class="text-st col-span-1">
                <div class="flex flex-wrap w-full hover:cursor-pointer">
                    <img @click="openGallery(index)" v-if="image.image.url" data-expand="-10"
                        class="object-cover aspect-[3/2] w-full lazyload hover:opacity-75 transition duration-100"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                        :data-srcset="`${image.image.url}&?&w=500&fit=crop 1024w, ${image.image.url}&?&w=384&fit=crop 640w,`"
                        sizes="(min-width: 640px) 50vw, 33vw" :height="image.image.dimensions.height"
                        :width="image.image.dimensions.width" />
                    <img @click="openGallery(index)" v-else
                        class="object-cover aspect-[3/2] w-full lazyload hover:opacity-75 transition duration-100"
                        :data-src="image.video_embed.thumbnail_url" />
                </div>
            </div>
        </div>
        <transition name="fade">
            <section v-if="galleryOpen"
                class="gallery fixed z-30 bg-[#dfdfdfcf] h-screen w-screen top-0 left-0 backdrop-blur-sm select-none">
                <div class="flex p-1 md:p-5 justify-center h-full max-h-screen">
                    <!-- Left -->
                    <div @click="prevImg" class="w-[2rem] md:w-[8rem] h-full relative hover:cursor-pointer">
                        <span class="left-0 absolute text-[1.5rem]
                        top-0 bottom-0 m-auto h-[2rem]">
                            &#8592;

                        </span>
                    </div>
                    <!-- Image -->
                    <div class="flex-1 flex flex-col items-center justify-center md:justify-between transition">
                        <div class="md:flex-1  w-full flex justify-center md:mb-5 transition">
                            <div class="relative md:h-full w-full transition">
                                <img class="md:absolute w-auto md:h-full m-auto md:top-0 bottom-0 left-0 right-0 transition"
                                    v-if="gallery[currentImg].image.url"
                                    :src="gallery[currentImg].image.url ?? ''" alt="" />
                                <UiVideoPlyr v-else :link="gallery[currentImg].video_embed" />
                            </div>
                        </div>
                        <div class="text-st">
                            <PrismicRichText :field="gallery[currentImg].media_caption" />
                        </div>

                    </div>
                    <!-- Right -->
                    <div @click="nextImg" class="w-[2rem] md:w-[8rem] h-full relative hover:cursor-pointer">
                        <span class="right-0 absolute text-[1.5rem] top-0 bottom-0 m-auto h-[2rem]">
                            &#8594;
                        </span>
                        <span @click="closeGallery"
                            class="right-0 fixed w-full text-center md:text-right md:absolute z-10 top-4 md:top-0 text-st">
                            Close
                        </span>
                    </div>
                </div>
            </section>
        </transition>
    </section>
</template>