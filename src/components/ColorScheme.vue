<template>
  <div class="wrapper">
    <div class="title">Color scheme:</div>
    <div
      class="item"
      v-for="(color, i) in colors"
      :key="i"
    >
      <div
        class="item-colorBlock"
        :style="{ backgroundColor: color }"
      ></div>
      {{ color }}
    </div>
  </div>
</template>
<script>
export default {
  name: 'ColorScheme',
  props: {
    colors: {
      type: Array,
    },
  },
};
</script>
<style scoped>
.wrapper {
  display: flex;
}

.title {
  margin-right: 10px;
}

.item {
  display: flex;
  width: auto;
  margin-right: 10px;
}

.item-colorBlock {
  width: 25px;
  min-height: 25px;
  border: #fff solid 1px;
  margin-right: 5px;
}
</style>
