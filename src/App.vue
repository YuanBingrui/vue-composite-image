<template>
  <div id="app">
    <CompositeImage/>
  </div>
</template>

<script>
import CompositeImage from './components/composite-image'

export default {
  name: 'app',
  components: {
    CompositeImage
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
