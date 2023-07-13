<template>
  <div class="taskApp">
    <div class="taskApp-header">
      <h1>Task list</h1>

      <ColorScheme :colors="colors" />
    </div>

    <ul class="taskList">
      <TaskItem
        v-for="task in tasks"
        :task="task"
        :key="task.id"
        @click="switchComplete(task.id)"
      />
    </ul>

    <AddForm @create="addTask"/>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import TaskItem from '@/components/TaskItem.vue';
import AddForm from '@/components/AddForm.vue';
import ColorScheme from '@/components/ColorScheme.vue';

export default {
  name: 'App',
  components: { TaskItem, AddForm, ColorScheme },
  data() {
    return {
      colors: ['#fcd9b8', '#e09145', '#292C35', '#17181d'],
    };
  },
  computed: {
    ...mapState({
      tasks: (state) => state.tasksStore.tasks,
    }),
  },
  methods: {
    ...mapMutations({
      addTask: 'addTask',
      switchComplete: 'switchComplete',
    }),
    ...mapActions({
      //logStart: "myStore/logStart",
    }),
  },
  mounted() {},
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
  margin-bottom: 10px;
  border-bottom: 1px solid #fcd9b8;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.taskApp-header h1 {
  cursor: pointer;
  transition: all 0.25s linear;
}

.taskApp-header h1:hover {
  color: #e09145;
}

.taskList {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 25px;
  margin-bottom: 35px;
}
</style>

