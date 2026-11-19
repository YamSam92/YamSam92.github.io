import{OsEventTypeList as m,TextContainerProperty as Pe,CreateStartUpPageContainer as Ie,TextContainerUpgrade as qe,AudioInputSource as ce}from"./dist-DaKccuR9.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();const Ve="modulepreload",Ke=function(t,e){return new URL(t,e).href},ue={},je=function(e,n,o){let s=Promise.resolve();if(n&&n.length>0){const r=document.getElementsByTagName("link"),u=document.querySelector("meta[property=csp-nonce]"),f=u?.nonce||u?.getAttribute("nonce");s=Promise.allSettled(n.map(d=>{if(d=Ke(d,o),d in ue)return;ue[d]=!0;const l=d.endsWith(".css"),h=l?'[rel="stylesheet"]':"";if(!!o)for(let C=r.length-1;C>=0;C--){const v=r[C];if(v.href===d&&(!l||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${h}`))return;const b=document.createElement("link");if(b.rel=l?"stylesheet":Ve,l||(b.as="script"),b.crossOrigin="",b.href=d,f&&b.setAttribute("nonce",f),document.head.appendChild(b),l)return new Promise((C,v)=>{b.addEventListener("load",C),b.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${d}`)))})}))}function a(r){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=r,window.dispatchEvent(u),!u.defaultPrevented)throw r}return s.then(r=>{for(const u of r||[])u.status==="rejected"&&a(u.reason);return e().catch(a)})},pe=["#1c5a1f","#24782a","#2fa236","#36cf3e","#3CFA44"];function Be(){const t=new Set,e=new Map,n=c=>t.forEach(y=>y(c)),o=document.createElement("section");o.className="pv",o.innerHTML=`
    <div class="pv-badge">미리보기 · 안경 화면</div>
    <div class="pv-frame"><div class="pv-screen"></div></div>
    <div class="pv-btns">
      <button data-e="${m.SCROLL_TOP_EVENT}">↑ 이전</button>
      <button data-e="${m.CLICK_EVENT}">탭 (일시정지)</button>
      <button data-e="${m.SCROLL_BOTTOM_EVENT}">↓ 최신</button>
    </div>
    <div class="pv-btns">
      <button data-e="${m.LONG_PRESS_EVENT}" data-sys="1">길게 누르기 (언어)</button>
      <button data-e="${m.DOUBLE_CLICK_EVENT}">두 번 탭</button>
    </div>`;const s=document.createElement("style");s.textContent=`
    .pv { max-width:640px; margin:0 auto; padding:16px 16px 0; }
    .pv-badge { font:600 12px/1 system-ui; color:#3CFA44; letter-spacing:.04em; margin-bottom:8px; }
    .pv-frame { width:100%; aspect-ratio:2/1; background:#000; border-radius:14px; overflow:hidden;
      border:1px solid #2a2a2a; position:relative; }
    .pv-screen { position:absolute; left:0; top:0; width:576px; height:288px; transform-origin:0 0; }
    .pv-box { position:absolute; box-sizing:border-box; overflow:hidden; white-space:pre-wrap; word-break:break-word;
      font: 20px/1.3 -apple-system, 'Apple SD Gothic Neo', 'Noto Sans KR', system-ui, sans-serif; }
    .pv-btns { display:flex; gap:8px; margin-top:8px; }
    .pv-btns button { flex:1; font:600 15px system-ui; padding:12px 6px; border-radius:10px; border:1px solid #3a3a3a;
      background:#262626; color:#e5e5e5; }
    .pv-btns button:active { background:#3CFA44; color:#111; }`,document.head.appendChild(s),document.body.prepend(o);const a=o.querySelector(".pv-screen"),r=o.querySelector(".pv-frame"),u=()=>{a.style.transform=`scale(${r.clientWidth/576})`};new ResizeObserver(u).observe(r),u(),o.querySelectorAll("button[data-e]").forEach(c=>{c.addEventListener("click",()=>n(c.dataset.sys?{sysEvent:{eventType:Number(c.dataset.e)}}:{textEvent:{eventType:Number(c.dataset.e)}}))});let f=null,d=null,l=null,h=!1;async function E(){f=await navigator.mediaDevices.getUserMedia({audio:h?{channelCount:1,echoCancellation:!1,noiseSuppression:!1,autoGainControl:!0}:{channelCount:1,echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0}}),d=new AudioContext;const c=d.createMediaStreamSource(f);l=d.createScriptProcessor(4096,1,1);const y=d.sampleRate/16e3;let S=0;l.onaudioprocess=$=>{const R=$.inputBuffer.getChannelData(0),G=new Int16Array(Math.floor((R.length-S)/y));for(let H=0;H<G.length;H++){const Re=R[Math.floor(S+H*y)]??0;G[H]=Math.max(-32768,Math.min(32767,Math.round(Re*32767)))}S=S+G.length*y-R.length,S<0&&(S=0),n({audioEvent:{audioPcm:new Uint8Array(G.buffer),source:"phone",speakerRole:"unknown"}})},c.connect(l),l.connect(d.destination)}function b(){l?.disconnect(),l=null,f?.getTracks().forEach(c=>c.stop()),f=null,d?.close(),d=null}function C(c){const y=c.containerID;let S=e.get(y);if(!S){const R=document.createElement("div");R.className="pv-box",a.appendChild(R),S={id:y,name:c.containerName,el:R},e.set(y,S)}const $=S.el.style;c.xPosition!==void 0&&($.left=c.xPosition+"px",$.top=c.yPosition+"px",$.width=c.width+"px",$.height=c.height+"px",$.padding=(c.paddingLength??0)+"px",$.border=c.borderWidth?`${c.borderWidth}px solid ${pe[Math.min(4,c.borderColor??4)]}`:"none",$.borderRadius=(c.borderRadius??0)+"px"),(c.textColor!==void 0||!$.color)&&($.color=pe[c.textColor??4]),c.content!==void 0&&(S.el.textContent=c.content)}return{async createStartUpPageContainer(c){for(const y of c.textObject??[])C(y);return 0},async textContainerUpgrade(c){return C(c),!0},async audioControl(c){try{return c&&!f&&await E(),c||b(),!0}catch(y){throw console.error(y),new Error("휴대폰 마이크를 쓸 수 없어요. 브라우저 마이크 권한을 허용하고, https 주소로 열었는지 확인하세요.")}},onEvenHubEvent(c){return t.add(c),()=>t.delete(c)},async setRawAudio(c){h!==c&&(h=c,f&&(b(),await E()))},async getLocalStorage(c){try{return localStorage.getItem(c)??""}catch{return""}},async setLocalStorage(c,y){try{return localStorage.setItem(c,y),!0}catch{return!1}},async shutDownPageContainer(){return b(),!0}}}async function De(){if(await(async()=>{for(let e=0;e<15;e++){if(window.flutter_inappwebview)return!0;await new Promise(n=>setTimeout(n,100))}return!1})()){const{waitForEvenAppBridge:e}=await je(async()=>{const{waitForEvenAppBridge:n}=await import("./dist-DaKccuR9.js");return{waitForEvenAppBridge:n}},[],import.meta.url);return{bridge:await e(),preview:!1}}return{bridge:Be(),preview:!0}}const J=t=>({speaker:"them",translation:"",replies:[],cue:"",lookup:"",...t});J({translation:"오랜만이에요! 어떻게 지냈어요?",replies:[{text:"Pretty good! Busy with work. You?",pron:"",gloss:"잘 지냈어요, 바빴어요"},{text:"It's been ages! I'm doing great.",pron:"",gloss:"정말 오랜만, 잘 지내요"},{text:"Not bad. What have you been up to?",pron:"",gloss:"괜찮아요, 뭐 하고 지냈어요?"}]}),J({speaker:"me",translation:"I'm teaching kids at an elementary school."}),J({translation:"좋네요! 그나저나 오늘 테슬라 주가 봤어요? 엄청 올랐더라고요.",cue:"through the roof: 급등하다, 치솟다",lookup:"Tesla stock price today",replies:[{text:"No way! How much did it go up?",pron:"",gloss:"정말요? 얼마나 올랐어요?"},{text:"I saw that. Do you own any?",pron:"",gloss:"봤어요. 갖고 있어요?"},{text:"I don't follow stocks much.",pron:"",gloss:"주식은 잘 안 봐요"}]}),J({translation:"점심 먹으러 갈까 하는데 같이 갈래요? 근처에 새로 생긴 데가 있어요.",replies:[{text:"Sure, I'd love to! What kind of food?",pron:"",gloss:"좋아요! 무슨 음식이에요?"},{text:"Sounds good. Give me five minutes.",pron:"",gloss:"좋아요, 5분만요"},{text:"Sorry, I already ate. Maybe next time?",pron:"",gloss:"이미 먹었어요, 다음에요"}]});const q=[{code:"ko",tag:"KO",ko:"한국어",en:"Korean",latin:!1,aliases:["한국어","한국말","한글","코리안"]},{code:"en",tag:"EN",ko:"영어",en:"English",latin:!0,aliases:["영어","잉글리시","잉글리쉬","영어로"]},{code:"ja",tag:"JP",ko:"일본어",en:"Japanese",latin:!1,aliases:["일본어","일어","일본말","재패니즈"]},{code:"zh",tag:"CN",ko:"중국어",en:"Chinese (Mandarin)",latin:!1,aliases:["중국어","중국말","만다린","차이니즈"]},{code:"es",tag:"ES",ko:"스페인어",en:"Spanish",latin:!0,aliases:["스페인어","스페인말","스패니시"]},{code:"fr",tag:"FR",ko:"프랑스어",en:"French",latin:!0,aliases:["프랑스어","불어","프렌치"]},{code:"de",tag:"DE",ko:"독일어",en:"German",latin:!0,aliases:["독일어","독어","저먼"]},{code:"it",tag:"IT",ko:"이탈리아어",en:"Italian",latin:!0,aliases:["이탈리아어","이태리어"]},{code:"pt",tag:"PT",ko:"포르투갈어",en:"Portuguese",latin:!0,aliases:["포르투갈어","포르투칼어"]},{code:"ru",tag:"RU",ko:"러시아어",en:"Russian",latin:!1,aliases:["러시아어","노어"]},{code:"vi",tag:"VN",ko:"베트남어",en:"Vietnamese",latin:!0,aliases:["베트남어","베트남말"]},{code:"th",tag:"TH",ko:"태국어",en:"Thai",latin:!1,aliases:["태국어","태국말"]},{code:"id",tag:"ID",ko:"인도네시아어",en:"Indonesian",latin:!0,aliases:["인도네시아어","인니어"]}],M=t=>q.find(e=>e.code===t)??q[1],Fe=/(모드|번역|바꿔|바꾸|변경|설정|전환|에서|으로|로$|로\s)/;function Ue(t,e){const n=t.replace(/[.,!?~"'·]/g," ").trim();if(n.replace(/\s/g,"").length>22)return null;const o=n.replace(/\s/g,"").toLowerCase();if(/(tv|티비|티브이|자막)모드/.test(o))return{mode:"tv"};if(/(대화|회화)모드/.test(o))return{mode:"chat"};const s=[];for(const r of q){let u=-1;for(const f of r.aliases){const d=n.indexOf(f);d>=0&&(u<0||d<u)&&(u=d)}u>=0&&s.push({code:r.code,at:u})}s.sort((r,u)=>r.at-u.at);const a=[...new Set(s.map(r=>r.code))];if(a.length>=2){const r=a.find(u=>u!==e);return r?{their:r}:null}return a.length===1&&Fe.test(n)&&a[0]!==e?{their:a[0]}:null}const Se=(t,e)=>`${M(e).tag} -> ${M(t).tag}`,Me=t=>`TV -> ${M(t).tag}`,de={openaiKey:"",openaiModel:"gpt-6-luna",theirLang:"en",myLang:"ko",favLangs:["en","ja","zh"],mode:"chat",sttMode:"live",liveModel:"gpt-live-transcribe",liveDelay:"low",sttModel:"gpt-transcribe",mic:"glasses",replyCount:3,showGloss:!1,helpMyKorean:!0,replyToMyLang:!0,showCues:!0,webLookup:!0,searchModel:"gpt-6-luna",silenceMs:700,sensitivity:"high",v:3},Q="talk-assist-settings";async function ze(t){let e="";try{e=t?await t.getLocalStorage(Q):""}catch{}if(!e)try{e=localStorage.getItem(Q)??""}catch{}try{const n=e?JSON.parse(e):{};return(n.v??1)<3&&((n.silenceMs===1100||n.silenceMs===700)&&delete n.silenceMs,n.v=3),{...de,...n}}catch{return{...de}}}async function X(t,e){const n=JSON.stringify(e);try{t&&await t.setLocalStorage(Q,n)}catch{}try{localStorage.setItem(Q,n)}catch{}}const P=16e3,Ge=300,He=400,Je=25e3;function he(t){const e=new Int16Array(t.reduce((o,s)=>o+s.length,0));let n=0;for(const o of t)e.set(o,n),n+=o.length;return e}class We{level=300;gain=1;run(e){let n=0;for(let r=0;r<e.length;r++)n+=e[r]*e[r];const o=Math.sqrt(n/Math.max(1,e.length));this.level=Math.max(o,this.level*.995,40);const s=Math.min(25,Math.max(1,3e3/this.level));if(this.gain+=(s-this.gain)*(s<this.gain?.5:.05),this.gain<=1.01)return e;const a=new Int16Array(e.length);for(let r=0;r<e.length;r++)a[r]=Math.max(-32768,Math.min(32767,Math.round(e[r]*this.gain)));return a}}function Ye(t){const e=Math.floor(t.byteLength/2),n=new Int16Array(e),o=new DataView(t.buffer,t.byteOffset,e*2);for(let s=0;s<e;s++)n[s]=o.getInt16(s*2,!0);return n}const fe={normal:[500,2.5],high:[220,1.8],max:[110,1.4]},Xe=3e3,Qe={normal:120,high:60,max:30},Ze=8e3;class et{constructor(e,n=700,o){this.ev=e,this.silenceMs=n,this.onLevel=o}sensitivity="high";tv=!1;onMeter;history=[];historyN=[];historySamples=0;noiseFloor=300;chunks=[];preRoll=[];preRollSamples=0;speaking=!1;silentSamples=0;speechSamples=0;totalSamples=0;roles={self:0,other:0,unknown:0};agc=new We;push(e,n="unknown"){const o=this.agc.run(Ye(e)),s=o.length;let a=0;for(let v=0;v<s;v++)a+=o[v]*o[v];const r=Math.sqrt(a/Math.max(1,s));for(this.history.push(r),this.historyN.push(s),this.historySamples+=s;this.historySamples>P*3&&this.history.length>1;)this.history.shift(),this.historySamples-=this.historyN.shift();const u=[...this.history].sort((v,c)=>v-c);this.noiseFloor=Math.min(Xe,u[Math.floor(u.length*.15)]??r);const[f,d]=fe[this.sensitivity]??fe.high;let l;if(this.tv){const v=u[Math.floor(u.length/2)]??r;l=Math.max(Qe[this.sensitivity]??60,v*.5)}else l=Math.max(f,this.noiseFloor*d),this.speaking&&(l*=.85);const h=r>l;if(this.onMeter?.(r,l,this.speaking),!this.speaking){for(this.preRoll.push(o),this.preRollSamples+=s;this.preRollSamples>P*Ge/1e3&&this.preRoll.length>1;)this.preRollSamples-=this.preRoll.shift().length;h&&(this.speaking=!0,this.chunks=[...this.preRoll],this.totalSamples=this.preRollSamples,this.preRoll=[],this.preRollSamples=0,this.silentSamples=0,this.speechSamples=s,this.roles={self:0,other:0,unknown:0},this.roles[n]+=s,this.onLevel?.(!0),this.ev.onStart?.(he(this.chunks)));return}this.chunks.push(o),this.totalSamples+=s,this.roles[n]+=s,this.ev.onAudio?.(o),h?(this.speechSamples+=s,this.silentSamples=0):this.silentSamples+=s;const E=this.silentSamples/P*1e3,b=this.totalSamples/P*1e3,C=this.tv?Ze:Je;(E>=this.silenceMs||b>=C)&&this.flush()}flush(){if(!this.speaking)return;this.speaking=!1,this.onLevel?.(!1);const e=this.speechSamples/P*1e3,n=he(this.chunks);if(this.chunks=[],e<He){this.ev.onEnd(null);return}const o=this.roles,s=o.self>o.other&&o.self>o.unknown?"self":o.other>o.self&&o.other>o.unknown?"other":"unknown";this.ev.onEnd({pcm:n,role:s,durationMs:n.length/P*1e3})}}function tt(t,e=P){const n=new ArrayBuffer(44),o=new DataView(n),s=t.length*2,a=(r,u)=>{for(let f=0;f<u.length;f++)o.setUint8(r+f,u.charCodeAt(f))};return a(0,"RIFF"),o.setUint32(4,36+s,!0),a(8,"WAVE"),a(12,"fmt "),o.setUint32(16,16,!0),o.setUint16(20,1,!0),o.setUint16(22,1,!0),o.setUint32(24,e,!0),o.setUint32(28,e*2,!0),o.setUint16(32,2,!0),o.setUint16(34,16,!0),a(36,"data"),o.setUint32(40,s,!0),new Blob([n,t.buffer],{type:"audio/wav"})}const nt="wss://api.openai.com/v1/realtime?intent=transcription",Ee=24e3;class ot{last=0;run(e){const n=16e3/Ee,o=Math.floor(e.length/n),s=new Int16Array(o);for(let a=0;a<o;a++){const r=a*n,u=Math.floor(r),f=r-u,d=u===0?this.last:e[u-1],l=e[Math.min(u,e.length-1)];s[a]=Math.round(d+(l-d)*f)}return e.length&&(this.last=e[e.length-1]),s}reset(){this.last=0}}function st(t){const e=new Uint8Array(t.buffer,t.byteOffset,t.byteLength);let n="";for(let o=0;o<e.length;o+=32768)n+=String.fromCharCode(...e.subarray(o,o+32768));return btoa(n)}class at{constructor(e){this.o=e}ws=null;outbox=[];resampler=new ot;partial=new Map;closed=!1;retry=0;connect(){this.closed=!1;const e=new WebSocket(nt,["realtime","openai-insecure-api-key."+this.o.apiKey]);this.ws=e,e.onopen=()=>{this.retry=0,e.send(JSON.stringify({type:"session.update",session:{type:"transcription",audio:{input:{format:{type:"audio/pcm",rate:Ee},transcription:{model:this.o.model,...this.o.languages.length?{languages:this.o.languages}:{},delay:this.o.delay,prompt:"A casual face-to-face conversation between two people."},turn_detection:null}}}}));for(const n of this.outbox)e.send(n);this.outbox=[],this.o.onState?.(!0)},e.onmessage=n=>{let o;try{o=JSON.parse(n.data)}catch{return}switch(o.type){case"conversation.item.input_audio_transcription.delta":{const s=(this.partial.get(o.item_id)??"")+(o.delta??"");this.partial.set(o.item_id,s),this.o.onPartial(s);break}case"conversation.item.input_audio_transcription.completed":{this.partial.delete(o.item_id);const s=String(o.transcript??"").trim();s&&this.o.onFinal(s);break}case"conversation.item.input_audio_transcription.failed":this.partial.delete(o.item_id),this.o.onError("실시간 인식 실패: "+(o.error?.message??""));break;case"error":/buffer.*(empty|too small)/i.test(o.error?.message??"")||this.o.onError("실시간 인식 오류: "+(o.error?.message??JSON.stringify(o.error)));break}},e.onerror=()=>this.o.onError("실시간 인식 서버에 연결하지 못했어요. 키·네트워크를 확인하세요."),e.onclose=()=>{if(this.o.onState?.(!1),this.ws=null,this.closed)return;const n=Math.min(1e4,500*2**this.retry++);setTimeout(()=>{this.closed||this.connect()},n)}}send(e){const n=JSON.stringify(e);this.ws?.readyState===WebSocket.OPEN?this.ws.send(n):this.outbox.push(n)}start(e){this.resampler.reset(),this.send({type:"input_audio_buffer.clear"}),this.append(e)}append(e){e.length&&this.send({type:"input_audio_buffer.append",audio:st(this.resampler.run(e))})}end(e){this.send({type:e?"input_audio_buffer.commit":"input_audio_buffer.clear"})}close(){this.closed=!0,this.outbox=[],this.ws?.close(),this.ws=null}}async function it(t,e){const n=new FormData;n.append("file",tt(t),"speech.wav"),n.append("model",e.sttModel),n.append("response_format","json"),n.append("prompt",e.mode==="tv"?"Dialogue from a TV show or video.":`A casual conversation in ${M(e.theirLang).en} and ${M(e.myLang).en}.`);const o=await fetch("https://api.openai.com/v1/audio/transcriptions",{method:"POST",headers:{Authorization:`Bearer ${e.openaiKey}`},body:n});if(!o.ok)throw new Error(`STT ${o.status}: ${(await o.text()).slice(0,200)}`);const s=await o.json();return String(s.text??"").trim()}function rt(t){if(t.mode==="tv")return ft(t);const e=M(t.theirLang),n=M(t.myLang),o=e.latin?'"pron": always "".':`"pron": how to pronounce "text", written in ${n.en} script so the user can read it aloud (e.g. Hangul for Korean users).`;return`You help a ${n.en} speaker hold a live spoken conversation in ${e.en} through smart glasses.
You receive the latest utterance (speech-to-text, may contain recognition errors) plus recent conversation history.

Rules:
- Decide who spoke from the language of the latest utterance.
- If it is ${e.en} (the other person) → "speaker": "them".
  * "translation": natural, concise ${n.en} translation (spoken style, not literal).
  * "replies": ALWAYS exactly ${t.replyCount} objects — what the USER should say BACK to the other person right now.
    Think as if you were the user in this conversation: understand what the other person asked, said or wants, then decide how you would actually answer, and write that answer.
    - A real ANSWER that moves the conversation forward: answer the question, react to the news, accept/decline the offer, give an opinion, or ask a natural follow-up.
    - NEVER a paraphrase, rewording, summary or translation of what the other person said. NEVER repeat their sentence in other words.
    - Order: 1st = the reply you would most recommend; the others = clearly different directions (e.g. yes vs no, positive vs cautious, answer vs follow-up question).
    - When the answer needs a personal fact you don't know (name, time, place, number), give a natural, plausible answer the user can adapt (e.g. "About ten minutes away.") rather than a placeholder.
    - Each under 12 words, natural spoken ${e.en}, simple vocabulary.
    Each object: "text": the reply in ${e.en}; ${o} "gloss": very short ${n.en} meaning of THIS reply (under 12 characters).
    Example (other person: "Have you been to Busan before?") → good: "Yes, last summer! The beaches were great." / "Not yet. Do you recommend it?" ; bad: "Have you visited Busan?" (paraphrase), "부산에 가본 적 있어요?" (translation).
- If it is ${n.en} → "speaker": "me". "translation": how to say it naturally in ${e.en}, under 20 words.
  "replies": ${t.replyToMyLang?`ALWAYS exactly ${t.replyCount} objects — treat this ${n.en} line as something another person said TO the user, and give ${e.en} replies the user could say BACK to it. Same rules as above: real answers, never a rewording or translation of the line itself.`:"[]."}
- Otherwise → "speaker": "other", "translation": "", "replies": [].
- "cue" (shown at the top of the glasses): ${t.showCues?`if the latest utterance contains something an intermediate learner may not get — an idiom, slang, uncommon word, abbreviation, or a name/place/event that needs background — explain ONE most useful item in ${n.en}, format "term: short explanation", under 40 characters total. Do not repeat a cue already explained. Otherwise "".`:'always "".'}
- "lookup": ${t.webLookup?`if the conversation now touches a real-world fact that changes over time and would help the user follow or answer — a stock or crypto price, exchange rate, sports score, weather, news event, release date, store hours, a company's or person's latest status — write ONE short English web search query for it (e.g. "Tesla stock price today"). Only when concrete and useful right now; not general knowledge. Don't repeat a lookup for the same topic within the last few turns. Otherwise "".`:'always "".'}
- Fix obvious speech-recognition errors using context.

Return ONLY a JSON object in exactly this shape:
{"speaker":"them","translation":"...","replies":[{"text":"...","pron":"...","gloss":"..."}],"cue":"","lookup":""}`}function lt(t,e){return`Recent conversation:
${t.slice(-8).map(o=>`${o.who==="them"?"Them":"Me"}: ${o.text}`).join(`
`)||"(none)"}

Latest utterance:
${e}

Respond with the JSON object only.`}function ct(t){if(typeof t=="string")return t.trim()?{text:t.trim(),pron:"",gloss:""}:null;if(!t||typeof t!="object")return null;const e=String(t.text??t.reply??t.en??t.say??Object.values(t).find(n=>typeof n=="string")??"").trim();return e?{text:e,pron:String(t.pron??t.pronunciation??t.reading??"").trim(),gloss:String(t.gloss??t.meaning??t.ko??t.translation??"").trim()}:null}function ut(t){const e=t.match(/\{[\s\S]*\}/);if(!e)throw new Error("AI 응답에서 JSON을 찾지 못함");const n=JSON.parse(e[0]),o=String(n.speaker??n.lang??"").toLowerCase(),s=o==="them"||o==="me"?o:"other",a=n.replies??n.suggestions??n.suggested_replies??[];return{src:String(n.src??"").toLowerCase(),speaker:n.src!==void 0?"them":s,translation:String(n.translation??""),replies:(Array.isArray(a)?a:[]).map(ct).filter(r=>!!r),cue:String(n.cue??"").trim(),lookup:String(n.lookup??"").trim()}}async function pt(t,e,n){const o=await fetch("https://api.openai.com/v1/responses",{method:"POST",headers:{"content-type":"application/json",Authorization:`Bearer ${t.openaiKey}`},body:JSON.stringify({model:t.openaiModel,instructions:rt(t),input:lt(e,n),reasoning:{effort:"none"},text:{format:{type:"json_object"}},max_output_tokens:600})});if(!o.ok)throw new Error(`GPT ${o.status}: ${(await o.text()).slice(0,200)}`);return ut(dt(await o.json()))}function dt(t){if(typeof t.output_text=="string")return t.output_text;let e="";for(const n of t.output??[])if(n.type==="message")for(const o of n.content??[])o.text&&(e+=o.text);return e}function ht(t,e,n){return pt(t,e,n)}function ft(t){const e=M(t.myLang);return`You subtitle TV or video audio for a ${e.en} viewer on smart glasses.
The latest line comes from speech-to-text and may contain recognition errors; use the recent lines for context.
- "src": ISO 639-1 code of the line's language (e.g. "en", "ja", "zh", "es").
- "translation": natural, concise ${e.en} subtitle of the line, whatever language it is in. If the line is already ${e.en}, "translation": "".
- "cue": ${t.showCues?`if the line has an idiom, slang, uncommon word, or a name/place/event that needs background, explain ONE in ${e.en}, "term: short explanation", under 40 characters. Otherwise "".`:'"".'}
- "lookup": ${t.webLookup?'if the line touches a real-world fact that changes over time (stock price, score, news, weather) and a quick check would help the viewer, ONE short English web search query. Otherwise "".':'"".'}
Return ONLY a JSON object: {"src":"en","translation":"...","cue":"","lookup":""}`}const me=new Map,mt=2*60*1e3;async function gt(t,e){const n=e.toLowerCase(),o=me.get(n);if(o&&Date.now()-o.at<mt)return o.result;const s=await fetch("https://api.openai.com/v1/responses",{method:"POST",headers:{"content-type":"application/json",Authorization:`Bearer ${t.openaiKey}`},body:JSON.stringify({model:t.searchModel,tools:[{type:"web_search",search_context_size:"low",user_location:{type:"approximate",country:"KR",timezone:"Asia/Seoul"}}],instructions:'Search the web and answer in Korean for a smart-glasses display. One line, under 45 characters. Lead with the key number or fact, then when it was measured (e.g. "테슬라 $412.3 (+2.1%) · 11/17 마감"). No sentences, no markdown, no citations in the text.',input:e,reasoning:{effort:"low"}})});if(!s.ok)throw new Error(`검색 ${s.status}: ${(await s.text()).slice(0,200)}`);const a=await s.json();let r="";const u=[];for(const d of a.output??[])if(d.type==="message")for(const l of d.content??[]){l.text&&(r+=l.text);for(const h of l.annotations??[])h.type==="url_citation"&&!u.some(E=>E.url===h.url)&&u.push({title:h.title??h.url,url:h.url})}r=r.replace(/\(\[[^\]]*\]\([^)]*\)\)|\[[^\]]*\]\([^)]*\)/g,"").replace(/\s+/g," ").trim();const f={query:e,text:r,sources:u.slice(0,3)};return me.set(n,{at:Date.now(),result:f}),f}const W={cue:{id:1,name:"cue",y:0,h:48,color:3},orig:{id:2,name:"orig",y:48,h:48,color:2},trans:{id:3,name:"trans",y:96,h:72,color:4},replies:{id:4,name:"replies",y:168,h:120,color:4}};class yt{constructor(e){this.bridge=e}last={cue:"",orig:"",trans:"",replies:""};pending=null;timer=null;async init(e){const n=Object.keys(W).map(s=>{const a=W[s];return new Pe({xPosition:0,yPosition:a.y,width:576,height:a.h,borderWidth:s==="replies"?1:0,borderColor:2,borderRadius:6,paddingLength:4,containerID:a.id,containerName:a.name,content:e[s]||" ",textColor:a.color,isEventCapture:s==="replies"?1:0})}),o=await this.bridge.createStartUpPageContainer(new Ie({containerTotalNum:n.length,textObject:n}));return this.last={...e},o}show(e){this.pending=e,this.timer===null&&(this.timer=window.setTimeout(()=>this.flush(),120))}async flush(){this.timer=null;const e=this.pending;if(this.pending=null,!!e)for(const n of Object.keys(W)){if(e[n]===this.last[n])continue;const o=W[n];this.last[n]=e[n],await this.bridge.textContainerUpgrade(new qe({containerID:o.id,containerName:o.name,content:e[n]||" "}))}}}const p=t=>document.querySelector(t);let _=new Set;function wt(t,e,n,o){_=new Set(t.favLangs),St(),p("#app").innerHTML=`
    <main>
      <header>
        <h1>Talk Assist <small id="modeBadge" class="mode"></small></h1>
        <div id="status" class="chip">준비 중</div>
      </header>

      <label class="base">번역 결과 언어 (기준 언어)
        <select id="myLang">${we()}</select></label>
      <div class="meter" title="마이크 입력"><i id="meterBar"></i><b id="meterTh"></b><span>마이크 입력 · 세로선을 넘으면 말소리로 인식</span></div>
      <p id="live" class="live" hidden></p>
      ${t.openaiKey?"":`
      <section class="quick" id="quick">
        <b>OpenAI API 키를 넣어 주세요</b>
        <div class="qrow">
          <input id="quickKey" type="password" autocomplete="off" placeholder="sk-..." />
          <button id="quickSave">저장</button>
        </div>
      </section>`}
      <section id="log" class="log">
        <p class="empty">상대방이 영어로 말하면 여기와 안경에<br>번역과 추천 답변이 나타나요.</p>
      </section>

      <details id="settings">
        <summary>설정</summary>
        <label>모드
          <select id="mode">
            <option value="chat">대화 — 번역 + 추천 답변</option>
            <option value="tv">TV 자막 — 어떤 언어든 내 언어로 번역만</option>
          </select></label>
        <div class="row">
          <label>상대 언어 <select id="theirLang">${we()}</select></label>
        </div>
        <div class="fav-head">★ 즐겨찾기 <small>안경 언어 메뉴(길게 누르기)에는 여기 고른 언어만 나와요</small></div>
        <div id="favs" class="favs"></div>
        <p class="hint" style="margin-top:6px">상대 언어는 말로도 바꿀 수 있어요: "일본어 모드", "중국어 모드", "TV 모드", "대화 모드". 번역 결과 언어(기준 언어)는 맨 위에서만 바꿀 수 있어요.</p>
        <label>OpenAI API 키
          <input id="openaiKey" type="password" autocomplete="off" placeholder="sk-..." /></label>
        <label>음성 인식 방식
          <select id="sttMode">
            <option value="live">빠른 모드 — 말하는 중에도 실시간 표시 (분당 약 $0.017)</option>
            <option value="batch">절약 모드 — 말이 끝난 뒤 한 번에 (분당 약 $0.0045)</option>
          </select></label>
        <div class="row" id="liveRow">
          <label>실시간 모델 <input id="liveModel" /></label>
          <label>반응 속도
            <select id="liveDelay">
              <option value="minimal">가장 빠름</option>
              <option value="low">빠름</option>
              <option value="medium">보통</option>
              <option value="high">정확</option>
            </select></label>
        </div>
        <div class="row">
          <label>번역 모델 <input id="openaiModel" /></label>
          <label id="batchRow">절약 모드 모델 <input id="sttModel" /></label>
        </div>
        <div class="row">
          <label>마이크
            <select id="mic">
              <option value="glasses">안경</option>
              <option value="phone">휴대폰</option>
            </select></label>
        </div>
          <label>추천 답변 수
            <select id="replyCount"><option>1</option><option>2</option><option>3</option></select></label>
        </div>
        <div class="row">
          <label>마이크 감도
            <select id="sensitivity">
              <option value="normal">보통 (가까운 대화)</option>
              <option value="high">높음 (TV·조금 먼 소리)</option>
              <option value="max">매우 높음 (먼 소리)</option>
            </select></label>
          <label>대사 길이
            <select id="silenceMs">
              <option value="500">아주 빠르게 (0.5초)</option>
              <option value="700">빠르게 (0.7초)</option>
              <option value="1100">긴 대사 (1.1초)</option>
              <option value="1500">아주 긴 대사 (1.5초)</option>
            </select></label>
        </div>
        <p class="hint" style="margin-top:6px">말이 이 시간만큼 멈추면 한 문장으로 처리해요. 짧을수록 번역이 빨리 뜨고, 길수록 긴 대사가 안 끊겨요. TV 자막 모드는 자동으로 최소 1.1초를 써요.</p>
        <label class="check"><input id="showCues" type="checkbox" /> 대화 도우미 — 어려운 단어·배경 설명을 맨 위에 표시</label>
        <label class="check"><input id="webLookup" type="checkbox" /> 실시간 정보 검색 — 주가·날씨·경기 결과·뉴스 등이 나오면 찾아서 표시</label>
        <label id="searchRow">검색 모델 <input id="searchModel" /></label>
        <label class="check"><input id="showGloss" type="checkbox" /> 추천 답변 옆에 한국어 뜻 표시</label>
        <label class="check"><input id="helpMyKorean" type="checkbox" /> 내 말을 상대 언어로 어떻게 하는지 띄우기</label>
        <label class="check"><input id="replyToMyLang" type="checkbox" /> 내 언어(한국어)가 들려도 추천 답변 보기</label>
        <button id="save">저장하고 다시 시작</button>
        <p class="hint">키는 이 기기 안에만 저장됩니다. 안경: 탭 = 일시정지, 위·아래 스와이프 = 이전 대화, 두 번 탭 = 종료</p>
      </details>
    </main>`;const s=["openaiKey","openaiModel","liveModel","searchModel","sttModel","silenceMs"];for(const l of s)p("#"+l).value=String(t[l]);p("#mic").value=t.mic,p("#sttMode").value=t.sttMode,p("#liveDelay").value=t.liveDelay,p("#showCues").checked=t.showCues,p("#webLookup").checked=t.webLookup;const a=()=>{p("#searchRow").style.display=p("#webLookup").checked?"":"none"};p("#webLookup").addEventListener("change",a),a();const r=()=>{const l=p("#sttMode").value==="live";p("#liveRow").style.display=l?"":"none",p("#batchRow").style.visibility=l?"hidden":"visible"};p("#sttMode").addEventListener("change",r),r(),p("#replyCount").value=String(t.replyCount),p("#sensitivity").value=t.sensitivity;const f=[500,700,1100,1500].reduce((l,h)=>Math.abs(h-t.silenceMs)<Math.abs(l-t.silenceMs)?h:l);p("#silenceMs").value=String(f),ae(t);const d=()=>{const l=p("#myLang").value;p("#favs").innerHTML=q.filter(h=>h.code!==l).map(h=>`<button type="button" class="fav${_.has(h.code)?" on":""}" data-code="${h.code}">${_.has(h.code)?"★":"☆"} ${h.ko} <small>${h.tag}</small></button>`).join("")};p("#favs").addEventListener("click",l=>{const h=l.target.closest("button[data-code]");if(!h)return;const E=h.dataset.code;_.has(E)?_.delete(E):_.add(E),d(),n?.([..._])}),p("#myLang").addEventListener("change",()=>{d(),o?.(p("#myLang").value)}),d(),p("#showGloss").checked=t.showGloss,p("#helpMyKorean").checked=t.helpMyKorean,p("#replyToMyLang").checked=t.replyToMyLang,document.addEventListener("focusin",l=>{const h=l.target;h.matches?.("input, select")&&setTimeout(()=>h.scrollIntoView({block:"center",behavior:"smooth"}),300)}),document.querySelector("#quickSave")?.addEventListener("click",()=>{const l=p("#quickKey").value.trim();l&&(p("#openaiKey").value=l,p("#quick").remove(),p("#save").click())}),p("#save").addEventListener("click",()=>{const l=h=>p("#"+h).value.trim();e({openaiKey:l("openaiKey"),openaiModel:l("openaiModel"),sttMode:l("sttMode"),liveModel:l("liveModel"),liveDelay:l("liveDelay"),showCues:p("#showCues").checked,webLookup:p("#webLookup").checked,searchModel:l("searchModel"),sttModel:l("sttModel"),mic:l("mic"),replyCount:Number(l("replyCount")),favLangs:[..._],mode:l("mode"),theirLang:l("theirLang"),myLang:l("myLang"),silenceMs:Number(l("silenceMs"))||700,sensitivity:l("sensitivity"),v:3,showGloss:p("#showGloss").checked,helpMyKorean:p("#helpMyKorean").checked,replyToMyLang:p("#replyToMyLang").checked}),p("#settings").open=!1})}const bt={idle:"대기",listening:"듣는 중",hearing:"말소리 감지",thinking:"번역 중",paused:"일시정지",error:"오류"};function w(t,e=""){const n=p("#status");n.className=`chip chip-${t}`,n.textContent=bt[t],n.title=e,t==="error"&&e&&Lt(e)}function x(t){return t.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e])}function F(t){const e=p("#log");for(e.querySelector(".empty")?.remove(),e.insertAdjacentHTML("afterbegin",t);e.children.length>40;)e.lastElementChild?.remove()}const ge=t=>Math.min(100,Math.log10(1+t)/4.2*100);let ye=0;function vt(t,e,n){const o=performance.now();if(o-ye<60)return;ye=o;const s=document.querySelector("#meterBar"),a=document.querySelector("#meterTh");!s||!a||(s.style.width=ge(t)+"%",s.style.background=n?"#3CFA44":"#4a6b4c",a.style.left=ge(e)+"%")}function te(t,e){const n=document.querySelector("#modeBadge");n&&(n.textContent=e==="tv"?`TV 자막 · ${t}`:`대화 · ${t}`,n.className="mode"+(e==="tv"?" tv":""))}function $e(t){const e=p("#live");e.hidden=!t,e.textContent=t}function oe(t,e,n,o=""){F(`
    <article class="turn them">
      ${o?`<p class="cue">💡 ${x(o)}</p>`:""}
      <p class="orig">${x(t)}</p>
      <p class="trans">${x(e)}</p>
      <ol class="replies">${n.map(s=>`<li><b>${x(s.text)}</b>${s.pron?`<em>${x(s.pron)}</em>`:""}<span>${x(s.gloss)}</span></li>`).join("")}</ol>
    </article>`)}function xt(t,e){F(`
    <article class="turn me">
      <p class="orig">${x(t)}</p>
      ${e?`<p class="trans">→ ${x(e)}</p>`:""}
    </article>`)}function kt(t,e,n){const o=n.map(s=>`<a href="${x(s.url)}" target="_blank" rel="noopener">${x(s.title)}</a>`).join(" · ");F(`
    <article class="turn lookup">
      <p class="q">🔎 ${x(t)}</p>
      <p class="a">${x(e)}</p>
      ${o?`<p class="src">출처: ${o}</p>`:""}
    </article>`)}function we(){return q.map(t=>`<option value="${t.code}">${t.ko}</option>`).join("")}function ae(t){const e=document.querySelector("#mode");e&&t.mode&&(e.value=t.mode);const n=document.querySelector("#theirLang"),o=document.querySelector("#myLang");n&&(n.value=t.theirLang),o&&(o.value=t.myLang)}function ie(t){F(`<article class="turn note">${x(t)}</article>`)}function Lt(t){F(`<article class="turn err">${x(t)}</article>`)}function St(){const t=`
    :root { color-scheme: dark; }
    html, body { margin:0; background:#1d1d1d; color:#ececec;
      font: 17px/1.5 -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', 'Pretendard', system-ui, sans-serif; }
    main { max-width:640px; margin:0 auto; padding:20px 16px calc(160px + env(safe-area-inset-bottom)); display:flex; flex-direction:column; gap:16px; }
    .quick { background:#262626; border:1px solid #3CFA44; border-radius:14px; padding:14px 16px; }
    .quick b { display:block; margin-bottom:8px; }
    .quick .qrow { display:flex; gap:8px; }
    .quick input { flex:1; min-width:0; }
    .quick button { width:auto; margin:0; padding:10px 16px; }
    header { display:flex; justify-content:space-between; align-items:center; }
    h1 { margin:0; font-size:22px; font-weight:700; }
    .chip { font-size:13px; padding:4px 12px; border-radius:999px; border:1px solid #444; color:#aaa; }
    .chip-listening { color:#3CFA44; border-color:#3CFA44; }
    .chip-hearing   { color:#1d1d1d; background:#3CFA44; border-color:#3CFA44; }
    .chip-thinking  { color:#ffd60a; border-color:#ffd60a; }
    .chip-error     { color:#ff453a; border-color:#ff453a; }
    .log { display:flex; flex-direction:column; gap:10px; min-height:200px; }
    .empty { color:#777; text-align:center; margin:40px 0; }
    .turn { background:#2a2a2a; border-radius:14px; padding:14px 16px; }
    .turn p { margin:0; }
    .turn .orig { color:#9a9a9a; font-size:15px; }
    .turn .cue { color:#ffd60a; font-size:14px; margin-bottom:6px; }
    h1 .mode { font-size:13px; font-weight:600; color:#3CFA44; border:1px solid #3CFA44; border-radius:6px; padding:2px 6px; margin-left:6px; vertical-align:middle; }
    h1 .mode.tv { color:#ffd60a; border-color:#ffd60a; }
    .base { display:flex; flex-direction:row; align-items:center; justify-content:space-between; gap:12px; margin:0;
      background:#262626; border-radius:12px; padding:10px 14px; font-size:15px; color:#ddd; }
    .base select { flex:0 0 auto; min-width:130px; }
    .meter { position:relative; height:22px; border-radius:8px; background:#262626; overflow:hidden; }
    .meter i { position:absolute; left:0; top:0; bottom:0; width:0; background:#4a6b4c; transition:width .06s linear; }
    .meter b { position:absolute; top:3px; bottom:3px; width:2px; background:#fff; left:0; }
    .meter span { position:absolute; left:10px; top:50%; transform:translateY(-50%); font-size:11px; color:#ddd; pointer-events:none; }
    .live { margin:0; padding:12px 16px; border-radius:14px; border:1px solid #3CFA44; color:#cfe; font-size:16px; }
    .turn .trans { font-size:20px; font-weight:600; margin-top:4px; }
    .turn.me { background:#232323; border:1px dashed #3a3a3a; }
    .turn.me .trans { color:#3CFA44; font-size:18px; }
    .turn.err { color:#ff6b61; font-size:14px; }
    .turn.note { color:#aaa; font-size:14px; background:transparent; border:1px solid #333; padding:10px 14px; }
    .fav-head { margin-top:12px; font-size:14px; color:#ffd60a; font-weight:600; }
    .fav-head small { display:block; color:#777; font-weight:400; margin-top:2px; }
    .favs { display:flex; flex-wrap:wrap; gap:8px; margin-top:8px; }
    .fav { font:inherit; font-size:15px; padding:8px 12px; border-radius:999px; border:1px solid #3a3a3a;
      background:#1a1a1a; color:#bbb; margin:0; width:auto; font-weight:500; }
    .fav.on { border-color:#ffd60a; color:#ffd60a; background:rgba(255,214,10,.08); }
    .fav small { color:#777; margin-left:2px; }
    .replies em { display:block; font-style:normal; color:#9fd8a2; font-size:14px; }
    .turn.lookup { background:#1f2a33; }
    .turn.lookup .q { color:#8ab4d8; font-size:13px; }
    .turn.lookup .a { font-size:18px; font-weight:600; margin-top:2px; }
    .turn.lookup .src { font-size:13px; color:#888; margin-top:6px; }
    .turn.lookup a { color:#8ab4d8; }
    .replies { margin:10px 0 0; padding-left:22px; display:flex; flex-direction:column; gap:6px; }
    .replies b { font-weight:600; color:#3CFA44; }
    .replies span { color:#888; font-size:14px; margin-left:8px; }
    details { background:#262626; border-radius:14px; padding:12px 16px; }
    summary { font-weight:600; cursor:pointer; }
    label { display:flex; flex-direction:column; gap:4px; margin-top:12px; font-size:14px; color:#bbb; }
    label small { color:#777; }
    .row { display:flex; gap:12px; } .row label { flex:1; }
    .check { flex-direction:row; align-items:center; gap:8px; }
    input, select { font:inherit; color:#eee; background:#1a1a1a; border:1px solid #3a3a3a; border-radius:10px; padding:10px; }
    button { margin-top:16px; width:100%; font:inherit; font-weight:700; padding:14px; border:0; border-radius:12px;
      background:#3CFA44; color:#111; }
    .hint { font-size:13px; color:#777; margin:12px 0 0; }
  `,e=document.createElement("style");e.textContent=t,document.head.appendChild(e)}const{bridge:k,preview:Mt}=await De();let i=await ze(k);const B=new yt(k),A=[],Y=[],T=[];let I=-1,O=!1,N=null,Z=Promise.resolve();const U={cue:"Talk Assist",orig:"듣는 중...",trans:" ",replies:`탭: 일시정지   스와이프: 이전 대화
길게 누르기: 언어   두 번 탭: 종료`};let L={...U};function be(t){return t.map((e,n)=>{const o=e.pron?` [${e.pron}]`:"",s=i.showGloss&&e.gloss?` (${e.gloss})`:"";return`${n+1}. ${e.text}${o}${s}`}).join(`
`)}const D=(t,e=70)=>t.length>e?"…"+t.slice(-e):t;function z(){g.open||I===-1&&B.show(L)}const g={open:!1,index:0},ne=()=>{const t=q.filter(o=>o.code!==i.myLang),e=t.filter(o=>i.favLangs.includes(o.code)||o.code===i.theirLang),n=(e.length>1?e:t).map(o=>({code:o.code,label:`${Se(i.myLang,o.code)}  ${o.ko}`,now:i.mode==="chat"&&o.code===i.theirLang}));return[{code:"tv",label:`${Me(i.myLang)}  TV 자막 (모든 언어)`,now:i.mode==="tv"},...n]},V=()=>i.mode==="tv"?Me(i.myLang):Se(i.myLang,i.theirLang);function ee(){const t=ne(),e=Math.max(0,Math.min(g.index-2,t.length-5)),n=t.slice(e,e+5).map((o,s)=>`${e+s===g.index?"> ":"   "}${o.label}${o.now?"  (현재)":""}`);B.show({cue:"* 언어 선택",orig:"스와이프: 이동   탭: 선택   길게: 취소",trans:"",replies:n.join(`
`)})}function Et(){const t=ne();g.open=!0,g.index=Math.max(0,t.findIndex(e=>e.now)),ee(),w(O?"listening":"paused","언어 메뉴")}function ve(){g.open=!1,I=-1,B.show(L)}async function $t(t){const e=ne();switch(t){case m.SCROLL_TOP_EVENT:return g.index=(g.index-1+e.length)%e.length,ee();case m.SCROLL_BOTTOM_EVENT:return g.index=(g.index+1)%e.length,ee();case m.CLICK_EVENT:{const n=e[g.index];return g.open=!1,n.now?ve():Ce(n.code==="tv"?{mode:"tv"}:{their:n.code,mode:"chat"})}case m.LONG_PRESS_EVENT:case m.DOUBLE_CLICK_EVENT:return ve()}}function j(t){L=t,T.push(t),T.length>30&&T.shift(),I=-1,z()}function xe(t){if(!T.length)return;const e=T.length-1,o=Math.min(e,Math.max(0,(I===-1?e:I)+t));if(I=o===e?-1:o,I===-1)return B.show(L);const s=T[o];B.show({...s,cue:`[${o+1}/${T.length}] ${s.cue}`})}function Tt(t){$e(t),L={...L,orig:"> "+D(t,66)},z()}let se={query:"",at:0};async function Ct(t,e){const n=t.toLowerCase();if(n===se.query&&Date.now()-se.at<6e4)return;se={query:n,at:Date.now()};const o=L,s=a=>{L={...L,cue:a};const r=T.indexOf(o);r>=0&&(T[r]={...T[r],cue:a}),z()};s("? "+t+" ...");try{const a=e?await new Promise(r=>setTimeout(()=>r(e),1500)):await gt(i,t);if(!a.text)return s(o.cue);s("# "+a.text),kt(a.query,a.text,a.sources)}catch(a){s(o.cue),w("error",a.message)}}async function Te(t){if($e(""),!(!t||t.length<2)){w("thinking");try{const e=Ue(t,i.myLang);if(e)return await Ce(e);At(t,await ht(i,A,t))}catch(e){w("error",e.message),console.error(e);return}w(O?"listening":"paused")}}async function Ce(t){const e=t.their??i.theirLang,n=t.my??i.myLang,o=t.mode??(t.their?"chat":i.mode);if(e===n||e===i.theirLang&&n===i.myLang&&o===i.mode)return;i={...i,theirLang:e,myLang:n,mode:o},re(),await k.setRawAudio?.(o==="tv"),await X(k,i),ae(i),A.length=0;const s=o==="tv"?`TV 자막 모드 (모든 언어 → ${M(n).ko})`:`대화 모드 ${M(e).ko} → ${M(n).ko}`;ie(s),te(V(),o),j({cue:`* ${V()}`,orig:" ",trans:" ",replies:" "}),i.sttMode==="live"&&le(),w(O?"listening":"paused",s)}function At(t,e,n){te(V(),i.mode);const o=i.showCues&&e.cue?"* "+e.cue:L.cue===U.cue?" ":L.cue;if(i.mode==="tv"){const s=(q.find(r=>r.code===e.src)?.tag??(e.src??"").toUpperCase())||"?";e.translation||(e={...e,translation:t}),A.push({who:"them",text:t});const a=Y.slice(-2).reverse().join(`
`);Y.push(e.translation),Y.length>10&&Y.shift(),j({cue:o,orig:D(`[${s}] ${t}`),trans:e.translation,replies:a||" "}),oe(`[${s}] ${t}`,e.translation,[],e.cue)}else if(e.speaker==="them"){A.push({who:"them",text:t});const s=e.replies.length?be(e.replies):"(추천 답변 없음)";j({cue:o,orig:D(t),trans:e.translation,replies:s}),oe(t,e.translation,e.replies,e.cue),e.replies.length||ie("이번 응답에는 추천 답변이 없었어요. 계속 그러면 설정에서 번역 모델을 바꿔 보세요.")}else if(e.speaker==="me"){A.push({who:"me",text:t});const s=i.helpMyKorean?e.translation:"";i.replyToMyLang&&e.replies.length?(j({cue:o,orig:D(t),trans:s?`= ${s}`:" ",replies:be(e.replies)}),oe(t,s?`= ${s}`:"",e.replies,e.cue)):(xt(t,s),s&&j({cue:o,orig:D(t),trans:" ",replies:`말하기: ${s}`}))}A.length>20&&A.splice(0,A.length-20),i.webLookup&&e.lookup&&Ct(e.lookup,n)}async function Ot(t){if(!(t.role==="self"&&!i.helpMyKorean)){w("thinking");try{const e=await it(t.pcm,i);await Te(e)}catch(e){w("error",e.message)}}}const K=new et({onStart:t=>N?.start(t),onAudio:t=>N?.append(t),onEnd:t=>{i.sttMode==="live"?N?.end(t!==null):t&&(Z=Z.then(()=>Ot(t)))}},i.silenceMs,t=>{O&&w(t?"hearing":"listening")});K.sensitivity=i.sensitivity;re();K.onMeter=vt;function re(){K.tv=i.mode==="tv",K.silenceMs=i.mode==="tv"?Math.max(i.silenceMs,1100):i.silenceMs}function le(){N?.close(),N=null,i.sttMode==="live"&&(N=new at({apiKey:i.openaiKey,model:i.liveModel,delay:i.liveDelay,languages:i.mode==="tv"?[]:[i.theirLang,i.myLang],onPartial:Tt,onFinal:t=>{Z=Z.then(()=>Te(t))},onError:t=>w("error",t)}),N.connect())}async function Ae(t){if(O=t,t){const e=i.mic==="phone"?ce.Phone:ce.Glasses;await k.setRawAudio?.(i.mode==="tv");try{await k.audioControl(!0,e)}catch(n){O=!1,w("error",n.message);return}w("listening")}else await k.audioControl(!1),K.flush(),w("paused");T.length||(L={...U,orig:t?"듣는 중...":"일시정지 (탭하면 다시 시작)",cue:`Talk Assist   ${V()}`},z())}function Oe(){return i.openaiKey?"":"설정에서 OpenAI API 키를 입력하세요."}async function _e(){const t=Oe();if(t){w("error",t),L={...U,orig:"휴대폰 설정에서 API 키를 넣어 주세요"},z();return}le(),await Ae(!0)}wt(i,async t=>{i=t,K.sensitivity=t.sensitivity,re(),await X(k,t),O&&await k.audioControl(!1),await _e()},async t=>{i={...i,favLangs:t},await X(k,i),g.open&&(g.index=Math.min(g.index,ne().length-1),ee())},async t=>{if(t===i.myLang)return;const e=i.theirLang===t?t==="en"?"ko":"en":i.theirLang;i={...i,myLang:t,theirLang:e},await X(k,i),ae(i),A.length=0,ie(`번역 결과 언어: ${M(t).ko}`),te(V(),i.mode),j({cue:`* ${V()}`,orig:" ",trans:" ",replies:" "}),i.sttMode==="live"&&le()});await B.init(U);te(V(),i.mode);Mt&&w("idle","미리보기 모드: 휴대폰 마이크를 사용합니다"),await _e();function ke(t){return t?t.eventType??m.CLICK_EVENT:null}let Le=!1;function Ne(){Le||(Le=!0,k.audioControl(!1),N?.close(),_t())}const _t=k.onEvenHubEvent(t=>{const e=t.audioEvent;if(e?.audioPcm){O&&K.push(e.audioPcm,e.speakerRole??"unknown");return}const n=ke(t.textEvent)??ke(t.sysEvent);if(n!==m.LONG_PRESS_RELEASE_EVENT){if(g.open){$t(n);return}switch(n){case m.LONG_PRESS_EVENT:Et();break;case m.DOUBLE_CLICK_EVENT:k.shutDownPageContainer(1);break;case m.CLICK_EVENT:Oe()||Ae(!O);break;case m.SCROLL_TOP_EVENT:xe(-1);break;case m.SCROLL_BOTTOM_EVENT:xe(1);break;case m.SYSTEM_EXIT_EVENT:case m.ABNORMAL_EXIT_EVENT:Ne();break}}});window.addEventListener("beforeunload",Ne);
