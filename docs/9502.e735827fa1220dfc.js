"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[9502],{4825:(C,h,r)=>{r.d(h,{H:()=>o});var a=r(5592),p=r(6321),e=r(671);function o(l=0,n,c=p.P){let i=-1;return null!=n&&((0,e.K)(n)?c=n:i=n),new a.y(d=>{let f=function m(l){return l instanceof Date&&!isNaN(l)}(l)?+l-c.now():l;f<0&&(f=0);let I=0;return c.schedule(function(){d.closed||(d.next(I++),0<=i?this.schedule(void 0,i):d.complete())},f)})}},1954:(C,h,r)=>{r.d(h,{o:()=>o});var a=r(7394);class p extends a.w0{constructor(n,c){super()}schedule(n,c=0){return this}}const e={setInterval(l,n,...c){const{delegate:i}=e;return i?.setInterval?i.setInterval(l,n,...c):setInterval(l,n,...c)},clearInterval(l){const{delegate:n}=e;return(n?.clearInterval||clearInterval)(l)},delegate:void 0};var m=r(9039);class o extends p{constructor(n,c){super(n,c),this.scheduler=n,this.work=c,this.pending=!1}schedule(n,c=0){var i;if(this.closed)return this;this.state=n;const d=this.id,f=this.scheduler;return null!=d&&(this.id=this.recycleAsyncId(f,d,c)),this.pending=!0,this.delay=c,this.id=null!==(i=this.id)&&void 0!==i?i:this.requestAsyncId(f,this.id,c),this}requestAsyncId(n,c,i=0){return e.setInterval(n.flush.bind(n,this),i)}recycleAsyncId(n,c,i=0){if(null!=i&&this.delay===i&&!1===this.pending)return c;null!=c&&e.clearInterval(c)}execute(n,c){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const i=this._execute(n,c);if(i)return i;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(n,c){let d,i=!1;try{this.work(n)}catch(f){i=!0,d=f||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),d}unsubscribe(){if(!this.closed){const{id:n,scheduler:c}=this,{actions:i}=c;this.work=this.state=this.scheduler=null,this.pending=!1,(0,m.P)(i,this),null!=n&&(this.id=this.recycleAsyncId(c,n,null)),this.delay=null,super.unsubscribe()}}}},9931:(C,h,r)=>{r.d(h,{v:()=>e});const a={now:()=>(a.delegate||Date).now(),delegate:void 0};class p{constructor(o,l=p.now){this.schedulerActionCtor=o,this.now=l}schedule(o,l=0,n){return new this.schedulerActionCtor(this,o).schedule(n,l)}}p.now=a.now;class e extends p{constructor(o,l=p.now){super(o,l),this.actions=[],this._active=!1}flush(o){const{actions:l}=this;if(this._active)return void l.push(o);let n;this._active=!0;do{if(n=o.execute(o.state,o.delay))break}while(o=l.shift());if(this._active=!1,n){for(;o=l.shift();)o.unsubscribe();throw n}}}},6321:(C,h,r)=>{r.d(h,{P:()=>m,z:()=>e});var a=r(1954);const e=new(r(9931).v)(a.o),m=e},8468:(C,h,r)=>{r.d(h,{x:()=>m});var a=r(9467),p=r(4713),e=r(2332);let m=(()=>{class o extends p.s{pathId;ngOnInit(){this.pathId="url(#"+(0,e.Th)()+")"}static \u0275fac=(()=>{let n;return function(i){return(n||(n=a.n5z(o)))(i||o)}})();static \u0275cmp=a.Xpm({type:o,selectors:[["TimesCircleIcon"]],standalone:!0,features:[a.qOj,a.jDz],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(c,i){1&c&&(a.O4$(),a.TgZ(0,"svg",0)(1,"g"),a._UZ(2,"path",1),a.qZA(),a.TgZ(3,"defs")(4,"clipPath",2),a._UZ(5,"rect",3),a.qZA()()()),2&c&&(a.Tol(i.getClassNames()),a.uIk("aria-label",i.ariaLabel)("aria-hidden",i.ariaHidden)("role",i.role),a.xp6(1),a.uIk("clip-path",i.pathId),a.xp6(3),a.Q6J("id",i.pathId))},encapsulation:2})}return o})()},9502:(C,h,r)=>{r.d(h,{$:()=>K,V:()=>R});var a=r(6825),p=r(6814),e=r(9467),m=r(5219),o=r(2591),l=r(2736),n=r(3823),c=r(7778),i=r(8468),d=r(4480),f=r(4825);function I(t,u){if(1&t&&e._UZ(0,"span"),2&t){const s=e.oxw().$implicit;e.Tol("p-message-icon pi "+s.icon),e.uIk("data-pc-section","icon")}}function y(t,u){1&t&&e._UZ(0,"CheckIcon"),2&t&&e.uIk("data-pc-section","icon")}function M(t,u){1&t&&e._UZ(0,"InfoCircleIcon"),2&t&&e.uIk("data-pc-section","icon")}function x(t,u){1&t&&e._UZ(0,"TimesCircleIcon"),2&t&&e.uIk("data-pc-section","icon")}function E(t,u){1&t&&e._UZ(0,"ExclamationTriangleIcon"),2&t&&e.uIk("data-pc-section","icon")}function O(t,u){if(1&t&&(e.TgZ(0,"span",10),e.ynx(1),e.YNc(2,y,1,1,"CheckIcon",11)(3,M,1,1,"InfoCircleIcon",11)(4,x,1,1,"TimesCircleIcon",11)(5,E,1,1,"ExclamationTriangleIcon",11),e.BQk(),e.qZA()),2&t){const s=e.oxw().$implicit;e.xp6(2),e.Q6J("ngIf","success"===s.severity),e.xp6(1),e.Q6J("ngIf","info"===s.severity),e.xp6(1),e.Q6J("ngIf","error"===s.severity),e.xp6(1),e.Q6J("ngIf","warn"===s.severity)}}function b(t,u){if(1&t&&e._UZ(0,"span",14),2&t){const s=e.oxw(2).$implicit;e.Q6J("innerHTML",s.summary,e.oJD),e.uIk("data-pc-section","summary")}}function A(t,u){if(1&t&&e._UZ(0,"span",15),2&t){const s=e.oxw(2).$implicit;e.Q6J("innerHTML",s.detail,e.oJD),e.uIk("data-pc-section","detail")}}function w(t,u){if(1&t&&(e.ynx(0),e.YNc(1,b,1,2,"span",12)(2,A,1,2,"span",13),e.BQk()),2&t){const s=e.oxw().$implicit;e.xp6(1),e.Q6J("ngIf",s.summary),e.xp6(1),e.Q6J("ngIf",s.detail)}}function D(t,u){if(1&t&&(e.TgZ(0,"span",18),e._uU(1),e.qZA()),2&t){const s=e.oxw(2).$implicit;e.uIk("data-pc-section","summary"),e.xp6(1),e.Oqu(s.summary)}}function P(t,u){if(1&t&&(e.TgZ(0,"span",19),e._uU(1),e.qZA()),2&t){const s=e.oxw(2).$implicit;e.uIk("data-pc-section","detail"),e.xp6(1),e.Oqu(s.detail)}}function k(t,u){if(1&t&&e.YNc(0,D,2,2,"span",16)(1,P,2,2,"span",17),2&t){const s=e.oxw().$implicit;e.Q6J("ngIf",s.summary),e.xp6(1),e.Q6J("ngIf",s.detail)}}function L(t,u){if(1&t){const s=e.EpF();e.TgZ(0,"button",20),e.NdJ("click",function(){e.CHM(s);const g=e.oxw().index,v=e.oxw(2);return e.KtG(v.removeMessage(g))}),e._UZ(1,"TimesIcon",21),e.qZA()}if(2&t){const s=e.oxw(3);e.uIk("aria-label",s.closeAriaLabel)("data-pc-section","closebutton"),e.xp6(1),e.Q6J("styleClass","p-message-close-icon"),e.uIk("data-pc-section","closeicon")}}const S=(t,u)=>({showTransitionParams:t,hideTransitionParams:u}),Z=t=>({value:"visible",params:t});function B(t,u){if(1&t&&(e.TgZ(0,"div",4)(1,"div",5),e.YNc(2,I,1,3,"span",6)(3,O,6,4,"span",7)(4,w,3,2,"ng-container",1)(5,k,2,2,"ng-template",null,8,e.W1O)(7,L,2,4,"button",9),e.qZA()()),2&t){const s=u.$implicit,_=e.MAs(6),g=e.oxw(2);e.Tol("p-message p-message-"+s.severity),e.Q6J("@messageAnimation",e.VKq(12,Z,e.WLB(9,S,g.showTransitionOptions,g.hideTransitionOptions))),e.xp6(1),e.uIk("data-pc-section","wrapper"),e.xp6(1),e.Q6J("ngIf",s.icon),e.xp6(1),e.Q6J("ngIf",!s.icon),e.xp6(1),e.Q6J("ngIf",!g.escape)("ngIfElse",_),e.xp6(3),e.Q6J("ngIf",g.closable)}}function U(t,u){if(1&t&&(e.ynx(0),e.YNc(1,B,8,14,"div",3),e.BQk()),2&t){const s=e.oxw();e.xp6(1),e.Q6J("ngForOf",s.messages)}}function Q(t,u){1&t&&e.GkF(0)}function J(t,u){if(1&t&&(e.TgZ(0,"div",22)(1,"div",5),e.YNc(2,Q,1,0,"ng-container",23),e.qZA()()),2&t){const s=e.oxw();e.Q6J("ngClass","p-message p-message-"+s.severity),e.xp6(2),e.Q6J("ngTemplateOutlet",s.contentTemplate)}}let R=(()=>{class t{messageService;el;cd;config;set value(s){this.messages=s,this.startMessageLifes(this.messages)}closable=!0;style;styleClass;enableService=!0;key;escape=!0;severity;showTransitionOptions="300ms ease-out";hideTransitionOptions="200ms cubic-bezier(0.86, 0, 0.07, 1)";valueChange=new e.vpe;templates;messages;messageSubscription;clearSubscription;timerSubscriptions=[];contentTemplate;constructor(s,_,g,v){this.messageService=s,this.el=_,this.cd=g,this.config=v}ngAfterContentInit(){this.templates?.forEach(s=>{s.getType(),this.contentTemplate=s.template}),this.messageService&&this.enableService&&!this.contentTemplate&&(this.messageSubscription=this.messageService.messageObserver.subscribe(s=>{if(s){Array.isArray(s)||(s=[s]);const _=s.filter(g=>this.key===g.key);this.messages=this.messages?[...this.messages,..._]:[..._],this.startMessageLifes(_),this.cd.markForCheck()}}),this.clearSubscription=this.messageService.clearObserver.subscribe(s=>{s?this.key===s&&(this.messages=null):this.messages=null,this.cd.markForCheck()}))}hasMessages(){let s=this.el.nativeElement.parentElement;return!(!s||!s.offsetParent)&&(null!=this.contentTemplate||this.messages&&this.messages.length>0)}clear(){this.messages=[],this.valueChange.emit(this.messages)}removeMessage(s){this.messages=this.messages?.filter((_,g)=>g!==s),this.valueChange.emit(this.messages)}get icon(){const s=this.severity||(this.hasMessages()?this.messages[0].severity:null);if(this.hasMessages())switch(s){case"success":return"pi-check";case"info":default:return"pi-info-circle";case"error":return"pi-times";case"warn":return"pi-exclamation-triangle"}return null}get closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}ngOnDestroy(){this.messageSubscription&&this.messageSubscription.unsubscribe(),this.clearSubscription&&this.clearSubscription.unsubscribe(),this.timerSubscriptions?.forEach(s=>s.unsubscribe())}startMessageLifes(s){s?.forEach(_=>_.life&&this.startMessageLife(_))}startMessageLife(s){const _=(0,f.H)(s.life).subscribe(()=>{this.messages=this.messages?.filter(g=>g!==s),this.timerSubscriptions=this.timerSubscriptions?.filter(g=>g!==_),this.valueChange.emit(this.messages),this.cd.markForCheck()});this.timerSubscriptions.push(_)}static \u0275fac=function(_){return new(_||t)(e.Y36(m.ez,8),e.Y36(e.SBq),e.Y36(e.sBO),e.Y36(m.b4))};static \u0275cmp=e.Xpm({type:t,selectors:[["p-messages"]],contentQueries:function(_,g,v){if(1&_&&e.Suo(v,m.jx,4),2&_){let T;e.iGM(T=e.CRH())&&(g.templates=T)}},hostAttrs:[1,"p-element"],inputs:{value:"value",closable:"closable",style:"style",styleClass:"styleClass",enableService:"enableService",key:"key",escape:"escape",severity:"severity",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions"},outputs:{valueChange:"valueChange"},decls:4,vars:8,consts:[["role","alert",1,"p-messages","p-component",3,"ngStyle"],[4,"ngIf","ngIfElse"],["staticMessage",""],["role","alert",3,"class",4,"ngFor","ngForOf"],["role","alert"],[1,"p-message-wrapper"],[3,"class",4,"ngIf"],["class","p-message-icon",4,"ngIf"],["escapeOut",""],["class","p-message-close p-link","type","button","pRipple","",3,"click",4,"ngIf"],[1,"p-message-icon"],[4,"ngIf"],["class","p-message-summary",3,"innerHTML",4,"ngIf"],["class","p-message-detail",3,"innerHTML",4,"ngIf"],[1,"p-message-summary",3,"innerHTML"],[1,"p-message-detail",3,"innerHTML"],["class","p-message-summary",4,"ngIf"],["class","p-message-detail",4,"ngIf"],[1,"p-message-summary"],[1,"p-message-detail"],["type","button","pRipple","",1,"p-message-close","p-link",3,"click"],[3,"styleClass"],["role","alert",3,"ngClass"],[4,"ngTemplateOutlet"]],template:function(_,g){if(1&_&&(e.TgZ(0,"div",0),e.YNc(1,U,2,1,"ng-container",1)(2,J,3,2,"ng-template",null,2,e.W1O),e.qZA()),2&_){const v=e.MAs(3);e.Tol(g.styleClass),e.Q6J("ngStyle",g.style),e.uIk("aria-atomic",!0)("aria-live","assertive")("data-pc-name","message"),e.xp6(1),e.Q6J("ngIf",!g.contentTemplate)("ngIfElse",v)}},dependencies:()=>[p.mk,p.sg,p.O5,p.tP,p.PC,d.H,o.n,n.u,i.x,l.L,c.q],styles:["@layer primeng{.p-message-wrapper{display:flex;align-items:center}.p-message-close{display:flex;align-items:center;justify-content:center;flex:none}.p-message-close.p-link{margin-left:auto;overflow:hidden;position:relative}.p-messages .p-message.ng-animating{overflow:hidden}}\n"],encapsulation:2,data:{animation:[(0,a.X$)("messageAnimation",[(0,a.eR)(":enter",[(0,a.oB)({opacity:0,transform:"translateY(-25%)"}),(0,a.jt)("{{showTransitionParams}}")]),(0,a.eR)(":leave",[(0,a.jt)("{{hideTransitionParams}}",(0,a.oB)({height:0,marginTop:0,marginBottom:0,marginLeft:0,marginRight:0,opacity:0}))])])]},changeDetection:0})}return t})(),K=(()=>{class t{static \u0275fac=function(_){return new(_||t)};static \u0275mod=e.oAB({type:t});static \u0275inj=e.cJS({imports:[p.ez,d.T,o.n,n.u,i.x,l.L,c.q]})}return t})()}}]);