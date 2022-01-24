<template>
  <div class="container pb-4 FLEX_C">
    <NavBar :name="'二级代理福利明细'" :back="'/record'" />
    <div class="flex justify-center">
      <div class="text-primary">{{ year }}年{{ month }}月</div>
    </div>
    <div class="grid grid-flow-col gap-4 p-2">
      <div class="col-span-2 p-2 rounded-md cursor-pointer btnBg">
        <div class="flex justify-center">
          <div class="text-primary">◆ 二代总数 ◆</div>
        </div>
        <div class="flex justify-center">
          <div class="text-white bodoni">{{ state.childAgencyCount }}</div>
        </div>
      </div>
      <div class="col-span-2 p-2 rounded-md cursor-pointer btnBg">
        <div class="flex justify-center">
          <div class="text-primary">◆ 二代活跃 ◆</div>
        </div>
        <div class="flex justify-center">
          <div class="text-white bodoni">
            {{ state.childAgencyExtraBonusAmount }}
          </div>
        </div>
      </div>
    </div>
    <div class="px-2">
      <van-cell
        title="二代佣金"
        :value="state.childAgencyCommissionAmount"
        size="large"
      />
      <van-cell
        title="代理尊享福利"
        :value="state.childAgencyExtraBonusAmount"
        size="large"
      />
      <van-cell
        title="小计"
        :value="state.childAgencyCommissionTotalAmount"
        size="large"
      />
    </div>
    <div class="px-2">
      <van-tabs
        v-model:active="activePopTab"
        animated
        background="black"
        title-active-color="white"
        title-inactive-color="#ccc"
        color="white"
        line-width="50%"
        line-height="1"
      >
        <van-tab title="二代佣金">
          <div class="bg-[#191919] rounded-md p-2 pb-4">
            <div class="flex flex-row items-center justify-start p-3">
              <span class="mr-3 text-primary bodoni"> 等级I </span>
              <span class="text-primary">二级代理达成40%</span>
            </div>
            <el-table :data="tableDataRef1" min-width="200px" size="mini">
              <el-table-column
                header-align="center"
                align="center"
                prop="account"
                label="二级代理帐号"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="commission"
                label="二代佣金"
              />
            </el-table>
          </div>
          <div class="bg-[#191919] rounded-md p-2 pb-4 mt-6">
            <div class="flex flex-row items-center justify-start p-3">
              <span class="mr-3 text-primary bodoni"> 等级II </span>
              <span class="text-primary">二级代理达成40%</span>
            </div>
            <el-table :data="tableData" min-width="200px" size="mini">
              <el-table-column
                header-align="center"
                align="center"
                prop="account"
                label="二级代理帐号"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="commission"
                label="二代佣金"
              />
            </el-table>
          </div>
          <div class="bg-[#191919] rounded-md p-2 pb-4 mt-6">
            <div class="flex flex-row items-center justify-start p-3">
              <span class="mr-3 text-primary bodoni"> 等级III </span>
              <span class="text-primary">5个以上二级代理达到50%持续3个月</span>
            </div>
            <el-table :data="tableDataRef1" min-width="200px" size="mini">
              <el-table-column
                header-align="center"
                align="center"
                prop="account"
                label="二级代理帐号"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="commission"
                label="二代佣金"
              />
            </el-table>
          </div>
        </van-tab>
        <van-tab title="代理尊享福利">
          <div class="bg-[#191919] p-2 pb-4 rounded-md">
            <el-table
              :data="tableExtrabonusDataRef"
              min-width="200px"
              size="mini"
            >
              <el-table-column
                header-align="center"
                align="center"
                prop="account"
                label="二级代理帐号"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="condition"
                label="达成条件"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="date"
                label="达成月份"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="extraBonus"
                label="尊享福利"
              />
            </el-table>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar/index.vue";
import dayjs from "dayjs";
import {
  getChildCommissionreport,
  getChildagencyextrabonuslist,
  getChildagencycommissionlist,
} from "@/api/commission/commission";
import { ref, onMounted, reactive } from "vue";
export default {
  components: {
    NavBar,
  },
  setup() {
    const show = ref(false);
    const active = ref(0);
    const activePopTab = ref(0);
    const activeNames = ref(["1"]);
    const tableExtrabonusDataRef = ref([]);
    const tableDataRef1 = ref([]);
    const tableDataRef2 = ref([]);
    const tableDataRef3 = ref([]);
    const state = reactive({
      date: "",
      childAgencyCount: 0,
      activeChildAgencyCount: 0,
      childAgencyCommissionAmount: 0,
      childAgencyExtraBonusAmount: 0,
      childAgencyCommissionTotalAmount: 0,
    });
    const year = ref("");
    const month = ref("");
    onMounted(() => {
      getChildCommissionreport().then((response) => {
        console.log(response.data.data);
        year.value = dayjs(response.data.data.date).format("YYYY");
        month.value = dayjs(response.data.data.date).format("M");
        Object.assign(state, response.data.data);
      });
      getChildagencyextrabonuslist().then((response) => {
        Object.assign(tableExtrabonusDataRef.value, response.data.data.list);
      });
      getChildagencycommissionlist().then((response) => {
        tableDataRef1.value = response.data.data.list.filter((item) => {
          return item.agencyLevel == 1;
        });
        tableDataRef2.value = response.data.data.list.filter((item) => {
          return item.agencyLevel == 2;
        });
        tableDataRef3.value = response.data.data.list.filter((item) => {
          return item.agencyLevel == 3;
        });
      });
    });
    return {
      activePopTab,
      active,
      show,
      activeNames,
      tableExtrabonusDataRef,
      tableDataRef1,
      tableDataRef2,
      tableDataRef3,
      state,
      month,
      year,
    };
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
