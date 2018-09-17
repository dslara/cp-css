<template>
  <div>
    <h1>{{msg}}</h1>
    <card/>
  </div>
</template>

<script>

  import Card from '../src/modules/patterns/layout/card/main';

  export default {
    name: 'app',
    data () {
      return {
        msg: 'Capai Memo'
      }
    },
    components: {
      Card,
    }
  }
</script>
