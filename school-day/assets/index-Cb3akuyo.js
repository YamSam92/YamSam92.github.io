import{OsEventTypeList as E,CreateStartUpPageContainer as ce,TextContainerUpgrade as le,TextContainerProperty as de}from"./dist-DaKccuR9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(a){if(a.ep)return;a.ep=!0;const n=r(a);fetch(a.href,n)}})();const pe="modulepreload",ue=function(e,t){return new URL(e,t).href},Y={},fe=function(t,r,i){let a=Promise.resolve();if(r&&r.length>0){const s=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),u=c?.nonce||c?.getAttribute("nonce");a=Promise.allSettled(r.map(l=>{if(l=ue(l,i),l in Y)return;Y[l]=!0;const f=l.endsWith(".css"),h=f?'[rel="stylesheet"]':"";if(!!i)for(let C=s.length-1;C>=0;C--){const T=s[C];if(T.href===l&&(!f||T.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${h}`))return;const v=document.createElement("link");if(v.rel=f?"stylesheet":pe,f||(v.as="script"),v.crossOrigin="",v.href=l,u&&v.setAttribute("nonce",u),document.head.appendChild(v),f)return new Promise((C,T)=>{v.addEventListener("load",C),v.addEventListener("error",()=>T(new Error(`Unable to preload CSS for ${l}`)))})}))}function n(s){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=s,window.dispatchEvent(c),!c.defaultPrevented)throw s}return a.then(s=>{for(const c of s||[])c.status==="rejected"&&n(c.reason);return t().catch(n)})},G=["#1c5a1f","#24782a","#2fa236","#36cf3e","#3CFA44"];function me(){const e=new Set,t=new Map,r=o=>e.forEach(p=>p(o)),i=document.createElement("section");i.className="pv",i.innerHTML=`
    <div class="pv-badge">미리보기 · 안경 화면</div>
    <div class="pv-frame"><div class="pv-screen"></div></div>
    <div class="pv-btns">
      <button data-e="${E.SCROLL_TOP_EVENT}">↕ 학사일정</button>
      <button data-e="${E.CLICK_EVENT}">탭 (다음 날)</button>
      <button data-e="${E.LONG_PRESS_EVENT}" data-sys="1">길게 (오늘)</button>
    </div>`;const a=document.createElement("style");a.textContent=`
    .pv { max-width:640px; margin:0 auto; padding:16px 16px 0; }
    .pv-badge { font:600 12px/1 system-ui; color:#3CFA44; letter-spacing:.04em; margin-bottom:8px; }
    .pv-frame { width:100%; aspect-ratio:2/1; background:#000; border-radius:14px; overflow:hidden;
      border:1px solid #2a2a2a; position:relative; }
    .pv-screen { position:absolute; left:0; top:0; width:576px; height:288px; transform-origin:0 0; }
    .pv-box { position:absolute; box-sizing:border-box; overflow:hidden; white-space:pre-wrap; word-break:break-word;
      font: 20px/1.3 -apple-system, 'Apple SD Gothic Neo', 'Noto Sans KR', system-ui, sans-serif; }
    .pv-btns { display:flex; gap:8px; margin-top:8px; }
    /* 안경처럼: 검정은 그대로, 흰색은 초록, 회색은 어두운 초록 */
    .pv-imgbox { position:absolute; background:#3CFA44; overflow:hidden; }
    .pv-img { width:100%; height:100%; display:block; mix-blend-mode:multiply; filter:grayscale(1); transform:scale(1.02); }
    .pv-btns button { flex:1; font:600 15px system-ui; padding:12px 6px; border-radius:10px; border:1px solid #3a3a3a;
      background:#262626; color:#e5e5e5; }
    .pv-btns button:active { background:#3CFA44; color:#111; }`,document.head.appendChild(a),document.body.prepend(i);const n=i.querySelector(".pv-screen"),s=i.querySelector(".pv-frame"),c=()=>{n.style.transform=`scale(${s.clientWidth/576})`};new ResizeObserver(c).observe(s),c(),i.querySelectorAll("button[data-e]").forEach(o=>{o.addEventListener("click",()=>r(o.dataset.sys?{sysEvent:{eventType:Number(o.dataset.e)}}:{textEvent:{eventType:Number(o.dataset.e)}}))});let u=null,l=null,f=null,h=!1;async function F(){u=await navigator.mediaDevices.getUserMedia({audio:h?{channelCount:1,echoCancellation:!1,noiseSuppression:!1,autoGainControl:!0}:{channelCount:1,echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0}}),l=new AudioContext;const o=l.createMediaStreamSource(u);f=l.createScriptProcessor(4096,1,1);const p=l.sampleRate/16e3;let g=0;f.onaudioprocess=x=>{const S=x.inputBuffer.getChannelData(0),O=new Int16Array(Math.floor((S.length-g)/p));for(let A=0;A<O.length;A++){const se=S[Math.floor(g+A*p)]??0;O[A]=Math.max(-32768,Math.min(32767,Math.round(se*32767)))}g=g+O.length*p-S.length,g<0&&(g=0),r({audioEvent:{audioPcm:new Uint8Array(O.buffer),source:"phone",speakerRole:"unknown"}})},o.connect(f),f.connect(l.destination)}function v(){f?.disconnect(),f=null,u?.getTracks().forEach(o=>o.stop()),u=null,l?.close(),l=null}function C(o){const p=o.containerID;let g=t.get(p);if(!g){const S=document.createElement("div");S.className="pv-box",n.appendChild(S),g={id:p,name:o.containerName,el:S},t.set(p,g)}const x=g.el.style;o.xPosition!==void 0&&(x.left=o.xPosition+"px",x.top=o.yPosition+"px",x.width=o.width+"px",x.height=o.height+"px",x.padding=(o.paddingLength??0)+"px",x.border=o.borderWidth?`${o.borderWidth}px solid ${G[Math.min(4,o.borderColor??4)]}`:"none",x.borderRadius=(o.borderRadius??0)+"px"),(o.textColor!==void 0||!x.color)&&(x.color=G[o.textColor??4]),o.content!==void 0&&(g.el.textContent=o.content)}const T=new Map;function ie(o){const p=document.createElement("div");p.className="pv-imgbox",Object.assign(p.style,{left:o.xPosition+"px",top:o.yPosition+"px",width:o.width+"px",height:o.height+"px"});const g=document.createElement("img");g.className="pv-img",p.appendChild(g),n.appendChild(p),T.set(o.containerID,g)}return{async createStartUpPageContainer(o){for(const p of o.textObject??[])C(p);for(const p of o.imageObject??[])ie(p);return 0},async updateImageRawData(o){const p=T.get(o.containerID);if(!p)return"imageException";const g=o.imageData instanceof Uint8Array?o.imageData:new Uint8Array(o.imageData),x=p.src;return p.src=URL.createObjectURL(new Blob([g],{type:"image/png"})),x.startsWith("blob:")&&URL.revokeObjectURL(x),await new Promise(S=>setTimeout(S,120)),"success"},async textContainerUpgrade(o){return C(o),!0},async audioControl(o){try{return o&&!u&&await F(),o||v(),!0}catch(p){throw console.error(p),new Error("휴대폰 마이크를 쓸 수 없어요. 브라우저 마이크 권한을 허용하고, https 주소로 열었는지 확인하세요.")}},onEvenHubEvent(o){return e.add(o),()=>e.delete(o)},async setRawAudio(o){h!==o&&(h=o,u&&(v(),await F()))},async getLocalStorage(o){try{return localStorage.getItem(o)??""}catch{return""}},async setLocalStorage(o,p){try{return localStorage.setItem(o,p),!0}catch{return!1}},async shutDownPageContainer(){return v(),!0}}}async function ge(){if(await(async()=>{for(let t=0;t<15;t++){if(window.flutter_inappwebview)return!0;await new Promise(r=>setTimeout(r,100))}return!1})()){const{waitForEvenAppBridge:t}=await fe(async()=>{const{waitForEvenAppBridge:r}=await import("./dist-DaKccuR9.js");return{waitForEvenAppBridge:r}},[],import.meta.url);return{bridge:await t(),preview:!1}}return{bridge:me(),preview:!0}}const K={school:{office:"N10",code:"8171044",name:"청라초등학교",officeName:"충청남도교육청",kind:"초등학교",addr:""},grade:"5",cls:"1",key:""},U="g2-school-settings";async function he(e){let t="";try{t=e?await e.getLocalStorage(U):""}catch{}if(!t)try{t=localStorage.getItem(U)??""}catch{}try{return{...K,...t?JSON.parse(t):{}}}catch{return{...K}}}async function be(e,t){const r=JSON.stringify(t);try{e&&await e.setLocalStorage(U,r)}catch{}try{localStorage.setItem(U,r)}catch{}}const xe="https://open.neis.go.kr/hub/";async function j(e,t,r){const i=new URLSearchParams({Type:"json",pIndex:"1",pSize:"200",...t});r&&i.set("KEY",r);const a=await fetch(`${xe}${e}?${i}`);if(!a.ok)throw new Error(`나이스 ${a.status}`);const n=await a.json();if(n.RESULT){if(n.RESULT.CODE==="INFO-200")return[];throw new Error(n.RESULT.MESSAGE||n.RESULT.CODE)}return n[e]?.[1]?.row??[]}const b=e=>`${e.getFullYear()}${String(e.getMonth()+1).padStart(2,"0")}${String(e.getDate()).padStart(2,"0")}`;async function ye(e,t){return(await j("schoolInfo",{SCHUL_NM:e},t)).map(i=>({office:i.ATPT_OFCDC_SC_CODE,code:i.SD_SCHUL_CODE,name:i.SCHUL_NM,officeName:i.ATPT_OFCDC_SC_NM,kind:i.SCHUL_KND_SC_NM,addr:i.ORG_RDNMA??""}))}function ve(e){return e.replace(/\([\d.\s]+\)/g,"").replace(/[*]/g,"·").replace(/\s+/g," ").trim()}async function we(e,t,r){return(await j("mealServiceDietInfo",{ATPT_OFCDC_SC_CODE:e.office,SD_SCHUL_CODE:e.code,MLSV_YMD:b(t)},r)).sort((a,n)=>Number(a.MMEAL_SC_CODE)-Number(n.MMEAL_SC_CODE)).map(a=>({kind:a.MMEAL_SC_NM,dishes:String(a.DDISH_NM??"").split(/<br\s*\/?>/i).map(ve).filter(Boolean),kcal:String(a.CAL_INFO??"").replace(/\s*Kcal/i,"kcal")}))}function Ee(e){const t=e.getMonth()+1;return{ay:String(t<=2?e.getFullYear()-1:e.getFullYear()),sem:t>=3&&t<=8?"1":"2"}}const Se={초등학교:"elsTimetable",중학교:"misTimetable",고등학교:"hisTimetable"};async function Ce(e,t,r,i,a){const n=Se[e.kind]??"elsTimetable",{ay:s,sem:c}=Ee(t),u=await j(n,{ATPT_OFCDC_SC_CODE:e.office,SD_SCHUL_CODE:e.code,AY:s,SEM:c,ALL_TI_YMD:b(t),GRADE:r,CLASS_NM:i},a),l=new Map;for(const f of u){const h=Number(f.PERIO);l.has(h)||l.set(h,String(f.ITRT_CNTNT??"").replace(/^-/,"").trim())}return[...l.entries()].sort((f,h)=>f[0]-h[0]).map(([f,h])=>({no:f,subject:h}))}const Te=["ONE","TW","THREE","FR","FIV","SIX"];async function _e(e,t,r,i,a){const n=await j("SchoolSchedule",{ATPT_OFCDC_SC_CODE:e.office,SD_SCHUL_CODE:e.code,AA_FROM_YMD:b(t),AA_TO_YMD:b(r)},a),s=Te[Number(i)-1];return n.filter(c=>c.EVENT_NM&&c.EVENT_NM!=="토요휴업일").filter(c=>!s||c[`${s}_GRADE_EVENT_YN`]!=="N").map(c=>({ymd:c.AA_YMD,name:String(c.EVENT_NM).trim(),holiday:c.SBTR_DD_SC_NM==="휴업일"})).sort((c,u)=>c.ymd.localeCompare(u.ymd))}const De={id:1,name:"events"},J={id:2,name:"head"},Q={id:3,name:"left"},Z={id:4,name:"right"},ee={id:5,name:"full"},P={head:J,left:Q,right:Z,full:ee};class ke{constructor(t){this.bridge=t}text=new Map;async init(t){const r=(i,a,n,s,c,u,l,f=0)=>new de({xPosition:a,yPosition:n,width:s,height:c,borderWidth:0,borderColor:0,paddingLength:6,containerID:i.id,containerName:i.name,content:u||" ",textColor:l,isEventCapture:f});await this.bridge.createStartUpPageContainer(new ce({containerTotalNum:5,textObject:[r(De,0,0,576,288," ",0,1),r(J,0,0,576,36,t.head,2),r(ee,0,36,576,252,t.full,4),r(Q,0,36,300,252,t.left,4),r(Z,304,36,272,252,t.right,4)]}));for(const i of Object.keys(P))this.text.set(P[i].id,t[i])}async show(t){await Promise.all(Object.keys(P).map(r=>this.set(r,t[r])))}async set(t,r){const i=P[t];this.text.get(i.id)!==r&&(this.text.set(i.id,r),await this.bridge.textContainerUpgrade(new le({containerID:i.id,containerName:i.name,content:r||" "})))}}const d=e=>document.querySelector(e),te=["일","월","화","수","목","금","토"];function Ne(e,t){Me(),d("#app").innerHTML=`
    <main>
      <header>
        <span class="brand">School Day</span>
        <span id="school" class="chip"></span>
      </header>

      <nav class="datenav">
        <button id="prev" aria-label="이전 날">‹</button>
        <div class="date"><b id="dateText"></b><span id="dateSub"></span></div>
        <button id="next" aria-label="다음 날">›</button>
      </nav>
      <button class="todaybtn" id="todayBtn">오늘로</button>

      <p id="error" class="error" hidden></p>

      <section class="grid">
        <article class="card">
          <h2>급식 <small id="kcal"></small></h2>
          <div id="meal" class="list"></div>
        </article>
        <article class="card">
          <h2>시간표 <small id="cls"></small></h2>
          <div id="periods" class="list"></div>
        </article>
      </section>

      <article class="card">
        <h2>다가오는 학사일정</h2>
        <div id="events" class="events"></div>
      </article>

      <details id="settings">
        <summary>학교 · 학년 · 반 설정</summary>
        <label>학교 이름으로 찾기
          <div class="qrow"><input id="schoolQ" placeholder="예: 청라초등학교" /><button id="find">찾기</button></div></label>
        <div id="found" class="found"></div>
        <div class="row">
          <label>학년 <select id="grade">${[1,2,3,4,5,6].map(a=>`<option>${a}</option>`).join("")}</select></label>
          <label>반 <input id="clsIn" type="number" min="1" max="20" /></label>
        </div>
        <label>나이스 인증키 (선택 · 없어도 됨)
          <input id="key" type="password" autocomplete="off" placeholder="open.neis.go.kr 에서 무료 발급" /></label>
        <button class="save" id="save">저장</button>
        <p class="hint">안경: 탭 = 다음 날 · 길게 누르기 = 오늘 · 위/아래 스와이프 = 하루 보기 ↔ 학사일정 · 두 번 탭 = 종료</p>
      </details>
    </main>`;let r=e.school;(()=>{d("#school").textContent=r.name,d("#grade").value=e.grade,d("#clsIn").value=e.cls,d("#key").value=e.key})(),d("#prev").onclick=()=>t.move(-1),d("#next").onclick=()=>t.move(1),d("#todayBtn").onclick=t.today,d("#find").onclick=async()=>{const a=d("#schoolQ").value.trim();if(!a)return;const n=d("#found");n.innerHTML='<p class="hint">찾는 중…</p>';try{const s=await t.search(a);n.innerHTML=s.length?s.map((c,u)=>`<button data-i="${u}"><b>${_(c.name)}</b><span>${_(c.officeName)} · ${_(c.addr)}</span></button>`).join(""):'<p class="hint">찾는 학교가 없어요</p>',n.onclick=c=>{const u=c.target.closest("button[data-i]");u&&(r=s[Number(u.dataset.i)],n.querySelectorAll("button").forEach(l=>l.classList.toggle("on",l===u)),d("#school").textContent=r.name)}}catch(s){n.innerHTML=`<p class="hint err">${_(String(s.message))}</p>`}},d("#save").onclick=()=>{e={school:r,grade:d("#grade").value,cls:String(Math.max(1,Number(d("#clsIn").value)||1)),key:d("#key").value.trim()},t.save(e),d("#settings").open=!1},document.addEventListener("focusin",a=>{const n=a.target;n.matches?.("input, select")&&setTimeout(()=>n.scrollIntoView({block:"center",behavior:"smooth"}),300)})}const Le=e=>`${e.getMonth()+1}월 ${e.getDate()}일 (${te[e.getDay()]})`,H=e=>new Date(Number(e.slice(0,4)),Number(e.slice(4,6))-1,Number(e.slice(6,8)));function $e(e,t){d("#school").textContent=e.school.name,d("#dateText").textContent=Le(t.date),d("#dateSub").textContent=t.isToday?"오늘":"",d("#todayBtn").hidden=t.isToday,d("#cls").textContent=`${e.grade}학년 ${e.cls}반`;const r=d("#error");r.hidden=!t.error,r.textContent=t.error??"";const i=t.date.getDay()===0||t.date.getDay()===6,a=t.meals?.find(n=>n.kind==="중식")??t.meals?.[0];d("#kcal").textContent=a?.kcal??"",d("#meal").innerHTML=t.loading&&!t.meals?B(5):a?a.dishes.map(n=>`<div>${_(n)}</div>`).join(""):`<p class="none">${i?"주말이에요":"급식 정보가 없어요"}</p>`,d("#periods").innerHTML=t.loading&&!t.periods?B(5):t.periods?.length?t.periods.map(n=>`<div><span class="no">${n.no}</span>${_(n.subject)}</div>`).join(""):`<p class="none">${i?"주말이에요":"시간표가 없어요"}</p>`,d("#events").innerHTML=t.events?t.events.length?t.events.slice(0,12).map(n=>{const s=H(n.ymd);return`<div class="${n.holiday?"off":""}"><span class="d">${s.getMonth()+1}/${s.getDate()} ${te[s.getDay()]}</span>${_(n.name)}${n.holiday?"<em>쉬는 날</em>":""}</div>`}).join(""):'<p class="none">다가오는 일정이 없어요</p>':B(3)}const B=e=>Array.from({length:e},()=>'<div class="sk"></div>').join("");function _(e){return e.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t])}function Me(){const e=`
    :root { color-scheme: dark; --bg:#0e100f; --card:#181b19; --line:#262a27; --text:#eef2ee; --mute:#8a938c; --accent:#3CFA44; }
    html, body { margin:0; background:var(--bg); color:var(--text);
      font: 17px/1.5 -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', 'Pretendard', system-ui, sans-serif; }
    main { max-width:560px; margin:0 auto; padding:20px 18px calc(140px + env(safe-area-inset-bottom)); display:flex; flex-direction:column; gap:14px; }
    header { display:flex; justify-content:space-between; align-items:center; }
    .brand { font-weight:700; font-size:20px; }
    .chip { font-size:13px; padding:4px 12px; border-radius:999px; border:1px solid var(--line); color:var(--mute); }
    button { font:inherit; color:var(--text); background:var(--card); border:1px solid var(--line); border-radius:14px; cursor:pointer; }
    button:active { transform:scale(.97); }

    .datenav { display:flex; align-items:center; gap:10px; }
    .datenav button { width:52px; height:52px; font-size:28px; line-height:1; border-radius:999px; }
    .date { flex:1; text-align:center; display:flex; flex-direction:column; }
    .date b { font-size:24px; letter-spacing:-.01em; }
    .date span { font-size:14px; color:var(--accent); min-height:21px; }
    .todaybtn { align-self:center; padding:6px 16px; font-size:14px; border-radius:999px; color:var(--accent); border-color:var(--accent); background:transparent; }
    .todaybtn[hidden] { display:none; }
    .error { margin:0; padding:10px 14px; border-radius:12px; background:#2a1513; color:#ff8a80; font-size:14px; }

    .grid { display:grid; grid-template-columns:1fr 1fr; gap:12px; }
    .card { background:var(--card); border-radius:16px; padding:14px 16px; }
    .card h2 { margin:0 0 10px; font-size:16px; display:flex; justify-content:space-between; align-items:baseline; color:var(--mute); font-weight:600; }
    .card h2 small { font-size:13px; font-weight:500; }
    .list { display:flex; flex-direction:column; gap:6px; font-size:18px; font-weight:600; }
    .list .no { display:inline-block; width:22px; color:var(--accent); font-variant-numeric:tabular-nums; }
    .none { margin:6px 0; color:var(--mute); font-size:15px; font-weight:400; }
    .events { display:flex; flex-direction:column; gap:8px; font-size:17px; }
    .events .d { display:inline-block; width:72px; color:var(--accent); font-size:15px; font-variant-numeric:tabular-nums; }
    .events em { font-style:normal; font-size:12px; margin-left:8px; padding:1px 8px; border-radius:999px; border:1px solid #ff8a80; color:#ff8a80; }
    .sk { height:18px; border-radius:6px; background:#222724; margin:4px 0; animation:pulse 1.2s ease-in-out infinite; }
    @keyframes pulse { 50% { opacity:.4 } }

    details { background:var(--card); border-radius:14px; padding:12px 16px; }
    summary { font-weight:600; cursor:pointer; }
    label { display:flex; flex-direction:column; gap:4px; margin-top:12px; font-size:14px; color:#b8bfba; }
    .row { display:flex; gap:12px; } .row label { flex:1; }
    .qrow { display:flex; gap:8px; } .qrow input { flex:1; min-width:0; }
    .qrow button { padding:10px 16px; background:var(--accent); color:#0b0d0c; border:0; font-weight:700; }
    .found { display:flex; flex-direction:column; gap:6px; margin-top:8px; }
    .found button { text-align:left; padding:10px 12px; display:flex; flex-direction:column; }
    .found button span { font-size:13px; color:var(--mute); }
    .found button.on { border-color:var(--accent); }
    input, select { font:inherit; color:var(--text); background:#111312; border:1px solid var(--line); border-radius:10px; padding:10px; }
    .save { width:100%; margin-top:16px; padding:14px; background:var(--accent); color:#0b0d0c; border:0; font-weight:700; }
    .hint { margin:12px 0 0; font-size:14px; color:var(--mute); }
    .hint.err { color:#ff8a80; }
    @media (max-width:360px) { .grid { grid-template-columns:1fr; } }
  `,t=document.createElement("style");t.textContent=e,document.head.appendChild(t)}const{bridge:$}=await ge();let m=await he($);const ne=new ke($),oe=e=>new Date(e.getFullYear(),e.getMonth(),e.getDate());let w=oe(new Date),y=w,k="day";const M=new Map;let I,V="";const N=(e,t)=>new Date(e.getFullYear(),e.getMonth(),e.getDate()+t),ae=e=>e.getDay()===0||e.getDay()===6,Oe=["일","월","화","수","목","금","토"],R=e=>`${e.getMonth()+1}/${e.getDate()} (${Oe[e.getDay()]})`;function z(){return I?.filter(e=>e.ymd>=b(y))}async function W(e){const t=b(e),r=M.get(t);if(r&&!r.error)return;const i={loading:!0};M.set(t,i),L();const[a,n]=await Promise.allSettled([we(m.school,e,m.key),Ce(m.school,e,m.grade,m.cls,m.key)]);a.status==="fulfilled"&&(i.meals=a.value),n.status==="fulfilled"&&(i.periods=n.value);const s=[a,n].find(c=>c.status==="rejected");i.error=s?`불러오기 실패: ${s.reason?.message??s.reason}`:void 0,i.loading=!1,L()}async function q(){I=void 0;try{I=await _e(m.school,N(w,-7),N(w,150),m.grade,m.key),V=""}catch(e){I=[],V=`학사일정 불러오기 실패: ${e.message}`}L()}function D(e){y=e,W(e),W(N(e,1)),L()}function re(){const e=M.get(b(y)),t=b(y)===b(w),r=z()?.[0],i=r?` · ${R(H(r.ymd))} ${r.name}`:"";if(k==="events"){const l=z(),f=l?l.length?l.slice(0,8).map(h=>`${R(H(h.ymd))}  ${h.name}${h.holiday?" (쉬는 날)":""}`).join(`
`):"다가오는 일정이 없어요":"불러오는 중...";return{head:`학사일정 · ${R(y)}부터 · ↕ 하루 보기`,full:f,left:"",right:""}}const a=`${R(y)}${t?" 오늘":""}${i}`,n=ae(y),s=e?.meals?.find(l=>l.kind==="중식")??e?.meals?.[0],c=!e||e.loading&&!e.meals?`급식
불러오는 중...`:s?`급식 ${s.kcal}
${s.dishes.slice(0,7).join(`
`)}`:`급식
${n?"주말이에요":e.error?"불러오지 못했어요":"급식이 없어요"}`,u=!e||e.loading&&!e.periods?`${m.grade}-${m.cls} 시간표
불러오는 중...`:e.periods?.length?`${m.grade}-${m.cls} 시간표
${e.periods.slice(0,7).map(l=>`${l.no}  ${l.subject}`).join(`
`)}`:`${m.grade}-${m.cls} 시간표
${n?"주말이에요":e.error?"불러오지 못했어요":"시간표가 없어요"}`;return{head:a,left:c,right:u,full:""}}function L(){const e=M.get(b(y)),t={date:y,isToday:b(y)===b(w),meals:e?.meals,periods:e?.periods,events:z(),loading:!e||e.loading,error:e?.error??(V||void 0)};$e(m,t),ne.show(re())}Ne(m,{move:e=>D(N(y,e)),today:()=>D(w),search:e=>ye(e,m.key),save:async e=>{m=e,await be($,e),M.clear(),D(y),q()}});await ne.init(re());D(w);q();setInterval(()=>{const e=oe(new Date);if(b(e)===b(w))return;const t=b(y)===b(w);w=e,t&&D(w),q()},6e4);function Ae(e){let t=N(e,1);for(;ae(t);)t=N(t,1);return t}function X(e){return e?e.eventType??E.CLICK_EVENT:null}const Pe=$.onEvenHubEvent(e=>{switch(X(e.textEvent)??X(e.sysEvent)){case E.CLICK_EVENT:if(k==="events"){k="day",L();break}D(Ae(y));break;case E.LONG_PRESS_EVENT:k="day",D(w);break;case E.SCROLL_TOP_EVENT:case E.SCROLL_BOTTOM_EVENT:k=k==="day"?"events":"day",L();break;case E.DOUBLE_CLICK_EVENT:$.shutDownPageContainer(1);break;case E.SYSTEM_EXIT_EVENT:case E.ABNORMAL_EXIT_EVENT:Pe();break}});
