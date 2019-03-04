<template>
 <div class="container">
     <template v-for="p in progress">
         <Box v-if="p.type === 'question'" :boxStage="p" />
         <Echo v-else :message="p.message"/>
     </template>
     {{$store.state.chatbot}}
 </div>
</template>
<script>
    import { mapState, mapGetters, mapActions } from 'vuex';
    import Box from '@/components/Box';
    import Echo from '@/components/Echo';

    export default {
        name: 'ChatBot',
        components: {Box, Echo},
        methods: {
            ...mapActions('vehicle', ['addVehicle','fetchName']),
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