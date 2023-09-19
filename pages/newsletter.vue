<script setup lang="ts">
import { components } from "~/slices";

const prismic = usePrismic();
const { data: page } = useAsyncData("[newsletter]", () =>
    prismic.client.getSingle("newsletter")
);
useHead({
    title: 'Fanta-MLN | Newsletter',
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
    <NuxtLayout title="Newsletter">
        <section class="w-full flex justify-center">
            <div class="w-full lg:w-10/12 xl:w-8/12">

        <PrismicRichText class="text-st" :field="page?.data.text_box" />
        <form class="pt-10" novalidate>
            <div class="w-full flex flex-wrap justify-center">
                <input
                    class="w-full border-b border-px border-primary py-3 focus:outline-none appearance-none text-center text-t"
                    type="text" name="name" placeholder="Name" spellcheck="false" autocomplete="false" required
                    minlength="1" />

                <input
                    class="w-full border-b border-px border-primary py-3 focus:outline-none appearance-none text-center text-t"
                    type="text" name="surname" placeholder="Surname" spellcheck="false" autocomplete="false" required
                    minlength="1" />

                <input
                    class="w-full border-b border-px border-primary py-3 focus:outline-none appearance-none text-center text-t"
                    type="email" name="mail" placeholder="E-mail" spellcheck="false" autocomplete="false" minlength="1" />
                <input
                    class="w-auto border hover:bg-primary hover:text-white hover:cursor-pointer border-primary border-px p-1 px-5 my-4"
                    type="button" value="Submit" />
            </div>
        </form>

        <SliceZone wrapper="main" :slices="page?.data.slices ?? []" :components="components" />

    </div>
        </section>
    </NuxtLayout>
</div>
</template>
<style
 scoped>
 ::placeholder {
     /* Chrome, Firefox, Opera, Safari 10.1+ */
     color: #19295A;
     opacity: 1;
     /* Firefox */
 }

 :-ms-input-placeholder {
     /* Internet Explorer 10-11 */
     color: #19295A;
 }

 ::-ms-input-placeholder {
     /* Microsoft Edge */
     color: #19295A;
 }
</style>