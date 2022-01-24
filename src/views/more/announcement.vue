<template>
  <div class="container pb-4 FLEX_C">
    <NavBar :name="'公告'" :back="'/more'" />
    <div class="px-2">
      <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <div v-for="item in list" :key="item.name">
          <div class="bg-[#0f0f0f] container px-2 py-4 FLEX_C">
            <van-image v-bind:src="item.imgSrc" />
            <p class="text-xs text-subWhite">{{ item.time }}</p>

            {{ item.name }}
            <div v-html="item.rawHtml"></div>
          </div>
        </div>
      </van-list>
    </div>
  </div>
</template>

<script lang="ts">
import NavBar from "@/components/NavBar/index.vue";
import demo1 from "@/assets/demo/demo1.png";
import { ref } from "vue";
export default {
  components: {
    NavBar,
  },
  setup() {
    const list = ref([
      {
        name: "【活动】Johnnywang",
        time: "2017/12/25 18:45:34",
        rawHtml: "<ul><li>Coffee</li><li>Tea</li><li>Milk</li></ul>",
        imgSrc: demo1,
        win: 1,
      },
    ]);
    const loading = ref(false);
    const finished = ref(false);

    const onLoad = () => {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 5; i++) {
          list.value.push({
            name: "【活动】Johnnywang",
            time: "2017/12/2" + list.value.length + 1,
            rawHtml: "<ul><li>Coffee</li><li>Tea</li><li>Milk</li></ul>",
            imgSrc: demo1,
            win: list.value.length + 1,
          });
        }

        // 加载状态结束
        loading.value = false;

        // 数据全部加载完成
        if (list.value.length >= 40) {
          finished.value = true;
        }
      }, 1000);
    };

    return {
      list,
      onLoad,
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
</style>
