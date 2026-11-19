import{OsEventTypeList as x,TextContainerProperty as ke,ImageContainerProperty as te,CreateStartUpPageContainer as Ee,RebuildPageContainer as Ce,TextContainerUpgrade as Te,ImageRawDataUpdate as $e}from"./dist-DaKccuR9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();const Pe="modulepreload",Le=function(e,t){return new URL(e,t).href},ne={},Se=function(t,n,o){let i=Promise.resolve();if(n&&n.length>0){const l=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),p=c?.nonce||c?.getAttribute("nonce");i=Promise.allSettled(n.map(d=>{if(d=Le(d,o),d in ne)return;ne[d]=!0;const g=d.endsWith(".css"),v=g?'[rel="stylesheet"]':"";if(!!o)for(let w=l.length-1;w>=0;w--){const E=l[w];if(E.href===d&&(!g||E.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${v}`))return;const h=document.createElement("link");if(h.rel=g?"stylesheet":Pe,g||(h.as="script"),h.crossOrigin="",h.href=d,p&&h.setAttribute("nonce",p),document.head.appendChild(h),g)return new Promise((w,E)=>{h.addEventListener("load",w),h.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${d}`)))})}))}function a(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return i.then(l=>{for(const c of l||[])c.status==="rejected"&&a(c.reason);return t().catch(a)})},oe=["#1c5a1f","#24782a","#2fa236","#36cf3e","#3CFA44"];function Oe(){const e=new Set,t=new Map,n=r=>e.forEach(u=>u(r)),o=document.createElement("section");o.className="pv",o.innerHTML=`
    <div class="pv-badge">미리보기 · 안경 화면</div>
    <div class="pv-frame"><div class="pv-screen"></div></div>
    <div class="pv-btns">
      <button data-e="${x.SCROLL_BOTTOM_EVENT}">↓ 모드 바꾸기</button>
      <button data-e="${x.CLICK_EVENT}">탭 (섞기)</button>
      <button data-e="${x.LONG_PRESS_EVENT}" data-sys="1">길게 누르기</button>
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
    .pv-btns button:active { background:#3CFA44; color:#111; }`,document.head.appendChild(i),document.body.prepend(o);const a=o.querySelector(".pv-screen"),l=o.querySelector(".pv-frame"),c=()=>{a.style.transform=`scale(${l.clientWidth/576})`};new ResizeObserver(c).observe(l),c(),o.querySelectorAll("button[data-e]").forEach(r=>{r.addEventListener("click",()=>n(r.dataset.sys?{sysEvent:{eventType:Number(r.dataset.e)}}:{textEvent:{eventType:Number(r.dataset.e)}}))});let p=null,d=null,g=null,v=!1;async function O(){p=await navigator.mediaDevices.getUserMedia({audio:v?{channelCount:1,echoCancellation:!1,noiseSuppression:!1,autoGainControl:!0}:{channelCount:1,echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0}}),d=new AudioContext;const r=d.createMediaStreamSource(p);g=d.createScriptProcessor(4096,1,1);const u=d.sampleRate/16e3;let f=0;g.onaudioprocess=b=>{const k=b.inputBuffer.getChannelData(0),_=new Int16Array(Math.floor((k.length-f)/u));for(let B=0;B<_.length;B++){const we=k[Math.floor(f+B*u)]??0;_[B]=Math.max(-32768,Math.min(32767,Math.round(we*32767)))}f=f+_.length*u-k.length,f<0&&(f=0),n({audioEvent:{audioPcm:new Uint8Array(_.buffer),source:"phone",speakerRole:"unknown"}})},r.connect(g),g.connect(d.destination)}function h(){g?.disconnect(),g=null,p?.getTracks().forEach(r=>r.stop()),p=null,d?.close(),d=null}function w(r){const u=r.containerID;let f=t.get(u);if(!f){const k=document.createElement("div");k.className="pv-box",a.appendChild(k),f={id:u,name:r.containerName,el:k},t.set(u,f)}const b=f.el.style;r.xPosition!==void 0&&(b.left=r.xPosition+"px",b.top=r.yPosition+"px",b.width=r.width+"px",b.height=r.height+"px",b.padding=(r.paddingLength??0)+"px",b.border=r.borderWidth?`${r.borderWidth}px solid ${oe[Math.min(4,r.borderColor??4)]}`:"none",b.borderRadius=(r.borderRadius??0)+"px"),(r.textColor!==void 0||!b.color)&&(b.color=oe[r.textColor??4]),r.content!==void 0&&(f.el.textContent=r.content)}const E=new Map;function ee(r){const u=document.createElement("div");u.className="pv-imgbox",Object.assign(u.style,{left:r.xPosition+"px",top:r.yPosition+"px",width:r.width+"px",height:r.height+"px"});const f=document.createElement("img");f.className="pv-img",u.appendChild(f),a.appendChild(u),E.set(r.containerID,f)}return{async createStartUpPageContainer(r){for(const u of r.textObject??[])w(u);for(const u of r.imageObject??[])ee(u);return 0},async rebuildPageContainer(r){a.innerHTML="",t.clear(),E.clear();for(const u of r.textObject??[])w(u);for(const u of r.imageObject??[])ee(u);return!0},async updateImageRawData(r){const u=E.get(r.containerID);if(!u)return"imageException";const f=r.imageData instanceof Uint8Array?r.imageData:new Uint8Array(r.imageData),b=u.src;return u.src=URL.createObjectURL(new Blob([f],{type:"image/png"})),b.startsWith("blob:")&&URL.revokeObjectURL(b),await new Promise(k=>setTimeout(k,120)),"success"},async textContainerUpgrade(r){return w(r),!0},async audioControl(r){try{return r&&!p&&await O(),r||h(),!0}catch(u){throw console.error(u),new Error("휴대폰 마이크를 쓸 수 없어요. 브라우저 마이크 권한을 허용하고, https 주소로 열었는지 확인하세요.")}},onEvenHubEvent(r){return e.add(r),()=>e.delete(r)},async setRawAudio(r){v!==r&&(v=r,p&&(h(),await O()))},async getLocalStorage(r){try{return localStorage.getItem(r)??""}catch{return""}},async setLocalStorage(r,u){try{return localStorage.setItem(r,u),!0}catch{return!1}},async shutDownPageContainer(){return h(),!0}}}async function Ne(){if(await(async()=>{for(let t=0;t<15;t++){if(window.flutter_inappwebview)return!0;await new Promise(n=>setTimeout(n,100))}return!1})()){const{waitForEvenAppBridge:t}=await Se(async()=>{const{waitForEvenAppBridge:n}=await import("./dist-DaKccuR9.js");return{waitForEvenAppBridge:n}},[],import.meta.url);return{bridge:await t(),preview:!1}}return{bridge:Oe(),preview:!0}}const ue=e=>Array.from({length:e},(t,n)=>`${n+1}번`),U="".split("|").map(e=>e.trim()).filter(Boolean),ie={roster:U.length?U:ue(15),absent:[],mode:"line",teamA:"청팀",teamB:"백팀",sound:!0,last:{},picked:[]},z="g2-picker-state";async function Ae(e){let t="";try{t=e?await e.getLocalStorage(z):""}catch{}if(!t)try{t=localStorage.getItem(z)??""}catch{}let n;try{n={...ie,...t?JSON.parse(t):{}}}catch{n={...ie}}return U.length&&n.roster.every(o=>/^\d+번$/.test(o))&&(n={...n,roster:U,absent:[],last:{}}),n}async function Ie(e,t){const n=JSON.stringify(t);try{e&&await e.setLocalStorage(z,n)}catch{}try{localStorage.setItem(z,n)}catch{}}function Me(e){const t=[];for(let n of e.split(/[\n,\t]+/))n=n.trim().replace(/^\d+\s*[.):\-]\s*/,"").replace(/^\d+\s+/,"").trim(),n&&!t.includes(n)&&t.push(n);return t.slice(0,40)}function X(e){const t=new Uint32Array(1),n=Math.floor(4294967296/e)*e;do crypto.getRandomValues(t);while(t[0]>=n);return t[0]%e}function pe(e){const t=[...e];for(let n=t.length-1;n>0;n--){const o=X(n+1);[t[n],t[o]]=[t[o],t[n]]}return t}function R(e){return e.roster.filter(t=>!e.absent.includes(t))}function Re(e,t=e.mode){const n=R(e);if(t==="pick"){if(!n.length)return null;let a=n.filter(d=>!e.picked.includes(d)),l=!1;a.length||(e.picked=[],a=n,l=!0);const c=a[X(a.length)];e.picked=[...e.picked.filter(d=>n.includes(d)),c];const p={mode:t,at:Date.now(),pick:c,left:n.filter(d=>!e.picked.includes(d)).length,newRound:l};return e.last={...e.last,pick:p},p}if(n.length<2)return null;const o=pe(n);let i;if(t==="line")i={mode:t,at:Date.now(),line:o};else{const a=o.length%2&&X(2)?Math.ceil(o.length/2):Math.floor(o.length/2),l=o.slice(0,a),c=o.slice(a),p=d=>[...d].sort((g,v)=>e.roster.indexOf(g)-e.roster.indexOf(v));i={mode:t,at:Date.now(),teams:[p(l),p(c)]}}return e.last={...e.last,[t]:i},i}const V={line:"줄세우기",teams:"두 팀 나누기",pick:"한 명 뽑기"},y=["line","teams","pick"];function I(e){return R(e).filter(t=>!e.picked.includes(t))}const T=288,C=144,D=T*2,ae=e=>`800 ${e}px -apple-system, "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", sans-serif`;async function me(e){const t=document.createElement("canvas");t.width=D,t.height=C;const n=t.getContext("2d");n.fillStyle="#000",n.fillRect(0,0,D,C);let o=124;for(n.font=ae(o);o>30&&n.measureText(e).width>D-24;)o-=4,n.font=ae(o);n.fillStyle="#fff",n.textAlign="center",n.textBaseline="middle",n.fillText(e,D/2,C/2+o*.04);const i=a=>new Promise((l,c)=>{const p=document.createElement("canvas");p.width=T,p.height=C,p.getContext("2d").drawImage(t,a,0,T,C,0,0,T,C),p.toBlob(async d=>d?l(new Uint8Array(await d.arrayBuffer())):c(new Error("toBlob failed")),"image/png")});return[await i(0),await i(T)]}const re={id:1,name:"events"},Y={id:2,name:"head"},fe={id:3,name:"left"},ge={id:4,name:"right"},he={id:5,name:"full"},be={id:6,name:"bottom"},H={id:7,name:"imgl"},F={id:8,name:"imgr"},se={head:Y,left:fe,right:ge,full:he,bottom:be},le=64;class _e{constructor(t){this.bridge=t}text=new Map;layout=null;imgKey="";pendingImg=null;imgBusy=!1;chain=Promise.resolve();t(t,n,o,i,a,l,c,p=0){return new ke({xPosition:n,yPosition:o,width:i,height:a,borderWidth:0,borderColor:0,paddingLength:6,containerID:t.id,containerName:t.name,content:l||" ",textColor:c,isEventCapture:p})}show(t,n){return this.chain=this.chain.then(()=>this.apply(t,n)).catch(o=>console.error(o)),this.chain}async apply(t,n){if(this.layout!==t){const o=c=>n[c]??"",i=t==="text"?[this.t(re,0,0,576,288," ",0,1),this.t(Y,0,0,576,36,o("head"),2),this.t(he,0,36,576,252,o("full"),4),this.t(fe,0,36,286,252,o("left"),4),this.t(ge,290,36,286,252,o("right"),4)]:[this.t(re,0,0,576,288," ",0,1),this.t(Y,0,0,576,40,o("head"),2),this.t(be,0,230,576,58,o("bottom"),2)],a=t==="pick"?[new te({xPosition:0,yPosition:le,width:T,height:C,containerID:H.id,containerName:H.name}),new te({xPosition:T,yPosition:le,width:T,height:C,containerID:F.id,containerName:F.name})]:[],l={containerTotalNum:i.length+a.length,textObject:i,imageObject:a};this.layout===null?await this.bridge.createStartUpPageContainer(new Ee(l)):await this.bridge.rebuildPageContainer(new Ce(l)),this.layout=t,this.text.clear(),this.imgKey="";for(const c of Object.keys(n))this.text.set(se[c].id,n[c]??"");return}await Promise.all(Object.keys(n).map(o=>this.set(o,n[o]??"")))}async set(t,n){const o=se[t];this.text.get(o.id)!==n&&(this.text.set(o.id,n),await this.bridge.textContainerUpgrade(new Te({containerID:o.id,containerName:o.name,content:n||" "})))}setImage(t,n){this.imgKey===t&&!this.pendingImg||(this.pendingImg={key:t,make:n},this.pump())}async pump(){if(!this.imgBusy){this.imgBusy=!0;try{for(;this.pendingImg;){await this.chain;const t=this.pendingImg;if(this.pendingImg=null,this.layout!=="pick"||this.imgKey===t.key)continue;const[n,o]=await t.make();for(const[i,a]of[[H,n],[F,o]])await this.bridge.updateImageRawData(new $e({containerID:i.id,containerName:i.name,imageData:a}));this.imgKey=t.key}}catch(t){console.error("image update failed",t)}finally{this.imgBusy=!1}}}}const m=e=>document.querySelector(e);function Be(e,t){je(),m("#app").innerHTML=`
    <main>
      <header>
        <span class="brand">Class Shuffle</span>
        <span id="count" class="chip"></span>
      </header>

      <nav class="tabs" id="tabs">
        <button data-mode="line">줄세우기</button>
        <button data-mode="teams">두 팀</button>
        <button data-mode="pick">한 명 뽑기</button>
      </nav>

      <section id="result" class="result"></section>

      <button class="go" id="go">섞기</button>
      <button class="link center" id="resetPicks" hidden>처음부터 다시 뽑기 (뽑힌 기록 지우기)</button>

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
        <p class="hint">안경: 탭 = 섞기·뽑기 · 위/아래 스와이프 = 모드 바꾸기 · 한 명 뽑기에서 길게 누르기 = 처음부터 · 두 번 탭 = 종료</p>
      </details>
    </main>`,xe(e),m("#tabs").onclick=n=>{const o=n.target.closest("button[data-mode]");o&&t.mode(o.dataset.mode)},m("#go").onclick=t.shuffle,m("#allIn").onclick=t.allPresent,m("#resetPicks").onclick=t.resetPicks,m("#roster").onclick=n=>{const o=n.target.closest("button[data-name]");o&&t.toggleAbsent(o.dataset.name)},m("#fillNum").onclick=()=>{const n=Math.max(2,Math.min(40,Number(m("#num").value)||15));m("#names").value=ue(n).join(`
`)},m("#save").onclick=()=>{const n=Me(m("#names").value);if(n.length<2){De("명단에 두 명 이상 넣어 주세요");return}t.save({roster:n,teamA:m("#teamA").value.trim()||"1팀",teamB:m("#teamB").value.trim()||"2팀",sound:m("#sound").checked}),m("#edit").open=!1},document.addEventListener("focusin",n=>{const o=n.target;o.matches?.("input, textarea")&&setTimeout(()=>o.scrollIntoView({block:"center",behavior:"smooth"}),300)})}function xe(e){m("#names").value=e.roster.join(`
`),m("#teamA").value=e.teamA,m("#teamB").value=e.teamB,m("#sound").checked=e.sound}function De(e){const t=m("#result");t.innerHTML=`<p class="empty err">${P(e)}</p>`}function j(e,t,n=!1){const o=R(e);m("#count").textContent=`${o.length}명 출석${e.absent.length?` · 결석 ${e.absent.length}`:""}`,document.querySelectorAll("#tabs button").forEach(c=>c.classList.toggle("on",c.dataset.mode===e.mode));const i={line:"다시 줄세우기",teams:"다시 나누기",pick:"한 명 더 뽑기"}[e.mode];m("#go").textContent=t?i:e.mode==="pick"?"한 명 뽑기":V[e.mode],m("#resetPicks").hidden=e.mode!=="pick"||!e.picked.length,m("#go").classList.toggle("spin",n);const a=e.mode==="pick";m("#roster").innerHTML=e.roster.map(c=>{const p=e.absent.includes(c)?"out":a&&e.picked.includes(c)?"picked":"";return`<button data-name="${P(c)}" class="${p}">${P(c)}</button>`}).join("");const l=m("#result");if(l.classList.toggle("spinning",n),!t){l.innerHTML=e.mode==="pick"?`<p class="empty">‘한 명 뽑기’를 누르면<br>아직 안 뽑힌 ${I(e).length}명 중 한 명을 뽑아요</p>`:`<p class="empty">‘${V[e.mode]}’ 버튼을 누르면<br>출석한 ${o.length}명을 섞어요</p>`;return}if(t.mode==="pick")l.innerHTML=`<div class="pick"><div class="big">${P(t.pick)}</div>
      <p>${n?"뽑는 중…":`${t.newRound?"모두 한 번씩 뽑혀서 새로 시작했어요 · ":""}아직 안 뽑힌 ${I(e).length}명`}</p></div>`;else if(t.mode==="line")l.innerHTML=`<ol class="line">${t.line.map((c,p)=>`<li><span class="no">${p+1}</span><span class="nm">${P(c)}</span></li>`).join("")}</ol>`;else{const[c,p]=t.teams,d=(g,v,O)=>`
      <div class="team ${O}"><h3>${P(g)}<small>${v.length}명</small></h3>
        <ul>${v.map(h=>`<li>${P(h)}</li>`).join("")}</ul></div>`;l.innerHTML=`<div class="teams">${d(e.teamA,c,"a")}${d(e.teamB,p,"b")}</div>`}}function P(e){return e.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t])}function je(){const e=`
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

    .tabs { display:grid; grid-template-columns:1fr 1fr 1fr; background:var(--card); border-radius:14px; padding:4px; gap:4px; }
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

    .pick { height:188px; display:flex; flex-direction:column; align-items:center; justify-content:center; }
    .pick .big { font-size:64px; font-weight:800; letter-spacing:-.02em; line-height:1.1; color:var(--accent); }
    .result.spinning .pick .big { color:var(--text); }
    .pick p { margin:12px 0 0; color:var(--mute); font-size:15px; }
    .roster button.picked { color:var(--accent); border-color:var(--accent); }
    .link.center { align-self:center; background:transparent; border:0; color:var(--mute); font-size:14px; padding:4px; text-decoration:underline; }
    .link.center[hidden] { display:none; }
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
  `,t=document.createElement("style");t.textContent=e,document.head.appendChild(t)}const{bridge:M}=await Ne(),s=await Ae(M),G=new _e(M),S=()=>Ie(M,s);function Ue(e){const t=e.length<=16?4:e.length<=25?5:6,n=[];return e.forEach((o,i)=>{const a=`${i+1} ${o}`;i%t===0?n.push(a):n[n.length-1]+=`   ${a}`}),n.join(`
`)}function ce(e,t){const n=t.length<=8?t.join(`
`):t.reduce((o,i,a)=>(a%2?o[o.length-1]+="   "+i:o.push(i),o),[]).join(`
`);return`${e} ${t.length}명
${n}`}const N=e=>V[y[(y.indexOf(e)+1)%y.length]];function ve(e,t=!1,n=""){const o=R(s).length;if(s.mode==="pick"){const l=I(s).length;return{layout:"pick",screen:{head:t?`한 명 뽑기 · 뽑는 중...  ${n}`:`한 명 뽑기 · 아직 안 뽑힌 ${l}명`,bottom:e?`${e.newRound?`모두 한 번씩 뽑혀서 새로 시작했어요
`:""}탭 다시 뽑기 · 길게 처음부터 · ↕ ${N("pick")}`:`탭하면 출석한 ${o}명 중 한 명을 뽑아요
길게 누르면 처음부터 · ↕ ${N("pick")}`}}}if(!e)return{layout:"text",screen:{head:`${V[s.mode]} · ${o}명`,full:`탭하면 섞어요
위/아래로 밀면 ${N(s.mode)}로 바꿔요`,left:"",right:""}};if(e.mode==="line")return{layout:"text",screen:{head:t?"줄세우기 · 섞는 중...":`줄세우기 · ${e.line.length}명 · 앞에서부터 · 탭 다시 · ↕ ${N("line")}`,full:Ue(e.line),left:"",right:""}};const[i,a]=e.teams;return{layout:"text",screen:{head:t?"두 팀 · 섞는 중...":`두 팀 · ${i.length} : ${a.length} · 탭 다시 · ↕ ${N("teams")}`,left:ce(s.teamA,i),right:ce(s.teamB,a),full:""}}}async function J(e,t=!1,n=""){const o=ve(e,t,n),i=G.show(o.layout,o.screen);if(o.layout==="pick"&&!t){const a=e?.pick??"?";G.setImage(`${a}|${e?.at??0}`,()=>me(a))}await i}function A(){return s.last[s.mode]}function L(e=!1){j(s,A(),e),J(A(),e)}let $=null;function K(e,t,n=.06,o=.18){if(!$)return;const i=$.createOscillator(),a=$.createGain();i.frequency.value=e,a.gain.setValueAtTime(1e-4,t),a.gain.exponentialRampToValueAtTime(o,t+.01),a.gain.exponentialRampToValueAtTime(1e-4,t+n),i.connect(a).connect($.destination),i.start(t),i.stop(t+n+.02)}function q(e){if(s.sound)try{$??=new AudioContext;const t=$.currentTime;e==="tick"?K(660,t):(K(784,t,.12,.25),K(1047,t+.12,.22,.25))}catch{}}document.addEventListener("pointerdown",()=>{try{$??=new AudioContext,$.resume()}catch{}},{once:!0});let W=!1;async function Q(){if(W)return;const e=R(s),t=s.mode==="pick"?1:2;if(e.length<t){G.show(ve(A()).layout,{head:`출석한 사람이 ${t}명 이상 있어야 해요`}),j(s,A());return}W=!0;try{const n=s.mode;if(n==="pick"){G.setImage("?|spin",()=>me("?"));const o=I(s).length?I(s):e;for(let i=0;i<8;i++){const a=o[Math.floor(Math.random()*o.length)];q("tick"),j(s,{mode:n,at:0,pick:a,left:o.length},!0),await Promise.all([J(A(),!0,a),new Promise(l=>setTimeout(l,90+i*15))])}}else for(let o=0;o<4;o++){const i=pe(e),a=n==="line"?{mode:n,at:0,line:i}:{mode:n,at:0,teams:[i.slice(0,Math.floor(i.length/2)),i.slice(Math.floor(i.length/2))]};q("tick"),j(s,a,!0),await Promise.all([J(a,!0),new Promise(l=>setTimeout(l,110))])}Re(s,n),q("done");try{navigator.vibrate?.(40)}catch{}L(),await S()}finally{W=!1}}function ye(){s.picked=[],s.last={...s.last,pick:void 0},L(),S()}function Z(e){s.mode!==e&&(s.mode=e,L(),S())}Be(s,{mode:Z,shuffle:()=>void Q(),toggleAbsent:e=>{s.absent=s.absent.includes(e)?s.absent.filter(t=>t!==e):[...s.absent,e],s.last={},L(),S()},allPresent:()=>{s.absent=[],s.last={},L(),S()},resetPicks:ye,save:e=>{const t=e.roster&&e.roster.join(`
`)!==s.roster.join(`
`);Object.assign(s,e),t&&(s.absent=s.absent.filter(n=>s.roster.includes(n)),s.last={}),xe(s),L(),S()}});L();function de(e){return e?e.eventType??x.CLICK_EVENT:null}const ze=M.onEvenHubEvent(e=>{switch(de(e.textEvent)??de(e.sysEvent)){case x.CLICK_EVENT:Q();break;case x.LONG_PRESS_EVENT:s.mode==="pick"?ye():Q();break;case x.SCROLL_TOP_EVENT:Z(y[(y.indexOf(s.mode)+y.length-1)%y.length]);break;case x.SCROLL_BOTTOM_EVENT:Z(y[(y.indexOf(s.mode)+1)%y.length]);break;case x.DOUBLE_CLICK_EVENT:M.shutDownPageContainer(1);break;case x.SYSTEM_EXIT_EVENT:case x.ABNORMAL_EXIT_EVENT:ze();break}});
