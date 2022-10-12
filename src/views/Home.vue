<template>
  <div>
    <bounce-loader :loading="isLoading" :color="'#68d391'" :size="'100px'">
    </bounce-loader>
    <px-assets-table v-if="!isLoading" :assets="assets"></px-assets-table>
  </div>
</template>

<script>
import api from "@/Api";
import pxAssetsTable from "@/components/pxAssetsTable";
import BounceLoader from "vue-spinner/src/BounceLoader.vue";

export default {
  name: "Home",
  components: {
    pxAssetsTable,
    BounceLoader,
  },

  data() {
    return {
      isLoading: false,
      assets: [],
    };
  },

  created() {
    this.isLoading = true;
    api
      .getAssets()
      .then((assets) => (this.assets = assets))
      .finally(() => (this.isLoading = false));
  },
};
</script>
