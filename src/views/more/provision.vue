<template>
  <div class="container pb-4 FLEX_C">
    <NavBar :name="'上分制度条款'" :back="'/more'" />
    <div class="px-2">
      <div class="mt-4 FLEX_R">
        1.代理每月活跃20人以上，即可申请【会员上分】
      </div>
      <div class="mt-4 FLEX_R">
        2.会员上分制度为代理自行存款至游戏账号中（存款手续费是代理自行承担）。
      </div>
      <div class="mt-4 FLEX_R">
        3.代理自行判断是否为线下会员上分，上分的金额将实时转入会员的游戏账号中。
      </div>
      <div class="mt-4 FLEX_R">
        4.使用上分制度转入的金额不可申请优惠，可以正常带入游戏进行投注，需完成一倍流水即可提款。
      </div>
      <div class="mt-4 FLEX_R">
        5.申请【会员上分】的代理不可将自己的代理后台的信息资料泄露给任何人，在登录APP过后及时退出，因任何原因泄露信息导致的资金损失全部自行承担。
      </div>
      <div class="mt-4 FLEX_R">
        6.拥有【会员上分】的代理需与专员保持联系，新利拥有随时关闭此项功能的权限。
      </div>
      <div class="mt-4 FLEX_R">
        7.合作伙伴不得使用不正当手段骗取佣金，一经发现账户将会永久性冻结,所产生的所有佣金将会清零。
      </div>
      <div class="mt-4 FLEX_R">8.新利对以上条款有最终解释权。</div>
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
};
</script>
<style></style>
