"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7467],{3905:function(e,t,r){r.d(t,{Zo:function(){return h},kt:function(){return m}});var i=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,o=function(e,t){if(null==e)return{};var r,i,o={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=i.createContext({}),l=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},h=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),f=l(r),m=o,d=f["".concat(c,".").concat(m)]||f[m]||u[m]||n;return r?i.createElement(d,a(a({ref:t},h),{},{components:r})):i.createElement(d,a({ref:t},h))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,a=new Array(n);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<n;l++)a[l]=r[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3082:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return h},default:function(){return f}});var i=r(7462),o=r(3366),n=(r(7294),r(3905)),a=["components"],s={id:"face-recognition-similarity-threshold",title:"Face Recognition Similarity Threshold",sidebar_label:"Face Recognition Similarity Threshold"},c="Face Recognition Similarity Threshold",l={unversionedId:"face-recognition-similarity-threshold",id:"face-recognition-similarity-threshold",isDocsHomePage:!1,title:"Face Recognition Similarity Threshold",description:"The result of CompreFace face recognition and face verification services",source:"@site/docs/Face-Recognition-Similarity-Threshold.md",sourceDirName:".",slug:"/face-recognition-similarity-threshold",permalink:"/documents/docs/face-recognition-similarity-threshold",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Face-Recognition-Similarity-Threshold.md",tags:[],version:"current",frontMatter:{id:"face-recognition-similarity-threshold",title:"Face Recognition Similarity Threshold",sidebar_label:"Face Recognition Similarity Threshold"},sidebar:"someSidebar",previous:{title:"Rest API Description",permalink:"/documents/docs/rest-api-description"},next:{title:"Configuration",permalink:"/documents/docs/configuration"}},h=[{value:"How to choose the face similarity threshold",id:"how-to-choose-the-face-similarity-threshold",children:[],level:2}],u={toc:h};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,n.kt)("wrapper",(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"face-recognition-similarity-threshold"},"Face Recognition Similarity Threshold"),(0,n.kt)("p",null,"The result of CompreFace face recognition and face verification services\nis a similarity between faces. Even if you upload the faces of two\ndifferent people, you still receive the result, but the similarity is\nlow. Therefore, the user must determine for himself whether this is the\nsame person or not using similarity. The level of similarity the user\naccepts, as big enough, we call similarity threshold."),(0,n.kt)("h2",{id:"how-to-choose-the-face-similarity-threshold"},"How to choose the face similarity threshold"),(0,n.kt)("p",null,"No Face Recognition Service has 100% accuracy, so there always appear\nerrors in recognition. If a user chooses too low a threshold, then some\nunknown faces are recognized as known. If a user chooses too high a\nthreshold, then some known faces are recognized as unknown. CompreFace\ncalculates similarity so that most correct guesses have a threshold of\nmore than 0.5, and the most incorrect guesses have a threshold of less\nthan 0.5. Still, we recommend for high-security systems set the\nthreshold more than 0.5. This is the distribution of similarities for a\ncustom dataset of 50,000 faces for the FaceNet model (blue - is\nincorrect guesses, red is correct):"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/3736126/111870491-bb422380-898d-11eb-901d-0fad65eee69c.png",alt:null})))}f.isMDXComponent=!0}}]);