<script>
export default {
    name: 'BannerList',
    data() {
        return {
            items: [
                {
                    icon: 'icon_build.svg',
                    text: 'Buildings',
                    description: 'Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur.'
                },
                {
                    icon: 'arrow_refresh.svg',
                    text: 'Renovate',
                    description: 'Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur.'
                },
                {
                    icon: 'home.svg',
                    text: 'Construct',
                    description: 'Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur.'
                },
                {
                    icon: 'truck.svg',
                    text: 'Exclusive',
                    description: 'Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur.'
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

            <div class="banner">
                <div class="row d-flex">
                    <div class="col" v-for="item in items">
                        <div class="card_specialist">
                            <div class="image_item">
                                <img :src="getImageUrl(item.icon)">
                            </div>

                            <div class="description_item">
                                <h2>{{ item.text }}</h2>
                                <p>{{ item.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>

</template>

<style lang="scss">

</style>