<script>
export default {
    name: 'FooterUp'
}
</script>

<template>
    <section class="footer_up">
        <div class="row">
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
            </div>
            <div class="col">
                <div class="title_footer_up text-left">
                    <h6>CONTACT US TODAY</h6>
                </div>

                <div class="description_footer_up">
                    <ul>
                        <li>Corporate Location 1600 Amphitheatre Parkway London WC1 1BA</li>
                        <li>Residential Location 9521 Broadsberry Avenue Paddington RC7 9ZA</li>
                        <li>1.800.458.556 / 1.800.532.2112</li>
                        <li>info@your-domain.com</li>
                        <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                        <li>Saturday -Sunday: 9:00 AM - 12:00 PM</li>
                    </ul>
                </div>
            </div>
            <div class="col">
                <div class="title_footer_up text-left">
                    <h6>FIND US</h6>
                </div>

                <div class="description_footer_up">
                    <img src="../assets/img/construction_map_pin.png" alt="">
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.card_tweets_bottom {

    img {
        width: 15px;
    }
}

.logo {
    width: 30px;
    aspect-ratio: 1 / 1;

    img {
        border-radius: 50%;
    }
}

.description_footer_up {
    color: #BCBCBC;

    ul {
        list-style: none;
        padding: 0;
        line-height: 2rem;
    }
}

.footer_up {
    background-color: #1E1E1E;
    padding: 4rem;
}

.title_footer_up {
    h6 {
        color: #FED03D;
        padding: 1rem 0;
    }
}

.btn_footer {
    a {
        text-decoration: none;
        color: black;
        background-color: #FED03D;
        padding: 0.75rem 3rem;

        &:hover {
            background-color: black;
            color: white;
        }
    }
}
</style>