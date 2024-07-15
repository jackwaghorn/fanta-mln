<script setup lang="ts">
import type { Fancybox as FancyboxType } from "@fancyapps/ui/types";
import * as Fancyapps from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const Fancybox: typeof FancyboxType = Fancyapps.Fancybox;
const closeBtn = "<svg class='pe-2 w-[3rem] md:w-[4rem]' width='50' viewBox='0 0 42 13' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M5.76788 12.9061C4.16788 12.9061 2.87721 12.3568 1.89588 11.2581C0.925208 10.1594 0.439875 8.70876 0.439875 6.90609C0.439875 5.10343 0.925208 3.65276 1.89588 2.55409C2.87721 1.45543 4.16788 0.906094 5.76788 0.906094C7.05854 0.906094 8.14121 1.25809 9.01588 1.96209C9.90121 2.66609 10.4185 3.59409 10.5679 4.74609H9.01588C8.86654 3.97809 8.49321 3.35943 7.89587 2.89009C7.30921 2.42076 6.59988 2.18609 5.76788 2.18609C4.62654 2.18609 3.70388 2.61809 2.99988 3.48209C2.30654 4.34609 1.95988 5.48743 1.95988 6.90609C1.95988 8.32476 2.30654 9.46609 2.99988 10.3301C3.70388 11.1941 4.62654 11.6261 5.76788 11.6261C6.57854 11.6261 7.28254 11.3861 7.87988 10.9061C8.47721 10.4261 8.85588 9.79143 9.01588 9.00209H10.5679C10.4079 10.1754 9.88521 11.1194 8.99988 11.8341C8.12521 12.5488 7.04788 12.9061 5.76788 12.9061ZM12.4813 12.7461V1.06609H13.8093V12.7461H12.4813ZM22.7916 11.7061C22.045 12.5061 21.069 12.9061 19.8636 12.9061C18.6583 12.9061 17.6823 12.5061 16.9356 11.7061C16.189 10.9061 15.8156 9.85009 15.8156 8.53809C15.8156 7.22609 16.1836 6.17543 16.9196 5.38609C17.6663 4.58609 18.6476 4.18609 19.8636 4.18609C21.0796 4.18609 22.0556 4.58609 22.7916 5.38609C23.5383 6.17543 23.9116 7.22609 23.9116 8.53809C23.9116 9.85009 23.5383 10.9061 22.7916 11.7061ZM19.8636 11.7861C20.685 11.7861 21.325 11.4928 21.7836 10.9061C22.2423 10.3194 22.4716 9.53009 22.4716 8.53809C22.4716 7.52476 22.237 6.73543 21.7676 6.17009C21.2983 5.59409 20.6636 5.30609 19.8636 5.30609C19.0423 5.30609 18.4023 5.59943 17.9436 6.18609C17.485 6.77276 17.2556 7.55676 17.2556 8.53809C17.2556 9.56209 17.4903 10.3621 17.9596 10.9381C18.429 11.5034 19.0636 11.7861 19.8636 11.7861ZM29.0068 12.9061C27.9188 12.9061 27.0441 12.6288 26.3828 12.0741C25.7321 11.5194 25.4068 10.7834 25.4068 9.86609H26.8468C26.8468 10.4741 27.0388 10.9488 27.4228 11.2901C27.8174 11.6208 28.3454 11.7861 29.0068 11.7861C29.6041 11.7861 30.0681 11.6741 30.3988 11.4501C30.7401 11.2261 30.9108 10.9221 30.9108 10.5381C30.9108 10.4101 30.8948 10.2981 30.8628 10.2021C30.8308 10.0954 30.7934 10.0048 30.7508 9.93009C30.7081 9.85543 30.6334 9.78609 30.5268 9.72209C30.4308 9.64743 30.3401 9.59409 30.2548 9.56209C30.1801 9.51943 30.0521 9.47143 29.8708 9.41809C29.7001 9.35409 29.5561 9.31143 29.4388 9.29009C29.3321 9.25809 29.1508 9.21009 28.8948 9.14609C28.6494 9.08209 28.4521 9.02876 28.3028 8.98609C27.4388 8.75143 26.8041 8.46876 26.3988 8.13809C25.9934 7.79676 25.7908 7.28476 25.7908 6.60209C25.7908 5.87676 26.0734 5.29543 26.6388 4.85809C27.2148 4.41009 27.9614 4.18609 28.8788 4.18609C29.8601 4.18609 30.6494 4.44209 31.2468 4.95409C31.8441 5.46609 32.1428 6.14343 32.1428 6.98609H30.7348C30.7348 6.45276 30.5641 6.04209 30.2228 5.75409C29.8921 5.45543 29.4441 5.30609 28.8788 5.30609C28.3348 5.30609 27.9081 5.41809 27.5988 5.64209C27.3001 5.85543 27.1508 6.14876 27.1508 6.52209C27.1508 6.89543 27.2948 7.17276 27.5828 7.35409C27.8814 7.52476 28.3668 7.69543 29.0388 7.86609C30.1801 8.16476 30.9481 8.43143 31.3428 8.66609C32.0148 9.08209 32.3508 9.66876 32.3508 10.4261C32.3508 11.1728 32.0414 11.7754 31.4228 12.2341C30.8041 12.6821 29.9988 12.9061 29.0068 12.9061ZM37.7371 12.9061C36.5425 12.9061 35.5771 12.5061 34.8411 11.7061C34.1158 10.8954 33.7531 9.83409 33.7531 8.52209C33.7531 7.22076 34.1105 6.17543 34.8251 5.38609C35.5505 4.58609 36.4998 4.18609 37.6731 4.18609C38.8145 4.18609 39.7371 4.55943 40.4411 5.30609C41.1451 6.04209 41.4971 7.01276 41.4971 8.21809C41.4971 8.46343 41.4918 8.67676 41.4811 8.85809H35.1931C35.1931 9.73276 35.4278 10.4421 35.8971 10.9861C36.3665 11.5194 36.9798 11.7861 37.7371 11.7861C38.3665 11.7861 38.8571 11.6581 39.2091 11.4021C39.5611 11.1354 39.8331 10.7141 40.0251 10.1381H41.3531C41.1931 10.9701 40.7825 11.6421 40.1211 12.1541C39.4598 12.6554 38.6651 12.9061 37.7371 12.9061ZM35.1931 7.77009H40.0091C39.9771 7.02343 39.7531 6.42609 39.3371 5.97809C38.9211 5.53009 38.3665 5.30609 37.6731 5.30609C36.9691 5.30609 36.3931 5.53543 35.9451 5.99409C35.4971 6.44209 35.2465 7.03409 35.1931 7.77009Z' fill='#19295A'/></svg>"



