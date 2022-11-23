<script>
export default {
    name: 'HomeOwners'
}
</script>

<template>
    <div class="vawe_up"></div>
    <section class="home_owners text-center">
        <div class="container">
            <div class="title_spec">
                <h2 class="title_owners">Our Home Owners Say</h2>
            </div>
            <div class="owner_card">
                <div class="owner_img py-5">
                    <img src="../assets/img/home-testimonial-113165296.jpg" alt="">
                </div>

                <div class="owner_description">
                    <p>"No man but feels more of a man in the world if he have but a bit of ground that he can call his
                        own. Homever small it is on the surface, it is four thousand miles deep; and that is a very
                        hansome property."</p>
                    <span>HARRY SMITH &#183; NEW HOME OWNER</span>
                </div>
            </div>
        </div>
    </section>
    <div class="vawe_down"></div>
</template>

<style lang="scss" scoped>
.vawe_up {
    background-color: #F5F5F5;
    width: 100%;
    height: 200px;
    position: absolute;
    border-radius: 80%;
    aspect-ratio: 1 / 1;
    top: 4320px;
}

.vawe_down {
    background-color: #F5F5F5;
    width: 100%;
    height: 200px;
    position: absolute;
    border-radius: 80%;
    aspect-ratio: 1 / 1;
    top: 5030px;
}
</style>