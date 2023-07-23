<template>
  <div>
    <TaskList />
    <AddForm @create="addTask" />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import AddForm from '@/components/AddForm.vue';
import TaskList from '@/components/TaskList.vue';

export default {
  name: 'App',
  components: { AddForm, TaskList },
  methods: {
    ...mapActions({
      addTask: 'addTask',
    }),
  },
};
</script>

<style scoped>
</style>
