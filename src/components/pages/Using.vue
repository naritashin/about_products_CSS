<template>
  <div>
    <router-link to="/contents" class="btn prev">&lt;</router-link>
    <h2>つかっているものとかとか</h2>
    <ul>
      <li><span>・ </span><a href="http://lesscss.org/" target="_brank">LESS (http://lesscss.org/)</a></li>
      <li><span>・ </span>ディレクトリ構成(追々... m(_ _)m)</li>
    </ul>
    <router-link to="/cautions" class="btn next">></router-link>
  </div>
</template>

<script>
export default {
  name: 'Using'
};
</script>

<style scoped>
</style>