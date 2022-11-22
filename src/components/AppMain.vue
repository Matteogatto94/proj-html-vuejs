<script>
import JumbotronQuote from './JumbotronQuote.vue';
import BannerList from './BannerList.vue';
import HomeWork from './HomeWork.vue'
import RecentWork from './RecentWork.vue'
import CoreValues from './CoreValues.vue'
import HomeOwners from './HomeOwners.vue'
import LatestNews from './LatestNews.vue'
import TrustedPartners from './TrustedPartners.vue'
import BuildingSpaces from './BuildingSpaces.vue'
export default {
    name: 'AppMain',
    components: {
        JumbotronQuote,
        BannerList,
        HomeWork,
        RecentWork,
        CoreValues,
        HomeOwners,
        LatestNews,
        TrustedPartners,
        BuildingSpaces
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
        <HomeOwners />
        <LatestNews />
        <TrustedPartners />
        <BuildingSpaces />
    </main>
</template>

<style lang="scss">

</style>