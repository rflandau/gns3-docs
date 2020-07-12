(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{176:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(2),o=r(9),i=(r(0),r(211)),a={id:"general-faq",title:"General FAQ",sidebar_label:"General FAQ"},s={id:"troubleshooting-faq/general-faq",isDocsHomePage:!1,title:"General FAQ",description:"IOU",source:"@site/docs/troubleshooting-faq/general-faq.md",permalink:"/gns3-docs/docs/troubleshooting-faq/general-faq",editUrl:"https://github.com/mother/gns3-docs/blob/master/docs/troubleshooting-faq/general-faq.md",sidebar_label:"General FAQ",sidebar:"someSidebar",previous:{title:"Troubleshoot GNS3",permalink:"/gns3-docs/docs/troubleshooting-faq/troubleshoot-gns3"},next:{title:"Where do I get IOS images?",permalink:"/gns3-docs/docs/troubleshooting-faq/where-do-i-get-ios-images"}},c=[{value:"IOU",id:"iou",children:[{value:"What is iourc.txt?",id:"what-is-iourctxt",children:[]},{value:"What is iouyap?",id:"what-is-iouyap",children:[]}]},{value:"GNS3 VM",id:"gns3-vm",children:[{value:"What is the IOUVM?",id:"what-is-the-iouvm",children:[]},{value:"What is the GNS3 VM?",id:"what-is-the-gns3-vm",children:[]},{value:"Should I use the GNS3 VM?",id:"should-i-use-the-gns3-vm",children:[]}]}],l={rightToc:c};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"iou"},"IOU"),Object(i.b)("h3",{id:"what-is-iourctxt"},"What is iourc.txt?"),Object(i.b)("p",null,"It\u2019s your IOU licence file. This file is provided by Cisco you can\u2019t get it from other sources."),Object(i.b)("h3",{id:"what-is-iouyap"},"What is iouyap?"),Object(i.b)("p",null,"It\u2019s a program bridging your iou to the GNS3 network. It\u2019s removed in GNS3 2.0 and replace by ubridge."),Object(i.b)("h2",{id:"gns3-vm"},"GNS3 VM"),Object(i.b)("h3",{id:"what-is-the-iouvm"},"What is the IOUVM?"),Object(i.b)("p",null,"The IOUVM was the VM provided with GNS3 1.3 in order to run IOU devices. Starting with 1.4 it\u2019s replaced by the GNS3 VM."),Object(i.b)("h3",{id:"what-is-the-gns3-vm"},"What is the GNS3 VM?"),Object(i.b)("p",null,"The GNS3 VM is a requirement if you want to run Qemu based devices on Windows or Mac OS. It is a virtual machine that you import into VMware Workstation (recommended) or VirtualBox on your local PC when running a local version of the GNS3 VM. It can also be used in a distriubted environment where you run the client software (GNS3-all-in-one) on your local PC and the GNS3 VM on a Hypervisor such as ESXi or the cloud."),Object(i.b)("h3",{id:"should-i-use-the-gns3-vm"},"Should I use the GNS3 VM?"),Object(i.b)("p",null,"If all you are going to create are basic GNS3 topologies consisting of Cisco routers using an IOS image, than the GNS3 VM is not required. In this case you would only need the GNS3 all-in-one software which you install on your local PC. This is called legacy mode or Dynamips mode."),Object(i.b)("p",null,"If you want to run IOSv images, IOU images, ASAv or create complex network topologies, the GNS3 VM is recommended and is in some cases required."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Recommendation")," Use the GNS3 VM in most cases."))}u.isMDXComponent=!0},211:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return p}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(r),b=n,p=d["".concat(a,".").concat(b)]||d[b]||h[b]||i;return r?o.a.createElement(p,s(s({ref:t},l),{},{components:r})):o.a.createElement(p,s({ref:t},l))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);