<script>
import JumbotronQuote from './JumbotronQuote.vue';
import BannerList from './BannerList.vue'
export default {
    name: 'AppMain',
    components: {
        JumbotronQuote,
        BannerList
    }
}
</script>

<template>
    <main id="site_main">
        <JumbotronQuote />
        <BannerList />
    </main>
</template>

<style lang="scss">

</style>