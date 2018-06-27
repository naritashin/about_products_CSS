<template>
  <div>
    <router-link to="/cautions" class="btn prev">&lt;</router-link>
    <h2>きをつけてほしいこと</h2>
    <div class="col-wrap">
      <ul>
        <li class="current"><span>・ </span>順番</li>
        <li><span>・ </span>ネスティング</li>
        <li><span>・ </span>詳細度</li>
      </ul>
      <div class="contents">
        <p class="caution">アルファベット順</p>
        <p>ただそれだけ。</p>
      </div>
      <div class="contents">
        <p class="caution">NG</p>
        <p class="about">.hoge {<br>　display: block;<br>　width: 50px;<br>　height: 100vh;<br>　margin: auto;<br>...<br>}</p>
      </div>
      <div class="contents">
        <p class="caution">BEST</p>
        <p class="about">.hoge {<br>　display: block;<br>　height: 100vh;<br>　margin: auto;<br>　width: 50px;<br>...<br>}</p>
      </div>
    </div>
    <router-link to="/nesting" class="btn next">></router-link>
  </div>
</template>

<script>
export default {
  name: 'Order'
};
</script>

<style scoped>
</style>