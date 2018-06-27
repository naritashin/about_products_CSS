<template>
  <div>
    <router-link to="/nesting" class="btn prev">&lt;</router-link>
    <h2>きをつけてほしいこと</h2>
    <div class="col-wrap">
      <ul>
        <li><span>・ </span>順番</li>
        <li><span>・ </span>ネスティング</li>
        <li class="current"><span>・ </span>詳細度</li>
      </ul>
      <div class="contents">
        <p class="caution">高くしすぎない</p>
        <p>ネスティングを気を付ければ8割り大丈夫</p>
        <p>VueJSなら scoped</p>
        <p>レスポンシブ対応時は要注意</p>
      </div>
    </div>
    <router-link to="/finally" class="btn next">></router-link>
  </div>
</template>

<script>
export default {
  name: 'Detail'
};
</script>

<style scoped>
</style>