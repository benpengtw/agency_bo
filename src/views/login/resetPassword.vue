<template>
  <div class="container pb-4 FLEX_C">
    <NavBar :name="'修改密码'" :back="'/more'" />
    <div class="container p-4 FLEX_C loginBox" v-if="state.showCheck">
      <h5 class="mb-1 ml-4">请输入原密码</h5>
      <van-form @submit="onCheckSubmit">
        <van-field
          v-model="password"
          type="password"
          name="password"
          label="原密码"
          placeholder="原密码"
          :rules="[{ required: true, message: '请填写原密码' }]"
        />

        <van-button class="mt-6" round block type="info" native-type="submit">
          确认
        </van-button>
      </van-form>
    </div>
    <div class="container p-4 FLEX_C loginBox" v-if="state.showReset">
      <h5 class="mb-1 ml-4">修改密码</h5>
      <van-form @submit="onResetSubmit">
        <van-field
          v-model="newPassword"
          type="password"
          name="newPassword"
          label="新密码"
          placeholder="新密码"
          :rules="[
            { required: true, message: '请填写新密码' },
            { validator: validateLength, message: '长度需要在8-20' },
          ]"
        />
        <van-field
          v-model="confirmNewPassword"
          type="password"
          name="confirmNewPassword"
          label="再次输入新密码"
          placeholder="再次输入新密码"
          :rules="[
            { required: true, message: '请再次输入新密码' },
            { validator: validatePass, message: '密码不一致' },
          ]"
        />

        <van-button class="mt-6" round block type="info" native-type="submit">
          确认
        </van-button>
      </van-form>
    </div>
  </div>
</template>

<script lang="ts">
import NavBar from "@/components/NavBar/index.vue";
import { checkPassword, reserPassword } from "@/api/member/authorize";
import { ref, reactive } from "vue";
import { Notify } from "vant";
export default {
  components: {
    NavBar,
  },
  setup() {
    const password = ref("");
    const newPassword = ref("");
    const confirmNewPassword = ref("");
    const state = reactive({
      showCheck: true,
      showReset: false,
    });
    const onCheckSubmit = async (values) => {
      try {
        // Post login
        const response = await checkPassword({
          password: values.password,
        });
        console.log("response", response);
        response.data.data && ResSuccess(response.data.data);
      } catch (e) {
        // Exception handled by interceptors
      } finally {
        // Turn loading off
        // loginLoading.value = false;
      }
    };
    const onResetSubmit = async (values) => {
      try {
        // Post login
        console.log(values);
        const response = await reserPassword({
          newPassword: values.newPassword,
          confirmNewPassword: values.confirmNewPassword,
        });
        console.log("response", response);
        response.data.data && Notify({ type: "success", message: "修改成功" });
      } catch (e) {
        // Exception handled by interceptors
      } finally {
        state.showCheck = true;
        state.showReset = false;
      }
    };
    const ResSuccess = (data: any) => {
      console.log(data);
      state.showCheck = false;
      state.showReset = true;
      Notify({ type: "success", message: "检查成功" });
    };
    const validatePass = async (values) =>
      new Promise((resolve) => {
        if (newPassword.value !== confirmNewPassword.value) {
          resolve(false);
        } else {
          resolve(true);
        }
      });
    const validateLength = (values: string) => {
      if (values.length < 8 || values.length > 20) {
        return false;
      }
    };
    return {
      password,
      newPassword,
      confirmNewPassword,
      onCheckSubmit,
      onResetSubmit,
      state,
      validatePass,
      validateLength,
    };
  },
};
</script>
<style lang="less" scoped>
.loginBox {
  .van-button--info {
    color: #fff;
    background-color: #c60000;
  }
  .van-cell {
    background-color: #fff0;
  }
  .van-field__control {
    color: rgba(255, 255, 255, 0.904);
  }
}
</style>