const prismic = usePrismic();
const { data: page } = useAsyncData("[edition]", () =>
    prismic.client.getByType("edition", {
        pageSize:200
    }), {
    transform: (response) => {
        return response?.results.sort((a: any, b: any) =>
            a?.data?.authors[0]?.author?.split(' ')[1].localeCompare(b?.data?.authors[0]?.author?.split(' ')[1])
        )
    }
}
);

const { data: editionsHomepage } = useAsyncData("[editions_homepage]", () =>
    prismic.client.getSingle("editions_homepage")
);
const uniqueAuthors = computed(() => {
    const names = page.value?.map((book) => {
        return book?.data?.authors.map((author) => {
            return author?.author;
        })
    }).flat();

    return names?.filter((value, index, self) => {
        return self.indexOf(value) === index;
    })

})

const filters = ref([]);

const filteredAuthors = computed(() => {
    const filtered = page.value || [];
    if (filters.value.length === 0) {
        return filtered;
    } else {
        return filtered.filter((book) => {
            return book.data.authors.some((author) => {
                return filters.value.includes(author?.author as never);
            });
        });

    }
});

function setFilter(val: any) {
    filters.value = [val as never]
}
function resetFilter() {
    filters.value = []
}

onMounted(() => {
    const options = {
        caption: (fancybox: any, slide: any): any => {
            const figurecaption = slide.triggerEl?.querySelector("figcaption");

            return figurecaption ? figurecaption.innerHTML : slide.caption || "";
        },
        Thumbs: false,
        animated: false,
        Toolbar: {
            display:
            {
                left: [],
                middle: [""],
                right: [
                    "iterateZoom",
                    "close",
                ],
            },
            items: {
                close: {
                    tpl: closeBtn
                },

            },
        },
    }

    Fancybox.bind("[data-fancybox]", options);

})

useHead({
    title: "Fanta-MLN | Exhibitions",
});

