import{u as b,r as a,j as e}from"./index-kDbPb6MD.js";import{H as v}from"./Helmet-D8XED0p7.js";const B=()=>{const u=b(),[w,j]=a.useState(0),h=a.useRef(null);a.useEffect(()=>(document.body.classList.add("product-page"),document.body.style.overscrollBehavior="none",document.documentElement.style.overscrollBehavior="none",()=>{document.body.classList.remove("product-page"),document.body.style.overscrollBehavior="",document.documentElement.style.overscrollBehavior=""}),[]),a.useEffect(()=>{let i=!1;const r=()=>{const n=window.scrollY;j(n),i||(requestAnimationFrame(()=>{const t=h.current;t&&(t.style.transform="translate3d(0, 0, 0)",n>=window.innerHeight*.8?t.style.opacity="0":t.style.opacity="1");const s=document.querySelector(".hero-content-wrapper");if(s){const l=Math.min(n*.8,window.innerHeight*1.2);s.style.transform=`translate3d(0, -${l}px, 0)`}const m=document.querySelector(".content-section");if(m){const l=Math.min(n*.8,window.innerHeight);m.style.transform=`translate3d(0, -${l}px, 0)`}i=!1}),i=!0)};return window.addEventListener("scroll",r,{passive:!0}),()=>window.removeEventListener("scroll",r)},[]);const p=(i,r=2e3)=>{const[n,t]=a.useState(0),[s,m]=a.useState(!1),l=a.useRef(null);return a.useEffect(()=>{const d=new IntersectionObserver(([o])=>{o.isIntersecting&&!s&&m(!0)},{threshold:.1});return l.current&&d.observe(l.current),()=>{l.current&&d.unobserve(l.current)}},[s]),a.useEffect(()=>{if(s){let d=0;const o=i,f=o/(r/16),g=setInterval(()=>{d+=f,d>=o?(t(o),clearInterval(g)):t(Math.floor(d))},16);return()=>clearInterval(g)}},[s,i,r]),[n,l]},c=({number:i,suffix:r,label:n})=>{const[t,s]=p(i);return e.jsxs("div",{ref:s,className:"text-center",children:[e.jsxs("div",{className:"text-4xl md:text-5xl font-light text-white mb-2",children:[t,r]}),e.jsx("div",{className:"text-sm text-white/80 font-light",children:n})]})},x=()=>{window.scrollTo({top:window.innerHeight,behavior:"smooth"})};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
          /* Prevent over-scroll and control page height */
          html, body {
            overscroll-behavior: none;
            overflow-x: hidden;
          }

          /* Main page container with controlled height */
          .about-page-container {
            position: relative;
            z-index: 1;
            background: transparent;
            min-height: 100vh; /* Allow natural content height */
            overflow: visible; /* Allow content to be scrollable */
          }

          /* Hero section container */
          .hero-section {
            min-height: 100vh;
            max-height: 100vh;
            display: flex;
            flex-direction: column;
            position: relative;
            z-index: 2;
            background: transparent;
            overflow: visible; /* Allow content to move out */
          }

          /* Fixed background image that never moves */
          .parallax-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh; /* Back to normal viewport height */
            background-image: url('/assets/3.jpg');
            background-position: center center;
            background-repeat: no-repeat;
            background-size: cover;
            background-attachment: fixed;
            will-change: transform;
            z-index: 1;
          }

          /* Wrapper for hero content that moves on scroll */
          .hero-content-wrapper {
            position: relative;
            z-index: 10;
            height: 100vh;
            display: flex;
            flex-direction: column;
            will-change: transform;
          }

          /* Fixed header positioning */
          .fixed-header {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            z-index: 15;
            padding: 2rem 1.5rem;
          }

          /* Hero content centered properly */
          .hero-content {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 1.5rem;
            margin-top: 4rem;
          }

          /* Content section that acts as a shutter */
          .content-section {
            background: linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%);
            position: absolute;
            z-index: 20;
            width: 100%;
            min-height: 100vh; /* Return to normal height */
            top: 100vh; /* Start exactly at bottom of viewport */
            left: 0;
            margin-top: 0;
            padding-top: 2rem;
            padding-bottom: 2rem; /* Normal padding */
            will-change: transform;
            /* Add shadow to create depth */
            box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.1);
            /* Ensure complete coverage */
            border-top: 20px solid #f8fafc;
          }
          
          /* Simple background coverage for bottom */
          .content-section::before {
            content: '';
            position: absolute;
            top: -50px;
            left: 0;
            width: 100%;
            height: 50px;
            background: linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%);
            z-index: -1;
          }

          /* Ensure no layout shift */
          .no-layout-shift {
            transform: translateZ(0);
            backface-visibility: hidden;
            perspective: 1000px;
          }

          /* Fix logo positioning */
          .fixed-header img {
            filter: brightness(0) invert(1);
          }

          /* Ensure proper button styling */
          .back-button {
            background: rgba(0, 0, 0, 0.2);
            backdrop-filter: blur(4px);
            border: 1px solid rgba(255, 255, 255, 0.2);
          }
        `}),e.jsxs(v,{children:[e.jsx("title",{children:"About JLD Minerals - India's Leading Ceramic Raw Material Supplier & Exporter"}),e.jsx("meta",{name:"description",content:"JLD Minerals is India's largest ceramic raw material supplier and exporter of ball clay, potash feldspar, and custom ceramic inputs, with 30+ mines and clients across 25+ countries."}),e.jsx("link",{rel:"canonical",href:"https://jldminerals.com/about"})]}),e.jsxs("div",{className:"about-page-container",children:[e.jsxs("div",{className:"hero-section",children:[e.jsx("div",{className:"parallax-overlay no-layout-shift",ref:h}),e.jsxs("div",{className:"hero-content-wrapper",children:[e.jsx("div",{className:"fixed-header",children:e.jsxs("div",{className:"flex justify-between items-center max-w-7xl mx-auto",children:[e.jsx("img",{src:"/assets/jld-logo.png",alt:"JLD Minerals",className:"h-8 w-auto",loading:"lazy"}),e.jsxs("button",{onClick:()=>u("/#about"),className:"back-button text-white hover:text-jldRed transition-all duration-300 text-sm font-medium flex items-center gap-2 group px-4 py-2 rounded-full",children:[e.jsx("span",{className:"transform group-hover:-translate-x-1 transition-transform duration-300",children:"←"}),e.jsx("span",{children:"Back to Home"})]})]})}),e.jsx("div",{className:"hero-content",children:e.jsxs("div",{className:"text-center max-w-6xl mx-auto bg-black/25 rounded-3xl p-12 backdrop-blur-[2px] border border-white/30 no-layout-shift",children:[e.jsx("h1",{className:"text-6xl md:text-8xl font-light text-white mb-6 leading-none tracking-tight",children:"About Us"}),e.jsx("p",{className:"text-lg md:text-xl text-white font-light leading-relaxed max-w-4xl mx-auto mb-12",children:"JLD Minerals is a globally trusted ceramic raw material supplier based in India, serving the tile, sanitaryware, and tableware industries with precision-engineered materials for over 50 years. With a legacy spanning three generations, we bring deep expertise, scale, and innovation to every layer of the ceramic supply chain."}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-8 bg-white/15 rounded-2xl p-8 border border-white/30",children:[e.jsx(c,{number:30,suffix:"+",label:"Mining Assets"}),e.jsx(c,{number:25,suffix:"+",label:"Countries Served"}),e.jsx(c,{number:1500,suffix:"+",label:"Employees"}),e.jsx(c,{number:50,suffix:"+",label:"Years Experience"})]})]})}),e.jsx("div",{className:"md:hidden absolute bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer touch-manipulation flex flex-col items-center justify-center",onClick:x,onTouchStart:x,style:{left:"50%",transform:"translateX(-50%)",zIndex:20},children:e.jsxs("svg",{className:"text-white/70 hover:text-white transition-colors animate-bounce",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M7 13l3 3 3-3"}),e.jsx("path",{d:"M7 6l3 3 3-3"})]})}),e.jsx("div",{className:"hidden md:block absolute bottom-6 cursor-pointer touch-manipulation flex flex-col items-center justify-center",onClick:x,onTouchStart:x,style:{left:"calc(50% - 10px + 2px)",width:"20px",height:"20px",zIndex:20},children:e.jsxs("svg",{className:"text-white/70 hover:text-white transition-colors animate-bounce",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M7 13l3 3 3-3"}),e.jsx("path",{d:"M7 6l3 3 3-3"})]})})]})]}),e.jsxs("div",{className:"content-section",style:{paddingBottom:"5rem"},children:[e.jsx("div",{className:"container mx-auto px-6 py-16",children:e.jsxs("div",{className:"grid md:grid-cols-2 gap-12 max-w-7xl mx-auto",children:[e.jsxs("div",{className:"bg-gradient-to-br from-jldBlue to-jldBlue/90 rounded-3xl p-10 text-white",children:[e.jsx("h2",{className:"text-3xl md:text-4xl font-light mb-6 leading-tight",children:"Conglomerate"}),e.jsx("div",{className:"w-16 h-1 bg-jldRed mb-6"}),e.jsx("p",{className:"text-lg font-light opacity-90 mb-8 leading-relaxed",children:"JLD Minerals operates as part of a wider conglomerate with business interests across:"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx("div",{className:"w-2 h-2 rounded-full bg-jldRed"}),e.jsx("p",{className:"text-base font-light",children:"Electrical porcelain manufacturing"})]}),e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx("div",{className:"w-2 h-2 rounded-full bg-jldRed"}),e.jsx("p",{className:"text-base font-light",children:"Granite and quartzite mining"})]}),e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx("div",{className:"w-2 h-2 rounded-full bg-jldRed"}),e.jsx("p",{className:"text-base font-light",children:"Agricultural development"})]}),e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx("div",{className:"w-2 h-2 rounded-full bg-jldRed"}),e.jsx("p",{className:"text-base font-light",children:"High-purity quartz vertical supplying engineered stone industry"})]})]})]}),e.jsxs("div",{className:"bg-white rounded-3xl p-10 shadow-xl",children:[e.jsx("h2",{className:"text-3xl md:text-4xl font-light text-jldBlue mb-6 leading-tight",children:"Scale"}),e.jsx("div",{className:"w-16 h-1 bg-jldRed mb-6"}),e.jsx("p",{className:"text-lg text-gray-600 font-light mb-8 leading-relaxed",children:"Our scale and infrastructure enable global reach:"}),e.jsxs("div",{className:"grid grid-cols-2 gap-6 mb-8",children:[e.jsxs("div",{className:"text-center p-4 bg-gradient-to-br from-jldBlue/10 to-jldBlue/5 rounded-xl",children:[e.jsx("div",{className:"text-2xl font-light text-jldBlue mb-1",children:"30+"}),e.jsx("div",{className:"text-sm text-gray-600",children:"Mining Assets"})]}),e.jsxs("div",{className:"text-center p-4 bg-gradient-to-br from-jldRed/10 to-jldRed/5 rounded-xl",children:[e.jsx("div",{className:"text-2xl font-light text-jldRed mb-1",children:"25+"}),e.jsx("div",{className:"text-sm text-gray-600",children:"Countries"})]}),e.jsxs("div",{className:"text-center p-4 bg-gradient-to-br from-jldBlue/10 to-jldBlue/5 rounded-xl",children:[e.jsx("div",{className:"text-2xl font-light text-jldBlue mb-1",children:"1500+"}),e.jsx("div",{className:"text-sm text-gray-600",children:"Employees"})]}),e.jsxs("div",{className:"text-center p-4 bg-gradient-to-br from-jldRed/10 to-jldRed/5 rounded-xl",children:[e.jsx("div",{className:"text-2xl font-light text-jldRed mb-1",children:"50+"}),e.jsx("div",{className:"text-sm text-gray-600",children:"Years"})]})]}),e.jsx("p",{className:"text-gray-600 font-light leading-relaxed",children:"Multiple state-of-the-art processing plants across India, exporting to Asia, Middle East, Africa, and Europe."})]})]})}),e.jsx("div",{className:"container mx-auto px-6 py-16",children:e.jsxs("div",{className:"max-w-7xl mx-auto bg-gradient-to-r from-jldRed/10 via-white to-jldBlue/10 rounded-3xl p-12",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsxs("h2",{className:"text-4xl md:text-5xl font-light text-jldBlue mb-6 leading-tight",children:["Raw Material That Set ",e.jsx("span",{className:"text-jldRed",children:"Global Benchmark"})]}),e.jsx("div",{className:"w-24 h-1 bg-gradient-to-r from-jldBlue to-jldRed mx-auto mb-6"}),e.jsx("p",{className:"text-lg md:text-xl text-gray-600 font-light max-w-4xl mx-auto leading-relaxed",children:"Our mineral portfolio includes India's finest ceramic raw materials"})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[e.jsxs("div",{className:"p-8 bg-white rounded-2xl border border-jldBlue/20 shadow-lg hover:shadow-xl transition-shadow",children:[e.jsx("h3",{className:"text-xl font-medium text-jldBlue mb-4",children:"India's Largest Potash Feldspar Mine"}),e.jsx("p",{className:"text-gray-600 font-light leading-relaxed",children:"Globally recognized for purity and whiteness, setting industry standards for ceramic applications worldwide."})]}),e.jsxs("div",{className:"p-8 bg-white rounded-2xl border border-jldRed/20 shadow-lg hover:shadow-xl transition-shadow",children:[e.jsx("h3",{className:"text-xl font-medium text-jldRed mb-4",children:"Premium Ball Clay Reserves"}),e.jsx("p",{className:"text-gray-600 font-light leading-relaxed",children:"Some of the biggest and best ball clay reserves in the country, delivering unmatched plasticity and fired performance."})]})]})]})}),e.jsx("div",{className:"container mx-auto px-6 py-16",children:e.jsx("div",{className:"max-w-7xl mx-auto text-center",children:e.jsxs("div",{className:"bg-white rounded-3xl p-16 shadow-xl",children:[e.jsx("h2",{className:"text-4xl md:text-5xl font-light text-jldBlue mb-8 leading-tight",children:"Clean Design"}),e.jsx("div",{className:"w-32 h-1 bg-gradient-to-r from-jldBlue to-jldRed mx-auto mb-8"}),e.jsx("p",{className:"text-xl md:text-2xl text-gray-600 font-light max-w-4xl mx-auto leading-relaxed",children:"At JLD Minerals, we don't just extract and supply minerals — we create long-term value for the global ceramic industry through responsible mining, world-class technical support, and a partnership-first approach."})]})})}),e.jsx("div",{className:"container mx-auto px-6 py-16",children:e.jsxs("div",{className:"max-w-7xl mx-auto",children:[e.jsxs("div",{className:"text-center mb-16",children:[e.jsxs("h2",{className:"text-4xl md:text-5xl font-light text-jldBlue mb-6 leading-tight",children:["Technical Expertise ",e.jsx("span",{className:"text-jldRed",children:"Global"})]}),e.jsx("div",{className:"w-32 h-1 bg-gradient-to-r from-jldBlue to-jldRed mx-auto mb-6"}),e.jsx("p",{className:"text-lg md:text-xl text-gray-600 font-light max-w-4xl mx-auto leading-relaxed",children:"Our achievements speak to our commitment to excellence and innovation"})]}),e.jsxs("div",{className:"grid md:grid-cols-2 lg:grid-cols-4 gap-8",children:[e.jsxs("div",{className:"bg-white rounded-2xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow",children:[e.jsx("div",{className:"text-3xl font-light text-jldBlue mb-4",children:"ISO"}),e.jsx("div",{className:"text-lg font-medium text-gray-800 mb-2",children:"Certified Quality"}),e.jsx("p",{className:"text-gray-600 font-light",children:"International standards compliance across all operations"})]}),e.jsxs("div",{className:"bg-white rounded-2xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow",children:[e.jsx("div",{className:"text-3xl font-light text-jldRed mb-4",children:"R&D"}),e.jsx("div",{className:"text-lg font-medium text-gray-800 mb-2",children:"Innovation Labs"}),e.jsx("p",{className:"text-gray-600 font-light",children:"Cutting-edge research and development facilities"})]}),e.jsxs("div",{className:"bg-white rounded-2xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow",children:[e.jsx("div",{className:"text-3xl font-light text-jldBlue mb-4",children:"24/7"}),e.jsx("div",{className:"text-lg font-medium text-gray-800 mb-2",children:"Global Support"}),e.jsx("p",{className:"text-gray-600 font-light",children:"Round-the-clock technical assistance worldwide"})]}),e.jsxs("div",{className:"bg-white rounded-2xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow",children:[e.jsx("div",{className:"text-3xl font-light text-jldRed mb-4",children:"AI"}),e.jsx("div",{className:"text-lg font-medium text-gray-800 mb-2",children:"Smart Mining"}),e.jsx("p",{className:"text-gray-600 font-light",children:"AI-powered extraction and quality control systems"})]})]})]})}),e.jsx("div",{className:"container mx-auto px-6 py-16",children:e.jsxs("div",{className:"max-w-7xl mx-auto",children:[e.jsxs("div",{className:"text-center mb-16",children:[e.jsxs("h2",{className:"text-4xl md:text-5xl font-light text-jldBlue mb-6 leading-tight",children:["Our ",e.jsx("span",{className:"text-jldRed",children:"Journey"})]}),e.jsx("div",{className:"w-24 h-1 bg-gradient-to-r from-jldBlue to-jldRed mx-auto mb-6"}),e.jsx("p",{className:"text-lg md:text-xl text-gray-600 font-light max-w-4xl mx-auto leading-relaxed",children:"Five decades of growth, innovation, and global expansion"})]}),e.jsxs("div",{className:"space-y-12",children:[e.jsxs("div",{className:"flex flex-col md:flex-row items-center gap-8",children:[e.jsxs("div",{className:"md:w-1/3 text-center md:text-right",children:[e.jsx("div",{className:"text-3xl font-light text-jldBlue mb-2",children:"1970s"}),e.jsx("div",{className:"text-xl font-medium text-gray-800 mb-4",children:"Foundation"}),e.jsx("p",{className:"text-gray-600 font-light",children:"Started as a small mining operation with a vision for quality ceramic raw materials"})]}),e.jsx("div",{className:"md:w-1/3 flex justify-center",children:e.jsx("div",{className:"w-4 h-4 rounded-full bg-jldBlue"})}),e.jsx("div",{className:"md:w-1/3"})]}),e.jsxs("div",{className:"flex flex-col md:flex-row items-center gap-8",children:[e.jsx("div",{className:"md:w-1/3"}),e.jsx("div",{className:"md:w-1/3 flex justify-center",children:e.jsx("div",{className:"w-4 h-4 rounded-full bg-jldRed"})}),e.jsxs("div",{className:"md:w-1/3 text-center md:text-left",children:[e.jsx("div",{className:"text-3xl font-light text-jldRed mb-2",children:"1990s"}),e.jsx("div",{className:"text-xl font-medium text-gray-800 mb-4",children:"Expansion"}),e.jsx("p",{className:"text-gray-600 font-light",children:"Expanded operations across multiple states and began international exports"})]})]}),e.jsxs("div",{className:"flex flex-col md:flex-row items-center gap-8",children:[e.jsxs("div",{className:"md:w-1/3 text-center md:text-right",children:[e.jsx("div",{className:"text-3xl font-light text-jldBlue mb-2",children:"2010s"}),e.jsx("div",{className:"text-xl font-medium text-gray-800 mb-4",children:"Innovation"}),e.jsx("p",{className:"text-gray-600 font-light",children:"Introduced advanced processing technologies and sustainable mining practices"})]}),e.jsx("div",{className:"md:w-1/3 flex justify-center",children:e.jsx("div",{className:"w-4 h-4 rounded-full bg-jldBlue"})}),e.jsx("div",{className:"md:w-1/3"})]}),e.jsxs("div",{className:"flex flex-col md:flex-row items-center gap-8",children:[e.jsx("div",{className:"md:w-1/3"}),e.jsx("div",{className:"md:w-1/3 flex justify-center",children:e.jsx("div",{className:"w-4 h-4 rounded-full bg-jldRed"})}),e.jsxs("div",{className:"md:w-1/3 text-center md:text-left",children:[e.jsx("div",{className:"text-3xl font-light text-jldRed mb-2",children:"Today"}),e.jsx("div",{className:"text-xl font-medium text-gray-800 mb-4",children:"Global Leader"}),e.jsx("p",{className:"text-gray-600 font-light",children:"Leading ceramic raw material supplier serving 25+ countries with cutting-edge solutions"})]})]})]})]})}),e.jsx("div",{className:"container mx-auto px-6 py-16",children:e.jsxs("div",{className:"max-w-7xl mx-auto",children:[e.jsxs("div",{className:"text-center mb-16",children:[e.jsxs("h2",{className:"text-4xl md:text-5xl font-light text-jldBlue mb-6 leading-tight",children:["Leadership ",e.jsx("span",{className:"text-jldRed",children:"Team"})]}),e.jsx("div",{className:"w-24 h-1 bg-gradient-to-r from-jldBlue to-jldRed mx-auto mb-6"}),e.jsx("p",{className:"text-lg md:text-xl text-gray-600 font-light max-w-4xl mx-auto leading-relaxed",children:"Visionary leaders driving innovation and sustainable growth"})]}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-8",children:[e.jsxs("div",{className:"bg-white rounded-2xl p-8 shadow-xl text-center hover:shadow-2xl transition-shadow",children:[e.jsx("div",{className:"w-24 h-24 rounded-full bg-gradient-to-br from-jldBlue to-jldBlue/80 mx-auto mb-6 flex items-center justify-center",children:e.jsx("span",{className:"text-2xl font-light text-white",children:"JL"})}),e.jsx("h3",{className:"text-xl font-medium text-gray-800 mb-2",children:"Executive Leadership"}),e.jsx("p",{className:"text-jldBlue font-medium mb-4",children:"Strategic Vision"}),e.jsx("p",{className:"text-gray-600 font-light",children:"Guiding the company's strategic direction and global expansion initiatives"})]}),e.jsxs("div",{className:"bg-white rounded-2xl p-8 shadow-xl text-center hover:shadow-2xl transition-shadow",children:[e.jsx("div",{className:"w-24 h-24 rounded-full bg-gradient-to-br from-jldRed to-jldRed/80 mx-auto mb-6 flex items-center justify-center",children:e.jsx("span",{className:"text-2xl font-light text-white",children:"TD"})}),e.jsx("h3",{className:"text-xl font-medium text-gray-800 mb-2",children:"Technical Direction"}),e.jsx("p",{className:"text-jldRed font-medium mb-4",children:"Innovation Focus"}),e.jsx("p",{className:"text-gray-600 font-light",children:"Leading research and development of advanced ceramic material solutions"})]}),e.jsxs("div",{className:"bg-white rounded-2xl p-8 shadow-xl text-center hover:shadow-2xl transition-shadow",children:[e.jsx("div",{className:"w-24 h-24 rounded-full bg-gradient-to-br from-jldBlue to-jldBlue/80 mx-auto mb-6 flex items-center justify-center",children:e.jsx("span",{className:"text-2xl font-light text-white",children:"OM"})}),e.jsx("h3",{className:"text-xl font-medium text-gray-800 mb-2",children:"Operations Management"}),e.jsx("p",{className:"text-jldBlue font-medium mb-4",children:"Operational Excellence"}),e.jsx("p",{className:"text-gray-600 font-light",children:"Ensuring world-class quality and efficiency across all mining and processing operations"})]})]})]})}),e.jsx("div",{className:"bg-gradient-to-r from-jldBlue/5 to-jldRed/5 py-8 text-center border-t border-gray-200",children:e.jsx("p",{className:"text-gray-600 text-sm",children:"© JLD Minerals. All rights reserved."})})]})]})]})};export{B as default};
