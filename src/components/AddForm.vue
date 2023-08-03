<template>
  <div class="wrapper">
    <transition name="bounce">
      <div
        @click="switchClosed"
        v-show="isClosed"
        class="openBtn"
      >
        +
      </div>
    </transition>

    <transition name="bounce">
      <div v-show="!isClosed">
        <button
          class="closeBtn"
          @click="switchClosed"
        >
          ▲
        </button>

        <form class="addForm">
          <input
            v-model="taskTitle"
            placeholder="Task title..."
          />
          <input
            v-model="taskText"
            placeholder="Task text..."
          />
          <transition-group
            class="tagSection"
            name="tags"
            tag="div"
          >
            <input
              v-model="taskTags[n - 1]"
              placeholder="Add tag..."
              @focusin="addTagsCount"
              @focusout="checkTagsCount"
              v-for="n in tagsCount"
              :key="n"
              :data-keyAtr="n"
            />
          </transition-group>
          <button @click.prevent="sendForm">Add</button>
        </form>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'AddForm',
  methods: {
    switchClosed() {
      this.isClosed = !this.isClosed;
    },
    sendForm() {
      console.log();
      this.$emit('create', {
        title: this.taskTitle,
        text: this.taskText,
        tags: this.taskTags,
      });

      this.switchClosed();
      this.taskTitle = '';
      this.taskText = '';
      this.taskTags = [''];
      this.tagsCount = 1;
    },
    addTagsCount(e) {
      if (parseInt(e.target.getAttribute('data-keyAtr')) === this.tagsCount) {
        this.tagsCount++;
      }
    },
    checkTagsCount(e) {
      if (e.target.value.length === 0 && this.tagsCount > 1) {
        this.tagsCount--;
      }
    },
  },
  data() {
    return {
      isClosed: true,
      tagsCount: 1,
      taskTitle: '',
      taskText: '',
      taskTags: [''],
    };
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  max-width: 500px;
  margin: 0 auto;
  .openBtn {
    height: 50px;
    line-height: 45px;
    font-size: 62px;
    border: 1px solid #fcd9b8;
    text-align: center;
    cursor: pointer;
    transition: all 0.25s linear;
    box-shadow: 3px 3px 1px rgba(224, 145, 69, 0.25);
    user-select: none;
    &:hover {
      background-color: #fcd9b8;
      color: #17181d;
      box-shadow: 3px 3px 1px rgba(224, 145, 69, 0.5);
    }
  }
  .closeBtn {
    width: 100%;
    vertical-align: middle;
    height: 50px;
    line-height: 42.5px;
    background-color: #292c35;
    border: #fcd9b8 1px solid;
    font-size: 25px;
    padding-bottom: 40px;
    cursor: pointer;
    transition: all 0.25s linear;
    user-select: none;
    &:hover {
      background-color: #fcd9b8;
      color: #292c35;
    }
  }
  .addForm {
    border: 1px solid #fcd9b8;
    min-height: 50px;
    transition: all 0.25s linear;
    box-shadow: 3px 3px 1px rgba(224, 145, 69, 0.25);
    padding: 25px 15px;
    display: flex;
    flex-direction: column;
    background-color: #292c35;
    .tagSection {
      display: flex;
      flex-wrap: wrap;
      input {
        width: 22%;
        margin-right: 14px;
      }
    }
    input {
      margin-bottom: 10px;
      font-size: 20px;
      background-color: #17181d;
      border: 1px solid #fcd9b8;
      padding: 5px 15px;
      box-shadow: 3px 3px 1px rgba(224, 145, 69, 0.25);
    }
    button {
      font-size: 24px;
      background-color: #17181d;
      cursor: pointer;
      border: 1px solid #fcd9b8;
      padding: 5px;
      box-shadow: 3px 3px 1px rgba(224, 145, 69, 0.25);
      transition: all 0.25s linear;
      &:hover {
        background-color: #fcd9b8;
        color: #17181d;
      }
    }
  }
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
  transform-origin: top;
  position: absolute;
  width: 500px;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
  transform-origin: top;
  position: absolute;
  width: 500px;
}
@keyframes bounce-in {
  0% {
    transform: scaleY(0);
  }
  50% {
    transform: scaleY(0);
  }
  75% {
    transform: scaleY(1.1);
    transform: scaleX(1.1);
  }
  100% {
    transform: scaleY(1);
    transform: scaleX(1);
  }
}
.tags-enter-active,
.tags-leave-active {
  transition: all 0.5s ease;
}
.tags-enter-from,
.tags-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
