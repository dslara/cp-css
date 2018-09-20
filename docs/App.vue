<template>
  <div>
    <h1>{{msg}}</h1>
     <p-card :content=msg></p-card>
     <p-card></p-card>
  </div>
</template>

<script>
  import pCard from '../src/modules/patterns/layout/card/main';

  export default {
    name: 'app',
    data () {
      return {
        msg: 'Vue Prototype'
      }
    }
  }
</script>
