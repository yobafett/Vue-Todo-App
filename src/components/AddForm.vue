<template>
  <div @click="switchClosed" v-show="isClosed">
    <div class="addBtn">+</div>
  </div>
  <div v-show="!isClosed">
    <form class="addForm">
      <input v-model="taskTitle" placeholder="Task title..." />
      <input v-model="taskText" placeholder="Task text..." />
      <button @click="switchClosed">Add</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddForm",
  // props: ["task"],
  methods: {
    switchClosed() {
      this.isClosed = !this.isClosed;
    },
  },
  data() {
    return {
      isClosed: false,
      taskTitle: "",
      taskText: "",
    };
  },
};
</script>

<style scoped>
.addBtn {
  height: 50px;
  line-height: 45px;
  font-size: 62px;
  border: 1px solid #FCD9B8;
  text-align: center;
  cursor: pointer;
  transition: all 0.25s linear;
  box-shadow: 3px 3px 1px rgba(224, 145, 69, 0.25);
}

.addBtn:hover {
  background-color: #FCD9B8;
  color: #17181D;
  box-shadow: 3px 3px 1px rgba(224, 145, 69, 0.5);
}

.addForm {
  border: 1px solid #FCD9B8;
  min-height: 50px;
  transition: all 0.25s linear;
  box-shadow: 3px 3px 1px rgba(224, 145, 69, 0.25);
  padding: 10px;
  display: flex;
  flex-direction: column;
  background-color: #292C35;
}

.addForm input {
  margin-bottom: 10px;
  font-size: 24px;
  background-color: #17181D;
  border: 1px solid #FCD9B8;
  padding: 5px;
  box-shadow: 3px 3px 1px rgba(224, 145, 69, 0.25);
}

.addForm button {
  font-size: 24px;
  background-color: #17181D;
  cursor: pointer;
  border: 1px solid #FCD9B8;
  padding: 5px;
  box-shadow: 3px 3px 1px rgba(224, 145, 69, 0.25);
  transition: all 0.25s linear;
}

.addForm button:hover {
  background-color: #FCD9B8;
  color: #17181D;
}
</style>
