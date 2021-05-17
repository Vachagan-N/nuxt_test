<template>
  <div class="nav-bar">
    <div class="container">
      <div class="d-flex justify-between grow-1 align-center">
        <h1 class="quwi">Q</h1>
        <div class="d-flex">
          <button class="projects">projects</button>
          <button class="logout" @click="logout">logout</button>
        </div>
      </div>
      <!-- <button 
        v-if="isBack"
        class="back">
        Back
      </button> -->
    </div>
  </div>
</template>

<script>
export default {
    props:{
      isBack: {
        type: Boolean,
        required:false,
        defoult: false
      }
    },
    methods:{
      logout(){
        this.$auth.logout()
      }
    }
}
</script>

<style>
.quwi{
  cursor: pointer;
}

.logout,.projects{
  text-transform: uppercase;
  background: none;
  color: #505050;
  height: 50px;
  cursor: pointer;
  padding: 0 10px;
  margin: 0;
}

.logout:hover,.projects:hover{
  background: #505050 ;
  color: #fff;
}

.nav-bar{
  display: flex;
  width: 100%;
  position: fixed;
  top:0;
  height: 50px;
  background: #fafafa;
  box-shadow: 0px -5px 10px 1px black;
}

.back{
  background: #cecece;
}
button{
  margin: 0 5px;
}

</style>