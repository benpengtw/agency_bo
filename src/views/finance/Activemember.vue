<template>
  <div class="container pb-4 FLEX_C">
    <NavBar :name="'活跃会员'" :back="'/finance'" />
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
        @click-tab="onClickTab"
        class="p-4"
      >
        <van-tab :title="'今日'">
          <el-table
            :data="tableDataRef"
            :default-sort="{ prop: 'platform', order: 'descending' }"
            min-width="200px"
            size="mini"
          >
            <el-table-column
                header-align="center"
                align="center"  prop="name" label="产品名" />
            <el-table-column
                header-align="center"
                align="center"  prop="income" label="输赢" sortable />
            <el-table-column
                header-align="center"
                align="center"  prop="platformFee" label="平台费" sortable />
          </el-table>
        </van-tab>
        <van-tab :title="'本月'">
          <el-table
            :data="tableDataRef"
            :default-sort="{ prop: 'platform', order: 'descending' }"
            min-width="200px"
            size="mini"
          >
            <el-table-column
                header-align="center"
                align="center"  prop="name" label="产品名" />
            <el-table-column
                header-align="center"
                align="center"  prop="income" label="输赢" sortable />
            <el-table-column
                header-align="center"
                align="center"  prop="platformFee" label="平台费" sortable />
          </el-table>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script lang="ts">
import NavBar from "@/components/NavBar/index.vue";
import { getFinanceActivemember } from "@/api/finance/finance";
import dayjs from "dayjs";
import { ref, reactive, onMounted, computed } from "vue";
export default {
  components: {
    NavBar,
  },
  setup() {
    const active = ref(1);
    const state = reactive({
      deposit: 0,
      withdrawal: 0,
      bonus: 0,
      platformFee: 0,
      handlingFee: 0,
      totalIncome: 0,
      netIncome: 0,
      activeMemberCounts: 0,
    });
    const onClickTab = ({ title }) => {
      // console.log(title);
      getFinanceActivemember({
        month: title.substring(0, title.length - 1),
      }).then((response) => {
        // console.log(response.data.data);
        Object.assign(state, response.data.data);
      });
    };
    // const thisMonth = computed(() => dayjs(new Date()).format("M"));
    const thisMonth = dayjs(new Date()).format("M");
    onMounted(() => {
      getFinanceActivemember({ month: thisMonth }).then((response) => {
        Object.assign(state, response.data.data);
      });
    });
    return { active, state, onClickTab, thisMonth };
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
</style>
