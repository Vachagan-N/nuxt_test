<template>
  <div class="edit-project">
    <div class="header d-flex">
      <div class="container">
        <button class="back" @click="closeProject">BACK</button>
      </div>    
    </div>
    <div class="container">
      <div class="form-content">
        <form class="d-flex justify-center" @submit.prevent="changeProjectName">
          <label for="name">Name</label>
          <div>
            <input type="text" name="name" id="name" v-model="projectName" >
            <button class="save-name">OK</button>
          </div>
        </form>
        <div v-show="isSuccess" class="message">{{message}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      require: true,
    },
  },
  data(){
    return{
      projectName: '',
      isSuccess: false
    }
  },
  mounted(){
    this.projectName = this.project.name
  },
  computed:{
    message(){
      return !this.isSuccess || "Project successfully updated"
    }
  },
  methods:{
    closeProject(){
      if(this.isSuccess){
        this.project.name = this.projectName
      }
      this.$emit('close-project')
    },
    changeProjectName(){
      let config = {
        method: 'post',
        url: `projects-manage/update?id=${this.project.id}`,
        data : { name : this.projectName }
      };
      this.$axios(config)
        .then( ( { data: { project } } ) =>{
          if(this.projectName == project.name){
            this.isSuccess = true
          }
        })
    }
  }
};
</script>

<style>
.header{
  background: #c1c8d2;
  height: 50px;
  box-shadow: inset 0px 2px 3px 0px #929292;
}
.back{
  border: 1px solid #adadad;
  text-transform: uppercase;
  padding: 10px 15px;
  border-radius: 5px;
  margin: 0;
}

.form-content{
  min-width: fit-content;
  padding: 30px 30px 60px;
  margin: 40px 0;
  width: 100%;
  background: #fff;
}
.form-content form{
  position: relative;
  align-items: center;
  min-width: 500px;
}

label {
  position: absolute;
    left: 0;
    padding: 0 30px;
}

.form-content input {
  font-size: 16px;
  height: 40px;
  width: 300px;
  margin-left: 50px;
  border-radius: 5px;
  border: 1px solid #c3c3c3;
}

.save-name{ 
  height: 40px;
  padding: 0 20px;
  border-radius: 5px;
  background: #395378;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
}

.message{
  color: green;
  width: fit-content;
  margin: 15px auto;
  padding: 15px;
}

</style>