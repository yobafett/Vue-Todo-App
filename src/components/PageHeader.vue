<template>
  <div class="pageHeader">
    <div class="nav">
      <h1 @click="$router.push('/')">Todo app</h1>
      <h2 @click="$router.push('/tasks')">Task list</h2>
    </div>
    <ColorScheme :colors="colors" />
  </div>
</template>

<script>
import ColorScheme from '@/components/ColorScheme.vue';

export default {
  name: 'PageHeader',
  components: { ColorScheme },
  data() {
    return {
      colors: ['#fcd9b8', '#e09145', '#292C35', '#17181d'],
    };
  },
};
</script>

<style scoped lang="scss">
.pageHeader {
  margin: 0px 15px;
  margin-bottom: 15px;
  padding-bottom: 5px;
  border-bottom: 1px solid #fcd9b8;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  .nav {
    h1 {
      font-size: 72px;
    }
    h2 {
      font-size: 32px;
    }
    * {
      cursor: pointer;
      transition: all 0.25s linear;
      &:hover {
        color: #e09145;
      }
    }
  }
}
</style>
