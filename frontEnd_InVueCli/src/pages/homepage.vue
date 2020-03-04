<template>
  <div>
    <navbar></navbar>
    <homebody></homebody>
  </div>
</template>

<script>
import navbar from '@/components/navbar'
import homebody from '@/components/homebody'

export default {
  name: 'Homepage',
  components: {
    navbar,
    homebody
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  font-family: Malgun Gothic;
}
</style>
