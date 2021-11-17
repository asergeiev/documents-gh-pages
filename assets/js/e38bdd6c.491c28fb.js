"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9495],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(n),f=o,m=h["".concat(c,".").concat(f)]||h[f]||d[f]||r;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},54:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return h}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],s={id:"gathering-anonymous-statistics",title:"Gathering Anonymous Statistics",sidebar_label:"Gathering Anonymous Statistics"},c="Gathering Anonymous Statistics",l={unversionedId:"gathering-anonymous-statistics",id:"gathering-anonymous-statistics",isDocsHomePage:!1,title:"Gathering Anonymous Statistics",description:"To better understand which features we should add to the service and",source:"@site/docs/Gathering-anonymous-statistics.md",sourceDirName:".",slug:"/gathering-anonymous-statistics",permalink:"/documents/docs/gathering-anonymous-statistics",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Gathering-anonymous-statistics.md",tags:[],version:"current",frontMatter:{id:"gathering-anonymous-statistics",title:"Gathering Anonymous Statistics",sidebar_label:"Gathering Anonymous Statistics"},sidebar:"someSidebar",previous:{title:"Face Mask Detection Plugin",permalink:"/documents/docs/mask-detection-plugin"}},u=[{value:"What we collect:",id:"what-we-collect",children:[],level:4},{value:"What we do NOT collect:",id:"what-we-do-not-collect",children:[],level:4},{value:"Examples of saved data:",id:"examples-of-saved-data",children:[],level:4},{value:"How we use the data",id:"how-we-use-the-data",children:[],level:4}],d={toc:u};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"gathering-anonymous-statistics"},"Gathering Anonymous Statistics"),(0,r.kt)("p",null,"To better understand which features we should add to the service and\nimprove it further, we implemented functionality for gathering anonymous\nstatistics. This section aims to describe what exact information we\ncollect."),(0,r.kt)("p",null,'We respect the privacy of our users; this is why all statistics are\nstrictly anonymized before being sent to our servers. There is no\npossibility to de-anonymize received information. In short, we collect\ninformation about how many users, applications, services, and faces your\ninstallation has. During the first user sign-up, there is a sign "Agree\nto send anonymous statistics." By checking it, you agree with Exadel\nPrivacy Policy and agree to send anonymous statistics to our servers.'),(0,r.kt)("h4",{id:"what-we-collect"},"What we collect:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Event of user registration - we record only the fact of the creation\nof a new user. We do not gather any information about the user (like\nname, email password, etc.)."),(0,r.kt)("li",{parentName:"ul"},"Event of application creation - we record only the fact of the\ncreation of a new application. We do not gather any information\nabout the application(like name, which users have access to it,\netc.)."),(0,r.kt)("li",{parentName:"ul"},"Event of service creation - we record only the creation of a new\nservice and its type. We do not gather any information about the\nservice(like name, etc.)."),(0,r.kt)("li",{parentName:"ul"},"The number of saved faces in Face Recognition service Collection.\nEvery day we record how many faces are saved in Collection in\nranges: 1-10, 11-50, 51-200, 201-500, 501-2000, 2001-10000,\n10001-50000, 50001-200000, 200001-1000000, 1000001+. We do not\ngather any information about the faces(like face name, embedding,\netc.).")),(0,r.kt)("h4",{id:"what-we-do-not-collect"},"What we do NOT collect:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Any personal information of CompreFace users or the end-users"),(0,r.kt)("li",{parentName:"ul"},"Any names you use in CompreFace"),(0,r.kt)("li",{parentName:"ul"},"Any information about hardware, software, or location of the host\nmachine")),(0,r.kt)("p",null,"During the first start, we assign to the CompreFace installation the\n",(0,r.kt)("inlineCode",{parentName:"p"},"install_guid")," variable. This variable is random; there is no\npossibility to retrieve any information from it; the only purpose of\nthis variable is to understand that gathered statistics were sent from\none machine. We send it in every request to our server to understand\nthat this is the same installation as before."),(0,r.kt)("h4",{id:"examples-of-saved-data"},"Examples of saved data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"_createdAt:date","install_guid:string","action_name:string"\n"2021-03-15 09:16:31.676","560eee90-5fca-11eb-988b-0242ac120003","USER_CREATE"\n"2021-03-15 09:16:32.031","560eee90-5fca-11eb-988b-0242ac120003","APP_CREATE"\n"2021-03-15 09:16:32.291","560eee90-5fca-11eb-988b-0242ac120003","FACE_DETECTION_CREATE"\n"2021-03-15 09:16:32.607","560eee90-5fca-11eb-988b-0242ac120003","FACE_VERIFICATION_CREATE"\n"2021-03-15 09:16:32.998","560eee90-5fca-11eb-988b-0242ac120003","FACE_RECOGNITION_CREATE"\n"_createdAt:date","install_guid:string","collection_guid:string","faces_range:string"\n"2021-03-13 13:25:49.700","59638de4-5fca-11eb-848b-0242ac120002","a3d5dda8-b53a-4465-a44e-f1c3c81c7551","501-2000"\n"2021-03-13 13:25:49.840","59638de4-5fca-11eb-848b-0242ac120002","a4594ccc-198a-492e-8146-8bbf27972296","0"\n"2021-03-13 13:25:50.003","59638de4-5fca-11eb-848b-0242ac120002","39c1925d-a1a9-4d44-8eb3-6acf132b89f2","1-10"\n"2021-03-13 13:25:50.763","59638de4-5fca-11eb-848b-0242ac120002","794dd0ec-ac88-4552-90a8-f0bb0ddcee1e","201-500"\n')),(0,r.kt)("h4",{id:"how-we-use-the-data"},"How we use the data"),(0,r.kt)("p",null,'The data is used to understand the popularity of different services, how\nmany faces usually are saved to face collection and how many users use\nCompreFace on an ongoing basis. We do not provide this data to third\nparties in any case. However, we still can publish aggregated data in\nself-promotional goals, like "CompreFace has N active users" or\n"CompreFace is successfully used with face collections that stores more\nthan 1 million faces".'),(0,r.kt)("p",null,"If you have any questions about the privacy policy, what data we\ncollect, or how we use it, please ",(0,r.kt)("a",{parentName:"p",href:"mailto:compreface.support@exadel.com"},"get in touch with\nus")))}h.isMDXComponent=!0}}]);