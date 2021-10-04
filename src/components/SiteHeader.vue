<template>
    <marquee-text class="marquee" :repeat="6" :paused = "hover" @mouseover="hover = true" @mouseleave="hover = false">
        <span>Will Rhodes</span>
        <span><router-link to="/">Projects</router-link></span>
        <span>Design Portfolio</span>
        <span><a href="mailto:will@willrhodes.blue">will@willrhodes.blue</a></span> 
    </marquee-text>
</template>
<script>
import MarqueeText from 'vue-marquee-text-component'

export default ({
    name: 'SiteHeader',
    components: {
        MarqueeText
    },
    data() {
        return {
            hover: false,
        };
    }
})
</script>

<style scoped>

    span{
        margin-right: 3rem;
    }

    .marquee{
        padding: 1rem;
        border-bottom: 2px solid black;
    }

</style>
