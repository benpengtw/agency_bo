<template>
  <div class="container pb-4 FLEX_C">
    <NavBar :name="'会员列表'" />
    <div class="justify-center m-2 text-center FLEX_C">
      <div class="text-primary">会员总数：99999</div>
    </div>
    <div class="justify-center FLEX_C mx-4 bg-[#191919] rounded-lg">
      <van-field
        left-icon="search"
        v-model="memberName"
        clearable
        :formatter="onConfirmMemberName"
        format-trigger="onBlur"
        placeholder="请输入会员名称"
        class="bg-[##191919]"
      />
    </div>
    <div class="justify-center FLEX_C m-4 bg-[#191919] rounded-lg">
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
    </div>
    <van-calendar
      v-model:show="show"
      type="range"
      @confirm="onConfirm"
      color="#cda269"
    />

    <div class="justify-center mt-4 text-center FLEX_C">
      <el-table
        :data="tableDataRef"
        :default-sort="{ prop: 'deposit', order: 'descending' }"
        min-width="200px"
        @row-click="toDetail"
        size="mini"
      >
        <el-table-column
                header-align="center"
                align="center"  prop="name" label="会员帐号" />
        <el-table-column
                header-align="center"
                align="center"  prop="deposit" label="存款" sortable />
        <el-table-column
                header-align="center"
                align="center"  prop="withdrawal" label="提款" sortable />
        <el-table-column
                header-align="center"
                align="center"  prop="income" label="输赢" sortable>
          <template #default="scope">
            {{ scope.row.win }}
            <van-icon name="arrow" />
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script lang="ts">
import NavBar from "@/components/NavBar/index.vue";
import { useRouter } from "vue-router";
import { ref, onMounted, reactive } from "vue";
import { getMemberList } from "@/api/member/member";
export default {
  components: {
    NavBar,
  },
  setup() {
    const date = ref("");
    const memberName = ref("");
    const periodStart = ref("");
    const periodEnd = ref("");
    const show = ref(false);
    const isLink = ref(true);
    const router = useRouter();
    const tableDataRef = ref([]);
    const formatDate = (date) =>
      `${date.getFullYear() + 1}/${date.getMonth() + 1}/${date.getDate()}`;
    const onConfirm = (values) => {
      const [start, end] = values;
      console.log("sss", values);
      periodStart.value = start;
      periodEnd.value = end;
      show.value = false;
      date.value = `${formatDate(start)} - ${formatDate(end)}`;
      isLink.value = false;
      getMemberList({
        memberName: memberName.value,
        periodStart: start,
        periodEnd: end,
      }).then((response) => {
        Object.assign(tableDataRef.value, response.data.data.list);
      });
    };
    const onConfirmMemberName = (value) => {
      memberName.value = value;
      getMemberList({
        memberName: value,
        periodStart: periodStart.value,
        periodEnd: periodEnd.value,
      }).then((response) => {
        Object.assign(tableDataRef.value, response.data.data.list);
        memberName.value = value;
      });
      return value;
    };
    const list = ref([]);
    const loading = ref(false);
    const finished = ref(false);

    const toDetail = (row, event, column) => {
      console.log("dasd", row);
      router.push({ path: "/memberDetail/id", query: { id: row.id } });
    };
    onMounted(() => {
      getMemberList().then((response) => {
        Object.assign(tableDataRef.value, response.data.data.list);
      });
    });
    return {
      date,
      show,
      toDetail,
      onConfirm,
      onConfirmMemberName,
      isLink,
      list,
      loading,
      finished,
      tableDataRef,
      memberName,
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
