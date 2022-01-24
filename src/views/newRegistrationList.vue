<template>
  <div class="container pb-4 FLEX_C">
    <NavBar :name="'新注册'" />
    <div>
      <van-tabs
        v-model:active="active"
        animated
        background="transparent"
        title-active-color="white"
        title-inactive-color="#ccc"
        color="white"
        line-width="50%"
        line-height="1"
        class="p-4"
      >
        <van-tab title="今日">
          <div class="justify-center mt-4 text-center FLEX_C">
            <el-table :data="tableData" min-width="200px" size="mini">
              <el-table-column
                header-align="center"
                align="center"
                prop="name"
                label="会员帐号"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="time"
                label="注册时间"
                sortable
              >
                <template #default="scope">
                  {{ scope.row.time.slice(0, 10) }}
                  <br />
                  {{ scope.row.time.slice(11, 19) }}
                </template>
              </el-table-column>
              <el-table-column
                header-align="center"
                align="center"
                prop="status"
                label="活跃状态"
                sortable
              >
                <template #default="scope">
                  {{ scope.row.status }}
                </template>
              </el-table-column>
            </el-table>
          </div>
        </van-tab>
        <van-tab title="本月">
          <div class="justify-center mt-4 text-center FLEX_C">
            <el-table :data="tableData2" min-width="200px" size="mini">
              <el-table-column
                header-align="center"
                align="center"
                prop="name"
                label="会员帐号"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="time"
                label="注册时间"
                sortable
              >
                <template #default="scope">
                  {{ scope.row.time.slice(0, 10) }}
                  <br />
                  {{ scope.row.time.slice(11, 19) }}
                </template>
              </el-table-column>
              <el-table-column
                header-align="center"
                align="center"
                prop="status"
                label="活跃状态"
                sortable
              >
                <template #default="scope">
                  {{ scope.row.status }}
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
export default {
  components: {
    NavBar,
  },
  setup() {
    const date = ref("");
    const show = ref(false);
    const isLink = ref(true);

    const formatDate = (date) =>
      `${date.getFullYear() + 1}/${date.getMonth() + 1}/${date.getDate()}`;
    const onConfirm = (values) => {
      const [start, end] = values;
      show.value = false;
      date.value = `${formatDate(start)} - ${formatDate(end)}`;
      isLink.value = false;
    };
    const list = ref([]);
    const loading = ref(false);
    const finished = ref(false);

    const onLoad = () => {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 15; i++) {
          list.value.push(list.value.length + 1);
        }

        // 加载状态结束
        loading.value = false;

        // 数据全部加载完成
        if (list.value.length >= 45) {
          finished.value = true;
        }
      }, 1000);
    };

    const handleDelete = (index, row) => {
      console.log(index, row);
    };
    return {
      date,
      show,
      onConfirm,
      isLink,
      list,
      onLoad,
      loading,
      finished,
      handleDelete,
      tableData: [
        {
          name: "Johnnywang",
          status: "✓",
          time: "2019/02/19 24:59:59",
        },
        {
          name: "Johnnywang",
          status: "-",
          time: "2019/02/19 24:59:59",
        },
        {
          name: "Piewang",
          status: "✓",
          time: "2019/02/19 24:59:59",
        },
        {
          name: "Johnnywang",
          status: "-",
          time: "2019/02/19 24:59:59",
        },
        {
          name: "Johnnywang",
          status: "-",
          time: "2019/02/19 24:59:59",
        },
        {
          name: "Johnnywang",
          status: "✓",
          time: "2019/02/19 24:59:59",
        },
      ],
      tableData2: [
        {
          name: "Piewang",
          status: "✓",
          time: "2019/02/19 24:59:59",
        },
        {
          name: "Piewang",
          status: "-",
          time: "2019/02/19 24:59:59",
        },
        {
          name: "Piewang",
          status: "✓",
          time: "2019/02/19 24:59:59",
        },
        {
          name: "Piewang",
          status: "-",
          time: "2019/02/19 24:59:59",
        },
        {
          name: "Piewang",
          status: "-",
          time: "2019/02/19 24:59:59",
        },
        {
          name: "Bigwang",
          status: "✓",
          time: "2019/02/19 24:59:59",
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
</style>
