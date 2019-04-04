<template>
 <div class="container">
     <template v-for="p in progress">
         <Question v-if="p.type === 'question'" :message="p.message" :options="p.options"/>
         <Echo v-else :message="p.message"/>
     </template>
     {{$store.state.chatbot}}
 </div>
</template>
<script>
    import { mapState, mapGetters, mapActions } from 'vuex';
    import Question from '@/components/question';
    import Echo from '@/components/Echo';
    import {triggerDialogFlow} from "../lib/ChatBotManager";

    export default {
        name: 'ChatBot',
        components: {Question, Echo},
        data() {
            return {
                foo: 1,
            }
        },
        created() {
            triggerDialogFlow(this);
        },
        methods: {
            ...mapActions('chatbot', ['addProgress']),
        },
        computed: {
            // ...mapState('vehicle', ['firstName','lastName', 'vehicles']),
            ...mapGetters('chatbot', ['progress'])
        }
    }
</script>
<style scoped>
  .container {
      display: block;
  }
</style>