<template>
    <div class="test-page">
        Test title
        <br>
        <ap-counter />
    </div>
</template>

<script>
import apCounter from '../components/ap-counter/ap-counter.vue';

export default {
    name  : 'test-page',
    components : {apCounter},
};
</script>

<style lang="less">
.test-page {}
</style>
