(window.webpackJsonp=window.webpackJsonp||[]).push([[177,145],{443:function(e){e.exports=JSON.parse('{"instructors":[{"imgSrc":"team-01.jpg","name":"Jane Seymour","designation":"UI Designer","excerpt":"Consectetur adipisicing elit, sed do eius mod tempor incididunt","socialLinks":[{"name":"Facebook","iconName":"icon-facebook","url":"https://www.facebook.com"},{"name":"Twitter","iconName":"icon-twitter","url":"https://www.twitter.com"},{"name":"LinkedIn","iconName":"icon-linkedin2","url":"https://www.linkedin.com"}]},{"imgSrc":"team-02.jpg","name":"Edward Norton","designation":"Web Developer","excerpt":"Consectetur adipisicing elit, sed do eius mod tempor incididunt","socialLinks":[{"name":"Facebook","iconName":"icon-facebook","url":"https://www.facebook.com"},{"name":"Twitter","iconName":"icon-twitter","url":"https://www.twitter.com"},{"name":"LinkedIn","iconName":"icon-linkedin2","url":"https://www.linkedin.com"}]},{"imgSrc":"team-03.jpg","name":"Penelope Cruz","designation":"Digital Marketer","excerpt":"Consectetur adipisicing elit, sed do eius mod tempor incididunt","socialLinks":[{"name":"Facebook","iconName":"icon-facebook","url":"https://www.facebook.com"},{"name":"Twitter","iconName":"icon-twitter","url":"https://www.twitter.com"},{"name":"LinkedIn","iconName":"icon-linkedin2","url":"https://www.linkedin.com"}]},{"imgSrc":"team-04.jpg","name":"John Travolta","designation":"WordPress Expert","excerpt":"Consectetur adipisicing elit, sed do eius mod tempor incididunt","socialLinks":[{"name":"Facebook","iconName":"icon-facebook","url":"https://www.facebook.com"},{"name":"Twitter","iconName":"icon-twitter","url":"https://www.twitter.com"},{"name":"LinkedIn","iconName":"icon-linkedin2","url":"https://www.linkedin.com"}]},{"imgSrc":"team-05.jpg","name":"Hilary Swank","designation":"Laravel Expert","excerpt":"Consectetur adipisicing elit, sed do eius mod tempor incididunt","socialLinks":[{"name":"Facebook","iconName":"icon-facebook","url":"https://www.facebook.com"},{"name":"Twitter","iconName":"icon-twitter","url":"https://www.twitter.com"},{"name":"LinkedIn","iconName":"icon-linkedin2","url":"https://www.linkedin.com"}]},{"imgSrc":"team-06.jpg","name":"Steve Martin","designation":"App Developer","excerpt":"Consectetur adipisicing elit, sed do eius mod tempor incididunt","socialLinks":[{"name":"Facebook","iconName":"icon-facebook","url":"https://www.facebook.com"},{"name":"Twitter","iconName":"icon-twitter","url":"https://www.twitter.com"},{"name":"LinkedIn","iconName":"icon-linkedin2","url":"https://www.linkedin.com"}]},{"imgSrc":"team-07.jpg","name":"Louis Vargas","designation":"WordPress Expert","excerpt":"Consectetur adipisicing elit, sed do eius mod tempor incididunt","socialLinks":[{"name":"Facebook","iconName":"icon-facebook","url":"https://www.facebook.com"},{"name":"Twitter","iconName":"icon-twitter","url":"https://www.twitter.com"},{"name":"LinkedIn","iconName":"icon-linkedin2","url":"https://www.linkedin.com"}]},{"imgSrc":"team-08.jpg","name":"Tamara Wilson","designation":"Affiliate Markeer","excerpt":"Consectetur adipisicing elit, sed do eius mod tempor incididunt","socialLinks":[{"name":"Facebook","iconName":"icon-facebook","url":"https://www.facebook.com"},{"name":"Twitter","iconName":"icon-twitter","url":"https://www.twitter.com"},{"name":"LinkedIn","iconName":"icon-linkedin2","url":"https://www.linkedin.com"}]}],"yogaInstructors":[{"imgSrc":"team-01.jpg","name":"Jane Seymour","designation":"Yoga Trainer","excerpt":"Consectetur adipisicing elit, sed do eius mod tempor incididunt","socialLinks":[{"name":"Facebook","iconName":"icon-facebook","url":"https://www.facebook.com"},{"name":"Twitter","iconName":"icon-twitter","url":"https://www.twitter.com"},{"name":"LinkedIn","iconName":"icon-linkedin2","url":"https://www.linkedin.com"}]},{"imgSrc":"team-02.jpg","name":"Edward Norton","designation":"Yoga Trainer","excerpt":"Consectetur adipisicing elit, sed do eius mod tempor incididunt","socialLinks":[{"name":"Facebook","iconName":"icon-facebook","url":"https://www.facebook.com"},{"name":"Twitter","iconName":"icon-twitter","url":"https://www.twitter.com"},{"name":"LinkedIn","iconName":"icon-linkedin2","url":"https://www.linkedin.com"}]},{"imgSrc":"team-03.jpg","name":"Penelope Cruz","designation":"Yoga Trainer","excerpt":"Consectetur adipisicing elit, sed do eius mod tempor incididunt","socialLinks":[{"name":"Facebook","iconName":"icon-facebook","url":"https://www.facebook.com"},{"name":"Twitter","iconName":"icon-twitter","url":"https://www.twitter.com"},{"name":"LinkedIn","iconName":"icon-linkedin2","url":"https://www.linkedin.com"}]}]}')},453:function(e,t,n){"use strict";n.r(t);n(55);var o={props:["instructor"]},r=n(13),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"edu-team-grid team-style-2"},[t("div",{staticClass:"inner"},[t("div",{staticClass:"thumbnail-wrap"},[t("div",{staticClass:"thumbnail"},[t("n-link",{attrs:{to:"/instructor/instructor-profile"}},[t("img",{attrs:{src:"/images/team/team-02/"+e.instructor.imgSrc,alt:e.instructor.name+" Thumbnail"}})])],1),e._v(" "),t("ul",{staticClass:"team-share-info"},e._l(e.instructor.socialLinks,(function(e,n){return t("li",{key:n},[t("a",{attrs:{"aria-label":e.name,href:e.url}},[t("i",{class:e.iconName})])])})),0)]),e._v(" "),t("div",{staticClass:"content"},[t("h5",{staticClass:"title"},[t("n-link",{attrs:{to:"/instructor/instructor-profile"}},[e._v(e._s(e.instructor.name))])],1),e._v(" "),t("span",{staticClass:"designation"},[e._v(e._s(e.instructor.designation))]),e._v(" "),t("p",[e._v(e._s(e.instructor.excerpt))])])])])}),[],!1,null,null,null);t.default=component.exports},604:function(e,t,n){"use strict";n.r(t);n(67),n(17),n(32),n(33);var o=n(443),r={components:{HeaderOne:function(){return Promise.resolve().then(n.bind(null,250))},BreadCrumbOne:function(){return n.e(6).then(n.bind(null,627))},SectionTitle:function(){return n.e(2).then(n.bind(null,629))},InstructorTwo:function(){return Promise.resolve().then(n.bind(null,453))},FooterOne:function(){return Promise.resolve().then(n.bind(null,251))}},data:function(){return{instructorData:o}},head:function(){return{title:"Instructor 1"}}},c=n(13),component=Object(c.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"main-wrapper",attrs:{id:"main-wrapper"}},[t("HeaderOne"),e._v(" "),t("BreadCrumbOne",{attrs:{pageTitle:"Instructor 1",title:"Leadership Instruction"}}),e._v(" "),t("div",{staticClass:"edu-team-area team-area-2 edu-section-gap"},[t("div",{staticClass:"container"},[t("SectionTitle",{attrs:{preTitle:"Instructors",title:"Course Instructors",alignment:"section-center"}}),e._v(" "),t("div",{staticClass:"row g-5"},e._l(e.instructorData.instructors.slice(0,6),(function(e,n){return t("div",{key:n,staticClass:"col-lg-4 col-md-6",attrs:{"data-aos-delay":"150","data-aos":"fade-up","data-aos-duration":"800"}},[t("InstructorTwo",{attrs:{instructor:e}})],1)})),0)],1)]),e._v(" "),t("FooterOne")],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{HeaderOne:n(250).default,InstructorTwo:n(453).default,FooterOne:n(251).default})}}]);