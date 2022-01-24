<template>
  <div class="container pb-4 FLEX_C">
    <NavBar :name="'活动'" />
    <div class="px-2">
      <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <div v-for="item in list" :key="item.name">
          <div class="bg-[#0f0f0f] container px-2 py-4 FLEX_C">
            <van-image v-bind:src="item.imageH5" @click="toBanner" />
            <p class="text-xs text-subWhite">{{ item.endTime }}</p>
            {{ item.name }}
            <div v-html="item.content"></div>
          </div>
        </div>
      </van-list>
    </div>
  </div>
</template>

<script lang="ts">
import NavBar from "@/components/NavBar/index.vue";
import demo1 from "@/assets/demo/demo1.png";
import { useRouter } from "vue-router";
import { getPromotionList } from "@/api/promotion/promotion";
import { ref, onMounted } from "vue";
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
    const toBanner = (value) => {
      console.log("sdfsfd", value);

      router.push({
        path: "/promotionBannerPage/id",
        query: { id: 666 },
      });
    };
    return {
      list,
      onLoad,
      loading,
      finished,
      toBanner,
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
</style>
