<template>
  <div>
    <router-link to="/" class="btn prev">&lt;</router-link>
    <ul>
      <li><span>名前: </span>なりた しん</li>
      <li><span>前職: </span>彫刻家</li>
      <li><span>言語: </span>ES PHP(少し) Golang(勉強中)</li>
      <li><span>趣味: </span>本, 絵, 彫刻, 散歩etc</li>
    </ul>
    <router-link to="/contents" class="btn next">></router-link>
  </div>
</template>

<script>
export default {
  name: 'Oneself'
};
</script>

<style scoped>
</style>