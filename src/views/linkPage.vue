<template>
  <div class="container pb-4 FLEX_C">
    <NavBar :name="'推广链接'" />
    <div>
      <van-cell
        size="large"
        label=" https://material.io/design/introduction"
        center
      >
        <!-- 使用 title 插槽来自定义标题 -->
        <template #title>
          <span class="custom-title">手机注册链接</span>
        </template>
        <template #value>
          <van-icon
            class="ml-2"
            class-prefix="my-icon"
            name="copy"
            @click="handleCopy('asdadddd')"
          />
          <van-icon
            class="ml-2"
            class-prefix="my-icon"
            name="qr"
            @click="showQrcode = true"
          />
        </template>
      </van-cell>
      <van-cell
        size="large"
        label=" https://material.io/design/introduction"
        center
      >
        <!-- 使用 title 插槽来自定义标题 -->
        <template #title>
          <span class="custom-title">专属独立域名</span>
        </template>
      </van-cell>
      <van-cell size="large" label="联系专员申请" center>
        <!-- 使用 title 插槽来自定义标题 -->
        <template #title>
          <span class="custom-title">电脑注册链接</span>
        </template>
        <template #value>
          <van-icon
            class="ml-2"
            class-prefix="my-icon"
            name="copy"
            @click="handleCopy('asdadddd')"
          />
          <van-icon
            class="ml-2"
            class-prefix="my-icon"
            name="qr"
            @click="showQrcode = true"
          />
        </template>
      </van-cell>
      <van-cell
        size="large"
        label=" https://material.io/design/introduction"
        center
      >
        <!-- 使用 title 插槽来自定义标题 -->
        <template #title>
          <span class="custom-title">18 官方主站</span>
        </template>
        <template #value>
          <van-icon
            class="ml-2"
            class-prefix="my-icon"
            name="copy"
            @click="handleCopy('asdadddd')"
          />
          <van-icon
            class="ml-2"
            class-prefix="my-icon"
            name="qr"
            @click="showQrcode = true"
          />
        </template>
      </van-cell>
      <van-cell
        size="large"
        label=" https://material.io/design/introduction"
        center
      >
        <!-- 使用 title 插槽来自定义标题 -->
        <template class="flex" #title>
          <span class="custom-title">18 前导页</span>
        </template>
        <template #value>
          <van-icon
            class="ml-2"
            class-prefix="my-icon"
            name="copy"
            @click="handleCopy('asdadddd')"
          />
          <van-icon
            class="ml-2"
            class-prefix="my-icon"
            name="qr"
            @click="showQrcode = true"
          />
        </template>
      </van-cell>
      <van-cell
        size="large"
        label=" https://material.io/design/introduction"
        center
      >
        <!-- 使用 title 插槽来自定义标题 -->
        <template #title>
          <span class="custom-title">全站 App</span>
        </template>
        <template #value>
          <van-icon
            class="ml-2"
            class-prefix="my-icon"
            name="copy"
            @click="handleCopy('asdadddd')"
          />
          <van-icon
            class="ml-2"
            class-prefix="my-icon"
            name="qr"
            @click="showQrcode = true"
          />
        </template>
      </van-cell>
      <van-cell
        size="large"
        label=" https://material.io/design/introduction"
        center
      >
        <!-- 使用 title 插槽来自定义标题 -->
        <template #title>
          <span class="custom-title">体育 App</span>
        </template>
        <template #value>
          <van-icon
            class="ml-2"
            class-prefix="my-icon"
            name="copy"
            @click="handleCopy('asdadddd')"
          />
          <van-icon
            class="ml-2"
            class-prefix="my-icon"
            name="qr"
            @click="showQrcode = true"
          />
        </template>
      </van-cell>
      <van-cell size="large" label="7ND9" center>
        <!-- 使用 title 插槽来自定义标题 -->
        <template #title>
          <span class="custom-title">二级代理推荐码</span>
        </template>
        <template #value>
          <van-icon
            class="ml-2"
            class-prefix="my-icon"
            name="copy"
            @click="handleCopy('asdadddd')"
          />
          <van-icon
            class="ml-2"
            class-prefix="my-icon"
            name="qr"
            @click="showQrcode = true"
          />
        </template>
      </van-cell>
    </div>
  </div>
  <van-popup v-model:show="showQrcode" :style="{ width: '70%' }">
    <div class="bg-black CENTER_C">
      <div class="my-3 text-white">专属域名</div>
      <qrcode-vue :value="state.qr" :margin="4" :size="150" id="QRCODE" />
      <van-button
        round
        type="danger"
        class="bg-[#ee0a24] my-3"
        @click="downQrcode"
        >保存截屏</van-button
      >
    </div>
  </van-popup>
</template>

<script lang="ts">
import NavBar from "@/components/NavBar/index.vue";
import qrPNG from "@/assets/demo/main_app.png";
import { ref, reactive } from "vue";
import { Toast } from "vant";
import QrcodeVue from "qrcode.vue";

export default {
  components: {
    NavBar,
    QrcodeVue,
  },
  setup() {
    // Toast.setDefaultOptions({ duration: 9990000 });
    const showQrcode = ref(false);
    const state = reactive({
      qr: "https://www.npmjs.com/",
    });
    const handleCopy = (value) => {
      const textArea = document.createElement("textarea");
      textArea.value = value || "";
      textArea.style.top = "0";
      textArea.style.left = "0";
      textArea.style.position = "fixed";
      // console.log("sds", value);

      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      let success;
      try {
        success = document.execCommand("copy");
      } catch (e) {
        success = false;
      } finally {
        document.body.removeChild(textArea);
      }

      if (success) {
        Toast("链接已复制");
      } else {
        Toast("Fail");
      }
    };
    const downQrcode = () => {
      const canvas = document.getElementById("QRCODE");
      const link: HTMLAnchorElement = document.createElement("a");
      link.download = "QRCODE.png";
      link.href = (canvas as HTMLCanvasElement)?.toDataURL();
      link.click();
      link?.parentNode?.removeChild(link);
      Toast("已保存截图");
    };

    return {
      handleCopy,
      downQrcode,
      showQrcode,

      state,
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
