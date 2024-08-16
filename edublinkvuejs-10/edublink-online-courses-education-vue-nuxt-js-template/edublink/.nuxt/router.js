import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _13ea38f9 = () => interopDefault(import('..\\pages\\about-us-one.vue' /* webpackChunkName: "pages/about-us-one" */))
const _44cb0171 = () => interopDefault(import('..\\pages\\about-us-three.vue' /* webpackChunkName: "pages/about-us-three" */))
const _2c51e9df = () => interopDefault(import('..\\pages\\about-us-two.vue' /* webpackChunkName: "pages/about-us-two" */))
const _93639496 = () => interopDefault(import('..\\pages\\coming-soon.vue' /* webpackChunkName: "pages/coming-soon" */))
const _409351e7 = () => interopDefault(import('..\\pages\\contact-me.vue' /* webpackChunkName: "pages/contact-me" */))
const _4eff5fed = () => interopDefault(import('..\\pages\\contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _98fab328 = () => interopDefault(import('..\\pages\\distant-learning.vue' /* webpackChunkName: "pages/distant-learning" */))
const _9f18aaf8 = () => interopDefault(import('..\\pages\\faq.vue' /* webpackChunkName: "pages/faq" */))
const _0f10dbe3 = () => interopDefault(import('..\\pages\\gallery-grid.vue' /* webpackChunkName: "pages/gallery-grid" */))
const _18d40990 = () => interopDefault(import('..\\pages\\gallery-masonry.vue' /* webpackChunkName: "pages/gallery-masonry" */))
const _7ec68948 = () => interopDefault(import('..\\pages\\kindergarten.vue' /* webpackChunkName: "pages/kindergarten" */))
const _591628c2 = () => interopDefault(import('..\\pages\\kitchen-coach.vue' /* webpackChunkName: "pages/kitchen-coach" */))
const _f69d7a4a = () => interopDefault(import('..\\pages\\landing-demo.vue' /* webpackChunkName: "pages/landing-demo" */))
const _27bd170e = () => interopDefault(import('..\\pages\\my-account.vue' /* webpackChunkName: "pages/my-account" */))
const _771d5574 = () => interopDefault(import('..\\pages\\online-academy.vue' /* webpackChunkName: "pages/online-academy" */))
const _084cee75 = () => interopDefault(import('..\\pages\\pricing-table.vue' /* webpackChunkName: "pages/pricing-table" */))
const _b860aece = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _ba933f9c = () => interopDefault(import('..\\pages\\purchase-guide.vue' /* webpackChunkName: "pages/purchase-guide" */))
const _b654efec = () => interopDefault(import('..\\pages\\shop\\index.vue' /* webpackChunkName: "pages/shop/index" */))
const _6315f343 = () => interopDefault(import('..\\pages\\terms-condition.vue' /* webpackChunkName: "pages/terms-condition" */))
const _797b3ce0 = () => interopDefault(import('..\\pages\\university.vue' /* webpackChunkName: "pages/university" */))
const _17c756f0 = () => interopDefault(import('..\\pages\\yoga-instructor.vue' /* webpackChunkName: "pages/yoga-instructor" */))
const _718ccb8a = () => interopDefault(import('..\\pages\\blog\\blog-details.vue' /* webpackChunkName: "pages/blog/blog-details" */))
const _2a22fd16 = () => interopDefault(import('..\\pages\\blog\\blog-list.vue' /* webpackChunkName: "pages/blog/blog-list" */))
const _5f3aecbe = () => interopDefault(import('..\\pages\\blog\\blog-masonry.vue' /* webpackChunkName: "pages/blog/blog-masonry" */))
const _66a81094 = () => interopDefault(import('..\\pages\\blog\\blog-standard.vue' /* webpackChunkName: "pages/blog/blog-standard" */))
const _50f731ad = () => interopDefault(import('..\\pages\\course\\course-details.vue' /* webpackChunkName: "pages/course/course-details" */))
const _2b4328dc = () => interopDefault(import('..\\pages\\course\\course-details-2.vue' /* webpackChunkName: "pages/course/course-details-2" */))
const _2b26f9da = () => interopDefault(import('..\\pages\\course\\course-details-3.vue' /* webpackChunkName: "pages/course/course-details-3" */))
const _3660e952 = () => interopDefault(import('..\\pages\\course\\course-five.vue' /* webpackChunkName: "pages/course/course-five" */))
const _213747cb = () => interopDefault(import('..\\pages\\course\\course-four.vue' /* webpackChunkName: "pages/course/course-four" */))
const _4e131d51 = () => interopDefault(import('..\\pages\\course\\course-one.vue' /* webpackChunkName: "pages/course/course-one" */))
const _cf67a06e = () => interopDefault(import('..\\pages\\course\\course-three.vue' /* webpackChunkName: "pages/course/course-three" */))
const _667ace37 = () => interopDefault(import('..\\pages\\course\\course-two.vue' /* webpackChunkName: "pages/course/course-two" */))
const _f6627092 = () => interopDefault(import('..\\pages\\event\\event-details.vue' /* webpackChunkName: "pages/event/event-details" */))
const _078e27be = () => interopDefault(import('..\\pages\\event\\event-grid.vue' /* webpackChunkName: "pages/event/event-grid" */))
const _3978a579 = () => interopDefault(import('..\\pages\\event\\event-list.vue' /* webpackChunkName: "pages/event/event-list" */))
const _1a1f37d5 = () => interopDefault(import('..\\pages\\instructor\\instructor-one.vue' /* webpackChunkName: "pages/instructor/instructor-one" */))
const _3067f618 = () => interopDefault(import('..\\pages\\instructor\\instructor-profile.vue' /* webpackChunkName: "pages/instructor/instructor-profile" */))
const _dc888d66 = () => interopDefault(import('..\\pages\\instructor\\instructor-three.vue' /* webpackChunkName: "pages/instructor/instructor-three" */))
const _3286e8bb = () => interopDefault(import('..\\pages\\instructor\\instructor-two.vue' /* webpackChunkName: "pages/instructor/instructor-two" */))
const _c851f7d0 = () => interopDefault(import('..\\pages\\shop\\cart.vue' /* webpackChunkName: "pages/shop/cart" */))
const _3348233e = () => interopDefault(import('..\\pages\\shop\\checkout.vue' /* webpackChunkName: "pages/shop/checkout" */))
const _6d0f819c = () => interopDefault(import('..\\pages\\shop\\product-details.vue' /* webpackChunkName: "pages/shop/product-details" */))
const _6b0b9786 = () => interopDefault(import('..\\pages\\shop\\wishlist.vue' /* webpackChunkName: "pages/shop/wishlist" */))
const _13956cc0 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _13ea38f9,
    name: "about-us-one"
  }, {
    path: "/about-us-three",
    component: _44cb0171,
    name: "about-us-three"
  }, {
    path: "/about-us-two",
    component: _2c51e9df,
    name: "about-us-two"
  }, {
    path: "/coming-soon",
    component: _93639496,
    name: "coming-soon"
  }, {
    path: "/contact-me",
    component: _409351e7,
    name: "contact-me"
  }, {
    path: "/contact-us",
    component: _4eff5fed,
    name: "contact-us"
  }, {
    path: "/distant-learning",
    component: _98fab328,
    name: "distant-learning"
  }, {
    path: "/faq",
    component: _9f18aaf8,
    name: "faq"
  }, {
    path: "/gallery-grid",
    component: _0f10dbe3,
    name: "gallery-grid"
  }, {
    path: "/gallery-masonry",
    component: _18d40990,
    name: "gallery-masonry"
  }, {
    path: "/kindergarten",
    component: _7ec68948,
    name: "kindergarten"
  }, {
    path: "/kitchen-coach",
    component: _591628c2,
    name: "kitchen-coach"
  }, {
    path: "/landing-demo",
    component: _f69d7a4a,
    name: "landing-demo"
  }, {
    path: "/my-account",
    component: _27bd170e,
    name: "my-account"
  }, {
    path: "/online-academy",
    component: _771d5574,
    name: "online-academy"
  }, {
    path: "/pricing-table",
    component: _084cee75,
    name: "pricing-table"
  }, {
    path: "/privacy-policy",
    component: _b860aece,
    name: "privacy-policy"
  }, {
    path: "/purchase-guide",
    component: _ba933f9c,
    name: "purchase-guide"
  }, {
    path: "/shop",
    component: _b654efec,
    name: "shop"
  }, {
    path: "/terms-condition",
    component: _6315f343,
    name: "terms-condition"
  }, {
    path: "/university",
    component: _797b3ce0,
    name: "university"
  }, {
    path: "/yoga-instructor",
    component: _17c756f0,
    name: "yoga-instructor"
  }, {
    path: "/blog/blog-details",
    component: _718ccb8a,
    name: "blog-blog-details"
  }, {
    path: "/blog/blog-list",
    component: _2a22fd16,
    name: "blog-blog-list"
  }, {
    path: "/blog/blog-masonry",
    component: _5f3aecbe,
    name: "blog-blog-masonry"
  }, {
    path: "/blog/blog-standard",
    component: _66a81094,
    name: "blog-blog-standard"
  }, {
    path: "/course/course-details",
    component: _50f731ad,
    name: "course-course-details"
  }, {
    path: "/course/course-details-2",
    component: _2b4328dc,
    name: "course-course-details-2"
  }, {
    path: "/course/course-details-3",
    component: _2b26f9da,
    name: "course-course-details-3"
  }, {
    path: "/course/course-five",
    component: _3660e952,
    name: "course-course-five"
  }, {
    path: "/course/course-four",
    component: _213747cb,
    name: "course-course-four"
  }, {
    path: "/course/course-one",
    component: _4e131d51,
    name: "course-course-one"
  }, {
    path: "/course/course-three",
    component: _cf67a06e,
    name: "course-course-three"
  }, {
    path: "/course/course-two",
    component: _667ace37,
    name: "course-course-two"
  }, {
    path: "/event/event-details",
    component: _f6627092,
    name: "event-event-details"
  }, {
    path: "/event/event-grid",
    component: _078e27be,
    name: "event-event-grid"
  }, {
    path: "/event/event-list",
    component: _3978a579,
    name: "event-event-list"
  }, {
    path: "/instructor/instructor-one",
    component: _1a1f37d5,
    name: "instructor-instructor-one"
  }, {
    path: "/instructor/instructor-profile",
    component: _3067f618,
    name: "instructor-instructor-profile"
  }, {
    path: "/instructor/instructor-three",
    component: _dc888d66,
    name: "instructor-instructor-three"
  }, {
    path: "/instructor/instructor-two",
    component: _3286e8bb,
    name: "instructor-instructor-two"
  }, {
    path: "/shop/cart",
    component: _c851f7d0,
    name: "shop-cart"
  }, {
    path: "/shop/checkout",
    component: _3348233e,
    name: "shop-checkout"
  }, {
    path: "/shop/product-details",
    component: _6d0f819c,
    name: "shop-product-details"
  }, {
    path: "/shop/wishlist",
    component: _6b0b9786,
    name: "shop-wishlist"
  }, {
    path: "/",
    component: _13956cc0,
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
