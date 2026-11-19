import{OsEventTypeList as S,CreateStartUpPageContainer as ce,TextContainerUpgrade as le,TextContainerProperty as de}from"./dist-DaKccuR9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();const pe="modulepreload",ue=function(e,t){return new URL(e,t).href},q={},fe=function(t,r,i){let o=Promise.resolve();if(r&&r.length>0){const s=document.getElementsByTagName("link"),d=document.querySelector("meta[property=csp-nonce]"),l=d?.nonce||d?.getAttribute("nonce");o=Promise.allSettled(r.map(c=>{if(c=ue(c,i),c in q)return;q[c]=!0;const f=c.endsWith(".css"),m=f?'[rel="stylesheet"]':"";if(!!i)for(let D=s.length-1;D>=0;D--){const T=s[D];if(T.href===c&&(!f||T.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${m}`))return;const v=document.createElement("link");if(v.rel=f?"stylesheet":pe,f||(v.as="script"),v.crossOrigin="",v.href=c,l&&v.setAttribute("nonce",l),document.head.appendChild(v),f)return new Promise((D,T)=>{v.addEventListener("load",D),v.addEventListener("error",()=>T(new Error(`Unable to preload CSS for ${c}`)))})}))}function n(s){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=s,window.dispatchEvent(d),!d.defaultPrevented)throw s}return o.then(s=>{for(const d of s||[])d.status==="rejected"&&n(d.reason);return t().catch(n)})},G=["#1c5a1f","#24782a","#2fa236","#36cf3e","#3CFA44"];function me(){const e=new Set,t=new Map,r=a=>e.forEach(u=>u(a)),i=document.createElement("section");i.className="pv",i.innerHTML=`
    <div class="pv-badge">미리보기 · 안경 화면</div>
    <div class="pv-frame"><div class="pv-screen"></div></div>
    <div class="pv-btns">
      <button data-e="${S.SCROLL_TOP_EVENT}">↕ 학사일정</button>
      <button data-e="${S.CLICK_EVENT}">탭 (다음 날)</button>
      <button data-e="${S.LONG_PRESS_EVENT}" data-sys="1">길게 (오늘)</button>
    </div>`;const o=document.createElement("style");o.textContent=`
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
    .pv-btns button:active { background:#3CFA44; color:#111; }`,document.head.appendChild(o),document.body.prepend(i);const n=i.querySelector(".pv-screen"),s=i.querySelector(".pv-frame"),d=()=>{n.style.transform=`scale(${s.clientWidth/576})`};new ResizeObserver(d).observe(s),d(),i.querySelectorAll("button[data-e]").forEach(a=>{a.addEventListener("click",()=>r(a.dataset.sys?{sysEvent:{eventType:Number(a.dataset.e)}}:{textEvent:{eventType:Number(a.dataset.e)}}))});let l=null,c=null,f=null,m=!1;async function E(){l=await navigator.mediaDevices.getUserMedia({audio:m?{channelCount:1,echoCancellation:!1,noiseSuppression:!1,autoGainControl:!0}:{channelCount:1,echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0}}),c=new AudioContext;const a=c.createMediaStreamSource(l);f=c.createScriptProcessor(4096,1,1);const u=c.sampleRate/16e3;let h=0;f.onaudioprocess=x=>{const C=x.inputBuffer.getChannelData(0),P=new Int16Array(Math.floor((C.length-h)/u));for(let R=0;R<P.length;R++){const se=C[Math.floor(h+R*u)]??0;P[R]=Math.max(-32768,Math.min(32767,Math.round(se*32767)))}h=h+P.length*u-C.length,h<0&&(h=0),r({audioEvent:{audioPcm:new Uint8Array(P.buffer),source:"phone",speakerRole:"unknown"}})},a.connect(f),f.connect(c.destination)}function v(){f?.disconnect(),f=null,l?.getTracks().forEach(a=>a.stop()),l=null,c?.close(),c=null}function D(a){const u=a.containerID;let h=t.get(u);if(!h){const C=document.createElement("div");C.className="pv-box",n.appendChild(C),h={id:u,name:a.containerName,el:C},t.set(u,h)}const x=h.el.style;a.xPosition!==void 0&&(x.left=a.xPosition+"px",x.top=a.yPosition+"px",x.width=a.width+"px",x.height=a.height+"px",x.padding=(a.paddingLength??0)+"px",x.border=a.borderWidth?`${a.borderWidth}px solid ${G[Math.min(4,a.borderColor??4)]}`:"none",x.borderRadius=(a.borderRadius??0)+"px"),(a.textColor!==void 0||!x.color)&&(x.color=G[a.textColor??4]),a.content!==void 0&&(h.el.textContent=a.content)}const T=new Map;function ie(a){const u=document.createElement("div");u.className="pv-imgbox",Object.assign(u.style,{left:a.xPosition+"px",top:a.yPosition+"px",width:a.width+"px",height:a.height+"px"});const h=document.createElement("img");h.className="pv-img",u.appendChild(h),n.appendChild(u),T.set(a.containerID,h)}return{async createStartUpPageContainer(a){for(const u of a.textObject??[])D(u);for(const u of a.imageObject??[])ie(u);return 0},async updateImageRawData(a){const u=T.get(a.containerID);if(!u)return"imageException";const h=a.imageData instanceof Uint8Array?a.imageData:new Uint8Array(a.imageData),x=u.src;return u.src=URL.createObjectURL(new Blob([h],{type:"image/png"})),x.startsWith("blob:")&&URL.revokeObjectURL(x),await new Promise(C=>setTimeout(C,120)),"success"},async textContainerUpgrade(a){return D(a),!0},async audioControl(a){try{return a&&!l&&await E(),a||v(),!0}catch(u){throw console.error(u),new Error("휴대폰 마이크를 쓸 수 없어요. 브라우저 마이크 권한을 허용하고, https 주소로 열었는지 확인하세요.")}},onEvenHubEvent(a){return e.add(a),()=>e.delete(a)},async setRawAudio(a){m!==a&&(m=a,l&&(v(),await E()))},async getLocalStorage(a){try{return localStorage.getItem(a)??""}catch{return""}},async setLocalStorage(a,u){try{return localStorage.setItem(a,u),!0}catch{return!1}},async shutDownPageContainer(){return v(),!0}}}async function ge(){if(await(async()=>{for(let t=0;t<15;t++){if(window.flutter_inappwebview)return!0;await new Promise(r=>setTimeout(r,100))}return!1})()){const{waitForEvenAppBridge:t}=await fe(async()=>{const{waitForEvenAppBridge:r}=await import("./dist-DaKccuR9.js");return{waitForEvenAppBridge:r}},[],import.meta.url);return{bridge:await t(),preview:!1}}return{bridge:me(),preview:!0}}const K={school:{office:"N10",code:"8171044",name:"청라초등학교",officeName:"충청남도교육청",kind:"초등학교",addr:""},grade:"5",cls:"1",key:""},j="g2-school-settings";async function he(e){let t="";try{t=e?await e.getLocalStorage(j):""}catch{}if(!t)try{t=localStorage.getItem(j)??""}catch{}try{return{...K,...t?JSON.parse(t):{}}}catch{return{...K}}}async function be(e,t){const r=JSON.stringify(t);try{e&&await e.setLocalStorage(j,r)}catch{}try{localStorage.setItem(j,r)}catch{}}const xe="https://open.neis.go.kr/hub/";async function M(e,t,r){const i=new URLSearchParams({Type:"json",pIndex:"1",pSize:"200",...t});r&&i.set("KEY",r);const o=await fetch(`${xe}${e}?${i}`);if(!o.ok)throw new Error(`나이스 ${o.status}`);const n=await o.json();if(n.RESULT){if(n.RESULT.CODE==="INFO-200")return[];throw new Error(n.RESULT.MESSAGE||n.RESULT.CODE)}return n[e]?.[1]?.row??[]}const b=e=>`${e.getFullYear()}${String(e.getMonth()+1).padStart(2,"0")}${String(e.getDate()).padStart(2,"0")}`;async function ye(e,t){return(await M("schoolInfo",{SCHUL_NM:e},t)).map(i=>({office:i.ATPT_OFCDC_SC_CODE,code:i.SD_SCHUL_CODE,name:i.SCHUL_NM,officeName:i.ATPT_OFCDC_SC_NM,kind:i.SCHUL_KND_SC_NM,addr:i.ORG_RDNMA??""}))}function ve(e){return e.replace(/\([\d.\s]+\)/g,"").replace(/[*]/g,"·").replace(/\s+/g," ").trim()}async function we(e,t,r){return(await M("mealServiceDietInfo",{ATPT_OFCDC_SC_CODE:e.office,SD_SCHUL_CODE:e.code,MLSV_YMD:b(t)},r)).sort((o,n)=>Number(o.MMEAL_SC_CODE)-Number(n.MMEAL_SC_CODE)).map(o=>({kind:o.MMEAL_SC_NM,dishes:String(o.DDISH_NM??"").split(/<br\s*\/?>/i).map(ve).filter(Boolean),kcal:String(o.CAL_INFO??"").replace(/\s*Kcal/i,"kcal")}))}function Ee(e){const t=e.getMonth()+1;return{ay:String(t<=2?e.getFullYear()-1:e.getFullYear()),sem:t>=3&&t<=8?"1":"2"}}const Se={초등학교:"elsTimetable",중학교:"misTimetable",고등학교:"hisTimetable"};async function Ce(e,t,r,i,o){const n=Se[e.kind]??"elsTimetable",{ay:s,sem:d}=Ee(t),l=await M(n,{ATPT_OFCDC_SC_CODE:e.office,SD_SCHUL_CODE:e.code,AY:s,SEM:d,ALL_TI_YMD:b(t),GRADE:r,CLASS_NM:i},o),c=new Map;for(const f of l){const m=Number(f.PERIO);c.has(m)||c.set(m,String(f.ITRT_CNTNT??"").replace(/^-/,"").trim())}return[...c.entries()].sort((f,m)=>f[0]-m[0]).map(([f,m])=>({no:f,subject:m}))}const De=["ONE","TW","THREE","FR","FIV","SIX"];async function Te(e,t,r,i,o){const n={ATPT_OFCDC_SC_CODE:e.office,SD_SCHUL_CODE:e.code};let s;if(o)s=await M("SchoolSchedule",{...n,AA_FROM_YMD:b(t),AA_TO_YMD:b(r)},o);else{const l=[],c=new Date(t.getFullYear(),t.getMonth(),t.getDate()-(t.getDay()+6)%7);for(let m=0;m<10;m++){const E=new Date(c.getFullYear(),c.getMonth(),c.getDate()+m*7);if(E>r)break;l.push([E,new Date(E.getFullYear(),E.getMonth(),E.getDate()+4)])}s=(await Promise.all(l.map(([m,E])=>M("SchoolSchedule",{...n,AA_FROM_YMD:b(m),AA_TO_YMD:b(E)},"").catch(()=>[])))).flat()}const d=De[Number(i)-1];return s.filter(l=>l.EVENT_NM&&l.EVENT_NM!=="토요휴업일").filter(l=>!d||l[`${d}_GRADE_EVENT_YN`]!=="N").map(l=>({ymd:l.AA_YMD,name:String(l.EVENT_NM).trim(),holiday:l.SBTR_DD_SC_NM==="휴업일"})).sort((l,c)=>l.ymd.localeCompare(c.ymd))}const _e={id:1,name:"events"},J={id:2,name:"head"},Q={id:3,name:"left"},Z={id:4,name:"right"},ee={id:5,name:"full"},I={head:J,left:Q,right:Z,full:ee};class ke{constructor(t){this.bridge=t}text=new Map;async init(t){const r=(i,o,n,s,d,l,c,f=0)=>new de({xPosition:o,yPosition:n,width:s,height:d,borderWidth:0,borderColor:0,paddingLength:6,containerID:i.id,containerName:i.name,content:l||" ",textColor:c,isEventCapture:f});await this.bridge.createStartUpPageContainer(new ce({containerTotalNum:5,textObject:[r(_e,0,0,576,288," ",0,1),r(J,0,0,576,36,t.head,2),r(ee,0,36,576,252,t.full,4),r(Q,0,36,300,252,t.left,4),r(Z,304,36,272,252,t.right,4)]}));for(const i of Object.keys(I))this.text.set(I[i].id,t[i])}async show(t){await Promise.all(Object.keys(I).map(r=>this.set(r,t[r])))}async set(t,r){const i=I[t];this.text.get(i.id)!==r&&(this.text.set(i.id,r),await this.bridge.textContainerUpgrade(new le({containerID:i.id,containerName:i.name,content:r||" "})))}}const p=e=>document.querySelector(e),te=["일","월","화","수","목","금","토"];function Ne(e,t){$e(),p("#app").innerHTML=`
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
      <p id="nokey" class="nokey" hidden>나이스 인증키가 없으면 한 번에 5개까지만 받아와서 <b>6교시가 빠질 수 있어요.</b> 아래 설정에 인증키를 넣으면 다 보여요.</p>

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
          <label>학년 <select id="grade">${[1,2,3,4,5,6].map(o=>`<option>${o}</option>`).join("")}</select></label>
          <label>반 <input id="clsIn" type="number" min="1" max="20" /></label>
        </div>
        <label>나이스 인증키 (선택 · 없어도 됨)
          <input id="key" type="password" autocomplete="off" placeholder="open.neis.go.kr 에서 무료 발급" /></label>
        <button class="save" id="save">저장</button>
        <p class="hint">안경: 탭 = 다음 날 · 길게 누르기 = 오늘 · 위/아래 스와이프 = 하루 보기 ↔ 학사일정 · 두 번 탭 = 종료</p>
      </details>
    </main>`;let r=e.school;(()=>{p("#school").textContent=r.name,p("#grade").value=e.grade,p("#clsIn").value=e.cls,p("#key").value=e.key})(),p("#prev").onclick=()=>t.move(-1),p("#next").onclick=()=>t.move(1),p("#todayBtn").onclick=t.today,p("#find").onclick=async()=>{const o=p("#schoolQ").value.trim();if(!o)return;const n=p("#found");n.innerHTML='<p class="hint">찾는 중…</p>';try{const s=await t.search(o);n.innerHTML=s.length?s.map((d,l)=>`<button data-i="${l}"><b>${_(d.name)}</b><span>${_(d.officeName)} · ${_(d.addr)}</span></button>`).join(""):'<p class="hint">찾는 학교가 없어요</p>',n.onclick=d=>{const l=d.target.closest("button[data-i]");l&&(r=s[Number(l.dataset.i)],n.querySelectorAll("button").forEach(c=>c.classList.toggle("on",c===l)),p("#school").textContent=r.name)}}catch(s){n.innerHTML=`<p class="hint err">${_(String(s.message))}</p>`}},p("#save").onclick=()=>{e={school:r,grade:p("#grade").value,cls:String(Math.max(1,Number(p("#clsIn").value)||1)),key:p("#key").value.trim()},t.save(e),p("#settings").open=!1},document.addEventListener("focusin",o=>{const n=o.target;n.matches?.("input, select")&&setTimeout(()=>n.scrollIntoView({block:"center",behavior:"smooth"}),300)})}const Le=e=>`${e.getMonth()+1}월 ${e.getDate()}일 (${te[e.getDay()]})`,H=e=>new Date(Number(e.slice(0,4)),Number(e.slice(4,6))-1,Number(e.slice(6,8)));function Me(e,t){p("#school").textContent=e.school.name,p("#dateText").textContent=Le(t.date),p("#dateSub").textContent=t.isToday?"오늘":"",p("#todayBtn").hidden=t.isToday,p("#cls").textContent=`${e.grade}학년 ${e.cls}반`;const r=p("#error");r.hidden=!t.error,r.textContent=t.error??"",p("#nokey").hidden=!t.noKey;const i=t.date.getDay()===0||t.date.getDay()===6,o=t.meals?.find(n=>n.kind==="중식")??t.meals?.[0];p("#kcal").textContent=o?.kcal??"",p("#meal").innerHTML=t.loading&&!t.meals?B(5):o?o.dishes.map(n=>`<div>${_(n)}</div>`).join(""):`<p class="none">${i?"주말이에요":"급식 정보가 없어요"}</p>`,p("#periods").innerHTML=t.loading&&!t.periods?B(5):t.periods?.length?t.periods.map(n=>`<div><span class="no">${n.no}</span>${_(n.subject)}</div>`).join(""):`<p class="none">${i?"주말이에요":"시간표가 없어요"}</p>`,p("#events").innerHTML=t.events?t.events.length?t.events.slice(0,12).map(n=>{const s=H(n.ymd);return`<div class="${n.holiday?"off":""}"><span class="d">${s.getMonth()+1}/${s.getDate()} ${te[s.getDay()]}</span>${_(n.name)}${n.holiday?"<em>쉬는 날</em>":""}</div>`}).join(""):'<p class="none">다가오는 일정이 없어요</p>':B(3)}const B=e=>Array.from({length:e},()=>'<div class="sk"></div>').join("");function _(e){return e.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t])}function $e(){const e=`
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
    .nokey { margin:0; padding:10px 14px; border-radius:12px; background:#1d2119; color:#c9d3c4; font-size:14px; }
    .nokey[hidden] { display:none; }
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
  `,t=document.createElement("style");t.textContent=e,document.head.appendChild(t)}const{bridge:$}=await ge();let g=await he($);const ne=new ke($),ae=e=>new Date(e.getFullYear(),e.getMonth(),e.getDate());let w=ae(new Date),y=w,N="day";const O=new Map;let F,z="";const A=(e,t)=>new Date(e.getFullYear(),e.getMonth(),e.getDate()+t),oe=e=>e.getDay()===0||e.getDay()===6,Oe=["일","월","화","수","목","금","토"],U=e=>`${e.getMonth()+1}/${e.getDate()} (${Oe[e.getDay()]})`;function V(){return F?.filter(e=>e.ymd>=b(y))}async function W(e){const t=b(e),r=O.get(t);if(r&&!r.error)return;const i={loading:!0};O.set(t,i),L();const[o,n]=await Promise.allSettled([we(g.school,e,g.key),Ce(g.school,e,g.grade,g.cls,g.key)]);o.status==="fulfilled"&&(i.meals=o.value),n.status==="fulfilled"&&(i.periods=n.value);const s=[o,n].find(d=>d.status==="rejected");i.error=s?`불러오기 실패: ${s.reason?.message??s.reason}`:void 0,i.loading=!1,L()}async function Y(){F=void 0;try{F=await Te(g.school,w,A(w,g.key?150:63),g.grade,g.key),z=""}catch(e){F=[],z=`학사일정 불러오기 실패: ${e.message}`}L()}function k(e){y=e,W(e),W(A(e,1)),L()}function re(){const e=O.get(b(y)),t=b(y)===b(w),r=V()?.[0],i=r?` · ${U(H(r.ymd))} ${r.name}`:"";if(N==="events"){const c=V(),f=c?c.length?c.slice(0,8).map(m=>`${U(H(m.ymd))}  ${m.name}${m.holiday?" (쉬는 날)":""}`).join(`
`):"다가오는 일정이 없어요":"불러오는 중...";return{head:`학사일정 · ${U(y)}부터 · ↕ 하루 보기`,full:f,left:"",right:""}}const o=`${U(y)}${t?" 오늘":""}${i}`,n=oe(y),s=e?.meals?.find(c=>c.kind==="중식")??e?.meals?.[0],d=!e||e.loading&&!e.meals?`급식
불러오는 중...`:s?`급식 ${s.kcal}
${s.dishes.slice(0,7).join(`
`)}`:`급식
${n?"주말이에요":e.error?"불러오지 못했어요":"급식이 없어요"}`,l=!e||e.loading&&!e.periods?`${g.grade}-${g.cls} 시간표
불러오는 중...`:e.periods?.length?`${g.grade}-${g.cls} 시간표
${e.periods.slice(0,7).map(c=>`${c.no}  ${c.subject}`).join(`
`)}`:`${g.grade}-${g.cls} 시간표
${n?"주말이에요":e.error?"불러오지 못했어요":"시간표가 없어요"}`;return{head:o,left:d,right:l,full:""}}function L(){const e=O.get(b(y)),t={date:y,isToday:b(y)===b(w),meals:e?.meals,periods:e?.periods,events:V(),loading:!e||e.loading,error:e?.error??(z||void 0),noKey:!g.key};Me(g,t),ne.show(re())}Ne(g,{move:e=>k(A(y,e)),today:()=>k(w),search:e=>ye(e,g.key),save:async e=>{g=e,await be($,e),O.clear(),k(y),Y()}});await ne.init(re());k(w);Y();setInterval(()=>{const e=ae(new Date);if(b(e)===b(w))return;const t=b(y)===b(w);w=e,t&&k(w),Y()},6e4);function Ae(e){let t=A(e,1);for(;oe(t);)t=A(t,1);return t}function X(e){return e?e.eventType??S.CLICK_EVENT:null}const Pe=$.onEvenHubEvent(e=>{switch(X(e.textEvent)??X(e.sysEvent)){case S.CLICK_EVENT:if(N==="events"){N="day",L();break}k(Ae(y));break;case S.LONG_PRESS_EVENT:N="day",k(w);break;case S.SCROLL_TOP_EVENT:case S.SCROLL_BOTTOM_EVENT:N=N==="day"?"events":"day",L();break;case S.DOUBLE_CLICK_EVENT:$.shutDownPageContainer(1);break;case S.SYSTEM_EXIT_EVENT:case S.ABNORMAL_EXIT_EVENT:Pe();break}});
