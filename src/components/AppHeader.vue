<script>
import { store } from '../store.js'
export default {
    name: 'AppHeader',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <header id="site_header" class="d-flex justify-content-between">
        <div class="logo_header">
            <img src="../assets/img/construction_logo_retina.png" alt="">
        </div>

        <div class="navbar_right">
            <a :href="item.href" v-for="item in store.menu" :class="item.text === 'Home' ? 'active' : ''">
                {{ item.text }}
            </a>
            <a class="bg_quote" href="#">Get Quote</a>
        </div>
    </header>
</template>

<style lang="scss">

</style>