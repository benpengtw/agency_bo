<template>
  <div class="container pb-4 FLEX_C">
    <NavBar :name="userId + '月红利'" :back="'/finance'" />
    <div
      class="p-4 m-5 cursor-pointer  rounded-xl border-primaryLight CENTER_C darkGradient btnBg"
    >
      <div class="text-primary">◆ 总红利 ◆</div>
      <div class="text-white bodoni">{{ state.totalBonus }}</div>
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
          prop="memberAccount"
          label="会员帐号"
        />
        <el-table-column
          header-align="center"
          align="center"
          prop="bonus"
          label="红利"
          sortable
        />
      </el-table>
    </div>
  </div>
</template>

<script lang="ts">
import NavBar from "@/components/NavBar/index.vue";
import { getFinanceBonus } from "@/api/finance/finance";
import { ref, reactive, onMounted } from "vue";
import { useRoute } from "vue-router";
export default {
  components: {
    NavBar,
  },
  setup() {
    const list = ref([]);
    const loading = ref(false);
    const finished = ref(false);
    const route = useRoute();
    const tableDataRef = ref([
      {
        memberAccount: "Johnnywang",
        bonus: "33",
      },
      {
        memberAccount: "Johnnywang",
        bonus: "22",
      },
    ]);
    const userId = Number(route.query?.id);
    const state = reactive({
      totalBonus: 33,
    });
    const handleDelete = (index, row) => {
      console.log(index, row);
    };
    // onMounted(() => {
    //   getFinanceBonus().then((response) => {
    //     state.totalBonus, response.data.data.totalBonus;
    //     Object.assign(tableDataRef.value, response.data.data.list);
    //   });
    // });
    return {
      userId,
      list,
      loading,
      finished,
      handleDelete,
      tableDataRef,
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
.btnBg {
  background-image: url("@/assets/pattern_btn_bg.svg"),
    linear-gradient(155.07deg, #343434 5.26%, #181818 84.13%);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 98% center;
}
</style>
