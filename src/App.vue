<template>
  <div class="w-full FLEX_C">
    <div
      :class="
        currentPath !== '/' ? 'flex flex-grow bg-black' : 'flex flex-grow'
      "
    >
      <router-view />
    </div>
    <TabBar v-if="currentPath !== '/'" />
  </div>
</template>

//
<script setup lang="ts">
import TabBar from "@/components/TabBar/index.vue";
import { computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const currentPath = computed(() => {
  // console.log("route changed", router.currentRoute.value.path);
  return router.currentRoute.value.path;
});
</script>
<style lang="less" scoped>
::v-deep(.van-tabs__nav--line) {
  padding-bottom: 1.5rem;
}

::v-deep(.el-table) {
  --el-table-tr-background-color: transparent;
  --el-table-row-hover-background-color: #505050;
  --el-table-header-font-color: #fff;
  --el-table-header-background-color: transparent;
  --el-table-font-color: #fff;
  --el-table-background-color: transparent;
  --el-table-border-color: rgba(255, 255, 255, 0.2);
}
::v-deep(.el-table thead) {
  color: rgba(255, 255, 255, 0.5);
}
</style>
