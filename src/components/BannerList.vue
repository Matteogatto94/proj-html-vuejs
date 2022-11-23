<script>
import BannerItem from './BannerItem.vue'
export default {
    name: 'BannerList',
    components: {
        BannerItem
    }
}
</script>

<template>
    <section class="specialist_modern text-center">
        <div class="container">
            <div class="title_spec">
                <h2>Specialists in Modern Construction</h2>
            </div>
            <div class="description_spec">
                <p>Lorem Ipsum dolor sit amet, consecteutur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    ed
                    dolore magna aliqua ut enim ad minim veniam</p>
            </div>
        </div>

        <div class="banner">
            <div class="row row-cols-4">
                <BannerItem />
            </div>
        </div>

    </section>

</template>

<style lang="scss">

</style>