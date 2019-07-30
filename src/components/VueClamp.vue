<template>
  <v-clamp autoresize :max-lines="3">{{ text }}</v-clamp>
</template>

<script>
import VClamp from "vue-clamp";

export default {
  components: {
    VClamp
  },
  data() {
    return {
      text: "风停了，尘土里带有花的香气，花儿已凋落殆尽。日头已经升的老高，我却懒得来梳妆。景物依旧，人事已变，一切事情都已经完结。想要倾诉自己的感慨，还未开口，眼泪先流下来。听说双溪春景尚好，我也打算泛舟前去。只恐怕双溪蚱蜢般的小船，载不动我许多的忧愁。"
    };
  }
};
</script>