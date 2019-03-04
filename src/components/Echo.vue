<template>
    <div class="box alert alert-primary" role="alert">
        <p>{{ message }}</p>
    </div>
</template>
<script>
    import { mapState, mapGetters, mapActions } from 'vuex';
    import {getCallback} from '@/lib/ChatBotManager';

    export default {
        name: 'Echo',
        props: ['message'],
        mounted() {
            // this.responseCallback.call(this, true);
            getCallback().call(this, true);
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