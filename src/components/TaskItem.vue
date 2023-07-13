<template>
  <li :class="{ taskItem: true, complete: task.complete }">
    <div class="taskItem-info">
      <p class="taskItem-id">task id: {{ task.id }}</p>
      <p class="taskItem-title">{{ task.title }}</p>
      <p class="taskItem-text">{{ task.text }}</p>
    </div>
    <div class="taskItem-controls">
      <CustomCheckbox :checked="task.complete" />
    </div>
  </li>
</template>

<script>
import CustomCheckbox from './CustomCheckbox';

export default {
  name: 'TaskItem',
  props: ['task'],
  components: { CustomCheckbox },
};
</script>

<style scoped>
.taskItem {
  border: 1px solid #fcd9b8;
  border-radius: 1px;
  min-height: 100px;
  padding: 5px;
  background-color: #292c35;
  box-shadow: 3px 3px 1px rgba(224, 145, 69, 0.25);
  cursor: pointer;
  transition: all 0.25s linear;
}

.complete {
  opacity: 0.25;
}

.taskItem:hover {
  border: 1px solid #e09145;
  box-shadow: 3px 3px 1px rgba(224, 145, 69, 0.5);
}
.taskItem:hover .taskItem-title {
  border-bottom: 1px solid #e09145;
}

.taskItem:hover .taskItem-info > * {
  color: #e09145;
  transition: all 0.25s linear;
}

.taskItem-info {
}

.taskItem-id {
  font-size: 8px;
}

.taskItem-title {
  font-size: 22px;
  font-weight: 700;
  border-bottom: 1px solid #fcd9b8;
  margin-bottom: 5px;
  
}

.taskItem-text {
  padding-right: 30px;
  margin-bottom: 30px;
}

.taskItem-controls {
  padding: 5px;
  display: flex;
  justify-content: end;
}
</style>
