<template>
  <div class="sidelist">
    <h4>看板列表</h4>
    <div class="sideBtn">全部</div>
    <ul class="mt-3">
      <li>台北商業大學</li>
      <li>台灣大學</li>
      <li>台北科技大學</li>
      <li>台灣科技大學</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Sidelist'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sidelist {
  position: relative;
  text-align: left;
  top: 30px;
}
.sideBtn {
  height: 30px;
  width: 100px;
  background-color: #0bb6b6;
  border-radius: 8px;
  text-align: left;
  padding-left: 3px;
  font-size: 18px;
  display: flex;
  align-items: center;
}
ul {
  margin: 0;
  padding: 0;
}
li {
  list-style-type: none;
}
</style>
