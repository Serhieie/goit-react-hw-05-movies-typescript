"use strict";(self.webpackChunkgoit_react_hw_05_movies_typescript=self.webpackChunkgoit_react_hw_05_movies_typescript||[]).push([[311],{340:(e,t,r)=>{r.r(t),r.d(t,{default:()=>p});var a=r(689),s=r(791),o=r(294),i=r(524),l=r(936),n=r(856),c=r(355),d=r(184);function f(){const[e,t]=(0,s.useState)([]),{movieId:r}=(0,a.UO)();return(0,s.useEffect)((()=>{(async()=>{try{const e=await o.Z.get("".concat(i._n,"movie/").concat(r,"/reviews?").concat(i.$h),i.YM);t(e.data.results)}catch(e){(0,l.J)()}})()}),[r]),(0,d.jsx)("ul",{className:"flex justify-center flex-col gap-12 ",children:e.length?e.map((e=>(0,d.jsxs)("li",{className:"border-b-[0.5px] border-blue-900 py-2 px-4 pt-0 ",children:[(0,d.jsx)("h3",{className:"text-xl font-bold",children:e.author}),(0,d.jsxs)("p",{className:"text-xs flex items-center gap-0.5",children:["Author rating: ",e.author_details.rating," ",(0,d.jsx)(c.QJe,{className:" fill-amber-400"})]}),(0,d.jsx)("p",{className:"text-xs font-thin  text-slate-500 mb-4",children:e.created_at}),(0,d.jsx)("p",{children:e.content})]},e.id))):(0,d.jsxs)("li",{className:"text-center justify-center flex gap-2 items-center",children:[(0,d.jsx)("p",{children:"UPS Sorry but here is no reviews"})," ",(0,d.jsx)(n.Bw$,{size:22})]})})}function p(){return(0,d.jsxs)("div",{className:"w-10/12 mx-auto py-4 mt-4",children:[(0,d.jsx)("h3",{className:"md:text-xl md:after:top-[28px] md:after:h-2 text-2xl font-semibold mb-2 text-blue-200 after:bottom-4 py-4 relative  transition-all duration-[600ms]  after:transition-all after:duration-300 after:content after:absolute md:after:left-[30%] md:after:right-[20%] sm2:after:left-[18%] after:left-[16%] after:right-[40%] after:top-[28px] after:h-3 after:rounded-xl after:transform after:origin-left   after:bg-gradient-to-r after:via-blue-950 after:from-blue-400 after:to-black ",children:"Reviews"}),(0,d.jsx)(f,{})]})}},524:(e,t,r)=>{r.d(t,{$h:()=>s,YM:()=>o,_n:()=>a});const a="https://api.themoviedb.org/3/",s="api_key=713cb35a39a71866f61c58ef1cecbe50",o={method:"GET",params:{language:"en-US",page:"1",include_adult:!1,per_page:"20"},headers:{accept:"application/json"}}},936:(e,t,r)=>{r.d(t,{I:()=>o,J:()=>s});var a=r(85);r(462);const s=()=>{a.Am.error("Sorry but this element is not full",{position:"top-right",autoClose:1200,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"})},o=()=>{a.Am.warn("Enter movie titile",{position:"top-right",autoClose:1200,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"})}}}]);
//# sourceMappingURL=311.564a0c46.chunk.js.map