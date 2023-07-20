<template>
  <label class="container">
    <input
      v-if="checked"
      type="checkbox"
      checked
    />
    <input
      v-else
      type="checkbox"
    />
    <span class="checkmark"></span>
  </label>
</template>

<script>
export default {
  name: 'CustomCheckbox',
  props: ['checked'],
};
</script>

<style scoped lang="scss">
.container {
  display: block;
  position: relative;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
    &:checked ~ .checkmark:after {
      display: block;
    }
  }
  .checkmark {
    position: absolute;
    right: 0px;
    bottom: 0px;
    height: 25px;
    width: 25px;
    background-color: #17181d;
    transition: all 0.25s linear;
    border: 1px solid #17181d;
    &:hover {
      border: 1px solid #fcd9b8;
    }
    &:after {
      content: '';
      position: absolute;
      display: none;
      left: 9px;
      top: 5px;
      width: 5px;
      height: 10px;
      border: solid #e09145;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
}
</style>
