<template>
  <PageHeader />
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue';

export default {
  name: 'App',
  components: { PageHeader },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&display=swap');

* {
  font-family: 'Oswald', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #fcd9b8;
}
body {
  background-color: #17181d;
}
.app {
  border-radius: 1px;
  padding: 15px;
}
</style>

