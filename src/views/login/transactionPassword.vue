<template>
  <div class="container pb-4 FLEX_C">
    <NavBar :name="state.navBarTitle" :back="'/more'" />
    <div class="container p-4 FLEX_C loginBox" v-if="state.showCheck">
      <van-form @submit="onCheckSubmit" validate-trigger="onSubmit">
        <van-field
          v-model="password"
          type="password"
          name="password"
          label="密码"
          placeholder="请输入后台密码，确认为本人操作"
          :rules="[{ required: true, message: '请输入后台密码' }]"
        />
        <van-field
          v-model="newPassword"
          type="password"
          name="newPassword"
          label="交易密码"
          placeholder="请输入六位数交易密码"
          :rules="[{ required: true, message: '请输入六位数交易密码' }]"
        />
        <van-field
          v-model="confirmNewPassword"
          type="password"
          name="confirmNewPassword"
          label="确认交易密码"
          placeholder="请再次输入六位数交易密码"
          :rules="[{ required: true, message: '请再次输入六位数交易密码' }]"
        />
        <van-button class="mt-48" round block type="info" native-type="submit">
          确认
        </van-button>
      </van-form>
    </div>
    <div class="container p-4 FLEX_C loginBox" v-if="state.showReset">
      <van-form @submit="onResetSubmit" validate-trigger="onSubmit">
        <van-field
          v-model="transPassword"
          type="password"
          name="transPassword"
          label="原交易密码"
          placeholder="请输入原交易密码"
          :rules="[{ required: true, message: '请输入原交易密码' }]"
        />
        <van-field
          v-model="newTransPassword"
          type="password"
          name="newTransPassword"
          label="新交易密码"
          placeholder="请输入新的六位数交易密码"
          :rules="[
            { required: true, message: '请输入新的六位数交易密码' },
            { validator: validateLength, message: '长度需要在六位数' },
          ]"
        />
        <van-field
          v-model="confirmNewTransPassword"
          type="password"
          name="confirmNewTransPassword"
          label="确认新交易密码"
          placeholder="请再次输入新的六位数交易密码"
          :rules="[
            { required: true, message: '请输入新的六位数交易密码' },
            { validator: validatePass, message: '密码不一致' },
          ]"
        />

        <van-button class="mt-48" round block type="info" native-type="submit">
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
import { Toast } from "vant";
export default {
  components: {
    NavBar,
  },
  setup() {
    const password = ref("");
    const newPassword = ref("");
    const confirmNewPassword = ref("");
    const transPassword = ref("");
    const newTransPassword = ref("");
    const confirmNewTransPassword = ref("");
    const state = reactive({
      showCheck: true,
      showReset: false,
      navBarTitle: "设置交易密码",
    });
    const onCheckSubmit = async (values) => {
      try {
        ResSuccess(values);
        state.navBarTitle = "修改交易密码";
        // Post login
        // const response = await checkPassword({
        //   password: values.password,
        // });
        // console.log("response", response);
        // response.data.data && ResSuccess(response.data.data);
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
        Toast({ message: "交易密码修改成功" });
        // const response = await reserPassword({
        //   newPassword: values.newPassword,
        //   confirmNewPassword: values.confirmNewPassword,
        // });
        // console.log("response", response);
        // response.data.data && Toast({ message: "交易密码修改成功" });
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
      // Toast({ message: "交易密码修改成功" });
    };
    const validatePass = async (values) =>
      new Promise((resolve) => {
        if (newTransPassword.value !== confirmNewTransPassword.value) {
          resolve(false);
        } else {
          resolve(true);
        }
      });
    const validateLength = (values: string) => {
      if (values.length !== 6) {
        return false;
      }
    };
    return {
      password,
      newPassword,
      confirmNewPassword,
      transPassword,
      newTransPassword,
      confirmNewTransPassword,
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
.van-cell {
  display: inherit;
}
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
