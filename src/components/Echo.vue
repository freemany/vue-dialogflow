<template>
    <div class="box alert alert-primary" role="alert">
        <p>{{ message }}</p>
    </div>
</template>
<script>
    import { mapState, mapGetters, mapActions } from 'vuex';
    import {getCallback, getResolve} from '@/lib/ChatBotManager';

    export default {
        name: 'Echo',
        props: ['message'],
        mounted() {
            // getCallback().call(this, this.responseResolve, true);
            getCallback().call(this, getResolve(), true);
        },
        // methods: {
        //     ...mapActions('chatbot', ['addProgress', 'setResponsePromise', 'setResponseResolve', 'getResponseCallback']),
        // },
        computed: {
            ...mapGetters('chatbot', ['responsePromise', 'responseResolve', 'responseCallback']),
        }
    }
</script>
<style></style>