<template>
  <div class="container pb-4 FLEX_C">
    <NavBar :name="'佣金报表'" />
    <div class="justify-center mt-2 text-center FLEX_C">
      <div class="text-primary">{{ year }}年{{ month }}月</div>
    </div>
    <div class="px-2 growshrink">
      <van-cell title="活跃数" :value="state.activeMemberCount" size="large" />
      <van-cell title="平台输赢" size="large">
        <template #value>
          <span :class="state.totalAmount < 0 ? 'text-red' : 'text-white'">{{
            state.totalAmount
          }}</span>
        </template>
      </van-cell>
      <van-cell title="平台费" :value="state.chargeAmount" size="large" />
      <van-cell
        title="存提手续费"
        :value="state.depositWithdrawFeeAmount"
        size="large"
      />
      <van-cell title="红利" :value="state.bonusAmount" size="large" />
      <van-cell title="净输赢" size="large">
        <template #value>
          <span
            :class="state.netProfitAmount < 0 ? 'text-red' : 'text-white'"
            >{{ state.netProfitAmount }}</span
          >
        </template>
      </van-cell>
      <van-cell title="佣金等级" :value="state.rank" size="large" />
      <van-cell
        title="佣金比例"
        :value="state.commissionPercent"
        size="large"
      />
      <van-cell
        title="佣金结余"
        :value="state.commissionBalanceAmount"
        size="large"
      />
      <van-cell title="佣金" :value="state.commissionAmount" size="large" />
      <van-cell
        title="二级代理福利"
        :value="state.childAgencyCommissionTotalAmount"
        size="large"
        is-link
        to="recordSubProxyDetail"
      />
    </div>
  </div>
</template>

<script lang="ts">
import NavBar from "@/components/NavBar/index.vue";
import { getCommissionreport } from "@/api/commission/commission";
import { ref, onMounted, reactive } from "vue";
import dayjs from "dayjs";
export default {
  components: {
    NavBar,
  },
  setup() {
    const state = reactive({
      date: "",
      activeMemberCount: 0,
      totalAmount: 0,
      chargeAmount: 0,
      depositWithdrawFeeAmount: 0,
      bonusAmount: 0,
      netProfitAmount: 0,
      rank: 0,
      commissionPercent: 0,
      commissionBalanceAmount: 0,
      commissionAmount: 0,
      childAgencyCommissionTotalAmount: 0,
    });
    const year = ref("");
    const month = ref("");
    onMounted(() => {
      getCommissionreport().then((response) => {
        console.log(response.data.data);
        year.value = dayjs(response.data.data.date).format("YYYY");
        month.value = dayjs(response.data.data.date).format("M");
        Object.assign(state, response.data.data);
      });
    });
    return {
      state,
      month,
      year,
    };
  },
};
</script>
<style lang="scss" scoped>
.growshrink {
  flex-grow: 1;
}

@media only screen and (max-height: 741px) {
  .growshrink {
    flex-shrink: 1;
    flex-grow: 0;
  }
}
</style>
