<script>
import { store } from '../store.js'
export default {
    name: 'FooterUpItem',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="col">
        <img src="../assets/img/footer-logo.png" alt="">
        <p class="py-5 description_footer_up">We are specialists in the construction of unique and exclusive
            properties. Our work
            inspires. We pride ourselves on delivering outstanding quality and design for leading clients across
            the world.
        </p>
        <div class="btn_footer">
            <a href="#">LEARN MORE</a>
        </div>
    </div>
    <div class="col">
        <div class="title_footer_up text-left">
            <h6>LATEST TWEETS</h6>
        </div>
        <div class="card_footer d-flex">
            <div class="logo">
                <img src="../assets/img/3a74ce3d0532b7773b174c45ca3bd05a_normal.png" alt="">
            </div>

            <div class="footer_description text-white">
                <p>ThemeFusion</p>
                <p>@ Theme_Fusion</p>
                <p>Do you need sublime WordPress hosting for your next website? Take advantage of exlusive
                    partner offers that we have secured just for you, & launch your site in seconds with <a
                        href="#">#avada</a> on WP Engine hosting & get 30% Off this Black Friday <a
                        href="#">bit.ly/3kjLLE2 #BlackFriday2020</a></p>
                <img class="w-100" src="../assets/img/En2TRxLW4AEiWUN.jpeg" alt="">

                <div class="banner_logo d-flex justify-content-between">
                    <div class="logo_left">
                        <img src="../assets/img/image (2).svg" alt="">
                        <img src="../assets/img/image (3).svg" alt="">
                    </div>
                    <div class="logo_right">
                        <p>22h</p>
                    </div>
                </div>
                <div class="logo_twitter">
                    <img src="../assets/img/image (1).svg" alt="">
                </div>
            </div>
        </div>

    </div>
    <div class="col">
        <div class="title_footer_up text-left">
            <h6>CONTACT US TODAY</h6>
        </div>

        <div class="description_footer_up">
            <ul v-for="item in store.footerUpItem">
                <li>
                    <font-awesome-icon :icon="`${item.icon}`" />
                    <span>{{ item.text }}</span>
                </li>
            </ul>
        </div>
    </div>
    <div class="col">
        <div class="title_footer_up text-left">
            <h6>FIND US</h6>
        </div>

        <div class="description_footer_up">
            <img class="w-50" src="../assets/img/construction_map_pin.png" alt="">
        </div>
    </div>
</template>

<style lang="scss">

</style>