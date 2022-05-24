<template>
  <div id="app">
    <bangdan></bangdan>
    <!-- 自动遍历路由 -->
    <router-view></router-view>
  </div>
</template>

<script>
import bangdan from "../src/bangdan.vue";

export default {
  name: "App",
  components: {
    bangdan,
  },
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
}
@font-face {
  font-family: "iconfont"; /* project id 3418354 */
  src: url("");
  src: url("?#iefix") format("embedded-opentype"),
    url("//at.alicdn.com/t/font_3418354_h2olpitcme.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_3418354_h2olpitcme.woff") format("woff"),
    url("//at.alicdn.com/t/font_3418354_h2olpitcme.ttf") format("truetype"),
    url("#iconfont") format("svg");
}
a {
  color: black;
}
a:hover {
  color: red;
}
.el-table__row:hover {
  // background-color: red !important;
  cursor: pointer
  // background-color: aqua;
}
.el-table_1_column_4:hover  i{
  cursor: wait;
  display: block
}
</style>
