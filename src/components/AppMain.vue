<script>
import JumbotronQuote from './JumbotronQuote.vue';
import BannerList from './BannerList.vue';
import HomeWork from './HomeWork.vue'
import RecentWork from './RecentWork.vue'
export default {
    name: 'AppMain',
    components: {
        JumbotronQuote,
        BannerList,
        HomeWork,
        RecentWork
    }
}
</script>

<template>
    <main id="site_main">
        <JumbotronQuote />
        <BannerList />
        <HomeWork />
        <RecentWork />
    </main>
</template>

<style lang="scss">

</style>