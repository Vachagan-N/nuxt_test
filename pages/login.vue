<template>
  <div class="login">
    <!-- <NavBar :isBack="true"/> -->
    <div class="container">
      <div class="d-flex">
        <form class="d-flex" @submit="login">
          <label for="email">Login</label>
          <div v-show="errorMessages.email" class="invalid">
            {{errorMessages.email}}
          </div>
          <input type="email" name="email" id="email" placeholder="Email" v-model="formData.email" required>
          <div v-show="errorMessages.password" class="invalid">
            {{errorMessages.password}}
          </div>
          <input type="password" name="password" id="password" placeholder="Password" v-model="formData.password" required>
          <button type="submit" >Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      formData:{
        email:'',
        password: ''
      },
      errorMessages: {}
    }
  },
  created(){

  },
  methods:{
    login(e){
      e.preventDefault()
      this.$auth.loginWith('jwt', { data: this.formData })
        .then(({data})=>{
          this.errorMessages = {}
          this.$auth.setUserToken(data.token)
          this.$auth.setUser(data.app_init.user)
        })
        .catch((e)=>{
          this.errorMessages = e.response.data.first_errors;
        })
    }
  }
}
</script>

<style lang="css" scoped>
.container > div{
  padding: 25px;
  justify-content: center;
  align-items: center;
  padding-left: 35px;
  margin: 40px auto;
  background: #f4f4f4;
}

input{
  margin: 5px 0;
  height: 30px;
  width: 100%;
}
label , button{
  text-transform: uppercase;
}

button{
  background: #395378;
  padding: 5px 15px;
  color: white; 
  border-radius: 5px ;
}

form{
  flex-direction: column;
  align-items: flex-start;
  width: 310px;
}

.invalid{
    width: 100%;
    height: 30px;
    align-items: center;
    background: rgb(238, 152, 95);
    border-radius: 5px;
    display: flex;
    justify-content: center;
    opacity: 0.7;
    margin: 5px 0;
}
</style>