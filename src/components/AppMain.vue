<script>
import JumbotronQuote from './JumbotronQuote.vue';
import BannerList from './BannerList.vue';
import HomeWork from './HomeWork.vue'
export default {
    name: 'AppMain',
    components: {
        JumbotronQuote,
        BannerList,
        HomeWork
    }
}
</script>

<template>
    <main id="site_main">
        <JumbotronQuote />
        <BannerList />
        <HomeWork />
    </main>
</template>

<style lang="scss">

</style>