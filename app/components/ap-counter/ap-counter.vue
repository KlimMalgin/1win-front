<template>
    <div class="ap-counter">
        <div>
            <span>Value: </span>
            <span>{{incrementValue}}</span>
        </div>
        <button @click="increment">Increment</button>
    </div>
</template>

<script>
export default {
    name     : 'ap-counter',
    computed : {
        incrementValue() {
            return this.$store.getters.increment;
        },
    },
    methods : {
        increment() {
            this.$store.dispatch('increment');
        },
    },
};
</script>

<style lang="less">
.ap-counter {}
</style>
