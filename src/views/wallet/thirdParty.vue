<template>
  <div class="container pb-4 FLEX_C">
    <NavBar :name="'渠道名称'" :back="'/wallet'" />
    <div v-if="showState === 1">
      <van-count-down :time="time">
        <template #default="timeData">
          <div
            class="
              grid
              justify-center
              grid-flow-col
              p-4
              m-5
              gap-x-0.5
              rounded-md
              bg-[#191919]
            "
          >
            <span class="p-1 text-white">此订单将于</span>
            <span class="block ml-2">{{
              Math.floor(timeData.hours / 10)
            }}</span>
            <span class="block">{{ timeData.hours % 10 }}</span>
            <span class="text-[#be9661] mx-1">:</span>
            <span class="block">{{ Math.floor(timeData.minutes / 10) }}</span>
            <span class="block">{{ timeData.minutes % 10 }}</span>
            <span class="text-[#be9661] mx-1">:</span>
            <span class="block">{{ Math.floor(timeData.seconds / 10) }}</span>
            <span class="block mr-2">{{ timeData.seconds % 10 }}</span>
            <span class="p-1 text-white">后失效</span>
          </div>
        </template>
      </van-count-down>
      <div class="grid p-4 mx-5 mb-2 h-80 gap-x-0.5 rounded-md bg-[#191919]">
        <div class="grid grid-cols-1">
          <div class="col-span-1 CENTER_C">
            <qrcode-vue :value="state.qr" :margin="4" :size="150" id="QRCODE" />
          </div>
          <div class="col-span-1 CENTER_C">
            <van-button round color="#cda269" class="px-12" @click="downQrcode"
              >保存信息截图</van-button
            >
          </div>
        </div>
      </div>

      <div class="container flex content-end justify-center p-2 h-44">
        <div
          class="
            h-full
            p-3
            border
            rounded-md rounded-lg
            w-80
            bankCardBg
            border-primaryLight
          "
        >
          <div class="flex justify-end">
            <div class="px-8 bg-darkOpacity">
              <span class="pb-4 text-xs">王小明</span>
            </div>
          </div>
          <div class="grid grid-flow-col grid-rows-2 mt-2">
            <div class="items-start row-span-2 -mr-8">
              <img :src="bank_ch" />
            </div>
            <div class="col-span-2 font-bold -ml-7">中国建设银行</div>
            <div class="col-span-2 text-xs text-gray-400 shadow-2xl -ml-7">
              仅限本次使用
            </div>
          </div>
          <div class="flex justify-between pt-4 mt-6">
            <div class="flex flex-col">
              <span class="text-xs font-bold text-gray-300"
                >1234 4567 8901 2345</span
              >
            </div>
            <span class="text-xs bodoni text-primaryLight">BANK</span>
          </div>
        </div>
      </div>

      <div class="container flex justify-center p-2">
        <ul class="divide-y-2 divide-[#474747] w-80 bg-[#191919] rounded-lg">
          <li class="flex justify-between p-3">
            <span class="text-white CENTER_C">银行</span>

            <span class="text-white">
              中国建设银行
              <span class="text-[#8c8c8c]">
                <van-icon
                  class="m-1 scale-150"
                  class-prefix="my-icon"
                  name="copy"
                  @click="handleCopy('中国建设银行')"
                />
              </span>
            </span>
          </li>
          <li class="flex justify-between p-3">
            <span class="text-white CENTER_C">卡号</span>

            <span class="text-white">
              122 3845 1345 3485 567
              <span class="text-[#8c8c8c]">
                <van-icon
                  class="m-1 scale-150"
                  class-prefix="my-icon"
                  name="copy"
                  @click="handleCopy('122 3845 1345 3485 567')"
                />
              </span>
            </span>
          </li>
          <li class="flex justify-between p-3">
            <span class="text-white CENTER_C">户名</span>

            <span class="text-white">
              王小明
              <span class="text-[#8c8c8c]">
                <van-icon
                  class="m-1 scale-150"
                  class-prefix="my-icon"
                  name="copy"
                  @click="handleCopy('王小明')"
                />
              </span>
            </span>
          </li>
          <li class="flex justify-between p-3">
            <span class="text-white CENTER_C">充值金额</span>

            <span class="text-white">
              197,473.00
              <span class="text-[#8c8c8c]">
                <van-icon
                  class="m-1 scale-150"
                  class-prefix="my-icon"
                  name="copy"
                  @click="handleCopy('197,473.00')"
                />
              </span>
            </span>
          </li>
          <li class="flex justify-between p-3">
            <span class="text-white CENTER_C">实际支付</span>

            <span class="text-white">
              197,472.00
              <span class="text-[#8c8c8c]">
                <van-icon
                  class="m-1 scale-150"
                  class-prefix="my-icon"
                  name="copy"
                  @click="handleCopy('197,472.00')"
                />
              </span>
            </span>
          </li>
          <li class="flex justify-between p-3">
            <span class="text-white CENTER_C">附言</span>

            <span class="text-white">
              431567
              <span class="text-[#8c8c8c]">
                <van-icon
                  class="m-1 scale-150"
                  class-prefix="my-icon"
                  name="copy"
                  @click="handleCopy('431567')"
                />
              </span>
            </span>
          </li>
        </ul>
      </div>
      <div class="container flex justify-center p-8">
        <ul>
          <li class="text-xss text-[#FF4F42]">
            • 请务必每次充值都获取并充值当前卡，若充值至停用卡号，
            本公司将无法查收，恕不负责！
          </li>

          <li class="mt-2 text-white text-xss">
            • 若您无同行卡，请使用「跨行转帐」并选择「加急」。
          </li>
          <li class="mt-2 text-xss text-[#FF4F42]">
            • 转帐时「备注」栏请填写「附言」。
          </li>
          <li class="mt-2 text-xss text-[#FF4F42]">
            • 转帐金额需与填写金额一致。
          </li>
        </ul>
      </div>
      <div class="container flex justify-center p-2">
        <ul class="divide-y-2 divide-[#474747] w-80 bg-[#191919] rounded-lg">
          <li class="flex justify-between p-3">
            <span class="text-white CENTER_C">充值渠道</span>

            <span class="text-white"> 网银 </span>
          </li>
          <li class="flex justify-between p-3">
            <span class="text-white CENTER_C">目标钱包</span>

            <span class="text-white"> 代理钱包 </span>
          </li>
          <li class="flex justify-between p-3">
            <span class="text-white CENTER_C">订单编号</span>

            <span class="text-white"> 4857206037165 </span>
          </li>
        </ul>
      </div>
      <div class="container p-4 mt-8 FLEX_C loginBox">
        <van-button block round type="info" @click="showCheck = true">
          完成
        </van-button>
        <van-button round plain class="mt-4 mb-6" block color="#C60000">
          取消订单
        </van-button>
      </div>
    </div>
    <div v-if="showState === 2">
      <div class="grid p-4 m-5 mb-2 gap-x-0.5 rounded-md bg-[#191919]">
        <div class="col-span-1 CENTER_C">
          <span class="text-[#cda269]">此订单已建立</span>
        </div>
      </div>

      <div class="container flex justify-center p-2">
        <ul class="divide-y-2 divide-[#474747] w-80 bg-[#191919] rounded-lg">
          <li class="flex justify-between p-3">
            <span class="text-white CENTER_C">充值金额</span>

            <span class="text-white"> 197,473.00 </span>
          </li>
          <li class="flex justify-between p-3">
            <span class="text-white CENTER_C">实际支付</span>

            <span class="text-white"> 197,472.00 </span>
          </li>
          <li class="flex justify-between p-3">
            <span class="text-white CENTER_C">充值渠道</span>

            <span class="text-white"> 渠道名称 </span>
          </li>
          <li class="flex justify-between p-3">
            <span class="text-white CENTER_C">目标钱包</span>

            <span class="text-white"> 代理钱包 </span>
          </li>
          <li class="flex justify-between p-3">
            <span class="text-white CENTER_C">订单编号</span>

            <span class="text-white"> 4857206037165 </span>
          </li>
        </ul>
      </div>
      <div class="container p-4 mt-8 FLEX_C loginBox">
        <van-button block round type="info" @click="showCheck = true">
          完成
        </van-button>
      </div>
    </div>
    <van-popup
      v-model:show="showCheck"
      round
      closed
      @closed="showdisabled = true"
      class="bg-[#0F0F0F] w-80 shadow-xl"
    >
      <div class="grid grid-cols-2">
        <div class="col-span-2 my-4 CENTER_C">核实支付信息</div>
        <div class="col-span-2 mx-6 my-2 text-xs text-gray-400 CENTER_C">
          恭喜您！本次充值为您
          <h5 class="text-red">省下 0.81元</h5>
          ，实际
          <h5 class="text-red">支付 499.19元</h5>
          ，即可获得500元到账金额
        </div>
        <div class="col-span-2 m-3 CENTER_C">
          <van-button
            :disabled="showdisabled"
            round
            color="#cda269"
            class="px-12"
            @click="onSucesss"
            >确认将支付499.19元
            <van-count-down
              v-if="showdisabled"
              :time="time2"
              @finish="showdisabled = false"
            >
              <template #default="timeData">
                <span>{{ timeData.seconds }}</span>
              </template>
            </van-count-down></van-button
          >
        </div>
      </div>
    </van-popup>
    <van-popup
      v-model:show="showIconSuccess"
      round
      class="bg-[#0F0F0F] w-80 shadow-xl"
    >
      <div class="grid grid-cols-2">
        <div class="col-span-2 my-4 CENTER_C">取消订单</div>
        <div class="col-span-2 mx-6 my-2 text-xs text-gray-400 CENTER_C">
          如您已完成充值，以充值的款项无法退还，我们将尽速为您到账
        </div>
        <div class="m-3 CENTER_C">
          <van-button round plain color="#CDA269" class="px-12"
            >返回</van-button
          >
        </div>
        <div class="m-3 CENTER_C">
          <van-button round color="#cda269" class="px-12" @click="onSucesss"
            >取消</van-button
          >
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script lang="ts">
import NavBar from "@/components/NavBar/index.vue";
import { ref, computed, onMounted, reactive } from "vue";
import successMsg from "@/assets/img/success.svg";
import { useRoute } from "vue-router";
import bank_ch from "@/assets/img/bank_ch.png";
import qr2 from "@/assets/demo/qr2.png";
import qrPNG from "@/assets/demo/main_app.png";
import QrcodeVue from "qrcode.vue";
import { Toast } from "vant";
export default {
  components: {
    NavBar,
    QrcodeVue,
  },
  setup() {
    const route = useRoute();
    const userId = Number(route.query?.id);
    const date = ref("");
    const show = ref(false);

    const depositValue = ref("");
    const showCheck = ref(false);
    const showSuccessMsg = ref(false);
    const showState = ref(1);
    const showdisabled = ref(true);
    const isLink = ref(true);
    const active = ref(0);
    const depositchannel = ref("");
    const state = reactive({
      successMsg: successMsg,
      qr: "https://www.npmjs.com/",
    });
    const formatDate = (date) =>
      `${date.getFullYear() + 1}/${date.getMonth() + 1}/${date.getDate()}`;
    const onConfirm = (values) => {
      const [start, end] = values;
      show.value = false;
      date.value = `${formatDate(start)} - ${formatDate(end)}`;
      isLink.value = false;
    };
    const onSucesss = () => {
      showSuccessMsg.value = true;
      showCheck.value = false;
      showState.value = 2;
    };
    const list = ref([]);
    const loading = ref(false);
    const finished = ref(false);
    const downQrcode = () => {
      const canvas = document.getElementById("QRCODE");
      const link: HTMLAnchorElement = document.createElement("a");
      link.download = "QRCODE.png";
      link.href = (canvas as HTMLCanvasElement)?.toDataURL();
      link.click();
      link?.parentNode?.removeChild(link);
    };
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
        Toast("复制成功");
      } else {
        Toast("Fail");
      }
    };
    onMounted(() => {
      showState.value = 1;
      console.log("onMounted", showState.value);
    });
    return {
      active,
      depositchannel,
      depositValue,
      date,
      onConfirm,
      onSucesss,
      state,
      showSuccessMsg,
      showState,
      showdisabled,
      isLink,
      list,
      loading,
      finished,
      bank_ch,
      handleCopy,
      downQrcode,
      tableData: [
        {
          name: "Johnnywang",
          money: "999,999,999.00",
          time: "2019/02/19 24:59:59",
          status: "成功",
        },
        {
          name: "Johnnywang",
          money: "999,999,999.00",
          time: "2019/01/19 24:59:59",
          status: "成功",
        },
        {
          name: "hnnywang",
          money: "999,999,999.00",
          time: "2019/05/19 24:59:59",
          status: "成功",
        },
        {
          name: "Jonnywang",
          money: "99,999,999.00",
          time: "2019/07/19 24:59:59",
          status: "成功",
        },
        {
          name: "Johnnywang",
          money: "999,999,999.00",
          time: "2019/02/19 24:59:59",
          status: "成功",
        },
        {
          name: "ohnnywang",
          money: "99,999,999.00",
          time: "2019/08/19 24:59:59",
          status: "成功",
        },
      ],
      showCheck,
      time: ref(1 * 60 * 60 * 1000),
      time2: ref(1 * 1 * 3 * 1000),
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
::v-deep(.van-field__label) {
  color: #967140;
}

::v-deep(.van-field__label) {
  color: #967140;
}
// ::v-deep(.van-picker-column__item) {
//   color: #ffffff;
// }
.van-form {
  .van-field {
    display: inherit;
  }
}
.van-button--info {
  color: #fff;
  background-color: #c60000;
}

.van-button-normal {
  padding: 0 5px;
}
.bankCardBg {
  background-image: url("@/assets/MaskGroup.svg"),
    linear-gradient(155.07deg, #343434 5.26%, #181818 84.13%);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.block {
  display: inline-block;
  width: 20px;
  color: #cda269;
  font-size: 18px;
  text-align: center;
  padding: 0.25rem;
  font-family: "PingFangSC";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  border-radius: 0.25rem;
  background-color: #4d4d4d;
}
.text-xss {
  font-size: 0.75rem;
  line-height: 2rem;
}
</style>
