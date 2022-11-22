<script>
export default {
    name: 'LatestNews',
    data() {
        return {
            things: [
                {
                    image: 'trattore.jpg',
                    title: "Redeveloping Florida's Remote Southern Coast",
                    date: 'December 7th, 2015',
                    description: 'Technology is Here to Stay Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus purus nisl, elementum vitae consequat at, tristique ut enim. Sed ut dignissim leo. Nullam sed metus id sapien faucibus rhoncus sed'
                },
                {
                    image: 'ponte.jpg',
                    title: "How We Manage Large Construction Projects",
                    date: 'December 7th, 2015',
                    description: 'Technology is Here to Stay Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus purus nisl, elementum vitae consequat at, tristique ut enim. Sed ut dignissim leo. Nullam sed metus id sapien faucibus rhoncus sed'
                },
                {
                    image: 'cantiere_navale.jpg',
                    title: 'Future proofing a modern home',
                    date: 'December 6th, 2015',
                    description: 'Technology is Here to Stay Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus purus nisl, elementum vitae consequat at, tristique ut enim. Sed ut dignissim leo. Nullam sed metus id sapien faucibus rhoncus sed'
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
    <section class="latest_news">
        <div class="container">
            <div class="title_latest_news text-center py-5">
                <h2 class="title_news text-dark">Latest News</h2>
                <p class="font_news">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco.</p>
            </div>

            <div class="row">
                <div class="col" v-for="item in things">
                    <div class="card_latest">
                        <img :src="getImageUrl(item.image)" alt="">
                        <div class="latest_news_description">
                            <h6 class="text-left">{{ item.title }}</h6>
                            <span class="text-left">{{ item.date }}</span>
                            <hr>
                            <p class="text-center">{{ item.description }}</p>
                        </div>
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