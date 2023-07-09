import { createStore } from "vuex";
import tasksStore from "./tasksStore.js";

const store = createStore({
  modules: {
    tasksStore: tasksStore
  }
});

export default store;
