<template>
  
  <div class="message">

    <div class="photo">
      <img v-bind:src="message.sender.profileImage" />
      
    </div>
    <div class="detail">
      <div :class="getStyleRead">
        <div class="name">
          <p>{{message.sender.name}}</p>  
        </div>
        <p>{{message.content}}</p>
      </div>
    </div>
    <div class="date">
      {{getDate}}
    </div>
    <!--
    <div id="example-3">
      <button v-on:click="say(message)">Dire salut</button>
      <button v-on:click="say(message)">Dire quoi</button>
    </div>
    -->
  </div>
  <div v-if="message.read" class="mark">
      <button v-on:click="read(message)">Mark as read</button>
  </div>
  <br/>
  <br/>
</template>

<script>
export default {
  name: "Message",
  props: {
    message: Object,
  },
  computed:{
    getDate:function (){
      let date= new Date(this.message.date);
      let minute=date.getMinutes().toString();
      if(minute<10){
        minute="0"+ minute;
      }
      date =date.getHours().toString()+":"+minute;
      return date
    },
    getStyleRead:function(){
      if(this.message.read==true){
        return "notread"
        }
      return "read"
    }
  },
  methods:{
    read(Msg){
      this.$emit('update',Msg);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.read{
  font-weight: normal;

}
.notread{
  font-weight: bold;
}
.message {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color:black;
  border: 1px solid;
  display: flex;
}
.photo{
    margin-right: 20px;
    margin-left: 20px;
    
}
img{
  border-radius: 50%;
  height:100px;
  width:100px;
}

.name{
  display: flex;
  
}
.date{
  text-align: right;
}
.mark{
  background-color: aqua;
  color: antiquewhite;
}

</style>
