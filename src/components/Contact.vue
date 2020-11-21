<template>
  2521652161
  <div class="message">
    <div class="photo">
      <img v-bind:src="contact.profileImage" />
      
    </div>
    <div class="detail">
        <div class="name">
          <p>{{contact.name}}</p>  
        </div>
    </div>
  </div>
  <br/>
  <br/>
</template>

<script>
export default {
  name: "Contact",
  props: {
    contact: Object,
  },
};
</script>

<style>
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
</style>