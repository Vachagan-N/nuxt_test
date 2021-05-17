<template>
  <div class="home">
    <NavBar :isBack="true"/>
    <div class="container" v-if="!isOpenProject">
      <Projects :projects="allProjects"  @open-project="openProject($event)"/>
    </div>
    <Project v-else :project="project" @close-project="closeProject"/>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import Project from '../components/Project.vue'
import Projects from '../components/Projects.vue'
export default {
  components: { NavBar, Projects, Project },
  data(){
    return {
      project: null,
      allProjects: []
    }
  },
  computed:{
    isOpenProject(){
      return !!this.project
    }
  },
  mounted(){
    this.getProjects()
  },
  methods:{
    getProjects(){
      this.$axios.get('projects-manage').then((res)=>{
        this.allProjects = res.data.projects
      })
    },
    openProject(project){
      this.project = project
    },
    closeProject(){
      this.project = null
    }
  }  
}
</script>

<style>
.home{
  margin-top: 50px;
}


</style>
