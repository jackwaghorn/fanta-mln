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

.text-news {
  font-size: 0.95rem;
  line-height: 1.15rem;
}

@media (min-width: 768px) {
  .text-st {
    font-size: 1.1rem;
    line-height: 1.4rem;
  }

  .text-news {
    font-size: 1rem;
    line-height: 1.2rem;
  }
}

.text-t {
  font-size: 0.8rem;
  line-height: 0.9rem;
}

.text-news-type {
  font-size: 0.8rem;
  line-height: 0.9rem;
}

@media (min-width: 768px) {
  .text-t {
    font-size: 0.9rem;
    line-height: 1.1rem;
  }

  .text-news-type {
    font-size: 0.75rem;
    line-height: 1rem;
  }
}


.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

a:hover {
  cursor: default;
}

*:hover {
  cursor: default;
}

.is-compact .fancybox__footer {
  background: transparent !important;
}
</style>