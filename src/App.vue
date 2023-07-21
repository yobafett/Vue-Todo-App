<template>
  <div class="taskApp">
    <div class="taskApp-header">
      <h1>Task list</h1>

      <ColorScheme :colors="colors" />
    </div>

    <TaskList />

    <AddForm @create="addTask" />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import AddForm from '@/components/AddForm.vue';
import ColorScheme from '@/components/ColorScheme.vue';
import TaskList from '@/components/TaskList.vue';

export default {
  name: 'App',
  components: { AddForm, ColorScheme, TaskList },
  data() {
    return {
      colors: ['#fcd9b8', '#e09145', '#292C35', '#17181d'],
    };
  },
  methods: {
    ...mapActions({
      addTask: 'addTask',
    }),
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&display=swap');

* {
  font-family: 'Oswald', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #fcd9b8;
}

body {
  background-color: #17181d;
}

.taskApp {
  border-radius: 1px;
  margin: 0px 20px;
  margin-top: 50px;
  padding: 15px;
  background-color: #17181d;
}

.taskApp-header {
  margin-bottom: 15px;
  padding-bottom: 5px;
  border-bottom: 1px solid #fcd9b8;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.taskApp-header h1 {
  cursor: pointer;
  transition: all 0.25s linear;
  font-size: 72px;
}

.taskApp-header h1:hover {
  color: #e09145;
}
</style>

