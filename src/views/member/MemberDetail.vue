<template>
  <div class="container pb-4 FLEX_C">
    <NavBar :name="state.memberName" :back="'/member'" />
    <div class="justify-center mt-2 text-center FLEX_C">
      <div class="text-primary">会员总数：99999</div>
    </div>
    <div class="justify-center FLEX_C">
      <van-cell size="large" title="存款" :value="state.deposit" />
      <van-cell title="总输赢" size="large">
        <template #value>
          <span :class="state.income < 0 ? 'text-red' : 'text-white'">{{
            state.income
          }}</span>
        </template>
      </van-cell>
      <van-cell size="large" title="总流水" :value="state.volume" />
      <van-cell size="large" title="红利" :value="state.bonus" />
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
        :default-sort="{ prop: 'volume', order: 'descending' }"
        min-width="200px"
        @row-click="toDetail"
        size="mini"
      >
        <el-table-column
          header-align="center"
          align="center"
          prop="name"
          label="产品名"
        />
        <el-table-column
          header-align="center"
          align="center"
          prop="volume"
          label="上月输赢"
          sortable
        />
        <el-table-column
          header-align="center"
          align="center"
          prop="income"
          label="本月输赢"
          sortable
        >
          <template #default="scope">
            {{ scope.row.thisMonth }}
            <van-icon name="arrow" />
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script lang="ts">
import NavBar from "@/components/NavBar/index.vue";
import { useRoute, useRouter } from "vue-router";
import { ref, reactive, onMounted } from "vue";
import { getMember } from "@/api/member/member";
export default {
  components: {
    NavBar,
  },
  setup() {
    const date = ref("");
    const show = ref(false);
    const isLink = ref(true);
    const route = useRoute();
    const router = useRouter();
    const memberId = Number(route.query?.id);
    const tableDataRef = ref([
      {
        name: "Johnnywang",
        volume: "78",
        income: "35000",
      },
      {
        name: "Johnnywang",
        volume: "78",
        income: "35000",
      },
    ]);
    const formatDate = (date) =>
      `${date.getFullYear() + 1}/${date.getMonth() + 1}/${date.getDate()}`;
    const onConfirm = (values) => {
      const [start, end] = values;
      show.value = false;
      date.value = `${formatDate(start)} - ${formatDate(end)}`;
      isLink.value = false;
    };
    const loading = ref(false);
    const finished = ref(false);
    const state = reactive({
      deposit: 0,
      volume: 0,
      income: 0,
      bonus: 0,
      memberName: "Johnnywang",
    });

    const toDetail = (row, event, column) => {
      console.log(row, event, column);
      router.push({
        path: "/productDetail",
        query: { gameGroupID: row.id, memberID: memberId },
      });
    };
    onMounted(() => {
      // getMember({ id: memberId }).then((response) => {
      //   Object.assign(state, response.data.data);
      //   Object.assign(tableDataRef.value, response.data.data.productList);
      // });
    });
    return {
      date,
      show,
      state,
      onConfirm,
      toDetail,
      isLink,
      loading,
      finished,
      tableDataRef,
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
