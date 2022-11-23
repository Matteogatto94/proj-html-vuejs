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
</template>

<style lang="scss" scoped>

</style>