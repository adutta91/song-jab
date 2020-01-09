(this["webpackJsonpsong-jab"]=this["webpackJsonpsong-jab"]||[]).push([[0],{102:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),l=t(17),i=t.n(l),o=(t(66),t(28)),c=t.n(o),u=t(2),s=t(5),m=t(13),p=t(46),f=t(21),d=t.n(f),g=t(1),b=t(15);function h(){var n=Object(u.a)(["\n  transition: all 0.1s ease-out;\n  border-radius: 5px;\n  box-shadow: 1px 1px 1px 1px ",";\n  padding: 20px;\n  width: 400px;\n  height: 300px;\n  margin-bottom: 20px;\n  background: white;\n  margin: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  &:hover {\n    box-shadow: 2px 2px 3px 3px\n      ",";\n  }\n\n  text-decoration: none;\n  color: ",";\n"]);return h=function(){return n},n}var v=g.b.section(h(),(function(n){return n.theme.variables.backgroundColor}),(function(n){return n.theme.variables.backgroundColor}),(function(n){return n.theme.variables.fontColorPrimary}));var E=function(n){var e=n.children,t=Object(b.a)(n,["children"]);return r.a.createElement(v,t,e)};function x(){var n=Object(u.a)(["\n  background: linear-gradient(45deg, rgba(0, 0, 0, 0.5), transparent);\n\n  > h1 {\n    font-size: 18px;\n    font-weight: bold;\n  }\n"]);return x=function(){return n},n}var y=Object(g.b)(E)(x());var w=function(n){return r.a.createElement(y,null,r.a.createElement("h1",null,n.name),r.a.createElement("p",null,d()(n.event_date_time).format("MMMM Do, YYYY h:mma")))};function k(){var n=Object(u.a)(['\n  transition: all 0.2s ease-out;\n  background: linear-gradient(45deg, rgba(0, 0, 0, 0.5), transparent);\n  position: relative;\n\n  > h1 {\n    font-size: 18px;\n    font-weight: bold;\n  }\n\n  > img {\n    width: 100px;\n  }\n\n  &:after {\n    transition: all 0.2s ease-out;\n    content: "";\n    background: url(',") no-repeat;\n    background-size: cover;\n    opacity: 0.1;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    position: absolute;\n  }\n\n  &:hover {\n    &:after {\n      opacity: 1;\n    }\n  }\n"]);return k=function(){return n},n}var j=Object(g.b)(E)(k(),(function(n){return n.logo}));var O=function(n){return r.a.createElement(j,{logo:n.logo},r.a.createElement("h1",null,n.name))};function _(){var n=Object(u.a)(['\n  position: relative;\n  background: linear-gradient(45deg, rgba(0, 0, 0, 0.5), transparent);\n\n  > h1 {\n    font-size: 18px;\n    font-weight: bold;\n  }\n\n  &:after {\n    transition: all 0.2s ease-out;\n    content: "";\n    background: url(',") no-repeat;\n    background-size: cover;\n    opacity: 0.1;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    position: absolute;\n  }\n\n  &:hover {\n    &:after {\n      opacity: 1;\n    }\n  }\n"]);return _=function(){return n},n}var N=Object(g.b)(E)(_(),(function(n){return n.image}));var C=function(n){return r.a.createElement(N,{image:n.image},r.a.createElement("h1",null,n.name),r.a.createElement("p",null,n.formatted_address||n.city_state))},z=t(9);function P(){var n=Object(u.a)(["\n  text-decoration: none;\n  background: ",';\n  color: white;\n  border-radius: 5px;\n  padding: 10px;\n  text-transform: uppercase;\n  font-family: "Montserrat", sans-serif;\n  font-size: 16px;\n  box-shadow: none;\n  border: none;\n  cursor: pointer;\n\n  &:disabled {\n    background: rgba(0, 0, 0, 0.2);\n  }\n']);return P=function(){return n},n}var S=g.b.button(P(),(function(n){return n.theme.variables.blue}));var M=function(n){var e=n.children,t=Object(b.a)(n,["children"]);return r.a.createElement(S,t,e)},A=t(56),Y=t(25);var I=["AIzaSyAZefetANsVrE","j78sGHWFuyTEH0Y6uY7qo"].join(""),R=Object(Y.GoogleApiWrapper)({apiKey:I})((function(n){if(!n.coordinates)return null;var e=Object(A.a)(n.coordinates,2),t=e[0],a=e[1];return r.a.createElement(Y.Map,{google:n.google,zoom:14,center:{lat:a,lng:t}},r.a.createElement(Y.Marker,{title:"hi",name:n.name,position:{lat:a,lng:t}}))}));function D(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  label {\n    font-weight: bold;\n    font-size: 18px;\n    color: ",";\n  }\n\n  > header {\n    text-align: center;\n\n    > h1 {\n      font-size: 32px;\n      margin: 0;\n    }\n  }\n\n  > .info {\n    flex: 1;\n    width: 400px;\n\n    > p {\n      display: flex;\n      justify-content: space-between;\n      &:first-child {\n        margin-top: 0;\n      }\n    }\n  }\n\n  > div > div {\n    width: 500px !important;\n    height: 400px !important;\n    margin-bottom: 20px;\n  }\n\n  > .artists {\n    text-align: center;\n\n    > ul {\n      list-style: none;\n      margin: 0;\n      padding: 0;\n      margin-top: 20px;\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: center;\n\n      > li {\n        margin-bottom: 10px;\n        margin-right: 10px;\n\n        &:last-child {\n          margin-right: 0;\n        }\n      }\n    }\n  }\n"]);return D=function(){return n},n}var T=g.b.section(D(),(function(n){return n.theme.variables.blue}));var U=Object(s.b)((function(n){return{allArtists:n.dataReducer.artists}}))((function(n){return r.a.createElement(T,null,r.a.createElement("header",null,r.a.createElement("h1",null,n.name),r.a.createElement("p",null,"available"===n.ticket_status?r.a.createElement(M,{onClick:function(){return window.location=n.ticket_links[0].url}},"Buy Tickets"):r.a.createElement(M,{disabled:!0},"Tickets Unavailable"))),r.a.createElement("section",{className:"row"}),r.a.createElement("section",{className:"info"},r.a.createElement("p",null,r.a.createElement("label",null,"Event time "),d()(n.event_date_time).format("MMMM Do, YYYY h:mma")),r.a.createElement("p",null,r.a.createElement("label",null,"Tickets on sale "),d()(n.on_sale_datetime).format("MMMM Do, YYYY h:mma"))),r.a.createElement(R,{className:"google-map",coordinates:n.loc&&n.loc.coordinates,name:n.name}),r.a.createElement("section",{className:"artists"},r.a.createElement("label",null,"Performing Artists "),r.a.createElement("ul",null,n.artists&&n.artists.map((function(e){var t=Object(m.find)(n.allArtists,(function(n){return n.id===e}));return t?r.a.createElement("li",{key:e},r.a.createElement(z.b,{to:"/artists/".concat(e)},r.a.createElement(M,null,t.name))):null})))))})),V=t(50),L=t.n(V);function W(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  > header {\n    > h1 {\n      font-size: 32px;\n      margin: 0;\n      margin-right: 20px;\n    }\n  }\n\n  ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n\n    &.links {\n      display: flex;\n\n      > li {\n        margin: 10px 20px;\n\n        &:first-child {\n          margin-left: 0;\n        }\n\n        &:last-child {\n          margin-right: 0;\n        }\n      }\n    }\n\n    &.genres {\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: flex-start;\n      margin-bottom: 10px;\n\n      > li {\n        margin-right: 20px;\n        margin-bottom: 10px;\n        color: white;\n        padding: 5px;\n        background: rgba(0, 0, 0, 0.4);\n\n        &:last-child {\n          margin-right: 0;\n        }\n      }\n    }\n  }\n\n  ul.links {\n    > li {\n      i {\n        font-size: 40px;\n      }\n    }\n  }\n\n  ul.genres {\n    > li {\n      margin: 10px 5px;\n      opacity: 0.5;\n    }\n  }\n\n  > .bio {\n    line-height: 24px;\n    font-size: 16px;\n  }\n"]);return W=function(){return n},n}var q=g.b.section(W());var G=function(n){return r.a.createElement(q,null,r.a.createElement("header",null,r.a.createElement("h1",null,n.name)),r.a.createElement("ul",{className:"links"},n.spotify_url?r.a.createElement("li",null,r.a.createElement("a",{href:n.spotify_url,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-spotify"}))):null,n.last_fm_url?r.a.createElement("li",null,r.a.createElement("a",{href:n.last_fm_url,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-lastfm-square"}))):null),r.a.createElement("ul",{className:"genres"},n.genres&&n.genres.map((function(n){return r.a.createElement("li",{key:n},n)}))),n.spotify_id?r.a.createElement(L.a,{uri:"spotify:artist:".concat(n.spotify_id),size:"large",view:"list",theme:"black"}):null,n.bio?r.a.createElement("p",{className:"bio"},n.bio):r.a.createElement("p",null,"No info"))};function B(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  label {\n    font-weight: bold;\n    font-size: 18px;\n    color: ",";\n  }\n\n  > header {\n    > h1 {\n      font-size: 32px;\n      margin: 0;\n      text-align: center;\n    }\n  }\n\n  ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n\n    &.links {\n      display: flex;\n\n      > li {\n        margin: 10px 20px;\n\n        &:first-child {\n          margin-left: 0;\n        }\n\n        &:last-child {\n          margin-right: 0;\n        }\n      }\n    }\n\n    &.genres {\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: center;\n      margin-bottom: 10px;\n\n      > li {\n        margin-right: 20px;\n        margin-bottom: 10px;\n        color: white;\n        padding: 5px;\n        background: rgba(0, 0, 0, 0.4);\n\n        &:last-child {\n          margin-right: 0;\n        }\n      }\n    }\n  }\n\n  ul.genres {\n    > li {\n      margin: 10px 5px;\n      opacity: 0.5;\n    }\n  }\n\n  ul.links {\n    > li {\n      i {\n        font-size: 40px;\n      }\n    }\n  }\n\n  > .info {\n    flex: 1;\n    width: 400px;\n\n    > p {\n      display: flex;\n      justify-content: space-between;\n      &:first-child {\n        margin-top: 0;\n      }\n    }\n  }\n\n  > div > div {\n    width: 500px !important;\n    height: 400px !important;\n    margin: 20px;\n  }\n\n  > .bio {\n    line-height: 24px;\n    font-size: 16px;\n    text-align: center;\n  }\n\n  > .venues {\n    text-align: center;\n\n    > ul {\n      margin-top: 20px;\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: center;\n\n      > li {\n        margin-bottom: 10px;\n        margin-right: 10px;\n\n        &:last-child {\n          margin-right: 0;\n        }\n      }\n    }\n  }\n"]);return B=function(){return n},n}var F=g.b.section(B(),(function(n){return n.theme.variables.blue}));var H={concerts:{title:"Concerts",slug:"concerts",apiUrl:"https://hl-candidate-events.herokuapp.com/concerts",cardComponent:w,profileComponent:U},artists:{title:"Artists",slug:"artists",apiUrl:"https://hl-candidate-events.herokuapp.com/artists",cardComponent:O,profileComponent:G},venues:{title:"Venues",slug:"venues",apiUrl:"https://hl-candidate-events.herokuapp.com/venues",cardComponent:C,profileComponent:Object(s.b)((function(n){return{allVenues:n.dataReducer.allVenues}}))((function(n){return n.name?r.a.createElement(F,null,r.a.createElement("header",null,r.a.createElement("h1",null,n.name),r.a.createElement("p",null,n.formatted_address||n.city_state)),r.a.createElement("ul",{className:"links"},n.url_facebook?r.a.createElement("li",null,r.a.createElement("a",{href:n.url_facebook,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-facebook-square"}))):null,n.url_twitter?r.a.createElement("li",null,r.a.createElement("a",{href:n.url_twitter,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-twitter-square"}))):null),r.a.createElement("ul",{className:"genres"},n.genres&&n.genres.map((function(n){return r.a.createElement("li",{key:n},n)}))),r.a.createElement("section",{className:"info"},r.a.createElement("p",null,r.a.createElement("label",null,"Website "),n.formatted_website||n.website||"Unknown"),r.a.createElement("p",null,r.a.createElement("label",null,"Phone "),n.formatted_phone||"Unknown"),r.a.createElement("p",null,r.a.createElement("label",null,"Size "),n.size||"Unknown")),r.a.createElement(R,{className:"google-map",coordinates:n.loc&&n.loc.coordinates,name:n.name}),n.description?r.a.createElement("p",{className:"bio"},n.description):r.a.createElement("p",null,"No description"),r.a.createElement("section",{className:"venues"},r.a.createElement("label",null,"Similar Venues "),r.a.createElement("ul",null,n.similar_venues&&n.similar_venues.map((function(n){return r.a.createElement("li",{key:n.slug},r.a.createElement(z.b,{to:"/venues/".concat(n.slug)},r.a.createElement(M,null,n.name)))}))))):r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"404"),r.a.createElement("h3",null,"Venue not found"))}))}},J=t(51),X=t.n(J),K=t(10);function Z(){var n=Object(u.a)(["\n  box-shadow: 1px 1px 1px 1px ",";\n  display: flex;\n  height: 60px;\n  background: white;\n\n  > a {\n    transition: all 0.2s ease-out;\n    text-decoration: none;\n    color: ",";\n    text-transform: uppercase;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    height: 100%;\n    padding: 0 20px;\n\n    &:hover {\n      background: rgba(0, 0, 0, 0.15);\n    }\n\n    &.active {\n      background: ",";\n      color: white;\n    }\n  }\n"]);return Z=function(){return n},n}var $=g.b.header(Z(),(function(n){return n.theme.variables.backgroundColor}),(function(n){return n.theme.variables.fontColorPrimary}),(function(n){return n.theme.variables.blue}));var Q=Object(K.f)(Object(s.b)((function(n,e){return{tabs:e.tabs,selected:e.match.params.view}}),(function(n){return{}}))((function(n){var e=n.tabs,t=n.selected;return r.a.createElement($,null,e.map((function(n){return r.a.createElement(z.b,{key:n.slug,to:"/".concat(n.slug),className:X()([{active:t===n.slug}])},n.title)})))})));function nn(){var n=Object(u.a)(["\n  height: 60px;\n  position: fixed;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: -1px -1px 1px 1px ",";\n  width: 100%;\n  background: white;\n\n  > a {\n    margin-left: 5px;\n  }\n"]);return nn=function(){return n},n}var en=g.b.footer(nn(),(function(n){return n.theme.variables.backgroundColor}));var tn=function(){return r.a.createElement(en,null,"made by"," ",r.a.createElement("a",{href:"https://github.com/adutta91",target:"_blank",rel:"noopener noreferrer"},"arjun"))};function an(){var n=Object(u.a)([""]);return an=function(){return n},n}var rn=g.b.section(an());var ln=function(){return r.a.createElement(rn,null,"Loading...")},on=t(52),cn=t(53),un=t(57),sn=t(54),mn=t(60);function pn(){var n=Object(u.a)(["\n  position: relative;\n\n  > i {\n    position: absolute;\n    right: 10px;\n    top: 13px;\n    color: rgba(0, 0, 0, 0.3);\n    pointer-events: none;\n  }\n"]);return pn=function(){return n},n}function fn(){var n=Object(u.a)(["\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n\n  &::-ms-expand {\n    display: none;\n  }\n\n  cursor: pointer;\n  font-size: 16px;\n  background: white;\n  padding: 10px;\n  min-height: 40px;\n  min-width: 60px;\n"]);return fn=function(){return n},n}var dn=g.b.select(fn()),gn=g.b.section(pn());var bn=function(n){var e=n.children,t=Object(b.a)(n,["children"]);return r.a.createElement(gn,null,r.a.createElement(dn,t,e),r.a.createElement("i",{className:"fas fa-chevron-down"}))};function hn(){var n=Object(u.a)([""]);return hn=function(){return n},n}var vn=g.b.option(hn());var En=function(n){var e=n.children,t=Object(b.a)(n,["children"]);return r.a.createElement(vn,t,e)};function xn(){var n=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 20px 0;\n\n  > .page-display {\n    display: flex;\n    align-items: center;\n    \n    > section {\n      margin-right: 10px;\n    }\n  }\n\n  > button {\n    margin: 0 10px;\n    color: ",";\n    background: transparent;\n    cursor: pointer\n    outline: none;\n    \n    &:disabled {\n      cursor: not-allowed;\n      opacity: 0.5;\n      background: transparent;\n    }\n  }\n"]);return xn=function(){return n},n}var yn=g.b.section(xn(),(function(n){return n.theme.variables.blue})),wn=function(n){n.classNames;var e=n.currPage,t=n.totalPages,a=n.onChange;function l(n,r){if(n)return a(parseInt(n));if(r){var l=e+r;if(l>=0&&l<t)return a(l)}}return t<=1?null:r.a.createElement(yn,{key:"pagination-controls"},r.a.createElement(M,{disabled:0===e,onClick:function(n){return l(null,-1)}},r.a.createElement("i",{className:"fas fa-chevron-left"})),r.a.createElement("div",{className:"page-display"},r.a.createElement(bn,{name:"currPage",id:"currPage",onChange:function(n){return l(n.currentTarget.value)},value:e},function(){for(var n=[],e=0;e<t;e++)n.push(r.a.createElement(En,{value:e,key:e},e+1));return n}()),r.a.createElement("div",null,"of ",t)),r.a.createElement(M,{disabled:e===t-1,onClick:function(n){return l(null,1)}},r.a.createElement("i",{className:"fas fa-chevron-right"})))},kn=function(n){function e(n){var t;return Object(on.a)(this,e),(t=Object(un.a)(this,Object(sn.a)(e).call(this,n))).initialState=function(n){var e=t.getPages(n);return{pages:e,displayItems:e[0]||[],currPage:0}},t.getPages=function(n){var e=n.options,t=n.pageSize;return Object(m.chunk)(e,t)},t.pageChange=function(n){t.setState((function(e){return{currPage:n,displayItems:e.pages[n]}}))},t.controls=function(){return t.state.pages.length?r.a.createElement(wn,{currPage:t.state.currPage,totalPages:t.state.pages.length,onChange:t.pageChange}):null},t.render=function(){return r.a.createElement(r.a.Fragment,null,"top"===t.props.controlsPos?t.controls():null,t.props.children({displayItems:t.state.displayItems}),"bottom"===t.props.controlsPos?t.controls():null)},t.state=t.initialState(n),t}return Object(mn.a)(e,n),Object(cn.a)(e,[{key:"componentDidUpdate",value:function(n){this.props.options!==n.options&&this.setState(this.initialState(this.props))}}]),e}(a.Component);kn.defaultProps={controlsPos:"bottom",pageSize:20};var jn=kn;function On(){var n=Object(u.a)(["\n  > ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: flex-start;\n  }\n"]);return On=function(){return n},n}var _n=g.b.section(On());var Nn=Object(s.b)((function(n,e){return{selected:e.match.params.view,data:n.dataReducer,loading:n.viewReducer.loading}}))((function(n){var e=n.loading,t=n.selected,a=n.data;if(n.dataReceived,e)return r.a.createElement(_n,null,r.a.createElement(ln,null));if(!t||!H[t])return r.a.createElement(_n,null,r.a.createElement("h1",null,"Welcome!"),r.a.createElement("p",null,"Select a category to get started!"));var l=H[t].cardComponent;return r.a.createElement(_n,null,r.a.createElement(jn,{options:a[t],controlsPos:"bottom",pageSize:20},(function(n){var e=n.displayItems;return r.a.createElement("ul",{key:"items-list"},e.map((function(n){return r.a.createElement(z.b,{key:n.id||n.slug,to:"/".concat(t,"/").concat(n.id||n.slug)},r.a.createElement(l,n))})))})))}));function Cn(){var n=Object(u.a)(["\n  margin: 0;\n  padding: 0;\n"]);return Cn=function(){return n},n}var zn=g.b.section(Cn());var Pn=Object(K.f)(Object(s.b)((function(n,e){return{view:e.match.params.view,id:e.match.params.id,data:n.dataReducer}}))((function(n){var e=n.data,t=n.view,a=n.id,l=Object(m.find)(e[t],(function(n){return n.id===a||n.slug===a})),i=H[t].profileComponent;return r.a.createElement(zn,null,r.a.createElement(i,l))})));function Sn(){var n=Object(u.a)(["\n  padding: 40px;\n  padding-bottom: 60px;\n  background: (0, 0, 0, 0.05);\n  max-width: 1000px;\n  margin: 0 auto;\n"]);return Sn=function(){return n},n}var Mn=g.b.section(Sn());var An=Object(K.f)(Object(s.b)((function(n,e){return{view:e.match.params.view}}))((function(n){return r.a.createElement(Mn,null,r.a.createElement(K.c,null,r.a.createElement(K.a,{path:"/:view/:id",component:Pn}),r.a.createElement(K.a,{path:"/:view?",component:Nn})))})));function Yn(){var n=Object(u.a)([""]);return Yn=function(){return n},n}var In=g.b.section(Yn());var Rn=Object(s.b)((function(n){return{}}),(function(n){return{dataReceived:function(e,t){return n(function(n,e){return{type:"DATA_RECEIVED",slug:e,data:n}}(e,t))},setLoading:function(e){return n(function(n){return{type:"SET_LOADING",val:n}}(e))}}}))((function(n){var e=n.dataReceived,t=n.setLoading;return Object(a.useEffect)((function(){t(!0),Promise.all(Object(m.map)(H,(function(n){var e;return c.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.awrap(Object(p.get)(n.apiUrl));case 2:if(200!==(e=t.sent).status||!e.data){t.next=5;break}return t.abrupt("return",{data:e.data,slug:n.slug});case 5:case"end":return t.stop()}}))}))).then((function(n){n.forEach((function(n){return e(n.data,n.slug)})),t(!1)}))}),[e,t]),r.a.createElement(In,null,r.a.createElement(Q,{tabs:Object(m.map)(H,(function(n){return{title:n.title,slug:n.slug}}))}),r.a.createElement(An,null),r.a.createElement(tn,null))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Dn={backgroundColor:"rgba(0,0,0,0.1)",blue:"#6ea5ef",fontColorPrimary:"#606060"},Tn=t(16),Un=t(55),Vn=t(23),Ln=t(24),Wn=Object(Tn.c)({dataReducer:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{artists:[],concerts:[],venues:[]},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"DATA_RECEIVED":return Object(Ln.a)({},n,Object(Vn.a)({},e.slug,e.data));default:return n}},viewReducer:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!1},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_LOADING":return Object(Ln.a)({},n,{loading:e.val});default:return n}}}),qn=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Tn.d,Gn=Object(Tn.e)(Wn,qn(Object(Tn.a)(Un.a))),Bn=r.a.createElement((function(n){return r.a.createElement(g.a,{theme:{variables:Dn}},n.children)}),null,r.a.createElement(s.a,{store:Gn},r.a.createElement(z.a,null,r.a.createElement(K.c,null,r.a.createElement(K.a,{path:"/:view?",component:Rn})))));i.a.render(Bn,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))},61:function(n,e,t){n.exports=t(102)},66:function(n,e,t){}},[[61,1,2]]]);
//# sourceMappingURL=main.34385998.chunk.js.map