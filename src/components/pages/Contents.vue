<template>
  <div>
    <router-link to="/oneself" class="btn prev">&lt;</router-link>
    <ul>
      <li><span>(1) </span>つかっているものとかとか</li>
      <li><span>(2) </span>きをつけてほしいこと</li>
    </ul>
    <router-link to="/using" class="btn next">></router-link>
  </div>
</template>

<script>
export default {
  name: 'Contents'
};
</script>

<style scoped>
</style>