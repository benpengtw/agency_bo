import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Blank from "@/views/Blank.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Login",
    component: () => import("@/views/login/index.vue"),
  },
  // {
  //   path: "/login",
  //   name: "Login",
  //   component: () => import("@/views/login/index.vue"),
  // },
  {
    path: "/resetPassword",
    name: "ResetPassword",
    component: () => import("@/views/login/resetPassword.vue"),
  },
  {
    path: "/transactionPassword",
    name: "TransactionPassword",
    component: () => import("@/views/login/transactionPassword.vue"),
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/member",
    name: "Member",
    component: () => import("@/views/member/Member.vue"),
  },
  {
    path: "/memberDetail/:id",
    name: "MemberDetail",
    component: Blank,
    children: [
      // UserHome will be rendered inside User's <router-view>
      // when /users/:username is matched
      {
        path: "",
        component: () => import("@/views/member/MemberDetail.vue"),
      },
    ],
  },
  {
    path: "/productDetail",
    name: "ProductDetail",
    component: () => import("@/views/member/ProductDetail.vue"),
  },
  {
    path: "/finance",
    name: "Finance",
    component: () => import("@/views/finance/finance.vue"),
  },
  {
    path: "/bonus/:id",
    name: "Bonus",
    component: Blank,
    children: [
      // UserHome will be rendered inside User's <router-view>
      // when /users/:username is matched
      {
        path: "",
        component: () => import("@/views/finance/Bonus.vue"),
      },
    ],
  },
  {
    path: "/platform/:id",
    name: "Platform",
    component: Blank,
    children: [
      // UserHome will be rendered inside User's <router-view>
      // when /users/:username is matched
      {
        path: "",
        component: () => import("@/views/finance/Platform.vue"),
      },
    ],
  },
  {
    path: "/activemember/:id",
    name: "Activemember",
    component: Blank,
    children: [
      // UserHome will be rendered inside User's <router-view>
      // when /users/:username is matched
      {
        path: "",
        component: () => import("@/views/finance/Activemember.vue"),
      },
    ],
  },
  {
    path: "/financeProductList",
    name: "FinanceProductList",
    component: () => import("@/views/finance/ProductList.vue"),
  },
  {
    path: "/financeProductDetail",
    name: "FinanceProductDetail",
    component: () => import("@/views/finance/ProductDetail.vue"),
  },
  {
    path: "/record",
    name: "Record",
    component: () => import("@/views/record/Record.vue"),
  },
  {
    path: "/recordSubProxyDetail",
    name: "RecordSubProxyDetail",
    component: () => import("@/views/record/recordSubProxyDetail.vue"),
  },
  {
    path: "/more",
    name: "More",
    component: () => import("@/views/more/More.vue"),
  },
  {
    path: "/linkPage",
    name: "LinkPage",
    component: () => import("@/views/linkPage.vue"),
  },
  {
    path: "/subProxyPage",
    name: "SubProxyPage",
    component: () => import("@/views/subProxyPage.vue"),
  },
  {
    path: "/subProxyDetail",
    name: "SubProxyDetail",
    component: () => import("@/views/subProxyDetail.vue"),
  },
  {
    path: "/promotionPage",
    name: "PromotionPage",
    component: () => import("@/views/more/promotionPage.vue"),
  },
  {
    path: "/promotionBannerPage/:id",
    name: "PromotionBannerPage",
    redirect: "/promotionPage",
    component: Blank,
    children: [
      // UserHome will be rendered inside User's <router-view>
      // when /users/:username is matched
      {
        path: "",
        component: () => import("@/views/more/promotionBannerPage.vue"),
      },
    ],
  },
  {
    path: "/promotionAgencyPage",
    name: "PromotionAgencyPage",
    component: () => import("@/views/more/promotionAgencyPage.vue"),
  },
  {
    path: "/announcement",
    name: "Announcement",
    component: () => import("@/views/more/announcement.vue"),
  },
  {
    path: "/announcementAgency",
    name: "AnnouncementAgency",
    component: () => import("@/views/more/announcementAgency.vue"),
  },
  {
    path: "/problems",
    name: "Problems",
    component: () => import("@/views/more/problems.vue"),
  },
  {
    path: "/provision",
    name: "Provision",
    component: () => import("@/views/more/provision.vue"),
  },
  {
    path: "/newRegistrationList",
    name: "NewRegistrationList",
    component: () => import("@/views/newRegistrationList.vue"),
  },
  {
    path: "/todayMember",
    name: "TodayMember",
    component: () => import("@/views/todayMember.vue"),
  },
  {
    path: "/wallet",
    name: "Wallet",
    component: () => import("@/views//wallet/wallet.vue"),
  },
  {
    path: "/webBank/:id",
    name: "WebBank",
    redirect: "/wallet",
    component: Blank,
    children: [
      // UserHome will be rendered inside User's <router-view>
      // when /users/:username is matched
      {
        path: "",
        component: () => import("@/views/wallet/webBank.vue"),
      },
    ],
  },
  {
    path: "/withdrawalWebBank/:id",
    name: "WithdrawalWebBank",
    redirect: "/wallet",
    component: Blank,
    children: [
      // UserHome will be rendered inside User's <router-view>
      // when /users/:username is matched
      {
        path: "",
        component: () => import("@/views/wallet/withdrawalWebBank.vue"),
      },
    ],
  },
  {
    path: "/withdrawalUSDT/:id",
    name: "WithdrawalUSDT",
    redirect: "/wallet",
    component: Blank,
    children: [
      // UserHome will be rendered inside User's <router-view>
      // when /users/:username is matched
      {
        path: "",
        component: () => import("@/views/wallet/withdrawalUSDT.vue"),
      },
    ],
  },
  {
    path: "/thirdParty/:id",
    name: "ThirdParty",
    redirect: "/thirdParty",
    component: Blank,
    children: [
      // UserHome will be rendered inside User's <router-view>
      // when /users/:username is matched
      {
        path: "",
        component: () => import("@/views/wallet/thirdParty.vue"),
      },
    ],
  },
  {
    path: "/passwordRedEnvelope/:id",
    name: "PasswordRedEnvelope",
    redirect: "/passwordRedEnvelope",
    component: Blank,
    children: [
      // UserHome will be rendered inside User's <router-view>
      // when /users/:username is matched
      {
        path: "",
        component: () => import("@/views/wallet/passwordRedEnvelope.vue"),
      },
    ],
  },
  {
    //捕获所有路由
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.name !== "Login" && !window.localStorage.getItem("USER_INFO")) {
    next({ name: "Login" });
  } else {
    next();
  }
  // Scroll to window top
  // window.scrollTo(0, 0);
});
export default router;
