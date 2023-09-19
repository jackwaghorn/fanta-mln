<script setup>
import Plyr from 'plyr';
import "plyr/dist/plyr.css";
// const video = ref(null)
const props = defineProps(['link'])

onMounted(() => {
    const player = new Plyr("#video", {
        controls: ['play-large','play', 'progress', 'pip', 'airplay', 'fullscreen']
    });

})

</script>
<template>
    <div class="md:absolute w-auto h-full m-auto left-0 right-0">
        <div class="grid content-center h-full">
        <div id="video" v-html="link.html"></div>
        </div>
    </div>
</template>

