(this["webpackJsonpsoup-kitchen"]=this["webpackJsonpsoup-kitchen"]||[]).push([[0],{48:function(t,e,n){},74:function(t,e,n){},75:function(t,e,n){},76:function(t,e,n){},78:function(t,e,n){},79:function(t,e,n){},80:function(t,e,n){},81:function(t,e,n){},82:function(t,e,n){"use strict";n.r(e);var a,c=n(2),r=n(0),i=n.n(r),o=n(10),s=n.n(o),u=n(39),l=(n(74),n(75),n(28)),b=n(15);!function(t){t.ADD_ITEM="ORDER_ADD_ITEM",t.CLEAR_ITEM="ORDER_CLEAR_ITEM",t.REMOVE_ITEM="ORDER_REMOVE_ITEM",t.ADD_TO_CART="ADD_TO_CART"}(a||(a={}));var d=function(t){return{type:a.CLEAR_ITEM,item:t}},j=function(t,e){return{type:a.ADD_TO_CART,item:t,quantity:e}};function O(t,e){return Object(b.a)(Object(b.a)({},t),{},Object(l.a)({},e.item,Object(b.a)(Object(b.a)({},t[e.item]),{},{quantity:e.quantity,subtotal:e.quantity*t[e.item].price})))}function m(t,e){return Object(b.a)(Object(b.a)({},t),{},Object(l.a)({},e.item,Object(b.a)(Object(b.a)({},t[e.item]),{},{quantity:0,subtotal:0})))}function f(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{bread:{price:110,quantity:0,subtotal:0},cheese:{price:90,quantity:0,subtotal:0},milk:{price:50,quantity:0,subtotal:0},butter:{price:120,quantity:0,subtotal:0},soup:{price:60,quantity:0,subtotal:0}},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case a.ADD_TO_CART:return O(t,e);case a.CLEAR_ITEM:return m(t,e);default:return t}}var p=n(32),h=n(106),x=n(107),y=n(108),v=n(109),_=n(40),q=n(104),R=n(114),T=n(110),N=n(57),I=n.n(N),C=n(56),E=n.n(C),S=n(102),D=n(50),g=n.n(D);var k,A=function(t){return"\xa3".concat((t/100).toFixed(2))};!function(t){t.bread="bread",t.cheese="cheese",t.milk="milk",t.butter="butter",t.soup="soup"}(k||(k={}));n(76);var M,w=i.a.forwardRef((function(t,e){var n=t.foodItem,a=t.quantity,r=t.subtotal,i=t.handleClearItem;return Object(c.jsxs)("div",{className:"orderItem",children:[Object(c.jsxs)("p",{className:"orderItem__description",children:[n," x ",a," \xa0 \xa0 | \xa0 \xa0"," ",A(r)]}),Object(c.jsx)(g.a,{ref:e,className:"orderItem__deleteIcon",color:"secondary",onClick:function(){return i(k[n])}}),Object(c.jsx)(S.a,{variant:"fullWidth"})]})})),L=n(103),z=n(105),B=n(54),U=n.n(B),F=(n(78),function(t){var e=t.preDiscountTotal,n=t.discounts;return Object(c.jsxs)(L.a,{className:"orderSummary",children:[e<=0?Object(c.jsx)("h5",{children:"Your cart is empty!"}):null,function(){if(e<=0)return null;return n.some((function(t){return t.discount>0}))?n.map((function(t,e){return t.discount>0?Object(c.jsxs)(z.a,{children:[Object(c.jsx)(U.a,{fontSize:"small"}),"".concat(t.type)," : ",A(t.discount)]},e+"discount"):null})):Object(c.jsx)(z.a,{children:"No discounts applied!"})}(),e>0?Object(c.jsxs)(_.a,{variant:"h6",children:[Object(c.jsx)(S.a,{}),Object(c.jsxs)("div",{className:"orderSummary__subtotal",children:["Subtotal: ",A(e)]})]}):null,function(){var t=e-n.reduce((function(t,e){return t+e.discount}),0);return t>0?Object(c.jsxs)(_.a,{variant:"h5",gutterBottom:!0,children:[Object(c.jsx)(S.a,{}),Object(c.jsxs)("div",{className:"orderSummary__total",children:["Total: ",A(t)]}),Object(c.jsx)(S.a,{})]}):null}(),Object(c.jsx)(q.a,{variant:"contained",color:"secondary",size:"large",disabled:e<=0,children:"Order"})]})}),G=n(22),J=n(55);function V(t){void 0!==M&&M.dispatch(t)}function W(){return{orderState:f}}var K=Object(u.b)((function(t){return{order:t.orderState}}),null,null,{forwardRef:!0})((function(t){var e=t.order,n=t.foodLabels,a=function(t){return Object.values(t).reduce((function(t,e){return t+e.subtotal}),0)}(e),r=function(t){return[{type:"butter discount",discount:t.butter.subtotal/3},{type:"cheese discount",discount:Math.floor(t.cheese.quantity/2)*t.cheese.price},{type:"bread discount",discount:t.bread.quantity<=t.soup.quantity?t.bread.subtotal/2:t.bread.price/2*t.soup.quantity}]}(e),o=function(t){V(d(t))},s=i.a.createRef();return Object(c.jsxs)("div",{className:t.className,children:[Object(c.jsx)("h2",{className:"".concat(t.className,"__title"),children:"Order Summary"}),n.map((function(t){var n=e[t].quantity,a=e[t].subtotal;return n>0?Object(c.jsx)(w,{ref:s,foodItem:t,quantity:n,subtotal:a,handleClearItem:o},t):null})),Object(c.jsx)(F,{preDiscountTotal:a,discounts:r})]})})),Q=(n(79),Object(h.a)((function(t){return{root:{flexGrow:1},menuButton:{marginRight:t.spacing(2)},title:{flexGrow:1}}}))),Y=i.a.forwardRef((function(t,e){var n=Q(),a=i.a.useState(!1),r=Object(p.a)(a,2),o=r[0],s=r[1],u={bread:{price:110,quantity:0,subtotal:0},cheese:{price:90,quantity:0,subtotal:0},milk:{price:50,quantity:0,subtotal:0},butter:{price:120,quantity:0,subtotal:0},soup:{price:60,quantity:0,subtotal:0}},l=Object.keys(u),b=Object(c.jsx)(K,{foodLabels:l,className:"modalBody"});return Object(c.jsx)("div",{className:n.root,children:Object(c.jsx)(x.a,{position:"fixed",children:Object(c.jsxs)(y.a,{children:[Object(c.jsx)(v.a,{edge:"start",className:n.menuButton,color:"inherit","aria-label":"menu",children:Object(c.jsx)(E.a,{})}),Object(c.jsx)(_.a,{variant:"h6",className:n.title,children:"Soup Kitchen"}),Object(c.jsx)(I.a,{}),Object(c.jsx)(q.a,{color:"inherit",onClick:function(){s(!0)},children:"Cart"}),Object(c.jsx)(R.a,{tabIndex:-1,open:o,onClose:function(){s(!1)},className:"modal","aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:Object(c.jsx)(T.a,{children:b})})]})})})})),H=(n(48),n(58)),P=n.n(H),X=n(59),Z=n.n(X),$=n(111),tt=n(112),et=n(113),nt=(n(80),function(t){var e,n=t.addToCart,a=t.label,i=Object(r.useState)(0),o=Object(p.a)(i,2),s=o[0],u=o[1],l=Object(r.useState)(!1),b=Object(p.a)(l,2),d=b[0],j=b[1],O=k[a];return Object(c.jsxs)($.a,{className:"menuItem",children:[Object(c.jsx)(tt.a,{title:(e=a,"string"!==typeof e?"":e.charAt(0).toUpperCase()+e.slice(1))}),Object(c.jsx)("div",{className:"menuItem__image menuItem__image--".concat(a)}),Object(c.jsxs)("div",{children:[Object(c.jsx)(P.a,{fontSize:"large",color:"action",onClick:function(){u(s+1)}}),Object(c.jsx)(Z.a,{fontSize:"large",color:"action",onClick:function(){s>0&&u(s-1)}})]}),Object(c.jsxs)(et.a,{children:[Object(c.jsx)(_.a,{variant:"body2",color:"textSecondary",component:"p"}),Object(c.jsx)(q.a,{onClick:function(){n(O,s),u(0),j(!0),setTimeout((function(){return j(!1)}),1500)},variant:"contained",color:"primary",size:"small",children:"Update cart"})]}),d?Object(c.jsx)("p",{children:"Updated!"}):Object(c.jsxs)("p",{children:["Quantity: ",s]})]})}),at=function(t){var e=t.foodLabels,n=function(t,e){V(j(t,e))};return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"menuSection",children:e.map((function(t){return Object(c.jsx)(nt,{label:t,addToCart:n},t)}))})})},ct=(n(81),function(){var t={bread:{price:110,quantity:0,subtotal:0},cheese:{price:90,quantity:0,subtotal:0},milk:{price:50,quantity:0,subtotal:0},butter:{price:120,quantity:0,subtotal:0},soup:{price:60,quantity:0,subtotal:0}},e=Object.keys(t),n=i.a.createRef();return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(Y,{ref:n}),Object(c.jsx)("span",{className:"container__image"}),Object(c.jsx)(at,{foodLabels:e})]})});var rt=function(){return Object(c.jsx)("div",{className:"app",children:Object(c.jsx)(ct,{})})},it=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{orderState:{bread:{price:110,quantity:0,subtotal:0},cheese:{price:90,quantity:0,subtotal:0},milk:{price:50,quantity:0,subtotal:0},butter:{price:120,quantity:0,subtotal:0},soup:{price:60,quantity:0,subtotal:0}}},e=Object(G.combineReducers)(W());return Object(G.createStore)(e,t,Object(J.composeWithDevTools)())}();M=it,s.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(u.a,{store:it,children:Object(c.jsx)(rt,{})})}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.99e074e7.chunk.js.map