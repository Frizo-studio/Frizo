<template>
  <div class="homebody">
    <div class="container">
      <div class="row">
        <div class="col-sm-2">
          <sidelist></sidelist>
        </div>
        <div class="col-sm-10">One of three columns</div>
      </div>
    </div>
  </div>
</template>

<script>
import sidelist from '@/components/sidelist'

export default {
  name: 'Homebody',
  components: {
    sidelist
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.homebody {
  position: relative;
  left: 80px;
  top: 15px;
  width: 65vw;
  height: 600px;
}
</style>
