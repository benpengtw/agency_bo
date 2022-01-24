<template>
  <div class="container pb-4 FLEX_C">
    <NavBar :name="userId + '月平台费'" :back="'/finance'" />

    <div class="justify-center mt-4 text-center FLEX_C">
      <el-table
        :data="tableDataRef"
        :default-sort="{ prop: 'platform', order: 'descending' }"
        min-width="200px"
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
          prop="income"
          label="输赢"
          sortable
        />
        <el-table-column
          header-align="center"
          align="center"
          prop="platformFee"
          label="平台费"
          sortable
        />
      </el-table>
    </div>
  </div>
</template>

<script lang="ts">
import NavBar from "@/components/NavBar/index.vue";
import { getFinancePlatform } from "@/api/finance/finance";
import { ref, reactive, onMounted } from "vue";
import { useRoute } from "vue-router";
export default {
  components: {
    NavBar,
  },
  setup(props) {
    const list = ref([]);
    const loading = ref(false);
    const finished = ref(false);
    const route = useRoute();
    const userId = Number(route.query?.id);
    const tableDataRef = ref([]);
    const handleDelete = (index, row) => {
      console.log(index, row);
    };
    onMounted(() => {
      getFinancePlatform().then((response) => {
        Object.assign(tableDataRef.value, response.data.data.gameGroupList);
      });
    });
    return {
      userId,
      list,
      loading,
      finished,
      handleDelete,
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
