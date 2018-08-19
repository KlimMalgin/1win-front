<template>
    <div class="main-page">
        <pagination-bar />

        <b-card v-for="item in books"
            :title="item.title"
            :img-src="item.image + '?' + item.id"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2 book-item">
            <p class="card-text">
                {{item.description}}
            </p>
            <b-button href="#" variant="primary">Подробнее</b-button>
        </b-card>

        <pagination-bar />
    </div>
</template>

<script>
import paginationBar from '@components/pagination-bar.vue';
export default {
    name       : 'main-page',
    components : {
        paginationBar,
    },
    computed : {
        books() {
            return this.$store.getters.books;
        },
    },
    methods : {},
    mounted() {
        this.$store.dispatch('getBooksPage');
    },
};
</script>

<style lang="less">
.main-page {
    text-align: center;

    .book-item {
        width: 310px;
        display: inline-block;
        text-align: left;
        margin: 5px;
    }

    .card-img-top {
        width: 310px;
        height: 220px;
        background-color: rgba(200,200,200,0.2);
    }
}
</style>
