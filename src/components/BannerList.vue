<script>
export default {
    name: 'BannerList',
    data() {
        return {
            items: [
                {
                    icon: 'home.svg',
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

            <div class="banner d-flex">
                <div class="item" v-for="item in items">
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

    </section>

</template>

<style lang="scss">
.specialist_modern {
    margin-top: 7rem;

    .banner {
        margin-top: 4rem;

        .card_specialist {
            background-color: #F5F5F5;
            margin-left: 1.5rem;
            padding: 1.5rem;
            border-radius: 10%;

        }
    }

    img {
        border: 1px solid black;
        aspect-ratio: 1 / 1;
        border-radius: 50%;
        padding: 0.70rem;
        width: 70px;
    }

    .title_spec {
        padding-bottom: 1rem;
        border-bottom: 2px solid #FED03D;
        display: inline-block;
    }

    .description_spec {
        padding: 2rem;
    }
}
</style>