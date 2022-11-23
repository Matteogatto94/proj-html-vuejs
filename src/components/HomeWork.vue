<script>
import { store } from '../store.js'
export default {
    name: 'HomeWork',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="vawe_up"></div>
    <section class="home_work d-flex align-items-center text-center">
        <div class="container">
            <div class="row">
                <div class="col" v-for="item in store.homeWorkIcon">
                    <div class="home_work_yellow">
                        <font-awesome-icon :icon="`${item.icon}`" class="icon" />
                        <p>{{ item.numb }}</p>
                    </div>
                    <p class="text-white">{{ item.text }}</p>
                </div>
            </div>
        </div>
    </section>
    <div class="vawe_down"></div>
</template>

<style lang="scss" scoped>
.vawe_up {
    background-color: white;
    width: 100%;
    height: 200px;
    position: absolute;
    border-radius: 80%;
    aspect-ratio: 1 / 1;
}

.vawe_down {
    background-color: white;
    width: 100%;
    height: 200px;
    position: absolute;
    top: 2570px;
    border-radius: 80%;
    aspect-ratio: 1 / 1;
}
</style>