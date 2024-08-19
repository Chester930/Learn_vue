import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _152867c4 = () => interopDefault(import('..\\pages\\about-us-one.vue' /* webpackChunkName: "pages/about-us-one" */))
const _218ead08 = () => interopDefault(import('..\\pages\\about-us-three.vue' /* webpackChunkName: "pages/about-us-three" */))
const _2d9018aa = () => interopDefault(import('..\\pages\\about-us-two.vue' /* webpackChunkName: "pages/about-us-two" */))
const _3a79818a = () => interopDefault(import('..\\pages\\coming-soon.vue' /* webpackChunkName: "pages/coming-soon" */))
const _3c94b772 = () => interopDefault(import('..\\pages\\contact-me.vue' /* webpackChunkName: "pages/contact-me" */))
const _4b00c578 = () => interopDefault(import('..\\pages\\contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _792677b7 = () => interopDefault(import('..\\pages\\distant-learning.vue' /* webpackChunkName: "pages/distant-learning" */))
const _799e9b59 = () => interopDefault(import('..\\pages\\faq.vue' /* webpackChunkName: "pages/faq" */))
const _104f0aae = () => interopDefault(import('..\\pages\\gallery-grid.vue' /* webpackChunkName: "pages/gallery-grid" */))
const _d24556e6 = () => interopDefault(import('..\\pages\\gallery-masonry.vue' /* webpackChunkName: "pages/gallery-masonry" */))
const _fff68fda = () => interopDefault(import('..\\pages\\kindergarten.vue' /* webpackChunkName: "pages/kindergarten" */))
const _0c06d398 = () => interopDefault(import('..\\pages\\kitchen-coach.vue' /* webpackChunkName: "pages/kitchen-coach" */))
const _f4211cb4 = () => interopDefault(import('..\\pages\\landing-demo.vue' /* webpackChunkName: "pages/landing-demo" */))
const _23be7c99 = () => interopDefault(import('..\\pages\\my-account.vue' /* webpackChunkName: "pages/my-account" */))
const _218afd7f = () => interopDefault(import('..\\pages\\online-academy.vue' /* webpackChunkName: "pages/online-academy" */))
const _2ed4990a = () => interopDefault(import('..\\pages\\pricing-table.vue' /* webpackChunkName: "pages/pricing-table" */))
const _4e3d50a4 = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _4d24083d = () => interopDefault(import('..\\pages\\purchase-guide.vue' /* webpackChunkName: "pages/purchase-guide" */))
const _2900d3df = () => interopDefault(import('..\\pages\\shop\\index.vue' /* webpackChunkName: "pages/shop/index" */))
const _065d4c98 = () => interopDefault(import('..\\pages\\terms-condition.vue' /* webpackChunkName: "pages/terms-condition" */))
const _817871ca = () => interopDefault(import('..\\pages\\university.vue' /* webpackChunkName: "pages/university" */))
const _d138a446 = () => interopDefault(import('..\\pages\\yoga-instructor.vue' /* webpackChunkName: "pages/yoga-instructor" */))
const _99a37674 = () => interopDefault(import('..\\pages\\blog\\blog-details.vue' /* webpackChunkName: "pages/blog/blog-details" */))
const _e3944a6c = () => interopDefault(import('..\\pages\\blog\\blog-list.vue' /* webpackChunkName: "pages/blog/blog-list" */))
const _4b2f9749 = () => interopDefault(import('..\\pages\\blog\\blog-masonry.vue' /* webpackChunkName: "pages/blog/blog-masonry" */))
const _0d6e912e = () => interopDefault(import('..\\pages\\blog\\blog-standard.vue' /* webpackChunkName: "pages/blog/blog-standard" */))
const _f3a4c290 = () => interopDefault(import('..\\pages\\course\\course-details.vue' /* webpackChunkName: "pages/course/course-details" */))
const _a8a47c46 = () => interopDefault(import('..\\pages\\course\\course-details-2.vue' /* webpackChunkName: "pages/course/course-details-2" */))
const _a8884d44 = () => interopDefault(import('..\\pages\\course\\course-details-3.vue' /* webpackChunkName: "pages/course/course-details-3" */))
const _7770322c = () => interopDefault(import('..\\pages\\course\\course-five.vue' /* webpackChunkName: "pages/course/course-five" */))
const _985022c0 = () => interopDefault(import('..\\pages\\course\\course-four.vue' /* webpackChunkName: "pages/course/course-four" */))
const _3a07c7dc = () => interopDefault(import('..\\pages\\course\\course-one.vue' /* webpackChunkName: "pages/course/course-one" */))
const _59c06394 = () => interopDefault(import('..\\pages\\course\\course-three.vue' /* webpackChunkName: "pages/course/course-three" */))
const _526f78c2 = () => interopDefault(import('..\\pages\\course\\course-two.vue' /* webpackChunkName: "pages/course/course-two" */))
const _4642fb82 = () => interopDefault(import('..\\pages\\event\\event-details.vue' /* webpackChunkName: "pages/event/event-details" */))
const _29e17794 = () => interopDefault(import('..\\pages\\event\\event-grid.vue' /* webpackChunkName: "pages/event/event-grid" */))
const _284efd8e = () => interopDefault(import('..\\pages\\event\\event-list.vue' /* webpackChunkName: "pages/event/event-list" */))
const _761bb140 = () => interopDefault(import('..\\pages\\instructor\\instructor-one.vue' /* webpackChunkName: "pages/instructor/instructor-one" */))
const _51d22823 = () => interopDefault(import('..\\pages\\instructor\\instructor-profile.vue' /* webpackChunkName: "pages/instructor/instructor-profile" */))
const _58de1bd0 = () => interopDefault(import('..\\pages\\instructor\\instructor-three.vue' /* webpackChunkName: "pages/instructor/instructor-three" */))
const _454c4f74 = () => interopDefault(import('..\\pages\\instructor\\instructor-two.vue' /* webpackChunkName: "pages/instructor/instructor-two" */))
const _d04f2cba = () => interopDefault(import('..\\pages\\shop\\cart.vue' /* webpackChunkName: "pages/shop/cart" */))
const _4494696e = () => interopDefault(import('..\\pages\\shop\\checkout.vue' /* webpackChunkName: "pages/shop/checkout" */))
const _4bbc719e = () => interopDefault(import('..\\pages\\shop\\product-details.vue' /* webpackChunkName: "pages/shop/product-details" */))
const _74e7dc48 = () => interopDefault(import('..\\pages\\shop\\wishlist.vue' /* webpackChunkName: "pages/shop/wishlist" */))
const _3dc77c55 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _152867c4,
    name: "about-us-one"
  }, {
    path: "/about-us-three",
    component: _218ead08,
    name: "about-us-three"
  }, {
    path: "/about-us-two",
    component: _2d9018aa,
    name: "about-us-two"
  }, {
    path: "/coming-soon",
    component: _3a79818a,
    name: "coming-soon"
  }, {
    path: "/contact-me",
    component: _3c94b772,
    name: "contact-me"
  }, {
    path: "/contact-us",
    component: _4b00c578,
    name: "contact-us"
  }, {
    path: "/distant-learning",
    component: _792677b7,
    name: "distant-learning"
  }, {
    path: "/faq",
    component: _799e9b59,
    name: "faq"
  }, {
    path: "/gallery-grid",
    component: _104f0aae,
    name: "gallery-grid"
  }, {
    path: "/gallery-masonry",
    component: _d24556e6,
    name: "gallery-masonry"
  }, {
    path: "/kindergarten",
    component: _fff68fda,
    name: "kindergarten"
  }, {
    path: "/kitchen-coach",
    component: _0c06d398,
    name: "kitchen-coach"
  }, {
    path: "/landing-demo",
    component: _f4211cb4,
    name: "landing-demo"
  }, {
    path: "/my-account",
    component: _23be7c99,
    name: "my-account"
  }, {
    path: "/online-academy",
    component: _218afd7f,
    name: "online-academy"
  }, {
    path: "/pricing-table",
    component: _2ed4990a,
    name: "pricing-table"
  }, {
    path: "/privacy-policy",
    component: _4e3d50a4,
    name: "privacy-policy"
  }, {
    path: "/purchase-guide",
    component: _4d24083d,
    name: "purchase-guide"
  }, {
    path: "/shop",
    component: _2900d3df,
    name: "shop"
  }, {
    path: "/terms-condition",
    component: _065d4c98,
    name: "terms-condition"
  }, {
    path: "/university",
    component: _817871ca,
    name: "university"
  }, {
    path: "/yoga-instructor",
    component: _d138a446,
    name: "yoga-instructor"
  }, {
    path: "/blog/blog-details",
    component: _99a37674,
    name: "blog-blog-details"
  }, {
    path: "/blog/blog-list",
    component: _e3944a6c,
    name: "blog-blog-list"
  }, {
    path: "/blog/blog-masonry",
    component: _4b2f9749,
    name: "blog-blog-masonry"
  }, {
    path: "/blog/blog-standard",
    component: _0d6e912e,
    name: "blog-blog-standard"
  }, {
    path: "/course/course-details",
    component: _f3a4c290,
    name: "course-course-details"
  }, {
    path: "/course/course-details-2",
    component: _a8a47c46,
    name: "course-course-details-2"
  }, {
    path: "/course/course-details-3",
    component: _a8884d44,
    name: "course-course-details-3"
  }, {
    path: "/course/course-five",
    component: _7770322c,
    name: "course-course-five"
  }, {
    path: "/course/course-four",
    component: _985022c0,
    name: "course-course-four"
  }, {
    path: "/course/course-one",
    component: _3a07c7dc,
    name: "course-course-one"
  }, {
    path: "/course/course-three",
    component: _59c06394,
    name: "course-course-three"
  }, {
    path: "/course/course-two",
    component: _526f78c2,
    name: "course-course-two"
  }, {
    path: "/event/event-details",
    component: _4642fb82,
    name: "event-event-details"
  }, {
    path: "/event/event-grid",
    component: _29e17794,
    name: "event-event-grid"
  }, {
    path: "/event/event-list",
    component: _284efd8e,
    name: "event-event-list"
  }, {
    path: "/instructor/instructor-one",
    component: _761bb140,
    name: "instructor-instructor-one"
  }, {
    path: "/instructor/instructor-profile",
    component: _51d22823,
    name: "instructor-instructor-profile"
  }, {
    path: "/instructor/instructor-three",
    component: _58de1bd0,
    name: "instructor-instructor-three"
  }, {
    path: "/instructor/instructor-two",
    component: _454c4f74,
    name: "instructor-instructor-two"
  }, {
    path: "/shop/cart",
    component: _d04f2cba,
    name: "shop-cart"
  }, {
    path: "/shop/checkout",
    component: _4494696e,
    name: "shop-checkout"
  }, {
    path: "/shop/product-details",
    component: _4bbc719e,
    name: "shop-product-details"
  }, {
    path: "/shop/wishlist",
    component: _74e7dc48,
    name: "shop-wishlist"
  }, {
    path: "/",
    component: _3dc77c55,
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
