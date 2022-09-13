<template>
    <div>
      <p>Counter is: {{ doubleCounter }}</p>
      <p>Number of Clicks: {{ counterString }}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import * as types from '../state/types'
    export default {
        computed: {
          ...mapGetters({
            doubleCounter: types.DOUBLE_COUNTER,
            counterString: types.CLICK_COUNTER
          })
      }
    }
</script>