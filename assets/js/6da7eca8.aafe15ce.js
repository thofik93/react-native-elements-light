"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7298],{85345:(e,t,a)=>{a.d(t,{A:()=>r});var n=a(67294);function r(e){var t=e.color,a=void 0===t?"#e2e2e2":t,r=e.alpha,s=void 0===r?.3:r,o=e.overlayColor,l=void 0===o?a+100*s:o,c=e.icon,i=e.size,m=e.padding,d=void 0===m?"6px":m,v=e.style;return n.createElement("div",{className:"inline-flex-center",style:Object.assign({backgroundColor:l,borderRadius:"6px",padding:d},v)},n.createElement(c,{fill:a,fontSize:i}))}},66182:(e,t,a)=>{a.d(t,{M:()=>c});var n=a(87462),r=a(63366),s=a(67294),o=a(85345),l=["size","header","subheader","primary","color","icon"];function c(e){var t=e.size,a=void 0===t?"1.5rem":t,c=e.header,i=e.subheader,m=e.primary,d=e.color,v=e.icon,p=(0,r.Z)(e,l);return s.createElement("div",{className:"container margin-vert--lg"},s.createElement("div",{className:"row"},s.createElement("div",null,s.createElement(o.A,(0,n.Z)({icon:v,color:d,padding:8,size:a,style:{marginRight:12}},p))),s.createElement("div",null,s.createElement("h1",{className:m&&"gradient clip-text",style:{lineHeight:.8,margin:"4px 0px",color:d}},c),s.createElement("small",null,i))))}},93868:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(67294),r=a(39960),s=[{sponsorTitle:"\ud83d\udc8e Diamond Sponsor",colSize:5,items:[]},{sponsorTitle:"\ud83e\udd47 Gold Sponsor",colSize:4,items:[{title:"onKeyPress LLC",img:"https://avatars.githubusercontent.com/u/78321386?s=200&v=4",link:"https://onkeypress.io/",desc:"It offers a variety of design, technology and marketing services"},{title:"Icons8",link:"https://icons8.com/",img:"https://avatars.githubusercontent.com/u/6615749?s=200&v=4",desc:"Icons, illustrations, photos, music, and design tools"}]},{sponsorTitle:"\ud83e\udd48 Silver Sponsor",colSize:3,items:[]},{sponsorTitle:"\ud83e\udd49 Bronze Sponsor",colSize:2,items:[]}],o=a(66182),l=a(97735);const c=function(){return n.createElement("section",{id:"sponsor",className:"container"},n.createElement(o.M,{color:"#EA4AAA",header:"Sponsors",subheader:"Built with passion, backed by the community",icon:l.She}),s.map((function(e){var t=e.sponsorTitle,a=e.items,s=e.colSize,o=void 0===s?2:s;return a.length?n.createElement("div",{className:"container "},n.createElement("h2",{className:" margin-horiz--md"},t),n.createElement("div",{className:"row is-multiline  margin-horiz--md"},a.map((function(e,t){var a=e.title,s=e.desc,l=e.link,c=e.img;return n.createElement("div",{key:t,className:"col col--"+o},n.createElement(r.Z,{className:"card shadow--md",href:l,style:{height:"100%"}},n.createElement("div",{className:"avatar card__body"},n.createElement("img",{className:"avatar__photo",src:c}),n.createElement("div",{className:"avatar__intro"},n.createElement("div",{className:"avatar__name"},a),n.createElement("small",{className:"avatar__subtitle"},s)))))})))):null})))}},43912:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var n=a(67294),r=a(96087),s=a(52263);const o=function(){return n.createElement("div",{className:"container"},n.createElement("div",{className:"row",id:"sponsor"},n.createElement("div",{className:"col col--6"},n.createElement("div",{className:"backers-section text--center"},n.createElement("h3",null,"Backers"),n.createElement("p",{className:"p--desc"},"Support us with a monthly donation and help us continue our activities."),n.createElement("a",{href:"https://opencollective.com/react-native-elements#backers",target:"_blank",rel:"noopener noreferrer"},n.createElement("img",{src:"https://opencollective.com/react-native-elements/backers.svg?width=695"})))),n.createElement("div",{className:"col col--6"},n.createElement("div",{className:"backers-section text--center"},n.createElement("h3",null,"Sponsors"),n.createElement("p",{className:"p--desc "},"Become a sponsor and get your logo on our README on GitHub with a link to your site.",n.createElement("a",{href:"https://opencollective.com/react-native-elements#sponsor"},"Become a sponsor")),n.createElement("a",{href:"https://opencollective.com/react-native-elements#sponsors",target:"_blank",rel:"noopener noreferrer"},n.createElement("img",{src:"https://opencollective.com/react-native-elements/sponsors.svg"}))))))};var l=a(93868);const c=function(){var e=(0,s.Z)().siteConfig,t=void 0===e?{}:e;return n.createElement(r.Z,{title:t.title,description:t.tagline},n.createElement("div",{className:"margin-vert--lg"},n.createElement(l.Z,null),n.createElement(o,null)))}}}]);