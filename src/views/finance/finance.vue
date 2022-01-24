<template>
  <div class="container pb-4 FLEX_C">
    <NavBar :name="'财务报表'" />
    <!-- <div class="flex justify-center ...">
      <div class="head">2018年4月</div>
    </div> -->
    <div class="px-2">
      <van-tabs
        v-model:active="active"
        animated
        background="transparent"
        title-active-color="white"
        title-inactive-color="#ccc"
        color="white"
        line-width="50%"
        line-height="1"
        class="p-4"
      >
        <van-tab :title="lastMonth + '月'">
          <div class="justify-center text-center rounded-lg FLEX_C btnBg">
            <div class="pt-4 text-primary">◆ 净输赢 ◆</div>
            <div class="pb-4 text-white bodoni">{{ state.netIncome }}</div>
          </div>
          <van-cell size="large" title="存款" :value="state.deposit" />
          <van-cell size="large" title="提款" :value="state.withdrawal" />
          <van-cell
            size="large"
            title="红利"
            :value="state.bonus"
            is-link
            :to="{ path: '/bonus/id', query: { id: thisMonth - 1 } }"
          />
          <van-cell
            title="平台费"
            :value="state.platformFee"
            size="large"
            is-link
            :to="{ path: '/platform/id', query: { id: thisMonth - 1 } }"
          />
          <van-cell
            title="存提手续费"
            :value="state.handlingFee"
            size="large"
          />
          <van-cell title="总输赢" :value="state.totalIncome" size="large" />
          <van-cell
            title="活跃数"
            :value="state.activeMemberCounts"
            size="large"
            is-link
            :to="{ path: '/activemember/id', query: { id: thisMonth - 1 } }"
          />
          <van-button
            class="mt-16 bg-black border border-[#CDA269] text-[#CDA269]"
            size="large"
            round
            :to="{ name: 'FinanceProductList' }"
            >产品分项报表</van-button
          >
        </van-tab>
        <van-tab :title="thisMonth + '月'">
          <div class="justify-center text-center rounded-lg FLEX_C btnBg">
            <div class="pt-4 text-primary">◆ 净输赢 ◆</div>
            <div class="pb-4 text-white bodoni">{{ state.netIncome }}</div>
          </div>
          <van-cell size="large" title="存款" :value="state.deposit" />
          <van-cell size="large" title="提款" :value="state.withdrawal" />
          <van-cell
            size="large"
            title="红利"
            :value="state.bonus"
            is-link
            :to="{ path: '/bonus/id', query: { id: thisMonth } }"
          />
          <van-cell
            title="平台费"
            :value="state.platformFee"
            size="large"
            is-link
            :to="{ path: '/platform/id', query: { id: thisMonth } }"
          />
          <van-cell
            title="存提手续费"
            :value="state.handlingFee"
            size="large"
          />
          <van-cell title="总输赢" :value="state.totalIncome" size="large" />
          <van-cell
            title="活跃数"
            :value="state.activeMemberCounts"
            size="large"
            is-link
            :to="{ path: '/activemember/id', query: { id: thisMonth } }"
          />
          <van-button
            class="mt-16 bg-black border border-[#CDA269] text-[#CDA269]"
            size="large"
            round
            :to="{ name: 'FinanceProductList' }"
            >产品分项报表</van-button
          >
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script lang="ts">
import NavBar from "@/components/NavBar/index.vue";
import { getMonthFinance } from "@/api/finance/finance";
import dayjs from "dayjs";
import { ref, reactive, onMounted, computed } from "vue";
export default {
  components: {
    NavBar,
  },
  setup() {
    const active = ref(1);
    const state = reactive({
      deposit: 1,
      withdrawal: 0,
      bonus: 0,
      platformFee: 0,
      handlingFee: 0,
      totalIncome: 3,
      netIncome: 0,
      activeMemberCounts: 0,
    });
    const lastMonth = ref();
    // const onClickTab = ({ title }) => {
    //   // console.log(title);
    //   getMonthFinance({ month: title.substring(0, title.length - 1) }).then(
    //     (response) => {
    //       // console.log(response.data.data);
    //       Object.assign(state, response.data.data);
    //     }
    //   );
    // };
    const thisMonth = dayjs().month() + 1;

    onMounted(() => {
      // getMonthFinance({ month: thisMonth }).then((response) => {
      //   Object.assign(state, response.data.data);
      // });
      // if (thisMonth == 1) {
      //   lastMonth.value = 12;
      // } else {
      //   lastMonth.value = thisMonth - 1;
      // }
    });
    return { active, state, thisMonth, lastMonth };
  },
};
</script>

<style lang="less" scoped>
.btnBg {
  background-image: url("@/assets/pattern_btn_bg.svg"),
    linear-gradient(155.07deg, #343434 5.26%, #181818 84.13%);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 98% center;
}
</style>
