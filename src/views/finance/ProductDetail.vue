<template>
  <div class="container pb-4 FLEX_C">
    <NavBar :name="route.params.name" :back="'/financeProductList'" />

    <div class="justify-center text-center FLEX_C">
      <van-tabs
        v-model:active="active"
        animated
        background="transparent"
        title-active-color="white"
        title-inactive-color="#ccc"
        color="white"
        line-width="33%"
        line-height="1"
        class="p-4"
      >
        <van-tab title="本月">
          <div class="p-4 m-5 rounded-md cursor-pointer CENTER_C btnBg">
            <div class="text-primary">◆ 总流水 ◆</div>
            <div class="text-white bodoni">999,649,000.00</div>
          </div>
          <div class="p-4 m-5 rounded-md cursor-pointer CENTER_C btnBg">
            <div class="text-primary">◆ 总输赢 ◆</div>
            <div class="text-red bodoni">-999,649,000.00</div>
          </div>
          <div class="justify-center mt-4 text-center FLEX_C">
            <el-table
              :data="tableData"
              :default-sort="{ prop: 'total', order: 'descending' }"
              min-width="200px"
              size="mini"
            >
              <el-table-column
                header-align="center"
                align="center"  prop="name" label="会员帐号" />
              <el-table-column
                header-align="center"
                align="center"  prop="total" label="流水" sortable />
              <el-table-column
                header-align="center"
                align="center"  prop="win" label="输赢" sortable>
                <template #default="scope">
                  <div class="text-red">
                    {{ scope.row.win }}
                  </div>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </van-tab>
        <van-tab title="昨日">
          <div class="p-4 m-5 rounded-md cursor-pointer CENTER_C btnBg">
            <div class="text-primary">◆ 总输赢 ◆</div>
            <div class="text-white bodoni">999,649,000.00</div>
          </div>
          <div class="p-4 m-5 cursor-pointer ounded-md CENTER_C btnBg">
            <div class="text-primary">◆ 总输赢 ◆</div>
            <div class="text-red bodoni">-999,649,000.00</div>
          </div>
          <div class="justify-center mt-4 text-center FLEX_C">
            <el-table
              :data="tableData"
              :default-sort="{ prop: 'total', order: 'descending' }"
              min-width="200px"
              size="mini"
            >
              <el-table-column
                header-align="center"
                align="center"  prop="name" label="会员帐号" />
              <el-table-column
                header-align="center"
                align="center"  prop="total" label="流水" sortable />
              <el-table-column
                header-align="center"
                align="center"  prop="win" label="输赢">
                <template #default="scope">
                  <div class="text-red">
                    {{ scope.row.win }}
                  </div>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </van-tab>
        <van-tab title="本日">
          <div class="p-4 m-5 rounded-md cursor-pointer CENTER_C btnBg">
            <div class="text-primary">◆ 总输赢 ◆</div>
            <div class="text-white bodoni">999,649,000.00</div>
          </div>
          <div class="p-4 m-5 rounded-md cursor-pointer CENTER_C btnBg">
            <div class="text-primary">◆ 总输赢 ◆</div>
            <div class="text-red bodoni">-999,649,000.00</div>
          </div>
          <div class="justify-center mt-4 text-center FLEX_C">
            <el-table
              :data="tableData"
              :default-sort="{ prop: 'total', order: 'descending' }"
              min-width="200px"
              size="mini"
            >
              <el-table-column
                header-align="center"
                align="center"  prop="name" label="会员帐号" />
              <el-table-column
                header-align="center"
                align="center"  prop="total" label="流水" sortable />
              <el-table-column
                header-align="center"
                align="center"  prop="win" label="输赢">
                <template #default="scope">
                  <div class="text-red">
                    {{ scope.row.win }}
                  </div>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script lang="ts">
import NavBar from "@/components/NavBar/index.vue";
import { ref } from "vue";
import { useRoute } from "vue-router";
export default {
  components: {
    NavBar,
  },
  setup() {
    const active = ref(2);
    const route = useRoute();
    console.warn("asa", route.params.name);

    const handleDelete = (index, row) => {
      console.log(index, row);
    };
    return {
      active,
      route,
      handleDelete,
      tableData: [
        {
          name: "Eddiechen",
          total: "899,000.32",
          win: "-899,000.32",
        },
        {
          name: "ESO.chen",
          total: "899,000.32",
          win: "-899,000.32",
        },
        {
          name: "Eddiechen",
          total: "899,000.32",
          win: "-899,000.32",
        },
        {
          name: "Eddiechen",
          total: "899,000.32",
          win: "-899,000.32",
        },
        {
          name: "Eddiechen",
          total: "899,000.32",
          win: "-899,000.32",
        },
        {
          name: "ESO.chen",
          total: "899,000.32",
          win: "-899,000.32",
        },
        {
          name: "Eddiechen",
          total: "899,000.32",
          win: "-899,000.32",
        },
        {
          name: "Eddiechen",
          total: "899,000.32",
          win: "-899,000.32",
        },
      ],
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
