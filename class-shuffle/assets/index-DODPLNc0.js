import{OsEventTypeList as v,CreateStartUpPageContainer as re,TextContainerUpgrade as ie,TextContainerProperty as se}from"./dist-DaKccuR9.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();const le="modulepreload",ce=function(t,e){return new URL(t,e).href},H={},de=function(e,n,o){let r=Promise.resolve();if(n&&n.length>0){const l=document.getElementsByTagName("link"),d=document.querySelector("meta[property=csp-nonce]"),m=d?.nonce||d?.getAttribute("nonce");r=Promise.allSettled(n.map(u=>{if(u=ce(u,o),u in H)return;H[u]=!0;const f=u.endsWith(".css"),x=f?'[rel="stylesheet"]':"";if(!!o)for(let w=l.length-1;w>=0;w--){const C=l[w];if(C.href===u&&(!f||C.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${x}`))return;const h=document.createElement("link");if(h.rel=f?"stylesheet":le,f||(h.as="script"),h.crossOrigin="",h.href=u,m&&h.setAttribute("nonce",m),document.head.appendChild(h),f)return new Promise((w,C)=>{h.addEventListener("load",w),h.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(l){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=l,window.dispatchEvent(d),!d.defaultPrevented)throw l}return r.then(l=>{for(const d of l||[])d.status==="rejected"&&i(d.reason);return e().catch(i)})},q=["#1c5a1f","#24782a","#2fa236","#36cf3e","#3CFA44"];function ue(){const t=new Set,e=new Map,n=a=>t.forEach(c=>c(a)),o=document.createElement("section");o.className="pv",o.innerHTML=`
    <div class="pv-badge">미리보기 · 안경 화면</div>
    <div class="pv-frame"><div class="pv-screen"></div></div>
    <div class="pv-btns">
      <button data-e="${v.SCROLL_TOP_EVENT}">↑ 모드 바꾸기</button>
      <button data-e="${v.CLICK_EVENT}">탭 (섞기)</button>
      <button data-e="${v.DOUBLE_CLICK_EVENT}">두 번 탭</button>
    </div>`;const r=document.createElement("style");r.textContent=`
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
    .pv-btns button:active { background:#3CFA44; color:#111; }`,document.head.appendChild(r),document.body.prepend(o);const i=o.querySelector(".pv-screen"),l=o.querySelector(".pv-frame"),d=()=>{i.style.transform=`scale(${l.clientWidth/576})`};new ResizeObserver(d).observe(l),d(),o.querySelectorAll("button[data-e]").forEach(a=>{a.addEventListener("click",()=>n(a.dataset.sys?{sysEvent:{eventType:Number(a.dataset.e)}}:{textEvent:{eventType:Number(a.dataset.e)}}))});let m=null,u=null,f=null,x=!1;async function L(){m=await navigator.mediaDevices.getUserMedia({audio:x?{channelCount:1,echoCancellation:!1,noiseSuppression:!1,autoGainControl:!0}:{channelCount:1,echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0}}),u=new AudioContext;const a=u.createMediaStreamSource(m);f=u.createScriptProcessor(4096,1,1);const c=u.sampleRate/16e3;let g=0;f.onaudioprocess=b=>{const y=b.inputBuffer.getChannelData(0),N=new Int16Array(Math.floor((y.length-g)/c));for(let P=0;P<N.length;P++){const ae=y[Math.floor(g+P*c)]??0;N[P]=Math.max(-32768,Math.min(32767,Math.round(ae*32767)))}g=g+N.length*c-y.length,g<0&&(g=0),n({audioEvent:{audioPcm:new Uint8Array(N.buffer),source:"phone",speakerRole:"unknown"}})},a.connect(f),f.connect(u.destination)}function h(){f?.disconnect(),f=null,m?.getTracks().forEach(a=>a.stop()),m=null,u?.close(),u=null}function w(a){const c=a.containerID;let g=e.get(c);if(!g){const y=document.createElement("div");y.className="pv-box",i.appendChild(y),g={id:c,name:a.containerName,el:y},e.set(c,g)}const b=g.el.style;a.xPosition!==void 0&&(b.left=a.xPosition+"px",b.top=a.yPosition+"px",b.width=a.width+"px",b.height=a.height+"px",b.padding=(a.paddingLength??0)+"px",b.border=a.borderWidth?`${a.borderWidth}px solid ${q[Math.min(4,a.borderColor??4)]}`:"none",b.borderRadius=(a.borderRadius??0)+"px"),(a.textColor!==void 0||!b.color)&&(b.color=q[a.textColor??4]),a.content!==void 0&&(g.el.textContent=a.content)}const C=new Map;function oe(a){const c=document.createElement("div");c.className="pv-imgbox",Object.assign(c.style,{left:a.xPosition+"px",top:a.yPosition+"px",width:a.width+"px",height:a.height+"px"});const g=document.createElement("img");g.className="pv-img",c.appendChild(g),i.appendChild(c),C.set(a.containerID,g)}return{async createStartUpPageContainer(a){for(const c of a.textObject??[])w(c);for(const c of a.imageObject??[])oe(c);return 0},async updateImageRawData(a){const c=C.get(a.containerID);if(!c)return"imageException";const g=a.imageData instanceof Uint8Array?a.imageData:new Uint8Array(a.imageData),b=c.src;return c.src=URL.createObjectURL(new Blob([g],{type:"image/png"})),b.startsWith("blob:")&&URL.revokeObjectURL(b),await new Promise(y=>setTimeout(y,120)),"success"},async textContainerUpgrade(a){return w(a),!0},async audioControl(a){try{return a&&!m&&await L(),a||h(),!0}catch(c){throw console.error(c),new Error("휴대폰 마이크를 쓸 수 없어요. 브라우저 마이크 권한을 허용하고, https 주소로 열었는지 확인하세요.")}},onEvenHubEvent(a){return t.add(a),()=>t.delete(a)},async setRawAudio(a){x!==a&&(x=a,m&&(h(),await L()))},async getLocalStorage(a){try{return localStorage.getItem(a)??""}catch{return""}},async setLocalStorage(a,c){try{return localStorage.setItem(a,c),!0}catch{return!1}},async shutDownPageContainer(){return h(),!0}}}async function pe(){if(await(async()=>{for(let e=0;e<15;e++){if(window.flutter_inappwebview)return!0;await new Promise(n=>setTimeout(n,100))}return!1})()){const{waitForEvenAppBridge:e}=await de(async()=>{const{waitForEvenAppBridge:n}=await import("./dist-DaKccuR9.js");return{waitForEvenAppBridge:n}},[],import.meta.url);return{bridge:await e(),preview:!1}}return{bridge:ue(),preview:!0}}const X=t=>Array.from({length:t},(e,n)=>`${n+1}번`),F={roster:X(15),absent:[],mode:"line",teamA:"청팀",teamB:"백팀",sound:!0,last:{}},O="g2-picker-state";async function me(t){let e="";try{e=t?await t.getLocalStorage(O):""}catch{}if(!e)try{e=localStorage.getItem(O)??""}catch{}try{return{...F,...e?JSON.parse(e):{}}}catch{return{...F}}}async function fe(t,e){const n=JSON.stringify(e);try{t&&await t.setLocalStorage(O,n)}catch{}try{localStorage.setItem(O,n)}catch{}}function ge(t){const e=[];for(let n of t.split(/[\n,\t]+/))n=n.trim().replace(/^\d+\s*[.):\-]\s*/,"").replace(/^\d+\s+/,"").trim(),n&&!e.includes(n)&&e.push(n);return e.slice(0,40)}function J(t){const e=new Uint32Array(1),n=Math.floor(4294967296/t)*t;do crypto.getRandomValues(e);while(e[0]>=n);return e[0]%t}function Y(t){const e=[...t];for(let n=e.length-1;n>0;n--){const o=J(n+1);[e[n],e[o]]=[e[o],e[n]]}return e}function R(t){return t.roster.filter(e=>!t.absent.includes(e))}function he(t,e=t.mode){const n=R(t);if(n.length<2)return null;const o=Y(n);let r;if(e==="line")r={mode:e,at:Date.now(),line:o};else{const i=o.length%2&&J(2)?Math.ceil(o.length/2):Math.floor(o.length/2),l=o.slice(0,i),d=o.slice(i),m=u=>[...u].sort((f,x)=>t.roster.indexOf(f)-t.roster.indexOf(x));r={mode:e,at:Date.now(),teams:[m(l),m(d)]}}return t.last={...t.last,[e]:r},r}const B={line:"줄세우기",teams:"두 팀 나누기"},be={id:1,name:"events"},D={id:2,name:"head"},U={id:3,name:"left"},z={id:4,name:"right"},xe={head:D,left:U,right:z};class ve{constructor(e){this.bridge=e}text=new Map;async init(e,n,o){const r=(i,l,d,m,u,f,x,L=0,h=0)=>new se({xPosition:l,yPosition:d,width:m,height:u,borderWidth:h,borderColor:1,borderRadius:6,paddingLength:6,containerID:i.id,containerName:i.name,content:f||" ",textColor:x,isEventCapture:L});await this.bridge.createStartUpPageContainer(new re({containerTotalNum:4,textObject:[r(be,0,0,576,288," ",0,1),r(D,0,0,576,36,e,2),r(U,0,36,286,252,n,4,0,1),r(z,290,36,286,252,o,4,0,1)]})),this.text.set(D.id,e),this.text.set(U.id,n),this.text.set(z.id,o)}async set(e,n){const o=xe[e];this.text.get(o.id)!==n&&(this.text.set(o.id,n),await this.bridge.textContainerUpgrade(new ie({containerID:o.id,containerName:o.name,content:n||" "})))}}const p=t=>document.querySelector(t);function ye(t,e){Ee(),p("#app").innerHTML=`
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
    </main>`,Q(t),p("#tabs").onclick=n=>{const o=n.target.closest("button[data-mode]");o&&e.mode(o.dataset.mode)},p("#go").onclick=e.shuffle,p("#allIn").onclick=e.allPresent,p("#roster").onclick=n=>{const o=n.target.closest("button[data-name]");o&&e.toggleAbsent(o.dataset.name)},p("#fillNum").onclick=()=>{const n=Math.max(2,Math.min(40,Number(p("#num").value)||15));p("#names").value=X(n).join(`
`)},p("#save").onclick=()=>{const n=ge(p("#names").value);if(n.length<2){we("명단에 두 명 이상 넣어 주세요");return}e.save({roster:n,teamA:p("#teamA").value.trim()||"1팀",teamB:p("#teamB").value.trim()||"2팀",sound:p("#sound").checked}),p("#edit").open=!1},document.addEventListener("focusin",n=>{const o=n.target;o.matches?.("input, textarea")&&setTimeout(()=>o.scrollIntoView({block:"center",behavior:"smooth"}),300)})}function Q(t){p("#names").value=t.roster.join(`
`),p("#teamA").value=t.teamA,p("#teamB").value=t.teamB,p("#sound").checked=t.sound}function we(t){const e=p("#result");e.innerHTML=`<p class="empty err">${k(t)}</p>`}function V(t,e,n=!1){const o=R(t);p("#count").textContent=`${o.length}명 출석${t.absent.length?` · 결석 ${t.absent.length}`:""}`,document.querySelectorAll("#tabs button").forEach(i=>i.classList.toggle("on",i.dataset.mode===t.mode)),p("#go").textContent=e?`다시 ${t.mode==="line"?"줄세우기":"나누기"}`:B[t.mode],p("#go").classList.toggle("spin",n),p("#roster").innerHTML=t.roster.map(i=>`<button data-name="${k(i)}" class="${t.absent.includes(i)?"out":""}">${k(i)}</button>`).join("");const r=p("#result");if(r.classList.toggle("spinning",n),!e){r.innerHTML=`<p class="empty">‘${B[t.mode]}’ 버튼을 누르면<br>출석한 ${o.length}명을 섞어요</p>`;return}if(e.mode==="line")r.innerHTML=`<ol class="line">${e.line.map((i,l)=>`<li><span class="no">${l+1}</span><span class="nm">${k(i)}</span></li>`).join("")}</ol>`;else{const[i,l]=e.teams,d=(m,u,f)=>`
      <div class="team ${f}"><h3>${k(m)}<small>${u.length}명</small></h3>
        <ul>${u.map(x=>`<li>${k(x)}</li>`).join("")}</ul></div>`;r.innerHTML=`<div class="teams">${d(t.teamA,i,"a")}${d(t.teamB,l,"b")}</div>`}}function k(t){return t.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e])}function Ee(){const t=`
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

    .line { list-style:none; margin:0; padding:0; display:grid; grid-template-columns:repeat(3, 1fr); gap:8px; }
    .line li { display:flex; align-items:baseline; gap:8px; background:#111312; border-radius:10px; padding:10px 10px; min-width:0; }
    .line .no { font-size:15px; font-weight:700; color:var(--accent); font-variant-numeric:tabular-nums; min-width:20px; }
    .line .nm { font-size:19px; font-weight:600; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
    .line li:first-child { outline:1.5px solid var(--accent); }

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
    @media (max-width:360px) { .line { grid-template-columns:repeat(2, 1fr); } }
  `,e=document.createElement("style");e.textContent=t,document.head.appendChild(e)}const{bridge:$}=await pe(),s=await me($),S=new ve($),A=()=>fe($,s);function Ce(t){const e=Math.ceil(t.length/2),n=(i,l)=>`${l+1}${l+1<10?"   ":"  "}${i}`,o=t.map(n),r=i=>i.length<=9?i.join(`
`):i.reduce((l,d,m)=>(m%2?l[l.length-1]+="   "+d:l.push(d),l),[]).join(`
`);return[r(o.slice(0,e)),r(o.slice(e))]}function G(t,e){const n=e.length<=8?e.join(`
`):e.reduce((o,r,i)=>(i%2?o[o.length-1]+="   "+r:o.push(r),o),[]).join(`
`);return`${t} ${e.length}명
${n}`}function Z(t,e=!1){const n=R(s).length,o=s.mode==="line"?"두 팀":"줄세우기";if(!t)return{head:`${B[s.mode]} · ${n}명`,left:"탭하면 섞어요",right:`위/아래로 밀면
${o}로 바꿔요`};if(t.mode==="line"){const[l,d]=Ce(t.line);return{head:e?"줄세우기 · 섞는 중...":`줄세우기 · ${t.line.length}명 · 탭 다시 · ↕ ${o}`,left:l,right:d}}const[r,i]=t.teams;return{head:e?"두 팀 · 섞는 중...":`두 팀 · ${r.length} : ${i.length} · 탭 다시 · ↕ ${o}`,left:G(s.teamA,r),right:G(s.teamB,i)}}async function ee(t,e=!1){const n=Z(t,e);await Promise.all([S.set("head",n.head),S.set("left",n.left),S.set("right",n.right)])}function M(){return s.last[s.mode]}function T(t=!1){V(s,M(),t),ee(M(),t)}let E=null;function _(t,e,n=.06,o=.18){if(!E)return;const r=E.createOscillator(),i=E.createGain();r.frequency.value=t,i.gain.setValueAtTime(1e-4,e),i.gain.exponentialRampToValueAtTime(o,e+.01),i.gain.exponentialRampToValueAtTime(1e-4,e+n),r.connect(i).connect(E.destination),r.start(e),r.stop(e+n+.02)}function K(t){if(s.sound)try{E??=new AudioContext;const e=E.currentTime;t==="tick"?_(660,e):(_(784,e,.12,.25),_(1047,e+.12,.22,.25))}catch{}}document.addEventListener("pointerdown",()=>{try{E??=new AudioContext,E.resume()}catch{}},{once:!0});let I=!1;async function te(){if(I)return;const t=R(s);if(t.length<2){S.set("head","출석한 사람이 두 명 이상 있어야 해요"),V(s,M());return}I=!0;try{const e=s.mode;for(let n=0;n<4;n++){const o=Y(t),r=e==="line"?{mode:e,at:0,line:o}:{mode:e,at:0,teams:[o.slice(0,Math.floor(o.length/2)),o.slice(Math.floor(o.length/2))]};K("tick"),V(s,r,!0),await Promise.all([ee(r,!0),new Promise(i=>setTimeout(i,110))])}he(s,e),K("done");try{navigator.vibrate?.(40)}catch{}T(),await A()}finally{I=!1}}function ne(t){s.mode!==t&&(s.mode=t,T(),A())}ye(s,{mode:ne,shuffle:()=>void te(),toggleAbsent:t=>{s.absent=s.absent.includes(t)?s.absent.filter(e=>e!==t):[...s.absent,t],s.last={},T(),A()},allPresent:()=>{s.absent=[],s.last={},T(),A()},save:t=>{const e=t.roster&&t.roster.join(`
`)!==s.roster.join(`
`);Object.assign(s,t),e&&(s.absent=s.absent.filter(n=>s.roster.includes(n)),s.last={}),Q(s),T(),A()}});const j=Z(M());await S.init(j.head,j.left,j.right);T();function W(t){return t?t.eventType??v.CLICK_EVENT:null}const ke=$.onEvenHubEvent(t=>{switch(W(t.textEvent)??W(t.sysEvent)){case v.CLICK_EVENT:case v.LONG_PRESS_EVENT:te();break;case v.SCROLL_TOP_EVENT:case v.SCROLL_BOTTOM_EVENT:ne(s.mode==="line"?"teams":"line");break;case v.DOUBLE_CLICK_EVENT:$.shutDownPageContainer(1);break;case v.SYSTEM_EXIT_EVENT:case v.ABNORMAL_EXIT_EVENT:ke();break}});
