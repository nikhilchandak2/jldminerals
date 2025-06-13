import{r as t}from"./index--R8XlX_9.js";let e=null,r=0;const s=()=>{const l=t.useRef(!1);t.useEffect(()=>{if(!l.current)return l.current=!0,e||(e=document.createElement("style"),e.id="hide-scrollbar-styles",e.textContent=`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar { 
          display: none;
        }
        /* Hide scrollbar but keep functionality for specific elements */
        .hide-scrollbar-visual {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar-visual::-webkit-scrollbar {
          display: none;
        }
      `,document.head.appendChild(e)),r++,()=>{if(l.current=!1,r--,r===0&&e)try{document.head.contains(e)&&document.head.removeChild(e)}catch(o){console.warn("Failed to remove scrollbar styles:",o)}finally{e=null}}},[])};export{s as u};
