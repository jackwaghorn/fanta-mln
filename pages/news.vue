<script setup lang="ts">
const router = useRouter();
const prismic = usePrismic();
const { data: page } = useAsyncData("[news]", () =>
    prismic.client.getSingle("news")
);

useHead({
    title: 'Fanta-MLN | News',
    meta: [
        {
            name: "description",
            content: page.value?.data.meta_description || '',
        },
    ],
});
const categorizeAndSortByDate = computed(() => {
    const categorizedItems: { year: number; items: any[] }[] = [];
    const allItems = page.value?.data.news_items.sort((a, b) => new Date(b.date_to) - new Date(a.date_to));
    allItems?.forEach((obj) => {
        const year = new Date(String(obj.date_from)).getFullYear();
        const yearCategory = categorizedItems.find((category) => category.year === year);

        if (!yearCategory) {
            categorizedItems.push({ year: year, items: [obj] });
        } else {
            yearCategory.items.push(obj);
        }
    });
    // Sort the categorized items by year

    const sortedCategories = categorizedItems.sort((a, b) => b.year - a.year);
    return sortedCategories;
});

function dateChecker(e: number) {
    const date = new Date(e);
    const today = new Date();
    if (date > today) {
        return false;
    } else {
        return true;
    }
}

function yearChecker(e: number) {
    const date = e
    const today = new Date().getFullYear();
    if (date > today) {
        return false;
    } else if (date == today) {
        return false;
    } else {
        return true;
    }
}

function openLink(news: any) {
    if (news.link_to_page.uid) {
        router.push(`/${news.link_to_page.type}s/${news.link_to_page.uid}`)
    } else return
}

</script>

<template>
    <div>
        <NuxtLayout title="News">
            <section class="w-full flex justify-center">
                <div class="w-full">
                    <div v-for="(year, index) in categorizeAndSortByDate" :key="index"
                        class="w-full flex flex-col flex-wrap pb-5">
                        <div :class="[yearChecker(year.year) ? 'opacity-50' : 'opacity-1']" class="pb-5 text-st w-full">
                            {{ year.year }}
                        </div>
                        <div @click="openLink(news)" :class="[dateChecker(news.date_to) ? 'opacity-50' : 'opacity-1']"
                            v-for="(news, index) in year?.items || []" :key="index" class="pb-7 text-news flex hover:italic">
                            <span class="me-1">&#8594; </span>
                            {{ }}
                            <div>
                                <PrismicRichText :field="news.title" />
                                {{ new Date(news.date_from).toLocaleDateString('en-gb', { month: "long", day: "numeric" })
                                }} —
                                {{ new Date(news.date_to).toLocaleDateString('en-gb', {
                                    month: "long", day: "numeric", year:
                                        "numeric"
                                }) }} <span class="text-news-type">{{ news.type }}</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </NuxtLayout>
    </div>
</template>
