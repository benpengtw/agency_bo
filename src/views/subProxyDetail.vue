<template>
  <div class="container pb-4 FLEX_C">
    <NavBar :name="'Jenchen'" :back="'/subProxyPage'" />
    <!-- <div class="flex justify-center ...">
      <div class="head">2018年4月</div>
    </div> -->
    <div class="px-2">
      <van-tabs
        v-model:active="activePopTab"
        animated
        background="black"
        title-active-color="white"
        title-inactive-color="#ccc"
        color="white"
        line-width="50%"
        line-height="1"
        class="p-4"
      >
        <van-tab title="上月">
          <div class="p-4 m-5 rounded-md cursor-pointer btnBg CENTER_C">
            <div class="text-primary">◆ 净输赢 ◆</div>
            <div class="text-white bodoni">999,649,000.00</div>
          </div>
          <div class="p-4 m-5 rounded-md cursor-pointer btnBg CENTER_C">
            <div class="text-primary">◆ 佣金比例 ◆</div>
            <div class="text-white bodoni">99%</div>
          </div>
          <div class="p-4 m-5 rounded-md cursor-pointer btnBg CENTER_C">
            <div class="text-primary">◆ 佣金 ◆</div>
            <div class="text-white bodoni">999,999,999.00</div>
          </div>
          <div class="p-4 m-5 rounded-md cursor-pointer btnBg CENTER_C">
            <div class="text-primary">◆ 活跃数 ◆</div>
            <div class="text-white bodoni">888,888,888</div>
          </div>
          <div class="p-4 m-5 rounded-md cursor-pointer btnBg CENTER_C">
            <div class="text-primary">◆ 上次登录时间 ◆</div>
            <div class="text-white bodoni">2021/10/13 00:00:00</div>
          </div>
        </van-tab>
        <van-tab title="本月">
          <div class="p-4 m-5 rounded-md cursor-pointer btnBg CENTER_C">
            <div class="text-primary">◆ 净输赢 ◆</div>
            <div class="text-red bodoni">-999,649,000.00</div>
          </div>
          <div class="p-4 m-5 rounded-md cursor-pointer btnBg CENTER_C">
            <div class="text-primary">◆ 佣金比例 ◆</div>
            <div class="text-white bodoni">99%</div>
          </div>
          <div class="p-4 m-5 rounded-md cursor-pointer btnBg CENTER_C">
            <div class="text-primary">◆ 佣金 ◆</div>
            <div class="text-red bodoni">-999,999,999.00</div>
          </div>
          <div class="p-4 m-5 rounded-md cursor-pointer btnBg CENTER_C">
            <div class="text-primary">◆ 活跃数 ◆</div>
            <div class="text-white bodoni">888,888,888</div>
          </div>
          <div class="p-4 m-5 rounded-md cursor-pointer btnBg CENTER_C">
            <div class="text-primary">◆ 上次登录时间 ◆</div>
            <div class="text-white bodoni">2021/10/13 00:00:00</div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar/index.vue";
import { ref } from "vue";
export default {
  components: {
    NavBar,
  },
  setup() {
    const show = ref(false);
    const active = ref(0);
    const activePopTab = ref(0);

    return {
      activePopTab,
      active,
      show,
    };
  },
};
</script>
<style lang="less" scoped>
.van-cell {
  color: #cda269;
}

::v-deep(.van-cell__title) {
  color: #ffffffbd;
}
.btnBg {
  background-image: url("@/assets/pattern_btn_bg.svg"),
    linear-gradient(155.07deg, #343434 5.26%, #181818 84.13%);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 98% center;
}
</style>
