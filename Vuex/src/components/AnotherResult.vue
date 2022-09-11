<template>
    <div>
      <p>Counter is: {{ doubleCounter }}</p>
      <p>Number of Clicks: {{ counterString }}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
    export default {
        computed: {
// without spread operator '...' it will not work (object directly inside of an object). The ... tells JS: please, pull out all the properties and methods in the object you have here and create separate key:value pairs for each of them.
          ...mapGetters([
          'doubleCounter',
          'counterString'
        ])
      }
    }
</script>