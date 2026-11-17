import{OsEventTypeList as k,TextContainerProperty as pe,CreateStartUpPageContainer as ue,TextContainerUpgrade as de,AudioInputSource as V}from"./dist-DaKccuR9.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();const he="modulepreload",fe=function(t,e){return new URL(t,e).href},J={},me=function(e,n,o){let s=Promise.resolve();if(n&&n.length>0){const a=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),d=l?.nonce||l?.getAttribute("nonce");s=Promise.allSettled(n.map(p=>{if(p=fe(p,o),p in J)return;J[p]=!0;const u=p.endsWith(".css"),S=u?'[rel="stylesheet"]':"";if(!!o)for(let T=a.length-1;T>=0;T--){const i=a[T];if(i.href===p&&(!u||i.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${p}"]${S}`))return;const b=document.createElement("link");if(b.rel=u?"stylesheet":he,u||(b.as="script"),b.crossOrigin="",b.href=p,d&&b.setAttribute("nonce",d),document.head.appendChild(b),u)return new Promise((T,i)=>{b.addEventListener("load",T),b.addEventListener("error",()=>i(new Error(`Unable to preload CSS for ${p}`)))})}))}function r(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return s.then(a=>{for(const l of a||[])l.status==="rejected"&&r(l.reason);return e().catch(r)})},H=["#1c5a1f","#24782a","#2fa236","#36cf3e","#3CFA44"];function ge(){const t=new Set,e=new Map,n=i=>t.forEach(f=>f(i)),o=document.createElement("section");o.className="pv",o.innerHTML=`
    <div class="pv-badge">미리보기 · 안경 화면</div>
    <div class="pv-frame"><div class="pv-screen"></div></div>
    <div class="pv-btns">
      <button data-e="${k.SCROLL_TOP_EVENT}">↑ 이전</button>
      <button data-e="${k.CLICK_EVENT}">탭 (일시정지)</button>
      <button data-e="${k.SCROLL_BOTTOM_EVENT}">↓ 최신</button>
    </div>`;const s=document.createElement("style");s.textContent=`
    .pv { max-width:640px; margin:0 auto; padding:16px 16px 0; }
    .pv-badge { font:600 12px/1 system-ui; color:#3CFA44; letter-spacing:.04em; margin-bottom:8px; }
    .pv-frame { width:100%; aspect-ratio:2/1; background:#000; border-radius:14px; overflow:hidden;
      border:1px solid #2a2a2a; position:relative; }
    .pv-screen { position:absolute; left:0; top:0; width:576px; height:288px; transform-origin:0 0; }
    .pv-box { position:absolute; box-sizing:border-box; overflow:hidden; white-space:pre-wrap; word-break:break-word;
      font: 20px/1.3 -apple-system, 'Apple SD Gothic Neo', 'Noto Sans KR', system-ui, sans-serif; }
    .pv-btns { display:flex; gap:8px; margin-top:10px; }
    .pv-btns button { flex:1; font:600 15px system-ui; padding:12px 6px; border-radius:10px; border:1px solid #3a3a3a;
      background:#262626; color:#e5e5e5; }
    .pv-btns button:active { background:#3CFA44; color:#111; }`,document.head.appendChild(s),document.body.prepend(o);const r=o.querySelector(".pv-screen"),a=o.querySelector(".pv-frame"),l=()=>{r.style.transform=`scale(${a.clientWidth/576})`};new ResizeObserver(l).observe(a),l(),o.querySelectorAll("button[data-e]").forEach(i=>{i.addEventListener("click",()=>n({textEvent:{eventType:Number(i.dataset.e)}}))});let d=null,p=null,u=null;async function S(){d=await navigator.mediaDevices.getUserMedia({audio:{channelCount:1,echoCancellation:!0,noiseSuppression:!0}}),p=new AudioContext;const i=p.createMediaStreamSource(d);u=p.createScriptProcessor(4096,1,1);const f=p.sampleRate/16e3;let g=0;u.onaudioprocess=v=>{const C=v.inputBuffer.getChannelData(0),N=new Int16Array(Math.floor((C.length-g)/f));for(let I=0;I<N.length;I++){const ce=C[Math.floor(g+I*f)]??0;N[I]=Math.max(-32768,Math.min(32767,Math.round(ce*32767)))}g=g+N.length*f-C.length,g<0&&(g=0),n({audioEvent:{audioPcm:new Uint8Array(N.buffer),source:"phone",speakerRole:"unknown"}})},i.connect(u),u.connect(p.destination)}function $(){u?.disconnect(),u=null,d?.getTracks().forEach(i=>i.stop()),d=null,p?.close(),p=null}function b(i){const f=i.containerID;let g=e.get(f);if(!g){const C=document.createElement("div");C.className="pv-box",r.appendChild(C),g={id:f,name:i.containerName,el:C},e.set(f,g)}const v=g.el.style;i.xPosition!==void 0&&(v.left=i.xPosition+"px",v.top=i.yPosition+"px",v.width=i.width+"px",v.height=i.height+"px",v.padding=(i.paddingLength??0)+"px",v.border=i.borderWidth?`${i.borderWidth}px solid ${H[Math.min(4,i.borderColor??4)]}`:"none",v.borderRadius=(i.borderRadius??0)+"px"),(i.textColor!==void 0||!v.color)&&(v.color=H[i.textColor??4]),i.content!==void 0&&(g.el.textContent=i.content)}return{async createStartUpPageContainer(i){for(const f of i.textObject??[])b(f);return 0},async textContainerUpgrade(i){return b(i),!0},async audioControl(i){try{return i&&!d&&await S(),i||$(),!0}catch(f){throw console.error(f),new Error("휴대폰 마이크를 쓸 수 없어요. 브라우저 마이크 권한을 허용하고, https 주소로 열었는지 확인하세요.")}},onEvenHubEvent(i){return t.add(i),()=>t.delete(i)},async getLocalStorage(i){try{return localStorage.getItem(i)??""}catch{return""}},async setLocalStorage(i,f){try{return localStorage.setItem(i,f),!0}catch{return!1}},async shutDownPageContainer(){return $(),!0}}}async function ye(){if(await(async()=>{for(let e=0;e<15;e++){if(window.flutter_inappwebview)return!0;await new Promise(n=>setTimeout(n,100))}return!1})()){const{waitForEvenAppBridge:e}=await me(async()=>{const{waitForEvenAppBridge:n}=await import("./dist-DaKccuR9.js");return{waitForEvenAppBridge:n}},[],import.meta.url);return{bridge:await e(),preview:!1}}return{bridge:ge(),preview:!0}}const K=t=>({lang:"en",translation:"",replies:[],cue:"",lookup:"",...t});K({translation:"오랜만이에요! 어떻게 지냈어요?",replies:[{en:"Pretty good! Busy with work. You?",ko:"잘 지냈어요, 바빴어요"},{en:"It's been ages! I'm doing great.",ko:"정말 오랜만, 잘 지내요"},{en:"Not bad. What have you been up to?",ko:"괜찮아요, 뭐 하고 지냈어요?"}]}),K({lang:"ko",translation:"I'm teaching kids at an elementary school."}),K({translation:"좋네요! 그나저나 오늘 테슬라 주가 봤어요? 엄청 올랐더라고요.",cue:"through the roof: 급등하다, 치솟다",lookup:"Tesla stock price today",replies:[{en:"No way! How much did it go up?",ko:"정말요? 얼마나 올랐어요?"},{en:"I saw that. Do you own any?",ko:"봤어요. 갖고 있어요?"},{en:"I don't follow stocks much.",ko:"주식은 잘 안 봐요"}]}),K({translation:"점심 먹으러 갈까 하는데 같이 갈래요? 근처에 새로 생긴 데가 있어요.",replies:[{en:"Sure, I'd love to! What kind of food?",ko:"좋아요! 무슨 음식이에요?"},{en:"Sounds good. Give me five minutes.",ko:"좋아요, 5분만요"},{en:"Sorry, I already ate. Maybe next time?",ko:"이미 먹었어요, 다음에요"}]});const W={openaiKey:"",openaiModel:"gpt-6-luna",sttMode:"live",liveModel:"gpt-live-transcribe",liveDelay:"low",sttModel:"gpt-transcribe",mic:"glasses",replyCount:3,showGloss:!1,helpMyKorean:!0,showCues:!0,webLookup:!0,searchModel:"gpt-6-luna",silenceMs:700},U="talk-assist-settings";async function we(t){let e="";try{e=t?await t.getLocalStorage(U):""}catch{}if(!e)try{e=localStorage.getItem(U)??""}catch{}try{return{...W,...e?JSON.parse(e):{}}}catch{return{...W}}}async function be(t,e){const n=JSON.stringify(e);try{t&&await t.setLocalStorage(U,n)}catch{}try{localStorage.setItem(U,n)}catch{}}const _=16e3,ve=300,xe=400,ke=15e3;function Y(t){const e=new Int16Array(t.reduce((o,s)=>o+s.length,0));let n=0;for(const o of t)e.set(o,n),n+=o.length;return e}function Se(t){const e=Math.floor(t.byteLength/2),n=new Int16Array(e),o=new DataView(t.buffer,t.byteOffset,e*2);for(let s=0;s<e;s++)n[s]=o.getInt16(s*2,!0);return n}class Ee{constructor(e,n=700,o){this.ev=e,this.silenceMs=n,this.onLevel=o}noiseFloor=300;chunks=[];preRoll=[];preRollSamples=0;speaking=!1;silentSamples=0;speechSamples=0;totalSamples=0;roles={self:0,other:0,unknown:0};push(e,n="unknown"){const o=Se(e),s=o.length;let r=0;for(let u=0;u<s;u++)r+=o[u]*o[u];const a=Math.sqrt(r/Math.max(1,s)),l=a>Math.max(500,this.noiseFloor*2.5);if(l||(this.noiseFloor=this.noiseFloor*.95+a*.05),!this.speaking){for(this.preRoll.push(o),this.preRollSamples+=s;this.preRollSamples>_*ve/1e3&&this.preRoll.length>1;)this.preRollSamples-=this.preRoll.shift().length;l&&(this.speaking=!0,this.chunks=[...this.preRoll],this.totalSamples=this.preRollSamples,this.preRoll=[],this.preRollSamples=0,this.silentSamples=0,this.speechSamples=s,this.roles={self:0,other:0,unknown:0},this.roles[n]+=s,this.onLevel?.(!0),this.ev.onStart?.(Y(this.chunks)));return}this.chunks.push(o),this.totalSamples+=s,this.roles[n]+=s,this.ev.onAudio?.(o),l?(this.speechSamples+=s,this.silentSamples=0):this.silentSamples+=s;const d=this.silentSamples/_*1e3,p=this.totalSamples/_*1e3;(d>=this.silenceMs||p>=ke)&&this.flush()}flush(){if(!this.speaking)return;this.speaking=!1,this.onLevel?.(!1);const e=this.speechSamples/_*1e3,n=Y(this.chunks);if(this.chunks=[],e<xe){this.ev.onEnd(null);return}const o=this.roles,s=o.self>o.other&&o.self>o.unknown?"self":o.other>o.self&&o.other>o.unknown?"other":"unknown";this.ev.onEnd({pcm:n,role:s,durationMs:n.length/_*1e3})}}function Me(t,e=_){const n=new ArrayBuffer(44),o=new DataView(n),s=t.length*2,r=(a,l)=>{for(let d=0;d<l.length;d++)o.setUint8(a+d,l.charCodeAt(d))};return r(0,"RIFF"),o.setUint32(4,36+s,!0),r(8,"WAVE"),r(12,"fmt "),o.setUint32(16,16,!0),o.setUint16(20,1,!0),o.setUint16(22,1,!0),o.setUint32(24,e,!0),o.setUint32(28,e*2,!0),o.setUint16(32,2,!0),o.setUint16(34,16,!0),r(36,"data"),o.setUint32(40,s,!0),new Blob([n,t.buffer],{type:"audio/wav"})}const Ce="wss://api.openai.com/v1/realtime?intent=transcription",oe=24e3;class Le{last=0;run(e){const n=16e3/oe,o=Math.floor(e.length/n),s=new Int16Array(o);for(let r=0;r<o;r++){const a=r*n,l=Math.floor(a),d=a-l,p=l===0?this.last:e[l-1],u=e[Math.min(l,e.length-1)];s[r]=Math.round(p+(u-p)*d)}return e.length&&(this.last=e[e.length-1]),s}reset(){this.last=0}}function Te(t){const e=new Uint8Array(t.buffer,t.byteOffset,t.byteLength);let n="";for(let o=0;o<e.length;o+=32768)n+=String.fromCharCode(...e.subarray(o,o+32768));return btoa(n)}class _e{constructor(e){this.o=e}ws=null;outbox=[];resampler=new Le;partial=new Map;closed=!1;retry=0;connect(){this.closed=!1;const e=new WebSocket(Ce,["realtime","openai-insecure-api-key."+this.o.apiKey]);this.ws=e,e.onopen=()=>{this.retry=0,e.send(JSON.stringify({type:"session.update",session:{type:"transcription",audio:{input:{format:{type:"audio/pcm",rate:oe},transcription:{model:this.o.model,languages:["en","ko"],delay:this.o.delay,prompt:"A casual face-to-face conversation in English and Korean."},turn_detection:null}}}}));for(const n of this.outbox)e.send(n);this.outbox=[],this.o.onState?.(!0)},e.onmessage=n=>{let o;try{o=JSON.parse(n.data)}catch{return}switch(o.type){case"conversation.item.input_audio_transcription.delta":{const s=(this.partial.get(o.item_id)??"")+(o.delta??"");this.partial.set(o.item_id,s),this.o.onPartial(s);break}case"conversation.item.input_audio_transcription.completed":{this.partial.delete(o.item_id);const s=String(o.transcript??"").trim();s&&this.o.onFinal(s);break}case"conversation.item.input_audio_transcription.failed":this.partial.delete(o.item_id),this.o.onError("실시간 인식 실패: "+(o.error?.message??""));break;case"error":/buffer.*(empty|too small)/i.test(o.error?.message??"")||this.o.onError("실시간 인식 오류: "+(o.error?.message??JSON.stringify(o.error)));break}},e.onerror=()=>this.o.onError("실시간 인식 서버에 연결하지 못했어요. 키·네트워크를 확인하세요."),e.onclose=()=>{if(this.o.onState?.(!1),this.ws=null,this.closed)return;const n=Math.min(1e4,500*2**this.retry++);setTimeout(()=>{this.closed||this.connect()},n)}}send(e){const n=JSON.stringify(e);this.ws?.readyState===WebSocket.OPEN?this.ws.send(n):this.outbox.push(n)}start(e){this.resampler.reset(),this.send({type:"input_audio_buffer.clear"}),this.append(e)}append(e){e.length&&this.send({type:"input_audio_buffer.append",audio:Te(this.resampler.run(e))})}end(e){this.send({type:e?"input_audio_buffer.commit":"input_audio_buffer.clear"})}close(){this.closed=!0,this.outbox=[],this.ws?.close(),this.ws=null}}async function Ae(t,e){const n=new FormData;n.append("file",Me(t),"speech.wav"),n.append("model",e.sttModel),n.append("response_format","json"),n.append("prompt","A casual conversation in English and Korean.");const o=await fetch("https://api.openai.com/v1/audio/transcriptions",{method:"POST",headers:{Authorization:`Bearer ${e.openaiKey}`},body:n});if(!o.ok)throw new Error(`STT ${o.status}: ${(await o.text()).slice(0,200)}`);const s=await o.json();return String(s.text??"").trim()}function Oe(t){return`You help a Korean speaker hold a live spoken conversation in English through smart glasses.
You receive the latest utterance (speech-to-text, may contain recognition errors) plus recent conversation history.

Rules:
- Detect the language of the latest utterance.
- If it is English (the other person speaking):
  * "translation": natural, concise Korean translation (spoken style, not literal).
  * "replies": exactly ${t.replyCount} short English replies the user could say next. Each under 12 words, natural spoken English, simple vocabulary, different intents (e.g. agree / ask a follow-up / politely decline or clarify). "ko" is a very short Korean gloss (under 12 characters).
- If it is Korean (the user speaking):
  * "translation": how to say it naturally in English, under 20 words. "replies": [].
- Otherwise: "lang": "other", "translation": "", "replies": [].
- "cue" (conversation helper, shown at the top of the glasses): ${t.showCues?'if the latest utterance contains something a Korean intermediate English learner may not get — an idiom, slang, uncommon word, abbreviation, or a name/place/event that needs background — explain ONE most useful item in Korean, format "term: 짧은 설명", under 40 characters total. Do not repeat a cue already explained in the conversation. Otherwise "".':'always "".'}
- Fix obvious speech-recognition errors using context.
- "lookup": ${t.webLookup?`if the conversation now touches a real-world fact that changes over time and would help the user follow or answer — a stock or crypto price, exchange rate, sports score, weather, news event, release date, store hours, a company's or person's latest status — write ONE short English web search query for it (e.g. "Tesla stock price today"). Only when the topic is concrete and the information would be useful right now; not for general knowledge. Don't repeat a lookup for the same topic within the last few turns. Otherwise "".`:'always "".'}
Return ONLY a JSON object: {"lang":"en|ko|other","translation":"...","replies":[{"en":"...","ko":"..."}],"cue":"...","lookup":"..."}`}function $e(t,e){return`Recent conversation:
${t.slice(-8).map(o=>`${o.who==="them"?"Them":"Me"}: ${o.text}`).join(`
`)||"(none)"}

Latest utterance:
${e}

Respond with the JSON object only.`}function Pe(t){const e=t.match(/\{[\s\S]*\}/);if(!e)throw new Error("AI 응답에서 JSON을 찾지 못함");const n=JSON.parse(e[0]);return{lang:n.lang==="en"||n.lang==="ko"?n.lang:"other",translation:String(n.translation??""),replies:Array.isArray(n.replies)?n.replies.map(o=>({en:String(o.en??""),ko:String(o.ko??"")})).filter(o=>o.en):[],cue:String(n.cue??"").trim(),lookup:String(n.lookup??"").trim()}}async function Re(t,e,n){const o=await fetch("https://api.openai.com/v1/responses",{method:"POST",headers:{"content-type":"application/json",Authorization:`Bearer ${t.openaiKey}`},body:JSON.stringify({model:t.openaiModel,instructions:Oe(t),input:$e(e,n),reasoning:{effort:"none"},text:{format:{type:"json_object"}},max_output_tokens:500})});if(!o.ok)throw new Error(`GPT ${o.status}: ${(await o.text()).slice(0,200)}`);return Pe(Ne(await o.json()))}function Ne(t){if(typeof t.output_text=="string")return t.output_text;let e="";for(const n of t.output??[])if(n.type==="message")for(const o of n.content??[])o.text&&(e+=o.text);return e}function Ie(t,e,n){return Re(t,e,n)}const X=new Map,Ke=2*60*1e3;async function De(t,e){const n=e.toLowerCase(),o=X.get(n);if(o&&Date.now()-o.at<Ke)return o.result;const s=await fetch("https://api.openai.com/v1/responses",{method:"POST",headers:{"content-type":"application/json",Authorization:`Bearer ${t.openaiKey}`},body:JSON.stringify({model:t.searchModel,tools:[{type:"web_search",search_context_size:"low",user_location:{type:"approximate",country:"KR",timezone:"Asia/Seoul"}}],instructions:'Search the web and answer in Korean for a smart-glasses display. One line, under 45 characters. Lead with the key number or fact, then when it was measured (e.g. "테슬라 $412.3 (+2.1%) · 11/17 마감"). No sentences, no markdown, no citations in the text.',input:e,reasoning:{effort:"low"}})});if(!s.ok)throw new Error(`검색 ${s.status}: ${(await s.text()).slice(0,200)}`);const r=await s.json();let a="";const l=[];for(const p of r.output??[])if(p.type==="message")for(const u of p.content??[]){u.text&&(a+=u.text);for(const S of u.annotations??[])S.type==="url_citation"&&!l.some($=>$.url===S.url)&&l.push({title:S.title??S.url,url:S.url})}a=a.replace(/\(\[[^\]]*\]\([^)]*\)\)|\[[^\]]*\]\([^)]*\)/g,"").replace(/\s+/g," ").trim();const d={query:e,text:a,sources:l.slice(0,3)};return X.set(n,{at:Date.now(),result:d}),d}const D={cue:{id:1,name:"cue",y:0,h:48,color:3},orig:{id:2,name:"orig",y:48,h:48,color:2},trans:{id:3,name:"trans",y:96,h:72,color:4},replies:{id:4,name:"replies",y:168,h:120,color:4}};class Ue{constructor(e){this.bridge=e}last={cue:"",orig:"",trans:"",replies:""};pending=null;timer=null;async init(e){const n=Object.keys(D).map(s=>{const r=D[s];return new pe({xPosition:0,yPosition:r.y,width:576,height:r.h,borderWidth:s==="replies"?1:0,borderColor:2,borderRadius:6,paddingLength:4,containerID:r.id,containerName:r.name,content:e[s]||" ",textColor:r.color,isEventCapture:s==="replies"?1:0})}),o=await this.bridge.createStartUpPageContainer(new ue({containerTotalNum:n.length,textObject:n}));return this.last={...e},o}show(e){this.pending=e,this.timer===null&&(this.timer=window.setTimeout(()=>this.flush(),120))}async flush(){this.timer=null;const e=this.pending;if(this.pending=null,!!e)for(const n of Object.keys(D)){if(e[n]===this.last[n])continue;const o=D[n];this.last[n]=e[n],await this.bridge.textContainerUpgrade(new de({containerID:o.id,containerName:o.name,content:e[n]||" "}))}}}const c=t=>document.querySelector(t);function Fe(t,e){Ve(),c("#app").innerHTML=`
    <main>
      <header>
        <h1>Talk Assist</h1>
        <div id="status" class="chip">준비 중</div>
      </header>

      <p id="live" class="live" hidden></p>
      <section id="log" class="log">
        <p class="empty">상대방이 영어로 말하면 여기와 안경에<br>번역과 추천 답변이 나타나요.</p>
      </section>

      <details id="settings" ${t.openaiKey?"":"open"}>
        <summary>설정</summary>
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
        <label>문장 끝 판단(ms) <input id="silenceMs" type="number" min="300" max="2000" step="100" /></label>
        <label class="check"><input id="showCues" type="checkbox" /> 대화 도우미 — 어려운 단어·배경 설명을 맨 위에 표시</label>
        <label class="check"><input id="webLookup" type="checkbox" /> 실시간 정보 검색 — 주가·날씨·경기 결과·뉴스 등이 나오면 찾아서 표시</label>
        <label id="searchRow">검색 모델 <input id="searchModel" /></label>
        <label class="check"><input id="showGloss" type="checkbox" /> 추천 답변 옆에 한국어 뜻 표시</label>
        <label class="check"><input id="helpMyKorean" type="checkbox" /> 내가 한국어로 말하면 영어 표현 띄우기</label>
        <button id="save">저장하고 다시 시작</button>
        <p class="hint">키는 이 기기 안에만 저장됩니다. 안경: 탭 = 일시정지, 위·아래 스와이프 = 이전 대화, 두 번 탭 = 종료</p>
      </details>
    </main>`;const n=["openaiKey","openaiModel","liveModel","searchModel","sttModel","silenceMs"];for(const r of n)c("#"+r).value=String(t[r]);c("#mic").value=t.mic,c("#sttMode").value=t.sttMode,c("#liveDelay").value=t.liveDelay,c("#showCues").checked=t.showCues,c("#webLookup").checked=t.webLookup;const o=()=>{c("#searchRow").style.display=c("#webLookup").checked?"":"none"};c("#webLookup").addEventListener("change",o),o();const s=()=>{const r=c("#sttMode").value==="live";c("#liveRow").style.display=r?"":"none",c("#batchRow").style.visibility=r?"hidden":"visible"};c("#sttMode").addEventListener("change",s),s(),c("#replyCount").value=String(t.replyCount),c("#showGloss").checked=t.showGloss,c("#helpMyKorean").checked=t.helpMyKorean,c("#save").addEventListener("click",()=>{const r=a=>c("#"+a).value.trim();e({openaiKey:r("openaiKey"),openaiModel:r("openaiModel"),sttMode:r("sttMode"),liveModel:r("liveModel"),liveDelay:r("liveDelay"),showCues:c("#showCues").checked,webLookup:c("#webLookup").checked,searchModel:r("searchModel"),sttModel:r("sttModel"),mic:r("mic"),replyCount:Number(r("replyCount")),silenceMs:Number(r("silenceMs"))||700,showGloss:c("#showGloss").checked,helpMyKorean:c("#helpMyKorean").checked}),c("#settings").open=!1})}const Be={idle:"대기",listening:"듣는 중",hearing:"말소리 감지",thinking:"번역 중",paused:"일시정지",error:"오류"};function m(t,e=""){const n=c("#status");n.className=`chip chip-${t}`,n.textContent=Be[t],n.title=e,t==="error"&&e&&Ge(e)}function y(t){return t.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e])}function j(t){const e=c("#log");for(e.querySelector(".empty")?.remove(),e.insertAdjacentHTML("afterbegin",t);e.children.length>40;)e.lastElementChild?.remove()}function ne(t){const e=c("#live");e.hidden=!t,e.textContent=t}function je(t,e,n,o=""){j(`
    <article class="turn them">
      ${o?`<p class="cue">💡 ${y(o)}</p>`:""}
      <p class="orig">${y(t)}</p>
      <p class="trans">${y(e)}</p>
      <ol class="replies">${n.map(s=>`<li><b>${y(s.en)}</b><span>${y(s.ko)}</span></li>`).join("")}</ol>
    </article>`)}function ze(t,e){j(`
    <article class="turn me">
      <p class="orig">${y(t)}</p>
      ${e?`<p class="trans">→ ${y(e)}</p>`:""}
    </article>`)}function qe(t,e,n){const o=n.map(s=>`<a href="${y(s.url)}" target="_blank" rel="noopener">${y(s.title)}</a>`).join(" · ");j(`
    <article class="turn lookup">
      <p class="q">🔎 ${y(t)}</p>
      <p class="a">${y(e)}</p>
      ${o?`<p class="src">출처: ${o}</p>`:""}
    </article>`)}function Ge(t){j(`<article class="turn err">${y(t)}</article>`)}function Ve(){const t=`
    :root { color-scheme: dark; }
    html, body { margin:0; background:#1d1d1d; color:#ececec;
      font: 17px/1.5 -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', 'Pretendard', system-ui, sans-serif; }
    main { max-width:640px; margin:0 auto; padding:20px 16px 40px; display:flex; flex-direction:column; gap:16px; }
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
    .live { margin:0; padding:12px 16px; border-radius:14px; border:1px solid #3CFA44; color:#cfe; font-size:16px; }
    .turn .trans { font-size:20px; font-weight:600; margin-top:4px; }
    .turn.me { background:#232323; border:1px dashed #3a3a3a; }
    .turn.me .trans { color:#3CFA44; font-size:18px; }
    .turn.err { color:#ff6b61; font-size:14px; }
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
  `,e=document.createElement("style");e.textContent=t,document.head.appendChild(e)}const{bridge:E,preview:Je}=await ye();let h=await we(E);const F=new Ue(E),A=[],x=[];let O=-1,L=!1,M=null,B=Promise.resolve();const P={cue:"Talk Assist",orig:"Listening...",trans:" ",replies:"Tap: pause   Swipe: history   Double tap: exit"};let w={...P};function He(t){return t.map((e,n)=>`${n+1}. ${e.en}${h.showGloss&&e.ko?` (${e.ko})`:""}`).join(`
`)}const q=(t,e=70)=>t.length>e?"…"+t.slice(-e):t;function R(){O===-1&&F.show(w)}function Q(t){w=t,x.push(t),x.length>30&&x.shift(),O=-1,R()}function Z(t){if(!x.length)return;const e=x.length-1,o=Math.min(e,Math.max(0,(O===-1?e:O)+t));if(O=o===e?-1:o,O===-1)return F.show(w);const s=x[o];F.show({...s,cue:`[${o+1}/${x.length}] ${s.cue}`})}function We(t){ne(t),w={...w,orig:"> "+q(t,66)},R()}let z={query:"",at:0};async function Ye(t,e){const n=t.toLowerCase();if(n===z.query&&Date.now()-z.at<6e4)return;z={query:n,at:Date.now()};const o=w,s=r=>{w={...w,cue:r};const a=x.indexOf(o);a>=0&&(x[a]={...x[a],cue:r}),R()};s("? "+t+" ...");try{const r=e?await new Promise(a=>setTimeout(()=>a(e),1500)):await De(h,t);if(!r.text)return s(o.cue);s("# "+r.text),qe(r.query,r.text,r.sources)}catch(r){s(o.cue),m("error",r.message)}}async function se(t){if(ne(""),!(!t||t.length<2)){m("thinking");try{Xe(t,await Ie(h,A,t))}catch(e){m("error",e.message),console.error(e);return}m(L?"listening":"paused")}}function Xe(t,e,n){const o=h.showCues&&e.cue?"* "+e.cue:w.cue===P.cue?" ":w.cue;e.lang==="en"?(A.push({who:"them",text:t}),Q({cue:o,orig:q(t),trans:e.translation,replies:He(e.replies)}),je(t,e.translation,e.replies,e.cue)):e.lang==="ko"&&(A.push({who:"me",text:t}),ze(t,h.helpMyKorean?e.translation:""),h.helpMyKorean&&e.translation&&Q({cue:o,orig:q(t),trans:" ",replies:`Say: ${e.translation}`})),A.length>20&&A.splice(0,A.length-20),h.webLookup&&e.lookup&&Ye(e.lookup,n)}async function Qe(t){if(!(t.role==="self"&&!h.helpMyKorean)){m("thinking");try{const e=await Ae(t.pcm,h);await se(e)}catch(e){m("error",e.message)}}}const G=new Ee({onStart:t=>M?.start(t),onAudio:t=>M?.append(t),onEnd:t=>{h.sttMode==="live"?M?.end(t!==null):t&&(B=B.then(()=>Qe(t)))}},h.silenceMs,t=>{L&&m(t?"hearing":"listening")});function Ze(){M?.close(),M=null,h.sttMode==="live"&&(M=new _e({apiKey:h.openaiKey,model:h.liveModel,delay:h.liveDelay,onPartial:We,onFinal:t=>{B=B.then(()=>se(t))},onError:t=>m("error",t)}),M.connect())}async function re(t){if(L=t,t){const e=h.mic==="phone"?V.Phone:V.Glasses;try{await E.audioControl(!0,e)}catch(n){L=!1,m("error",n.message);return}m("listening")}else await E.audioControl(!1),G.flush(),m("paused");x.length||(w={...P,orig:t?"Listening...":"Paused (tap to resume)"},R())}function ie(){return h.openaiKey?"":"설정에서 OpenAI API 키를 입력하세요."}async function ae(){const t=ie();if(t){m("error",t),w={...P,orig:"Set API key on phone"},R();return}Ze(),await re(!0)}Fe(h,async t=>{h=t,G.silenceMs=t.silenceMs,await be(E,t),L&&await E.audioControl(!1),await ae()});await F.init(P);Je&&m("idle","미리보기 모드: 휴대폰 마이크를 사용합니다"),await ae();function ee(t){return t?t.eventType??k.CLICK_EVENT:null}let te=!1;function le(){te||(te=!0,E.audioControl(!1),M?.close(),et())}const et=E.onEvenHubEvent(t=>{const e=t.audioEvent;if(e?.audioPcm){L&&G.push(e.audioPcm,e.speakerRole??"unknown");return}switch(ee(t.textEvent)??ee(t.sysEvent)){case k.DOUBLE_CLICK_EVENT:E.shutDownPageContainer(1);break;case k.CLICK_EVENT:ie()||re(!L);break;case k.SCROLL_TOP_EVENT:Z(-1);break;case k.SCROLL_BOTTOM_EVENT:Z(1);break;case k.SYSTEM_EXIT_EVENT:case k.ABNORMAL_EXIT_EVENT:le();break}});window.addEventListener("beforeunload",le);
