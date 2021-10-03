<template>
    <marquee-text :repeat="4">
        <span>Will Rhodes</span>
        <span>Design Portfolio</span>
        <span><router-link to="/">Projects</router-link></span>
        <span><a href="mailto:will@willrhodes.blue">will@willrhodes.blue</a></span> 
    </marquee-text>
</template>
<script>
import MarqueeText from 'vue-marquee-text-component'

export default ({
    name: 'SiteHeader',
    components: {
        MarqueeText
    }
})
</script>

<style scoped>

    span{
        margin-right: 3rem;
    }

</style>
