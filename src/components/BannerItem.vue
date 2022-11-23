<script>
import { store } from '../store.js'
export default {
    name: 'BannerItem',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="col" v-for="item in store.specialistIcon">
        <div class="card_specialist">
            <div class="description_item py-4">
                <h4>{{ item.titleCover }}</h4>
                <p>{{ item.textCover }}</p>
            </div>
            <div class="button_specialist">
                <a href="#">GET A QUOTE</a>
            </div>
        </div>

        <div class="cover_specialist">
            <div class="icon_specialist">
                <font-awesome-icon :icon="`${item.icon}`" class="icon_font_specialist" />
            </div>

            <div class="description_cover">
                <h4>{{ item.title }}</h4>
                <p>{{ item.text }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss">

</style>