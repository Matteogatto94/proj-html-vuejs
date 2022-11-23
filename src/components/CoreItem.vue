<script>
import { store } from '../store.js'
export default {
    name: 'CoreItem',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="col" v-for="item in store.coreItemIcon">
        <div class="card_core">
            <span class="icon_core_bg_1">
                <font-awesome-icon :icon="`${item.icon}`" class="icon_core bg_1" />
            </span>

            <div class="core_details">
                <h6 class="py-5 border_core title_yellow_core">{{ item.title }}</h6>
                <p>{{ item.text }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss">

</style>