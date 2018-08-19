
<template>
    <div class="pagination-bar">
        <b-pagination-nav align="center" :link-gen="linkGen" :number-of-pages="10" base-url="#/books" v-model="page" />
        <b-form-select v-model="booksPerPage" :options="options" class="mb-3 pagination-bar__select" />
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

/**
 * Компонент пагинации и указания количества элементов на страницу
 **/
export default {
    name : 'pagination-bar',
    data() {
        return {
            options  : [
                { value: 5, text: 5 },
                { value: 10, text: 10 },
                { value: 25, text: 25 },
                { value: 50, text: 50 },
            ],
        };
    },
    components : {},
    computed   : {
        ...mapGetters(['page']),
        page : {
            get() {
                return this.$store.getters.page;
            },
            set(val) {
                this.$store.dispatch('setPage', val);
            },
        },
        booksPerPage : {
            get() {
                return this.$store.getters.booksPerPage;
            },
            set(val) {
                this.$store.dispatch('setBooksPerPage', val);
            },
        },
    },
    methods : {
        linkGen(pageNum) {
            return '#books/' + pageNum;
        },
    },
};
</script>

<style lang="less">
.pagination-bar {
    display: flex;
    border: solid #f7f7f9;
    border-radius: 0.25rem;
    padding: 16px 10px 0px 10px;
    position: relative;

    &__select {
        position: absolute;
        right: 10px;
        width: 80px;
    }
}
</style>



