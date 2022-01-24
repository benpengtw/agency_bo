<template>
  <div class="container pb-4 FLEX_C">
    <NavBar :name="'常见问题'" :back="'/more'" />

    <div class="px-2">
      <van-collapse v-model="activeName" :border="false">
        <van-collapse-item
          title="1.在哪里查收佣金？/佣金发到哪里？"
          name="1"
          :border="false"
        >
          消息文本消息文本消息文本消息文本消息文本消息文本
          <template #right-icon>
            <van-icon name="plus" color="#967140" />
          </template>
        </van-collapse-item>
        <van-collapse-item title="2.佣金最少能提多少" name="2" :border="false">
          消息文本消息文本消息文本消息文本消息文本消息文本
          <template #right-icon>
            <van-icon name="plus" color="#967140" />
          </template>
        </van-collapse-item>
        <van-collapse-item
          title="3.佣金如何计算？"
          name="3"
          :border="false"
          class="bg-yellow-50"
        >
          <template #default>
            <div class="START_R">
              <div class="text-subWhite">
                消息文本消息文本消息文本消息文本消息文本消息文本
              </div>

              <div class="mt-2 text-primary">
                链接link呈现方式https://rule.xinli18sp
              </div>
              <img class="p-6" :src="state.demo" />
            </div>
          </template>
          <template #right-icon>
            <van-icon name="plus" color="#967140" />
          </template>
        </van-collapse-item>
        <van-collapse-item
          title="4.佣金等级是什么意思？"
          name="4"
          :border="false"
        >
          消息文本消息文本消息文本消息文本消息文本消息文本
          <template #right-icon>
            <van-icon name="plus" color="#967140" />
          </template>
        </van-collapse-item>
        <van-collapse-item
          title="5.我没有达到活跃标准净盈利会累积吗？"
          name="5"
          :border="false"
        >
          消息文本消息文本消息文本消息文本消息文本消息文本
          <template #right-icon>
            <van-icon name="plus" color="#967140" />
          </template>
        </van-collapse-item>
        <van-collapse-item
          title="6.我的佣金可以一直存在账户中吗？"
          name="6"
          :border="false"
        >
          消息文本消息文本消息文本消息文本消息文本消息文本
          <template #right-icon>
            <van-icon name="plus" color="#967140" />
          </template>
        </van-collapse-item>
        <van-collapse-item
          title="7.为什么锁屏或者返回主界面，再次登录都需要重新输入密码？"
          name="8"
          :border="false"
        >
          消息文本消息文本消息文本消息文本消息文本消息文本
          <template #right-icon>
            <van-icon name="plus" color="#967140" />
          </template>
        </van-collapse-item>
        <van-collapse-item
          title="8.为什么报表只显示1个月？"
          name="8"
          :border="false"
        >
          消息文本消息文本消息文本消息文本消息文本消息文本
          <template #right-icon>
            <van-icon name="plus" color="#967140" />
          </template>
        </van-collapse-item>
      </van-collapse>
    </div>
  </div>
</template>

<script lang="ts">
import NavBar from "@/components/NavBar/index.vue";
import demo1 from "@/assets/demo/img.png";
import { ref, reactive } from "vue";
export default {
  components: {
    NavBar,
  },
  setup() {
    const activeName = ref(["1"]);
    const activeName2 = ref(0);
    const state = reactive({
      demo: demo1,
    });
    return { activeName, activeName2, state };
  },
};
</script>
<style lang="less" scoped>
::v-deep(.van-cell__right-icon) {
  color: #cda269;
}
.van-collapse-item {
  position: relative;
  margin: 0.5rem;
  background: #0f0f0f;
}

::v-deep(.van-collapse-item__content) {
  background: #0f0f0f;
}
</style>
