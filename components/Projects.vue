<template>
  <div class="all-projects">
    <div
      v-for="project in projects"
      :key="project.id"
      class="d-flex project"
      @click="openProject(project)"
    >
      <div class="d-flex align-center">
        <img :src="project.logo_url" alt="" />
        <h2 class="project-name">{{ project.name }}</h2>
      </div>
      <div></div>
      <div class="right-item">
        <div
          v-check="project.is_active"
          :class="{ active: project.is_active }"
          class="active-inactive"
        ></div>
        <div class="d-flex all-times">
          <div>
            <p>time this week</p>
            <p>this month</p>
            <p>total</p>
          </div>
          <div>
            <p>00:00:00</p>
            <p>00:00:00</p>
            <p>00:00:00</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    projects:{
      type: Array,
      require: true,
    }
  },
  directives: {
    check: (el , data) => {
      el.innerText = !!data.value ? 'Active' : 'Inactive'
    }
  },
  methods:{
    openProject(project){
      this.$emit('open-project' , project)
    }
  }
};
</script>

<style>
img{
  height: 80px;
}
.all-projects{
  padding: 10px 0;
  width: 100%;
  max-width: 750px;
  margin: 0 auto;
  min-width: fit-content;
}

.project{
  cursor: pointer;
  padding: 10px;
  height: 100px;
  margin: 10px 0;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  border-radius: 7px;
  box-shadow: 0 0 2px 1px #d0d0d0;
  min-width: fit-content;
}

.project-name{
  height: fit-content;
  margin: 0 20px;
}

.active-inactive{
  color: red;
}

.active{
  color: green;
}

.all-times > div {
  margin: 0 10px;
}

.all-times > div > p{
  white-space: nowrap;
  margin: 5px;
}

.right-item{
    display: flex;
    align-items: center;
    justify-content: inherit;
    width: 43%;
    min-width: fit-content;
}
</style>