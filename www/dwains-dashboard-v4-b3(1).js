class e{async generate(e,t){console.log("Dwains Dashboard Strategy v4b3 - TypeScript Edition"),console.log("Config received:",e);const[i,a,o,s]=await Promise.all([t.callWS({type:"config/area_registry/list"}),t.callWS({type:"config/device_registry/list"}),t.callWS({type:"config/entity_registry/list"}),t.callWS({type:"config/floor_registry/list"}).catch(()=>[])]);console.log(`Found ${i.length} areas, ${a.length} devices, ${o.length} entities, ${s.length} floors`),console.log("Devices met area_id:",a.filter(e=>e.area_id).map(e=>({name:e.name,id:e.id,area_id:e.area_id}))),console.log("Devices zonder area_id count:",a.filter(e=>!e.area_id).length);const r=o.map(e=>{const t=e.area_id,i=e.device_id?a.find(t=>t.id===e.device_id)?.area_id:null,o=t||i;return{entity_id:e.entity_id,direct_area_id:t,device_id:e.device_id,device_area_id:i,resolved_area_id:o}});console.log("Entities met resolved area_id:",r.filter(e=>e.resolved_area_id).slice(0,10)),console.log("Entities zonder resolved area_id count:",r.filter(e=>!e.resolved_area_id).length),s.length>0&&(t.floors=s.reduce((e,t)=>(e[t.floor_id]=t,e),{})),t.areas=i.reduce((e,t)=>(e[t.area_id]=t,e),{}),t.entities=o.reduce((e,t)=>(e[t.entity_id]=t,e),{});const n={...{areas:i.map(e=>({area_id:e.area_id,name:e.name,picture:e.picture,icon:e.icon,floor_id:e.floor_id,temperature_entity_id:e.temperature_entity_id,humidity_entity_id:e.humidity_entity_id})),devices:a.map(e=>({device_id:e.id,name:e.name_by_user||e.name,area_id:e.area_id})),entities:o.map(e=>({entity_id:e.entity_id,area_id:e.area_id,device_id:e.device_id})),floors:s.map(e=>({floor_id:e.floor_id,name:e.name})),settings:e.settings||{},areas_display:e.areas_display,floors_display:e.floors_display,areas_options:e.areas_options,favorites:e.favorites||[]},type:"custom:dwains-view"};return{title:e.title||"Dwains Dashboard",views:[{strategy:n}]}}static async getConfigElement(){return await Promise.resolve().then(function(){return ht}),document.createElement("dwains-dashboard-strategy-editor")}}class t{async generate(e,t){return console.log("Dwains View Strategy generate called",e),e.floors&&(t.floors=e.floors.reduce((e,t)=>(e[t.floor_id]=t,e),{})),{panel:!0,cards:[{type:"custom:dwains-layout-card",areas:e.areas||[],devices:e.devices||[],entities:e.entities||[],floors:e.floors||[],settings:e.settings||{},areas_display:e.areas_display,floors_display:e.floors_display,areas_options:e.areas_options,favorites:e.favorites||[]}]}}}function i(e,t,i,a){var o,s=arguments.length,r=s<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,a);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(r=(s<3?o(r):s>3?o(t,i,r):o(t,i))||r);return s>3&&r&&Object.defineProperty(t,i,r),r}"function"==typeof SuppressedError&&SuppressedError;const a=globalThis,o=a.ShadowRoot&&(void 0===a.ShadyCSS||a.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),r=new WeakMap;let n=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(o&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=r.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(t,e))}return e}toString(){return this.cssText}};const d=(e,...t)=>{const i=1===e.length?e[0]:t.reduce((t,i,a)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[a+1],e[0]);return new n(i,e,s)},c=o?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new n("string"==typeof e?e:e+"",void 0,s))(t)})(e):e,{is:l,defineProperty:h,getOwnPropertyDescriptor:p,getOwnPropertyNames:g,getOwnPropertySymbols:u,getPrototypeOf:m}=Object,f=globalThis,_=f.trustedTypes,v=_?_.emptyScript:"",b=f.reactiveElementPolyfillSupport,y=(e,t)=>e,x={toAttribute(e,t){switch(t){case Boolean:e=e?v:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},w=(e,t)=>!l(e,t),$={attribute:!0,type:String,converter:x,reflect:!1,useDefault:!1,hasChanged:w};Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;let k=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=$){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),a=this.getPropertyDescriptor(e,i,t);void 0!==a&&h(this.prototype,e,a)}}static getPropertyDescriptor(e,t,i){const{get:a,set:o}=p(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:a,set(t){const s=a?.call(this);o?.call(this,t),this.requestUpdate(e,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??$}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const e=m(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const e=this.properties,t=[...g(e),...u(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(c(e))}else void 0!==e&&t.push(c(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(o)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const i of t){const t=document.createElement("style"),o=a.litNonce;void 0!==o&&t.setAttribute("nonce",o),t.textContent=i.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),a=this.constructor._$Eu(e,i);if(void 0!==a&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:x).toAttribute(t,i.type);this._$Em=e,null==o?this.removeAttribute(a):this.setAttribute(a,o),this._$Em=null}}_$AK(e,t){const i=this.constructor,a=i._$Eh.get(e);if(void 0!==a&&this._$Em!==a){const e=i.getPropertyOptions(a),o="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:x;this._$Em=a;const s=o.fromAttribute(t,e.type);this[a]=s??this._$Ej?.get(a)??s,this._$Em=null}}requestUpdate(e,t,i){if(void 0!==e){const a=this.constructor,o=this[e];if(i??=a.getPropertyOptions(e),!((i.hasChanged??w)(o,t)||i.useDefault&&i.reflect&&o===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:a,wrapped:o},s){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),!0!==o||void 0!==s)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===a&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e){const{wrapped:e}=i,a=this[t];!0!==e||this._$AL.has(t)||void 0===a||this.C(t,void 0,i,a)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};k.elementStyles=[],k.shadowRootOptions={mode:"open"},k[y("elementProperties")]=new Map,k[y("finalized")]=new Map,b?.({ReactiveElement:k}),(f.reactiveElementVersions??=[]).push("2.1.1");const C=globalThis,E=C.trustedTypes,A=E?E.createPolicy("lit-html",{createHTML:e=>e}):void 0,S="$lit$",z=`lit$${Math.random().toFixed(9).slice(2)}$`,L="?"+z,M=`<${L}>`,D=document,O=()=>D.createComment(""),H=e=>null===e||"object"!=typeof e&&"function"!=typeof e,T=Array.isArray,P="[ \t\n\f\r]",I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,j=/-->/g,V=/>/g,U=RegExp(`>|${P}(?:([^\\s"'>=/]+)(${P}*=${P}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),W=/'/g,N=/"/g,R=/^(?:script|style|textarea|title)$/i,F=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),B=Symbol.for("lit-noChange"),G=Symbol.for("lit-nothing"),q=new WeakMap,Y=D.createTreeWalker(D,129);function Z(e,t){if(!T(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(t):t}class X{constructor({strings:e,_$litType$:t},i){let a;this.parts=[];let o=0,s=0;const r=e.length-1,n=this.parts,[d,c]=((e,t)=>{const i=e.length-1,a=[];let o,s=2===t?"<svg>":3===t?"<math>":"",r=I;for(let t=0;t<i;t++){const i=e[t];let n,d,c=-1,l=0;for(;l<i.length&&(r.lastIndex=l,d=r.exec(i),null!==d);)l=r.lastIndex,r===I?"!--"===d[1]?r=j:void 0!==d[1]?r=V:void 0!==d[2]?(R.test(d[2])&&(o=RegExp("</"+d[2],"g")),r=U):void 0!==d[3]&&(r=U):r===U?">"===d[0]?(r=o??I,c=-1):void 0===d[1]?c=-2:(c=r.lastIndex-d[2].length,n=d[1],r=void 0===d[3]?U:'"'===d[3]?N:W):r===N||r===W?r=U:r===j||r===V?r=I:(r=U,o=void 0);const h=r===U&&e[t+1].startsWith("/>")?" ":"";s+=r===I?i+M:c>=0?(a.push(n),i.slice(0,c)+S+i.slice(c)+z+h):i+z+(-2===c?t:h)}return[Z(e,s+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),a]})(e,t);if(this.el=X.createElement(d,i),Y.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(a=Y.nextNode())&&n.length<r;){if(1===a.nodeType){if(a.hasAttributes())for(const e of a.getAttributeNames())if(e.endsWith(S)){const t=c[s++],i=a.getAttribute(e).split(z),r=/([.?@])?(.*)/.exec(t);n.push({type:1,index:o,name:r[2],strings:i,ctor:"."===r[1]?te:"?"===r[1]?ie:"@"===r[1]?ae:ee}),a.removeAttribute(e)}else e.startsWith(z)&&(n.push({type:6,index:o}),a.removeAttribute(e));if(R.test(a.tagName)){const e=a.textContent.split(z),t=e.length-1;if(t>0){a.textContent=E?E.emptyScript:"";for(let i=0;i<t;i++)a.append(e[i],O()),Y.nextNode(),n.push({type:2,index:++o});a.append(e[t],O())}}}else if(8===a.nodeType)if(a.data===L)n.push({type:2,index:o});else{let e=-1;for(;-1!==(e=a.data.indexOf(z,e+1));)n.push({type:7,index:o}),e+=z.length-1}o++}}static createElement(e,t){const i=D.createElement("template");return i.innerHTML=e,i}}function K(e,t,i=e,a){if(t===B)return t;let o=void 0!==a?i._$Co?.[a]:i._$Cl;const s=H(t)?void 0:t._$litDirective$;return o?.constructor!==s&&(o?._$AO?.(!1),void 0===s?o=void 0:(o=new s(e),o._$AT(e,i,a)),void 0!==a?(i._$Co??=[])[a]=o:i._$Cl=o),void 0!==o&&(t=K(e,o._$AS(e,t.values),o,a)),t}let J=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,a=(e?.creationScope??D).importNode(t,!0);Y.currentNode=a;let o=Y.nextNode(),s=0,r=0,n=i[0];for(;void 0!==n;){if(s===n.index){let t;2===n.type?t=new Q(o,o.nextSibling,this,e):1===n.type?t=new n.ctor(o,n.name,n.strings,this,e):6===n.type&&(t=new oe(o,this,e)),this._$AV.push(t),n=i[++r]}s!==n?.index&&(o=Y.nextNode(),s++)}return Y.currentNode=D,a}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}};class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,a){this.type=2,this._$AH=G,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=K(this,e,t),H(e)?e===G||null==e||""===e?(this._$AH!==G&&this._$AR(),this._$AH=G):e!==this._$AH&&e!==B&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>T(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==G&&H(this._$AH)?this._$AA.nextSibling.data=e:this.T(D.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,a="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=X.createElement(Z(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===a)this._$AH.p(t);else{const e=new J(a,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=q.get(e.strings);return void 0===t&&q.set(e.strings,t=new X(e)),t}k(e){T(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,a=0;for(const o of e)a===t.length?t.push(i=new Q(this.O(O()),this.O(O()),this,this.options)):i=t[a],i._$AI(o),a++;a<t.length&&(this._$AR(i&&i._$AB.nextSibling,a),t.length=a)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ee{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,a,o){this.type=1,this._$AH=G,this._$AN=void 0,this.element=e,this.name=t,this._$AM=a,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=G}_$AI(e,t=this,i,a){const o=this.strings;let s=!1;if(void 0===o)e=K(this,e,t,0),s=!H(e)||e!==this._$AH&&e!==B,s&&(this._$AH=e);else{const a=e;let r,n;for(e=o[0],r=0;r<o.length-1;r++)n=K(this,a[i+r],t,r),n===B&&(n=this._$AH[r]),s||=!H(n)||n!==this._$AH[r],n===G?e=G:e!==G&&(e+=(n??"")+o[r+1]),this._$AH[r]=n}s&&!a&&this.j(e)}j(e){e===G?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class te extends ee{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===G?void 0:e}}class ie extends ee{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==G)}}class ae extends ee{constructor(e,t,i,a,o){super(e,t,i,a,o),this.type=5}_$AI(e,t=this){if((e=K(this,e,t,0)??G)===B)return;const i=this._$AH,a=e===G&&i!==G||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==G&&(i===G||a);a&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class oe{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){K(this,e)}}const se={I:Q},re=C.litHtmlPolyfillSupport;re?.(X,Q),(C.litHtmlVersions??=[]).push("3.3.1");const ne=globalThis;let de=class extends k{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const a=i?.renderBefore??t;let o=a._$litPart$;if(void 0===o){const e=i?.renderBefore??null;a._$litPart$=o=new Q(t.insertBefore(O(),e),e,void 0,i??{})}return o._$AI(e),o})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return B}};de._$litElement$=!0,de.finalized=!0,ne.litElementHydrateSupport?.({LitElement:de});const ce=ne.litElementPolyfillSupport;ce?.({LitElement:de}),(ne.litElementVersions??=[]).push("4.2.1");const le=e=>(t,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},he={attribute:!0,type:String,converter:x,reflect:!1,hasChanged:w},pe=(e=he,t,i)=>{const{kind:a,metadata:o}=i;let s=globalThis.litPropertyMetadata.get(o);if(void 0===s&&globalThis.litPropertyMetadata.set(o,s=new Map),"setter"===a&&((e=Object.create(e)).wrapped=!0),s.set(i.name,e),"accessor"===a){const{name:a}=i;return{set(i){const o=t.get.call(this);t.set.call(this,i),this.requestUpdate(a,o,e)},init(t){return void 0!==t&&this.C(a,void 0,e,t),t}}}if("setter"===a){const{name:a}=i;return function(i){const o=this[a];t.call(this,i),this.requestUpdate(a,o,e)}}throw Error("Unsupported decorator location: "+a)};function ge(e){return(t,i)=>"object"==typeof i?pe(e,t,i):((e,t,i)=>{const a=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),a?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}function ue(e){return ge({...e,state:!0,attribute:!1})}const me=1,fe=2,_e=e=>(...t)=>({_$litDirective$:e,values:t});let ve=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};const be=_e(class extends ve{constructor(e){if(super(e),e.type!==me||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e)));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const i=e.element.classList;for(const e of this.st)e in t||(i.remove(e),this.st.delete(e));for(const e in t){const a=!!t[e];a===this.st.has(e)||this.nt?.has(e)||(a?(i.add(e),this.st.add(e)):(i.remove(e),this.st.delete(e)))}return B}}),{I:ye}=se,xe=()=>document.createComment(""),we=(e,t,i)=>{const a=e._$AA.parentNode,o=void 0===t?e._$AB:t._$AA;if(void 0===i){const t=a.insertBefore(xe(),o),s=a.insertBefore(xe(),o);i=new ye(t,s,e,e.options)}else{const t=i._$AB.nextSibling,s=i._$AM,r=s!==e;if(r){let t;i._$AQ?.(e),i._$AM=e,void 0!==i._$AP&&(t=e._$AU)!==s._$AU&&i._$AP(t)}if(t!==o||r){let e=i._$AA;for(;e!==t;){const t=e.nextSibling;a.insertBefore(e,o),e=t}}}return i},$e=(e,t,i=e)=>(e._$AI(t,i),e),ke={},Ce=e=>{e._$AR(),e._$AA.remove()},Ee=(e,t,i)=>{const a=new Map;for(let o=t;o<=i;o++)a.set(e[o],o);return a},Ae=_e(class extends ve{constructor(e){if(super(e),e.type!==fe)throw Error("repeat() can only be used in text expressions")}dt(e,t,i){let a;void 0===i?i=t:void 0!==t&&(a=t);const o=[],s=[];let r=0;for(const t of e)o[r]=a?a(t,r):r,s[r]=i(t,r),r++;return{values:s,keys:o}}render(e,t,i){return this.dt(e,t,i).values}update(e,[t,i,a]){const o=(e=>e._$AH)(e),{values:s,keys:r}=this.dt(t,i,a);if(!Array.isArray(o))return this.ut=r,s;const n=this.ut??=[],d=[];let c,l,h=0,p=o.length-1,g=0,u=s.length-1;for(;h<=p&&g<=u;)if(null===o[h])h++;else if(null===o[p])p--;else if(n[h]===r[g])d[g]=$e(o[h],s[g]),h++,g++;else if(n[p]===r[u])d[u]=$e(o[p],s[u]),p--,u--;else if(n[h]===r[u])d[u]=$e(o[h],s[u]),we(e,d[u+1],o[h]),h++,u--;else if(n[p]===r[g])d[g]=$e(o[p],s[g]),we(e,o[h],o[p]),p--,g++;else if(void 0===c&&(c=Ee(r,g,u),l=Ee(n,h,p)),c.has(n[h]))if(c.has(n[p])){const t=l.get(r[g]),i=void 0!==t?o[t]:null;if(null===i){const t=we(e,o[h]);$e(t,s[g]),d[g]=t}else d[g]=$e(i,s[g]),we(e,o[h],i),o[t]=null;g++}else Ce(o[p]),p--;else Ce(o[h]),h++;for(;g<=u;){const t=we(e,d[u+1]);$e(t,s[g]),d[g++]=t}for(;h<=p;){const e=o[h++];null!==e&&Ce(e)}return this.ut=r,((e,t=ke)=>{e._$AH=t})(e,d),B}}),Se=new Map,ze=()=>{Se.clear()},Le=(e,t,i,a)=>!!a?.areas_options?.[i]?.groups_options?.[t]?.hidden&&a.areas_options[i].groups_options[t].hidden.includes(e),Me=e=>{const[t]=e.split(".");return t||"unknown"},De=["closed","locked","off","false","not_home","idle"],Oe=["unavailable","unknown"],He={light:{icon:"mdi:lightbulb",name:"Lights"},switch:{icon:"mdi:light-switch",name:"Switches"},fan:{icon:"mdi:fan",name:"Fans"},cover:{icon:"mdi:window-shutter",name:"Covers"},lock:{icon:"mdi:lock",name:"Locks"},climate:{icon:"mdi:thermostat",name:"Climate"},media_player:{icon:"mdi:play-circle",name:"Media Players"},camera:{icon:"mdi:camera",name:"Cameras"},person:{icon:"mdi:account",name:"People"},vacuum:{icon:"mdi:robot-vacuum",name:"Vacuums"},alarm_control_panel:{icon:"mdi:security",name:"Alarm Systems"}},Te={window:{icon:"mdi:window-open",name:"Windows"},door:{icon:"mdi:door-open",name:"Doors"},motion:{icon:"mdi:motion-sensor",name:"Motion"},smoke:{icon:"mdi:smoke-detector-alert",name:"Smoke Detectors"},gas:{icon:"mdi:gas-cylinder",name:"Gas Detectors"},moisture:{icon:"mdi:water-alert",name:"Moisture"},occupancy:{icon:"mdi:home-account",name:"Occupancy"},opening:{icon:"mdi:door",name:"Openings"},presence:{icon:"mdi:motion-sensor",name:"Presence"},safety:{icon:"mdi:shield-check",name:"Safety"},tamper:{icon:"mdi:lock-alert",name:"Tamper"},vibration:{icon:"mdi:vibrate",name:"Vibration"}};const Pe=["lights","climate","covers","media_players","security","motion","actions","others"],Ie={lights:"mdi:lamps",climate:"mdi:home-thermometer",covers:"mdi:blinds-horizontal",media_players:"mdi:multimedia",security:"mdi:security",motion:"mdi:motion-sensor",actions:"mdi:robot",others:"mdi:shape"};const je=(e,t,i,a)=>{const o=new CustomEvent(t,{bubbles:!0,cancelable:!1,composed:!0,detail:i});e.dispatchEvent(o)},Ve=()=>Promise.resolve().then(function(){return ct});let Ue=!1;const We=(e,t)=>{if(Ue)return void console.warn("Domain entities dialog is already open");Ue=!0;const i=t=>{"dwains-domain-entities-dialog"===t.detail?.dialog&&(Ue=!1,e.removeEventListener("dialog-closed",i))};e.addEventListener("dialog-closed",i),je(e,"show-dialog",{dialogTag:"dwains-domain-entities-dialog",dialogImport:Ve,dialogParams:t}),setTimeout(()=>{Ue&&(Ue=!1,e.removeEventListener("dialog-closed",i))},2e3)},Ne=new Map;let Re,Fe=!1;const Be=e=>{if(Fe)return;Fe=!0;const t=()=>{Re=window.setInterval(()=>{Ne.size>0?Ne.forEach(t=>{t&&"hass"in t&&(t.hass=e.hass)}):Re&&(clearInterval(Re),Re=void 0)},100)};e.addEventListener("show-dialog",async i=>{const a=i;a.stopPropagation(),a.stopImmediatePropagation();const{dialogTag:o,dialogImport:s,dialogParams:r}=a.detail;if(Ne.has(o))return void console.warn(`Dialog ${o} is already open`);await s();const n=document.querySelector(o);n&&n.remove();const d=document.createElement(o);d.hass=e.hass,Ne.set(o,d),document.body.appendChild(d),requestAnimationFrame(()=>{d.showDialog(r)});d.addEventListener("dialog-closed",()=>{Ne.delete(o),document.body.contains(d)&&d.remove(),0===Ne.size&&Re&&(clearInterval(Re),Re=void 0)},{once:!0}),1!==Ne.size||Re||t()},{capture:!0})};let Ge=class extends de{constructor(){super(...arguments),this._selectedArea=null,this._selectedView=null,this._isMobile=!1,this._headerExpanded=!1,this._headerCompact=!1,this._favoritesRenderVersion=0,this._currentTime="",this._currentDate="",this._mobileNavOpen=!1,this._hasRelevantStateChanges=!1,this._areaEntitiesCache=new Map,this._areaDataCache=new Map,this._entityCardsCache=new Map,this._domainCountsCache=new Map,this._CACHE_DURATION=5e3,this._handleResize=()=>{this._checkMobile()},this._handleShowMoreInfo=e=>{je(this,"hass-more-info",{entityId:e.detail.entityId})},this._debouncedUpdate=()=>{this._updateDebounceTimer&&clearTimeout(this._updateDebounceTimer),this._updateDebounceTimer=window.setTimeout(()=>{this.requestUpdate()},100)}}setConfig(e){if(!e)throw new Error("Invalid configuration");this.config=e,this._selectedView||(this._selectedView="home")}static getStubConfig(){return{type:"custom:dwains-layout-card",areas:[],devices:[],entities:[],floors:[],settings:{},favorites:[]}}connectedCallback(){super.connectedCallback(),this._checkMobile(),this._setupEventListeners(),this._startTimeUpdate(),this._initializeObservers(),Be(this)}willUpdate(e){if(super.willUpdate(e),e.has("hass")&&this.hass){const t=e.get("hass");t&&this._shouldUpdateEntities(t,this.hass)&&(this._clearEntityCardsCache(),this._hasRelevantStateChanges=!0)}}disconnectedCallback(){super.disconnectedCallback(),this._cleanupEventListeners(),this._cleanupObservers(),this._timeInterval&&clearInterval(this._timeInterval)}_setupEventListeners(){window.addEventListener("resize",this._handleResize),this.addEventListener("show-more-info",this._handleShowMoreInfo)}_cleanupEventListeners(){window.removeEventListener("resize",this._handleResize),this.removeEventListener("show-more-info",this._handleShowMoreInfo)}_checkMobile(){const e=this._isMobile;this._isMobile=window.innerWidth<=768,e!==this._isMobile&&(this._mobileNavOpen=!1)}_startTimeUpdate(){this._updateTime(),this._timeInterval=window.setInterval(()=>this._updateTime(),6e4)}_updateTime(){const e=new Date;this._currentTime=e.toLocaleTimeString(this.hass?.language||"en",{hour:"2-digit",minute:"2-digit",hour12:!1}),this._currentDate=e.toLocaleDateString(this.hass?.language||"en",{weekday:"short",day:"numeric",month:"short"})}_initializeObservers(){this._cardObserver=new IntersectionObserver(e=>{e.forEach(e=>{if(e.isIntersecting){const t=e.target;if(!t||!t.isConnected)return;const i=t.dataset.entityId;i&&!t.dataset.loaded&&(t.dataset.loaded="true",this._loadEntityCard(t,i))}})},{rootMargin:"50px"}),this._resizeObserver=new ResizeObserver(()=>{this._debouncedUpdate()}),this.shadowRoot&&this._resizeObserver.observe(this.shadowRoot.host)}_cleanupObservers(){this._cardObserver&&this._cardObserver.disconnect(),this._resizeObserver&&this._resizeObserver.disconnect()}shouldUpdate(e){if(!this.config||!this.hass)return!1;if(e.has("config")||e.has("_selectedView")||e.has("_selectedArea")||e.has("_headerExpanded")||e.has("_currentTime"))return!0;if(e.has("hass")){const t=e.get("hass");if(!t)return!0;return this._getRelevantEntities().some(e=>t.states[e]!==this.hass.states[e])}return!0}updated(e){if(super.updated(e),e.has("hass")&&this.hass){const t=e.get("hass");t&&(this._updateEntityCards(t,this.hass),this._updateAreaDataCache()),this._headerExpanded&&this._renderFavoriteTileCards()}if(this._hasRelevantStateChanges&&(this._hasRelevantStateChanges=!1),e.has("_headerExpanded")&&this._headerExpanded&&this.hass&&setTimeout(()=>{this._renderFavoriteTileCards()},0),e.has("_selectedView")&&"home"===this._selectedView&&this.hass&&setTimeout(()=>{this._renderHomeFavoriteCards()},0),this._cardObserver&&this.shadowRoot)try{this.shadowRoot.querySelectorAll(".entity-card-wrapper[data-entity-id]:not([data-loaded])").forEach(e=>{e&&e instanceof HTMLElement&&e.isConnected&&this._cardObserver.observe(e)})}catch(e){console.warn("Error re-observing entity card wrappers:",e)}}_getRelevantEntities(){if(!this.config)return[];if("area"===this._selectedView&&this._selectedArea){return this._getAreaEntities(this._selectedArea).map(e=>e.entity_id)}return this.config.entities?.map(e=>e.entity_id)||[]}render(){return this.hass&&this.config?F`
      <div class="layout-container">
        ${this._renderMobileOverlay()}
        ${this._renderSidebar()}
        <div class="main-content">
          ${"home"!==this._selectedView?this._renderGlobalHeader():G}
          <div class="content-area">
            ${"home"===this._selectedView?this._renderHomeView():"area"===this._selectedView&&this._selectedArea?this._renderAreaView():G}
          </div>
        </div>
      </div>
      ${this._renderMobileFAB()}
      ${this._renderToast()}
      ${this._renderConfirmationDialog()}
    `:F`<div class="loading">Loading...</div>`}_renderMobileOverlay(){return this._isMobile?F`
      <div 
        class="mobile-nav-overlay ${this._mobileNavOpen?"open":""}"
        @click=${this._closeMobileNav}
      ></div>
    `:G}_renderMobileFAB(){return this._isMobile?F`
      <button 
        class="mobile-fab ${this._mobileNavOpen?"hidden":""}"
        @click=${this._toggleMobileNav}
        title="Areas"
      >
        <ha-icon icon="mdi:floor-plan"></ha-icon>
      </button>
    `:G}_renderSidebar(){const e={sidebar:!0,open:this._isMobile&&this._mobileNavOpen};return F`
      <nav class=${be(e)}>
        <div class="area-list">
          <button 
            class="area-button home-button ${"home"===this._selectedView?"selected":""}"
            @click=${()=>this._selectView("home")}
          >
            <div class="area-icon">
              <ha-icon icon="mdi:home"></ha-icon>
            </div>
            <div class="area-info">
              <div class="area-name">Home</div>
            </div>
          </button>
          
          ${this._renderAreaButtons()}
        </div>
      </nav>
    `}_groupAreasByFloor(e){const t={};return e.forEach(e=>{let i="no_floor";if(e.floor_id&&this.config?.floors){const t=this.config.floors.find(t=>t.floor_id===e.floor_id);t?.name&&(i=t.name)}t[i]||(t[i]=[]),t[i].push(e)}),t}_getVisibleSortedAreas(){return this.config?.areas?function(e,t){let i=[...e];if(t?.hidden){const e=new Set(t.hidden);i=i.filter(t=>!e.has(t.area_id))}if(t?.order&&t.order.length>0){const e=t.order.map(e=>i.find(t=>t.area_id===e)).filter(e=>void 0!==e),a=new Set(t.order);return[...e,...i.filter(e=>!a.has(e.area_id))]}return i.sort((e,t)=>e.name.localeCompare(t.name))}(this.config.areas,this.config.areas_display):[]}_renderAreaButtons(){if(!this.config?.areas)return G;const e=this._getVisibleSortedAreas(),t=this._groupAreasByFloor(e),i=Object.entries(t).sort(([e],[t])=>"no_floor"===e?1:"no_floor"===t?-1:e.localeCompare(t));return i.map(([e,t])=>{const i="no_floor"===e?this.hass.localize("ui.components.area-picker.no_floor")||"Unassigned spaces":e;return F`
        <div class="floor-section">
          <div class="floor-header">
            <h3>${i}</h3>
          </div>
          <div class="floor-areas">
            ${Ae(t,e=>e.area_id,e=>this._renderAreaButton(e))}
          </div>
        </div>
      `})}_renderAreaButton(e){const t=this._getCachedAreaData(e),i=this._selectedArea===e.area_id,a=!!e.picture;return F`
          <button 
            class="area-button ${i?"selected":""} ${a?"has-picture":""}"
            @click=${()=>this._selectArea(e.area_id)}
          >
            ${a?F`
              <div class="area-background" style="background-image: url('${e.picture}');"></div>
            `:G}
            
            <div class="area-content">
              <!-- Top section: Name and sensors -->
              <div class="area-top-section">
              <div class="area-name">${e.name}</div>
              ${t.temperature||t.humidity||t.wattage?F`
                <div class="area-sensors">
                  ${[t.temperature,t.humidity,t.wattage].filter(Boolean).join(" • ")}
                </div>
              `:G}
            </div>
              
              <!-- Bottom section: Icon and badges -->
              <div class="area-bottom-section">
                <!-- Left: Main area icon -->
                ${e.icon?F`
                  <div class="area-main-icon">
                    <ha-icon icon=${(e=>{if(e.icon)return e.icon;const t={"living room":"mdi:sofa",bedroom:"mdi:bed",kitchen:"mdi:silverware-fork-knife",bathroom:"mdi:shower",garage:"mdi:garage",garden:"mdi:flower",office:"mdi:desk",hallway:"mdi:door",basement:"mdi:home-floor-b",attic:"mdi:home-roof"},i=e.name.toLowerCase();for(const[e,a]of Object.entries(t))if(i.includes(e))return a;return"mdi:home"})(e)}></ha-icon>
                  </div>
                `:G}
                
                <!-- Right: Info badges -->
                <div class="area-info-badges">
                  ${t.domains.light&&t.domains.light.on>0?F`
                    <span class="info-badge light clickable" 
                          @click=${t=>this._handleLightToggle(t,e.area_id)}>
                      <ha-icon icon="mdi:lightbulb"></ha-icon>
                      <span class="badge-count">${t.domains.light.on}</span>
                    </span>
                  `:G}
                  
                  ${t.domains.switch&&t.domains.switch.on>0?F`
                    <span class="info-badge switch">
                      <ha-icon icon="mdi:flash"></ha-icon>
                      <span class="badge-count">${t.domains.switch.on}</span>
                    </span>
                  `:G}
                  
                  ${t.domains.climate&&t.domains.climate.on>0?F`
                    <span class="info-badge climate">
                      <ha-icon icon="mdi:thermostat"></ha-icon>
                      <span class="badge-count">${t.domains.climate.on}</span>
                    </span>
                  `:G}
                  
                  ${t.domains.media_player&&t.domains.media_player.on>0?F`
                    <span class="info-badge media_player">
                      <ha-icon icon="mdi:play-circle"></ha-icon>
                      <span class="badge-count">${t.domains.media_player.on}</span>
                    </span>
                  `:G}
                  
                  ${t.domains.cover&&t.domains.cover.on>0?F`
                    <span class="info-badge cover">
                      <ha-icon icon="mdi:garage-open"></ha-icon>
                      <span class="badge-count">${t.domains.cover.on}</span>
                    </span>
                  `:G}
                  
                  ${t.domains.fan&&t.domains.fan.on>0?F`
                    <span class="info-badge fan">
                      <ha-icon icon="mdi:fan"></ha-icon>
                      <span class="badge-count">${t.domains.fan.on}</span>
                    </span>
                  `:G}
                  
                  ${t.domains.motion&&t.domains.motion.on>0?F`
                    <span class="info-badge motion">
                      <ha-icon icon="mdi:motion-sensor"></ha-icon>
                      <span class="badge-count">${t.domains.motion.on}</span>
                    </span>
                  `:G}
                  
            ${t.alerts.length>0?F`
                    <span class="info-badge alerts">
                      <ha-icon icon="mdi:alert-circle"></ha-icon>
                      <span class="badge-count">${t.alerts.length}</span>
                    </span>
            `:G}
                </div>
              </div>
            </div>
          </button>
        `}_renderGlobalHeader(){const e={"global-header":!0,compact:this._headerCompact,expanded:this._headerExpanded,mobile:this._isMobile};return F`
      <header class=${be(e)}>
        <div class="header-content">
          ${this._renderHeaderStatusCards()}
          
          ${this._isMobile?G:F`
            <div class="header-time-weather">
              ${!1!==this.config?.settings?.show_time?F`
                <div class="header-time-section">
              <div class="header-time">${this._currentTime}</div>
              <div class="header-date">${this._currentDate}</div>
            </div>
          `:G}
          ${this._renderWeatherDisplay()}
            </div>
          `}
        </div>
        
        <!-- Expanded content section (always in DOM to avoid Lit marker invalidation) -->
        <div class="header-expanded-content" style=${this._headerExpanded?"":"display:none"}>
          <div class="header-favorites">
            ${this._renderFavoritesSection()}
          </div>
        </div>
        
        ${"home"!==this._selectedView?this._renderHeaderExpandButton():G}
      </header>
    `}_renderWeatherDisplay(){if(!1===this.config?.settings?.show_weather)return G;const e=this._getWeatherEntity();return e?F`
      <div 
        class="weather-compact"
        @click=${()=>this._showMoreInfo(e.entity_id)}
      >
        <div class="weather-icon-compact">
          <ha-icon icon=${e.attributes.icon||"mdi:weather-cloudy"}></ha-icon>
        </div>
        <div class="weather-temp-compact">
          ${e.attributes.temperature}${e.attributes.temperature_unit}
        </div>
      </div>
    `:G}_renderHeaderStatusCards(){const e=this._getStatusDomains();return F`
      <div class="header-status-section">
        <div class="header-status-scroll">
          ${Ae(e,e=>e.domain,e=>F`
              <div 
                class="status-card-compact ${e.domain} header-card"
                @click=${()=>this._handleStatusCardClick(e)}
                data-domain=${e.domain}
              >
                <div class="status-card-icon-compact">
                  <ha-icon icon=${e.icon}></ha-icon>
                  ${e.count>0?F`
                    <div class="status-card-badge-compact">${e.count}</div>
                  `:G}
                </div>
                <div class="status-card-title-compact">${e.name}</div>
              </div>
            `)}
        </div>
      </div>
    `}_renderHeaderExpandButton(){const e=this._getHiddenStatusCount();return F`
      <button 
        class="header-expand-button"
        @click=${this._toggleHeader}
        data-extra-count=${(e=>e??G)(e||void 0)}
      >
        <ha-icon icon=${this._headerExpanded?"mdi:chevron-up":"mdi:chevron-down"}></ha-icon>
      </button>
    `}_renderHomeView(){return F`
      <div class="home-view">
        ${this._renderHomeWelcome()}
        ${this._renderHomeStatusCards()}
        ${this._renderFavorites()}
        </div>
    `}_renderHomeWelcome(){const e=this.hass?.user?.name||"User",t=this._getGreeting(),i=this._getWeatherEntity();return F`
      <div class="home-welcome">
        <div class="welcome-content">
          <div class="welcome-header">
            <div class="welcome-text">
              <span class="welcome-greeting">${t}</span>
              <span class="welcome-name">, ${e}!</span>
            </div>
            <div class="welcome-time-section">
              <div class="welcome-time">${this._currentTime}</div>
              <div class="welcome-date">${this._currentDate}</div>
            </div>
          </div>
          <div class="welcome-subheader">
            ${this._renderHomeAlarm()}
            ${i?F`
              <div class="welcome-weather" @click=${()=>this._showMoreInfo(i.entity_id)}>
                <ha-icon icon=${i.attributes.icon||"mdi:weather-cloudy"}></ha-icon>
                <span class="weather-temp">${i.attributes.temperature}${i.attributes.temperature_unit}</span>
              </div>
            `:G}
          </div>
        </div>
      </div>
    `}_renderHomeStatusCards(){const e=this._getStatusDomains();return F`
      <div class="home-status-section">
        ${this._renderPersonCards()}
        <div class="home-status-grid">
          ${Ae(e.filter(e=>"person"!==e.domain),e=>e.domain,e=>F`
              <div 
                class="home-status-card ${e.domain}"
                @click=${()=>this._handleStatusCardClick(e)}
                data-domain=${e.domain}
              >
                <div class="status-card-icon">
                  <ha-icon icon=${e.icon}></ha-icon>
                  ${e.count>0?F`
                    <div class="status-card-badge">${e.count}</div>
                  `:G}
                </div>
                <div class="status-card-title">${e.name}</div>
              </div>
            `)}
        </div>
      </div>
    `}_getGreeting(){const e=(new Date).getHours();return e<12?"Good morning":e<18?"Good afternoon":"Good evening"}_renderPersonCards(){if(!this.hass||!this.config)return G;const e=new Set(this.config.settings?.hidden_persons||[]),t=Object.values(this.hass.states).filter(t=>t.entity_id.startsWith("person.")&&!e.has(t.entity_id)&&!this.hass.entities?.[t.entity_id]?.hidden_by);return 0===t.length?G:F`
      <div class="person-cards-section">
        <div class="person-cards-grid">
          ${Ae(t,e=>e.entity_id,e=>this._renderPersonCard(e))}
        </div>
      </div>
    `}_renderPersonCard(e){const t="home"===e.state,i=e.attributes.friendly_name||e.entity_id.split(".")[1],a=e.attributes.entity_picture,o=this._getPersonDeviceTracker(e),s=o?.attributes?.battery_level,r=this._getDistanceFromHome(o);return F`
      <div class="person-card ${t?"home":"away"}" @click=${()=>this._showMoreInfo(e.entity_id)}>
        <div class="person-avatar-wrapper">
          <div class="person-avatar">
            ${a?F`
              <img src="${a}" alt="${i}">
            `:F`
              <ha-icon icon="mdi:account"></ha-icon>
            `}
          </div>
          ${t?F`
            <div class="person-home-indicator">
              <ha-icon icon="mdi:home"></ha-icon>
              </div>
            `:G}
          </div>
        <div class="person-info">
          <div class="person-name">${i}</div>
          <div class="person-status">${t?"Home":"not_home"===e.state?"Away":e.state}</div>
        
        </div>
        <div class="person-details">
            ${void 0!==s?F`
              <div class="person-battery">
                <ha-icon icon="mdi:battery${s>90?"":s>60?"-70":s>30?"-40":s>10?"-20":"-alert"}"></ha-icon>
                <span>${s}%</span>
              </div>
            `:G}
            ${r&&!t?F`
              <div class="person-distance">
                <ha-icon icon="mdi:map-marker-distance"></ha-icon>
                <span>${r}</span>
              </div>
            `:G}
          </div>
      </div>
    `}_getPersonDeviceTracker(e){const t=e.attributes.device_trackers||[];if(t.length>0){for(const e of t){const t=this.hass.states[e];if(void 0!==t?.attributes?.battery_level)return t}return this.hass.states[t[0]]}return null}_getDistanceFromHome(e){if(!e||!e.attributes.latitude||!e.attributes.longitude)return null;const t=this.hass.config.latitude,i=this.hass.config.longitude;if(!t||!i)return null;const a=(e.attributes.latitude-t)*Math.PI/180,o=(e.attributes.longitude-i)*Math.PI/180,s=Math.sin(a/2)*Math.sin(a/2)+Math.cos(t*Math.PI/180)*Math.cos(e.attributes.latitude*Math.PI/180)*Math.sin(o/2)*Math.sin(o/2),r=6371*(2*Math.atan2(Math.sqrt(s),Math.sqrt(1-s)));return r<1?`${Math.round(1e3*r)} m`:`${r.toFixed(1)} km`}_renderHomeAlarm(){const e=Object.values(this.hass.states).filter(e=>e.entity_id.startsWith("alarm_control_panel.")&&!this.hass.entities?.[e.entity_id]?.hidden_by);if(0===e.length)return G;const t=e[0],i=t?.state||"",a=["armed_away","armed_home","armed_night","armed_vacation"].includes(i),o="disarmed"===i;return F`
      <div class="welcome-alarm ${a?"alarm-armed":o?"alarm-disarmed":"alarm-triggered"}" @click=${()=>this._showMoreInfo(t?.entity_id||"")}>
        <ha-icon icon=${a?"mdi:shield-check":o?"mdi:shield-off":"mdi:shield-alert"}></ha-icon>
        <span class="alarm-text">${a?"Armed":o?"Disarmed":"Alarm"}</span>
          </div>
    `}_renderFavorites(){const e=this.config?.favorites||[];return 0===e.length?G:F`
      <div class="favorites-section">
        <div class="favorites-header">
          <ha-icon icon="mdi:star"></ha-icon>
          <span>Favorites</span>
        </div>
        <div class="favorites-grid">
          ${Ae(e,e=>e,e=>this._renderFavoriteCard(e))}
        </div>
      </div>
    `}_renderFavoriteCard(e){const t=this.hass.states[e],i=this.hass.entities?.[e];return!t||i?.hidden_by?G:F`
      <div class="favorite-card-wrapper" data-entity="${e}">
        <!-- Card will be rendered here programmatically -->
      </div>
    `}_renderAreaView(){if(!this._selectedArea)return G;const e=this.config?.areas?.find(e=>e.area_id===this._selectedArea);if(!e)return G;const t=this._getFilteredAreaEntities(this._selectedArea),i=this._getCachedAreaData(e);return F`
      <div class="area-view">
        <div class="area-header">
          <h1 class="area-title">${e.name}</h1>
          ${this._renderUnavailableEntitiesIcon(e.area_id)}
        </div>
        
        ${this._renderAreaBadges(e,t,i)}
        ${this._renderEntitiesSection(t)}
      </div>
    `}_renderAreaBadges(e,t,i){const a=[];i.domains.light&&i.domains.light.on>0&&a.push(F`
        <div class="area-badge light">
          <ha-icon icon="mdi:lightbulb"></ha-icon>
          <span>${i.domains.light.on} on</span>
        </div>
      `),i.domains.switch&&i.domains.switch.on>0&&a.push(F`
        <div class="area-badge switch">
          <ha-icon icon="mdi:flash"></ha-icon>
          <span>${i.domains.switch.on} on</span>
        </div>
      `),i.domains.climate&&i.domains.climate.on>0&&a.push(F`
        <div class="area-badge climate">
          <ha-icon icon="mdi:thermostat"></ha-icon>
                            <span>${i.domains.climate.on} active</span>
        </div>
      `);const o=t.filter(e=>e.entity_id.startsWith("binary_sensor.")&&"motion"===this.hass?.states[e.entity_id]?.attributes?.device_class&&"on"===this.hass?.states[e.entity_id]?.state);o.length>0&&a.push(F`
        <div class="area-badge motion active">
          <ha-icon icon="mdi:motion-sensor"></ha-icon>
                            <span>${o.length} active</span>
        </div>
      `),i.domains.cover&&i.domains.cover.on>0&&a.push(F`
        <div class="area-badge cover">
          <ha-icon icon="mdi:garage-open"></ha-icon>
          <span>${i.domains.cover.on} open</span>
        </div>
      `),i.domains.media_player&&i.domains.media_player.on>0&&a.push(F`
        <div class="area-badge media_player">
          <ha-icon icon="mdi:play-circle"></ha-icon>
                            <span>${i.domains.media_player.on} active</span>
        </div>
      `);const s=t.filter(e=>e.entity_id.startsWith("light."));if(s.length>0){const t=this._areAllEntitiesOff(s,"light");a.push(F`
        <button 
          class="area-badge light-toggle"
          @click=${()=>this._toggleAreaLights(e.area_id)}
        >
          <ha-icon icon=${t?"mdi:lightbulb-on":"mdi:lightbulb-off"}></ha-icon>
                            <span>${t?"All lights on":"All lights off"}</span>
        </button>
      `)}const r=t.filter(e=>e.entity_id.startsWith("switch."));if(r.length>0){const t=this._areAllEntitiesOff(r,"switch");a.push(F`
        <button 
          class="area-badge switch-toggle"
          @click=${()=>this._toggleAreaSwitches(e.area_id)}
        >
          <ha-icon icon=${t?"mdi:toggle-switch":"mdi:toggle-switch-off"}></ha-icon>
          <span>${t?"All switches on":"All switches off"}</span>
        </button>
      `)}return i.wattage&&a.push(F`
        <div class="area-badge wattage">
          <ha-icon icon="mdi:flash"></ha-icon>
          <span>${i.wattage}</span>
        </div>
      `),i.totalEnergy&&a.push(F`
        <div class="area-badge energy">
          <ha-icon icon="mdi:lightning-bolt"></ha-icon>
          <span>${i.totalEnergy}</span>
        </div>
      `),i.temperature&&a.push(F`
        <div class="area-badge temperature">
          <ha-icon icon="mdi:thermometer"></ha-icon>
          <span>${i.temperature}</span>
        </div>
      `),i.humidity&&a.push(F`
        <div class="area-badge humidity">
          <ha-icon icon="mdi:water-percent"></ha-icon>
          <span>${i.humidity}</span>
        </div>
      `),a.length>0?F`
      <div class="area-badges">
        ${a}
      </div>
    `:G}_renderEntitiesSection(e){if(0===e.length)return G;const t=e.reduce((e,t)=>{const i=t.entity_id.split(".")[0];if("binary_sensor"===i){const i=this.hass.states[t.entity_id];"motion"===(i?.attributes?.device_class||"generic")?(e.motion||(e.motion=[]),e.motion.push(t)):(e.binary_sensor||(e.binary_sensor=[]),e.binary_sensor.push(t))}else i&&!e[i]&&(e[i]=[]),i&&e[i]&&e[i].push(t);return e},{});return F`
      <div class="entities-section">
        ${Object.entries(t).map(([e,t])=>{let i,a;var o;return"motion"===e?(i="Motion",a="mdi:motion-sensor"):(o=e,i=He[o]?.name||o,a=(e=>({light:"mdi:lightbulb",switch:"mdi:flash",sensor:"mdi:eye",binary_sensor:"mdi:radiobox-blank",cover:"mdi:window-shutter",climate:"mdi:thermostat",fan:"mdi:fan",lock:"mdi:lock",media_player:"mdi:play-circle",camera:"mdi:camera",vacuum:"mdi:robot-vacuum",person:"mdi:account",automation:"mdi:robot",script:"mdi:script-text",scene:"mdi:palette",sun:"mdi:white-balance-sunny",weather:"mdi:weather-cloudy"}[e]||"mdi:home"))(e)),F`
          <div class="domain-group">
            <div class="domain-header">
                <ha-icon icon=${a}></ha-icon>
                <span>${i}</span>
            </div>
            <div class="entities-grid">
              ${Ae(t,e=>e.entity_id,e=>this._renderEntityCard(e))}
            </div>
          </div>
          `})}
      </div>
    `}_renderEntityCard(e){return this.hass.states[e.entity_id]?F`
      <div 
        class="entity-card-wrapper"
        data-entity-id=${e.entity_id}
      >
        ${this._entityCardsCache.get(e.entity_id)||F`
          <div class="skeleton" style="height: 60px;"></div>
        `}
      </div>
    `:G}_loadEntityCard(e,t){if(!e||!e.isConnected||!e.parentNode)return;if(!this.hass.states[t])return;const i=t.split(".")[0];let a={type:"tile",entity:t};"climate"===i?a={type:"thermostat",entity:t}:"camera"===i?a={type:"picture-entity",entity:t,camera_view:"live"}:"media_player"===i&&(a={type:"media-control",entity:t});try{const i=document.createElement("hui-card");i.hass=this.hass,i.config=a,this._entityCardsCache.set(t,F`${i}`),e&&e.isConnected&&(e.innerHTML="",e.appendChild(i))}catch(e){console.warn(`Error loading entity card for ${t}:`,e)}}_renderToast(){return G}_renderConfirmationDialog(){return G}_getWeatherEntity(){if(this.config?.settings?.weather_entity_id){const e=this.hass.states[this.config.settings.weather_entity_id];if(e&&!this.hass.entities?.[e.entity_id]?.hidden_by)return e}return Object.values(this.hass.states).find(e=>e.entity_id.startsWith("weather.")&&!this.hass.entities?.[e.entity_id]?.hidden_by)}_getStatusDomains(){const e="status_domains",t=this._domainCountsCache.get(e);if(t&&t.length>0&&t[0].timestamp&&Date.now()-t[0].timestamp<this._CACHE_DURATION)return t;const i=function(e,t){if(!e?.states)return[];const i=Object.values(e.states).filter(i=>{if(!t?.entities||!t?.devices)return!1;const a=i.entity_id,o=e.entities?.[a];if(o?.hidden_by)return!1;if(!i||"unavailable"===i.state)return!1;const s=t.entities?.find(e=>e.entity_id===a),r=s&&s.device_id?t.devices?.find(e=>e.device_id===s.device_id):null,n=s?.area_id||r?.area_id||e?.entities?.[a]?.area_id;if(!n)return!1;if((t.areas_display?.hidden||[]).includes(n))return!1;const d=t.areas_options?.[n];if(d?.groups_options)for(const e of Object.values(d.groups_options))if(e.hidden?.includes(a))return!1;return"person"!==a.split(".")[0]||!(t.settings?.hidden_persons||[]).includes(a)}),a={};Object.keys(He).forEach(e=>{a[e]={total:0,on:0}});const o={};Object.keys(Te).forEach(e=>{o[e]={total:0,on:0}}),i.forEach(e=>{const t=e.entity_id,i=t?.split(".")[0];if(i&&!Oe.includes(e.state)){if(i in a){const t=a[i];t&&t.total++;const o=!De.includes(e.state)&&!Oe.includes(e.state);"climate"===i?e.attributes?.hvac_action&&"idle"!==e.attributes.hvac_action&&"off"!==e.attributes.hvac_action?t&&t.on++:e.attributes?.hvac_action||"off"===e.state||t&&t.on++:"person"===i?"home"===e.state&&t&&t.on++:"media_player"===i?["playing","paused"].includes(e.state)&&t&&t.on++:"cover"===i?"open"!==e.state&&"opening"!==e.state||t&&t.on++:"lock"===i?"unlocked"===e.state&&t&&t.on++:"vacuum"===i?["cleaning","returning","docked"].includes(e.state)&&t&&t.on++:"alarm_control_panel"===i?e.state?.includes("armed")&&t&&t.on++:o&&t&&t.on++}if("binary_sensor"===i&&e.attributes?.device_class){const t=e.attributes.device_class;if(t in o){const i=o[t];i&&(i.total++,"on"===e.state&&i.on++)}}}});const s=[],r=a.person;if(r&&r.total>0){const e=He.person;e&&(r.total<=2?s.push({domain:"person",count:r.on,name:r.on===r.total?`${r.on} home`:0===r.on?"Nobody home":`${r.on} home`,icon:e.icon}):s.push({domain:"person",count:r.on,name:`${r.on}/${r.total} home`,icon:e.icon}))}return Object.entries(a).forEach(([e,t])=>{if("person"!==e&&t.total>0&&t.on>0){const i=He[e];i&&s.push({domain:e,count:t.on,name:i.name,icon:i.icon})}}),Object.entries(o).forEach(([e,t])=>{if(t.total>0&&t.on>0){const i=Te[e];i&&s.push({domain:"binary_sensor",deviceClass:e,count:t.on,name:i.name,icon:i.icon})}}),s}(this.hass,this.config),a=function(e){if(!e?.states)return;let t=0,i=!1;return Object.values(e.states).forEach(e=>{if(e.entity_id?.includes("power")||e.entity_id?.includes("wattage")||e.entity_id?.includes("consumption")){const a=parseFloat(e.state);isNaN(a)||"W"!==e.attributes?.unit_of_measurement||(t+=a,i=!0)}}),i?`${Math.round(t)} W`:void 0}(this.hass);a&&i.unshift({domain:"wattage",count:0,name:a,icon:"mdi:flash"});const o=Date.now();return i.forEach(e=>e.timestamp=o),i.length>0&&this._domainCountsCache.set(e,i),i}_getHiddenStatusCount(){return""}_getAreaEntities(e){const t=this._areaEntitiesCache.get(e);if(t&&Date.now()-t.timestamp<this._CACHE_DURATION)return t.entities;const i=[],a=new Set;if(this.config?.entities){const t=new Set;this.config.devices&&this.config.devices.forEach(i=>{i.area_id===e&&t.add(i.device_id)}),this.config.entities.forEach(o=>{if(o.area_id===e||o.device_id&&t.has(o.device_id)){const e=this.hass.entities?.[o.entity_id];if(e?.hidden_by||"diagnostic"===e?.entity_category||"config"===e?.entity_category)return;i.push(o),a.add(o.entity_id)}})}return Object.values(this.hass.states).forEach(t=>{if(!a.has(t.entity_id)&&t.attributes?.area_id===e){const a=this.hass.entities?.[t.entity_id];if(a?.hidden_by||"diagnostic"===a?.entity_category||"config"===a?.entity_category)return;i.push({entity_id:t.entity_id,area_id:e,hidden:!1})}}),this._areaEntitiesCache.set(e,{entities:i,timestamp:Date.now()}),i}_getFilteredAreaEntities(e){let t=this._getAreaEntities(e);if(t=t.filter(e=>{const t=this.hass.entities?.[e.entity_id];return!(t?.hidden_by||"diagnostic"===t?.entity_category||"config"===t?.entity_category)}),this.config?.areas_options){const i=this.config.areas_options[e];if(i?.groups_options){const e=new Set;for(const t of Object.values(i.groups_options))t.hidden&&t.hidden.forEach(t=>e.add(t));t=t.filter(t=>!e.has(t.entity_id))}}return!0===this.config?.settings?.hide_unavailable_entities&&(t=t.filter(e=>{const t=this.hass.states[e.entity_id];return t&&"unavailable"!==t.state&&"unknown"!==t.state})),t}_getUnavailableAreaEntities(e){const t=this._getAreaEntities(e),i=[],a=[];return t.forEach(e=>{const t=this.hass.states[e.entity_id];t&&("unavailable"===t.state?i.push(e.entity_id):"unknown"===t.state&&a.push(e.entity_id))}),{unavailable:i,unknown:a}}_renderUnavailableEntitiesIcon(e){if(!0!==this.config?.settings?.hide_unavailable_entities)return G;const t=this._getUnavailableAreaEntities(e),i=t.unavailable.length+t.unknown.length;return 0===i?G:F`
      <button 
        class="unavailable-entities-icon"
        @click=${()=>this._showUnavailableEntitiesModal(e)}
        title="Show ${i} hidden unavailable/unknown entities"
      >
        <ha-icon icon="mdi:information-outline"></ha-icon>
        <span class="unavailable-count">${i}</span>
      </button>
    `}_getCachedAreaData(e){const t=this._areaDataCache.get(e.area_id);if(t&&Date.now()-t.timestamp<this._CACHE_DURATION)return t.data;const i=this._getFilteredAreaEntities(e.area_id),a=((e,t,i,a)=>{const o=i.map(e=>`${e.entity_id}:${t.states[e.entity_id]?.state}`).join("|"),s=`${e.area_id}-${i.length}-${o.substring(0,50)}`,r=Se.get(s);if(r&&Date.now()-r.timestamp<5e3)return r.data;let n,d,c,l;const h=t.areas[e.area_id];if(h){if("temperature_entity_id"in h){const e=h.temperature_entity_id;if(e&&t.states[e]){const i=t.states[e];"unavailable"!==i.state&&"unknown"!==i.state&&(n=t.formatEntityState(i))}}if("humidity_entity_id"in h){const e=h.humidity_entity_id;if(e&&t.states[e]){const i=t.states[e];"unavailable"!==i.state&&"unknown"!==i.state&&(d=t.formatEntityState(i))}}}let p=0,g=!1;i.forEach(i=>{const o=t.states[i.entity_id];if(!o)return;const s=Me(i.entity_id);if(!Le(i.entity_id,s,e.area_id,a)&&i.entity_id.startsWith("sensor.")&&"W"===o.attributes.unit_of_measurement&&"unavailable"!==o.state&&"unknown"!==o.state){const e=parseFloat(o.state);isNaN(e)||(p+=e,g=!0)}}),g&&(c=p>=1e3?`${(p/1e3).toFixed(1)} kW`:`${Math.round(p)} W`);let u=0,m=!1;i.forEach(i=>{const o=t.states[i.entity_id];if(!o)return;const s=Me(i.entity_id);if(!Le(i.entity_id,s,e.area_id,a)&&i.entity_id.startsWith("sensor.")&&"kWh"===o.attributes.unit_of_measurement&&"unavailable"!==o.state&&"unknown"!==o.state){const e=parseFloat(o.state);isNaN(e)||(u+=e,m=!0)}}),m&&(l=u>=1e3?`${(u/1e3).toFixed(1)} MWh`:`${u.toFixed(1)} kWh`);const f=[],_={light:{total:0,on:0},switch:{total:0,on:0},fan:{total:0,on:0},cover:{total:0,on:0},climate:{total:0,on:0},media_player:{total:0,on:0},lock:{total:0,on:0},motion:{total:0,on:0}};i.forEach(i=>{const o=t.states[i.entity_id];if(!o)return;const s=Me(i.entity_id);if(!Le(i.entity_id,s,e.area_id,a)){if(s in _){const e=_[s];if(!e)return;e.total++;const t="off"!==o.state&&"unavailable"!==o.state&&"unknown"!==o.state&&"closed"!==o.state&&"locked"!==o.state;"climate"===s?o.attributes.hvac_action&&"idle"!==o.attributes.hvac_action&&"off"!==o.attributes.hvac_action?e.on++:o.attributes.hvac_action||"off"===o.state||e.on++:t&&e.on++}if(i.entity_id.startsWith("binary_sensor.")&&"motion"===o.attributes.device_class){const e=_.motion;e&&(e.total++,"on"===o.state&&e.on++)}i.entity_id.startsWith("binary_sensor.")&&"on"===o.state&&o.attributes.device_class&&["door","window","moisture","smoke"].includes(o.attributes.device_class)&&f.push({entity_id:i.entity_id,deviceClass:o.attributes.device_class})}});const v={area_id:e.area_id,name:e.name,icon:e.icon||void 0,picture:e.picture||void 0,temperature:n,humidity:d,wattage:c,totalEnergy:l,alerts:f,domains:_};return Se.set(s,{data:v,timestamp:Date.now()}),v})(e,this.hass,i,this.config);return this._areaDataCache.set(e.area_id,{data:a,timestamp:Date.now()}),a}_areAllEntitiesOff(e,t){return e.every(e=>{const t=this.hass.states[e.entity_id];return!t||"off"===t.state||"unavailable"===t.state})}_selectView(e){this._selectedView=e,"home"===e&&(this._selectedArea=null),this._closeMobileNav()}_selectArea(e){this._selectedArea=e,this._selectedView="area",this._closeMobileNav()}_toggleHeader(){this._headerExpanded=!this._headerExpanded}_toggleMobileNav(){this._mobileNavOpen=!this._mobileNavOpen}_renderFavoritesSection(){const e=this.config?.favorites||[];if(0===e.length)return F`
        <div class="no-favorites">
          <ha-icon icon="mdi:star-outline"></ha-icon>
          <p>No favorites configured</p>
        </div>
      `;const t=e.filter(e=>{const t=this.hass?.states[e],i=this.hass?.entities?.[e];return t&&"unavailable"!==t.state&&"unknown"!==t.state&&!i?.hidden_by});return 0===t.length?F`
        <div class="no-favorites">
          <ha-icon icon="mdi:star-off"></ha-icon>
          <p>All favorites are currently unavailable</p>
        </div>
      `:F`
      <div class="favorites-section">
        <div class="favorites-header">
          <ha-icon icon="mdi:star"></ha-icon>
          <h3>Favorites</h3>
        </div>
        <div class="favorites-grid">
          ${Ae(t,e=>e,e=>this._renderFavoriteTile(e))}
        </div>
      </div>
    `}_renderFavoriteTile(e){const t=this.hass?.states[e];return t?F`
      <dd-tile-host class="favorite-tile-wrapper" entity="${e}"></dd-tile-host>
    `:G}async _renderFavoriteTileCards(){if(!this.shadowRoot||!this.hass)return;if(!this._headerExpanded)return;const e=++this._favoritesRenderVersion,t=this.shadowRoot?.querySelectorAll("dd-tile-host.favorite-tile-wrapper");t&&t.forEach(t=>{if(!t||!t.isConnected)return;t.getAttribute("entity")&&e===this._favoritesRenderVersion&&this._headerExpanded&&(t.hass=this.hass)})}async _renderHomeFavoriteCards(){if(!this.shadowRoot||!this.hass)return;const e=this.shadowRoot?.querySelectorAll(".favorite-card-wrapper");e&&e.forEach(e=>{if(!e||!e.isConnected)return;const t=e.dataset.entity;if(!t)return;if(e.querySelector("hui-tile-card")){const t=e.querySelector("hui-tile-card");return void(t&&void 0!==t.hass&&(t.hass=this.hass))}const i=this.hass?.states[t];if(i)try{const a=document.createElement("hui-tile-card"),o=i.attributes.friendly_name||t,s={entity:t,name:o};"setConfig"in a?(a.setConfig(s),a.hass=this.hass):customElements.whenDefined("hui-tile-card").then(()=>{try{"setConfig"in a&&(a.setConfig(s),a.hass=this.hass)}catch(e){console.warn("Failed to finalize tile-card after upgrade:",e)}}),a.classList.add("favorite-tile"),a.addEventListener("click",e=>{e.stopPropagation(),this._showMoreInfo(t)}),e&&e.isConnected&&(e.appendChild(a),requestAnimationFrame(()=>{a.requestUpdate&&a.requestUpdate()}))}catch(e){console.error(`Error creating home favorite tile card for ${t}:`,e)}})}_closeMobileNav(){this._mobileNavOpen=!1}_showMoreInfo(e){je(this,"hass-more-info",{entityId:e})}_handleStatusCardClick(e){"person"===e.domain?this._showPersonEntities():"wattage"===e.domain?this._showWattageEntities():e.deviceClass?this._showDeviceClassEntities(e.deviceClass):this._showDomainEntities(e.domain)}_showPersonEntities(){We(this,{domain:"person",config:this.config})}_showWattageEntities(){We(this,{domain:"sensor",config:this.config,filterByUnitOfMeasurement:"W"})}_showDeviceClassEntities(e){We(this,{domain:"binary_sensor",config:this.config,deviceClass:e})}_handleLightToggle(e,t){e.stopPropagation(),this._toggleAreaLights(t)}_shouldUpdateEntities(e,t){const i=["light","switch","climate","media_player","camera","cover","lock","binary_sensor","person","sensor","fan"];return Object.keys(t.states).some(a=>{const o=a.split(".")[0];if(!o||!i.includes(o))return!1;const s=e.states[a],r=t.states[a];return s?.state!==r?.state||s?.attributes!==r?.attributes})}_updateEntityCards(e,t){this.shadowRoot&&(this.shadowRoot.querySelectorAll("*").forEach(e=>{void 0!==e.hass&&e.hass!==t&&(e.hass=t)}),this.shadowRoot.querySelectorAll("hui-card, hui-tile-card, hui-entity-card, hui-thermostat-card, hui-picture-entity-card, hui-media-control-card").forEach(e=>{e.hass!==t&&(e.hass=t)}))}_clearEntityCardsCache(){this._entityCardsCache.clear(),this._areaDataCache.clear(),this._domainCountsCache.clear(),ze()}_updateAreaDataCache(){this._areaDataCache.clear(),ze()}_showDomainEntities(e){We(this,{domain:e,config:this.config})}_showUnavailableEntitiesModal(e){const t=this._getUnavailableAreaEntities(e),i=this.config?.areas?.find(t=>t.area_id===e),a=i?.name||e,o=[...t.unavailable,...t.unknown];We(this,{domain:"unavailable",areaId:e,config:this.config,customTitle:`Hidden Unavailable Entities - ${a}`,customEntities:o,customDescription:"These entities are currently hidden because they have 'unavailable' or 'unknown' states. You can disable this filtering in the dashboard configuration."})}async _toggleAreaLights(e){if(!await this._showConfirmation("Toggle Lights","Are you sure you want to toggle all lights in this area?"))return;const t=this._getFilteredAreaEntities(e).filter(e=>e.entity_id.startsWith("light.")),i=this._areAllEntitiesOff(t,"light"),a=i?"turn_on":"turn_off",o=t.map(e=>e.entity_id);await this.hass.callService("light",a,{entity_id:o}),this._showToast("All lights turned "+(i?"on":"off"))}async _toggleAreaSwitches(e){if(!await this._showConfirmation("Toggle Switches","Are you sure you want to toggle all switches in this area?"))return;const t=this._getFilteredAreaEntities(e).filter(e=>e.entity_id.startsWith("switch.")),i=this._areAllEntitiesOff(t,"switch"),a=i?"turn_on":"turn_off",o=t.map(e=>e.entity_id);await this.hass.callService("switch",a,{entity_id:o}),this._showToast("All switches turned "+(i?"on":"off"))}async _showConfirmation(e,t){return confirm(`${e}\n\n${t}`)}_showToast(e){console.log("Toast:",e)}};Ge.styles=d`
    :host {
      display: block;
      height: 100vh;
      /*background: var(--primary-background-color);*/
      color: var(--primary-text-color);
      overflow: hidden;
    }

    /* Layout Container */
    .layout-container {
      display: flex;
      height: 100vh;
      position: relative;
    }

    /* Sidebar Styles */
    .sidebar {
      width: 250px;
      background: var(--card-background-color);
      border-right: 1px solid var(--divider-color);
      display: flex;
      flex-direction: column;
      transition: transform 0.3s ease;
      z-index: 1;
      overflow-y: auto;
    }

    /* Main Content */
    .main-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    /* Global Header */
    .global-header {
      background: var(--card-background-color);
      border-bottom: 1px solid var(--divider-color);
      padding: 16px;
      position: sticky;
      top: 0;
      z-index: 1;
      transition: all 0.3s ease;
    }

    .global-header.compact {
      padding: 8px 16px;
    }

    .header-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
    }

    /* Time and Weather Section (right side) */
    .header-time-weather {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 8px;
      min-width: 120px;
    }

    .header-time-section {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 0px;
      line-height: 0.8;
    }

    .header-time {
      font-size: 24px;
      font-weight: 700;
      color: var(--primary-text-color);
      font-family: 'Roboto Mono', monospace;
      line-height: 1.2;
    }

    .header-date {
      font-size: 14px;
      opacity: 0.8;
      color: var(--secondary-text-color);
      font-weight: 500;
    }

    /* Weather Display */
    .weather-compact {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 4px 12px;
      background: var(--secondary-background-color);
      border-radius: 20px;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .weather-compact:hover {
      background: var(--primary-color);
      color: var(--text-primary-color);
      transform: translateY(-1px);
    }

    .weather-icon-compact ha-icon {
      --mdc-icon-size: 24px;
    }

    .weather-temp-compact {
      font-size: 14px;
      font-weight: 500;
    }

    /* Status Cards Section */
    .header-status-section {
      flex: 1;
      overflow: hidden;
    }

    .header-status-scroll {
      display: flex;
      gap: 8px;
      overflow-x: auto;
      scrollbar-width: none;
      -ms-overflow-style: none;
    }

    .header-status-scroll::-webkit-scrollbar {
      display: none;
    }

    /* Status Card Compact */
    .status-card-compact {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 8px 12px;
      background: var(--secondary-background-color);
      border-radius: 12px;
      cursor: pointer;
      transition: all 0.2s ease;
      min-width: 60px;
      position: relative;
    }

    .status-card-compact:hover {
      transform: translateY(-2px);
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }

    .status-card-icon-compact {
      position: relative;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: color-mix(in srgb, var(--primary-color) 10%, transparent);
    }

    .status-card-icon-compact ha-icon {
      --mdc-icon-size: 20px;
      color: var(--primary-color);
    }

    .status-card-badge-compact {
      position: absolute;
      top: -4px;
      right: -4px;
      background: var(--primary-color);
      color: var(--text-primary-color);
      border-radius: 10px;
      padding: 2px 6px;
      font-size: 11px;
      font-weight: bold;
      min-width: 18px;
      text-align: center;
    }

    .status-card-title-compact {
      font-size: 11px;
      margin-top: 4px;
      opacity: 0.8;
    }

    /* Domain-specific status card colors */
    .status-card-compact.light .status-card-icon-compact {
      background: color-mix(in srgb, var(--warning-color) 15%, transparent);
    }

    .status-card-compact.light ha-icon {
      color: var(--warning-color);
    }

    .status-card-compact.switch .status-card-icon-compact {
      background: color-mix(in srgb, var(--info-color) 15%, transparent);
    }

    .status-card-compact.switch ha-icon {
      color: var(--info-color);
    }

    .status-card-compact.binary_sensor .status-card-icon-compact {
      background: color-mix(in srgb, var(--error-color) 15%, transparent);
    }

    .status-card-compact.binary_sensor ha-icon {
      color: var(--error-color);
    }

    .status-card-compact.person .status-card-icon-compact {
      background: color-mix(in srgb, var(--success-color) 15%, transparent);
    }

    .status-card-compact.person ha-icon {
      color: var(--success-color);
    }

    .status-card-compact.wattage .status-card-icon-compact {
      background: color-mix(in srgb, var(--warning-color) 15%, transparent);
    }

    .status-card-compact.wattage ha-icon {
      color: var(--warning-color);
    }

    /* Header Expand Button */
    .header-expand-button {
      position: absolute;
      bottom: -28px;
      left: 50%;
      transform: translateX(-50%);
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: var(--card-background-color);
      border: 1px solid var(--divider-color);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.2s ease;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      z-index: 5;
    }

    .header-expand-button:hover {
      transform: translateX(-50%) translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }

    .header-expand-button[data-extra-count]::after {
      content: attr(data-extra-count);
      position: absolute;
      right: -8px;
      top: 50%;
      transform: translateY(-50%);
      background: var(--primary-color);
      color: var(--text-primary-color);
      border-radius: 10px;
      padding: 2px 6px;
      font-size: 11px;
      font-weight: bold;
      min-width: 18px;
      text-align: center;
    }

    /* Area List */
    .area-list {
      padding: 8px;
    }

    /* Floor Sections */
    .floor-section {
      margin-bottom: 16px;
    }

    .floor-header {
      padding: 8px 16px;
      margin-bottom: 8px;
    }

    .floor-header h3 {
      margin: 0;
      font-size: 14px;
      font-weight: 600;
      color: var(--secondary-text-color);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .floor-areas {
      display: flex;
      flex-direction: column;
    }

    .area-button {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 16px;
      margin-bottom: 8px;
      border-radius: 16px;
      cursor: pointer;
      transition: all 0.3s ease;
      background: var(--secondary-background-color);
      border: none;
      width: 100%;
      height: 125px;
      text-align: left;
      color: var(--primary-text-color);
      position: relative;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    }

    .area-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    }

    .area-button.selected {
      background: var(--primary-color);
      color: var(--text-primary-color);
    }

    /* Home button specific styling */
    .area-button.home-button {
      height: 60px;
    }

    /* Background image styles */
    .area-button.has-picture {
      position: relative;
      background: var(--secondary-background-color);
    }

    .area-background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      opacity: 0.7;
      transition: opacity 0.2s ease;
    }

    .area-button.has-picture:hover .area-background {
      opacity: 0.8;
    }

    /* Area content structure */
    .area-content {
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: column;
      gap: 8px;
      width: 100%;
      height: 100%;
      justify-content: space-between;
    }

    .area-top-section {
      display: flex;
      flex-direction: column;
      gap: 2px;
      margin-top: 4px;
    }

    .area-bottom-section {
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      gap: 8px;
      margin-bottom: 4px;
    }

    /* Enhanced text styling for picture backgrounds */
    .area-button.has-picture .area-name,
    .area-button.has-picture .area-sensors {
      text-shadow: 0 1px 3px rgba(0,0,0,0.7);
      color: var(--text-primary-color);
    }

    /* Area main icon in sidebar - override home view styling */
    .sidebar .area-main-icon {
      position: absolute;
      left: -25px;
      bottom: -25px;
      width: 65px;
      height: 65px;
      border-radius: 50%;
      background: color-mix(in srgb, var(--primary-color) 60%, transparent);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .area-button.selected .area-main-icon {
      background: rgba(255,255,255,0.2);
    }

    .sidebar .area-main-icon ha-icon {
      --mdc-icon-size: 40px;
      color: var(--primary-color);
    }

    /* Info badges container */
    .area-info-badges {
      display: flex;
      gap: 4px;
      flex-wrap: wrap;
      align-items: center;
    }

    /* Legacy area-icon styles (still used for simple buttons) */
    .area-icon {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: var(--secondary-background-color);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .area-button.selected .area-icon {
      background: rgba(255,255,255,0.2);
    }

    /* Legacy area-info styles (still used for simple buttons) */
    .area-info {
      flex: 1;
    }

    .area-name {
      font-weight: 600;
      font-size: 16px;
      margin-bottom: 2px;
    }

    .area-sensors {
      font-size: 13px;
      opacity: 0.8;
      font-weight: 500;
    }

    /* Legacy area-alerts styles (still used for simple buttons without badges) */
    .area-alerts {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: var(--error-color);
      color: var(--text-primary-color);
      font-size: 11px;
      font-weight: bold;
      flex-shrink: 0;
    }

    /* Content Area */
    .content-area {
      flex: 1;
      overflow-y: auto;
      padding: 16px;
    }

    /* Home View */
    .home-view {
      max-width: 1600px;
      margin: 0 auto;
      padding: 0px; /*24px;*/
    }

    /* Home Welcome */
    .home-welcome {
      text-align: center;
      margin-bottom: 28px;
      padding: 20px 0;
      background: linear-gradient(135deg, var(--card-background-color) 0%, var(--primary-background-color) 100%);
      border-radius: 24px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
    }

    .welcome-content {
      margin: 0 auto;
      padding: 0 24px;
    }

    .welcome-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
    }

    .welcome-text {
      display: flex;
      align-items: baseline;
      gap: 8px;
    }

    .welcome-greeting {
      font-size: 24px;
      font-weight: 400;
      color: var(--secondary-text-color);
    }

    .welcome-name {
      font-size: 32px;
      font-weight: 600;
      color: var(--primary-text-color);
    }

    .welcome-time-section {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 0px;
      line-height: 1.1;
    }

    .welcome-time {
      font-size: 36px;
      font-weight: 700;
      color: var(--primary-text-color);
      font-family: 'Roboto Mono', monospace;
    }

    .welcome-date {
      font-size: 16px;
      opacity: 0.8;
      color: var(--secondary-text-color);
      font-weight: 500;
    }

    .welcome-subheader {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .welcome-alarm {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 16px;
      border-radius: 20px;
      cursor: pointer;
      transition: all 0.2s ease;
      font-weight: 500;
    }

    .welcome-alarm.alarm-armed {
      background: var(--error-color);
      color: var(--text-primary-color);
    }

    .welcome-alarm.alarm-disarmed {
      background: var(--success-color);
      color: var(--text-primary-color);
    }

    .welcome-alarm.alarm-triggered {
      background: var(--error-color);
      color: var(--text-primary-color);
      animation: pulse 2s infinite;
    }

    .welcome-alarm:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    .welcome-alarm ha-icon {
      --mdc-icon-size: 18px;
    }

    .alarm-text {
      font-size: 14px;
      font-weight: 600;
    }

    @keyframes pulse {
      0% { opacity: 1; }
      50% { opacity: 0.7; }
      100% { opacity: 1; }
    }

    .welcome-weather {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 16px;
      background: var(--primary-color);
      color: var(--text-primary-color);
      border-radius: 20px;
      cursor: pointer;
      transition: all 0.2s ease;
      font-weight: 500;
    }

    .welcome-weather:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    .welcome-weather ha-icon {
      --mdc-icon-size: 20px;
    }

    .weather-temp {
      font-size: 16px;
      font-weight: 600;
    }

    /* Mobile Responsive Design */
    @media (max-width: 768px) {
      .home-welcome {
        margin-bottom: 32px;
        padding: 24px 0;
        border-radius: 16px;
      }

      .welcome-content {
        padding: 0 16px;
      }

      .welcome-header {
        flex-direction: column;
        gap: 16px;
        margin-bottom: 20px;
      }

      .welcome-text {
        align-items: center;
        gap: 4px;
      }

      .welcome-greeting {
        font-size: 20px;
      }

      .welcome-name {
        font-size: 28px;
      }

      .welcome-time-section {
        display: none;
      }

      .welcome-subheader {
        flex-direction: column;
        gap: 12px;
        align-items: center;
      }

      .welcome-alarm,
      .welcome-weather {
        padding: 10px 20px;
        min-width: 140px;
        justify-content: center;
      }

      .alarm-text,
      .weather-temp {
        font-size: 15px;
      }
    }

    @media (max-width: 480px) {
      .home-welcome {
        padding: 20px 0;
        margin-bottom: 24px;
      }

      .welcome-content {
        padding: 0 12px;
      }

      .welcome-greeting {
      font-size: 18px;
      }

      .welcome-name {
        font-size: 24px;
      }

      .welcome-time {
        font-size: 28px;
      }

      .welcome-date {
        font-size: 13px;
      }

      .welcome-alarm,
      .welcome-weather {
        padding: 8px 16px;
        min-width: 120px;
        font-size: 14px;
      }

      .alarm-text,
      .weather-temp {
        font-size: 14px;
      }
    }

    /* Home Status Cards */
    .home-status-section {
      margin-bottom: 48px;
    }

    /* Person Cards Section */
    .person-cards-section {
      margin-bottom: 32px;
    }

    .person-cards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 16px;
      margin: 0 auto;
    }

    .person-card {
      background: var(--card-background-color);
      border-radius: 16px;
      padding: 16px;
      cursor: pointer;
      transition: all 0.3s ease;
      border: 1px solid var(--divider-color);
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 16px;
    }

    .person-card.home {
      border-color: var(--success-color);
      background: linear-gradient(135deg, 
        var(--card-background-color) 0%, 
        color-mix(in srgb, var(--success-color) 10%, transparent) 100%);
    }

    .person-card.away {
      border-color: var(--secondary-text-color);
      opacity: 0.8;
    }

    .person-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    }

    .person-avatar-wrapper {
      position: relative;
      flex-shrink: 0;
    }

    .person-avatar {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      overflow: hidden;
      background: var(--secondary-background-color);
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid var(--divider-color);
    }

    .person-card.home .person-avatar {
      border-color: var(--success-color);
    }

    .person-avatar img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .person-avatar ha-icon {
      --mdc-icon-size: 36px;
      color: var(--secondary-text-color);
    }

    .person-home-indicator {
      position: absolute;
      bottom: -3px;
      right: -3px;
      width: 20px;
      height: 20px;
      background: var(--success-color);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid var(--card-background-color);
    }

    .person-home-indicator ha-icon {
      --mdc-icon-size: 12px;
      color: var(--text-primary-color);
    }

    .person-info {
      text-align: left;
      display: flex;
      flex-direction: column;
      gap: 2px;
      flex: 1;
      min-width: 0;
    }

    .person-name {
      font-size: 18px;
      font-weight: 600;
      color: var(--primary-text-color);
    }

    .person-status {
      font-size: 14px;
      color: var(--secondary-text-color);
      font-weight: 500;
    }

    .person-card.home .person-status {
      color: var(--success-color);
    }

    .person-details {
      display: flex;
      flex-direction: column;
      gap: 4px;
      align-items: flex-end;
      flex-shrink: 0;
      margin-left: auto;
    }

    .person-battery,
    .person-distance {
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: 12px;
      color: var(--secondary-text-color);
      background: var(--secondary-background-color);
      padding: 2px 6px;
      border-radius: 8px;
    }

    .person-battery ha-icon,
    .person-distance ha-icon {
      --mdc-icon-size: 14px;
    }

    .person-battery ha-icon {
      color: var(--success-color);
    }

    .person-battery ha-icon[icon*="alert"] {
      color: var(--error-color);
    }

    .person-distance ha-icon {
      color: var(--primary-color);
    }

    @media (max-width: 768px) {
      .person-cards-grid {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 12px;
      }

      .person-card {
        padding: 16px;
      }

      .person-avatar {
        width: 64px;
        height: 64px;
      }

      .person-avatar ha-icon {
        --mdc-icon-size: 36px;
      }

      .person-name {
        font-size: 16px;
      }

      .person-status {
        font-size: 13px;
      }

      .person-details {
        gap: 8px;
      }

      .person-battery,
      .person-distance {
        font-size: 12px;
        padding: 3px 6px;
      }
    }

    .home-status-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
      gap: 20px;
      margin: 0 auto;
    }

    .home-status-card {
      background: var(--card-background-color);
      border-radius: 20px;
      padding: 24px 20px;
      text-align: center;
      cursor: pointer;
      transition: all 0.3s ease;
      border: 1px solid var(--divider-color);
      position: relative;
      overflow: hidden;
    }

    .home-status-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .home-status-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
      border-color: var(--primary-color);
    }

    .home-status-card:hover::before {
      opacity: 1;
    }

    .home-status-card .status-card-icon {
      position: relative;
      margin-bottom: 16px;
    }

    .home-status-card .status-card-icon ha-icon {
      --mdc-icon-size: 36px;
      color: var(--primary-color);
      transition: transform 0.3s ease;
    }

    .home-status-card:hover .status-card-icon ha-icon {
      transform: scale(1.1);
    }

    .home-status-card .status-card-badge {
      position: absolute;
      top: -10px;
      right: -10px;
      background: var(--accent-color);
      color: white;
      border-radius: 50%;
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      font-weight: 600;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    }

    .home-status-card .status-card-title {
      font-size: 15px;
      font-weight: 600;
      color: var(--primary-text-color);
      margin-top: 8px;
    }



    /* Area Info Badges */
    .area-info-badges {
      position: absolute;
      top: 5px;
      right: 0px;
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      max-width: calc(59% - 24px);
      justify-content: flex-end;
      align-items: flex-start;
      z-index: 2;
    }

    .info-badge {
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 4px 8px;
      background: var(--secondary-background-color);
      border-radius: 12px;
      font-size: 12px;
      flex-shrink: 0;
      backdrop-filter: blur(8px);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .info-badge ha-icon {
      --mdc-icon-size: 14px;
    }

    .info-badge.light {
      background: color-mix(in srgb, var(--warning-color) 10%, var(--card-background-color));
      color: var(--warning-color);
    }

    .info-badge.switch {
      background: color-mix(in srgb, var(--info-color) 10%, var(--card-background-color));
      color: var(--info-color);
    }

    .info-badge.climate {
      background: color-mix(in srgb, var(--success-color) 10%, var(--card-background-color));
      color: var(--success-color);
    }

    .info-badge.media_player {
      background: color-mix(in srgb, var(--accent-color) 10%, var(--card-background-color));
      color: var(--accent-color);
    }

    .info-badge.cover {
      background: color-mix(in srgb, var(--purple-color) 10%, var(--card-background-color));
      color: var(--purple-color);
    }

    .info-badge.fan {
      background: color-mix(in srgb, var(--blue-color) 10%, var(--card-background-color));
      color: var(--blue-color);
    }

    .info-badge.motion {
      background: color-mix(in srgb, var(--orange-color) 10%, var(--card-background-color));
      color: var(--orange-color);
    }

    .info-badge.alerts {
      background: color-mix(in srgb, var(--error-color) 10%, var(--card-background-color));
      color: var(--error-color);
    }

    /* Sidebar info badges (smaller) */
    .sidebar .info-badge {
      padding: 2px 6px;
      font-size: 11px;
      border-radius: 12px;
    }

    .sidebar .info-badge ha-icon {
      --mdc-icon-size: 12px;
    }

    .sidebar .badge-count {
      min-width: 14px;
      text-align: center;
    }

    /* Clickable badges */
    .info-badge.clickable {
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .info-badge.clickable:hover {
      transform: scale(1.05);
      filter: brightness(1.1);
    }

    /* Color fallbacks for themes without custom colors */
    :host {
      --purple-color: #9c27b0;
      --blue-color: #2196f3;
    }

    /* Area View */
    .area-view {
      max-width: 1400px;
      margin: 0 auto;
    }

    .area-header {
      margin-bottom: 24px;
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .area-title {
      font-size: 28px;
      font-weight: 400;
      margin: 0 0 16px 0;
      flex: 1;
    }

    .unavailable-entities-icon {
      background: var(--warning-color);
      border: none;
      border-radius: 50%;
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.2s ease;
      position: relative;
      margin-bottom: 16px;
    }

    .unavailable-entities-icon:hover {
      background: var(--error-color);
      transform: scale(1.1);
    }

    .unavailable-entities-icon ha-icon {
      --mdc-icon-size: 18px;
      color: white;
    }

    .unavailable-count {
      position: absolute;
      top: -6px;
      right: -6px;
      background: var(--error-color);
      color: white;
      border-radius: 10px;
      padding: 2px 6px;
      font-size: 10px;
      font-weight: 600;
      min-width: 16px;
      text-align: center;
      line-height: 1.2;
    }

    /* Area Badges */
    .area-badges {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
      margin-bottom: 24px;
    }

    .area-badge {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 16px;
      background: var(--card-background-color);
      border: 1px solid var(--divider-color);
      border-radius: 24px;
      font-size: 14px;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .area-badge:hover {
      transform: translateY(-2px);
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }

    .area-badge ha-icon {
      --mdc-icon-size: 20px;
    }

    .area-badge.light-toggle {
      background: color-mix(in srgb, var(--warning-color) 10%, var(--card-background-color));
      border-color: var(--warning-color);
    }

    .area-badge.light-toggle ha-icon {
      color: var(--warning-color);
    }

    .area-badge.switch-toggle {
      background: color-mix(in srgb, var(--info-color) 10%, var(--card-background-color));
      border-color: var(--info-color);
    }

    .area-badge.switch-toggle ha-icon {
      color: var(--info-color);
    }

    .area-badge.wattage {
      background: color-mix(in srgb, var(--warning-color) 10%, var(--card-background-color));
      border-color: var(--warning-color);
    }

    .area-badge.wattage ha-icon {
      color: var(--warning-color);
    }

    .area-badge.energy {
      background: color-mix(in srgb, var(--info-color) 10%, var(--card-background-color));
      border-color: var(--info-color);
    }

    .area-badge.energy ha-icon {
      color: var(--info-color);
    }

    /* Entities Section */
    .entities-section {
      display: grid;
      gap: 16px;
    }

    .domain-group {
      background: var(--card-background-color);
      border-radius: 12px;
      padding: 16px;
    }

    .domain-header {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 12px;
      font-size: 16px;
      font-weight: 500;
    }

    .domain-header ha-icon {
      --mdc-icon-size: 20px;
      opacity: 0.8;
    }

    .entities-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 8px;
    }

    .entity-card-wrapper {
      min-height: 60px;
      position: relative;
    }

    .entity-card-wrapper.loading {
      background: var(--secondary-background-color);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* Loading skeleton */
    .skeleton {
      background: linear-gradient(90deg, 
        var(--secondary-background-color) 25%, 
        var(--primary-background-color) 50%, 
        var(--secondary-background-color) 75%);
      background-size: 200% 100%;
      animation: loading 1.5s infinite;
      border-radius: 8px;
    }

    @keyframes loading {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }

    /* Mobile Styles */
    @media (max-width: 768px) {
      .sidebar {
        position: fixed;
        right: 0;
        top: 0;
        width: 280px;
        height: 100%;
        transform: translateX(100%);
        z-index: 100;
        box-shadow: -4px 0 12px rgba(0, 0, 0, 0.15);
      }

      .sidebar.open {
        transform: translateX(0);
      }

      .mobile-nav-overlay {
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,0.5);
        z-index: 99;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.3s ease;
      }

      .mobile-nav-overlay.open {
        opacity: 1;
        pointer-events: auto;
      }

      /* Mobile FAB */
      .mobile-fab {
        position: fixed;
        bottom: 24px;
        right: 24px;
        width: 56px;
        height: 56px;
        border-radius: 50%;
        background: var(--primary-color);
        color: var(--text-primary-color);
        border: none;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 98;
        transition: all 0.3s ease;
      }

      .mobile-fab:hover {
        background: var(--primary-color);
        transform: scale(1.05);
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
      }

      .mobile-fab:active {
        transform: scale(0.95);
      }

      .mobile-fab.hidden {
        opacity: 0;
        pointer-events: none;
        transform: scale(0.8);
      }

      .mobile-fab ha-icon {
        --mdc-icon-size: 24px;
      }

      .global-header {
        padding: 12px;
      }

      .header-time {
        font-size: 20px;
      }



      .entities-grid {
        grid-template-columns: 1fr;
      }

      .global-header.mobile .header-expand-button[data-extra-count]::after {
        right: -8px;
      }
    }

    /* Favorites Section */
    .favorites-section {
      margin-bottom: 24px;
    }

    .favorites-header {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 12px;
      font-size: 18px;
      font-weight: 500;
    }

    .favorites-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 8px;
    }

    /* Toast Notification */
    .toast {
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: var(--primary-color);
      color: var(--text-primary-color);
      padding: 12px 24px;
      border-radius: 24px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      z-index: 1000;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .toast.show {
      opacity: 1;
    }

    /* Confirmation Dialog */
    .confirmation-dialog {
      position: fixed;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0,0,0,0.5);
      z-index: 1000;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s ease;
    }

    .confirmation-dialog.show {
      opacity: 1;
      pointer-events: auto;
    }

    .confirmation-content {
      background: var(--card-background-color);
      border-radius: 12px;
      padding: 24px;
      max-width: 400px;
      width: 90%;
      transform: scale(0.9);
      transition: transform 0.3s ease;
    }

    .confirmation-dialog.show .confirmation-content {
      transform: scale(1);
    }

    .confirmation-title {
      font-size: 20px;
      font-weight: 500;
      margin-bottom: 12px;
    }

    .confirmation-message {
      margin-bottom: 24px;
      opacity: 0.8;
    }

    .confirmation-actions {
      display: flex;
      gap: 12px;
      justify-content: flex-end;
    }

    .confirmation-button {
      padding: 8px 16px;
      border-radius: 8px;
      border: none;
      cursor: pointer;
      font-size: 14px;
      font-weight: 500;
      transition: all 0.2s ease;
    }

    .confirmation-button.cancel {
      background: var(--secondary-background-color);
      color: var(--primary-text-color);
    }

    .confirmation-button.confirm {
      background: var(--primary-color);
      color: var(--text-primary-color);
    }

    .confirmation-button:hover {
      transform: translateY(-1px);
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }

    /* Area Badges Styling */
    .area-badges {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      padding: 0px; /* 16px;*/
    }

    .area-badge {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 12px;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 500;
      transition: all 0.2s ease;
      border: none;
      cursor: default;
      background: var(--card-background-color);
      color: var(--primary-text-color);
      border: 1px solid var(--divider-color);
    }

    .area-badge ha-icon {
      --mdc-icon-size: 18px;
    }

    /* Domain-specific badge colors */
    .area-badge.light {
      background: color-mix(in srgb, var(--amber-color) 10%, var(--card-background-color));
      color: var(--amber-color);
      border-color: color-mix(in srgb, var(--amber-color) 20%, transparent);
    }

    .area-badge.switch {
      background: color-mix(in srgb, var(--blue-color) 10%, var(--card-background-color));
      color: var(--blue-color);
      border-color: color-mix(in srgb, var(--blue-color) 20%, transparent);
    }

    .area-badge.climate {
      background: color-mix(in srgb, var(--orange-color) 10%, var(--card-background-color));
      color: var(--orange-color);
      border-color: color-mix(in srgb, var(--orange-color) 20%, transparent);
    }

    .area-badge.motion.active {
      background: color-mix(in srgb, var(--red-color) 10%, var(--card-background-color));
      color: var(--red-color);
      border-color: color-mix(in srgb, var(--red-color) 20%, transparent);
    }

    .area-badge.cover {
      background: color-mix(in srgb, var(--purple-color) 10%, var(--card-background-color));
      color: var(--purple-color);
      border-color: color-mix(in srgb, var(--purple-color) 20%, transparent);
    }

    .area-badge.media_player {
      background: color-mix(in srgb, var(--green-color) 10%, var(--card-background-color));
      color: var(--green-color);
      border-color: color-mix(in srgb, var(--green-color) 20%, transparent);
    }

    .area-badge.temperature {
      background: color-mix(in srgb, var(--cyan-color) 10%, var(--card-background-color));
      color: var(--cyan-color);
      border-color: color-mix(in srgb, var(--cyan-color) 20%, transparent);
    }

    .area-badge.humidity {
      background: color-mix(in srgb, var(--blue-color) 10%, var(--card-background-color));
      color: var(--blue-color);
      border-color: color-mix(in srgb, var(--blue-color) 20%, transparent);
    }

    .area-badge.wattage {
      background: color-mix(in srgb, var(--yellow-color) 10%, var(--card-background-color));
      color: var(--yellow-color);
      border-color: color-mix(in srgb, var(--yellow-color) 20%, transparent);
    }

    .area-badge.energy {
      background: color-mix(in srgb, var(--indigo-color) 10%, var(--card-background-color));
      color: var(--indigo-color);
      border-color: color-mix(in srgb, var(--indigo-color) 20%, transparent);
    }

    /* Toggle button badges */
    .area-badge.light-toggle,
    .area-badge.switch-toggle {
      cursor: pointer;
      background: var(--primary-color);
      color: var(--text-primary-color);
      border-color: var(--primary-color);
    }

    .area-badge.light-toggle:hover,
    .area-badge.switch-toggle:hover {
      background: color-mix(in srgb, var(--primary-color) 90%, black);
      transform: translateY(-1px);
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
      .area-badges {
        padding: 12px;
        gap: 6px;
      }
      
      .area-badge {
        padding: 6px 10px;
        font-size: 13px;
      }
      
      .area-badge ha-icon {
        --mdc-icon-size: 16px;
      }
    }

    /* Header Expanded Content Styling */
    .global-header.expanded {
      border-bottom: 2px solid var(--primary-color);
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }

    .header-expanded-content {
      background: var(--card-background-color);
      padding: 16px;
      border-top: 1px solid var(--divider-color);
      animation: slideDown 0.3s ease-out;
    }

    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .header-expanded-content .header-favorites {
      max-width: 100%;
    }

    /* Favorites Section Styling */
    .favorites-section {
      width: 100%;
    }

    .favorites-header {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 16px;
      padding-bottom: 8px;
      border-bottom: 1px solid var(--divider-color);
    }

    .favorites-header ha-icon {
      --mdc-icon-size: 20px;
      color: var(--primary-color);
    }

    .favorites-header h3 {
      margin: 0;
      font-size: 16px;
      font-weight: 500;
      color: var(--primary-text-color);
    }

    .favorites-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 12px;
      width: 100%;
    }

    .favorite-tile-wrapper {
      width: 100%;
      min-height: 60px;
    }

    .favorite-tile {
      width: 100% !important;
      height: auto !important;
    }

    .no-favorites {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 24px;
      color: var(--secondary-text-color);
      background: var(--secondary-background-color);
      border-radius: 8px;
      border: 1px dashed var(--divider-color);
    }

    .no-favorites ha-icon {
      --mdc-icon-size: 32px;
      margin-bottom: 8px;
      opacity: 0.6;
    }

    .no-favorites p {
      margin: 0;
      font-size: 14px;
    }

    /* Header Expand Button Enhanced Styling */
    .header-expand-button {
      position: absolute;
      bottom: -20px;
      left: 50%;
      transform: translateX(-50%);
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 2px solid var(--primary-color);
      background: var(--card-background-color);
      color: var(--primary-color);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
      z-index: 10;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }

    .header-expand-button:hover {
      background: var(--primary-color);
      color: var(--text-primary-color);
      transform: translateX(-50%) translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    }

    .header-expand-button ha-icon {
      --mdc-icon-size: 20px;
      transition: transform 0.3s ease;
    }

    .global-header.expanded .header-expand-button {
      bottom: -20px;
    }

    /* Mobile specific adjustments for expanded header */
    @media (max-width: 768px) {
      .header-expanded-content {
        padding: 12px;
      }
      
      .favorites-grid {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        gap: 8px;
      }
      
      .header-expand-button {
        width: 36px;
        height: 36px;
        bottom: -18px;
      }
      
      .header-expand-button ha-icon {
        --mdc-icon-size: 18px;
      }
    }
  `,i([ge({attribute:!1})],Ge.prototype,"hass",void 0),i([ge({attribute:!1})],Ge.prototype,"config",void 0),i([ue()],Ge.prototype,"_selectedArea",void 0),i([ue()],Ge.prototype,"_selectedView",void 0),i([ue()],Ge.prototype,"_isMobile",void 0),i([ue()],Ge.prototype,"_headerExpanded",void 0),i([ue()],Ge.prototype,"_headerCompact",void 0),i([ue()],Ge.prototype,"_currentTime",void 0),i([ue()],Ge.prototype,"_currentDate",void 0),i([ue()],Ge.prototype,"_mobileNavOpen",void 0),i([ue()],Ge.prototype,"_hasRelevantStateChanges",void 0),Ge=i([le("dwains-layout-card")],Ge);var qe="M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z",Ye="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z",Ze="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z";const Xe=(e,t)=>{const i=e._$AN;if(void 0===i)return!1;for(const e of i)e._$AO?.(t,!1),Xe(e,t);return!0},Ke=e=>{let t,i;do{if(void 0===(t=e._$AM))break;i=t._$AN,i.delete(e),e=t}while(0===i?.size)},Je=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(void 0===i)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),tt(t)}};function Qe(e){void 0!==this._$AN?(Ke(this),this._$AM=e,Je(this)):this._$AM=e}function et(e,t=!1,i=0){const a=this._$AH,o=this._$AN;if(void 0!==o&&0!==o.size)if(t)if(Array.isArray(a))for(let e=i;e<a.length;e++)Xe(a[e],!1),Ke(a[e]);else null!=a&&(Xe(a,!1),Ke(a));else Xe(this,e)}const tt=e=>{e.type==fe&&(e._$AP??=et,e._$AQ??=Qe)};class it extends ve{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),Je(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(Xe(this,e),Ke(this))}setValue(e){if((e=>void 0===e.strings)(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}class at{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}}class ot{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(e=>this.Z=e)}resume(){this.Z?.(),this.Y=this.Z=void 0}}const st=e=>!(e=>null===e||"object"!=typeof e&&"function"!=typeof e)(e)&&"function"==typeof e.then,rt=1073741823;const nt=_e(class extends it{constructor(){super(...arguments),this._$Cwt=rt,this._$Cbt=[],this._$CK=new at(this),this._$CX=new ot}render(...e){return e.find(e=>!st(e))??B}update(e,t){const i=this._$Cbt;let a=i.length;this._$Cbt=t;const o=this._$CK,s=this._$CX;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$Cwt);e++){const r=t[e];if(!st(r))return this._$Cwt=e,r;e<a&&r===i[e]||(this._$Cwt=rt,a=0,Promise.resolve(r).then(async e=>{for(;s.get();)await s.get();const t=o.deref();if(void 0!==t){const i=t._$Cbt.indexOf(r);i>-1&&i<t._$Cwt&&(t._$Cwt=i,t.setValue(e))}}))}return B}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}});let dt=class extends de{constructor(){super(...arguments),this._groupedEntities={},this._loading=!0,this._entityCards=new Map}async showDialog(e){this._params=e,this._loading=!0,await this._loadEntities()}closeDialog(){this._params=void 0,this._groupedEntities={},this._entityCards.clear(),this._updateInterval&&(clearInterval(this._updateInterval),this._updateInterval=void 0),je(this,"dialog-closed",{dialog:this.localName})}updated(e){super.updated(e),e.has("hass")&&this.hass&&this._params&&!this._loading&&this._updateEntityCards()}async _loadEntities(){if(!this._params||!this.hass)return;const{domain:e,areaId:t,config:i,filterByUnitOfMeasurement:a,deviceClass:o}=this._params,s={},r=i.areas||[],n=new Map(r.map(e=>[e.area_id,e])),d=Object.values(this.hass.states),c=[];d.forEach(s=>{const r=s.entity_id,d=this.hass.entities?.[r];if(d?.hidden_by)return;const l=r.split(".")[0];if(l!==e)return;if(!s||"unavailable"===s.state)return;const h=i.entities?.find(e=>e.entity_id===r),p=h&&h.device_id?i.devices?.find(e=>e.device_id===h.device_id):null,g=h?.area_id||p?.area_id||this.hass?.entities?.[r]?.area_id;if(!g)return;if(t&&g!==t)return;if(!g||!n.has(g))return;const u=l;if(!(i.areas_options?.[g]?.groups_options?.[u]?.hidden||[]).includes(r)){if(a){if(s.attributes?.unit_of_measurement!==a)return;if("unavailable"===s.state)return}else{let t=!1;if("climate"===e)t="off"!==s.state;else if("binary_sensor"===e){if(o){const e=s.attributes?.device_class;if(e!==o)return}t="on"===s.state}else t="light"===e||"switch"===e?"on"===s.state:"cover"===e?"open"===s.state||"opening"===s.state:"lock"===e?"unlocked"===s.state:"person"===e?"unavailable"!==s.state&&"unknown"!==s.state:"media_player"===e?["playing","paused"].includes(s.state):"fan"===e?"on"===s.state:"vacuum"===e?["cleaning","returning","docked"].includes(s.state):"alarm_control_panel"!==e||s.state.includes("armed");if(!t)return}c.push({entity_id:r,area_id:g,hidden:!1})}}),c.forEach(t=>{const i=this.hass.states[t.entity_id];if("person"===e){const e=i?.state||"unknown",a="home"===e?"home":"away",o="home"===e?"Home":"away"===e||"not_home"===e?"Away":`${e.charAt(0).toUpperCase()}${e.slice(1)}`;s[a]||(s[a]={areaName:o,entities:[]}),s[a].entities.push(t)}else{const e=t.area_id,i=n.get(e);if(!i)return;s[e]||(s[e]={areaName:i.name,entities:[]}),s[e].entities.push(t)}}),this._groupedEntities=s,this._loading=!1,this._updateInterval||(this._updateInterval=window.setInterval(()=>{this._checkForEntityChanges()},1e3))}_checkForEntityChanges(){if(!this._params||!this.hass||this._loading)return;const{domain:e,filterByUnitOfMeasurement:t}=this._params;let i=!1;Object.entries(this._groupedEntities).forEach(([a,o])=>{o.entities.forEach(a=>{const o=this.hass.states[a.entity_id];if(!o)return void(i=!0);this._shouldEntityBeVisible(o,e,t)!==this._entityCards.has(a.entity_id)&&(i=!0)})}),i&&this._loadEntities()}_shouldEntityBeVisible(e,t,i){return"unavailable"!==e.state&&(i?e.attributes?.unit_of_measurement===i:"climate"===t?"off"!==e.state:"binary_sensor"===t||"light"===t||"switch"===t?"on"===e.state:"cover"===t?"open"===e.state:"lock"===t?"unlocked"===e.state:"person"===t?"unavailable"!==e.state&&"unknown"!==e.state:"media_player"!==t||"playing"===e.state)}_updateEntityCards(){this._entityCards.forEach((e,t)=>{e&&"hass"in e&&(e.hass=this.hass)})}render(){if(!this._params)return G;const{domain:e,filterByUnitOfMeasurement:t,deviceClass:i,customTitle:a}=this._params;let o=a||this._getLocalizedDomainTitle(e);if("W"===t)o="Power Sensors";else if(i){o={motion:"Motion Sensors",door:"Door Sensors",window:"Window Sensors",smoke:"Smoke Detectors",gas:"Gas Detectors",moisture:"Moisture Sensors",occupancy:"Occupancy Sensors",opening:"Opening Sensors",presence:"Presence Sensors",safety:"Safety Sensors",tamper:"Tamper Sensors",vibration:"Vibration Sensors"}[i]||`${i.charAt(0).toUpperCase()+i.slice(1)} Sensors`}return F`
      <ha-dialog
        open
        @closed=${this.closeDialog}
        .heading=${o}
        flexContent
        hideActions
      >
        <ha-dialog-header slot="heading">
          <ha-icon-button
            slot="navigationIcon"
            dialogAction="cancel"
            .label=${this.hass.localize("ui.common.close")}
            .path=${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}
          ></ha-icon-button>
          <span slot="title">${o}</span>
        </ha-dialog-header>
        
        <div class="content">
          ${this._loading?F`<div class="loading">Loading...</div>`:this._renderContent()}
        </div>
      </ha-dialog>
    `}_renderContent(){if(this._params?.customEntities)return this._renderCustomEntities();return 0===Object.values(this._groupedEntities).reduce((e,t)=>e+t.entities.length,0)?F`
        <div class="empty-state">
          <ha-icon icon="mdi:information-outline"></ha-icon>
          <div class="empty-state-text">
            No active entities found
          </div>
        </div>
      `:F`
      ${Ae(Object.entries(this._groupedEntities),([e])=>e,([e,t])=>this._renderAreaSection(e,t))}
    `}_renderCustomEntities(){const{customEntities:e,customDescription:t}=this._params;return e&&0!==e.length?F`
      ${t?F`
        <div class="custom-description">
          <ha-icon icon="mdi:information-outline"></ha-icon>
          <p>${t}</p>
        </div>
      `:G}
      
      <div class="entity-section">
        <div class="entities-grid">
          ${Ae(e,e=>e,e=>this._renderEntityCard({entity_id:e,hidden:!1}))}
        </div>
      </div>
    `:F`
        <div class="empty-state">
          <ha-icon icon="mdi:check-circle-outline"></ha-icon>
          <div class="empty-state-text">
            No problematic entities found
          </div>
        </div>
      `}_renderAreaSection(e,t){let i="";if(this._params?.config?.areas){const t=this._params.config.areas.find(t=>t.area_id===e);t?.icon&&(i=t.icon)}return"person"===this._params?.domain&&(i="home"===e?"mdi:home-account":"away"===e?"mdi:account-arrow-right":"mdi:account-question"),F`
      <div class="area-section">
        <div class="area-header">
          ${i?F`
            <div class="area-icon">
              <ha-icon icon="${i}"></ha-icon>
            </div>
          `:G}
          <div class="area-name">${t.areaName}</div>
          <div class="entity-count">${t.entities.length}</div>
        </div>
        <div class="entities-grid">
          ${Ae(t.entities,e=>e.entity_id,e=>this._renderEntityCard(e))}
        </div>
      </div>
    `}_renderEntityCard(e){return this.hass.states[e.entity_id]?F`
      <div class="entity-card-wrapper">
        ${nt(this._createEntityCard(e),F`<div>Loading...</div>`)}
      </div>
    `:G}async _createEntityCard(e){const t=e.entity_id.split(".")[0];let i="tile";"climate"===t?i="thermostat":"camera"===t?i="picture-entity":"media_player"===t&&(i="media-control");const a={type:i,entity:e.entity_id,..."camera"===t?{camera_view:"live"}:{}},o=`hui-${i}-card`;await customElements.whenDefined(o);const s=document.createElement(o);return s.hass=this.hass,s.setConfig(a),this._entityCards.set(e.entity_id,s),F`${s}`}_getLocalizedDomainTitle(e){return{light:"Lights",switch:"Switches",climate:"Climate",binary_sensor:"Sensors",sensor:"Sensors",person:"People",camera:"Cameras",media_player:"Media Players",cover:"Covers",lock:"Locks",fan:"Fans",vacuum:"Vacuums",alarm_control_panel:"Alarm Systems"}[e]||e.charAt(0).toUpperCase()+e.slice(1)}};dt.styles=d`
    :host {
      --mdc-dialog-min-width: 90vw;
      --mdc-dialog-max-width: 1200px;
      --mdc-dialog-max-height: 90vh;
      --mdc-dialog-z-index: 10;
      --dialog-backdrop-opacity: 0.4;
    }

    ha-dialog {
      --mdc-dialog-heading-ink-color: var(--primary-text-color);
      --mdc-dialog-content-ink-color: var(--primary-text-color);
      --dialog-content-padding: 0;
    }

    ha-dialog-header {
      --mdc-typography-headline6-font-size: 20px;
      --mdc-typography-headline6-font-weight: 500;
    }

    .content {
      padding: 0 !important;
      overflow: auto;
      max-height: calc(90vh - 120px);
    }

    .area-section {
      margin-bottom: 24px;
      background: var(--card-background-color);
      border-radius: 12px;
      overflow: hidden;
    }

    .area-header {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 16px;
      background: var(--secondary-background-color);
      border-bottom: 1px solid var(--divider-color);
    }

    .area-header:has(.area-icon) {
      gap: 12px;
    }

    .area-header:not(:has(.area-icon)) {
      gap: 0;
    }

    .area-icon {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: var(--primary-color);
      color: var(--text-primary-color);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .area-icon ha-icon {
      --mdc-icon-size: 24px;
    }

    .area-name {
      font-size: 18px;
      font-weight: 500;
      flex: 1;
    }

    .entity-count {
      background: var(--primary-color);
      color: var(--text-primary-color);
      padding: 4px 12px;
      border-radius: 16px;
      font-size: 14px;
      font-weight: 500;
    }

    .entities-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 8px;
      padding: 16px;
    }

    .entity-card-wrapper {
      min-height: 60px;
    }

    .loading {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 200px;
      font-size: 16px;
      opacity: 0.6;
    }

    .empty-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 48px 24px;
      text-align: center;
    }

    .empty-state ha-icon {
      --mdc-icon-size: 64px;
      opacity: 0.3;
      margin-bottom: 16px;
    }

    .empty-state-text {
      font-size: 16px;
      opacity: 0.6;
    }

    .custom-description {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      background: var(--warning-color);
      color: white;
      padding: 16px;
      border-radius: 8px;
      margin-bottom: 24px;
    }

    .custom-description ha-icon {
      --mdc-icon-size: 20px;
      margin-top: 2px;
      flex-shrink: 0;
    }

    .custom-description p {
      margin: 0;
      line-height: 1.5;
      font-size: 14px;
    }

    /* Responsive design */
    @media (max-width: 600px) {
      :host {
        --mdc-dialog-min-width: 100vw;
        --mdc-dialog-max-width: 100vw;
        --mdc-dialog-min-height: 100vh;
        --mdc-dialog-max-height: 100vh;
      }

      ha-dialog {
        margin: 0 !important;
        border-radius: 0 !important;
        --mdc-dialog-container-elevation: 0;
        --ha-dialog-border-radius: 0px;
      }

      ha-dialog .mdc-dialog__surface {
        border-radius: 0 !important;
      }

      .content {
        max-height: calc(100vh - 60px);
        padding: 0 !important;
      }

      .area-section {
        margin-bottom: 16px;
      }

      .entities-grid {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 900px) {
      .entities-grid {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      }
    }
  `,i([ge({attribute:!1})],dt.prototype,"hass",void 0),i([ue()],dt.prototype,"_params",void 0),i([ue()],dt.prototype,"_groupedEntities",void 0),i([ue()],dt.prototype,"_loading",void 0),dt=i([le("dwains-domain-entities-dialog")],dt);var ct=Object.freeze({__proto__:null,get DwainsDomainEntitiesDialog(){return dt}});let lt=class extends de{constructor(){super(...arguments),this._loading=!0,this._showEntityPicker=!1,this._entitySearchFilter="",this._showWeatherPicker=!1,this._weatherSearchFilter=""}set hass(e){const t=this._hass;this._hass=e,e&&!t&&this._fetchData()}get hass(){return this._hass}async setConfig(e){this._config={type:e?.type||"custom:dwains",areas_display:e?.areas_display||{},areas_options:e?.areas_options||{},favorites:e?.favorites||[],settings:e?.settings||{},areas:[],devices:[],entities:[],floors:[]},this.hass?await this._fetchData():this._loading=!1}async connectedCallback(){super.connectedCallback(),this.hass&&await this._fetchData()}async _fetchData(){if(this.hass)try{const[e,t,i]=await Promise.all([this.hass.callWS({type:"config/area_registry/list"}),this.hass.callWS({type:"config/device_registry/list"}),this.hass.callWS({type:"config/entity_registry/list"})]);this.hass.areas=e.reduce((e,t)=>(e[t.area_id]=t,e),{}),this.hass.entities=i.reduce((e,t)=>(e[t.entity_id]=t,e),{}),this._config={...this._config,areas:e.map(e=>({area_id:e.area_id,name:e.name,picture:e.picture,icon:e.icon})),devices:t.map(e=>({device_id:e.id,name:e.name_by_user||e.name,area_id:e.area_id})),entities:i.map(e=>({entity_id:e.entity_id,area_id:e.area_id,device_id:e.device_id}))},this._loading=!1,this.requestUpdate()}catch(e){console.error("Failed to fetch data:",e),this._loading=!1}}render(){return this.hass&&this._config?this._loading?F`
        <div class="loading">
          <ha-circular-progress indeterminate></ha-circular-progress>
        </div>
      `:this._area?this._renderAreaEditor():this._renderAreasEditor():G}_renderAreasEditor(){if(!this.hass||!this._config)return G;const e=Object.values(this.hass.areas||{}),t=new Set(this._config.areas_display?.hidden||[]),i=this._config.areas_display?.order||[],a=[...e].sort((e,t)=>{const a=i.indexOf(e.area_id),o=i.indexOf(t.area_id);return-1!==a&&-1!==o?a-o:-1!==a?-1:-1!==o?1:e.name.localeCompare(t.name)});return F`
      <div class="editor-container">
        <!-- Sponsoring Section -->
        <div class="sponsoring-section">
          <div class="sponsoring-header">
            <ha-icon icon="mdi:heart"></ha-icon>
            <h3>Support Dwains Dashboard</h3>
          </div>
          <div class="sponsoring-content">
            <p>
              I built Dwains Dashboard as a free, open-source project in my spare time alongside my job. 
              My main daily venture is <strong>SmartHomeShop.io</strong>, where I develop hardware solutions for Home Assistant and ESPHome. 
            </p>
            <div class="sponsoring-buttons">
              <div class="donation-section">
                <p><strong>Please consider a donation 👍</strong></p>
                <div class="donation-links">
                  <a href="https://github.com/sponsors/dwainscheeren" target="_blank" rel="noopener noreferrer">
                    <mwc-button outlined>
                      <ha-icon icon="mdi:github" slot="icon"></ha-icon>
                      GitHub Sponsor
                    </mwc-button>
                  </a>
                  <a href="https://www.paypal.me/dwainscheeren" target="_blank" rel="noopener noreferrer">
                    <mwc-button outlined>
                      <ha-icon icon="mdi:paypal" slot="icon"></ha-icon>
                      PayPal
                    </mwc-button>
                  </a>
                  <a href="https://www.buymeacoffee.com/FAkYvrx" target="_blank" rel="noopener noreferrer">
                    <mwc-button outlined>
                      <ha-icon icon="mdi:coffee" slot="icon"></ha-icon>
                      Buy me a coffee
                    </mwc-button>
                  </a>
                </div>
              </div>
              <div class="shop-section">
                <p>
                  <strong>You can also help me by buying or promoting products from
                  <a href="https://smarthomeshop.io/en" target="_blank" rel="noopener noreferrer" class="shop-link">
                    SmartHomeShop.io
                  </a></strong>
                </p>
                <a href="https://smarthomeshop.io/en" target="_blank" rel="noopener noreferrer">
                  <mwc-button raised>
                    <ha-icon icon="mdi:shopping" slot="icon"></ha-icon>
                    Visit SmartHomeShop.io
                  </mwc-button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <ha-expansion-panel expanded outlined>
          <div slot="header">
            <ha-icon icon="mdi:star"></ha-icon>
            Favorites
          </div>
          <p class="description">
            Choose entities that you always want to see on the home page.
          </p>
          <div class="favorites-section">
            <div class="entity-picker">
              <div class="entity-picker-header">
                <h4>Selected Entities</h4>
                <mwc-button @click=${this._addFavoriteEntity} outlined>
                  <svg viewBox="0 0 24 24" width="20" height="20" style="margin-right: 8px;">
                    <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                  </svg>
                  Add Entity
                </mwc-button>
              </div>
              
              ${this._renderSelectedEntities()}
              
              ${this._showEntityPicker?this._renderEntityPicker():""}
            </div>
          </div>
        </ha-expansion-panel>

        <ha-expansion-panel expanded outlined>
          <div slot="header">
            <ha-icon icon="mdi:clock-outline"></ha-icon>
            Time & Date Settings
          </div>
          <p class="description">
            Configure the display of time and date in the header.
          </p>
          <div class="time-section">
            <div class="time-toggle">
              <ha-formfield label="Show time and date in header">
                <ha-switch
                  .checked=${!1!==this._config?.settings?.show_time}
                  @change=${this._toggleTimeDisplay}
                ></ha-switch>
              </ha-formfield>
            </div>
          </div>
        </ha-expansion-panel>

        <ha-expansion-panel expanded outlined>
          <div slot="header">
            <ha-icon icon="mdi:weather-cloudy"></ha-icon>
            Weather Settings
          </div>
          <p class="description">
            Choose which weather entity to display in the header, or disable weather display entirely.
          </p>
          <div class="weather-section">
            <div class="weather-toggle">
              <ha-formfield label="Show weather in header">
                <ha-switch
                  .checked=${!1!==this._config?.settings?.show_weather}
                  @change=${this._toggleWeatherDisplay}
                ></ha-switch>
              </ha-formfield>
            </div>
            
            ${!1!==this._config?.settings?.show_weather?F`
              <div class="weather-picker">
                <div class="weather-picker-header">
                  <h4>Selected Weather Entity</h4>
                  <mwc-button @click=${this._addWeatherEntity} outlined>
                    <svg viewBox="0 0 24 24" width="20" height="20" style="margin-right: 8px;">
                      <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
                    </svg>
                    Select Weather
                  </mwc-button>
                </div>
                
                ${this._renderSelectedWeatherEntity()}
                
                ${this._showWeatherPicker?this._renderWeatherPicker():""}
              </div>
            `:""}
          </div>
        </ha-expansion-panel>

        <ha-expansion-panel expanded outlined>
          <div slot="header">
            <ha-icon icon="mdi:eye-off"></ha-icon>
            Entity Display Settings
          </div>
          <p class="description">
            Configure how entities are displayed and which problematic entities to handle.
          </p>
          <div class="entity-display-section">
            <div class="hide-unavailable-toggle">
              <ha-formfield label="Hide unavailable/unknown entities">
                <ha-switch
                  .checked=${!0===this._config?.settings?.hide_unavailable_entities}
                  @change=${this._toggleHideUnavailableEntities}
                ></ha-switch>
              </ha-formfield>
              <p class="toggle-description">
                When enabled, entities with 'unavailable' or 'unknown' states will be hidden from the interface. 
                An info icon (ℹ️) will appear next to area names to show hidden entities in a modal.
              </p>
            </div>
          </div>
        </ha-expansion-panel>

        <ha-expansion-panel expanded outlined>
          <div slot="header">
            <ha-icon icon="mdi:account-multiple"></ha-icon>
            Configure Persons
          </div>
          <p class="description">
            Configure which persons are visible in the person cards and dashboard.
          </p>
          <div class="persons-section">
            ${this._renderPersonsConfiguration()}
          </div>
        </ha-expansion-panel>

        <ha-expansion-panel expanded outlined>
          <div slot="header">
            <ha-icon icon="mdi:floor-plan"></ha-icon>
            Configure Areas
          </div>
          <p class="description">
                          Configure which areas are visible and in what order they are shown.
          </p>
          <div class="sortable-container ${this._draggedAreaId?"dragging":""}">
            ${Ae(a,e=>e.area_id,(e,i)=>{const a=t.has(e.area_id);this._config.areas_options?.[e.area_id];const o=this._draggedAreaId===e.area_id,s=this._dragOverIndex===i&&this._draggedAreaId&&this._draggedAreaId!==e.area_id;return F`
                  <div
                    class="sortable-item ${a?"hidden":""} ${o?"dragging":""} ${s?"drag-over":""}"
                    data-area-id="${e.area_id}"
                    data-index="${i}"
                    draggable="true"
                    @dragstart=${t=>this._handleAreaDragStart(t,e.area_id)}
                    @dragend=${this._handleAreaDragEnd}
                    @dragover=${e=>this._handleAreaDragOver(e,i)}
                    @dragleave=${this._handleAreaDragLeave}
                    @drop=${e=>this._handleAreaDrop(e,i)}
                  >
                    <div class="area-item">
                      <div class="handle">
                        <ha-svg-icon .path=${qe}></ha-svg-icon>
                      </div>
                      ${e.icon?F`
                        <ha-icon 
                          .icon=${e.icon}
                          class="area-icon"
                        ></ha-icon>
                      `:G}
                      <span class="area-name clickable" @click=${()=>this._editArea(e.area_id)}>
                        ${e.name}
                        <ha-icon icon="mdi:chevron-right" class="chevron"></ha-icon>
                      </span>
                      <div class="area-actions">
                        <ha-icon-button
                          .label=${a?"Show":"Hide"}
                          .path=${a?Ye:Ze}
                          @click=${()=>this._toggleAreaVisibility(e.area_id)}
                        ></ha-icon-button>
                        
                      </div>
                    </div>
                  </div>
                `})}
          </div>
        </ha-expansion-panel>
      </div>
    `}_renderAreaEditor(){if(!this.hass||!this._config||!this._area)return G;const e=this.hass.areas[this._area];if(!e)return G;const t=[],i=new Set;if(this._config.entities){const e=new Set;this._config.devices&&this._config.devices.forEach(t=>{t.area_id===this._area&&e.add(t.device_id)}),this._config.entities.forEach(a=>{(a.area_id===this._area||a.device_id&&e.has(a.device_id))&&(t.push({entity_id:a.entity_id}),i.add(a.entity_id))})}this.hass?.states&&Object.values(this.hass.states).forEach(e=>{if(!i.has(e.entity_id)){const i=this.hass?.entities?.[e.entity_id];i?.area_id===this._area&&t.push({entity_id:e.entity_id})}});const a=this._getAreaGroupedEntitiesWithoutFiltering(t,this.hass);return F`
      <div class="editor-container">
        <div class="toolbar">
          <mwc-button @click=${()=>{this._area=void 0}}>
            <svg viewBox="0 0 24 24" width="20" height="20" style="margin-right: 8px;">
              <path fill="currentColor" d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
            </svg>
            Back
          </mwc-button>
          <h2>${e.name}</h2>
        </div>
        
        <div class="area-help">
          <ha-svg-icon .path=${"M10 13V5C10 3.34 8.66 2 7 2S4 3.34 4 5V13C1.79 14.66 1.34 17.79 3 20S7.79 22.66 10 21 12.66 16.21 11 14C10.72 13.62 10.38 13.28 10 13M7 4C7.55 4 8 4.45 8 5V8H6V5C6 4.45 6.45 4 7 4M18 7C18 7 14 11.34 14 14.07C14 19.31 22 19.31 22 14.07C22 11.34 18 7 18 7Z"} class="area-help-icon"></ha-svg-icon>
          <div class="area-help-text">
            <p>
              To show temperature and humidity sensors in the overview, link a sensor to this room in Home Assistant via
              <button class="link" @click=${this._editAreaRegistry}>edit the room</button>.
            </p>
            <p>
              The wattage badge automatically sums all power sensors (unit 'W') in this room that are visible (not hidden in the UI).
            </p>
          </div>
        </div>

        ${Pe.map(e=>{const t=a[e]||[],i=this._config.areas_options?.[this._area]?.groups_options?.[e],o=new Set(i?.hidden||[]),s=i?.order||[],r=[...t].sort((e,t)=>{const i=s.indexOf(e),a=s.indexOf(t);if(-1!==i&&-1!==a)return i-a;if(-1!==i)return-1;if(-1!==a)return 1;const o=this.hass.states[e]?.attributes?.friendly_name||e,r=this.hass.states[t]?.attributes?.friendly_name||t;return o.localeCompare(r)});return 0===t.length?G:F`
            <ha-expansion-panel expanded outlined>
              <div slot="header">
                <ha-icon icon=${Ie[e]}></ha-icon>
                ${this._getGroupTitle(e)}
              </div>
              <div class="sortable-container ${this._draggedEntityGroup===e?"dragging":""}">
                ${Ae(r,e=>e,(t,i)=>{const a=this.hass.states[t],s=o.has(t),r=this._draggedEntityId===t&&this._draggedEntityGroup===e,n=this._dragOverEntityIndex===i&&this._draggedEntityGroup===e&&this._draggedEntityId&&this._draggedEntityId!==t;return F`
                      <div
                        class="sortable-item ${s?"hidden":""} ${r?"dragging":""} ${n?"drag-over":""}"
                        data-entity-id="${t}"
                        data-index="${i}"
                        draggable="true"
                        @dragstart=${i=>this._handleEntityDragStart(i,t,e)}
                        @dragend=${this._handleEntityDragEnd}
                        @dragover=${t=>this._handleEntityDragOver(t,e,i)}
                        @dragleave=${this._handleEntityDragLeave}
                        @drop=${t=>this._handleEntityDrop(t,e,i)}
                      >
                        <div class="entity-item">
                          <div class="handle">
                            <ha-svg-icon .path=${qe}></ha-svg-icon>
                          </div>
                          <ha-state-icon
                            .stateObj=${a}
                            class="entity-icon"
                          ></ha-state-icon>
                          <span class="entity-name">
                            ${a?.attributes?.friendly_name||t}
                          </span>
                          <ha-icon-button
                            .label=${s?"Show":"Hide"}
                            .path=${s?Ye:Ze}
                            @click=${()=>this._toggleEntityVisibility(t,e)}
                          ></ha-icon-button>
                        </div>
                      </div>
                    `})}
              </div>
            </ha-expansion-panel>
          `})}
      </div>
    `}_getGroupTitle(e){return{lights:"Lighting",climate:"Climate",media_players:"Media Players",covers:"Covers",security:"Security",motion:"Motion",actions:"Actions",others:"Sensors"}[e]||e}_getAreaGroupedEntitiesWithoutFiltering(e,t){const i={lights:[],climate:[],covers:[],media_players:[],security:[],motion:[],actions:[],others:[]};return e.forEach(e=>{const a=e.entity_id,o=a.split(".")[0],s=t.states[a];if(!s)return;const r=t.entities?.[a];r?.hidden_by||"diagnostic"===r?.entity_category||"config"===r?.entity_category||("light"===o?i.lights.push(a):"climate"===o||"humidifier"===o||"water_heater"===o||"fan"===o?i.climate.push(a):"cover"===o||"binary_sensor"===o&&s?.attributes?.device_class&&["door","garage_door","window"].includes(s.attributes.device_class)?i.covers.push(a):"media_player"===o?i.media_players.push(a):"alarm_control_panel"===o||"lock"===o||"camera"===o?i.security.push(a):"binary_sensor"===o&&s?.attributes?.device_class&&["motion","occupancy","presence"].includes(s.attributes.device_class)?i.motion.push(a):"script"===o||"scene"===o||"automation"===o?i.actions.push(a):"switch"!==o&&"button"!==o&&"input_boolean"!==o&&"vacuum"!==o&&"lawn_mower"!==o&&"valve"!==o&&"select"!==o&&"number"!==o&&"input_select"!==o&&"input_number"!==o&&"counter"!==o&&"timer"!==o&&"sensor"!==o||i.others.push(a))}),i}_handleAreaDragStart(e,t){this._draggedAreaId=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/plain",t))}_handleAreaDragEnd(){this._draggedAreaId=void 0,this._dragOverIndex=void 0}_handleAreaDragOver(e,t){e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="move"),this._dragOverIndex=t}_handleAreaDragLeave(e){e.target.classList.contains("sortable-item")&&(this._dragOverIndex=void 0)}_handleAreaDrop(e,t){if(e.preventDefault(),!this._draggedAreaId||!this._config)return;const i=Object.values(this.hass.areas||{}),a=this._config.areas_display?.order||[],o=[...i].sort((e,t)=>{const i=a.indexOf(e.area_id),o=a.indexOf(t.area_id);return-1!==i&&-1!==o?i-o:-1!==i?-1:-1!==o?1:e.name.localeCompare(t.name)}),s=o.findIndex(e=>e.area_id===this._draggedAreaId);if(-1===s||s===t)return this._draggedAreaId=void 0,void(this._dragOverIndex=void 0);const r=[...o],[n]=r.splice(s,1);if(!n)return;r.splice(t,0,n);const d=r.map(e=>e.area_id),c={...this._config,areas_display:{...this._config.areas_display,order:d}};this._fireConfigChanged(c),this._draggedAreaId=void 0,this._dragOverIndex=void 0}_handleEntityDragStart(e,t,i){this._draggedEntityId=t,this._draggedEntityGroup=i,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/plain",t))}_handleEntityDragEnd(){this._draggedEntityId=void 0,this._draggedEntityGroup=void 0,this._dragOverEntityIndex=void 0}_handleEntityDragOver(e,t,i){e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="move"),this._draggedEntityGroup===t&&(this._dragOverEntityIndex=i)}_handleEntityDragLeave(e){e.target.classList.contains("sortable-item")&&(this._dragOverEntityIndex=void 0)}_handleEntityDrop(e,t,i){if(e.preventDefault(),!this._draggedEntityId||!this._config||!this._area||this._draggedEntityGroup!==t)return;const a=[],o=new Set;if(this._config.entities){const e=new Set;this._config.devices&&this._config.devices.forEach(t=>{t.area_id===this._area&&e.add(t.device_id)}),this._config.entities.forEach(t=>{(t.area_id===this._area||t.device_id&&e.has(t.device_id))&&(a.push({entity_id:t.entity_id}),o.add(t.entity_id))})}const s=this._getAreaGroupedEntitiesWithoutFiltering(a,this.hass)[t]||[],r=this._config.areas_options?.[this._area]?.groups_options?.[t],n=r?.order||[],d=[...s].sort((e,t)=>{const i=n.indexOf(e),a=n.indexOf(t);if(-1!==i&&-1!==a)return i-a;if(-1!==i)return-1;if(-1!==a)return 1;const o=this.hass.states[e]?.attributes?.friendly_name||e,s=this.hass.states[t]?.attributes?.friendly_name||t;return o.localeCompare(s)}),c=d.findIndex(e=>e===this._draggedEntityId);if(-1===c||c===i)return this._draggedEntityId=void 0,this._draggedEntityGroup=void 0,void(this._dragOverEntityIndex=void 0);const l=[...d],[h]=l.splice(c,1);if(!h)return;l.splice(i,0,h);const p=l,g={...this._config,areas_options:{...this._config.areas_options,[this._area]:{...this._config.areas_options?.[this._area],groups_options:{...this._config.areas_options?.[this._area]?.groups_options,[t]:{...this._config.areas_options?.[this._area]?.groups_options?.[t],order:p}}}}};this._fireConfigChanged(g),this._draggedEntityId=void 0,this._draggedEntityGroup=void 0,this._dragOverEntityIndex=void 0}_toggleAreaVisibility(e){const t=[...this._config.areas_display?.hidden||[]],i=t.indexOf(e);-1===i?t.push(e):t.splice(i,1);const a={...this._config,areas_display:{...this._config.areas_display,hidden:t}};this._fireConfigChanged(a)}_toggleAreaSize(e){const t={...this._config,areas_options:{...this._config.areas_options,[e]:{...this._config.areas_options?.[e],card_size:"large"===this._config.areas_options?.[e]?.card_size?"small":"large"}}};"small"===t.areas_options?.[e]?.card_size&&delete t.areas_options[e].card_size,this._fireConfigChanged(t)}_toggleEntityVisibility(e,t){const i=[...this._config.areas_options?.[this._area]?.groups_options?.[t]?.hidden||[]],a=i.indexOf(e);-1===a?i.push(e):i.splice(a,1);const o={...this._config,areas_options:{...this._config.areas_options,[this._area]:{...this._config.areas_options?.[this._area],groups_options:{...this._config.areas_options?.[this._area]?.groups_options,[t]:{...this._config.areas_options?.[this._area]?.groups_options?.[t],hidden:i}}}}};this._fireConfigChanged(o)}_editArea(e){this._area=e}_addFavoriteEntity(){this._showEntityPicker=!0,this._entitySearchFilter=""}_addWeatherEntity(){this._showWeatherPicker=!0,this._weatherSearchFilter=""}_renderSelectedWeatherEntity(){const e=this._config?.settings?.weather_entity_id;if(!e)return F`
        <div class="no-weather">
          <p>No weather entity selected. Will use first available weather entity.</p>
        </div>
      `;const t=this.hass?.states[e];return F`
      <div class="selected-weather-entity" data-entity-id="${e}">
        <ha-state-icon
          .stateObj=${t}
          class="entity-icon"
        ></ha-state-icon>
        <span class="entity-name">${t?.attributes?.friendly_name||e}</span>
        <button 
          class="remove-button"
          title="Remove"
          @click=${()=>this._removeWeatherEntity()}
        >
          <svg viewBox="0 0 24 24" width="20" height="20">
            <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
          </svg>
        </button>
      </div>
    `}_renderSelectedEntities(){const e=this._config?.favorites||[];return 0===e.length?F`
        <div class="no-favorites">
                          <p>No favorites selected yet.</p>
        </div>
      `:F`
      <div class="selected-entities">
        ${Ae(e,e=>e,e=>{const t=this.hass?.states[e];return F`
              <div class="selected-entity" data-entity-id="${e}">
                <ha-state-icon
                  .stateObj=${t}
                  class="entity-icon"
                ></ha-state-icon>
                <span class="entity-name">${t?.attributes?.friendly_name||e}</span>
                <button 
                  class="remove-button"
                  title="Remove"
                  @click=${()=>this._removeFavoriteEntity(e)}
                >
                  <svg viewBox="0 0 24 24" width="20" height="20">
                    <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                  </svg>
                </button>
              </div>
            `})}
      </div>
    `}_renderWeatherPicker(){const e=Object.keys(this.hass?.states||{}).filter(e=>e.startsWith("weather.")&&"unavailable"!==this.hass?.states[e]?.state).filter(e=>{if(!this._weatherSearchFilter)return!0;const t=this.hass?.states[e];return(t?.attributes?.friendly_name||e).toLowerCase().includes(this._weatherSearchFilter.toLowerCase())||e.toLowerCase().includes(this._weatherSearchFilter.toLowerCase())});return F`
      <div class="entity-picker-modal">
        <div class="entity-picker-content">
          <div class="entity-picker-header">
            <h4>Select Weather Entity</h4>
            <button 
              class="close-button"
              title="Close"
              @click=${()=>this._showWeatherPicker=!1}
            >
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
              </svg>
            </button>
          </div>
          
          <div class="entity-search">
            <ha-textfield
              .label="Search weather entities..."
              .value=${this._weatherSearchFilter}
              @input=${e=>this._weatherSearchFilter=e.target.value}
            ></ha-textfield>
          </div>
          
          <div class="entity-list">
            ${Ae(e.slice(0,20),e=>e,e=>{const t=this.hass?.states[e];return F`
                  <div class="entity-option" @click=${()=>this._selectWeatherEntity(e)}>
                    <ha-state-icon
                      .stateObj=${t}
                      class="entity-icon"
                    ></ha-state-icon>
                    <span class="entity-name">${t?.attributes?.friendly_name||e}</span>
                    <span class="entity-id">${e}</span>
                  </div>
                `})}
          </div>
        </div>
      </div>
    `}_renderEntityPicker(){const e=Object.keys(this.hass?.states||{}).filter(e=>{if(!this._entitySearchFilter)return!0;const t=this.hass?.states[e];return(t?.attributes?.friendly_name||e).toLowerCase().includes(this._entitySearchFilter.toLowerCase())||e.toLowerCase().includes(this._entitySearchFilter.toLowerCase())}),t=this._config?.favorites||[],i=e.filter(e=>!t.includes(e));return F`
      <div class="entity-picker-modal">
        <div class="entity-picker-content">
          <div class="entity-picker-header">
            <h4>Select Entity</h4>
            <button 
              class="close-button"
              title="Close"
              @click=${()=>this._showEntityPicker=!1}
            >
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
              </svg>
            </button>
          </div>
          
          <div class="entity-search">
            <ha-textfield
              .label="Search..."
              .value=${this._entitySearchFilter}
              @input=${e=>this._entitySearchFilter=e.target.value}
            ></ha-textfield>
          </div>
          
          <div class="entity-list">
            ${Ae(i.slice(0,50),e=>e,e=>{const t=this.hass?.states[e];return F`
                  <div class="entity-option" @click=${()=>this._selectEntity(e)}>
                    <ha-state-icon
                      .stateObj=${t}
                      class="entity-icon"
                    ></ha-state-icon>
                    <span class="entity-name">${t?.attributes?.friendly_name||e}</span>
                    <span class="entity-id">${e}</span>
                  </div>
                `})}
          </div>
        </div>
      </div>
    `}_selectWeatherEntity(e){const t={...this._config,settings:{...this._config.settings,weather_entity_id:e}};this._fireConfigChanged(t),this._showWeatherPicker=!1}_removeWeatherEntity(){const e={...this._config,settings:{...this._config.settings,weather_entity_id:void 0}};this._fireConfigChanged(e)}_toggleTimeDisplay(e){const t=e.target.checked,i={...this._config,settings:{...this._config.settings,show_time:t}};this._fireConfigChanged(i)}_toggleWeatherDisplay(e){const t=e.target.checked,i={...this._config,settings:{...this._config.settings,show_weather:t}};this._fireConfigChanged(i)}_toggleHideUnavailableEntities(e){const t=e.target.checked,i={...this._config,settings:{...this._config.settings,hide_unavailable_entities:t}};this._fireConfigChanged(i)}_selectEntity(e){const t=[...this._config?.favorites||[]];if(!t.includes(e)){t.push(e);const i={...this._config,favorites:t};this._fireConfigChanged(i)}this._showEntityPicker=!1}_removeFavoriteEntity(e){const t=[...this._config?.favorites||[]],i=t.indexOf(e);if(i>-1){t.splice(i,1);const e={...this._config,favorites:t};this._fireConfigChanged(e)}}_renderPersonsConfiguration(){if(!this.hass?.states)return F`<p>No persons found</p>`;const e=Object.keys(this.hass.states).filter(e=>e.startsWith("person.")).map(e=>{const t=this.hass.states[e];return{entity_id:e,state:t,friendly_name:t?.attributes?.friendly_name||e}}).sort((e,t)=>e.friendly_name.localeCompare(t.friendly_name));if(0===e.length)return F`
        <div class="no-persons">
          <p>No person entities found in your Home Assistant configuration.</p>
          <p style="font-size: 12px; color: var(--secondary-text-color);">
            Add person entities to see them here.
          </p>
        </div>
      `;const t=new Set(this._config?.settings?.hidden_persons||[]);return F`
      <div class="persons-list">
        ${Ae(e,e=>e.entity_id,e=>{const i=t.has(e.entity_id);return F`
              <div class="person-item ${i?"hidden":""}">
                <ha-state-icon
                  .stateObj=${e.state}
                  class="person-icon"
                ></ha-state-icon>
                <span class="person-name">${e.friendly_name}</span>
                <span class="person-state ${"home"===e.state?.state?"home":"away"}">
                  ${"home"===e.state?.state?"Home":"Away"}
                </span>
                <ha-icon-button
                  .label=${i?"Show":"Hide"}
                  .path=${i?Ye:Ze}
                  @click=${()=>this._togglePersonVisibility(e.entity_id)}
                ></ha-icon-button>
              </div>
            `})}
      </div>
    `}_togglePersonVisibility(e){const t=[...this._config?.settings?.hidden_persons||[]],i=t.indexOf(e);-1===i?t.push(e):t.splice(i,1);const a={...this._config,settings:{...this._config.settings,hidden_persons:t}};this._fireConfigChanged(a)}_editAreaRegistry(e){e.stopPropagation(),alert("Open Home Assistant settings > Areas & zones to edit the area.")}_fireConfigChanged(e){const t={type:"custom:dwains",areas_display:e.areas_display||{},areas_options:e.areas_options||{},favorites:e.favorites||[],settings:e.settings||{}},i=new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0});this.dispatchEvent(i)}static get styles(){return d`
      :host {
        display: block;
      }

      .editor-container {
        padding: 16px;
      }

      /* Sponsoring Section Styles */
      .sponsoring-section {
        background: linear-gradient(135deg, var(--primary-color), var(--accent-color, var(--primary-color)));
        color: white;
        border-radius: 12px;
        padding: 24px;
        margin-bottom: 24px;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
        position: relative;
        overflow: hidden;
      }

      .sponsoring-section::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat;
        pointer-events: none;
      }

      .sponsoring-header {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 16px;
        position: relative;
        z-index: 1;
      }

      .sponsoring-header ha-icon {
        --mdc-icon-size: 28px;
        color: #ffeb3b;
        animation: heartbeat 2s infinite;
      }

      @keyframes heartbeat {
        0%, 50%, 100% { transform: scale(1); }
        25% { transform: scale(1.1); }
      }

      .sponsoring-header h3 {
        margin: 0;
        font-size: 21px;
        font-weight: 600;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
      }

      .sponsoring-content {
        position: relative;
        z-index: 1;
      }

      .sponsoring-content p {
        margin: 0 0 10px 0;
        line-height: 1.6;
        font-size: 13px;
        text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
      }

      .sponsoring-buttons {
        display: flex;
        flex-direction: column;
        gap: 24px;
      }

      .donation-section,
      .shop-section {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      .donation-section p,
      .shop-section p {
        margin: 0 0 4px 0;
        font-size: 13px;
        font-weight: 500;
      }

      .donation-links {
        display: flex;
        gap: 12px;
        flex-wrap: wrap;
      }

      .donation-links a,
      .shop-section > a {
        text-decoration: none;
      }

      .sponsoring-section mwc-button {
        --mdc-theme-primary: white;
        --mdc-theme-on-primary: var(--primary-color);
        --mdc-button-outline-color: white;
        transition: all 0.2s ease;
      }

      .sponsoring-section mwc-button[raised] {
        --mdc-theme-primary: #ffeb3b;
        --mdc-theme-on-primary: var(--primary-color);
        font-weight: 600;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
      }

      .sponsoring-section mwc-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
      }

      .shop-link {
        color: #ffeb3b !important;
        text-decoration: none;
        font-weight: 600;
        border-bottom: 1px solid #ffeb3b;
        transition: all 0.2s ease;
      }

      .shop-link:hover {
        color: white !important;
        border-bottom-color: white;
      }

      /* Responsive design for sponsoring section */
      @media (max-width: 600px) {
        .sponsoring-section {
          padding: 20px;
          margin-bottom: 20px;
        }

        .sponsoring-header h3 {
          font-size: 20px;
        }

        .donation-links {
          flex-direction: column;
        }

        .donation-links mwc-button,
        .shop-section mwc-button {
          width: 100%;
        }
      }

      .toolbar {
        display: flex;
        align-items: center;
        margin: -16px -16px 16px -16px;
        padding: 0 8px;
        background: var(--primary-background-color);
        border-bottom: 1px solid var(--divider-color);
      }

      .toolbar h2 {
        margin: 0;
        font-size: 20px;
        font-weight: 400;
        flex: 1;
        padding: 16px 8px;
      }
      
      .toolbar mwc-button {
        --mdc-theme-primary: var(--primary-color);
      }
      
      .toolbar mwc-button ha-icon {
        margin-right: 8px;
        --mdc-icon-size: 20px;
      }

      ha-expansion-panel {
        margin-bottom: 8px;
        --expansion-panel-summary-padding: 0 16px;
      }

      ha-expansion-panel [slot="header"] {
        display: flex;
        align-items: center;
        gap: 16px;
      }

      .description {
        margin: 16px;
        color: var(--secondary-text-color);
      }

      .area-help {
        display: flex;
        gap: 12px;
        align-items: flex-start;
        margin: 0 0px 16px 0px;
        padding: 12px;
        background: var(--secondary-background-color);
        border: 1px solid var(--divider-color);
        border-radius: 8px;
      }
      .area-help-icon {
        --mdc-icon-size: 24px;
      }
      .area-help-text p {
        margin: 0 0 6px 0;
        font-size: 13px;
        color: var(--secondary-text-color);
      }

      .sortable-container {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 4px;
        padding: 0 16px 16px 16px;
      }
      
      .sortable-item {
        position: relative;
        background: var(--card-background-color);
        border-radius: 4px;
        box-shadow: var(--card-box-shadow, none);
        transition: all 0.2s ease;
        user-select: none;
        cursor: grab;
      }
      
      .sortable-item:active {
        cursor: grabbing;
      }
      
      .sortable-item.hidden {
        opacity: 0.5;
      }
      
      .sortable-item:hover {
        background: var(--secondary-background-color);
      }

      .sortable-item.dragging {
        opacity: 0.4;
        transform: scale(0.95);
        transition: none;
      }

      .sortable-container.dragging .sortable-item {
        transition: transform 0.2s ease;
      }

      .sortable-container.dragging .sortable-item:not(.dragging):hover {
        transform: translateY(2px);
      }

      .sortable-item.drag-over {
        position: relative;
      }

      .sortable-item.drag-over::before {
        content: '';
        position: absolute;
        top: -2px;
        left: 0;
        right: 0;
        height: 4px;
        background: var(--primary-color);
        border-radius: 2px;
        animation: pulse 1s infinite;
      }

      @keyframes pulse {
        0% { opacity: 1; }
        50% { opacity: 0.5; }
        100% { opacity: 1; }
      }
      
      .area-item,
      .entity-item {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 12px 16px;
        min-height: 48px;
      }
      
      .sortable-item:hover {
        background: var(--secondary-background-color);
      }

      .handle {
        cursor: grab;
        margin-right: 8px;
        display: flex;
        align-items: center;
        padding: 8px 4px;
        color: var(--secondary-text-color);
        transition: all 0.2s ease;
      }
      
      .handle:hover {
        background: var(--primary-background-color);
        border-radius: 4px;
        color: var(--primary-color);
      }

      .handle:active {
        cursor: grabbing;
      }

      .handle ha-svg-icon {
        --mdc-icon-size: 20px;
      }
      
      .area-icon,
      .entity-icon {
        margin-right: 16px;
      }
      
      .area-name,
      .entity-name {
        flex: 1;
      }
      
      .area-name.clickable {
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 4px;
      }
      
      .area-name.clickable:hover {
        color: var(--primary-color);
      }
      
      .area-name .chevron {
        --mdc-icon-size: 20px;
        opacity: 0.6;
      }
      
      .area-actions {
        display: flex;
        align-items: center;
        gap: 4px;
      }
      
      button.link {
        color: var(--primary-color);
        text-decoration: none;
        background: none;
        border: none;
        cursor: pointer;
        font-size: inherit;
        padding: 0;
      }

      ha-icon-button[disabled] {
        opacity: 0.5;
        pointer-events: none;
      }
      
      ha-icon-button {
        --mdc-icon-button-size: 40px;
        --mdc-icon-size: 20px;
      }
      
      .favorites-section,
      .time-section,
      .weather-section,
      .entity-display-section {
        padding: 0 16px 16px 16px;
      }
      
      .time-toggle,
      .weather-toggle,
      .hide-unavailable-toggle {
        margin-bottom: 16px;
      }
      
      .time-toggle ha-formfield,
      .weather-toggle ha-formfield,
      .hide-unavailable-toggle ha-formfield {
        --mdc-typography-body2-font-size: 14px;
      }

      .toggle-description {
        margin: 8px 0 0 0;
        font-size: 12px;
        color: var(--secondary-text-color);
        line-height: 1.4;
        padding-left: 16px;
        border-left: 3px solid var(--divider-color);
      }
      
      .entity-picker,
      .weather-picker {
        width: 100%;
      }
      
      .weather-picker-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;
      }
      
      .weather-picker-header h4 {
        margin: 0;
        font-size: 16px;
        font-weight: 500;
      }
      
      .no-weather {
        text-align: center;
        padding: 24px;
        color: var(--secondary-text-color);
      }
      
      .selected-weather-entity {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 12px;
        background: var(--card-background-color);
        border-radius: 8px;
        border: 1px solid var(--divider-color);
      }
      
      .selected-weather-entity .entity-icon {
        --mdc-icon-size: 24px;
      }
      
      .selected-weather-entity .entity-name {
        flex: 1;
        font-size: 14px;
      }
      
      .entity-picker-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;
      }
      
      .entity-picker-header h4 {
        margin: 0;
        font-size: 16px;
        font-weight: 500;
      }
      
      .no-favorites {
        text-align: center;
        padding: 24px;
        color: var(--secondary-text-color);
      }
      
      .selected-entities {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-bottom: 16px;
      }
      
      .selected-entity {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 12px;
        background: var(--card-background-color);
        border-radius: 8px;
        border: 1px solid var(--divider-color);
      }
      
      .selected-entity .entity-icon {
        --mdc-icon-size: 24px;
      }
      
      .selected-entity .entity-name {
        flex: 1;
        font-size: 14px;
      }
      
      .remove-button {
        background: none;
        border: none;
        cursor: pointer;
        padding: 8px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--error-color, #f44336);
        transition: all 0.2s ease;
        width: 36px;
        height: 36px;
      }
      
      .remove-button:hover {
        background: var(--error-color, #f44336);
        color: white;
        transform: scale(1.1);
      }
      
      .close-button {
        background: none;
        border: none;
        cursor: pointer;
        padding: 8px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--secondary-text-color);
        transition: all 0.2s ease;
        width: 36px;
        height: 36px;
      }
      
      .close-button:hover {
        background: var(--secondary-background-color);
        color: var(--primary-text-color);
        transform: scale(1.1);
      }
      
      .entity-picker-modal {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
      }
      
      .entity-picker-content {
        background: var(--card-background-color);
        border-radius: 12px;
        padding: 24px;
        width: 90%;
        max-width: 600px;
        max-height: 80vh;
        overflow-y: auto;
      }
      
      .entity-picker-content .entity-picker-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;
      }
      
      .entity-search {
        margin-bottom: 16px;
      }
      
      .entity-list {
        display: flex;
        flex-direction: column;
        gap: 8px;
        max-height: 400px;
        overflow-y: auto;
      }
      
      .entity-option {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 12px;
        background: var(--primary-background-color);
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.2s ease;
      }
      
      .entity-option:hover {
        background: var(--secondary-background-color);
      }
      
      .entity-option .entity-icon {
        --mdc-icon-size: 24px;
      }
      
      .entity-option .entity-name {
        flex: 1;
        font-size: 14px;
      }
      
      .entity-option .entity-id {
        font-size: 12px;
        color: var(--secondary-text-color);
        font-family: var(--font-family-code);
      }
      
      .loading {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100px;
      }
      
      .persons-section {
        padding: 0 16px 16px 16px;
      }
      
      .persons-list {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      
      .person-item {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 12px 16px;
        background: var(--card-background-color);
        border-radius: 8px;
        border: 1px solid var(--divider-color);
        transition: all 0.2s ease;
      }
      
      .person-item:hover {
        background: var(--secondary-background-color);
      }
      
      .person-item.hidden {
        opacity: 0.5;
        background: var(--disabled-background-color, var(--secondary-background-color));
      }
      
      .person-icon {
        --mdc-icon-size: 32px;
        flex-shrink: 0;
      }
      
      .person-name {
        flex: 1;
        font-size: 14px;
        font-weight: 500;
      }
      
      .person-state {
        font-size: 12px;
        padding: 4px 8px;
        border-radius: 12px;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
      
      .person-state.home {
        background: var(--success-color, #4caf50);
        color: white;
      }
      
      .person-state.away {
        background: var(--warning-color, #ff9800);
        color: white;
      }
      
      .no-persons {
        text-align: center;
        padding: 32px;
        color: var(--secondary-text-color);
      }
    `}};i([ge({attribute:!1})],lt.prototype,"hass",null),i([ue()],lt.prototype,"_config",void 0),i([ue()],lt.prototype,"_area",void 0),i([ue()],lt.prototype,"_loading",void 0),i([ue()],lt.prototype,"_draggedAreaId",void 0),i([ue()],lt.prototype,"_dragOverIndex",void 0),i([ue()],lt.prototype,"_draggedEntityId",void 0),i([ue()],lt.prototype,"_draggedEntityGroup",void 0),i([ue()],lt.prototype,"_dragOverEntityIndex",void 0),i([ue()],lt.prototype,"_showEntityPicker",void 0),i([ue()],lt.prototype,"_entitySearchFilter",void 0),i([ue()],lt.prototype,"_showWeatherPicker",void 0),i([ue()],lt.prototype,"_weatherSearchFilter",void 0),lt=i([le("dwains-dashboard-strategy-editor")],lt);var ht=Object.freeze({__proto__:null,get DwainsDashboardStrategyEditor(){return lt}});class pt extends de{constructor(){super(...arguments),this.cards=[],this.config={},this._isLoading=!0}static getConfigElement(){return document.createElement("dwains-dashboard-card-editor")}setConfig(e){this.config=e,this._isLoading=!0,this.hass&&this._generateDashboardConfig()}async _generateDashboardConfig(){if(this.hass)try{this._isLoading=!0;const[e,t,i,a]=await Promise.all([this.hass.callWS({type:"config/area_registry/list"}),this.hass.callWS({type:"config/device_registry/list"}),this.hass.callWS({type:"config/entity_registry/list"}),this.hass.callWS({type:"config/floor_registry/list"}).catch(()=>[])]);console.log(`Custom Card: Found ${e.length} areas, ${t.length} devices, ${i.length} entities, ${a.length} floors`);const o=e.map(e=>({area_id:e.area_id,name:e.name,picture:e.picture||void 0,icon:e.icon||void 0,floor_id:e.floor_id||void 0,temperature_entity_id:e.temperature_entity_id||void 0,humidity_entity_id:e.humidity_entity_id||void 0})),s=t.map(e=>({device_id:e.id,name:e.name,area_id:e.area_id||void 0})),r=i.map(e=>({entity_id:e.entity_id,area_id:e.area_id||void 0,device_id:e.device_id||void 0,hidden:!!e.hidden_by})),n=a.map(e=>({floor_id:e.floor_id,name:e.name}));this.hass.entities=i.reduce((e,t)=>(e[t.entity_id]=t,e),{}),this._dashboardConfig={...this._convertToStrategyConfig(this.config),areas:o,devices:s,entities:r,floors:n},this._isLoading=!1,this._updateCards(),setTimeout(()=>{this._navigateToHome()},100),window.ddDebugEntity=e=>{const t=this.hass?.states?.[e],i=this.hass?.entities?.[e];return console.log("[Dwains] Debug entity",e,{state:t,registry:i}),{state:t,registry:i}}}catch(e){console.error("Failed to generate dashboard config:",e),this._isLoading=!1}}_convertToStrategyConfig(e){const{type:t,...i}=e;return{areas_options:{},global_options:{show_welcome:!0,show_weather:!0,show_person_cards:!0},views:[],persons:[],favorites:[],...i}}_updateCards(){this._dashboardConfig&&this.hass?this.cards=[F`
      <dwains-layout-card 
        .hass=${this.hass}
        .config=${this._dashboardConfig}
      ></dwains-layout-card>
    `]:this.cards=[]}_navigateToHome(){const e=this.shadowRoot?.querySelector("dwains-layout-card");e&&"home"!==e._selectedView&&(e._selectedView="home",e._selectedArea=null,e.requestUpdate(),console.log("Custom Card: Navigated to home view"))}getCardSize(){return 10}getGridOptions(){return{rows:10,columns:"full",min_rows:10}}static getStubConfig(){return{type:"custom:dwains-dashboard-card",global_options:{show_welcome:!0,show_weather:!0,show_person_cards:!0}}}static get styles(){return d`
      :host {
        display: block;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }
      
      #dwains_dashboard {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        font-family: "Open Sans", sans-serif !important;
      }
      
      dwains-layout-card {
        width: 100%;
        height: 100%;
        display: block;
      }
    `}updated(e){super.updated(e),e.has("hass")&&this.hass&&(this._dashboardConfig?this._updateCards():this._generateDashboardConfig())}render(){return this._isLoading||!this._dashboardConfig?F`
        <div style="display: flex; justify-content: center; align-items: center; height: 200px; font-size: 18px;">
          Loading Dwains Dashboard...
        </div>
      `:this.cards&&0!==this.cards.length?F`
      <div id="dwains_dashboard">
        ${this.cards.map(e=>F`${e}`)}
      </div>
    `:F`
        <div style="display: flex; justify-content: center; align-items: center; height: 200px; font-size: 18px;">
          No dashboard content available
        </div>
      `}}i([ge({attribute:!1})],pt.prototype,"hass",void 0),i([ge({attribute:!1})],pt.prototype,"cards",void 0),i([ge({attribute:!1})],pt.prototype,"config",void 0),i([ue()],pt.prototype,"_dashboardConfig",void 0),i([ue()],pt.prototype,"_isLoading",void 0);class gt extends de{constructor(){super(...arguments),this._config={}}setConfig(e){this._config=e,this._strategyEditor&&this._strategyEditor.setConfig(this._convertToStrategyConfig(e))}_convertToStrategyConfig(e){const{type:t,...i}=e;return{type:"custom:dwains",...i}}_convertToCardConfig(e){const{type:t,...i}=e;return{type:"custom:dwains-dashboard-card",...i}}async firstUpdated(){const e=document.createElement("dwains-dashboard-strategy-editor");this._strategyEditor=e,this.hass&&(e.hass=this.hass),this._config&&e.setConfig(this._convertToStrategyConfig(this._config)),e.addEventListener("config-changed",e=>{e.stopPropagation();const t=e.detail.config,i=this._convertToCardConfig(t);this._fireConfigChanged(i)}),this.requestUpdate()}updated(e){super.updated(e),e.has("hass")&&this._strategyEditor&&this.hass&&(this._strategyEditor.hass=this.hass),e.has("_config")&&this._strategyEditor&&this._config&&this._strategyEditor.setConfig(this._convertToStrategyConfig(this._config))}_fireConfigChanged(e){const t=new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0});this.dispatchEvent(t)}render(){return this.hass?this._strategyEditor?F`${this._strategyEditor}`:F`
        <div style="padding: 16px; text-align: center;">
          <ha-circular-progress indeterminate></ha-circular-progress>
          <p style="margin-top: 16px;">Loading editor...</p>
        </div>
      `:F``}static get styles(){return d`
      :host {
        display: block;
        width: 100%;
        height: 100%;
      }
    `}}i([ge({attribute:!1})],gt.prototype,"hass",void 0),i([ue()],gt.prototype,"_config",void 0),i([ue()],gt.prototype,"_strategyEditor",void 0),customElements.define("dwains-dashboard-card-editor",gt),console.log("Dwains Dashboard v4b3 Litelement - Loading...");const ut=(e,t)=>{customElements.get(e)||(customElements.define(e,t),console.log(`✓ Registered: ${e}`))};ut("ll-strategy-dashboard-dwains",class extends HTMLElement{static async generate(t,i){return(new e).generate(t,i)}static async getConfigElement(){return e.getConfigElement()}}),ut("ll-strategy-view-dwains-view",class extends HTMLElement{static async generate(e,i){return(new t).generate(e,i)}}),ut("dwains-dashboard-card",pt),ut("dwains-dashboard-card-editor",gt),window.customCards=window.customCards||[],window.customCards.push({type:"dwains-dashboard-card",name:"Dwains Dashboard V4",preview:!1,description:"A complete automatic building dashboard solution based on your HA Areas, Devices, Entities and Floors",documentationURL:"https://github.com/dwainscheeren/dwains-dashboard"}),console.log("✓ Registered custom card: dwains-dashboard-card"),console.log("Dwains Dashboard v4 - Loaded successfully!");export{pt as DwainsDashboardCard,gt as DwainsDashboardCardEditor,e as DwainsDashboardStrategy,t as DwainsViewStrategy};