</script>
<template>
    <div>
        <!-- Top spacer -->
        <div class="w-full h-[3rem] md:h-[5rem]">
        </div>
        <main class="p-3 md:p-5 flex md:flex-nowrap flex-wrap">
            <!-- SideBar -->
            <section class="md:w-[28rem] w-full h-auto text-st pb-6">
                <div class="md:sticky top-[6.25rem]">
                    <div>
                        <section class="text-st md:pe-5 pe-3">
                            <div @click="resetFilter" class="hover:cursor-default pb-5">
                                All editions
                            </div>

                            <div @click="setFilter(name)" :class="filters.includes(name as never) ? 'italic' : 'not-italic'"
                                class="hover:cursor-default" v-for="(name, index) in uniqueAuthors" :key="index">
                                {{ name }}
                            </div>
                            <div class="pt-5">
                                {{ editionsHomepage?.data?.contact_text }}</div>
                        </section>
                    </div>
                </div>
            </section>
            <!-- Content -->
            <section class="w-full pb-10">
                <div class="w-full grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
                    <TransitionGroup name="list">
                        <div v-for="(author, index) in filteredAuthors || []"
                            :key="author?.data?.gallery[0]?.image.url || index" class="col-span-1 hover:cursor-default">
                            <a :data-fancybox="`gallery-${index}`" :data-src="`#description-${index}`"
                                :href="`${author?.data?.gallery[0]?.image.url}?&cs=srgb`" class="flex flex-wrap w-full">

                                <NuxtImg v-if="author?.data?.gallery[0]?.image?.dimensions?.width !== undefined"
                                    loading="lazy"
                                    class="object-cover aspect-[5/6] w-full hover:opacity-75 transition duration-100"
                                    placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                                    sizes="md:50vw lg:30vw xl:25vw"
                                    :src="`${author?.data?.gallery[0]?.image?.url}?&cs=srgb`"
                                    :height="author?.data?.gallery[0]?.image?.dimensions.height"
                                    :width="author?.data?.gallery[0]?.image?.dimensions.width" />

                            </a>

                            <figure :data-fancybox="`gallery-${index}`" v-for="(image, imgI) in author?.data?.gallery"
                                :data-src="image.image.url || ''" class="hidden">
                                <figcaption class="w-full">
                                    <!-- <PrismicRichText class="text-st " :field="author?.data.Specifications" /> -->
                                </figcaption>
                            </figure>
                            <!-- Specifications slide -->
                            <div :id="`description-${index}`" class="hidden spec-slide">
                                <div class="flex-1 md:grid md:grid-cols-2 flex justify-center flex-col">
                                    <div class="col-span-1 md:h-full md:flex items-center">
                                        <div>
                                            <p class="pb-5 text-st">{{ author?.data?.title }}</p>
                                            <PrismicRichText class="text-st" :field="author?.data.Specifications" />
                                            <PrismicLink target="_blank" class="text-st underline decoration-1"
                                                :field="author?.data.download_link">{{ author?.data.download_link.url ?
                                                    'Download' : '' }}</PrismicLink>

                                        </div>
                                    </div>
                                    <div class="col-span-1 md:h-full md:flex items-center pt-5 md:pt-0">
                                        <PrismicRichText class="text-st" :field="author?.data.extended_description" />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </TransitionGroup>
                </div>

            </section>
            <!-- SideBar -->
            <section class="md:w-0 lg:w-[28rem] text-st">

            </section>
        </main>
    </div>
</template>
<style >
.fancybox__caption {
    bottom: 0;
    width: 100%;
}

.fancybox__caption {
    max-width: calc(100% - 2rem);
}

.spec-slide {
    max-width: calc(100% - 2rem);
}

@media (min-width: 768px) {
    .spec-slide {
        max-width: calc(100% - 10rem);
    }

    .fancybox__caption {
        max-width: calc(100% - 10rem);
    }
}

.fancybox__content {
    background: transparent !important;
}

.is-next,
.is-prev {
    background: none !important;
    width: 30px;
    height: 30px;
    padding: 0 !important;
    border: none !important;
    box-shadow: none !important;
}

.is-next svg,
.is-prev svg {
    display: none;
}

.is-next::before,
.is-prev::before {
    position: absolute;
    right: 0;
    content: "";
    display: inline-block;
    background-size: auto;
    background-repeat: no-repeat;
    background-size: 34px 12px;
    background-position: center;
}

.is-next::before {
    background-image: url('~/assets/next.svg');
}

.is-prev::before {
    background-image: url('~/assets/prev.svg');
}

.f-button {
    box-shadow: none;
}

.fancybox__backdrop {
    background: #dbdbdbe4;
}

.fancybox__caption {
    color: #19295A;
}

.f-button {
    background: transparent;
    color: #19295A;
}

.f-button svg {
    opacity: 1;
}

.list-enter-active {
    transition: all 0.5s ease;
}

.list-enter-from {
    opacity: 0;

}
</style>