<template>
    <div class="application">
        <b-container>
            <router-view></router-view>
        </b-container>
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
.application {
    padding: 8px;
}
</style>
