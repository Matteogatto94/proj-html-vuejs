<script>
import { store } from '../store.js'
export default {
    name: 'TrustedPartners',
    data() {
        return {
            store
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
                <div class="col" v-for="item in store.partners">
                    <img :src="store.getImageUrl(item.img)">
                </div>
            </div>


        </div>
    </section>
</template>

<style lang="scss">

</style>