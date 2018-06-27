<template>
  <div>
    <router-link to="/detail" class="btn prev">&lt;</router-link>
    <svg width="100%" height="100%">
      <text x="30%" y="80%">ご静聴ありがとうございました</text>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Finally'
};
</script>

<style scoped>
text {
  animation: title 3s forwards;
  fill: none;
  font-size: 40px;
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