const taskSessionKey = 'tasks';

const tasksStore = {
  state: {
    tasks: [
      // {
      //   id: 1,
      //   title: "Task title",
      //   text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   complete: false
      // },
    ]
  },
  getters: {
  },
  mutations: {
    addTask(state, task) {
      const newTask = {
        id: Date.now(),
        title: task.title,
        text: task.text,
        complete: false
      };

      state.tasks = [...state.tasks, newTask];
    },
    setTasks(state, tasks) {
      state.tasks = tasks;
    },
    switchComplete(state, { id, complete }) {
      const objIndex = state.tasks.findIndex((obj) => obj.id === id);
      state.tasks[objIndex].complete = complete;
    },
    removeTask(state, id) {
      const objIndex = state.tasks.findIndex((obj) => obj.id === id);
      state.tasks.splice(objIndex, 1);
    },
    updateTask(state, { id, title, text }) {
      const objIndex = state.tasks.findIndex((obj) => obj.id === id);
      state.tasks[objIndex].title = title;
      state.tasks[objIndex].text = text;
    },
  },
  actions: {
    restoreFromSession(context) {
      const tasksJson = window.sessionStorage.getItem(taskSessionKey)
      if (tasksJson !== null)
        context.commit('setTasks', JSON.parse(tasksJson));
    },
    saveToSession(context) {
      const jsonData = JSON.stringify(context.state.tasks);
      window.sessionStorage.setItem(taskSessionKey, jsonData);
    },
    addTask(context, task) {
      context.commit('addTask', task);
      context.dispatch('saveToSession');
    },
    switchComplete(context, payload) {
      context.commit('switchComplete', payload);
      context.dispatch('saveToSession');
    },
    removeTask(context, id) {
      context.commit('removeTask', id);
      context.dispatch('saveToSession');
    },
    updateTask(context, payload) {
      context.commit('updateTask', payload);
      context.dispatch('saveToSession');
    },
  }
};

export default tasksStore;
