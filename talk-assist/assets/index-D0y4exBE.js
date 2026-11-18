import{OsEventTypeList as f,TextContainerProperty as Pe,CreateStartUpPageContainer as Ie,TextContainerUpgrade as qe,AudioInputSource as ae}from"./dist-DaKccuR9.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const Ve="modulepreload",Ke=function(t,e){return new URL(t,e).href},re={},je=function(e,n,o){let s=Promise.resolve();if(n&&n.length>0){const r=document.getElementsByTagName("link"),p=document.querySelector("meta[property=csp-nonce]"),h=p?.nonce||p?.getAttribute("nonce");s=Promise.allSettled(n.map(a=>{if(a=Ke(a,o),a in re)return;re[a]=!0;const u=a.endsWith(".css"),m=u?'[rel="stylesheet"]':"";if(!!o)for(let C=r.length-1;C>=0;C--){const v=r[C];if(v.href===a&&(!u||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${m}`))return;const b=document.createElement("link");if(b.rel=u?"stylesheet":Ve,u||(b.as="script"),b.crossOrigin="",b.href=a,h&&b.setAttribute("nonce",h),document.head.appendChild(b),u)return new Promise((C,v)=>{b.addEventListener("load",C),b.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${a}`)))})}))}function i(r){const p=new Event("vite:preloadError",{cancelable:!0});if(p.payload=r,window.dispatchEvent(p),!p.defaultPrevented)throw r}return s.then(r=>{for(const p of r||[])p.status==="rejected"&&i(p.reason);return e().catch(i)})},le=["#1c5a1f","#24782a","#2fa236","#36cf3e","#3CFA44"];function De(){const t=new Set,e=new Map,n=c=>t.forEach(y=>y(c)),o=document.createElement("section");o.className="pv",o.innerHTML=`
    <div class="pv-badge">미리보기 · 안경 화면</div>
    <div class="pv-frame"><div class="pv-screen"></div></div>
    <div class="pv-btns">
      <button data-e="${f.SCROLL_TOP_EVENT}">↑ 이전</button>
      <button data-e="${f.CLICK_EVENT}">탭 (일시정지)</button>
      <button data-e="${f.SCROLL_BOTTOM_EVENT}">↓ 최신</button>
    </div>
    <div class="pv-btns">
      <button data-e="${f.LONG_PRESS_EVENT}" data-sys="1">길게 누르기 (언어)</button>
      <button data-e="${f.DOUBLE_CLICK_EVENT}">두 번 탭</button>
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
    .pv-btns button:active { background:#3CFA44; color:#111; }`,document.head.appendChild(s),document.body.prepend(o);const i=o.querySelector(".pv-screen"),r=o.querySelector(".pv-frame"),p=()=>{i.style.transform=`scale(${r.clientWidth/576})`};new ResizeObserver(p).observe(r),p(),o.querySelectorAll("button[data-e]").forEach(c=>{c.addEventListener("click",()=>n(c.dataset.sys?{sysEvent:{eventType:Number(c.dataset.e)}}:{textEvent:{eventType:Number(c.dataset.e)}}))});let h=null,a=null,u=null,m=!1;async function N(){h=await navigator.mediaDevices.getUserMedia({audio:m?{channelCount:1,echoCancellation:!1,noiseSuppression:!1,autoGainControl:!0}:{channelCount:1,echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0}}),a=new AudioContext;const c=a.createMediaStreamSource(h);u=a.createScriptProcessor(4096,1,1);const y=a.sampleRate/16e3;let S=0;u.onaudioprocess=M=>{const R=M.inputBuffer.getChannelData(0),G=new Int16Array(Math.floor((R.length-S)/y));for(let J=0;J<G.length;J++){const Re=R[Math.floor(S+J*y)]??0;G[J]=Math.max(-32768,Math.min(32767,Math.round(Re*32767)))}S=S+G.length*y-R.length,S<0&&(S=0),n({audioEvent:{audioPcm:new Uint8Array(G.buffer),source:"phone",speakerRole:"unknown"}})},c.connect(u),u.connect(a.destination)}function b(){u?.disconnect(),u=null,h?.getTracks().forEach(c=>c.stop()),h=null,a?.close(),a=null}function C(c){const y=c.containerID;let S=e.get(y);if(!S){const R=document.createElement("div");R.className="pv-box",i.appendChild(R),S={id:y,name:c.containerName,el:R},e.set(y,S)}const M=S.el.style;c.xPosition!==void 0&&(M.left=c.xPosition+"px",M.top=c.yPosition+"px",M.width=c.width+"px",M.height=c.height+"px",M.padding=(c.paddingLength??0)+"px",M.border=c.borderWidth?`${c.borderWidth}px solid ${le[Math.min(4,c.borderColor??4)]}`:"none",M.borderRadius=(c.borderRadius??0)+"px"),(c.textColor!==void 0||!M.color)&&(M.color=le[c.textColor??4]),c.content!==void 0&&(S.el.textContent=c.content)}return{async createStartUpPageContainer(c){for(const y of c.textObject??[])C(y);return 0},async textContainerUpgrade(c){return C(c),!0},async audioControl(c){try{return c&&!h&&await N(),c||b(),!0}catch(y){throw console.error(y),new Error("휴대폰 마이크를 쓸 수 없어요. 브라우저 마이크 권한을 허용하고, https 주소로 열었는지 확인하세요.")}},onEvenHubEvent(c){return t.add(c),()=>t.delete(c)},async setRawAudio(c){m!==c&&(m=c,h&&(b(),await N()))},async getLocalStorage(c){try{return localStorage.getItem(c)??""}catch{return""}},async setLocalStorage(c,y){try{return localStorage.setItem(c,y),!0}catch{return!1}},async shutDownPageContainer(){return b(),!0}}}async function Be(){if(await(async()=>{for(let e=0;e<15;e++){if(window.flutter_inappwebview)return!0;await new Promise(n=>setTimeout(n,100))}return!1})()){const{waitForEvenAppBridge:e}=await je(async()=>{const{waitForEvenAppBridge:n}=await import("./dist-DaKccuR9.js");return{waitForEvenAppBridge:n}},[],import.meta.url);return{bridge:await e(),preview:!1}}return{bridge:De(),preview:!0}}const H=t=>({speaker:"them",translation:"",replies:[],cue:"",lookup:"",...t});H({translation:"오랜만이에요! 어떻게 지냈어요?",replies:[{text:"Pretty good! Busy with work. You?",pron:"",gloss:"잘 지냈어요, 바빴어요"},{text:"It's been ages! I'm doing great.",pron:"",gloss:"정말 오랜만, 잘 지내요"},{text:"Not bad. What have you been up to?",pron:"",gloss:"괜찮아요, 뭐 하고 지냈어요?"}]}),H({speaker:"me",translation:"I'm teaching kids at an elementary school."}),H({translation:"좋네요! 그나저나 오늘 테슬라 주가 봤어요? 엄청 올랐더라고요.",cue:"through the roof: 급등하다, 치솟다",lookup:"Tesla stock price today",replies:[{text:"No way! How much did it go up?",pron:"",gloss:"정말요? 얼마나 올랐어요?"},{text:"I saw that. Do you own any?",pron:"",gloss:"봤어요. 갖고 있어요?"},{text:"I don't follow stocks much.",pron:"",gloss:"주식은 잘 안 봐요"}]}),H({translation:"점심 먹으러 갈까 하는데 같이 갈래요? 근처에 새로 생긴 데가 있어요.",replies:[{text:"Sure, I'd love to! What kind of food?",pron:"",gloss:"좋아요! 무슨 음식이에요?"},{text:"Sounds good. Give me five minutes.",pron:"",gloss:"좋아요, 5분만요"},{text:"Sorry, I already ate. Maybe next time?",pron:"",gloss:"이미 먹었어요, 다음에요"}]});const q=[{code:"ko",tag:"KO",ko:"한국어",en:"Korean",latin:!1,aliases:["한국어","한국말","한글","코리안"]},{code:"en",tag:"EN",ko:"영어",en:"English",latin:!0,aliases:["영어","잉글리시","잉글리쉬","영어로"]},{code:"ja",tag:"JP",ko:"일본어",en:"Japanese",latin:!1,aliases:["일본어","일어","일본말","재패니즈"]},{code:"zh",tag:"CN",ko:"중국어",en:"Chinese (Mandarin)",latin:!1,aliases:["중국어","중국말","만다린","차이니즈"]},{code:"es",tag:"ES",ko:"스페인어",en:"Spanish",latin:!0,aliases:["스페인어","스페인말","스패니시"]},{code:"fr",tag:"FR",ko:"프랑스어",en:"French",latin:!0,aliases:["프랑스어","불어","프렌치"]},{code:"de",tag:"DE",ko:"독일어",en:"German",latin:!0,aliases:["독일어","독어","저먼"]},{code:"it",tag:"IT",ko:"이탈리아어",en:"Italian",latin:!0,aliases:["이탈리아어","이태리어"]},{code:"pt",tag:"PT",ko:"포르투갈어",en:"Portuguese",latin:!0,aliases:["포르투갈어","포르투칼어"]},{code:"ru",tag:"RU",ko:"러시아어",en:"Russian",latin:!1,aliases:["러시아어","노어"]},{code:"vi",tag:"VN",ko:"베트남어",en:"Vietnamese",latin:!0,aliases:["베트남어","베트남말"]},{code:"th",tag:"TH",ko:"태국어",en:"Thai",latin:!1,aliases:["태국어","태국말"]},{code:"id",tag:"ID",ko:"인도네시아어",en:"Indonesian",latin:!0,aliases:["인도네시아어","인니어"]}],$=t=>q.find(e=>e.code===t)??q[1],Fe=/(모드|번역|바꿔|바꾸|변경|설정|전환|에서|으로|로$|로\s)/;function Ue(t,e){const n=t.replace(/[.,!?~"'·]/g," ").trim();if(n.replace(/\s/g,"").length>22)return null;const o=n.replace(/\s/g,"").toLowerCase();if(/(tv|티비|티브이|자막)모드/.test(o))return{mode:"tv"};if(/(대화|회화)모드/.test(o))return{mode:"chat"};const s=[];for(const r of q){let p=-1;for(const h of r.aliases){const a=n.indexOf(h);a>=0&&(p<0||a<p)&&(p=a)}p>=0&&s.push({code:r.code,at:p})}s.sort((r,p)=>r.at-p.at);const i=[...new Set(s.map(r=>r.code))];return i.length>=2?{their:i[0],my:i[1]}:i.length===1&&Fe.test(n)&&i[0]!==e?{their:i[0]}:null}const xe=(t,e)=>`${$(e).tag} -> ${$(t).tag}`,ke=t=>`TV -> ${$(t).tag}`,ce={openaiKey:"",openaiModel:"gpt-6-luna",theirLang:"en",myLang:"ko",favLangs:["en","ja","zh"],mode:"chat",sttMode:"live",liveModel:"gpt-live-transcribe",liveDelay:"low",sttModel:"gpt-transcribe",mic:"glasses",replyCount:3,showGloss:!1,helpMyKorean:!0,replyToMyLang:!0,showCues:!0,webLookup:!0,searchModel:"gpt-6-luna",silenceMs:700,sensitivity:"high",v:3},X="talk-assist-settings";async function ze(t){let e="";try{e=t?await t.getLocalStorage(X):""}catch{}if(!e)try{e=localStorage.getItem(X)??""}catch{}try{const n=e?JSON.parse(e):{};return(n.v??1)<3&&((n.silenceMs===1100||n.silenceMs===700)&&delete n.silenceMs,n.v=3),{...ce,...n}}catch{return{...ce}}}async function oe(t,e){const n=JSON.stringify(e);try{t&&await t.setLocalStorage(X,n)}catch{}try{localStorage.setItem(X,n)}catch{}}const P=16e3,Ge=300,Je=400,He=25e3;function ue(t){const e=new Int16Array(t.reduce((o,s)=>o+s.length,0));let n=0;for(const o of t)e.set(o,n),n+=o.length;return e}class We{level=300;gain=1;run(e){let n=0;for(let r=0;r<e.length;r++)n+=e[r]*e[r];const o=Math.sqrt(n/Math.max(1,e.length));this.level=Math.max(o,this.level*.995,40);const s=Math.min(25,Math.max(1,3e3/this.level));if(this.gain+=(s-this.gain)*(s<this.gain?.5:.05),this.gain<=1.01)return e;const i=new Int16Array(e.length);for(let r=0;r<e.length;r++)i[r]=Math.max(-32768,Math.min(32767,Math.round(e[r]*this.gain)));return i}}function Ye(t){const e=Math.floor(t.byteLength/2),n=new Int16Array(e),o=new DataView(t.buffer,t.byteOffset,e*2);for(let s=0;s<e;s++)n[s]=o.getInt16(s*2,!0);return n}const pe={normal:[500,2.5],high:[220,1.8],max:[110,1.4]},Xe=3e3,Qe={normal:120,high:60,max:30},Ze=8e3;class et{constructor(e,n=700,o){this.ev=e,this.silenceMs=n,this.onLevel=o}sensitivity="high";tv=!1;onMeter;history=[];historyN=[];historySamples=0;noiseFloor=300;chunks=[];preRoll=[];preRollSamples=0;speaking=!1;silentSamples=0;speechSamples=0;totalSamples=0;roles={self:0,other:0,unknown:0};agc=new We;push(e,n="unknown"){const o=this.agc.run(Ye(e)),s=o.length;let i=0;for(let v=0;v<s;v++)i+=o[v]*o[v];const r=Math.sqrt(i/Math.max(1,s));for(this.history.push(r),this.historyN.push(s),this.historySamples+=s;this.historySamples>P*3&&this.history.length>1;)this.history.shift(),this.historySamples-=this.historyN.shift();const p=[...this.history].sort((v,c)=>v-c);this.noiseFloor=Math.min(Xe,p[Math.floor(p.length*.15)]??r);const[h,a]=pe[this.sensitivity]??pe.high;let u;if(this.tv){const v=p[Math.floor(p.length/2)]??r;u=Math.max(Qe[this.sensitivity]??60,v*.5)}else u=Math.max(h,this.noiseFloor*a),this.speaking&&(u*=.85);const m=r>u;if(this.onMeter?.(r,u,this.speaking),!this.speaking){for(this.preRoll.push(o),this.preRollSamples+=s;this.preRollSamples>P*Ge/1e3&&this.preRoll.length>1;)this.preRollSamples-=this.preRoll.shift().length;m&&(this.speaking=!0,this.chunks=[...this.preRoll],this.totalSamples=this.preRollSamples,this.preRoll=[],this.preRollSamples=0,this.silentSamples=0,this.speechSamples=s,this.roles={self:0,other:0,unknown:0},this.roles[n]+=s,this.onLevel?.(!0),this.ev.onStart?.(ue(this.chunks)));return}this.chunks.push(o),this.totalSamples+=s,this.roles[n]+=s,this.ev.onAudio?.(o),m?(this.speechSamples+=s,this.silentSamples=0):this.silentSamples+=s;const N=this.silentSamples/P*1e3,b=this.totalSamples/P*1e3,C=this.tv?Ze:He;(N>=this.silenceMs||b>=C)&&this.flush()}flush(){if(!this.speaking)return;this.speaking=!1,this.onLevel?.(!1);const e=this.speechSamples/P*1e3,n=ue(this.chunks);if(this.chunks=[],e<Je){this.ev.onEnd(null);return}const o=this.roles,s=o.self>o.other&&o.self>o.unknown?"self":o.other>o.self&&o.other>o.unknown?"other":"unknown";this.ev.onEnd({pcm:n,role:s,durationMs:n.length/P*1e3})}}function tt(t,e=P){const n=new ArrayBuffer(44),o=new DataView(n),s=t.length*2,i=(r,p)=>{for(let h=0;h<p.length;h++)o.setUint8(r+h,p.charCodeAt(h))};return i(0,"RIFF"),o.setUint32(4,36+s,!0),i(8,"WAVE"),i(12,"fmt "),o.setUint32(16,16,!0),o.setUint16(20,1,!0),o.setUint16(22,1,!0),o.setUint32(24,e,!0),o.setUint32(28,e*2,!0),o.setUint16(32,2,!0),o.setUint16(34,16,!0),i(36,"data"),o.setUint32(40,s,!0),new Blob([n,t.buffer],{type:"audio/wav"})}const nt="wss://api.openai.com/v1/realtime?intent=transcription",Le=24e3;class ot{last=0;run(e){const n=16e3/Le,o=Math.floor(e.length/n),s=new Int16Array(o);for(let i=0;i<o;i++){const r=i*n,p=Math.floor(r),h=r-p,a=p===0?this.last:e[p-1],u=e[Math.min(p,e.length-1)];s[i]=Math.round(a+(u-a)*h)}return e.length&&(this.last=e[e.length-1]),s}reset(){this.last=0}}function st(t){const e=new Uint8Array(t.buffer,t.byteOffset,t.byteLength);let n="";for(let o=0;o<e.length;o+=32768)n+=String.fromCharCode(...e.subarray(o,o+32768));return btoa(n)}class it{constructor(e){this.o=e}ws=null;outbox=[];resampler=new ot;partial=new Map;closed=!1;retry=0;connect(){this.closed=!1;const e=new WebSocket(nt,["realtime","openai-insecure-api-key."+this.o.apiKey]);this.ws=e,e.onopen=()=>{this.retry=0,e.send(JSON.stringify({type:"session.update",session:{type:"transcription",audio:{input:{format:{type:"audio/pcm",rate:Le},transcription:{model:this.o.model,...this.o.languages.length?{languages:this.o.languages}:{},delay:this.o.delay,prompt:"A casual face-to-face conversation between two people."},turn_detection:null}}}}));for(const n of this.outbox)e.send(n);this.outbox=[],this.o.onState?.(!0)},e.onmessage=n=>{let o;try{o=JSON.parse(n.data)}catch{return}switch(o.type){case"conversation.item.input_audio_transcription.delta":{const s=(this.partial.get(o.item_id)??"")+(o.delta??"");this.partial.set(o.item_id,s),this.o.onPartial(s);break}case"conversation.item.input_audio_transcription.completed":{this.partial.delete(o.item_id);const s=String(o.transcript??"").trim();s&&this.o.onFinal(s);break}case"conversation.item.input_audio_transcription.failed":this.partial.delete(o.item_id),this.o.onError("실시간 인식 실패: "+(o.error?.message??""));break;case"error":/buffer.*(empty|too small)/i.test(o.error?.message??"")||this.o.onError("실시간 인식 오류: "+(o.error?.message??JSON.stringify(o.error)));break}},e.onerror=()=>this.o.onError("실시간 인식 서버에 연결하지 못했어요. 키·네트워크를 확인하세요."),e.onclose=()=>{if(this.o.onState?.(!1),this.ws=null,this.closed)return;const n=Math.min(1e4,500*2**this.retry++);setTimeout(()=>{this.closed||this.connect()},n)}}send(e){const n=JSON.stringify(e);this.ws?.readyState===WebSocket.OPEN?this.ws.send(n):this.outbox.push(n)}start(e){this.resampler.reset(),this.send({type:"input_audio_buffer.clear"}),this.append(e)}append(e){e.length&&this.send({type:"input_audio_buffer.append",audio:st(this.resampler.run(e))})}end(e){this.send({type:e?"input_audio_buffer.commit":"input_audio_buffer.clear"})}close(){this.closed=!0,this.outbox=[],this.ws?.close(),this.ws=null}}async function at(t,e){const n=new FormData;n.append("file",tt(t),"speech.wav"),n.append("model",e.sttModel),n.append("response_format","json"),n.append("prompt",e.mode==="tv"?"Dialogue from a TV show or video.":`A casual conversation in ${$(e.theirLang).en} and ${$(e.myLang).en}.`);const o=await fetch("https://api.openai.com/v1/audio/transcriptions",{method:"POST",headers:{Authorization:`Bearer ${e.openaiKey}`},body:n});if(!o.ok)throw new Error(`STT ${o.status}: ${(await o.text()).slice(0,200)}`);const s=await o.json();return String(s.text??"").trim()}function rt(t){if(t.mode==="tv")return ft(t);const e=$(t.theirLang),n=$(t.myLang),o=e.latin?'"pron": always "".':`"pron": how to pronounce "text", written in ${n.en} script so the user can read it aloud (e.g. Hangul for Korean users).`;return`You help a ${n.en} speaker hold a live spoken conversation in ${e.en} through smart glasses.
You receive the latest utterance (speech-to-text, may contain recognition errors) plus recent conversation history.

Rules:
- Decide who spoke from the language of the latest utterance.
- If it is ${e.en} (the other person) → "speaker": "them".
  * "translation": natural, concise ${n.en} translation (spoken style, not literal).
  * "replies": ALWAYS exactly ${t.replyCount} objects — short ${e.en} replies the user could say next. Each under 12 words, natural spoken ${e.en}, simple vocabulary, different intents (e.g. agree / ask a follow-up / politely decline or clarify).
    Each object: "text": the reply in ${e.en}; ${o} "gloss": very short ${n.en} meaning (under 12 characters).
- If it is ${n.en} → "speaker": "me". "translation": how to say it naturally in ${e.en}, under 20 words.
  "replies": ${t.replyToMyLang?`ALWAYS exactly ${t.replyCount} objects — short ${e.en} replies the user could say in response to this ${n.en} line (treat it as something said to the user), same format and rules as above.`:"[]."}
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

Respond with the JSON object only.`}function ct(t){if(typeof t=="string")return t.trim()?{text:t.trim(),pron:"",gloss:""}:null;if(!t||typeof t!="object")return null;const e=String(t.text??t.reply??t.en??t.say??Object.values(t).find(n=>typeof n=="string")??"").trim();return e?{text:e,pron:String(t.pron??t.pronunciation??t.reading??"").trim(),gloss:String(t.gloss??t.meaning??t.ko??t.translation??"").trim()}:null}function ut(t){const e=t.match(/\{[\s\S]*\}/);if(!e)throw new Error("AI 응답에서 JSON을 찾지 못함");const n=JSON.parse(e[0]),o=String(n.speaker??n.lang??"").toLowerCase(),s=o==="them"||o==="me"?o:"other",i=n.replies??n.suggestions??n.suggested_replies??[];return{src:String(n.src??"").toLowerCase(),speaker:n.src!==void 0?"them":s,translation:String(n.translation??""),replies:(Array.isArray(i)?i:[]).map(ct).filter(r=>!!r),cue:String(n.cue??"").trim(),lookup:String(n.lookup??"").trim()}}async function pt(t,e,n){const o=await fetch("https://api.openai.com/v1/responses",{method:"POST",headers:{"content-type":"application/json",Authorization:`Bearer ${t.openaiKey}`},body:JSON.stringify({model:t.openaiModel,instructions:rt(t),input:lt(e,n),reasoning:{effort:"none"},text:{format:{type:"json_object"}},max_output_tokens:500})});if(!o.ok)throw new Error(`GPT ${o.status}: ${(await o.text()).slice(0,200)}`);return ut(dt(await o.json()))}function dt(t){if(typeof t.output_text=="string")return t.output_text;let e="";for(const n of t.output??[])if(n.type==="message")for(const o of n.content??[])o.text&&(e+=o.text);return e}function ht(t,e,n){return pt(t,e,n)}function ft(t){const e=$(t.myLang);return`You subtitle TV or video audio for a ${e.en} viewer on smart glasses.
The latest line comes from speech-to-text and may contain recognition errors; use the recent lines for context.
- "src": ISO 639-1 code of the line's language (e.g. "en", "ja", "zh", "es").
- "translation": natural, concise ${e.en} subtitle of the line, whatever language it is in. If the line is already ${e.en}, "translation": "".
- "cue": ${t.showCues?`if the line has an idiom, slang, uncommon word, or a name/place/event that needs background, explain ONE in ${e.en}, "term: short explanation", under 40 characters. Otherwise "".`:'"".'}
- "lookup": ${t.webLookup?'if the line touches a real-world fact that changes over time (stock price, score, news, weather) and a quick check would help the viewer, ONE short English web search query. Otherwise "".':'"".'}
Return ONLY a JSON object: {"src":"en","translation":"...","cue":"","lookup":""}`}const de=new Map,mt=2*60*1e3;async function gt(t,e){const n=e.toLowerCase(),o=de.get(n);if(o&&Date.now()-o.at<mt)return o.result;const s=await fetch("https://api.openai.com/v1/responses",{method:"POST",headers:{"content-type":"application/json",Authorization:`Bearer ${t.openaiKey}`},body:JSON.stringify({model:t.searchModel,tools:[{type:"web_search",search_context_size:"low",user_location:{type:"approximate",country:"KR",timezone:"Asia/Seoul"}}],instructions:'Search the web and answer in Korean for a smart-glasses display. One line, under 45 characters. Lead with the key number or fact, then when it was measured (e.g. "테슬라 $412.3 (+2.1%) · 11/17 마감"). No sentences, no markdown, no citations in the text.',input:e,reasoning:{effort:"low"}})});if(!s.ok)throw new Error(`검색 ${s.status}: ${(await s.text()).slice(0,200)}`);const i=await s.json();let r="";const p=[];for(const a of i.output??[])if(a.type==="message")for(const u of a.content??[]){u.text&&(r+=u.text);for(const m of u.annotations??[])m.type==="url_citation"&&!p.some(N=>N.url===m.url)&&p.push({title:m.title??m.url,url:m.url})}r=r.replace(/\(\[[^\]]*\]\([^)]*\)\)|\[[^\]]*\]\([^)]*\)/g,"").replace(/\s+/g," ").trim();const h={query:e,text:r,sources:p.slice(0,3)};return de.set(n,{at:Date.now(),result:h}),h}const W={cue:{id:1,name:"cue",y:0,h:48,color:3},orig:{id:2,name:"orig",y:48,h:48,color:2},trans:{id:3,name:"trans",y:96,h:72,color:4},replies:{id:4,name:"replies",y:168,h:120,color:4}};class yt{constructor(e){this.bridge=e}last={cue:"",orig:"",trans:"",replies:""};pending=null;timer=null;async init(e){const n=Object.keys(W).map(s=>{const i=W[s];return new Pe({xPosition:0,yPosition:i.y,width:576,height:i.h,borderWidth:s==="replies"?1:0,borderColor:2,borderRadius:6,paddingLength:4,containerID:i.id,containerName:i.name,content:e[s]||" ",textColor:i.color,isEventCapture:s==="replies"?1:0})}),o=await this.bridge.createStartUpPageContainer(new Ie({containerTotalNum:n.length,textObject:n}));return this.last={...e},o}show(e){this.pending=e,this.timer===null&&(this.timer=window.setTimeout(()=>this.flush(),120))}async flush(){this.timer=null;const e=this.pending;if(this.pending=null,!!e)for(const n of Object.keys(W)){if(e[n]===this.last[n])continue;const o=W[n];this.last[n]=e[n],await this.bridge.textContainerUpgrade(new qe({containerID:o.id,containerName:o.name,content:e[n]||" "}))}}}const d=t=>document.querySelector(t);let _=new Set;function wt(t,e,n){_=new Set(t.favLangs),St(),d("#app").innerHTML=`
    <main>
      <header>
        <h1>Talk Assist <small id="modeBadge" class="mode"></small></h1>
        <div id="status" class="chip">준비 중</div>
      </header>

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
          <label>상대 언어 <select id="theirLang">${me()}</select></label>
          <label>내 언어 <select id="myLang">${me()}</select></label>
        </div>
        <div class="fav-head">★ 즐겨찾기 <small>안경 언어 메뉴(길게 누르기)에는 여기 고른 언어만 나와요</small></div>
        <div id="favs" class="favs"></div>
        <p class="hint" style="margin-top:6px">말로도 바꿀 수 있어요: "일본어 한국어", "중국어 모드", "TV 모드", "대화 모드". 안경·반지를 길게 누르면 메뉴 맨 위에 TV 자막이 있어요.</p>
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
    </main>`;const o=["openaiKey","openaiModel","liveModel","searchModel","sttModel","silenceMs"];for(const a of o)d("#"+a).value=String(t[a]);d("#mic").value=t.mic,d("#sttMode").value=t.sttMode,d("#liveDelay").value=t.liveDelay,d("#showCues").checked=t.showCues,d("#webLookup").checked=t.webLookup;const s=()=>{d("#searchRow").style.display=d("#webLookup").checked?"":"none"};d("#webLookup").addEventListener("change",s),s();const i=()=>{const a=d("#sttMode").value==="live";d("#liveRow").style.display=a?"":"none",d("#batchRow").style.visibility=a?"hidden":"visible"};d("#sttMode").addEventListener("change",i),i(),d("#replyCount").value=String(t.replyCount),d("#sensitivity").value=t.sensitivity;const p=[500,700,1100,1500].reduce((a,u)=>Math.abs(u-t.silenceMs)<Math.abs(a-t.silenceMs)?u:a);d("#silenceMs").value=String(p),Me(t);const h=()=>{const a=d("#myLang").value;d("#favs").innerHTML=q.filter(u=>u.code!==a).map(u=>`<button type="button" class="fav${_.has(u.code)?" on":""}" data-code="${u.code}">${_.has(u.code)?"★":"☆"} ${u.ko} <small>${u.tag}</small></button>`).join("")};d("#favs").addEventListener("click",a=>{const u=a.target.closest("button[data-code]");if(!u)return;const m=u.dataset.code;_.has(m)?_.delete(m):_.add(m),h(),n?.([..._])}),d("#myLang").addEventListener("change",h),h(),d("#showGloss").checked=t.showGloss,d("#helpMyKorean").checked=t.helpMyKorean,d("#replyToMyLang").checked=t.replyToMyLang,document.addEventListener("focusin",a=>{const u=a.target;u.matches?.("input, select")&&setTimeout(()=>u.scrollIntoView({block:"center",behavior:"smooth"}),300)}),document.querySelector("#quickSave")?.addEventListener("click",()=>{const a=d("#quickKey").value.trim();a&&(d("#openaiKey").value=a,d("#quick").remove(),d("#save").click())}),d("#save").addEventListener("click",()=>{const a=u=>d("#"+u).value.trim();e({openaiKey:a("openaiKey"),openaiModel:a("openaiModel"),sttMode:a("sttMode"),liveModel:a("liveModel"),liveDelay:a("liveDelay"),showCues:d("#showCues").checked,webLookup:d("#webLookup").checked,searchModel:a("searchModel"),sttModel:a("sttModel"),mic:a("mic"),replyCount:Number(a("replyCount")),favLangs:[..._],mode:a("mode"),theirLang:a("theirLang"),myLang:a("myLang"),silenceMs:Number(a("silenceMs"))||700,sensitivity:a("sensitivity"),v:3,showGloss:d("#showGloss").checked,helpMyKorean:d("#helpMyKorean").checked,replyToMyLang:d("#replyToMyLang").checked}),d("#settings").open=!1})}const bt={idle:"대기",listening:"듣는 중",hearing:"말소리 감지",thinking:"번역 중",paused:"일시정지",error:"오류"};function w(t,e=""){const n=d("#status");n.className=`chip chip-${t}`,n.textContent=bt[t],n.title=e,t==="error"&&e&&Lt(e)}function x(t){return t.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e])}function F(t){const e=d("#log");for(e.querySelector(".empty")?.remove(),e.insertAdjacentHTML("afterbegin",t);e.children.length>40;)e.lastElementChild?.remove()}const he=t=>Math.min(100,Math.log10(1+t)/4.2*100);let fe=0;function vt(t,e,n){const o=performance.now();if(o-fe<60)return;fe=o;const s=document.querySelector("#meterBar"),i=document.querySelector("#meterTh");!s||!i||(s.style.width=he(t)+"%",s.style.background=n?"#3CFA44":"#4a6b4c",i.style.left=he(e)+"%")}function se(t,e){const n=document.querySelector("#modeBadge");n&&(n.textContent=e==="tv"?`TV 자막 · ${t}`:`대화 · ${t}`,n.className="mode"+(e==="tv"?" tv":""))}function Se(t){const e=d("#live");e.hidden=!t,e.textContent=t}function te(t,e,n,o=""){F(`
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
    </article>`)}function me(){return q.map(t=>`<option value="${t.code}">${t.ko}</option>`).join("")}function Me(t){const e=document.querySelector("#mode");e&&t.mode&&(e.value=t.mode);const n=document.querySelector("#theirLang"),o=document.querySelector("#myLang");n&&(n.value=t.theirLang),o&&(o.value=t.myLang)}function Ee(t){F(`<article class="turn note">${x(t)}</article>`)}function Lt(t){F(`<article class="turn err">${x(t)}</article>`)}function St(){const t=`
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
  `,e=document.createElement("style");e.textContent=t,document.head.appendChild(e)}const{bridge:k,preview:Mt}=await Be();let l=await ze(k);const K=new yt(k),O=[],Y=[],E=[];let I=-1,T=!1,A=null,Q=Promise.resolve();const U={cue:"Talk Assist",orig:"듣는 중...",trans:" ",replies:`탭: 일시정지   스와이프: 이전 대화
길게 누르기: 언어   두 번 탭: 종료`};let L={...U};function ge(t){return t.map((e,n)=>{const o=e.pron?` [${e.pron}]`:"",s=l.showGloss&&e.gloss?` (${e.gloss})`:"";return`${n+1}. ${e.text}${o}${s}`}).join(`
`)}const j=(t,e=70)=>t.length>e?"…"+t.slice(-e):t;function z(){g.open||I===-1&&K.show(L)}const g={open:!1,index:0},ee=()=>{const t=q.filter(o=>o.code!==l.myLang),e=t.filter(o=>l.favLangs.includes(o.code)||o.code===l.theirLang),n=(e.length>1?e:t).map(o=>({code:o.code,label:`${xe(l.myLang,o.code)}  ${o.ko}`,now:l.mode==="chat"&&o.code===l.theirLang}));return[{code:"tv",label:`${ke(l.myLang)}  TV 자막 (모든 언어)`,now:l.mode==="tv"},...n]},B=()=>l.mode==="tv"?ke(l.myLang):xe(l.myLang,l.theirLang);function Z(){const t=ee(),e=Math.max(0,Math.min(g.index-2,t.length-5)),n=t.slice(e,e+5).map((o,s)=>`${e+s===g.index?"> ":"   "}${o.label}${o.now?"  (현재)":""}`);K.show({cue:"* 언어 선택",orig:"스와이프: 이동   탭: 선택   길게: 취소",trans:"",replies:n.join(`
`)})}function Et(){const t=ee();g.open=!0,g.index=Math.max(0,t.findIndex(e=>e.now)),Z(),w(T?"listening":"paused","언어 메뉴")}function ye(){g.open=!1,I=-1,K.show(L)}async function $t(t){const e=ee();switch(t){case f.SCROLL_TOP_EVENT:return g.index=(g.index-1+e.length)%e.length,Z();case f.SCROLL_BOTTOM_EVENT:return g.index=(g.index+1)%e.length,Z();case f.CLICK_EVENT:{const n=e[g.index];return g.open=!1,n.now?ye():Ce(n.code==="tv"?{mode:"tv"}:{their:n.code,mode:"chat"})}case f.LONG_PRESS_EVENT:case f.DOUBLE_CLICK_EVENT:return ye()}}function D(t){L=t,E.push(t),E.length>30&&E.shift(),I=-1,z()}function we(t){if(!E.length)return;const e=E.length-1,o=Math.min(e,Math.max(0,(I===-1?e:I)+t));if(I=o===e?-1:o,I===-1)return K.show(L);const s=E[o];K.show({...s,cue:`[${o+1}/${E.length}] ${s.cue}`})}function Ct(t){Se(t),L={...L,orig:"> "+j(t,66)},z()}let ne={query:"",at:0};async function Tt(t,e){const n=t.toLowerCase();if(n===ne.query&&Date.now()-ne.at<6e4)return;ne={query:n,at:Date.now()};const o=L,s=i=>{L={...L,cue:i};const r=E.indexOf(o);r>=0&&(E[r]={...E[r],cue:i}),z()};s("? "+t+" ...");try{const i=e?await new Promise(r=>setTimeout(()=>r(e),1500)):await gt(l,t);if(!i.text)return s(o.cue);s("# "+i.text),kt(i.query,i.text,i.sources)}catch(i){s(o.cue),w("error",i.message)}}async function $e(t){if(Se(""),!(!t||t.length<2)){w("thinking");try{const e=Ue(t,l.myLang);if(e)return await Ce(e);_t(t,await ht(l,O,t))}catch(e){w("error",e.message),console.error(e);return}w(T?"listening":"paused")}}async function Ce(t){const e=t.their??l.theirLang,n=t.my??l.myLang,o=t.mode??(t.their?"chat":l.mode);if(e===n||e===l.theirLang&&n===l.myLang&&o===l.mode)return;l={...l,theirLang:e,myLang:n,mode:o},ie(),await k.setRawAudio?.(o==="tv"),await oe(k,l),Me(l),O.length=0;const s=o==="tv"?`TV 자막 모드 (모든 언어 → ${$(n).ko})`:`대화 모드 ${$(e).ko} → ${$(n).ko}`;Ee(s),se(B(),o),D({cue:`* ${B()}`,orig:" ",trans:" ",replies:" "}),l.sttMode==="live"&&Te(),w(T?"listening":"paused",s)}function _t(t,e,n){se(B(),l.mode);const o=l.showCues&&e.cue?"* "+e.cue:L.cue===U.cue?" ":L.cue;if(l.mode==="tv"){const s=(q.find(r=>r.code===e.src)?.tag??(e.src??"").toUpperCase())||"?";e.translation||(e={...e,translation:t}),O.push({who:"them",text:t});const i=Y.slice(-2).reverse().join(`
`);Y.push(e.translation),Y.length>10&&Y.shift(),D({cue:o,orig:j(`[${s}] ${t}`),trans:e.translation,replies:i||" "}),te(`[${s}] ${t}`,e.translation,[],e.cue)}else if(e.speaker==="them"){O.push({who:"them",text:t});const s=e.replies.length?ge(e.replies):"(추천 답변 없음)";D({cue:o,orig:j(t),trans:e.translation,replies:s}),te(t,e.translation,e.replies,e.cue),e.replies.length||Ee("이번 응답에는 추천 답변이 없었어요. 계속 그러면 설정에서 번역 모델을 바꿔 보세요.")}else if(e.speaker==="me"){O.push({who:"me",text:t});const s=l.helpMyKorean?e.translation:"";l.replyToMyLang&&e.replies.length?(D({cue:o,orig:j(t),trans:s?`= ${s}`:" ",replies:ge(e.replies)}),te(t,s?`= ${s}`:"",e.replies,e.cue)):(xt(t,s),s&&D({cue:o,orig:j(t),trans:" ",replies:`말하기: ${s}`}))}O.length>20&&O.splice(0,O.length-20),l.webLookup&&e.lookup&&Tt(e.lookup,n)}async function Ot(t){if(!(t.role==="self"&&!l.helpMyKorean)){w("thinking");try{const e=await at(t.pcm,l);await $e(e)}catch(e){w("error",e.message)}}}const V=new et({onStart:t=>A?.start(t),onAudio:t=>A?.append(t),onEnd:t=>{l.sttMode==="live"?A?.end(t!==null):t&&(Q=Q.then(()=>Ot(t)))}},l.silenceMs,t=>{T&&w(t?"hearing":"listening")});V.sensitivity=l.sensitivity;ie();V.onMeter=vt;function ie(){V.tv=l.mode==="tv",V.silenceMs=l.mode==="tv"?Math.max(l.silenceMs,1100):l.silenceMs}function Te(){A?.close(),A=null,l.sttMode==="live"&&(A=new it({apiKey:l.openaiKey,model:l.liveModel,delay:l.liveDelay,languages:l.mode==="tv"?[]:[l.theirLang,l.myLang],onPartial:Ct,onFinal:t=>{Q=Q.then(()=>$e(t))},onError:t=>w("error",t)}),A.connect())}async function _e(t){if(T=t,t){const e=l.mic==="phone"?ae.Phone:ae.Glasses;await k.setRawAudio?.(l.mode==="tv");try{await k.audioControl(!0,e)}catch(n){T=!1,w("error",n.message);return}w("listening")}else await k.audioControl(!1),V.flush(),w("paused");E.length||(L={...U,orig:t?"듣는 중...":"일시정지 (탭하면 다시 시작)",cue:`Talk Assist   ${B()}`},z())}function Oe(){return l.openaiKey?"":"설정에서 OpenAI API 키를 입력하세요."}async function Ae(){const t=Oe();if(t){w("error",t),L={...U,orig:"휴대폰 설정에서 API 키를 넣어 주세요"},z();return}Te(),await _e(!0)}wt(l,async t=>{l=t,V.sensitivity=t.sensitivity,ie(),await oe(k,t),T&&await k.audioControl(!1),await Ae()},async t=>{l={...l,favLangs:t},await oe(k,l),g.open&&(g.index=Math.min(g.index,ee().length-1),Z())});await K.init(U);se(B(),l.mode);Mt&&w("idle","미리보기 모드: 휴대폰 마이크를 사용합니다"),await Ae();function be(t){return t?t.eventType??f.CLICK_EVENT:null}let ve=!1;function Ne(){ve||(ve=!0,k.audioControl(!1),A?.close(),At())}const At=k.onEvenHubEvent(t=>{const e=t.audioEvent;if(e?.audioPcm){T&&V.push(e.audioPcm,e.speakerRole??"unknown");return}const n=be(t.textEvent)??be(t.sysEvent);if(n!==f.LONG_PRESS_RELEASE_EVENT){if(g.open){$t(n);return}switch(n){case f.LONG_PRESS_EVENT:Et();break;case f.DOUBLE_CLICK_EVENT:k.shutDownPageContainer(1);break;case f.CLICK_EVENT:Oe()||_e(!T);break;case f.SCROLL_TOP_EVENT:we(-1);break;case f.SCROLL_BOTTOM_EVENT:we(1);break;case f.SYSTEM_EXIT_EVENT:case f.ABNORMAL_EXIT_EVENT:Ne();break}}});window.addEventListener("beforeunload",Ne);
