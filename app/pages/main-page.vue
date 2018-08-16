<template>
    <div class="main-page">
        Title

        <ap-about />
    </div>
</template>

<script>
import apAbout from '../components/ap-about/ap-about.vue';

export default {
    name  : 'main-page',
    components : {
        apAbout
    },
    methods : {},
};
</script>

<style lang="less">
.main-page {}
</style>
