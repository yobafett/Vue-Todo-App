<template>
  <div>
    <transition-group
      class="taskList"
      name="list"
      tag="ul"
      v-if="tasks.length > 0"
    >
      <TaskItem
        v-for="task in tasks"
        :task="task"
        :key="task.id"
        @complete="switchComplete"
        @delete="removeTask"
      />
    </transition-group>

    <div
      class="addNewNote"
      v-else
    >
      Task list is empty.
      <br />
      Click + to add new one
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import TaskItem from '@/components/TaskItem.vue';

export default {
  name: 'TaskList',
  components: { TaskItem },
  computed: {
    ...mapState({
      tasks: (state) => state.tasksStore.tasks,
    }),
  },
  methods: {
    ...mapActions({
      restoreFromSession: 'restoreFromSession',
      switchComplete: 'switchComplete',
      removeTask: 'removeTask',
    }),
  },
  mounted() {
    this.restoreFromSession();
  },
};
</script>

<style scoped wlang="scss">
.taskList {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  margin-bottom: 35px;
}
.addNewNote {
  display: flex;
  justify-content: center;
  font-size: 42px;
  margin-bottom: 25px;
  text-align: center;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
