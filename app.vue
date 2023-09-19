<script setup>
import 'lazysizes';
const route = useRoute()
</script>
<template>
  <UiNavBar />
  <NuxtPage :page-key="route => route.fullPath" />
</template>

<style>
html,
body,
#__nuxt {
  height: 100%;

}

.router-link-active {
  font-style: italic;
}
a:hover {
  font-style: italic;
}
:root {
  --plyr-color-main: #19295A;
}
.text-st {
        font-size: 0.95rem;
        line-height: 1.15rem;
    }
    @media (min-width: 768px) { 
        .text-st {
            font-size: 1.2rem;
            line-height: 1.4rem;
        }
     }

     .text-t {
        font-size: 0.8rem;
        line-height: 0.9rem;
    }
    @media (min-width: 768px) { 
        .text-t {
            font-size: 0.9rem;
            line-height: 1.1rem;
        }
     }
</style>