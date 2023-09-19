<script setup>
const open = ref(false);
const links = ref([
    {
        title: "News",
        url: "/news",
    },
    {
        title: "Exhibitions",
        url: "/exhibitions",
    },
    {
        title: "Artists",
        url: "/artists",
    },
    {
        title: "Editions/Publications",
        url: "/editions",
    },
    {
        title: "Fairs",
        url: "/fairs",
    },
    {
        title: "Info",
        url: "/info",
    },
]);
const { data: weather } = await useFetch('https://api.open-meteo.com/v1/forecast?latitude=45.4643&longitude=9.1895&daily=sunrise,sunset&current_weather=true&timezone=Europe%2FBerlin')

const weathers = ref({
    0: {
        type: "clearSky",
        icon: 0
    },

    1: {
        type: "mainlyClear",
        icon: 1
    },

    2: {
        type: "partlyCloudy",
        icon: 2
    },

    3: {
        type: "overcast",
        icon: 3
    },

    45: {
        type: "fog",
        icon: 45
    },

    48: {
        type: "depositingTimeFog",
        icon: 45
    },

    51: {
        type: "lightDrizzle",
        icon: 51
    },

    53: {
        type: "moderateDrizzle",
        icon: 53
    },

    55: {
        type: "denseDrizzle",
        icon: 53
    },

    56: {
        type: "lightFreezingDrizzle",
        icon: 55
    },

    57: {
        type: "moderateOrDenseFreezingDrizzle",
        icon: 55
    },

    61: {
        type: "lightRain",
        icon: 55
    },

    63: {
        type: "moderateRain",
        icon: 55
    },

    65: {
        type: "heavyRain",
        icon: 61
    },

    66: {
        type: "lightFreezingRain",
        icon: 55
    },

    67: {
        type: "moderateOrHeavyFreezingRain",
        icon: 80
    },

    71: {
        type: "slightSnowfall",
        icon: 71
    },

    73: {
        type: "moderateSnowfall",
        icon: 71
    },

    75: {
        type: "heavySnowfall",
        icon: 86
    },

    77: {
        type: "snowGrains",
        icon: 71
    },

    80: {
        type: "slightRainShowers",
        icon: 51
    },

    81: {
        type: "moderateRainShowers",
        icon: 53
    },

    82: {
        type: "heavyRainShowers",
        icon: 80
    },

    85: {
        type: "slightSnowShowers",
        icon: 71
    },

    86: {
        type: "heavySnowShowers",
        icon: 71
    },

    95: {
        type: "thunderstormSlightOrModerate",
        icon: 95
    },

    96: {
        type: "thunderstormStrong",
        icon: 95
    },
    99: {
        type: "thunderstormHeavy",
        icon: 95
    }
})
watch(open,()=>{
    if(open.value) {
        document.body.classList.add("overflow-hidden")
        document.body.classList.add("md:overflow-auto")
    } else {
        document.body.classList.remove("overflow-hidden")
        document.body.classList.remove("md:overflow-auto")
    }
})
</script>
<template>
    <!-- Logo -->
    <header class="fixed pt-5 p-3 md:p-5 top-0 left-0 z-20">
        <NuxtLink to="/" class="w-[90px] md:w-[130px] absolute">
            <svg viewBox="0 0 130 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M121.42 22.41H106.19L113.83 4.64L121.42 22.41ZM114.73 0H112.83L97.56 34.93H100.56L104.75 25.2H122.75L126.95 34.93H129.95L114.73 0ZM93.73 2.79V34.93H90.73V2.79H81.73V0H102.9V2.79H93.73ZM75.41 0H78.41V34.93H76.51L50.15 5.79V34.93H47.15V0H49L75.4 29.19L75.41 0ZM35.41 22.41H20.21L27.85 4.64L35.41 22.41ZM28.74 0H26.85L11.58 34.93H14.58L18.77 25.2H36.77L41 34.93H44L28.74 0ZM3 16.92V34.92H0V0H15.27V2.79H3V14.27H15V16.92H3Z"
                    fill="#212B55" />
            </svg>
        </NuxtLink>
    </header>
    <!-- Navigation -->
    <header @click="open = !open" class="fixed top-0 right-0 hover:cursor-pointer">
        <button class="absolute p-3 pt-7 right-0 top-0 flex flex-col items-center justify-center z-20">

            <div class="w-8">
                <span class="block absolute h-px w-8  transform transition duration-300 ease-in-out bg-primary"
                    :class="[open ? 'rotate-[45deg]' : '-translate-y-2.5']"></span>
                <span class="block absolute  h-px w-8    transform transition duration-300 ease-in-out bg-primary"
                    :class="[open ? 'opacity-0' : '']"></span>
                <span class="block absolute  h-px w-8  transform  transition duration-300 ease-in-out bg-primary"
                    :class="[open ? 'rotate-[-45deg]' : ' translate-y-2.5']"></span>
            </div>
        </button>
        <transition name="slide">
            <section v-if="open"
                class="h-auto w-full md:w-auto p-3 md:p-0 right-0 fixed md:right-5 pt-16 top-0 md:top-20 bg-white">
                <ul class="text-st border-t border-b divide-y divide-primary border-primary md:text-center">
                    <li v-for="link in links" :key="link" class=" md:px-2" >
                        <NuxtLink class=""  :to="link.url">{{ link.title }}</NuxtLink>
                    </li>
                </ul>
            </section>
        </transition>
    </header>
    <!-- Newsletter button -->
    <footer class="fixed p-3 md:p-5 bottom-0 left-0 z-20">
        <NuxtLink to="/newsletter" class="text-st">
            &#8594; Subscribe
        </NuxtLink>
    </footer>
    <!-- Weather -->
    <footer class="fixed p-3 md:p-5 bottom-0 right-0 z-20">
        <div class="text-st inline-block">
            <span><img class="w-[1.5rem] md:w-[1.8rem] inline-block weather-icon"
                    :src="`/img/weather/${weathers[weather?.current_weather.weathercode].icon}.svg`" /></span>
            {{ Math.round(weather?.current_weather.temperature) }}°C
        </div>
    </footer>
</template>

<style scoped>
.weather-icon {
    filter: invert(17%) sepia(10%) saturate(6207%) hue-rotate(197deg) brightness(86%) contrast(99%);
}
.slide-enter-active {
    transition: all 0.3s ease-out;
}

.slide-leave-active {
    transition: all 0.2s ease-in;
}

.slide-enter-from,
.slide-leave-to {
    transform: translateY(-100px);
    opacity: 0;
}

@media only screen and (min-width: 768px) {

    .slide-enter-from,
    .slide-leave-to {
        transform: translateX(100px);
        opacity: 0;
    }
}
</style>

