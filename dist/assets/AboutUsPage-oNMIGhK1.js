import{u as b,r as d,j as e}from"./index-DhbHfM9Q.js";import{H as v}from"./Helmet-DFRBoYSP.js";import{u as N}from"./useHideScrollbar-D-iCqPLu.js";const B=()=>{const j=b(),u=d.useRef(null),o=d.useRef(null);N(),d.useEffect(()=>(document.body.classList.add("product-page"),()=>{document.body.classList.remove("product-page")}),[]),d.useEffect(()=>{let a=!1,l=0,n=!1;const c=()=>{if(u.current&&o.current){const s=o.current.scrollTop,t=u.current,i=.5;t.style.transform=`translate3d(0, ${s*i}px, 0)`,t.style.opacity="1",t.style.visibility="visible";const m=window.innerHeight;s<m*.5?(l=0,n=!1):(l=1,n=s>m)}},r=s=>{if(a)return;const t=o.current;if(!t)return;const i=s.deltaY>0?1:-1,m=window.innerHeight,g=t.scrollTop;if(l===0&&i>0)s.preventDefault(),a=!0,l=1,t.scrollTo({top:m,behavior:"smooth"}),setTimeout(()=>{a=!1,n=!0},800);else if(l===1&&i<0&&g<=m+50)s.preventDefault(),a=!0,l=0,n=!1,t.scrollTo({top:0,behavior:"smooth"}),setTimeout(()=>{a=!1},800);else if(l===1&&n)return},x=o.current;if(x)return x.addEventListener("scroll",c),x.addEventListener("wheel",r,{passive:!1}),()=>{x.removeEventListener("scroll",c),x.removeEventListener("wheel",r)}},[]);const f=(a,l=2e3)=>{const[n,c]=d.useState(0),[r,x]=d.useState(!1),s=d.useRef(null);return d.useEffect(()=>{const t=new IntersectionObserver(([i])=>{i.isIntersecting&&!r&&x(!0)},{threshold:.1});return s.current&&t.observe(s.current),()=>{s.current&&t.unobserve(s.current)}},[r]),d.useEffect(()=>{if(r){let t=0;const i=a,m=i/(l/16),g=setInterval(()=>{t+=m,t>=i?(c(i),clearInterval(g)):c(Math.floor(t))},16);return()=>clearInterval(g)}},[r,a,l]),[n,s]},h=({number:a,suffix:l,label:n})=>{const[c,r]=f(a);return e.jsxs("div",{ref:r,className:"text-center",children:[e.jsxs("div",{className:"text-4xl md:text-5xl font-light text-white mb-2",children:[c,l]}),e.jsx("div",{className:"text-sm text-white/80 font-light",children:n})]})},p=()=>{document.getElementById("content-section")&&o.current&&o.current.scrollTo({top:window.innerHeight,behavior:"smooth"})};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
          /* Hide scrollbars globally */
          * {
            scrollbar-width: none;
            -ms-overflow-style: none;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          *::-webkit-scrollbar {
            display: none;
          }

          /* Ensure body and html fill viewport */
          html, body {
            margin: 0;
            padding: 0;
            height: 100%;
            overflow: hidden;
            background: linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%);
          }

          /* JavaScript-based Parallax Container */
          .parallax-container {
            height: 100vh;
            width: 100vw;
            overflow-x: hidden;
            overflow-y: auto;
            position: fixed;
            top: 0;
            left: 0;
            scrollbar-width: none;
            -ms-overflow-style: none;
            background: linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%);
            scroll-behavior: smooth;
          }
          
          .parallax-container::-webkit-scrollbar {
            display: none;
          }
          
          .parallax-background {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background-image: url('/assets/3.jpg');
            background-position: center center;
            background-repeat: no-repeat;
            background-size: cover;
            will-change: transform;
            z-index: 0;
            transition: opacity 0.3s ease;
            opacity: 1;
          }
          
          .parallax-section {
            position: relative;
            z-index: 1;
            margin: 0;
            padding: 0;
          }
          
          .hero-section {
            background: transparent;
            position: relative;
            z-index: 2;
            height: 100vh;
            width: 100%;
            margin: 0;
            padding: 0;
          }
          
          .content-section {
            position: relative;
            z-index: 3;
            background: linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%);
            width: 100%;
            margin: 0;
            padding: 0;
            min-height: 200vh;
          }
          
          .content-section-inner {
            position: relative;
            z-index: 4;
            background: linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%);
            width: 100%;
            padding: 0;
            margin: 0;
            min-height: 100%;
          }

          /* Remove any default margins from containers */
          .container {
            margin-left: auto;
            margin-right: auto;
            width: 100%;
            max-width: none;
          }

          /* Copyright section */
          .copyright-section {
            background: linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%);
            padding: 1.5rem 0;
            text-align: center;
            position: relative;
            z-index: 4;
            border-top: 1px solid rgba(0, 0, 0, 0.05);
            margin: 0;
            width: 100%;
          }
        `}),e.jsxs(v,{children:[e.jsx("title",{children:"About JLD Minerals - India's Leading Ceramic Raw Material Supplier & Exporter"}),e.jsx("meta",{name:"description",content:"JLD Minerals is India's largest ceramic raw material supplier and exporter of ball clay, potash feldspar, and custom ceramic inputs, with 30+ mines and clients across 25+ countries."}),e.jsx("link",{rel:"canonical",href:"https://jldminerals.com/about"})]}),e.jsxs("div",{className:"parallax-container",ref:o,children:[e.jsx("div",{className:"parallax-background",ref:u}),e.jsx("div",{className:"parallax-section hero-section",children:e.jsxs("div",{className:"px-6 py-8 relative z-10 h-full max-w-7xl mx-auto",children:[e.jsxs("div",{className:"flex justify-between items-center mb-8",children:[e.jsx("img",{src:"/assets/jld-logo.png",alt:"JLD Minerals",className:"h-8 w-auto",loading:"lazy"}),e.jsxs("button",{onClick:()=>j("/#about"),className:"text-jldBlue hover:text-jldRed transition-all duration-300 text-sm font-medium flex items-center gap-2 group",children:[e.jsx("span",{className:"transform group-hover:-translate-x-1 transition-transform duration-300",children:"←"}),e.jsx("span",{children:"Back to Home"})]})]}),e.jsx("div",{className:"h-full flex items-center justify-center -mt-16",children:e.jsxs("div",{className:"text-center max-w-6xl mx-auto bg-black/25 rounded-3xl p-12 backdrop-blur-[2px] border border-white/30",children:[e.jsx("h1",{className:"text-6xl md:text-8xl font-light text-white mb-6 leading-none tracking-tight",children:"About Us"}),e.jsx("p",{className:"text-lg md:text-xl text-white font-light leading-relaxed max-w-4xl mx-auto mb-12",children:"JLD Minerals is a globally trusted ceramic raw material supplier based in India, serving the tile, sanitaryware, and tableware industries with precision-engineered materials for over 50 years. With a legacy spanning three generations, we bring deep expertise, scale, and innovation to every layer of the ceramic supply chain."}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-8 bg-white/15 rounded-2xl p-8 border border-white/30",children:[e.jsx(h,{number:30,suffix:"+",label:"Mining Assets"}),e.jsx(h,{number:25,suffix:"+",label:"Countries Served"}),e.jsx(h,{number:1500,suffix:"+",label:"Employees"}),e.jsx(h,{number:50,suffix:"+",label:"Years Experience"})]})]})}),e.jsx("div",{className:"absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20",children:e.jsx("div",{className:"flex flex-col items-center cursor-pointer group",onClick:p,children:e.jsx("div",{className:"bg-jldBlue backdrop-blur-md rounded-full p-3 border border-jldBlue group-hover:bg-jldRed transition-all duration-300",children:e.jsx("svg",{className:"w-5 h-5 text-white animate-bounce",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 14l-7 7m0 0l-7-7m7 7V3"})})})})})]})}),e.jsx("div",{id:"content-section",className:"parallax-section content-section",children:e.jsxs("div",{className:"content-section-inner",style:{background:"linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%)",minHeight:"100vh",position:"relative",zIndex:2,margin:0,padding:0},children:[e.jsx("div",{className:"flex-grow",style:{margin:0,padding:0},children:e.jsx("div",{className:"container mx-auto px-6 py-16",children:e.jsxs("div",{className:"grid md:grid-cols-2 gap-12 max-w-7xl mx-auto",children:[e.jsxs("div",{className:"bg-gradient-to-br from-jldBlue to-jldBlue/90 rounded-3xl p-10 text-white",children:[e.jsx("h2",{className:"text-3xl md:text-4xl font-light mb-6 leading-tight",children:"Conglomerate"}),e.jsx("div",{className:"w-16 h-1 bg-jldRed mb-6"}),e.jsx("p",{className:"text-lg font-light opacity-90 mb-8 leading-relaxed",children:"JLD Minerals operates as part of a wider conglomerate with business interests across:"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx("div",{className:"w-2 h-2 rounded-full bg-jldRed"}),e.jsx("p",{className:"text-base font-light",children:"Electrical porcelain manufacturing"})]}),e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx("div",{className:"w-2 h-2 rounded-full bg-jldRed"}),e.jsx("p",{className:"text-base font-light",children:"Granite and quartzite mining"})]}),e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx("div",{className:"w-2 h-2 rounded-full bg-jldRed"}),e.jsx("p",{className:"text-base font-light",children:"Agricultural development"})]}),e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx("div",{className:"w-2 h-2 rounded-full bg-jldRed"}),e.jsx("p",{className:"text-base font-light",children:"High-purity quartz vertical supplying engineered stone industry"})]})]})]}),e.jsxs("div",{className:"bg-white rounded-3xl p-10 shadow-xl",children:[e.jsx("h2",{className:"text-3xl md:text-4xl font-light text-jldBlue mb-6 leading-tight",children:"Scale"}),e.jsx("div",{className:"w-16 h-1 bg-jldRed mb-6"}),e.jsx("p",{className:"text-lg text-gray-600 font-light mb-8 leading-relaxed",children:"Our scale and infrastructure enable global reach:"}),e.jsxs("div",{className:"grid grid-cols-2 gap-6 mb-8",children:[e.jsxs("div",{className:"text-center p-4 bg-gradient-to-br from-jldBlue/10 to-jldBlue/5 rounded-xl",children:[e.jsx("div",{className:"text-2xl font-light text-jldBlue mb-1",children:"30+"}),e.jsx("div",{className:"text-sm text-gray-600",children:"Mining Assets"})]}),e.jsxs("div",{className:"text-center p-4 bg-gradient-to-br from-jldRed/10 to-jldRed/5 rounded-xl",children:[e.jsx("div",{className:"text-2xl font-light text-jldRed mb-1",children:"25+"}),e.jsx("div",{className:"text-sm text-gray-600",children:"Countries"})]}),e.jsxs("div",{className:"text-center p-4 bg-gradient-to-br from-jldBlue/10 to-jldBlue/5 rounded-xl",children:[e.jsx("div",{className:"text-2xl font-light text-jldBlue mb-1",children:"1500+"}),e.jsx("div",{className:"text-sm text-gray-600",children:"Employees"})]}),e.jsxs("div",{className:"text-center p-4 bg-gradient-to-br from-jldRed/10 to-jldRed/5 rounded-xl",children:[e.jsx("div",{className:"text-2xl font-light text-jldRed mb-1",children:"50+"}),e.jsx("div",{className:"text-sm text-gray-600",children:"Years"})]})]}),e.jsx("p",{className:"text-gray-600 font-light leading-relaxed",children:"Multiple state-of-the-art processing plants across India, exporting to Asia, Middle East, Africa, and Europe."})]})]})})}),e.jsx("div",{className:"container mx-auto px-6 py-16",children:e.jsxs("div",{className:"max-w-7xl mx-auto bg-gradient-to-r from-jldRed/10 via-white to-jldBlue/10 rounded-3xl p-12",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsxs("h2",{className:"text-4xl md:text-5xl font-light text-jldBlue mb-6 leading-tight",children:["Raw Material That Set ",e.jsx("span",{className:"text-jldRed",children:"Global Benchmark"})]}),e.jsx("div",{className:"w-24 h-1 bg-gradient-to-r from-jldBlue to-jldRed mx-auto mb-6"}),e.jsx("p",{className:"text-lg md:text-xl text-gray-600 font-light max-w-4xl mx-auto leading-relaxed",children:"Our mineral portfolio includes India's finest ceramic raw materials"})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-8",children:[e.jsxs("div",{className:"p-8 bg-white rounded-2xl border border-jldBlue/20 shadow-lg hover:shadow-xl transition-shadow",children:[e.jsx("h3",{className:"text-xl font-medium text-jldBlue mb-4",children:"India's Largest Potash Feldspar Mine"}),e.jsx("p",{className:"text-gray-600 font-light leading-relaxed",children:"Globally recognized for purity and whiteness, setting industry standards for ceramic applications worldwide."})]}),e.jsxs("div",{className:"p-8 bg-white rounded-2xl border border-jldRed/20 shadow-lg hover:shadow-xl transition-shadow",children:[e.jsx("h3",{className:"text-xl font-medium text-jldRed mb-4",children:"Premium Ball Clay Reserves"}),e.jsx("p",{className:"text-gray-600 font-light leading-relaxed",children:"Some of the biggest and best ball clay reserves in the country, delivering unmatched plasticity and fired performance."})]})]})]})}),e.jsx("div",{className:"container mx-auto px-6 py-16",children:e.jsx("div",{className:"max-w-7xl mx-auto text-center",children:e.jsxs("div",{className:"bg-white rounded-3xl p-16 shadow-xl",children:[e.jsx("h2",{className:"text-4xl md:text-5xl font-light text-jldBlue mb-8 leading-tight",children:"Clean Design"}),e.jsx("div",{className:"w-32 h-1 bg-gradient-to-r from-jldBlue to-jldRed mx-auto mb-8"}),e.jsx("p",{className:"text-xl md:text-2xl text-gray-600 font-light max-w-4xl mx-auto leading-relaxed",children:"At JLD Minerals, we don't just extract and supply minerals — we create long-term value for the global ceramic industry through responsible mining, world-class technical support, and a partnership-first approach."})]})})}),e.jsx("div",{className:"container mx-auto px-6 py-16",children:e.jsxs("div",{className:"max-w-7xl mx-auto",children:[e.jsxs("div",{className:"text-center mb-16",children:[e.jsxs("h2",{className:"text-4xl md:text-5xl font-light text-jldBlue mb-6 leading-tight",children:["Technical Expertise ",e.jsx("span",{className:"text-jldRed",children:"Global"})]}),e.jsx("div",{className:"w-32 h-1 bg-gradient-to-r from-jldBlue to-jldRed mx-auto mb-6"}),e.jsx("p",{className:"text-lg md:text-xl text-gray-600 font-light max-w-4xl mx-auto leading-relaxed",children:"Our achievements speak to our commitment to excellence and innovation"})]}),e.jsxs("div",{className:"grid md:grid-cols-2 lg:grid-cols-4 gap-8",children:[e.jsxs("div",{className:"bg-white rounded-2xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow",children:[e.jsx("div",{className:"text-3xl font-light text-jldBlue mb-4",children:"ISO"}),e.jsx("div",{className:"text-lg font-medium text-gray-800 mb-2",children:"Certified Quality"}),e.jsx("p",{className:"text-gray-600 font-light",children:"International standards compliance across all operations"})]}),e.jsxs("div",{className:"bg-white rounded-2xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow",children:[e.jsx("div",{className:"text-3xl font-light text-jldRed mb-4",children:"R&D"}),e.jsx("div",{className:"text-lg font-medium text-gray-800 mb-2",children:"Innovation Labs"}),e.jsx("p",{className:"text-gray-600 font-light",children:"Cutting-edge research and development facilities"})]}),e.jsxs("div",{className:"bg-white rounded-2xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow",children:[e.jsx("div",{className:"text-3xl font-light text-jldBlue mb-4",children:"24/7"}),e.jsx("div",{className:"text-lg font-medium text-gray-800 mb-2",children:"Global Support"}),e.jsx("p",{className:"text-gray-600 font-light",children:"Round-the-clock technical assistance worldwide"})]}),e.jsxs("div",{className:"bg-white rounded-2xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow",children:[e.jsx("div",{className:"text-3xl font-light text-jldRed mb-4",children:"AI"}),e.jsx("div",{className:"text-lg font-medium text-gray-800 mb-2",children:"Smart Mining"}),e.jsx("p",{className:"text-gray-600 font-light",children:"AI-powered extraction and quality control systems"})]})]})]})}),e.jsx("div",{className:"container mx-auto px-6 py-16",children:e.jsxs("div",{className:"max-w-7xl mx-auto",children:[e.jsxs("div",{className:"text-center mb-16",children:[e.jsxs("h2",{className:"text-4xl md:text-5xl font-light text-jldBlue mb-6 leading-tight",children:["Our ",e.jsx("span",{className:"text-jldRed",children:"Journey"})]}),e.jsx("div",{className:"w-24 h-1 bg-gradient-to-r from-jldBlue to-jldRed mx-auto mb-6"}),e.jsx("p",{className:"text-lg md:text-xl text-gray-600 font-light max-w-4xl mx-auto leading-relaxed",children:"Five decades of growth, innovation, and global expansion"})]}),e.jsxs("div",{className:"space-y-12",children:[e.jsxs("div",{className:"flex flex-col md:flex-row items-center gap-8",children:[e.jsxs("div",{className:"md:w-1/3 text-center md:text-right",children:[e.jsx("div",{className:"text-3xl font-light text-jldBlue mb-2",children:"1970s"}),e.jsx("div",{className:"text-xl font-medium text-gray-800 mb-4",children:"Foundation"}),e.jsx("p",{className:"text-gray-600 font-light",children:"Started as a small mining operation with a vision for quality ceramic raw materials"})]}),e.jsx("div",{className:"md:w-1/3 flex justify-center",children:e.jsx("div",{className:"w-4 h-4 rounded-full bg-jldBlue"})}),e.jsx("div",{className:"md:w-1/3"})]}),e.jsxs("div",{className:"flex flex-col md:flex-row items-center gap-8",children:[e.jsx("div",{className:"md:w-1/3"}),e.jsx("div",{className:"md:w-1/3 flex justify-center",children:e.jsx("div",{className:"w-4 h-4 rounded-full bg-jldRed"})}),e.jsxs("div",{className:"md:w-1/3 text-center md:text-left",children:[e.jsx("div",{className:"text-3xl font-light text-jldRed mb-2",children:"1990s"}),e.jsx("div",{className:"text-xl font-medium text-gray-800 mb-4",children:"Expansion"}),e.jsx("p",{className:"text-gray-600 font-light",children:"Expanded operations across multiple states and began international exports"})]})]}),e.jsxs("div",{className:"flex flex-col md:flex-row items-center gap-8",children:[e.jsxs("div",{className:"md:w-1/3 text-center md:text-right",children:[e.jsx("div",{className:"text-3xl font-light text-jldBlue mb-2",children:"2010s"}),e.jsx("div",{className:"text-xl font-medium text-gray-800 mb-4",children:"Innovation"}),e.jsx("p",{className:"text-gray-600 font-light",children:"Introduced advanced processing technologies and sustainable mining practices"})]}),e.jsx("div",{className:"md:w-1/3 flex justify-center",children:e.jsx("div",{className:"w-4 h-4 rounded-full bg-jldBlue"})}),e.jsx("div",{className:"md:w-1/3"})]}),e.jsxs("div",{className:"flex flex-col md:flex-row items-center gap-8",children:[e.jsx("div",{className:"md:w-1/3"}),e.jsx("div",{className:"md:w-1/3 flex justify-center",children:e.jsx("div",{className:"w-4 h-4 rounded-full bg-jldRed"})}),e.jsxs("div",{className:"md:w-1/3 text-center md:text-left",children:[e.jsx("div",{className:"text-3xl font-light text-jldRed mb-2",children:"Today"}),e.jsx("div",{className:"text-xl font-medium text-gray-800 mb-4",children:"Global Leader"}),e.jsx("p",{className:"text-gray-600 font-light",children:"Leading ceramic raw material supplier serving 25+ countries with cutting-edge solutions"})]})]})]})]})}),e.jsx("div",{className:"container mx-auto px-6 py-16",style:{margin:"0 auto",padding:"4rem 1.5rem"},children:e.jsxs("div",{className:"max-w-7xl mx-auto",children:[e.jsxs("div",{className:"text-center mb-16",children:[e.jsxs("h2",{className:"text-4xl md:text-5xl font-light text-jldBlue mb-6 leading-tight",children:["Leadership ",e.jsx("span",{className:"text-jldRed",children:"Team"})]}),e.jsx("div",{className:"w-24 h-1 bg-gradient-to-r from-jldBlue to-jldRed mx-auto mb-6"}),e.jsx("p",{className:"text-lg md:text-xl text-gray-600 font-light max-w-4xl mx-auto leading-relaxed",children:"Visionary leaders driving innovation and sustainable growth"})]}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-8",children:[e.jsxs("div",{className:"bg-white rounded-2xl p-8 shadow-xl text-center hover:shadow-2xl transition-shadow",children:[e.jsx("div",{className:"w-24 h-24 rounded-full bg-gradient-to-br from-jldBlue to-jldBlue/80 mx-auto mb-6 flex items-center justify-center",children:e.jsx("span",{className:"text-2xl font-light text-white",children:"JL"})}),e.jsx("h3",{className:"text-xl font-medium text-gray-800 mb-2",children:"Executive Leadership"}),e.jsx("p",{className:"text-jldBlue font-medium mb-4",children:"Strategic Vision"}),e.jsx("p",{className:"text-gray-600 font-light",children:"Guiding the company's strategic direction and global expansion initiatives"})]}),e.jsxs("div",{className:"bg-white rounded-2xl p-8 shadow-xl text-center hover:shadow-2xl transition-shadow",children:[e.jsx("div",{className:"w-24 h-24 rounded-full bg-gradient-to-br from-jldRed to-jldRed/80 mx-auto mb-6 flex items-center justify-center",children:e.jsx("span",{className:"text-2xl font-light text-white",children:"TD"})}),e.jsx("h3",{className:"text-xl font-medium text-gray-800 mb-2",children:"Technical Direction"}),e.jsx("p",{className:"text-jldRed font-medium mb-4",children:"Innovation Focus"}),e.jsx("p",{className:"text-gray-600 font-light",children:"Leading research and development of advanced ceramic material solutions"})]}),e.jsxs("div",{className:"bg-white rounded-2xl p-8 shadow-xl text-center hover:shadow-2xl transition-shadow",children:[e.jsx("div",{className:"w-24 h-24 rounded-full bg-gradient-to-br from-jldBlue to-jldBlue/80 mx-auto mb-6 flex items-center justify-center",children:e.jsx("span",{className:"text-2xl font-light text-white",children:"OM"})}),e.jsx("h3",{className:"text-xl font-medium text-gray-800 mb-2",children:"Operations Management"}),e.jsx("p",{className:"text-jldBlue font-medium mb-4",children:"Operational Excellence"}),e.jsx("p",{className:"text-gray-600 font-light",children:"Ensuring world-class quality and efficiency across all mining and processing operations"})]})]})]})}),e.jsx("div",{className:"copyright-section",style:{background:"linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%)",margin:0,padding:"1.5rem 0"},children:e.jsx("p",{className:"text-gray-600 text-sm",children:"© JLD Minerals. All rights reserved."})})]})})]})]})};export{B as default};
