<template>
  <div>
    <router-link to="/using" class="btn prev">&lt;</router-link>
    <h2>きをつけてほしいこと</h2>
    <div class="col-wrap">
      <ul>
        <li><span>・ </span>順番</li>
        <li><span>・ </span>ネスティング</li>
        <li><span>・ </span>詳細度</li>
      </ul>
    </div>
    <router-link to="/order" class="btn next">></router-link>
  </div>
</template>

<script>
export default {
  name: 'Caution'
};
</script>

<style scoped>
</style>