<template>
  <transition-group
    class="tags"
    name="list"
    tag="ul"
  >
    <li
      class="tag"
      v-for="(tag, index) in tags"
      :key="index"
    >
      {{ tag }}
    </li>
  </transition-group>
</template>

<script>
export default {
  name: 'TagsList',
  props: ['tags'],
};
</script>

<style scoped wlang="scss">
.tags {
  list-style: none;
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  .tag {
    border: 1px #292C35 solid;
    padding: 1px 10px;
    background-color: rgba(41, 44, 53, 0.25);
    border-radius: 2.5px;
    cursor: pointer;
    &:hover {
      background-color: rgba(41, 44, 53, 0.75);
      box-shadow: 1px 1px 1px rgba(224, 145, 69, 0.75);
      color: #e09145;
    }
  }
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
