<template>
  <div>
    <h1>{{msg}}</h1>
    <patterns-header/>
  </div>
</template>

<script>

  import PatternsHeader from '../src/modules/patterns/master/header/main';

  export default {
    name: 'app',
    data () {
      return {
        msg: 'Capai Memo'
      }
    },
    components: {
      PatternsHeader,
    }
  }
</script>
