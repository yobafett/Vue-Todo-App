<template>
  <li :class="{ taskItem: true, complete: task.complete }">
    <div class="header">
      <div>
        <p class="id">task id: {{ task.id }}</p>
        <p class="title">{{ task.title }}</p>
      </div>
      <p class="delBtn">🗙</p>
    </div>

    <p class="text">{{ task.text }}</p>

    <div class="controls">
      <CustomCheckbox :checked="task.complete" @click="(e) => sendComplete(e)"/>
    </div>
  </li>
</template>

<script>
import CustomCheckbox from './CustomCheckbox';

export default {
  name: 'TaskItem',
  props: ['task'],
  methods: {
    sendComplete(e) {
      if(e.target.checked !== undefined){
        this.$emit('complete', {
          id: this.task.id,
          complete: e.target.checked
        });
      }
    },
  },
  components: { CustomCheckbox },
};
</script>

<style scoped lang="scss">
.complete {
  opacity: 0.25;
}
.taskItem {
  border: 1px solid #fcd9b8;
  padding: 10px;
  border-radius: 1px;
  min-height: 100px;
  background-color: #292c35;
  box-shadow: 3px 3px 1px rgba(224, 145, 69, 0.25);
  transition: all 0.25s linear;
  & * {
    transition: all 0.25s linear;
  }
  &:hover {
    box-shadow: 3px 3px 1px rgba(224, 145, 69, 0.75);
  }
  .header {
    border-bottom: 1px solid #fcd9b8;
    padding-bottom: 5px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    .id {
      font-size: 8px;
    }
    .title {
      font-size: 22px;
      font-weight: 700;
      cursor: pointer;
      &:hover {
        color: #e09145;
      }
    }
    .delBtn {
      font-size: 30px;
      line-height: 30px;
      cursor: pointer;
      &:hover {
        color: #e09145;
      }
    }
  }
  .text {
    margin-bottom: 30px;
    cursor: pointer;
    &:hover {
      color: #e09145;
    }
  }
  .controls {
    display: flex;
    justify-content: end;
  }
}
</style>
