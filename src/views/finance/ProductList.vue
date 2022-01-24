<template>
  <div class="container pb-4 FLEX_C">
    <NavBar :name="'产品分项报表'" :back="'/finance'" />

    <div class="justify-center mt-4 text-center FLEX_C">
      <el-table
        :data="tableData"
        :default-sort="{ prop: 'thisMonth', order: 'descending' }"
        min-width="200px"
        size="mini"
        @row-click="toDetail"
      >
        <el-table-column
                header-align="center"
                align="center"  prop="name" label="产品名" />
        <el-table-column
                header-align="center"
                align="center"  prop="lastMonthIncome" label="上月输赢" sortable />
        <el-table-column
                header-align="center"
                align="center"  prop="thisMonthIncome" label="本月输赢" sortable>
          <template #default="scope">
            <div :class="scope.row.thisMonth < 0 ? 'text-red' : 'text-white'">
              {{ scope.row.thisMonthIncome }}
              <van-icon name="arrow" />
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script lang="ts">
import NavBar from "@/components/NavBar/index.vue";
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";
import { getProductsFinance } from "@/api/finance/finance";
export default {
  components: {
    NavBar,
  },
  setup() {
    const date = ref("");
    const show = ref(false);
    const isLink = ref(true);
    const router = useRouter();
    const tableDataRef = ref([]);
    const toDetail = (row, event, column) => {
      console.log(row, event, column);
      router.push({
        name: "FinanceProductDetail",
        params: { id: row.id, name: row.name },
      });
    };
    onMounted(() => {
      getProductsFinance().then((response) => {
        // console.log(tableDataRef.value);
        Object.assign(tableDataRef.value, response.data.data.list);
      });
    });

    return {
      date,
      show,
      isLink,
      toDetail,
      tableData: tableDataRef.value,
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
