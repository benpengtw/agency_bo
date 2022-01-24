<template>
  <div class="container pb-4 FLEX_C">
    <van-nav-bar left-text="" left-arrow class="p-4 bgColor">
      <template #left>
        <i
          class="text-2xl text-primary my-icon my-icon-back"
          @click="goBack"
        ></i>
      </template>
      <template #title>
        <h5 class="text-white">活动图片</h5>
      </template>
      <template #right>
        <img
          :src="state.download"
          @click="showAdd(true)"
          class="text-[#967140] p-3"
        />
      </template>
    </van-nav-bar>
    <div class="container px-2 py-4 FLEX_C">
      <a :href="state.demo1" download class="FLEX_C">
        <van-image v-bind:src="state.demo1" />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import NavBar from "@/components/NavBar/index.vue";
import demo1 from "@/assets/demo/demo1.png";
import download from "@/assets/img/download.svg";
import { getPromotionList } from "@/api/promotion/promotion";
import { useRouter } from "vue-router";
import { ref, onMounted, reactive } from "vue";
export default {
  components: {
    NavBar,
  },
  setup() {
    const router = useRouter();
    const list = ref([
      {
        name: "【活动】Johnnywang",
        endTime: "2017/12/25 18:45:34",
        content: "<ul><li>Coffee</li><li>Tea</li><li>Milk</li></ul>",
        imageH5: demo1,
        win: 1,
      },
    ]);
    const loading = ref(true);
    const finished = ref(false);
    const state = reactive({
      download: download,
      demo1: demo1,
    });
    const onLoad = () => {
      // 异步更新数据
      // setendTimeout 仅做示例，真实场景中一般为 ajax 请求
      // setTimeout(() => {
      //   for (let i = 0; i < 5; i++) {
      //     list.value.push({
      //       name: "【活动】Johnnywang",
      //       endTime: "2017/12/2" + list.value.length + 1,
      //       content: "<ul><li>Coffee</li><li>Tea</li><li>Milk</li></ul>",
      //       imageH5: demo1,
      //       win: list.value.length + 1,
      //     });
      //   }
      //   // 加载状态结束
      //   loading.value = false;
      //   // 数据全部加载完成
      //   if (list.value.length >= 40) {
      //     finished.value = true;
      //   }
      // }, 1000);
      // getPromotionList().then((response) => {
      //   console.log(response.data.data.list);
      //   list.value = list.value.concat(response.data.data.list);
      //   loading.value = false;
      //   finished.value = true;
      // });
    };
    const goBack = () => {
      router.push({ path: "/promotionPage" });
    };
    return {
      list,
      state,
      onLoad,
      goBack,
      loading,
      finished,
    };
  },
};
</script>

<style lang="less" scoped>
@font-face {
  font-family: "my-icon";
  src: url("@/assets/fonts/icomoon.ttf") format("truetype");
}
.my-icon {
  font-family: "my-icon";
  color: #cda269;
  font-size: 1.8rem;
}
.van-cell::after,
[class*="van-hairline"]::after {
  display: none;
}
.bgColor {
  background: linear-gradient(101.58deg, #333333 3.4%, #1a1a1a 97.37%);
}
</style>
