<template>
  <div class="title">
      <p style ="margin-left:10px;"></p><HelloWorld :msg="'Chats'"/>
  </div>
  <div class="messages">
    <Message v-for="currentMessage in messages" :key="currentMessage.id" :message="currentMessage" @update="updateMessages"/>
    
  </div>
</template>

<script>
import Message from "./Message.vue";
import HelloWorld from "./HelloWorld.vue"
export default {
  name: "Messages",
    components: {
    Message,
    HelloWorld,
  },
  created:function(){
    this.$store.dispatch('setMessage');
  },
  computed:{
    messages(){
      return this.$store.getters.sortMessagesByDate;
    }
  },
  methods:{
    updateMessages(Msg){
      this.messages.forEach(element => {
        if(element==Msg){
          element.read=false;}
      });
      console.log(Msg);
      this.$store.commit('setMessage',this.messages);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.messages{
  text-align: center;
   color: #2c3e50;
  display: flex;
  flex-direction: column;
    align-items:center;
}




</style>
