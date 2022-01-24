<template>
  <div class="container pb-4 FLEX_C">
    <van-nav-bar left-text="" left-arrow class="p-4 bgColor">
      <template #left>
        <i
          class="text-2xl text-primary my-icon my-icon-back"
          @click="goBack"
        ></i>
      </template>
      <template #title>
        <h5 class="text-white">二级代理管理</h5>
      </template>
      <template #right>
        <img :src="state.peopleAdd" @click="showAdd(true)" />
      </template>
    </van-nav-bar>
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
        class="p-4"
      >
        <van-tab title="二级代理列表">
          <div class="justify-center FLEX_C mx-4 bg-[#191919] rounded-lg">
            <van-field
              left-icon="search"
              v-model="sms"
              clearable
              placeholder="输入二级代理帐号"
            />
          </div>
          <div class="justify-center mt-4 text-center FLEX_C">
            <el-table
              :data="tableData"
              min-width="200px"
              size="mini"
              @row-click="toDetail"
            >
              <el-table-column
                header-align="center"
                align="center"  prop="name" label="代理帐号" />
              <el-table-column
                header-align="center"
                align="center"  prop="win" label="净输赢" />
              <el-table-column
                header-align="center"
                align="center"  prop="time" label="上次登录时间">
                <template #default="scope">
                  <div @click="showPopup(scope.$index, scope.row)">
                    {{ scope.row.time.slice(0, 10) }}
                    <br />
                    {{ scope.row.time.slice(11, 19) }}
                    <van-icon name="arrow" />
                  </div>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </van-tab>
        <van-tab title="二级代理申请进度">
          <div class="justify-center mt-4 text-center FLEX_C">
            <el-table
              :data="tableDataSub"
              :default-sort="{ prop: 'time', order: 'descending' }"
              min-width="200px"
              size="mini"
            >
              <el-table-column
                header-align="center"
                align="center"  prop="time" label="申请时间" sortable>
                <template #default="scope">
                  {{ scope.row.time.slice(0, 10) }}
                  <br />
                  {{ scope.row.time.slice(11, 19) }}
                </template>
              </el-table-column>
              <el-table-column
                header-align="center"
                align="center"  prop="name" label="二级代理帐号" />
              <el-table-column
                header-align="center"
                align="center"  prop="result" label="申请进度" />
            </el-table>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <van-popup
      v-model:show="state.showAdd"
      round
      position="bottom"
      :style="{ height: '90%' }"
      class="bg_pop"
    >
      <div class="pt-4 text-lg font-medium CENTER_C">申请会员成为二级代理</div>
      <div class="container p-6 mt-8 FLEX_C subForm">
        <van-form @submit="onSubmit" validate-trigger="onSubmit">
          <van-field
            v-model="value"
            label="二级代理账号"
            placeholder="请输入代理账号"
            :rules="[{ required: true, message: '请填写代理账号' }]"
          />
          <div class="mt-16 font-medium text-sm leading-6 text-[#868686]">
            仅限除自己以外的会员，用户名发送后，将由代理专员审核。
            <br />
            预得知申请进度，可至二级代理管理＞申请二级代理进度查询。
          </div>
          <van-button
            class="mt-48 mb-6"
            round
            block
            type="info"
            native-type="submit"
          >
            发送
          </van-button>
          <van-button round plain block color="#C60000" @click="showAdd(false)">
            取消
          </van-button>
        </van-form>
      </div>
    </van-popup>
  </div>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import { ref, reactive } from "vue";
import peopleAdd from "@/assets/img/peopleAdd.svg";
export default {
  components: {},
  setup() {
    const show = ref(false);
    const active = ref(0);
    const activePopTab = ref(0);
    const router = useRouter();
    const state = reactive({
      peopleAdd: peopleAdd,
      showAdd: false,
    });
    const toDetail = (row, event, column) => {
      console.log(row, event, column);
      router.push({ path: "/subProxyDetail", query: { id: "1" } });
    };
    const goBack = () => {
      router.push({ path: "/home" });
    };
    const showAdd = (value: boolean) => {
      state.showAdd = value;
    };
    return {
      activePopTab,
      active,
      show,
      toDetail,
      goBack,
      showAdd,
      state,
      tableData: [
        {
          name: "Johnnywang",
          win: "999,999,999.00",
          time: "2019/02/19 24:59:59",
        },
        {
          name: "Johnnywang",
          win: "999,999,999.00",
          time: "2019/02/19 24:59:59",
        },
        {
          name: "Johnnywang",
          win: "999,999,999.00",
          time: "2019/02/19 24:59:59",
        },
        {
          name: "Johnnywang",
          win: "999,999,999.00",
          time: "2019/02/19 24:59:59",
        },
        {
          name: "Johnnywang",
          win: "999,999,999.00",
          time: "2019/02/19 24:59:59",
        },
        {
          name: "Johnnywang",
          win: "999,999,999.00",
          time: "2019/02/19 24:59:59",
        },
      ],
      tableDataSub: [
        {
          time: "2019/02/19 24:59:59",
          name: "Johnnywang",
          result: "不通过 不具代理资格",
        },
        {
          time: "2019/02/18 24:59:59",
          name: "Johnnywang",
          result: "通过",
        },
        {
          time: "2019/02/03 24:59:59",
          name: "Johnnywang",
          result: "通过",
        },
        {
          time: "2019/02/21 24:59:59",
          name: "Johnnywang",
          result: "通过",
        },
        {
          time: "2019/02/03 24:59:59",
          name: "Johnnywang",
          result: "通过",
        },
        {
          time: "2019/02/07 24:59:59",
          name: "Johnnywang",
          result: "不通过",
        },
        {
          time: "2019/02/09 24:59:59",
          name: "Johnnywang",
          result: "通过",
        },
        {
          time: "2019/02/01 24:59:59",
          name: "Johnnywang",
          result: "不通过",
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
  // color: #ffffffbd;
  color: #967140;
}
.van-cell::after,
[class*="van-hairline"]::after {
  display: none;
}
.bgColor {
  background: linear-gradient(101.58deg, #333333 3.4%, #1a1a1a 97.37%);
}
.van-cell::after,
[class*="van-hairline"]::after {
  display: none;
}

::v-deep(.van-field__control) {
  border-bottom: 1px solid;
}
.subForm {
  .van-button--info {
    color: #fff;
    background-color: #c60000;
  }
  .van-cell {
    background-color: #fff0;
  }

  .van-form {
    .van-field {
      display: inherit;
    }
  }
}
</style>
