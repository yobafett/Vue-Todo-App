<template>
  <li :class="{ taskItem: true, complete: task.complete }">
    <div class="header">
      <div>
        <p class="id">task id: {{ task.id }}</p>

        <form v-show="isTitleEdit">
          <input
            type="text"
            ref="titleInputRef"
            v-model="taskTitle"
            @focusout="saveTitle"
          />
        </form>
        <p
          v-show="!isTitleEdit"
          class="title"
          @click="editTitle"
        >
          {{ taskTitle }}
        </p>
      </div>
      <p
        class="delBtn"
        @click="sendDelete"
      >
        🗙
      </p>
    </div>

    <form v-show="isTextEdit">
      <input
        type="text"
        ref="textInputRef"
        v-model="taskText"
        @focusout="saveText"
      />
    </form>
    <p
      class="text"
      v-show="!isTextEdit"
      @click="editText"
    >
      {{ taskText }}
    </p>

    <div class="controls">
      <CustomCheckbox
        :checked="task.complete"
        @click="(e) => sendComplete(e)"
      />
    </div>
  </li>
</template>

<script>
import CustomCheckbox from './CustomCheckbox';

export default {
  name: 'TaskItem',
  props: ['task'],
  data() {
    return {
      isTitleEdit: false,
      taskTitle: this.task.title,
      isTextEdit: false,
      taskText: this.task.text,
    };
  },
  methods: {
    editTitle() {
      this.isTitleEdit = true;
      setTimeout(() => {
        this.$refs.titleInputRef.focus();
      }, 100);
    },
    saveTitle() {
      this.isTitleEdit = false;
      this.sendUpdate();
    },
    editText() {
      this.isTextEdit = true;
      setTimeout(() => {
        this.$refs.textInputRef.focus();
      }, 100);
    },
    saveText() {
      this.isTextEdit = false;
      this.sendUpdate();
    },
    sendUpdate() {
      this.$emit('update', {
        id: this.task.id,
        title: this.taskTitle,
        text: this.taskText,
      });
    },
    sendDelete() {
      this.$emit('delete', this.task.id);
    },
    sendComplete(e) {
      if (e.target.checked !== undefined) {
        this.$emit('complete', {
          id: this.task.id,
          complete: e.target.checked,
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
