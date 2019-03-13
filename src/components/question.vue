<template>
    <div class="box alert alert-info" role="alert">
        <p>{{message}}</p>
        <div class="question">
            <div v-for="(option, index) in options" :key="index">
                <input type="radio" :value="option" v-model="picked" :disabled='optionDisabled'>
                <label :for="option">{{option}}</label>
                <br>
            </div>
        </div>
    </div>
</template>
<script>
    import {pushQueryStack, triggerDialogFlow} from "../lib/ChatBotManager";
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
        name: 'Question',
        props: ['message', 'options'],
        data() {
            return {
                picked: null,
                optionDisabled: false,
            }
        },
        watch: {
            picked(n, o) {
                // if (true === this.responded) {
                //     return;
                // }
                this.respond(n);
                this.optionDisabled = true;
            }
        },
        methods: {
            ...mapActions('chatbot', ['addProgress']),
           respond(answer) {
               const query = 'get ' + answer;
               pushQueryStack(query);
               this.addProgress({
                   message: 'Your answer is ' + answer,
                   type: 'echo',
               });
               triggerDialogFlow(this);
           }
        }
    }
</script>