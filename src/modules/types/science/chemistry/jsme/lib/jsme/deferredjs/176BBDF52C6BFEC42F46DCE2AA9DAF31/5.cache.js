$wnd.jsme.runAsyncCallback5('function bQ(){this.pb=gn("file");this.pb[jd]="gwt-FileUpload"}r(346,327,Hh,bQ);_.td=function(a){zu(this,a)};function cQ(a){var b=$doc.createElement(Hd);DJ(pg,b.tagName);this.pb=b;this.b=new lK(this.pb);this.pb[jd]="gwt-HTML";kK(this.b,a,!0);tK(this)}r(350,351,Hh,cQ);function dQ(){ix();var a=$doc.createElement("textarea");!Ys&&(Ys=new Xs);!Ws&&(Ws=new Vs);Gv();this.pb=a;this.pb[jd]="gwt-TextArea"}r(390,391,Hh,dQ);\nfunction eQ(a,b){var c,d;c=$doc.createElement(Pg);d=$doc.createElement(zg);d[Cc]=a.a.a;d.style[Vg]=a.b.a;var e=($s(),at(d));c.appendChild(e);Zs(a.d,c);Lu(a,b,d)}function hQ(){Ov.call(this);this.a=(Sv(),Zv);this.b=($v(),cw);this.e[fd]=ab;this.e[Yc]=ab}r(399,343,Mh,hQ);_.Od=function(a){var b;b=jn(a.pb);(a=Pu(this,a))&&this.d.removeChild(jn(b));return a};r(405,1,{});_.ee=function(a){a.focus()};r(406,407,{});_.ee=function(a){Aw(a)};\nfunction iQ(a){try{a.w=!1;var b,c,d,e,f;d=a.hb;c=a.ab;d||(a.pb.style[Wg]=te,a.ab=!1,a._d());b=a.pb;b.style[De]=0+(Qo(),Of);b.style[Kg]=bb;e=~~(rn()-cn(a.pb,wf))>>1;f=~~(qn()-cn(a.pb,vf))>>1;VL(a,$i(mn($doc.body)+e,0),$i(($doc.body.scrollTop||0)+f,0));d||((a.ab=c)?(a.pb.style[nd]=Uf,a.pb.style[Wg]=Xg,yi(a.gb,200)):a.pb.style[Wg]=Xg)}finally{a.w=!0}}function jQ(a){a.i=(new gL(a.j)).nc.Re();vu(a.i,new kQ(a),(Cp(),Cp(),Dp));a.d=F(vx,o,39,[a.i])}\nfunction lQ(){pM();var a,b,c,d,e;MM.call(this,(dN(),eN),null,!0);this.Lg();this.db=!0;a=new cQ(this.k);this.f=new dQ;this.f.pb.style[Zg]=db;hu(this.f,db);this.Jg();gM(this,"400px");e=new hQ;e.pb.style[se]=db;e.e[fd]=10;c=(Sv(),Tv);e.a=c;eQ(e,a);eQ(e,this.f);this.e=new gw;this.e.e[fd]=20;for(b=this.d,c=0,d=b.length;c<d;++c)a=b[c],dw(this.e,a);eQ(e,this.e);uM(this,e);pL(this,!1);this.Kg()}r(653,654,MH,lQ);_.Jg=function(){jQ(this)};\n_.Kg=function(){var a=this.f;a.pb.readOnly=!0;var b=lu(a.pb)+"-readonly";gu(a.Bd(),b,!0)};_.Lg=function(){oL(this.I.b,"Copy")};_.d=null;_.e=null;_.f=null;_.i=null;_.j="Close";_.k="Press Ctrl-C (Command-C on Mac) or right click (Option-click on Mac) on the selected text to copy it, then paste into another program.";function kQ(a){this.a=a}r(656,1,{},kQ);_._c=function(){wM(this.a,!1)};_.a=null;function mQ(a){this.a=a}r(657,1,{},mQ);\n_.Dc=function(){qu(this.a.f.pb,!0);Hv.ee(this.a.f.pb);var a=this.a.f,b;b=dn(a.pb,Ug).length;if(0<b&&a.kb){if(0>b)throw new bF("Length must be a positive integer. Length: "+b);if(b>dn(a.pb,Ug).length)throw new bF("From Index: 0  To Index: "+b+"  Text Length: "+dn(a.pb,Ug).length);try{a.pb.setSelectionRange(0,0+b)}catch(c){}}};_.a=null;function nQ(a){jQ(a);a.a=(new gL(a.b)).nc.Re();vu(a.a,new oQ(a),(Cp(),Cp(),Dp));a.d=F(vx,o,39,[a.a,a.i])}\nfunction pQ(a){a.j="Cancel";a.k="Paste the text to import into the text area below.";a.b="Accept";oL(a.I.b,"Paste")}function qQ(a){pM();lQ.call(this);this.c=a}r(659,653,MH,qQ);_.Jg=function(){nQ(this)};_.Kg=function(){hu(this.f,"150px")};_.Lg=function(){pQ(this)};_._d=function(){LM(this);Tm((Qm(),Rm),new rQ(this))};_.a=null;_.b=null;_.c=null;function sQ(a){pM();qQ.call(this,a)}r(658,659,MH,sQ);_.Jg=function(){var a;nQ(this);a=new bQ;vu(a,new tQ(this),(UI(),UI(),VI));this.d=F(vx,o,39,[this.a,a,this.i])};\n_.Kg=function(){hu(this.f,"150px");UA(new uQ(this),this.f)};_.Lg=function(){pQ(this);this.k+=" Or drag and drop a file on it."};function tQ(a){this.a=a}r(660,1,{},tQ);_.$c=function(a){var b,c;b=new FileReader;a=(c=on(a.a),c.files[0]);vQ(b,new wQ(this));b.readAsText(a)};_.a=null;function wQ(a){this.a=a}r(661,1,{},wQ);_.af=function(a){nA();hx(this.a.a.f,a)};_.a=null;function uQ(a){this.a=a;this.b=new xQ(this);this.c=this.d=1}r(662,497,{},uQ);_.a=null;function xQ(a){this.a=a}r(663,1,{},xQ);\n_.af=function(a){this.a.a.f.pb[Ug]=null!=a?a:l};_.a=null;function oQ(a){this.a=a}r(667,1,{},oQ);_._c=function(){if(this.a.c){var a=this.a.c,b;b=new kA(a.a,0,dn(this.a.f.pb,Ug));aB(a.a.a,b.a)}wM(this.a,!1)};_.a=null;function rQ(a){this.a=a}r(668,1,{},rQ);_.Dc=function(){qu(this.a.f.pb,!0);Hv.ee(this.a.f.pb)};_.a=null;r(669,1,Ah);_.Sc=function(){var a,b;a=new yQ(this.a);void 0!=$wnd.FileReader?b=new sQ(a):b=new qQ(a);iM(b);iQ(b)};function yQ(a){this.a=a}r(670,1,{},yQ);_.a=null;r(671,1,Ah);\n_.Sc=function(){var a;a=new lQ;var b=this.a,c;hx(a.f,b);b=(c=fF(b,"\\r\\n|\\r|\\n|\\n\\r"),c.length);hu(a.f,20*(10>b?b:10)+Of);Tm((Qm(),Rm),new mQ(a));iM(a);iQ(a)};function vQ(a,b){a.onload=function(a){b.af(a.target.result)}}W(653);W(659);W(658);W(670);W(656);W(657);W(667);W(668);W(660);W(661);W(662);W(663);W(350);W(399);W(390);W(346);x(FH)(5);\n//@ sourceURL=5.js\n')