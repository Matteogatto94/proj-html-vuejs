<script>
export default {
    name: 'TrustedPartners',
    data() {
        return {
            items: [
                {
                    img: 'home_logo_1.png'
                },
                {
                    img: 'home_logo_2.png'
                },
                {
                    img: 'home_logo_3.png'
                },
                {
                    img: 'home_logo_4.png'
                },
                {
                    img: 'home_logo_5.png'
                }
            ]
        }
    },
    methods: {
        getImageUrl(name) {
            return new URL(`../assets/img/${name}`, import.meta.url).href
        }
    }
}
</script>

<template>
    <section class="trusted_partners">
        <div class="container">
            <div class="title_trusted_partners text-center py-5">
                <h2 class="title_trusted text-dark">Trusted Partners</h2>
                <p class="font_trusted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco.</p>
            </div>

            <div class="row">
                <div class="col" v-for="item in items">
                    <img :src="getImageUrl(item.img)">
                </div>
            </div>


        </div>
    </section>
</template>

<style lang="scss">

</style>