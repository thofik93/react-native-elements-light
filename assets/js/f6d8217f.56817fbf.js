"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9101,9498],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,v=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return a?n.createElement(v,o(o({ref:t},u),{},{components:a})):n.createElement(v,o({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},58215:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294);const r=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},9877:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(87462),r=a(67294),l=a(72389),o=a(29548),i=a(86010);const s="tabItem_LplD";function p(e){var t,a,l,p=e.lazy,u=e.block,c=e.defaultValue,m=e.values,d=e.groupId,v=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=m?m:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,o.lx)(y,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===c?c:null!=(t=null!=c?c:null==(a=k.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(l=k[0])?void 0:l.props.value;if(null!==f&&!y.some((function(e){return e.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,o.UB)(),N=h.tabGroupChoices,g=h.setTabGroupChoices,A=(0,r.useState)(f),D=A[0],O=A[1],C=[],w=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var x=N[d];null!=x&&x!==D&&y.some((function(e){return e.value===x}))&&O(x)}var B=function(e){var t=e.currentTarget,a=C.indexOf(t),n=y[a].value;n!==D&&(w(t),O(n),null!=d&&g(d,n))},E=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=C.indexOf(e.currentTarget)+1;a=C[n]||C[0];break;case"ArrowLeft":var r=C.indexOf(e.currentTarget)-1;a=C[r]||C[C.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":u},v)},y.map((function(e){var t=e.value,a=e.label,l=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:D===t?0:-1,"aria-selected":D===t,key:t,ref:function(e){return C.push(e)},onKeyDown:E,onFocus:B,onClick:B},l,{className:(0,i.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":D===t})}),null!=a?a:t)}))),p?(0,r.cloneElement)(k.filter((function(e){return e.props.value===D}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==D})}))))}function u(e){var t=(0,l.Z)();return r.createElement(p,(0,n.Z)({key:String(t)},e))}},56678:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>s,contentTitle:()=>p,metadata:()=>u,toc:()=>c,default:()=>d});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),o=a(27672),i=(a(34738),a(9877),a(58215),["components"]),s={id:"overlay",title:"Overlay"},p=void 0,u={unversionedId:"components/overlay",id:"components/overlay",title:"Overlay",description:"The Overlay is a view that floats above an app\u2019s content.",source:"@site/docs/components/Overlay.mdx",sourceDirName:"components",slug:"/components/overlay",permalink:"/docs/next/components/overlay",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/components/Overlay.mdx",tags:[],version:"current",frontMatter:{id:"overlay",title:"Overlay"},sidebar:"docs",previous:{title:"ListItem",permalink:"/docs/next/components/listitem"},next:{title:"PricingCard",permalink:"/docs/next/components/pricingcard"}},c=[{value:"Usage",id:"usage",children:[],level:2},{value:"Props",id:"props",children:[{value:"Overlay",id:"overlay",children:[],level:3}],level:2},{value:"Reference",id:"reference",children:[{value:"Overlay",id:"overlay-1",children:[{value:"ModalComponent",id:"modalcomponent",children:[],level:4},{value:"backdropStyle",id:"backdropstyle",children:[],level:4},{value:"fullScreen",id:"fullscreen",children:[],level:4},{value:"isVisible",id:"isvisible",children:[],level:4},{value:"onBackdropPress",id:"onbackdroppress",children:[],level:4},{value:"overlayStyle",id:"overlaystyle",children:[],level:4},{value:"pressableProps",id:"pressableprops",children:[],level:4}],level:3}],level:2}],m={toc:c};function d(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The Overlay is a view that floats above an app\u2019s content."),(0,l.kt)("p",null,"Overlays are an easy way to inform or request information from the user."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)(o.default,{mdxType:"Usage"}),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("h3",{id:"overlay"},"Overlay"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#modalcomponent"},"ModalComponent")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#backdropstyle"},"backdropStyle")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#fullscreen"},"fullScreen")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#isvisible"},"isVisible")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#onbackdroppress"},"onBackdropPress")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#overlaystyle"},"overlayStyle")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#pressableprops"},"pressableProps"))),(0,l.kt)("h2",{id:"reference"},"Reference"),(0,l.kt)("h3",{id:"overlay-1"},"Overlay"),(0,l.kt)("h4",{id:"modalcomponent"},"ModalComponent"),(0,l.kt)("p",null,"Override React Native ",(0,l.kt)("inlineCode",{parentName:"p"},"Modal")," component (usable for web-platform)."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"any"),(0,l.kt)("td",{parentName:"tr",align:null},"None")))),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"backdropstyle"},"backdropStyle"),(0,l.kt)("p",null,"Style of the backdrop container."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"View style(Object)"),(0,l.kt)("td",{parentName:"tr",align:null},"None")))),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"fullscreen"},"fullScreen"),(0,l.kt)("p",null,"If set to true, the modal will take up the entire screen width and height."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false")))),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"isvisible"},"isVisible"),(0,l.kt)("p",null,"If true, the overlay is visible."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"None")))),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"onbackdroppress"},"onBackdropPress"),(0,l.kt)("p",null,"Handler for backdrop press (only works when ",(0,l.kt)("inlineCode",{parentName:"p"},"fullscreen")," is false)."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Function"),(0,l.kt)("td",{parentName:"tr",align:null},"Function")))),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"overlaystyle"},"overlayStyle"),(0,l.kt)("p",null,"Style of the actual overlay."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"View style(Object)"),(0,l.kt)("td",{parentName:"tr",align:null},"None")))),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"pressableprops"},"pressableProps"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PressableProps except click handlers"),(0,l.kt)("td",{parentName:"tr",align:null},"None")))),(0,l.kt)("hr",null))}d.isMDXComponent=!0},27672:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>i,contentTitle:()=>s,metadata:()=>p,toc:()=>u,default:()=>m});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),o=["components"],i={},s=void 0,p={unversionedId:"components/usage/Overlay",id:"components/usage/Overlay",title:"Overlay",description:"\x3c!-- To show the guide to configure the Overlay Component to a project.",source:"@site/docs/components/usage/Overlay.mdx",sourceDirName:"components/usage",slug:"/components/usage/Overlay",permalink:"/docs/next/components/usage/Overlay",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/components/usage/Overlay.mdx",tags:[],version:"current",frontMatter:{}},u=[],c={toc:u};function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("hr",null),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Web-platform specific note"),":"),(0,l.kt)("p",{parentName:"blockquote"},"You ",(0,l.kt)("strong",{parentName:"p"},"must")," pass a valid React Native ",(0,l.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/modal"},(0,l.kt)("inlineCode",{parentName:"a"},"Modal"))," component implementation\ninto ",(0,l.kt)("a",{parentName:"p",href:"#modalcomponent"},(0,l.kt)("inlineCode",{parentName:"a"},"ModalComponent"))," prop because ",(0,l.kt)("inlineCode",{parentName:"p"},"Modal")," component is not implemented yet in ",(0,l.kt)("inlineCode",{parentName:"p"},"react-native-web"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"...\nimport Modal from 'modal-react-native-web';\n\n...\n\n<Overlay ModalComponent={Modal} ... />\n...\n")),(0,l.kt)("div",{className:"snack-player","data-snack-name":"RNE Overlay","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20'react'%3B%0Aimport%20%7B%20Button%2C%20Overlay%2C%20Icon%20%7D%20from%20'react-native-elements'%3B%0Aimport%20%7B%20View%2C%20Text%2C%20StyleSheet%20%7D%20from%20'react-native'%3B%0A%0Atype%20OverlayComponentProps%20%3D%20%7B%7D%3B%0A%0Aconst%20OverlayComponent%3A%20React.FunctionComponent%3COverlayComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0Aconst%20%5Bvisible%2C%20setVisible%5D%20%3D%20useState(false)%3B%0A%0Aconst%20toggleOverlay%20%3D%20()%20%3D%3E%20%7B%0A%20%20setVisible(!visible)%3B%0A%7D%3B%0A%0Areturn%20(%0A%20%20%3CView%3E%0A%20%20%20%20%3CButton%0A%20%20%20%20%20%20title%3D%22Open%20Overlay%22%0A%20%20%20%20%20%20onPress%3D%7BtoggleOverlay%7D%0A%20%20%20%20%20%20buttonStyle%3D%7Bstyles.button%7D%0A%20%20%20%20%2F%3E%0A%20%20%20%20%3COverlay%20isVisible%3D%7Bvisible%7D%20onBackdropPress%3D%7BtoggleOverlay%7D%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.textPrimary%7D%3EHello!%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.textSecondary%7D%3E%0A%20%20%20%20%20%20%20%20Welcome%20to%20React%20Native%20Elements%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20icon%3D%7B%0A%20%20%20%20%20%20%20%20%20%20%3CIcon%0A%20%20%20%20%20%20%20%20%20%20%20%20name%3D%22wrench%22%0A%20%20%20%20%20%20%20%20%20%20%20%20type%3D%22font-awesome%22%0A%20%20%20%20%20%20%20%20%20%20%20%20color%3D%22white%22%0A%20%20%20%20%20%20%20%20%20%20%20%20size%3D%7B25%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20iconStyle%3D%7B%7B%20marginRight%3A%2010%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20title%3D%22Start%20Building%22%0A%20%20%20%20%20%20%20%20onPress%3D%7BtoggleOverlay%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FOverlay%3E%0A%20%20%3C%2FView%3E%0A)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0Abutton%3A%20%7B%0A%20%20margin%3A%2010%2C%0A%7D%2C%0AtextPrimary%3A%20%7B%0A%20%20marginVertical%3A%2020%2C%0A%20%20textAlign%3A%20'center'%2C%0A%20%20fontSize%3A%2020%2C%0A%7D%2C%0AtextSecondary%3A%20%7B%0A%20%20marginBottom%3A%2010%2C%0A%20%20textAlign%3A%20'center'%2C%0A%20%20fontSize%3A%2017%2C%0A%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20OverlayComponent%3B","data-snack-dependencies":"react-native-elements","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}m.isMDXComponent=!0}}]);