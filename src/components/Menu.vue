<template>
  
  <div class="menu">
     
  </div>
  <div class="tools">
    <div class="tool">
      <router-link to="/messages">
        <i class="fas fa-comment-alt" ></i>{{getNbMessagesUnread}}
      </router-link>
    </div>
    <router-link to="/contacts">
      <div class="tool">
        <i class="fas fa-user-friends"></i>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Menu",
  components: {
  },
  props: {
    unreadMessages : Number,
  },
  computed:{
    getNbMessagesUnread:function(){
      return this.$store.getters.numberOfUnreadMessages;
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin: 40px 0 0;
}
.tools{
  margin-top: 10px;
  display: flex;
  align-items: center;
  flex-direction: row;
    border: 1px solid;
    background-color: grey;
  font-size:4em;
}

.tool{

  margin-right: 10px;;
  margin-left: 10px;
}

.title{
  text-align: left;
  margin-bottom: 2em;
  font-size: 1em;
}

</style>
