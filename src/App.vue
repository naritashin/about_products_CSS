<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

body {
  background: linear-gradient(175deg, #aef, #6df, 90%, #0ae, 0%, #fcc);
  box-sizing: border-box;
  height: 100%;
  padding: 60px 60px;
}

h2 {
  color: #137;
  font-size: 40px;
  font-weight: bold;
}

ul {
  flex-grow: 1;
}

li {
  color: #333;
  font-size: 20px;
  padding: 20px 0;
}

li > span {
  font-weight: bold;
}

.current {
  color: #03a;
  font-weight: bold;
}

a {
  color: #f00;
  text-decoration: none;
}

.btn {
  animation: fadein 1.5s forwards;
  background-color: #0009;
  bottom: 0;
  color: #aaa;
  font-size: 40px;
  height: 120px;
  line-height: 120px;
  margin: auto;
  position: absolute;
  text-align: center;
  text-decoration: none;
  top: 0;
  width: 50px;
}

.col-wrap {
  display: flex;
  margin-top: 40px;
}

.contents {
  flex-grow: 1;
  font-size: 20px;
}

.about {
  color: #ccf;
  background: #028;
  border: 1px solid #888;
  border-radius: 12px;
  box-sizing: border-box;
  margin: 40px 6px 0;
  padding: 12px 6px;
}

.caution {
  color: #f00;
  font-size: 24px;
  font-weight: bold;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}

@keyframes fadein {
  0% {
    opacity: 0;
  }
  60% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>