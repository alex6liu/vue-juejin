<template>
    <div>
        hi
    </div>
</template>

<script>
import { getRecommended } from '../../api';

export default {
//   data: () => {
//     recommendList: [],
//   },
  beforeMount: () => {
    console.log(getRecommended);
  },
};
</script>
