<template>
  <div class="container pb-4 FLEX_C">
    <NavBar :name="'产品1'" :back="'/memberDetail/id'" :id="memberID" />
    <div class="justify-center FLEX_C">
      <van-cell size="large" title="存款" :value="state.volume" />
      <van-cell title="总输赢" size="large">
        <template #value>
          <span :class="state.income < 0 ? 'text-red' : 'text-white'">{{
            state.income
          }}</span>
        </template>
      </van-cell>

      <van-cell
        icon="calendar-o"
        :value="date"
        @click="show = true"
        :is-link="isLink"
      >
        <template #title>
          <div>选择日期区间</div>
        </template>
      </van-cell>

      <van-calendar
        v-model:show="show"
        type="range"
        @confirm="onConfirm"
        color="#cda269"
      />
    </div>
    <div class="justify-center mt-4 text-center FLEX_C">
      <el-table
        :data="tableDataRef"
        :default-sort="{ prop: 'thisMonth', order: 'descending' }"
        min-width="200px"
        size="mini"
      >
        <el-table-column
          header-align="center"
          align="center"
          prop="bettingTime"
          label="投注时间"
        />
        <el-table-column
          header-align="center"
          align="center"
          prop="name"
          label="产品名"
          sortable
        />
        <el-table-column
          header-align="center"
          align="center"
          prop="volume"
          label="流水"
          sortable
        />
        <el-table-column
          header-align="center"
          align="center"
          prop="income"
          label="输赢"
          sortable
        >
          <template #default="scope">
            <div :class="scope.row.income < 0 ? 'text-red' : 'text-white'">
              {{ scope.row.income }}
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script lang="ts">
import NavBar from "@/components/NavBar/index.vue";
import { useRoute } from "vue-router";
import { ref, reactive, onMounted } from "vue";
import { getMemberProduct } from "@/api/member/member";
export default {
  components: {
    NavBar,
  },
  setup() {
    const date = ref("");
    const show = ref(false);
    const isLink = ref(true);
    const route = useRoute();
    const memberID = Number(route.query?.memberID);
    const gameGroupID = Number(route.query?.gameGroupID);
    const tableDataRef = ref([
      {
        bettingTime: "2019/02/19 24:59:59",
        name: "Johnnywang",
        volume: "5757",
        income: "53745787",
      },
      {
        bettingTime: "2019/02/27 24:59:59",
        name: "Johnnywang",
        volume: "45757",
        income: "53545787",
      },
    ]);
    const state = reactive({
      volume: 0,
      income: 0,
      // memberID: memberID,
    });

    const formatDate = (date) =>
      `${date.getFullYear() + 1}/${date.getMonth() + 1}/${date.getDate()}`;
    const onConfirm = (values) => {
      const [start, end] = values;
      show.value = false;
      date.value = `${formatDate(start)} - ${formatDate(end)}`;
      isLink.value = false;
      // getMemberProduct({
      //   memberID: memberID,
      //   gameGroupID: gameGroupID,
      //   periodStart: start,
      //   periodEnd: end,
      // }).then((response) => {
      //   Object.assign(tableDataRef.value, response.data.data.gameList);
      // });
    };
    const list = ref([]);
    const loading = ref(false);
    const finished = ref(false);

    onMounted(() => {
      // getMemberProduct({ memberID: memberID, gameGroupID: gameGroupID }).then(
      //   (response) => {
      //     Object.assign(state, response.data.data);
      //     Object.assign(tableDataRef.value, response.data.data.gameList);
      //   }
      // );
    });
    return {
      date,
      show,
      onConfirm,
      isLink,
      list,
      loading,
      finished,
      tableDataRef,
      memberID,
      state,
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
</style>
