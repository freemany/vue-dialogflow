<template>
    <div class="box alert alert-info" role="alert">
        <p>{{ flow[boxStage.stage].message }}</p>
        <div class="question">
            <div v-for="(option, index) in flow[boxStage.stage].options" :key="index">
                <input type="radio" :value="option.value" v-model="picked">
                <label :for="option.value">{{option.label}}</label>
                <br>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapState, mapGetters, mapActions } from 'vuex';
    import ChatBoxFlow from '@/config/ChatBoxFlow';
    import {setCallback} from '@/lib/ChatBotManager';

    export default {
        name: 'Box',
        props: ['boxStage'],
        data() {
            return {
                message: 'hello world',
                picked: null,
                flow: ChatBoxFlow,
                responded: false,
            }
        },
        watch: {
            picked(n, o) {
                if (true === this.responded) {
                    return;
                }
                this.respond(n);
            }
        },
        methods: {
            ...mapActions('chatbot', ['addProgress', 'setResponsePromise', 'setResponseResolve', 'setResponseCallback']),
            respond(answer) {
                const action = this.flow[this.boxStage.stage].action;
                console.log(action);
                if (action[0] === 'echo') {
                    this.addProgress({type: 'echo', message: 'Good choice: ' + this.picked});
                    // this.setResponseCallback(action[2]);
                    setCallback(action[2]);
                    const promise = new Promise((resolve) => {
                        this.setResponseResolve(resolve);
                    });
                    promise.then((res) => {
                        this.addProgress(this.flow[action[1]]);
                    });
                }
            }
        },
        computed: {
            ...mapGetters('chatbot', ['progress', 'stage']),
        }
    }
</script>
<style>
    .alert {
        position: static;
    }
</style>