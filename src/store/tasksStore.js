const tasksStore = {
  state: {
    tasks: [
      {
        id: 1,
        title: "Task title",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        complete: false
      },
      {
        id: 2,
        title: "Task title",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        complete: false
      },
      {
        id: 3,
        title: "Task title",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        complete: false
      },
      {
        id: 4,
        title: "Task title",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        complete: true
      }
    ]
  },
  getters: {
    allTasks(state) {
      return state.tasks;
    }
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
    switchComplete(state, id) {
      const objIndex = state.tasks.findIndex((obj) => obj.id === id);
      state.tasks[objIndex].complete = !state.tasks[objIndex].complete;
    }
  },
  actions: {
  }
};

export default tasksStore;
