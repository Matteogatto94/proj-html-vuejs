<script>
import CoreItem from './CoreItem.vue'
export default {
    name: 'CoreValues',
    components: {
        CoreItem
    }
}
</script>

<template>
    <section class="core_values text-center">
        <div class="container">
            <div class="title_spec">
                <h2 class="title_core">Our Core Values</h2>
                <p class="font_core">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco.</p>
            </div>

            <div class="row">
                <CoreItem />
            </div>
        </div>
    </section>
</template>

<style lang="scss">

</style>