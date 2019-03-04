<template>
    <div class="box alert alert-primary" role="alert">
        <p>{{ message }}</p>
    </div>
</template>
<script>
    import { mapState, mapGetters, mapActions } from 'vuex';
    export default {
        name: 'Echo',
        props: ['message'],
        mounted() {
            this.responseResolve('done');
        },
        computed: {
            ...mapGetters('chatbot', ['responsePromise', 'responseResolve']),
        }
    }
</script>
<style></style>