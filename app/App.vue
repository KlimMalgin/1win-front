<template>
    <div class="application">
        Application
        <br />Menu:
        <router-link to="main">to main</router-link>
        <router-link to="test">to test</router-link>
        <router-view></router-view>
    </div>
</template>

<script>

export default {
    name  : 'application',
    computed : {},
    methods : {},
};
</script>

<style lang="less">
.application {}
</style>
