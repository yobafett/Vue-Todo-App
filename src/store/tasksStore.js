const taskSessionKey = 'tasks';
const tagsSessionKey = 'tags';

const tasksStore = {
  state: {
    tasks: [
      // {
      //   id: 1,
      //   title: "Task title",
      //   text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   complete: false,
      //   tags: ['asd','qwe']
      // },
    ],
    tags: []
  },
  getters: {
  },
  mutations: {
    addTask(state, task) {
      const newTask = {
        id: Date.now(),
        title: task.title,
        text: task.text,
        complete: false,
        tags: task.tags
      };

      state.tasks = [...state.tasks, newTask];
    },
    addTag(state, tag) {
      const tagIndex = state.tags.findIndex((existTag) => existTag === tag);
      if (tagIndex < 0)
        state.tags = [...state.tags, tag];
    },
    setTasks(state, tasks) {
      state.tasks = tasks;
    },
    setTags(state, tags) {
      state.tags = tags;
    },
    switchComplete(state, { id, complete }) {
      const objIndex = state.tasks.findIndex((obj) => obj.id === id);
      state.tasks[objIndex].complete = complete;
    },
    removeTask(state, id) {
      const objIndex = state.tasks.findIndex((obj) => obj.id === id);
      state.tasks.splice(objIndex, 1);
    },
    removeTag(state, tag) {
      let tagEnters = 0;
      let lastTagIndex;

      state.tasks.forEach(task => {
        lastTagIndex = task.tags.findIndex((obj) => obj === tag);
        if (lastTagIndex >= 0)
          tagEnters++;
      })

      if (tagEnters === 1 && state.tags.length === 1)
        state.tags = [];
      else if (tagEnters === 1)
        state.tags.splice(lastTagIndex, 1);
    },
    updateTask(state, { id, title, text, tags }) {
      const objIndex = state.tasks.findIndex((obj) => obj.id === id);
      state.tasks[objIndex].title = title;
      state.tasks[objIndex].text = text;
      state.tasks[objIndex].tags = tags;
    },
  },
  actions: {
    restoreFromSession(context) {
      const tagsJson = window.sessionStorage.getItem(tagsSessionKey);
      if (tagsJson !== null)
        context.commit('setTags', JSON.parse(tagsJson));

      const tasksJson = window.sessionStorage.getItem(taskSessionKey);
      if (tasksJson !== null)
        context.commit('setTasks', JSON.parse(tasksJson));
    },
    saveToSession(context) {
      const jsonDataTags = JSON.stringify(context.state.tags);
      window.sessionStorage.setItem(tagsSessionKey, jsonDataTags);

      const jsonDataTasks = JSON.stringify(context.state.tasks);
      window.sessionStorage.setItem(taskSessionKey, jsonDataTasks);
    },
    addTask(context, task) {
      task.tags.forEach(tag => context.commit('addTag', tag));

      context.commit('addTask', task);
      context.dispatch('saveToSession');
    },
    switchComplete(context, payload) {
      context.commit('switchComplete', payload);
      context.dispatch('saveToSession');
    },
    removeTask(context, task) {
      task.tags.forEach(tag => context.commit('removeTag', tag));

      context.commit('removeTask', task.id);
      context.dispatch('saveToSession');
    },
    updateTask(context, payload) {
      context.commit('updateTask', payload);
      context.dispatch('saveToSession');
    },
  }
};

export default tasksStore;
