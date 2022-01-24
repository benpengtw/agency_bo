<template>
  <div class="container pb-4 FLEX_C">
    <NavBar :name="'设置'" />
    <div class="px-2">
      <van-cell title="公告" value="100" size="large" is-link to="announcement">
        <template #value>
          <van-tag round type="danger" size="large">新公告!</van-tag>
        </template>
      </van-cell>
      <van-cell title="代理公告" size="large" is-link to="announcementAgency" />
      <van-cell title="活动" size="large" is-link to="promotionPage" />
      <van-cell
        title="代理活动"
        size="large"
        is-link
        to="promotionAgencyPage"
      />
      <van-cell title="常见问题" size="large" is-link to="problems" />
      <van-cell title="上分制度条款" size="large" is-link to="provision" />
      <van-cell title="修改密码" size="large" is-link to="resetPassword" />
      <van-cell
        title="交易密码"
        size="large"
        is-link
        to="transactionPassword"
      />
      <van-cell title="登出" size="large" is-link @click="logout" />
    </div>
  </div>
</template>

<script lang="ts">
import NavBar from "@/components/NavBar/index.vue";
import { UserStore } from "@/store/userStore";
import { ref } from "vue";
export default {
  components: {
    NavBar,
  },
  setup() {
    const userStore = UserStore();
    const logout = () => {
      userStore.clearUserInfo();
    };
    return {
      logout,
    };
  },
};
</script>
<style></style>
