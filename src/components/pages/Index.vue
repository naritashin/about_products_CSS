<template>
  <div>
    <svg width="100%" height="100%">
      <text x="60%" y="50%">About CSS</text>
    </svg>
    <router-link to="/oneself" class="btn next">></router-link>
  </div>
</template>

<script>
export default {
  name: 'Index'
};
</script>

<style scope>
text {
  animation: title 3s forwards;
  fill: none;
  font-size: 70px;
  stroke: #888;
  stroke-dasharray: 150%;
}

@keyframes title {
  0% {
    stroke-dashoffset: 150%;
  }
  20% {
    stroke-dashoffset: 150%;
  }
  40% {
    fill: transparent;
  }
  100% {
    fill: #000;
    stroke-dashoffset: 0;
  }
}
</style>