<template>
  <label class="container">
    <input v-if="checked" type="checkbox" checked />
    <input v-else type="checkbox" />
    <span class="checkmark"></span>
  </label>
</template>

<script>
export default {
  name: "CustomCheckbox",
  props: ["checked"],
};
</script>

<style scoped>
/* Customize the label (the container) */
.container {
  display: block;
  position: relative;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  right: 0px;
  bottom: 0px;
  height: 25px;
  width: 25px;
  background-color: #17181D;
  transition: all 0.25s linear;
  border: 1px solid #17181D;
}

.checkmark:hover {
  border: 1px solid #fcd9b8;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  /* background-color: #ccc; */
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  /* background-color: #2196F3; */
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid #E09145;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
