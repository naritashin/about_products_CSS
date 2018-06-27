<template>
  <div>
    <router-link to="/order" class="btn prev">&lt;</router-link>
    <h2>きをつけてほしいこと</h2>
    <div class="col-wrap">
      <ul>
        <li><span>・ </span>順番</li>
        <li class="current"><span>・ </span>ネスティング</li>
        <li><span>・ </span>詳細度</li>
      </ul>
      <div class="contents">
        <p class="caution">深くしない</p>
        <p>3つまで</p>
      </div>
      <div class="contents">
        <p class="caution">NG</p>
        <p class="about">#hoge {<br>　.huga {<br>　　.unko {<br>　　　.inpo {<br>　　　　span {<br><br>　　　　}<br>　　　}<br>　　}<br>　}<br>...<br>}</p>
      </div>
      <div class="contents">
        <p class="caution">BEST</p>
        <p class="about">#hoge {<br>　.huga {<br>　　.unko {<br><br>　　}<br><br>　　.inpo {<br><br>　　}<br><br>　　.hinna {<br><br>　　}<br>　}<br>...<br>}</p>
      </div>
    </div>
    <router-link to="/detail" class="btn next">></router-link>
  </div>
</template>

<script>
export default {
  name: 'Nesting'
};
</script>

<style scoped>
</style>