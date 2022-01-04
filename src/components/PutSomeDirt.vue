<template>
  <div>
    <p>{{ someone }} going to put some dirt in your eyes</p>
  </div>
</template>

<script>
export default {
  name: "PutSomeDirt",
  data() {
    return {
      someone: 'BM'
    }
  }
}
</script>

<style>
#app2 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>