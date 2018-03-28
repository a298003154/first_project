<template>
  <div class="user">
    1234
    {{name}}
    {{data}}
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: 'user',
        data: '123'
      }
    },

  }
</script>

<style lang='scss' scoped>
  .user{
    width: 200px;
    height: 200px;
    background-color: #fff;
  }
</style>

