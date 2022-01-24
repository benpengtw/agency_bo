<template>
  <div class="container pb-4 FLEX_C">
    <NavBar :name="'我的钱包'" />
    <div class="justify-center text-center FLEX_C">
      <van-calendar
        v-model:show="show"
        type="range"
        @confirm="onConfirm"
        color="#cda269"
      />
    </div>
    <div class="px-2">
      <van-tabs
        v-model:active="active"
        animated
        background="transparent"
        title-active-color="white"
        title-inactive-color="#ccc"
        color="white"
        line-width="33%"
        line-height="1"
        class="py-4"
      >
        <van-tab title="存款">
          <div
            class="grid grid-flow-col grid-rows-2 p-2 border-2 rounded-md  border-primaryLight btnBg"
          >
            <div class="row-span-2 CENTER_R">
              <van-icon size="2rem" name="paid" class="text-primaryLight" />
            </div>
            <div class="col-span-2 font-bold text-primary">钱包余额</div>
            <div class="col-span-2 text-white bodoni">999,649,000.00</div>
            <div class="row-span-2 scale-75 CENTER_R">
              <van-button
                v-if="!showDeposit"
                class="font-bold text-black border  bg-primaryLight border-primaryLight"
                round
                @click="showDeposit = true"
              >
                进行存款
              </van-button>
            </div>
          </div>
          <div v-if="!showDeposit">
            <div class="justify-center FLEX_C my-4 bg-[#191919] rounded-lg">
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
            <div class="justify-center my-4 text-center FLEX_C">
              <el-table
                :data="tableData"
                :default-sort="{ prop: 'time', order: 'descending' }"
                min-width="200px"
                size="mini"
              >
                <el-table-column
                  header-align="center"
                  align="center"
                  prop="name"
                  label="会员帐号"
                />
                <el-table-column
                  header-align="center"
                  align="center"
                  prop="money"
                  label="金额"
                  sortable
                />
                <el-table-column
                  header-align="center"
                  align="center"
                  prop="time"
                  label="转帐日期"
                  sortable
                />
                <el-table-column
                  header-align="center"
                  align="center"
                  prop="status"
                  label="状态"
                >
                  <template #default="scope">
                    <div class="text-primary">
                      {{ scope.row.status }}
                    </div>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>
          <div v-if="showDeposit">
            <van-form @submit="onDepositSubmit" validate-trigger="onSubmit">
              <van-field
                v-model="depositchannel"
                readonly
                name="picker"
                label="充值渠道"
                placeholder="请选择存款渠道"
                @click="showDepositPicker = true"
              >
                <template #button><van-icon name="arrow" /> </template>
              </van-field>
              <van-field
                v-model="depositValue"
                name="depositValue"
                label="充值金额"
                placeholder="输入金额，限额¥100~¥1,000"
                :rules="[
                  { required: true, message: '输入金额，限额¥100~¥1,000' },
                ]"
              />
              <div class="grid grid-cols-4 gap-4 mt-4">
                <div
                  class="text-center border rounded-md border-golden bg-golden"
                  @click="depositValue = 100"
                >
                  <p class="text-black">100</p>
                </div>
                <div
                  class="text-center border rounded-md border-golden bg-golden"
                  @click="depositValue = 500"
                >
                  <p class="text-black">500</p>
                </div>
                <div
                  class="text-center border rounded-md border-golden bg-golden"
                  @click="depositValue = 1000"
                >
                  <p class="text-black">1,000</p>
                </div>
                <div
                  class="text-center border rounded-md border-golden bg-golden"
                  @click="depositValue = 5000"
                >
                  <p class="text-black">5,000</p>
                </div>
              </div>

              <div v-if="showDepositUSDT" class="container FLEX_C">
                <div class="grid mt-6 rounded-md bg-[#191919]">
                  <div class="flex justify-between h-16">
                    <span class="ml-4 text-white CENTER_C bodoni"
                      >0.00 USDT</span
                    >

                    <span class="CENTER_C mr-4 text-[#8c8c8c]">
                      <van-icon name="warning-o" />
                    </span>
                  </div>
                  <div class="flex justify-center rounded-b-md bg-[#303030]">
                    <span class="m-1 text-xs text-gray-400 CENTER_C"
                      >参考汇率 1 USDT = ¥ 6.58</span
                    >
                  </div>
                </div>
                <div class="grid mt-6 rounded-md bg-[#cda269]">
                  <div class="flex justify-between h-12">
                    <div class="flex justify-start h-12">
                      <img class="m-3" :src="state.vector" />
                      <span class="font-bold text-black CENTER_C"
                        >我没有虚拟货币，由此购买</span
                      >
                    </div>
                    <span class="mr-4 text-black CENTER_C">
                      <van-icon name="arrow" />
                    </span>
                  </div>
                </div>
                <div class="grid mt-2">
                  <div class="flex justify-center">
                    <span class="ml-4 text-xs text-[#7f7f7f] CENTER_C"
                      >虚拟货币教学</span
                    >
                    <span class="CENTER_C ml-1 text-[#8c8c8c]">
                      <van-icon name="warning-o" />
                    </span>
                  </div>
                </div>
              </div>

              <van-button
                round
                plain
                block
                class="mt-36"
                color="#C60000"
                @click="showDeposit = false"
              >
                取消
              </van-button>
              <van-button
                class="my-4 mb-4"
                round
                block
                type="info"
                native-type="submit"
              >
                下一步
              </van-button>
            </van-form>
          </div>
        </van-tab>
        <van-tab title="提款">
          <div
            class="grid grid-flow-col grid-rows-2 p-2 border-2 rounded-md  border-primaryLight btnBg"
          >
            <div class="row-span-2 CENTER_R">
              <van-icon size="2rem" name="paid" class="text-primaryLight" />
            </div>
            <div class="col-span-2 font-bold text-primary">钱包余额</div>
            <div class="col-span-2 text-white bodoni">999,649,000.00</div>
            <div class="row-span-2 scale-75 CENTER_R">
              <van-button
                v-if="!showWithdrawal"
                class="font-bold text-black border  bg-primaryLight border-primaryLight"
                round
                @click="showWithdrawal = true"
              >
                进行提款
              </van-button>
            </div>
          </div>
          <div v-if="!showWithdrawal">
            <div class="justify-center FLEX_C my-4 bg-[#191919] rounded-lg">
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
            <div class="justify-center my-4 text-center FLEX_C">
              <el-table
                :data="tableData"
                :default-sort="{ prop: 'time', order: 'descending' }"
                min-width="200px"
                size="mini"
              >
                <el-table-column
                  header-align="center"
                  align="center"
                  prop="time"
                  label="提款日期"
                  sortable
                >
                  <template #default="scope">
                    <div @click="showPopup(scope.$index, scope.row)">
                      {{ scope.row.time.slice(0, 10) }}
                      <br />
                      {{ scope.row.time.slice(11, 19) }}
                      <van-icon name="arrow" />
                    </div>
                  </template>
                </el-table-column>
                <el-table-column
                  header-align="center"
                  align="center"
                  prop="money"
                  label="金额"
                  sortable
                />
                <el-table-column
                  header-align="center"
                  align="center"
                  prop="status"
                  label="状态"
                >
                  <template #default="scope">
                    <div class="text-primary">
                      {{ scope.row.status }}
                    </div>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>
          <div v-if="showWithdrawal">
            <van-form @submit="onWithdrawalSubmit" validate-trigger="onSubmit">
              <van-field
                v-model="withdrawalchannel"
                readonly
                name="withdrawalPicker"
                label="提款渠道"
                placeholder="请选择提款渠道"
                @click="showWithdrawalPicker = true"
              >
                <template #button><van-icon name="arrow" /> </template>
              </van-field>
              <van-field
                v-if="showWithdrawalBankCard"
                v-model="withdrawalBankCard"
                readonly
                name="withdrawalPicker"
                label="选择银行卡"
                placeholder="请选择银行卡"
                @click="showWithdrawalBankPicker = true"
              >
                <template #button><van-icon name="arrow" /> </template>
              </van-field>
              <div
                v-if="showWithdrawalBankCardAdd"
                class="
                  grid
                  p-8
                  m-4
                  mb-2
                  rounded-md
                  border-dashed border-2 border-[#cda269]
                "
              >
                <div
                  class="flex justify-center h-12"
                  @click="showWithdrawalBankCardAddPicker = true"
                >
                  <img class="my-3 mr-2" :src="state.plus" />
                  <span class="CENTER_C text-[#cda269]">添加银行卡</span>
                </div>
              </div>
              <van-field
                v-if="showWithdrawalUSDT"
                v-model="withdrawalUSDTwallet"
                readonly
                name="withdrawalUSDTwallet"
                label="钱包类型"
                placeholder="请选择钱包类型"
              >
                <template #button><van-icon name="arrow" /> </template>
              </van-field>
              <van-field
                v-if="showWithdrawalUSDT"
                v-model="withdrawalUSDTType"
                readonly
                name="withdrawalUSDTType"
                label="货币类型"
                placeholder="请选择货币类型"
              >
                <template #button><van-icon name="arrow" /> </template>
              </van-field>
              <van-field
                v-if="showWithdrawalUSDT"
                v-model="withdrawalUSDTAddress"
                readonly
                name="withdrawalUSDTAddress"
                label="提领地址"
                placeholder="选择提领地址"
              >
                <template #button><van-icon name="arrow" /> </template>
              </van-field>
              <van-field
                v-model="withdrawalValue"
                name="withdrawalValue"
                label="提款金额"
                placeholder="输入金额，限额¥100~¥1,000"
                :rules="[
                  { required: true, message: '输入金额，限额¥100~¥1,000' },
                ]"
              />
              <div class="grid grid-cols-4 gap-4 mt-4">
                <div
                  class="text-center border rounded-md border-golden bg-golden"
                  @click="withdrawalValue = 100"
                >
                  <p class="text-black">100</p>
                </div>
                <div
                  class="text-center border rounded-md border-golden bg-golden"
                  @click="withdrawalValue = 500"
                >
                  <p class="text-black">500</p>
                </div>
                <div
                  class="text-center border rounded-md border-golden bg-golden"
                  @click="withdrawalValue = 1000"
                >
                  <p class="text-black">1,000</p>
                </div>
                <div
                  class="text-center border rounded-md border-golden bg-golden"
                  @click="withdrawalValue = 5000"
                >
                  <p class="text-black">5,000</p>
                </div>
              </div>

              <div v-if="showWithdrawalUSDT" class="container FLEX_C">
                <div class="grid mt-6 rounded-md bg-[#191919]">
                  <div class="flex justify-between h-16">
                    <span class="ml-4 text-white CENTER_C bodoni"
                      >0.00 USDT</span
                    >

                    <span class="CENTER_C mr-4 text-[#8c8c8c]">
                      <van-icon name="warning-o" />
                    </span>
                  </div>
                  <div class="flex justify-center rounded-b-md bg-[#303030]">
                    <span class="m-1 text-xs text-gray-400 CENTER_C"
                      >参考汇率 1 USDT = ¥ 6.58</span
                    >
                  </div>
                </div>

                <div class="grid mt-2">
                  <div class="flex justify-center">
                    <span class="ml-4 text-xs text-red CENTER_C"
                      >请确认虚拟货币钱包协定是否一致，若不同将导致提款失败</span
                    >
                  </div>
                </div>
              </div>

              <van-button
                round
                plain
                block
                class="mt-36"
                color="#C60000"
                @click="showDeposit = false"
              >
                取消
              </van-button>
              <van-button
                class="my-4 mb-4"
                round
                block
                type="info"
                native-type="submit"
              >
                下一步
              </van-button>
            </van-form>
          </div>
        </van-tab>
        <van-tab title="上分">
          <div
            class="grid grid-flow-col grid-rows-2 p-2 border-2 rounded-md  border-primaryLight btnBg"
          >
            <div class="row-span-2 CENTER_R">
              <van-icon size="2rem" name="paid" class="text-primaryLight" />
            </div>
            <div class="col-span-2 font-bold text-primary">钱包余额</div>
            <div class="col-span-2 text-white bodoni">999,649,000.00</div>
            <div class="row-span-2 scale-75 CENTER_R">
              <van-button
                class="font-bold text-black border  bg-primaryLight border-primaryLight"
                round
                @click="showAdj = true"
              >
                进行上分
              </van-button>
            </div>
          </div>
          <div class="justify-center FLEX_C my-4 bg-[#191919] rounded-lg">
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
          <div class="justify-center my-4 text-center FLEX_C">
            <el-table
              :data="tableData"
              :default-sort="{ prop: 'time', order: 'descending' }"
              min-width="200px"
              size="mini"
            >
              <el-table-column
                header-align="center"
                align="center"
                prop="name"
                label="会员帐号"
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="money"
                label="金额"
                sortable
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="time"
                label="转帐日期"
                sortable
              />
              <el-table-column
                header-align="center"
                align="center"
                prop="status"
                label="状态"
              >
                <template #default="scope">
                  <div class="text-primary">
                    {{ scope.row.status }}
                  </div>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <van-popup
      v-model:show="showDepositPicker"
      round
      position="bottom"
      :style="{ height: '60%' }"
      class="bg_pop"
    >
      <div class="pt-4 text-lg pingfang CENTER_C">充值渠道</div>
      <van-cell size="large" is-link @click="setDepositchannel(1)">
        <template #title>
          <p class="text-white">网银</p>
        </template>
      </van-cell>
      <van-cell size="large" is-link @click="setDepositchannel(2)">
        <template #title>
          <p class="text-white">急速支付</p>
        </template>
      </van-cell>
      <van-cell size="large" is-link @click="setDepositchannel(3)">
        <template #title>
          <p class="text-white">TRC 20</p>
        </template>
      </van-cell>
      <van-cell size="large" is-link @click="setDepositchannel(4)">
        <template #title>
          <p class="text-white">ERC 20</p>
        </template>
      </van-cell>
      <van-cell size="large" is-link @click="setDepositchannel(5)">
        <template #title>
          <p class="text-white">支付宝</p>
        </template>
      </van-cell>
      <van-cell size="large" is-link @click="setDepositchannel(6)">
        <template #title>
          <p class="text-white">口令红包</p>
        </template>
      </van-cell>
      <van-cell size="large" is-link @click="setDepositchannel(7)">
        <template #title>
          <p class="text-gray-500">微信</p>
        </template>
        <template #value>
          <p class="text-red">维护中</p>
        </template>
      </van-cell>
      <van-cell size="large" is-link @click="setDepositchannel(8)">
        <template #title>
          <p class="text-white">云闪付扫码</p>
        </template>
      </van-cell>
    </van-popup>
    <van-popup
      v-model:show="showWithdrawalPicker"
      round
      position="bottom"
      :style="{ height: '60%' }"
      class="bg_pop"
    >
      <div class="pt-4 text-lg pingfang CENTER_C">提款渠道</div>
      <van-cell size="large" is-link @click="setWithdrawalchannel(1)">
        <template #title>
          <p class="text-white">银行卡</p>
        </template>
      </van-cell>

      <van-cell size="large" is-link @click="setWithdrawalchannel(2)">
        <template #title>
          <p class="text-gray-500">虚拟货币</p>
        </template>
        <template #value>
          <p class="text-red">维护中</p>
        </template>
      </van-cell>
      <div class="grid justify-center grid-flow-col p-4 mx-5 my-20 gap-x-0.5">
        <div class="text-xs text-[#CDA269]">
          目前”虚拟货币”提款通道维护中，完成维护会尽快开启功能
        </div>
      </div>
    </van-popup>
    <van-popup
      v-model:show="showWithdrawalBankPicker"
      round
      position="bottom"
      :style="{ height: '60%' }"
      class="bg_pop"
    >
      <div class="flex flex-col h-full">
        <div class="sticky pt-4 text-lg pingfang CENTER_C">选择银行卡</div>
        <div class="flex flex-col flex-grow overflow-y-auto cell-bank">
          <van-config-provider :theme-vars="themeVars">
            <van-cell
              size="large"
              is-link
              @click="setWithdrawalBank('中国建设银行')"
            >
              <template #title>
                <p class="text-white">中国建设银行</p>
              </template>
            </van-cell>
            <van-cell
              size="large"
              is-link
              @click="setWithdrawalBank('中国邮政储蓄银行')"
            >
              <template #title>
                <p class="text-gray-500">中国邮政储蓄银行</p>
              </template>
              <template #value>
                <p class="text-red">维护中</p>
              </template>
            </van-cell>
            <van-cell
              size="large"
              is-link
              @click="setWithdrawalBank('中国邮政储蓄银行')"
            >
              <template #title>
                <p class="text-white">中国邮政储蓄银行</p>
              </template>
            </van-cell>
            <van-cell
              size="large"
              is-link
              @click="setWithdrawalBank('中国邮政储蓄银行')"
            >
              <template #title>
                <p class="text-white">中国邮政储蓄银行</p>
              </template>
            </van-cell>
            <van-cell
              size="large"
              is-link
              @click="setWithdrawalBank('中国邮政储蓄银行')"
            >
              <template #title>
                <p class="text-white">中国邮政储蓄银行</p>
              </template>
            </van-cell>
            <van-cell
              size="large"
              is-link
              @click="setWithdrawalBank('中国邮政储蓄银行')"
            >
              <template #title>
                <p class="text-white">中国邮政储蓄银行</p>
              </template>
            </van-cell>
            <van-cell
              size="large"
              is-link
              @click="setWithdrawalBank('中国邮政储蓄银行')"
            >
              <template #title>
                <p class="text-white">中国邮政储蓄银行</p>
              </template>
            </van-cell>
            <van-cell
              size="large"
              is-link
              @click="setWithdrawalBank('中国邮政储蓄银行')"
            >
              <template #title>
                <p class="text-white">中国邮政储蓄银行</p>
              </template>
            </van-cell>
            <van-cell
              size="large"
              is-link
              @click="setWithdrawalBank('中国邮政储蓄银行')"
            >
              <template #title>
                <p class="text-white">中国邮政储蓄银行</p>
              </template>
            </van-cell>
            <van-cell
              size="large"
              is-link
              @click="setWithdrawalBank('中国邮政储蓄银行')"
            >
              <template #title>
                <p class="text-white">中国邮政储蓄银行</p>
              </template>
            </van-cell>
            <van-cell
              size="large"
              is-link
              @click="setWithdrawalBank('中国邮政储蓄银行')"
            >
              <template #title>
                <p class="text-white">中国邮政储蓄银行</p>
              </template>
            </van-cell>
            <van-cell
              size="large"
              is-link
              @click="setWithdrawalBank('中国邮政储蓄银行')"
            >
              <template #title>
                <p class="text-white">中国邮政储蓄银行</p>
              </template>
            </van-cell>
            <van-cell
              size="large"
              is-link
              @click="setWithdrawalBank('中国邮政储蓄银行')"
            >
              <template #title>
                <p class="text-white">中国邮政储蓄银行</p>
              </template>
            </van-cell>
          </van-config-provider>
        </div>
        <div class="flex flex-col p-4">
          <van-button
            round
            plain
            block
            class="my-4 mb-4"
            color="#CDA269"
            @click="onWithdrawalBankAdd"
          >
            <div class="flex justify-start h-12">
              <img class="m-3" :src="state.plus" />
              <span class="CENTER_C"> 添加银行卡</span>
            </div>
          </van-button>
        </div>
      </div>
    </van-popup>
    <van-popup
      v-model:show="showWithdrawalBankCardAddPicker"
      round
      position="bottom"
      :style="{ height: '60%' }"
      class="bg_pop"
    >
      <div class="justify-center mt-4 text-center FLEX_C">添加银行卡</div>

      <van-form @submit="onWithdrawalBankCardAdd" validate-trigger="onSubmit">
        <van-field
          v-model="withdrawalBankCardAdd"
          name="adjValue"
          label="银行卡卡号"
          placeholder="请输入银行卡卡号"
          :rules="[{ required: true, message: '请输入银行卡卡号' }]"
        />
        <van-button class="mt-36" round block type="info" native-type="submit">
          添加银行卡
        </van-button>
      </van-form>
    </van-popup>
    <van-popup
      v-model:show="showAdj"
      round
      position="bottom"
      :style="{ height: '80%' }"
      class="bg_pop"
    >
      <div class="justify-center mt-4 text-center FLEX_C">进行上分</div>
      <div
        class="grid grid-flow-col grid-rows-2 p-2 m-4 border-2 rounded-md  border-primaryLight btnBg"
      >
        <div class="row-span-2 CENTER_R">
          <van-icon size="2rem" name="paid" class="text-primaryLight" />
        </div>
        <div class="col-span-2 font-bold text-primary">钱包余额</div>
        <div class="col-span-2 text-white bodoni">999,649,000.00</div>
      </div>
      <van-form @submit="onAdjSubmit" validate-trigger="onSubmit">
        <van-field
          v-model="adjAccount"
          name="adjAccount"
          label="会员账号"
          placeholder="请输入会员账号"
        >
          <template #button
            ><div @click="showAdjAccountPicker = true" class="text-[#967140]">
              搜索
            </div></template
          >
        </van-field>
        <van-field
          v-model="adjValue"
          name="adjValue"
          label="输入金额"
          placeholder="输入金额，限额¥100~¥1,000"
          :rules="[{ required: true, message: '输入金额，限额¥100~¥1,000' }]"
        />
        <van-button class="mt-36" round block type="info" native-type="submit">
          發送
        </van-button>
        <van-button
          round
          plain
          block
          class="my-4 mb-4"
          color="#C60000"
          @click="showDeposit = false"
        >
          取消
        </van-button>
      </van-form>
    </van-popup>
    <van-popup
      v-model:show="showAdjAccountPicker"
      round
      position="bottom"
      :style="{ height: '60%' }"
      class="bg_pop"
    >
      <div class="sticky pt-4 text-lg pingfang CENTER_C">会员账号</div>
      <div class="container h-20">
        <van-cell size="large" is-link @click="setAdjAccount('Muta')">
          <template #title>
            <div class="flex justify-start">
              <img :src="state.people" />
              <p class="ml-2 text-white">Muta</p>
            </div>
          </template>
        </van-cell>
        <van-cell size="large" is-link @click="setAdjAccount('Eddiechen')">
          <template #title>
            <div class="flex justify-start">
              <img :src="state.people" />
              <p class="ml-2 text-white">Eddiechen</p>
            </div>
          </template>
        </van-cell>
        <van-cell size="large" is-link @click="setAdjAccount('Kenzychou')">
          <template #title>
            <div class="flex justify-start">
              <img :src="state.people" />
              <p class="ml-2 text-white">Kenzychou</p>
            </div>
          </template>
        </van-cell>
        <van-cell size="large" is-link @click="setAdjAccount('Doublej')">
          <template #title>
            <div class="flex justify-start">
              <img :src="state.people" />
              <p class="ml-2 text-white">Doublej</p>
            </div>
          </template>
        </van-cell>
      </div>
    </van-popup>
    <van-popup
      v-model:show="showAdjConfirm"
      round
      class="bg-[#0F0F0F] w-80 shadow-xl"
    >
      <div class="grid grid-cols-2">
        <div class="col-span-2 my-4 CENTER_C">取消订单</div>
        <div class="col-span-2 mx-6 my-2 text-xs text-gray-400 CENTER_C">
          确认要发送吗？
        </div>
        <div class="m-3 CENTER_C">
          <van-button
            round
            plain
            color="#CDA269"
            class="px-12"
            @click="showAdjConfirm = false"
            >取消</van-button
          >
        </div>
        <div class="m-3 CENTER_C">
          <van-button
            round
            color="#cda269"
            class="px-12"
            @click="onAdjConfirmSucesss"
            >确认</van-button
          >
        </div>
      </div>
    </van-popup>
    <van-popup
      v-model:show="showWithdrawalUSDTSuccess"
      round
      class="bg-[#0F0F0F] w-80 shadow-xl"
    >
      <div class="grid grid-cols-2">
        <div class="col-span-2 my-4 CENTER_C">汇率试算</div>
        <div class="col-span-2 mx-6 my-2 text-xs text-gray-400 CENTER_C">
          此金额为计算汇率
        </div>
        <div class="col-span-2 mx-6 my-2 text-xs text-gray-400 CENTER_C">
          实际金额依建单为主
        </div>
        <div class="col-span-2 m-3 CENTER_C">
          <van-button
            round
            color="#cda269"
            class="px-12"
            @click="onWithdrawalUSDTSuccess"
            >确认</van-button
          >
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script lang="ts">
import NavBar from "@/components/NavBar/index.vue";
import { ref, computed, onMounted, reactive } from "vue";
import { Toast } from "vant";
import vector from "@/assets/img/Vector.svg";
import people from "@/assets/img/people.svg";
import plus from "@/assets/img/plus.svg";
import { useRouter } from "vue-router";
export default {
  components: {
    NavBar,
  },
  setup() {
    const router = useRouter();
    const date = ref("");
    const show = ref(false);
    const showDeposit = ref(false);
    const showDepositUSDT = ref(false);
    const showDepositPicker = ref(false);
    const showWithdrawal = ref(false);
    const showWithdrawalUSDT = ref(false);
    const showWithdrawalPicker = ref(false);
    const showWithdrawalBankPicker = ref(false);
    const showWithdrawalBankCard = ref(false);
    const showWithdrawalBankCardAdd = ref(false);
    const showWithdrawalBankCardAddPicker = ref(false);
    const showWithdrawalUSDTSuccess = ref(false);
    const showAdj = ref(false);
    const showAdjAccountPicker = ref(false);
    const showAdjConfirm = ref(false);
    const showConfirm = ref(false);
    const isLink = ref(true);
    const active = ref(0);
    const depositValue = ref("");
    const adjAccount = ref("");
    const adjValue = ref(0);
    const depositchannel = ref("");
    const depositchannelValue = ref(1);
    const withdrawalValue = ref("");
    const withdrawalchannel = ref("");
    const withdrawalchannelValue = ref(1);
    const withdrawalBankCard = ref("");
    const withdrawalBankCardAdd = ref("");
    const withdrawalUSDTwallet = ref("");
    const withdrawalUSDTType = ref("USDT");
    const withdrawalUSDTAddress = ref("");
    const channel = {
      1: "网银",
      2: "急速支付",
      3: "TRC 20",
      4: "ERC 20",
      5: "支付宝",
      6: "口令红包",
      7: "微信",
      8: "云闪付扫码",
    };
    const channelW = {
      1: "银行卡",
      2: "虚拟货币",
    };
    const state = reactive({
      vector: vector,
      people: people,
      plus: plus,
    });
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

    const handleSelect = (item) => {
      console.log(item);
    };
    const setDepositchannel = (value) => {
      depositchannelValue.value = value;
      depositchannel.value = channel[value];
      showDepositPicker.value = false;
      switch (value) {
        case 1:
          showDepositUSDT.value = false;
          break;
        case 2:
          showDepositUSDT.value = false;
          break;
        case 8:
          showDepositUSDT.value = false;
          break;
        case 6:
          showDepositUSDT.value = false;
          break;
      }
    };
    const setWithdrawalchannel = (value) => {
      withdrawalchannelValue.value = value;
      withdrawalchannel.value = channelW[value];
      showWithdrawalPicker.value = false;
      switch (value) {
        case 1:
          showWithdrawalBankCard.value = true;
          showWithdrawalUSDT.value = false;
          break;
        case 2:
          showWithdrawalBankCard.value = false;
          showWithdrawalUSDT.value = true;
          break;
      }
    };
    const setWithdrawalBank = (value) => {
      withdrawalBankCard.value = value;
      showWithdrawalBankPicker.value = false;
      // switch (value) {
      //   case 1:
      //     showWithdrawalBankCard.value = true;
      //     showWithdrawalUSDT.value = false;
      //     break;
      //   case 2:
      //     showWithdrawalBankCard.value = false;
      //     showWithdrawalUSDT.value = true;
      //     break;
      // }
    };

    const setAdjAccount = (value) => {
      adjAccount.value = value;
      showAdjAccountPicker.value = false;
    };
    const onWithdrawalBankAdd = (value) => {
      showWithdrawalBankCard.value = false;
      showWithdrawalBankPicker.value = false;
      showWithdrawalBankCardAdd.value = true;
    };
    const onWithdrawalBankCardAdd = async (value) => {
      showWithdrawalBankCard.value = false;
      withdrawalBankCardAdd.value = value;
      showWithdrawalBankCardAddPicker.value = false;
      showWithdrawalBankCardAdd.value = false;
    };
    const onWithdrawalUSDTSuccess = async (values) => {
      // console.log("submit", values);
      try {
        showWithdrawalUSDTSuccess.value = false;
        router.push({
          path: "/withdrawalUSDT/id",
          query: { id: 666 },
        });
        console.log("onDepositSubmit", values);
      } finally {
        // Turn loading off
        // loginLoading.value = false;
      }
    };
    const onWithdrawalSubmit = async (values) => {
      // console.log("submit", values);
      try {
        console.log(values);
        switch (withdrawalchannelValue.value) {
          case 1:
            showWithdrawalBankCard.value = true;
            break;
          case 2:
            showWithdrawalUSDT.value = true;
            break;
        }
        if (withdrawalchannelValue.value == 1 && withdrawalBankCard.value) {
          router.push({
            path: "/withdrawalWebBank/id",
            query: { id: 666 },
          });
        }
        if (withdrawalchannelValue.value == 2 && withdrawalUSDTType.value) {
          showWithdrawalUSDTSuccess.value = true;
          // router.push({
          //   path: "/withdrawalUSDT/id",
          //   query: { id: 666 },
          // });
        }
        console.log("onDepositSubmit", values);
      } finally {
        // Turn loading off
        // loginLoading.value = false;
      }
    };
    const onDepositSubmit = async (values) => {
      // console.log("submit", values);
      try {
        console.log(values);
        switch (depositchannelValue.value) {
          case 1:
            router.push({
              path: "/webBank/id",
              query: { id: 666 },
            });
            break;
          case 2:
            router.push({
              path: "/thirdParty/id",
              query: { id: 666 },
            });
            break;
          case 6:
            router.push({
              path: "/passwordRedEnvelope/id",
              query: { id: 666 },
            });
            break;
          case 8:
            router.push({
              path: "/thirdParty/id",
              query: { id: 666 },
            });
            break;
          case 3:
            showDepositUSDT.value = true;
            break;
          case 4:
            showDepositUSDT.value = true;
            break;
        }
        console.log("onDepositSubmit", values);
      } finally {
        // Turn loading off
        // loginLoading.value = false;
      }
    };
    const onAdjSubmit = async (values) => {
      // console.log("submit", values);
      try {
        console.log(values);
        showAdjConfirm.value = true;
        console.log("onDepositSubmit", values);
      } finally {
        // Turn loading off
        // loginLoading.value = false;
      }
    };
    const onAdjConfirmSucesss = async (values) => {
      // console.log("submit", values);
      try {
        Toast("款项已送出");
        showAdjConfirm.value = false;
        showAdj.value = false;
        console.log("onDepositSubmit", values);
      } finally {
        // Turn loading off
        // loginLoading.value = false;
      }
    };
    return {
      active,
      state,
      adjAccount,
      adjValue,
      depositValue,
      depositchannel,
      withdrawalValue,
      withdrawalchannel,
      withdrawalBankCard,
      withdrawalBankCardAdd,
      withdrawalUSDTwallet,
      withdrawalUSDTType,
      withdrawalUSDTAddress,
      date,
      onConfirm,
      isLink,
      loading,
      finished,
      showAdj,
      showAdjAccountPicker,
      showAdjConfirm,
      setAdjAccount,
      onAdjSubmit,
      onAdjConfirmSucesss,
      handleSelect,
      remainMoney: ref(""),
      show,
      showConfirm,
      showDeposit,
      showDepositPicker,
      showDepositUSDT,
      setDepositchannel,
      onDepositSubmit,
      showWithdrawal,
      showWithdrawalPicker,
      showWithdrawalUSDT,
      showWithdrawalBankPicker,
      showWithdrawalBankCard,
      showWithdrawalBankCardAdd,
      showWithdrawalUSDTSuccess,
      setWithdrawalchannel,
      setWithdrawalBank,
      onWithdrawalBankAdd,
      onWithdrawalSubmit,
      onWithdrawalUSDTSuccess,
      onWithdrawalBankCardAdd,
      showWithdrawalBankCardAddPicker,
      themeVars: {
        cellVerticalPadding: "12px",
      },
      tableData: [
        {
          name: "Johnnywang",
          money: "999,999,999.00",
          time: "2019/02/19 24:59:59",
          status: "成功",
        },
        {
          name: "Johnnywang",
          money: "999,999,999.00",
          time: "2019/01/19 24:59:59",
          status: "成功",
        },
        {
          name: "hnnywang",
          money: "999,999,999.00",
          time: "2019/05/19 24:59:59",
          status: "成功",
        },
        {
          name: "Jonnywang",
          money: "99,999,999.00",
          time: "2019/07/19 24:59:59",
          status: "成功",
        },
        {
          name: "Johnnywang",
          money: "999,999,999.00",
          time: "2019/02/19 24:59:59",
          status: "成功",
        },
        {
          name: "ohnnywang",
          money: "99,999,999.00",
          time: "2019/08/19 24:59:59",
          status: "成功",
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
::v-deep(.van-field__label) {
  color: #967140;
}
// .van-picker {
//   background: linear-gradient(180deg, rgb(58, 58, 58) 0%, #000000 5%);
//   border-radius: 10px 10px 0px 0px;
// }
// ::v-deep(.van-picker__mask) {
//   position: absolute;
//   top: 0;
//   left: 0;
//   z-index: 1;
//   width: 100%;
//   height: 100%;
//   background-image: linear-gradient(
//       180deg,
//       hsla(0, 0%, 100%, 0.01),
//       hsla(0, 0%, 100%, 0.4)
//     ),
//     linear-gradient(0deg, hsla(0, 0%, 100%, 0.01), hsla(0, 0%, 100%, 0.4));
//   background-repeat: no-repeat;
//   background-position: top, bottom;
//   transform: translateZ(0);
//   pointer-events: none;
// }
::v-deep(.van-field__label) {
  color: #967140;
}
// ::v-deep(.van-picker-column__item) {
//   color: #ffffff;
// }
.van-form {
  .van-field {
    display: inherit;
  }
}
.van-button--info {
  color: #fff;
  background-color: #c60000;
}

.van-button-normal {
  padding: 0 5px;
}
.btnBg {
  background-image: url("@/assets/pattern_btn_bg.svg"),
    linear-gradient(155.07deg, #343434 5.26%, #181818 84.13%);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 98% center;
}
</style>
