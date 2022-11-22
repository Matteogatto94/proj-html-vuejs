<script>
export default {
    name: 'RecentWork',
    data() {
        return {
            items: [
                {
                    img: 'project2.jpg'
                },
                {
                    img: 'project1.jpg'
                },
                {
                    img: 'project3.jpg'
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
    <section class="recent_works">
        <div class="container">
            <div class="title_recent text-center">
                <h2 class="title_spec">Explore Recent Work</h2>
                <p class="font_recent">Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor
                    incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            </div>

            <div class="row">
                <div class="col" v-for="item in items">
                    <div class="card_work">
                        <img :src="getImageUrl(item.img)">
                    </div>
                </div>
            </div>

            <div class="title_recent_bottom text-center">
                <div class="row">
                    <div class="col">
                        <div class="recent_top"></div>
                    </div>
                    <div class="col">
                        <p>VIEW ALL PROJECTS</p>
                    </div>
                    <div class="col">
                        <div class="recent_bottom"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">

</style>