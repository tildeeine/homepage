(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{5298:function(e,A,t){var a={"./ambient.jpg":772,"./block.jpg":3939,"./blockchain1 copy.jpg":4537,"./blockchain1.jpg":6822,"./frontphoto.png":9841,"./home.jpg":7436,"./whoami.jpg":5432};function n(e){return t(r(e))}function r(e){if(!t.o(a,e)){var A=Error("Cannot find module '"+e+"'");throw A.code="MODULE_NOT_FOUND",A}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=r,e.exports=n,n.id=5298},5807:function(e,A,t){Promise.resolve().then(t.bind(t,4421))},4421:function(e,A,t){"use strict";t.r(A),t.d(A,{default:function(){return b}});var a=t(7437),n=t(2265),r=()=>{let[e,A]=(0,n.useState)(!0),[t,r]=(0,n.useState)(!1),[i,s]=(0,n.useState)(0);(0,n.useEffect)(()=>{let e=()=>{let e=window.scrollY;if(e>i){if(t){A(!0),setTimeout(()=>{r(!1)},700);return}A(!1)}else A(!0);s(e)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[i,t]);let l=e=>{let A=document.getElementById(e);A&&(window.scrollTo({top:A.offsetTop,behavior:"smooth"}),r(!0))};return(0,a.jsx)("nav",{className:"fixed top-0 left-0 right-0 z-20 bg-background transition-transform duration-300 ".concat(e?"translate-y-0":"-translate-y-full"),children:(0,a.jsxs)("div",{className:"container mx-auto flex justify-between items-center py-4 text-lg",children:[(0,a.jsx)("p",{className:"text-primary hover:underline text-darkorange ml-2",onClick:()=>{window.scrollTo({top:0,behavior:"smooth"}),r(!0)},children:"Tilde Eriksen Eine"}),(0,a.jsx)("ul",{className:"flex text-darkblue",children:["Projects","About me","Contact"].map(e=>(0,a.jsx)("li",{className:"mr-6",children:(0,a.jsx)("a",{className:"text-primary hover:underline",onClick:()=>l(e.toLowerCase().replace(" ","-")),children:e})},e))})]})})},i=t(6648),s=t(9841),l=()=>(0,a.jsx)("section",{id:"home",className:"font-poppins mt-5 p-8 mx-auto",children:(0,a.jsxs)("div",{className:"flex flex-col lg:flex-row items-center justify-between w-4/5 mx-auto",children:[(0,a.jsx)("div",{className:"flex lg:hidden justify-center lg:justify-end mt-8 lg:mt-0 lg:w-1/3",children:(0,a.jsx)(i.default,{src:s.default,alt:"Tilde Eriksen Eine",className:"w-3/4 lg:w-full rounded-full"})}),(0,a.jsxs)("div",{className:"flex-1 lg:w-2/3 text-center lg:text-left",children:[(0,a.jsx)("h1",{className:"text-5xl lg:text-6xl mt-8 mb-4 text-darkorange",children:"Hello, I'm Tilde! "}),(0,a.jsxs)("p",{className:"text-sm lg:text-base mb-8 text-darkblue",children:["I'm a ",(0,a.jsx)("b",{children:"cybersecurity"})," student interested in ",(0,a.jsx)("b",{children:"pentesting"})," and ",(0,a.jsx)("b",{children:"software development"}),", currently in my fifth and last year of a M.Sc in Cybersecurity and Data Communication at NTNU."]}),(0,a.jsxs)("div",{className:"flex flex-wrap justify-center",children:[(0,a.jsx)("button",{className:"bg-transparent hover:bg-darkorange text-darkorange font-semibold hover:text-background py-2 px-4 border border-darkorange hover:border-transparent rounded mt-2 mx-2",children:(0,a.jsx)("a",{href:"https://github.com/tildeeine",target:"_blank",children:"GitHub"})}),(0,a.jsx)("button",{className:"bg-transparent hover:bg-darkorange text-darkorange font-semibold hover:text-background py-2 px-4 border border-darkorange hover:border-transparent rounded mt-2 :mx-2",children:(0,a.jsx)("a",{href:"https://github.com/tildeeine",target:"_blank",children:"Resume"})}),(0,a.jsx)("button",{className:"bg-transparent hover:bg-darkorange text-darkorange font-semibold hover:text-background py-2 px-4 border border-darkorange hover:border-transparent rounded mt-2 mx-2 lg:mr-10",children:(0,a.jsx)("a",{href:"https://www.linkedin.com/in/tildeeine/",target:"_blank",children:"LinkedIn"})})]})]}),(0,a.jsx)("div",{className:"hidden lg:flex justify-center lg:justify-end mt-8 lg:mt-0 lg:w-1/3",children:(0,a.jsx)(i.default,{src:s.default,alt:"Tilde Eriksen Eine",className:"w-3/4 lg:w-full rounded-full"})})]})}),o=t(2916),c=e=>{let{image:A,title:t,description:n,onReadMore:r,isImageLeft:s,isLargeScreen:l}=e;return(0,a.jsx)("div",{className:"flex flex-col md:flex-row ".concat(s?"md:flex-row":"md:flex-row-reverse"," w-full md:w-4/5 mx-auto mt-10"),onClick:r,children:(0,a.jsxs)("div",{className:"flex flex-col md:flex-row rounded-lg overflow-hidden w-full",children:[(s||!l)&&(0,a.jsx)("div",{className:"flex-none w-full md:w-48 h-48 relative",children:(0,a.jsx)(i.default,{src:A,alt:t,layout:"fill",objectFit:"cover",className:"rounded-l-lg"})}),(0,a.jsxs)("div",{className:"flex-1 p-4",children:[(0,a.jsx)("h2",{className:"text-lg md:text-xl text-darkblue font-semibold",children:t}),(0,a.jsx)("p",{className:"text-darkblue",children:n}),(0,a.jsx)("button",{onClick:r,className:"inline-block mt-4 px-3 py-2 border border-darkorange text-darkorange rounded hover:bg-darkorange hover:text-background transition-all",children:"More details"})]}),!s&&l&&(0,a.jsx)("div",{className:"flex-none w-full md:w-48 h-48 relative",children:(0,a.jsx)(i.default,{src:A,alt:t,layout:"fill",objectFit:"cover",className:"rounded-r-lg"})})]})})},d=e=>{let{project:A,isOpen:n,onClose:r}=e;return n?(0,a.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-30",onClick:()=>{r()},children:(0,a.jsxs)("div",{className:"modal-container bg-background p-5 rounded-lg w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 h-5/6 max-h-screen overflow-y-auto font-poppins flex flex-col md:flex-row",onClick:e=>{e.stopPropagation()},children:[(0,a.jsxs)("div",{className:"p-4 space-y-4 w-full md:w-2/3",children:[(0,a.jsxs)("div",{className:"flex justify-between items-start",children:[(0,a.jsx)("h2",{className:"text-3xl font-bold text-darkblue flex-grow",children:A.title}),(0,a.jsx)("div",{className:"text-darkblue rounded-full text-md ml-4 flex-shrink-0 mt-1",children:(0,a.jsx)("p",{children:A.time})})]}),(0,a.jsxs)("div",{className:"text-darkorange mb-4 flex items-center",children:[(0,a.jsx)("ul",{className:"flex flex-wrap",children:A.languages.map(e=>(0,a.jsx)("li",{className:"bg-mediumbeige rounded-full px-3 py-1 text-sm mr-2 mb-2",children:e},e))}),(0,a.jsx)("div",{className:"ml-auto text-background bg-darkorange rounded-full text-sm px-3 py-1",children:(0,a.jsx)("a",{href:"https://github.com/users/tildeeine/projects/1/views/5?pane=issue&itemId=62438984",children:"GitHub"})})]}),(0,a.jsx)("p",{className:"text-darkblue",children:A.description}),(0,a.jsx)("hr",{className:"my-4 border-darkblue"}),(0,a.jsxs)("div",{className:"text-darkblue",children:[(0,a.jsx)("h3",{className:"text-lg font-semibold",children:"Task"}),(0,a.jsx)("p",{children:A.task})]}),(0,a.jsxs)("div",{className:"text-darkblue",children:[(0,a.jsx)("h3",{className:"text-lg font-semibold",children:"Solution"}),(0,a.jsx)("p",{children:A.solution})]})]}),(0,a.jsx)("div",{className:"flex flex-col justify-between md:justify-start lg:justify-between lg:items-end w-full md:w-1/3",children:A.images.map((e,n)=>(0,a.jsx)("div",{className:"p-1 flex justify-center md:justify-end lg:justify-center md:mt-4 w-full",children:(0,a.jsx)(i.default,{src:t(5298)("./".concat(e)).default,alt:A.title,className:"object-cover lg:h-32 rounded-lg"})},n))})]})}):null},g=JSON.parse('[{"title":"Secure Blockchain Implementation","type":"technical","description":"Implementing and testing the IBFT protocol for a high-dependability blockchain implementation in Java","coverImage":"block.jpg","languages":["HTML","CSS","JavaScript"],"task":"Task description here","solution":"Solution description here","time":"Fall 2021","images":["blockchain1.jpg","blockchain2.jpg","blockchain2.jpg"]},{"title":"Ambient Home Security System","type":"technical","description":"Implementing and testing the IBFT protocol for a high-dependability blockchain implementation in Java","coverImage":"ambient.jpg","languages":["HTML","CSS","JavaScript"],"task":"Task description here","solution":"Solution description here","time":"Fall 2021","images":["blockchain1.jpg","blockchain1.jpg","blockchain1.jpg"]},{"title":"Homepage","type":"technical","description":"Implementing and testing the IBFT protocol for a high-dependability blockchain implementation in Java","coverImage":"home.jpg","languages":["HTML","CSS","JavaScript"],"task":"Task description here","solution":"Solution description here","time":"Fall 2021","images":["blockchain1.jpg","blockchain1.jpg","blockchain1.jpg"]},{"title":"Thru hike","type":"personal","description":"Implementing and testing the IBFT protocol for a high-dependability blockchain implementation in Java","coverImage":"home.jpg","languages":["HTML","CSS","JavaScript"],"task":"Task description here","solution":"Solution description here","time":"Fall 2021","images":["blockchain1.jpg","blockchain1.jpg","blockchain1.jpg"]},{"title":"Homepage","type":"personal","description":"Implementing and testing the IBFT protocol for a high-dependability blockchain implementation in Java","coverImage":"home.jpg","languages":["HTML","CSS","JavaScript"],"task":"Task description here","solution":"Solution description here","time":"Fall 2021","images":["blockchain1.jpg","blockchain1.jpg","blockchain1.jpg"]}]'),h=()=>{let[e,A]=(0,n.useState)(!1),[r,i]=(0,n.useState)(null),[s,l]=(0,n.useState)("technical"),h=!0,m=(0,o.ac)({query:"(min-width: 1024px)"}),x=g.filter(e=>e.type===s),u=e=>{i(e),A(!0)};return(0,a.jsxs)("section",{id:"projects",children:[(0,a.jsx)("div",{className:"mt-20 py-10 w-4/5 mx-auto",children:(0,a.jsx)("h1",{className:"text-4xl font-poppins text-darkorange text-left",children:"Projects"})}),(0,a.jsx)("div",{className:"flex flex-wrap justify-right w-4/5 mx-auto",children:(0,a.jsxs)("div",{children:[(0,a.jsx)("button",{onClick:()=>l("technical"),className:"border border-darkorange font-bold py-2 px-4 rounded-l-lg ".concat("technical"===s?"bg-darkorange text-background":"bg-background text-darkorange hover:bg-darkorange hover:text-background"),children:"Technical"}),(0,a.jsx)("button",{onClick:()=>l("personal"),className:"border border-darkorange font-bold py-2 px-4 rounded-r-lg ".concat("personal"===s?"bg-darkorange text-background":"bg-background text-darkorange hover:bg-darkorange hover:text-background"),children:"Personal"})]})}),(0,a.jsxs)("div",{className:"flex flex-wrap justify-center",children:[x.map(e=>{let A=(0,a.jsx)(c,{image:t(5298)("./".concat(e.coverImage)).default,title:e.title,description:e.description,onReadMore:()=>u(e),isImageLeft:h,isLargeScreen:m});return h=!h,A}),r&&(0,a.jsx)(d,{project:r,isOpen:e,onClose:()=>A(!1)})]})]})},m=t(5432),x=()=>(0,a.jsxs)("section",{id:"about-me",children:[(0,a.jsx)("div",{className:"flex justify-center mt-40 text-4xl font-poppins font-semibold text-darkorange",children:(0,a.jsx)("h2",{children:"Who am I?"})}),(0,a.jsx)("div",{className:"flex justify-center",children:(0,a.jsx)(i.default,{src:m.default,alt:"Tilde Eriksen Eine",className:"mt-3 w-4/5 rounded-3xl"})}),(0,a.jsx)("div",{className:"flex justify-center items-center mt-10",children:(0,a.jsxs)("div",{className:"w-4/5 text-center text-lg font-poppins text-darkblue",children:[(0,a.jsx)("div",{className:"mb-6",children:(0,a.jsx)("p",{children:"Hey there! I&aposm currently wrapping up my fifth and final year in Cybersecurity and Data Communications at NTNU. I&aposm all about diving deep into software development and cybersecurity, with a real knack for tackling problems from all angles. I&aposve already spent some time at Visma developing software, and I&aposm lined up for a cool pentesting gig at Mnemonic this summer."})}),(0,a.jsx)("div",{className:"mb-6",children:(0,a.jsx)("p",{children:"I&aposm 23 and originally hail from Norway, but I&aposve also spent a year studying in Lisbon, Portugal at IST, which was an awesome twist in my usual routine. Besides hitting the books and coding, I teach a couple of courses at NTNU, helping other students get the hang of security and digital economics."})}),(0,a.jsx)("div",{className:"mb-6",children:(0,a.jsx)("p",{children:"When I&aposm not geeking out over cybersecurity challenges or helping students out, you can find me out hiking or maybe even at a martial arts class. I love staying active and keeping my brain and body sharp. Also, I&aposm pretty keen on joining CTF competitions now and then—it&aposs a fun way to test my skills in a team setting."})}),(0,a.jsx)("div",{children:(0,a.jsx)("p",{children:"I&aposm looking forward to landing somewhere I can throw in my lot with a team that&aposs as down-to-earth as they are dedicated. Let&aposs make something great together!"})})]})})]}),u=()=>{let[e,A]=(0,n.useState)(!1),t=async()=>{try{await navigator.clipboard.writeText("tilde.eine@gmail.com"),A(!0),setTimeout(()=>A(!1),2e3)}catch(e){console.error("Failed to copy: ",e)}};return(0,a.jsx)("section",{id:"contact",className:"w-full mt-30",children:(0,a.jsxs)("div",{className:"w-4/5 mx-auto",children:[(0,a.jsxs)("div",{className:"mt-40 w-4/5",children:[(0,a.jsx)("p",{className:"text-4xl font-poppins text-darkorange text-left",children:"Have an opportunity, some feedback, or an interesting idea to share?"}),(0,a.jsx)("p",{className:"text-4xl mt-2 font-poppins text-darkorange text-left",children:"Get in touch!"})]}),(0,a.jsxs)("div",{className:"flex flex-wrap items-start font-poppins mt-5",children:[(0,a.jsx)("button",{className:"bg-transparent hover:bg-darkorange text-darkorange font-semibold hover:text-background py-2 px-4 border border-darkorange hover:border-transparent rounded mt-3 mr-4 text-left",children:(0,a.jsx)("a",{href:"https://www.linkedin.com/in/tildeeine/",target:"_blank",rel:"noopener noreferrer",children:"LinkedIn"})}),(0,a.jsx)("button",{className:"bg-transparent hover:bg-darkorange text-darkorange font-semibold hover:text-background py-2 px-4 border border-darkorange hover:border-transparent rounded mr-4 mt-3 text-left",children:(0,a.jsx)("a",{href:"https://github.com/tildeeine",target:"_blank",rel:"noopener noreferrer",children:"GitHub"})}),(0,a.jsx)("button",{className:"bg-transparent hover:bg-darkorange text-darkorange font-semibold hover:text-background py-2 px-4 border border-darkorange hover:border-transparent rounded mr-4 mt-3 text-left",onClick:t,children:e?(0,a.jsx)("span",{children:"Copied to clipboard!"}):"Email"})]})]})})},p=()=>(0,a.jsxs)("footer",{className:"w-4/5 mx-auto mt-20 text-right text-sm",children:[(0,a.jsx)("p",{className:"text-darkblue font-poppins",children:"Created with Next.js and tailwindcss."}),(0,a.jsx)("p",{className:"text-darkblue font-poppins",children:"\xa9 2024 Tilde Eriksen Eine. All rights reserved."})]}),b=()=>(0,a.jsxs)("main",{className:"flex min-h-screen flex-col p-24 bg-background",children:[(0,a.jsx)(r,{}),(0,a.jsx)(l,{}),(0,a.jsx)(h,{}),(0,a.jsx)(x,{}),(0,a.jsx)(u,{}),(0,a.jsx)(p,{})]})},772:function(e,A,t){"use strict";t.r(A),A.default={src:"/_next/static/media/ambient.cef429fd.jpg",height:2584,width:4592,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAIoKH//EAB4QAAEDBAMAAAAAAAAAAAAAAAIBAwQABRESIjFC/9oACAEBAAE/AFuZOQwjkyHAEDf1geq//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFhEAAwAAAAAAAAAAAAAAAAAAAAFB/9oACAEDAQE/AKz/2Q==",blurWidth:8,blurHeight:5}},3939:function(e,A,t){"use strict";t.r(A),A.default={src:"/_next/static/media/block.10225485.jpg",height:4469,width:6172,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAAmgH/xAAdEAABAgcAAAAAAAAAAAAAAAACABEBAwQSITFR/9oACAEBAAE/ADhJGnE2O9+42v/EABgRAQEAAwAAAAAAAAAAAAAAAAECABFC/9oACAECAQE/AIpR29Of/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAECIXH/2gAIAQMBAT8AklWI/9k=",blurWidth:8,blurHeight:6}},4537:function(e,A,t){"use strict";t.r(A),A.default={src:"/_next/static/media/blockchain1 copy.c9044fce.jpg",height:3319,width:4979,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAqQf/xAAaEAEAAQUAAAAAAAAAAAAAAAACAQADBAWS/9oACAEBAAE/ABoJutlZk8V//8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAR/9oACAECAQE/AAMv/8QAFhEAAwAAAAAAAAAAAAAAAAAAAAIx/9oACAEDAQE/AGp//9k=",blurWidth:8,blurHeight:5}},6822:function(e,A,t){"use strict";t.r(A),A.default={src:"/_next/static/media/blockchain1.c9044fce.jpg",height:3319,width:4979,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAqQf/xAAaEAEAAQUAAAAAAAAAAAAAAAACAQADBAWS/9oACAEBAAE/ABoJutlZk8V//8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAR/9oACAECAQE/AAMv/8QAFhEAAwAAAAAAAAAAAAAAAAAAAAIx/9oACAEDAQE/AGp//9k=",blurWidth:8,blurHeight:5}},9841:function(e,A,t){"use strict";t.r(A),A.default={src:"/_next/static/media/frontphoto.8bed05a8.png",height:1085,width:980,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAIAAAC6ZnJRAAAAu0lEQVR42gGwAE//ANTV2s/S18nQ1qayu32GkXVuaHpwaADT1tzS197HxcaXd3GTk5iJkJmOjY8AwczawM/btKCgoV5SclNUtcTTydThAJ2krqKutLSRia54cXxJRJCYnqa0vQB4j6CNh4aRZVC6h39xQDtVSEGUk5gAmZCLqJOJeGJXhW5lW0M+ZlRMe2tmAKeVi6OLgZF9c6ORhod0aZyHe3xkWQCvm5GdgneQc2eiiHuZgHShhHhwVk0Hu16F2caLywAAAABJRU5ErkJggg==",blurWidth:7,blurHeight:8}},7436:function(e,A,t){"use strict";t.r(A),A.default={src:"/_next/static/media/home.0d6ff2a8.jpg",height:3648,width:5472,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAwT/2gAMAwEAAhADEAAAAIYOf//EABoQAAIDAQEAAAAAAAAAAAAAAAEDAgQFABP/2gAIAQEAAT8AtaFhmk6kV1prXMwBar0Pf//EABoRAAICAwAAAAAAAAAAAAAAAAECABESIUH/2gAIAQIBAT8AyKqlVtRyf//EABkRAAMAAwAAAAAAAAAAAAAAAAECAwARIf/aAAgBAwEBPwC9aTfSsQO5/9k=",blurWidth:8,blurHeight:5}},5432:function(e,A,t){"use strict";t.r(A),A.default={src:"/_next/static/media/whoami.f29db64d.jpg",height:1730,width:3460,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABQEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAAAigr/xAAbEAABBAMAAAAAAAAAAAAAAAACAQMEBQAhgf/aAAgBAQABPwCVb2bbSoMx3QgSdz//xAAYEQACAwAAAAAAAAAAAAAAAAABAgAykf/aAAgBAgEBPwAogNFyf//EABkRAAEFAAAAAAAAAAAAAAAAAAABAhIhIv/aAAgBAwEBPwCbq0p//9k=",blurWidth:8,blurHeight:4}}},function(e){e.O(0,[295,971,23,744],function(){return e(e.s=5807)}),_N_E=e.O()}]);