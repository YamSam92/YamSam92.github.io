import{OsEventTypeList as v,CreateStartUpPageContainer as se,TextContainerUpgrade as le,TextContainerProperty as ce}from"./dist-DaKccuR9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();const de="modulepreload",ue=function(e,t){return new URL(e,t).href},q={},pe=function(t,n,o){let i=Promise.resolve();if(n&&n.length>0){const u=document.getElementsByTagName("link"),p=document.querySelector("meta[property=csp-nonce]"),g=p?.nonce||p?.getAttribute("nonce");i=Promise.allSettled(n.map(c=>{if(c=ue(c,o),c in q)return;q[c]=!0;const f=c.endsWith(".css"),x=f?'[rel="stylesheet"]':"";if(!!o)for(let y=u.length-1;y>=0;y--){const C=u[y];if(C.href===c&&(!f||C.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${x}`))return;const h=document.createElement("link");if(h.rel=f?"stylesheet":de,f||(h.as="script"),h.crossOrigin="",h.href=c,g&&h.setAttribute("nonce",g),document.head.appendChild(h),f)return new Promise((y,C)=>{h.addEventListener("load",y),h.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(u){const p=new Event("vite:preloadError",{cancelable:!0});if(p.payload=u,window.dispatchEvent(p),!p.defaultPrevented)throw u}return i.then(u=>{for(const p of u||[])p.status==="rejected"&&r(p.reason);return t().catch(r)})},G=["#1c5a1f","#24782a","#2fa236","#36cf3e","#3CFA44"];function fe(){const e=new Set,t=new Map,n=a=>e.forEach(l=>l(a)),o=document.createElement("section");o.className="pv",o.innerHTML=`
    <div class="pv-badge">미리보기 · 안경 화면</div>
    <div class="pv-frame"><div class="pv-screen"></div></div>
    <div class="pv-btns">
      <button data-e="${v.SCROLL_TOP_EVENT}">↑ 모드 바꾸기</button>
      <button data-e="${v.CLICK_EVENT}">탭 (섞기)</button>
      <button data-e="${v.DOUBLE_CLICK_EVENT}">두 번 탭</button>
    </div>`;const i=document.createElement("style");i.textContent=`
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
    .pv-btns button:active { background:#3CFA44; color:#111; }`,document.head.appendChild(i),document.body.prepend(o);const r=o.querySelector(".pv-screen"),u=o.querySelector(".pv-frame"),p=()=>{r.style.transform=`scale(${u.clientWidth/576})`};new ResizeObserver(p).observe(u),p(),o.querySelectorAll("button[data-e]").forEach(a=>{a.addEventListener("click",()=>n(a.dataset.sys?{sysEvent:{eventType:Number(a.dataset.e)}}:{textEvent:{eventType:Number(a.dataset.e)}}))});let g=null,c=null,f=null,x=!1;async function S(){g=await navigator.mediaDevices.getUserMedia({audio:x?{channelCount:1,echoCancellation:!1,noiseSuppression:!1,autoGainControl:!0}:{channelCount:1,echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0}}),c=new AudioContext;const a=c.createMediaStreamSource(g);f=c.createScriptProcessor(4096,1,1);const l=c.sampleRate/16e3;let m=0;f.onaudioprocess=b=>{const w=b.inputBuffer.getChannelData(0),N=new Int16Array(Math.floor((w.length-m)/l));for(let P=0;P<N.length;P++){const ie=w[Math.floor(m+P*l)]??0;N[P]=Math.max(-32768,Math.min(32767,Math.round(ie*32767)))}m=m+N.length*l-w.length,m<0&&(m=0),n({audioEvent:{audioPcm:new Uint8Array(N.buffer),source:"phone",speakerRole:"unknown"}})},a.connect(f),f.connect(c.destination)}function h(){f?.disconnect(),f=null,g?.getTracks().forEach(a=>a.stop()),g=null,c?.close(),c=null}function y(a){const l=a.containerID;let m=t.get(l);if(!m){const w=document.createElement("div");w.className="pv-box",r.appendChild(w),m={id:l,name:a.containerName,el:w},t.set(l,m)}const b=m.el.style;a.xPosition!==void 0&&(b.left=a.xPosition+"px",b.top=a.yPosition+"px",b.width=a.width+"px",b.height=a.height+"px",b.padding=(a.paddingLength??0)+"px",b.border=a.borderWidth?`${a.borderWidth}px solid ${G[Math.min(4,a.borderColor??4)]}`:"none",b.borderRadius=(a.borderRadius??0)+"px"),(a.textColor!==void 0||!b.color)&&(b.color=G[a.textColor??4]),a.content!==void 0&&(m.el.textContent=a.content)}const C=new Map;function re(a){const l=document.createElement("div");l.className="pv-imgbox",Object.assign(l.style,{left:a.xPosition+"px",top:a.yPosition+"px",width:a.width+"px",height:a.height+"px"});const m=document.createElement("img");m.className="pv-img",l.appendChild(m),r.appendChild(l),C.set(a.containerID,m)}return{async createStartUpPageContainer(a){for(const l of a.textObject??[])y(l);for(const l of a.imageObject??[])re(l);return 0},async updateImageRawData(a){const l=C.get(a.containerID);if(!l)return"imageException";const m=a.imageData instanceof Uint8Array?a.imageData:new Uint8Array(a.imageData),b=l.src;return l.src=URL.createObjectURL(new Blob([m],{type:"image/png"})),b.startsWith("blob:")&&URL.revokeObjectURL(b),await new Promise(w=>setTimeout(w,120)),"success"},async textContainerUpgrade(a){return y(a),!0},async audioControl(a){try{return a&&!g&&await S(),a||h(),!0}catch(l){throw console.error(l),new Error("휴대폰 마이크를 쓸 수 없어요. 브라우저 마이크 권한을 허용하고, https 주소로 열었는지 확인하세요.")}},onEvenHubEvent(a){return e.add(a),()=>e.delete(a)},async setRawAudio(a){x!==a&&(x=a,g&&(h(),await S()))},async getLocalStorage(a){try{return localStorage.getItem(a)??""}catch{return""}},async setLocalStorage(a,l){try{return localStorage.setItem(a,l),!0}catch{return!1}},async shutDownPageContainer(){return h(),!0}}}async function me(){if(await(async()=>{for(let t=0;t<15;t++){if(window.flutter_inappwebview)return!0;await new Promise(n=>setTimeout(n,100))}return!1})()){const{waitForEvenAppBridge:t}=await pe(async()=>{const{waitForEvenAppBridge:n}=await import("./dist-DaKccuR9.js");return{waitForEvenAppBridge:n}},[],import.meta.url);return{bridge:await t(),preview:!1}}return{bridge:fe(),preview:!0}}const Y=e=>Array.from({length:e},(t,n)=>`${n+1}번`),M="".split("|").map(e=>e.trim()).filter(Boolean),K={roster:M.length?M:Y(15),absent:[],mode:"line",teamA:"청팀",teamB:"백팀",sound:!0,last:{}},R="g2-picker-state";async function ge(e){let t="";try{t=e?await e.getLocalStorage(R):""}catch{}if(!t)try{t=localStorage.getItem(R)??""}catch{}let n;try{n={...K,...t?JSON.parse(t):{}}}catch{n={...K}}return M.length&&n.roster.every(o=>/^\d+번$/.test(o))&&(n={...n,roster:M,absent:[],last:{}}),n}async function he(e,t){const n=JSON.stringify(t);try{e&&await e.setLocalStorage(R,n)}catch{}try{localStorage.setItem(R,n)}catch{}}function be(e){const t=[];for(let n of e.split(/[\n,\t]+/))n=n.trim().replace(/^\d+\s*[.):\-]\s*/,"").replace(/^\d+\s+/,"").trim(),n&&!t.includes(n)&&t.push(n);return t.slice(0,40)}function Q(e){const t=new Uint32Array(1),n=Math.floor(4294967296/e)*e;do crypto.getRandomValues(t);while(t[0]>=n);return t[0]%e}function Z(e){const t=[...e];for(let n=t.length-1;n>0;n--){const o=Q(n+1);[t[n],t[o]]=[t[o],t[n]]}return t}function I(e){return e.roster.filter(t=>!e.absent.includes(t))}function xe(e,t=e.mode){const n=I(e);if(n.length<2)return null;const o=Z(n);let i;if(t==="line")i={mode:t,at:Date.now(),line:o};else{const r=o.length%2&&Q(2)?Math.ceil(o.length/2):Math.floor(o.length/2),u=o.slice(0,r),p=o.slice(r),g=c=>[...c].sort((f,x)=>e.roster.indexOf(f)-e.roster.indexOf(x));i={mode:t,at:Date.now(),teams:[g(u),g(p)]}}return e.last={...e.last,[t]:i},i}const D={line:"줄세우기",teams:"두 팀 나누기"},ve={id:1,name:"events"},U={id:2,name:"head"},z={id:3,name:"left"},V={id:4,name:"right"},F={id:5,name:"full"},ye={head:U,left:z,right:V,full:F};class we{constructor(t){this.bridge=t}text=new Map;async init(t,n,o,i){const r=(u,p,g,c,f,x,S,h=0,y=0)=>new ce({xPosition:p,yPosition:g,width:c,height:f,borderWidth:y,borderColor:1,borderRadius:6,paddingLength:6,containerID:u.id,containerName:u.name,content:x||" ",textColor:S,isEventCapture:h});await this.bridge.createStartUpPageContainer(new se({containerTotalNum:5,textObject:[r(ve,0,0,576,288," ",0,1),r(U,0,0,576,36,t,2),r(F,0,36,576,252,i,4),r(z,0,36,286,252,n,4),r(V,290,36,286,252,o,4)]})),this.text.set(U.id,t),this.text.set(z.id,n),this.text.set(V.id,o),this.text.set(F.id,i)}async set(t,n){const o=ye[t];this.text.get(o.id)!==n&&(this.text.set(o.id,n),await this.bridge.textContainerUpgrade(new le({containerID:o.id,containerName:o.name,content:n||" "})))}}const d=e=>document.querySelector(e);function Ee(e,t){Le(),d("#app").innerHTML=`
    <main>
      <header>
        <span class="brand">Class Shuffle</span>
        <span id="count" class="chip"></span>
      </header>

      <nav class="tabs" id="tabs">
        <button data-mode="line">줄세우기</button>
        <button data-mode="teams">두 팀 나누기</button>
      </nav>

      <section id="result" class="result"></section>

      <button class="go" id="go">섞기</button>

      <section class="card">
        <div class="cardhead"><b>출석</b><span class="mute">결석한 친구는 눌러서 빼기</span>
          <button class="link" id="allIn">모두 출석</button></div>
        <div id="roster" class="roster"></div>
      </section>

      <details id="edit">
        <summary>명단 · 설정</summary>
        <label>명단 (한 줄에 한 명, 엑셀·나이스에서 복사해 붙여 넣어도 돼요)
          <textarea id="names" rows="8" placeholder="김하늘&#10;이바다&#10;..."></textarea></label>
        <div class="row">
          <label>번호로 채우기 <input id="num" type="number" min="2" max="40" value="15" /></label>
          <button class="ghost" id="fillNum">번호 명단 만들기</button>
        </div>
        <div class="row">
          <label>첫째 팀 이름 <input id="teamA" /></label>
          <label>둘째 팀 이름 <input id="teamB" /></label>
        </div>
        <label class="check"><input id="sound" type="checkbox" /> 섞을 때 효과음</label>
        <button class="save" id="save">저장</button>
        <p class="hint">명단은 이 휴대폰에만 저장되고 어디로도 보내지 않아요.</p>
        <p class="hint">안경: 탭 = 다시 섞기 · 위/아래 스와이프 = 줄세우기 ↔ 두 팀 · 두 번 탭 = 종료</p>
      </details>
    </main>`,ee(e),d("#tabs").onclick=n=>{const o=n.target.closest("button[data-mode]");o&&t.mode(o.dataset.mode)},d("#go").onclick=t.shuffle,d("#allIn").onclick=t.allPresent,d("#roster").onclick=n=>{const o=n.target.closest("button[data-name]");o&&t.toggleAbsent(o.dataset.name)},d("#fillNum").onclick=()=>{const n=Math.max(2,Math.min(40,Number(d("#num").value)||15));d("#names").value=Y(n).join(`
`)},d("#save").onclick=()=>{const n=be(d("#names").value);if(n.length<2){Ce("명단에 두 명 이상 넣어 주세요");return}t.save({roster:n,teamA:d("#teamA").value.trim()||"1팀",teamB:d("#teamB").value.trim()||"2팀",sound:d("#sound").checked}),d("#edit").open=!1},document.addEventListener("focusin",n=>{const o=n.target;o.matches?.("input, textarea")&&setTimeout(()=>o.scrollIntoView({block:"center",behavior:"smooth"}),300)})}function ee(e){d("#names").value=e.roster.join(`
`),d("#teamA").value=e.teamA,d("#teamB").value=e.teamB,d("#sound").checked=e.sound}function Ce(e){const t=d("#result");t.innerHTML=`<p class="empty err">${L(e)}</p>`}function H(e,t,n=!1){const o=I(e);d("#count").textContent=`${o.length}명 출석${e.absent.length?` · 결석 ${e.absent.length}`:""}`,document.querySelectorAll("#tabs button").forEach(r=>r.classList.toggle("on",r.dataset.mode===e.mode)),d("#go").textContent=t?`다시 ${e.mode==="line"?"줄세우기":"나누기"}`:D[e.mode],d("#go").classList.toggle("spin",n),d("#roster").innerHTML=e.roster.map(r=>`<button data-name="${L(r)}" class="${e.absent.includes(r)?"out":""}">${L(r)}</button>`).join("");const i=d("#result");if(i.classList.toggle("spinning",n),!t){i.innerHTML=`<p class="empty">‘${D[e.mode]}’ 버튼을 누르면<br>출석한 ${o.length}명을 섞어요</p>`;return}if(t.mode==="line")i.innerHTML=`<ol class="line">${t.line.map((r,u)=>`<li><span class="no">${u+1}</span><span class="nm">${L(r)}</span></li>`).join("")}</ol>`;else{const[r,u]=t.teams,p=(g,c,f)=>`
      <div class="team ${f}"><h3>${L(g)}<small>${c.length}명</small></h3>
        <ul>${c.map(x=>`<li>${L(x)}</li>`).join("")}</ul></div>`;i.innerHTML=`<div class="teams">${p(e.teamA,r,"a")}${p(e.teamB,u,"b")}</div>`}}function L(e){return e.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t])}function Le(){const e=`
    :root { color-scheme: dark; --bg:#0e100f; --card:#181b19; --line:#262a27; --text:#eef2ee; --mute:#8a938c;
      --accent:#3CFA44; --blue:#5aa9ff; }
    html, body { margin:0; background:var(--bg); color:var(--text);
      font: 17px/1.5 -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', 'Pretendard', system-ui, sans-serif; }
    main { max-width:560px; margin:0 auto; padding:20px 18px calc(140px + env(safe-area-inset-bottom)); display:flex; flex-direction:column; gap:16px; }
    header { display:flex; justify-content:space-between; align-items:center; }
    .brand { font-weight:700; font-size:20px; letter-spacing:-.01em; }
    .chip { font-size:13px; padding:4px 12px; border-radius:999px; border:1px solid var(--line); color:var(--mute); }
    .mute { color:var(--mute); font-size:13px; }

    button { font:inherit; color:var(--text); background:var(--card); border:1px solid var(--line); border-radius:14px; cursor:pointer; }
    button:active { transform: scale(.97); }

    .tabs { display:grid; grid-template-columns:1fr 1fr; background:var(--card); border-radius:14px; padding:4px; gap:4px; }
    .tabs button { border:0; background:transparent; padding:12px 0; font-size:17px; font-weight:600; color:var(--mute); border-radius:10px; }
    .tabs button.on { background:#2a2f2b; color:var(--text); }

    .result { min-height:220px; background:var(--card); border-radius:18px; padding:16px; transition:opacity .1s; }
    .result.spinning { opacity:.55; }
    .empty { margin:0; height:188px; display:flex; align-items:center; justify-content:center; text-align:center; color:var(--mute); }
    .empty.err { color:#ff6b61; }

    .line { list-style:none; margin:0; padding:0; display:flex; flex-direction:column; gap:6px; position:relative; }
    .line li { display:flex; align-items:center; gap:14px; background:#111312; border-radius:12px; padding:8px 16px; }
    .line .no { font-size:16px; font-weight:700; color:var(--accent); font-variant-numeric:tabular-nums; width:26px; text-align:right; }
    .line .nm { font-size:21px; font-weight:600; }
    .line li:first-child { outline:1.5px solid var(--accent); }
    .line li:first-child::after { content:'맨 앞'; margin-left:auto; font-size:13px; color:var(--accent); }
    .line li:last-child::after { content:'맨 뒤'; margin-left:auto; font-size:13px; color:var(--mute); }

    .teams { display:grid; grid-template-columns:1fr 1fr; gap:12px; }
    .team h3 { margin:0 0 8px; font-size:20px; display:flex; justify-content:space-between; align-items:baseline; padding-bottom:8px; border-bottom:2px solid; }
    .team h3 small { font-size:14px; font-weight:500; color:var(--mute); }
    .team.a h3 { color:var(--blue); border-color:var(--blue); }
    .team.b h3 { color:#fff; border-color:#fff; }
    .team ul { list-style:none; margin:0; padding:0; display:flex; flex-direction:column; gap:6px; }
    .team li { font-size:19px; font-weight:600; background:#111312; border-radius:10px; padding:8px 12px; }

    .go { padding:20px; font-size:21px; font-weight:800; background:var(--accent); color:#0b0d0c; border:0; border-radius:16px; }
    .go.spin { opacity:.7; }

    .card { background:var(--card); border-radius:14px; padding:14px 16px; }
    .cardhead { display:flex; align-items:baseline; gap:10px; margin-bottom:10px; }
    .cardhead .link { margin-left:auto; background:transparent; border:0; color:var(--accent); font-size:14px; padding:0; }
    .roster { display:flex; flex-wrap:wrap; gap:8px; }
    .roster button { padding:8px 12px; font-size:16px; border-radius:999px; background:#111312; }
    .roster button.out { color:#5b625d; text-decoration:line-through; border-style:dashed; }

    details { background:var(--card); border-radius:14px; padding:12px 16px; }
    summary { font-weight:600; cursor:pointer; }
    label { display:flex; flex-direction:column; gap:4px; margin-top:12px; font-size:14px; color:#b8bfba; }
    .row { display:flex; gap:12px; align-items:flex-end; } .row label { flex:1; }
    .row .ghost { padding:11px 14px; font-size:15px; white-space:nowrap; }
    .check { flex-direction:row; align-items:center; gap:8px; }
    input, textarea { font:inherit; color:var(--text); background:#111312; border:1px solid var(--line); border-radius:10px; padding:10px; }
    textarea { resize:vertical; line-height:1.6; }
    .save { width:100%; margin-top:16px; padding:14px; background:var(--accent); color:#0b0d0c; border:0; font-weight:700; }
    .hint { margin:12px 0 0; font-size:14px; color:var(--mute); }
  `,t=document.createElement("style");t.textContent=e,document.head.appendChild(t)}const{bridge:$}=await me(),s=await ge($),T=new we($),A=()=>he($,s);function Te(e){const t=e.length<=16?4:e.length<=25?5:6,n=[];return e.forEach((o,i)=>{const r=`${i+1} ${o}`;i%t===0?n.push(r):n[n.length-1]+=`   ${r}`}),n.join(`
`)}function W(e,t){const n=t.length<=8?t.join(`
`):t.reduce((o,i,r)=>(r%2?o[o.length-1]+="   "+i:o.push(i),o),[]).join(`
`);return`${e} ${t.length}명
${n}`}function te(e,t=!1){const n=I(s).length,o=s.mode==="line"?"두 팀":"줄세우기";if(!e)return{head:`${D[s.mode]} · ${n}명`,full:`탭하면 섞어요
위/아래로 밀면 ${o}로 바꿔요`,left:"",right:""};if(e.mode==="line")return{head:t?"줄세우기 · 섞는 중...":`줄세우기 · ${e.line.length}명 · 앞에서부터 · 탭 다시 · ↕ ${o}`,full:Te(e.line),left:"",right:""};const[i,r]=e.teams;return{head:t?"두 팀 · 섞는 중...":`두 팀 · ${i.length} : ${r.length} · 탭 다시 · ↕ ${o}`,left:W(s.teamA,i),right:W(s.teamB,r),full:""}}async function ne(e,t=!1){const n=te(e,t);await Promise.all([T.set("head",n.head),T.set("full",n.full),T.set("left",n.left),T.set("right",n.right)])}function _(){return s.last[s.mode]}function k(e=!1){H(s,_(),e),ne(_(),e)}let E=null;function B(e,t,n=.06,o=.18){if(!E)return;const i=E.createOscillator(),r=E.createGain();i.frequency.value=e,r.gain.setValueAtTime(1e-4,t),r.gain.exponentialRampToValueAtTime(o,t+.01),r.gain.exponentialRampToValueAtTime(1e-4,t+n),i.connect(r).connect(E.destination),i.start(t),i.stop(t+n+.02)}function X(e){if(s.sound)try{E??=new AudioContext;const t=E.currentTime;e==="tick"?B(660,t):(B(784,t,.12,.25),B(1047,t+.12,.22,.25))}catch{}}document.addEventListener("pointerdown",()=>{try{E??=new AudioContext,E.resume()}catch{}},{once:!0});let j=!1;async function oe(){if(j)return;const e=I(s);if(e.length<2){T.set("head","출석한 사람이 두 명 이상 있어야 해요"),H(s,_());return}j=!0;try{const t=s.mode;for(let n=0;n<4;n++){const o=Z(e),i=t==="line"?{mode:t,at:0,line:o}:{mode:t,at:0,teams:[o.slice(0,Math.floor(o.length/2)),o.slice(Math.floor(o.length/2))]};X("tick"),H(s,i,!0),await Promise.all([ne(i,!0),new Promise(r=>setTimeout(r,110))])}xe(s,t),X("done");try{navigator.vibrate?.(40)}catch{}k(),await A()}finally{j=!1}}function ae(e){s.mode!==e&&(s.mode=e,k(),A())}Ee(s,{mode:ae,shuffle:()=>void oe(),toggleAbsent:e=>{s.absent=s.absent.includes(e)?s.absent.filter(t=>t!==e):[...s.absent,e],s.last={},k(),A()},allPresent:()=>{s.absent=[],s.last={},k(),A()},save:e=>{const t=e.roster&&e.roster.join(`
`)!==s.roster.join(`
`);Object.assign(s,e),t&&(s.absent=s.absent.filter(n=>s.roster.includes(n)),s.last={}),ee(s),k(),A()}});const O=te(_());await T.init(O.head,O.left,O.right,O.full);k();function J(e){return e?e.eventType??v.CLICK_EVENT:null}const ke=$.onEvenHubEvent(e=>{switch(J(e.textEvent)??J(e.sysEvent)){case v.CLICK_EVENT:case v.LONG_PRESS_EVENT:oe();break;case v.SCROLL_TOP_EVENT:case v.SCROLL_BOTTOM_EVENT:ae(s.mode==="line"?"teams":"line");break;case v.DOUBLE_CLICK_EVENT:$.shutDownPageContainer(1);break;case v.SYSTEM_EXIT_EVENT:case v.ABNORMAL_EXIT_EVENT:ke();break}});
