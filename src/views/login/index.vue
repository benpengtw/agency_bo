<template>
  <div class="container FLEX_C home">
    <div class="pt-8 text-center h-[200px] homeHaeader">
      <div class="CENTER_C">
        <img class="mb-4" :src="state.top1" />
        <div class="text-primary bodoni">LOG IN</div>
        <h6 class="text-subWhite">your account</h6>
      </div>
    </div>
    <div class="container p-12 mt-8 FLEX_C loginBox">
      <van-form @submit="onSubmit" validate-trigger="onSubmit">
        <van-field
          v-model="account"
          name="account"
          :label="$t('login_2')"
          :placeholder="$t('login_2')"
          :rules="[{ required: true, message: $t('login_3') }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="password"
          :label="$t('login_4')"
          :placeholder="$t('login_4')"
          :rules="[{ required: true, message: $t('login_5') }]"
        />

        <van-button
          class="mt-6 mb-16"
          round
          block
          type="info"
          native-type="submit"
        >
          {{ $t("login_1") }}
        </van-button>
      </van-form>
      <div class="flex justify-start">
        <span class="mr-4">{{ $t("login_7") }} :</span>

        <select
          class="w-20 bg-black"
          v-model="selected"
          @change="setSelected()"
        >
          <option selected>cn</option>
          <option>en</option>
        </select>
      </div>

      <span class="mt-8 welcome pingfang">WELCOME</span>
    </div>
  </div>
</template>
<script lang="ts">
import { reactive, ref, onMounted } from "vue";
import top1 from "@/assets/loginTop.png";
import { postLogin } from "@/api/member/authorize";
import { LocalStorageKeys } from "@/utils/constants";
import { UserStore } from "@/store/userStore";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";

export default {
  setup() {
    const account = ref("");
    const password = ref("");
    const selected = ref(window.localStorage.getItem("LANG"));
    const router = useRouter();
    const userStore = UserStore();
    const { t } = useI18n();
    const onSubmit = async (values) => {
      // console.log("submit", values);
      try {
        // Post login
        const response = await postLogin({
          account: values.account,
          password: values.password,
        });
        console.log("response", response);
        response.data.data?.token && ResSuccess(response.data.data);

        // Navigate to home page
        // router.replace({ path: "/home" });
      } catch (e) {
        // Exception handled by interceptors
      } finally {
        // Turn loading off
        // loginLoading.value = false;
      }
    };
    const ResSuccess = (data: any) => {
      userStore.setUserInfo(data);
      data.token
        ? window.localStorage.setItem(LocalStorageKeys.TOKEN, data.token)
        : window.localStorage.removeItem(LocalStorageKeys.TOKEN);
      router.replace({ path: "/home" });
    };
    const state = reactive({
      loading: true,
      top1: top1,
    });
    const checkUserAndPush = () => {
      if (window.localStorage.getItem("USER_INFO")) {
        // console.log("dfdf", window.localStorage.getItem("USER_INFO"));
        router.replace({ path: "/home" });
      }
    };
    const setSelected = () => {
      if (selected.value == "cn") {
        window.localStorage.setItem("LANG", "cn");
        window.location.reload();
      } else {
        window.localStorage.setItem("LANG", "en");
        window.location.reload();
      }
    };
    onMounted(() => {
      checkUserAndPush();
    });
    return {
      account,
      password,
      onSubmit,
      state,
      t,
      selected,
      setSelected,
    };
  },
};
</script>

<style lang="less" scoped>
.welcome {
  position: relative;
  // left: 35.2%;
  right: -30%;
  top: 10%;
  // bottom: 31.16%;
  // font-family: PingFang;
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 56px;
  text-align: center;
  color: #ffffff;
  opacity: 0.1;
}
.home {
  background: #2f2f31;
}
.van-cell {
  display: inherit;
}
.van-field__label {
  color: #967140;
}
.homeHaeader {
  background-image: url("@/assets/Group_51.png");
  background-repeat: repeat-x;
}

.loginBox {
  background: linear-gradient(155.07deg, #343434 5.26%, #010101 84.13%);
  border-radius: 8px;
  width: 100%;
  height: 100%;
  // .van-cell::after,
  // [class*="van-hairline"]::after {
  // }
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
@media only screen and (min-width: 1025px) {
  .welcome {
    display: none;
  }
}
</style>
