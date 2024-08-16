import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _372828c0 = () => interopDefault(import('..\\pages\\about-us-one.vue' /* webpackChunkName: "pages/about-us-one" */))
const _08aab350 = () => interopDefault(import('..\\pages\\about-us-three.vue' /* webpackChunkName: "pages/about-us-three" */))
const _0658c6f4 = () => interopDefault(import('..\\pages\\about-us-two.vue' /* webpackChunkName: "pages/about-us-two" */))
const _85efdba4 = () => interopDefault(import('..\\pages\\coming-soon.vue' /* webpackChunkName: "pages/coming-soon" */))
const _d940fb64 = () => interopDefault(import('..\\pages\\contact-me.vue' /* webpackChunkName: "pages/contact-me" */))
const _bc68df58 = () => interopDefault(import('..\\pages\\contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _310cad93 = () => interopDefault(import('..\\pages\\distant-learning.vue' /* webpackChunkName: "pages/distant-learning" */))
const _cdebe006 = () => interopDefault(import('..\\pages\\faq.vue' /* webpackChunkName: "pages/faq" */))
const _40dae2ec = () => interopDefault(import('..\\pages\\gallery-grid.vue' /* webpackChunkName: "pages/gallery-grid" */))
const _18aaf331 = () => interopDefault(import('..\\pages\\gallery-masonry.vue' /* webpackChunkName: "pages/gallery-masonry" */))
const _4f483bef = () => interopDefault(import('..\\pages\\kindergarten.vue' /* webpackChunkName: "pages/kindergarten" */))
const _13298dd8 = () => interopDefault(import('..\\pages\\kitchen-coach.vue' /* webpackChunkName: "pages/kitchen-coach" */))
const _5532f582 = () => interopDefault(import('..\\pages\\landing-demo.vue' /* webpackChunkName: "pages/landing-demo" */))
const _7a894775 = () => interopDefault(import('..\\pages\\my-account.vue' /* webpackChunkName: "pages/my-account" */))
const _2dfcfa5b = () => interopDefault(import('..\\pages\\online-academy.vue' /* webpackChunkName: "pages/online-academy" */))
const _480190ae = () => interopDefault(import('..\\pages\\pricing-table.vue' /* webpackChunkName: "pages/pricing-table" */))
const _5aaf4d80 = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _59960519 = () => interopDefault(import('..\\pages\\purchase-guide.vue' /* webpackChunkName: "pages/purchase-guide" */))
const _a8e136fa = () => interopDefault(import('..\\pages\\shop\\index.vue' /* webpackChunkName: "pages/shop/index" */))
const _efaa2988 = () => interopDefault(import('..\\pages\\terms-condition.vue' /* webpackChunkName: "pages/terms-condition" */))
const _160e91f7 = () => interopDefault(import('..\\pages\\university.vue' /* webpackChunkName: "pages/university" */))
const _19314c81 = () => interopDefault(import('..\\pages\\yoga-instructor.vue' /* webpackChunkName: "pages/yoga-instructor" */))
const _0a5e73a2 = () => interopDefault(import('..\\pages\\blog\\blog-details.vue' /* webpackChunkName: "pages/blog/blog-details" */))
const _1003796e = () => interopDefault(import('..\\pages\\blog\\blog-list.vue' /* webpackChunkName: "pages/blog/blog-list" */))
const _bb4073b6 = () => interopDefault(import('..\\pages\\blog\\blog-masonry.vue' /* webpackChunkName: "pages/blog/blog-masonry" */))
const _efc337e6 = () => interopDefault(import('..\\pages\\blog\\blog-standard.vue' /* webpackChunkName: "pages/blog/blog-standard" */))
const _59b2ff94 = () => interopDefault(import('..\\pages\\course\\course-details.vue' /* webpackChunkName: "pages/course/course-details" */))
const _9943488e = () => interopDefault(import('..\\pages\\course\\course-details-2.vue' /* webpackChunkName: "pages/course/course-details-2" */))
const _9927198c = () => interopDefault(import('..\\pages\\course\\course-details-3.vue' /* webpackChunkName: "pages/course/course-details-3" */))
const _0645ded0 = () => interopDefault(import('..\\pages\\course\\course-five.vue' /* webpackChunkName: "pages/course/course-five" */))
const _42ad9b44 = () => interopDefault(import('..\\pages\\course\\course-four.vue' /* webpackChunkName: "pages/course/course-four" */))
const _dd901290 = () => interopDefault(import('..\\pages\\course\\course-one.vue' /* webpackChunkName: "pages/course/course-one" */))
const _b4bf6920 = () => interopDefault(import('..\\pages\\course\\course-three.vue' /* webpackChunkName: "pages/course/course-three" */))
const _acc0b0c4 = () => interopDefault(import('..\\pages\\course\\course-two.vue' /* webpackChunkName: "pages/course/course-two" */))
const _dbba3944 = () => interopDefault(import('..\\pages\\event\\event-details.vue' /* webpackChunkName: "pages/event/event-details" */))
const _2fefc9da = () => interopDefault(import('..\\pages\\event\\event-grid.vue' /* webpackChunkName: "pages/event/event-grid" */))
const _6d2f8332 = () => interopDefault(import('..\\pages\\event\\event-list.vue' /* webpackChunkName: "pages/event/event-list" */))
const _ba388b88 = () => interopDefault(import('..\\pages\\instructor\\instructor-one.vue' /* webpackChunkName: "pages/instructor/instructor-one" */))
const _36722602 = () => interopDefault(import('..\\pages\\instructor\\instructor-profile.vue' /* webpackChunkName: "pages/instructor/instructor-profile" */))
const _092d8418 = () => interopDefault(import('..\\pages\\instructor\\instructor-three.vue' /* webpackChunkName: "pages/instructor/instructor-three" */))
const _896929bc = () => interopDefault(import('..\\pages\\instructor\\instructor-two.vue' /* webpackChunkName: "pages/instructor/instructor-two" */))
const _22b99702 = () => interopDefault(import('..\\pages\\shop\\cart.vue' /* webpackChunkName: "pages/shop/cart" */))
const _2bb06fb6 = () => interopDefault(import('..\\pages\\shop\\checkout.vue' /* webpackChunkName: "pages/shop/checkout" */))
const _0a3edad5 = () => interopDefault(import('..\\pages\\shop\\product-details.vue' /* webpackChunkName: "pages/shop/product-details" */))
const _fd4c4db8 = () => interopDefault(import('..\\pages\\shop\\wishlist.vue' /* webpackChunkName: "pages/shop/wishlist" */))
const _302857f9 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about-us-one",
    component: _372828c0,
    name: "about-us-one"
  }, {
    path: "/about-us-three",
    component: _08aab350,
    name: "about-us-three"
  }, {
    path: "/about-us-two",
    component: _0658c6f4,
    name: "about-us-two"
  }, {
    path: "/coming-soon",
    component: _85efdba4,
    name: "coming-soon"
  }, {
    path: "/contact-me",
    component: _d940fb64,
    name: "contact-me"
  }, {
    path: "/contact-us",
    component: _bc68df58,
    name: "contact-us"
  }, {
    path: "/distant-learning",
    component: _310cad93,
    name: "distant-learning"
  }, {
    path: "/faq",
    component: _cdebe006,
    name: "faq"
  }, {
    path: "/gallery-grid",
    component: _40dae2ec,
    name: "gallery-grid"
  }, {
    path: "/gallery-masonry",
    component: _18aaf331,
    name: "gallery-masonry"
  }, {
    path: "/kindergarten",
    component: _4f483bef,
    name: "kindergarten"
  }, {
    path: "/kitchen-coach",
    component: _13298dd8,
    name: "kitchen-coach"
  }, {
    path: "/landing-demo",
    component: _5532f582,
    name: "landing-demo"
  }, {
    path: "/my-account",
    component: _7a894775,
    name: "my-account"
  }, {
    path: "/online-academy",
    component: _2dfcfa5b,
    name: "online-academy"
  }, {
    path: "/pricing-table",
    component: _480190ae,
    name: "pricing-table"
  }, {
    path: "/privacy-policy",
    component: _5aaf4d80,
    name: "privacy-policy"
  }, {
    path: "/purchase-guide",
    component: _59960519,
    name: "purchase-guide"
  }, {
    path: "/shop",
    component: _a8e136fa,
    name: "shop"
  }, {
    path: "/terms-condition",
    component: _efaa2988,
    name: "terms-condition"
  }, {
    path: "/university",
    component: _160e91f7,
    name: "university"
  }, {
    path: "/yoga-instructor",
    component: _19314c81,
    name: "yoga-instructor"
  }, {
    path: "/blog/blog-details",
    component: _0a5e73a2,
    name: "blog-blog-details"
  }, {
    path: "/blog/blog-list",
    component: _1003796e,
    name: "blog-blog-list"
  }, {
    path: "/blog/blog-masonry",
    component: _bb4073b6,
    name: "blog-blog-masonry"
  }, {
    path: "/blog/blog-standard",
    component: _efc337e6,
    name: "blog-blog-standard"
  }, {
    path: "/course/course-details",
    component: _59b2ff94,
    name: "course-course-details"
  }, {
    path: "/course/course-details-2",
    component: _9943488e,
    name: "course-course-details-2"
  }, {
    path: "/course/course-details-3",
    component: _9927198c,
    name: "course-course-details-3"
  }, {
    path: "/course/course-five",
    component: _0645ded0,
    name: "course-course-five"
  }, {
    path: "/course/course-four",
    component: _42ad9b44,
    name: "course-course-four"
  }, {
    path: "/course/course-one",
    component: _dd901290,
    name: "course-course-one"
  }, {
    path: "/course/course-three",
    component: _b4bf6920,
    name: "course-course-three"
  }, {
    path: "/course/course-two",
    component: _acc0b0c4,
    name: "course-course-two"
  }, {
    path: "/event/event-details",
    component: _dbba3944,
    name: "event-event-details"
  }, {
    path: "/event/event-grid",
    component: _2fefc9da,
    name: "event-event-grid"
  }, {
    path: "/event/event-list",
    component: _6d2f8332,
    name: "event-event-list"
  }, {
    path: "/instructor/instructor-one",
    component: _ba388b88,
    name: "instructor-instructor-one"
  }, {
    path: "/instructor/instructor-profile",
    component: _36722602,
    name: "instructor-instructor-profile"
  }, {
    path: "/instructor/instructor-three",
    component: _092d8418,
    name: "instructor-instructor-three"
  }, {
    path: "/instructor/instructor-two",
    component: _896929bc,
    name: "instructor-instructor-two"
  }, {
    path: "/shop/cart",
    component: _22b99702,
    name: "shop-cart"
  }, {
    path: "/shop/checkout",
    component: _2bb06fb6,
    name: "shop-checkout"
  }, {
    path: "/shop/product-details",
    component: _0a3edad5,
    name: "shop-product-details"
  }, {
    path: "/shop/wishlist",
    component: _fd4c4db8,
    name: "shop-wishlist"
  }, {
    path: "/",
    component: _302857f9,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
