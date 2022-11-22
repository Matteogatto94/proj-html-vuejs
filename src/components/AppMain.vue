<script>
import JumbotronQuote from './JumbotronQuote.vue';
import BannerList from './BannerList.vue';
import HomeWork from './HomeWork.vue'
import RecentWork from './RecentWork.vue'
import CoreValues from './CoreValues.vue'
export default {
    name: 'AppMain',
    components: {
        JumbotronQuote,
        BannerList,
        HomeWork,
        RecentWork,
        CoreValues
    }
}
</script>

<template>
    <main id="site_main">
        <JumbotronQuote />
        <BannerList />
        <HomeWork />
        <RecentWork />
        <CoreValues />
    </main>
</template>

<style lang="scss">

</style>