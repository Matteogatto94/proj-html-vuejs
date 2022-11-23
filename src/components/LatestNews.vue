<script>
import { store } from '../store.js'
export default {
    name: 'LatestNews',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <section class="latest_news">
        <div class="container">
            <div class="title_latest_news text-center py-5">
                <h2 class="title_news text-dark">Latest News</h2>
                <p class="font_news">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco.</p>
            </div>

            <div class="row">
                <div class="col" v-for="item in store.things">
                    <div class="card_latest">
                        <div class="latest_up text-center">
                            <div class="icon_work">
                                <font-awesome-icon icon="fa-solid fa-link" class="icon_works" />
                                <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="icon_works" />
                            </div>
                            <div class="description_work text-white">
                                <p>{{ item.title }}</p>
                                <p>{{ item.note }}</p>
                            </div>
                        </div>
                        <div class="latest_news_description">
                            <h6 class="text-left">{{ item.title }}</h6>
                            <span class="text-left">{{ item.date }}</span>
                            <hr>
                            <p class="text-center">{{ item.description }}</p>
                        </div>
                        <img :src="store.getImageUrl(item.image)" alt="">
                    </div>
                </div>
            </div>

            <div class="title_recent_bottom text-center">
                <div class="row">
                    <div class="col">
                        <div class="latest_top"></div>
                    </div>
                    <div class="col">
                        <p>VIEW ALL ARTICLES</p>
                    </div>
                    <div class="col">
                        <div class="latest_bottom"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">

</style>