<template>
    <div class="modal-edit">
        <b-modal ref="modalEdit" hide-footer title="Редактирование записи о книге" v-on="$listeners">
            <b-container fluid>
                <b-row>
                    <b-col sm="3" class="text-left"><label for="type-title">Заголовок:</label></b-col>
                    <b-col sm="9"><b-form-input v-model="changeTitle" type="text" id="type-title" placeholder="Заголовок"></b-form-input></b-col>
                </b-row>
                <b-row>
                    <b-col sm="3" class="text-left"><label for="type-date">Дата:</label></b-col>
                    <b-col sm="9"><b-form-input v-model="changeDate" type="text" id="type-date" placeholder="Дата публикации"></b-form-input></b-col>
                </b-row>
                <b-row>
                    <b-col sm="3" class="text-left"><label for="type-description">Описание:</label></b-col>
                    <b-col sm="9">
                        <b-form-textarea id="type-description"
                             v-model="changeDescription"
                             placeholder="Описание книги"
                             :rows="3"
                             :max-rows="6"></b-form-textarea>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col sm="3" class="text-left"><label for="type-author">Автор:</label></b-col>
                    <b-col sm="9"><b-form-input v-model="changeAuthor" type="text" id="type-author" placeholder="Автор"></b-form-input></b-col>
                </b-row>
                <b-row>
                    <b-col sm="3" class="text-left"><label for="type-image">Изображение:</label></b-col>
                    <b-col sm="9"><b-form-input v-model="changeImage" type="text" id="type-image" placeholder="Ссылка на изображение"></b-form-input></b-col>
                </b-row>
            </b-container>

            <b-btn class="mt-3" block @click="hide" :disabled="saveBookInProgress">Применить</b-btn>
        </b-modal>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name : 'modal-edit',
    computed : {
        ...mapGetters(['saveBookInProgress']),
        changeTitle : {
            get() {
                return this.$store.getters.editable.title;
            },
            set(val) {
                this.$store.commit('CHANGE_TITLE', val);
            },
        },
        changeDate : {
            get() {
                return this.$store.getters.editable.date;
            },
            set(val) {
                this.$store.commit('CHANGE_DATE', val);
            },
        },
        changeDescription : {
            get() {
                return this.$store.getters.editable.description;
            },
            set(val) {
                this.$store.commit('CHANGE_DESCRIPTION', val);
            },
        },
        changeImage : {
            get() {
                return this.$store.getters.editable.image;
            },
            set(val) {
                this.$store.commit('CHANGE_IMAGE', val);
            },
        },
        changeAuthor : {
            get() {
                return this.$store.getters.editable.author;
            },
            set(val) {
                this.$store.commit('CHANGE_AUTHOR', val);
            },
        },
    },
    methods : {
        show() {
            this.$refs.modalEdit.show();
        },
        hide() {
            this.$store.dispatch('saveBookItem');
            this.$refs.modalEdit.hide();
        },
    },
};
</script>

<style lang="less">
.modal-edit {
    .row {
        margin-top: 5px;
        margin-bottom: 5px;
    }
}
</style>



