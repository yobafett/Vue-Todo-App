<template>
  <li :class="{ taskItem: true, complete: task.complete }">
    <div class="taskItem-info">
      <p class="taskItem-title">{{ task.title }} {{ task.id }}</p>
      <p class="taskItem-text">{{ task.text }}</p>
    </div>
    <div class="taskItem-controls">
      <CustomCheckbox :checked="task.complete" />
    </div>
  </li>
</template>

<script>
import CustomCheckbox from "./CustomCheckbox";

export default {
  name: "TaskItem",
  props: ["task"],
  components: { CustomCheckbox },
};
</script>

<style scoped>
.taskItem {
  border: 1px solid #FCD9B8;
  border-radius: 1px;
  min-height: 100px;
  padding: 5px;
  background-color: #292C35;
  box-shadow: 3px 3px 1px rgba(224, 145, 69, 0.25);
  cursor: pointer;
  transition: all 0.25s linear;
}

.complete {
  opacity: 0.25;
}

.taskItem:hover {
  border: 1px solid #E09145;
  box-shadow: 3px 3px 1px rgba(224, 145, 69, 0.5);
}
.taskItem:hover .taskItem-title {
  border-bottom: 1px solid #E09145;
}

.taskItem:hover .taskItem-title,
.taskItem:hover .taskItem-text {
  color: #E09145;
}

.taskItem-info {
}

.taskItem-title {
  font-size: 22px;
  font-weight: 700;
  border-bottom: 1px solid #FCD9B8;
  margin-bottom: 5px;
  transition: all 0.25s linear;
}

.taskItem-text {
  padding-right: 25px;
  margin-bottom: 10px;
  transition: all 0.25s linear;
}

.taskItem-controls {
  padding: 5px;
  display: flex;
  justify-content: end;
}
</style>
