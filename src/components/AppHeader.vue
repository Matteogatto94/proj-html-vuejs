<script>
export default {
    name: 'AppHeader',
    data() {
        return {
            menu: [
                {
                    text: 'Home',
                    href: '#',
                },
                {
                    text: 'About',
                    href: '#'
                },
                {
                    text: 'Services',
                    href: '#'
                },
                {
                    text: 'Work',
                    href: '#'
                },
                {
                    text: 'Articles',
                    href: '#'
                }
            ]
        }
    }
}
</script>

<template>
    <header id="site_header" class="d-flex justify-content-between">
        <div class="logo">
            <img src="../assets/img/construction_logo_retina.png" alt="">
        </div>

        <div class="navbar_right">
            <a :href="item.href" v-for="item in menu" :class="item.text === 'Home' ? 'active' : ''">
                {{ item.text }}
            </a>
            <a class="bg_a" href="#">Get Quote</a>
        </div>
    </header>
</template>

<style lang="scss">

</style>