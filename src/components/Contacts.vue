<template>
  <div class="title">
      <p style ="margin-left:10px;"></p><HelloWorld :msg="'Contacts'"/>
  </div>
<div class="contacts">
    <Contact v-for="currentContact in contacts" :key="currentContact.id" :contact="currentContact" />
</div>
  
</template>

<script>

import HelloWorld from "./HelloWorld.vue"
import Contact from "./Contact.vue"
export default {
  name: "Contacts",
  components: {
      HelloWorld,
      Contact,
  },
   created:function(){
    this.$store.dispatch('setContact');
  },
};
</script>

<style>
.contacts{
  text-align: center;
   color: #2c3e50;
  display: flex;
  flex-direction: column;
    align-items:center;
}

</style>