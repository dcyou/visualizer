$wnd.jsme.runAsyncCallback5('r(203,191,{});function DO(){DO=s;EO=new Go("dragend",new FO)}function GO(a){a.a.cancelBubble=!0;bn(a.a)}function FO(){}r(204,203,{},FO);_.Rc=function(){GO(this)};_.Uc=function(){return EO};var EO;function HO(){HO=s;IO=new Go("dragenter",new JO)}function JO(){}r(205,203,{},JO);_.Rc=function(){GO(this)};_.Uc=function(){return IO};var IO;function KO(){KO=s;LO=new Go("dragover",new MO)}function MO(){}r(206,203,{},MO);_.Rc=function(){GO(this)};_.Uc=function(){return LO};var LO;\nfunction NO(){NO=s;OO=new Go("drop",new PO)}function PO(){}r(207,203,{},PO);_.Rc=function(a){var b,c,d,e;this.a.cancelBubble=!0;bn(this.a);d=(this.a.dataTransfer||null).files;e=0;a:for(;e<d.length;++e){if(0<a.a.d&&e>=a.a.d)break a;b=d[e];c=new FileReader;QO(c,a.a.b);1==a.a.c&&c.readAsText(b)}0==d.length&&(b=(this.a.dataTransfer||null).getData(wg),a.a.b.a.a.f.pb[Rg]=null!=b?b:l)};_.Uc=function(){return OO};var OO;function RO(a,b,c){fq(!a.mb?a.mb=new uq(a):a.mb,c,b)}\nfunction SO(){this.pb=Zm("file");this.pb[jd]="gwt-FileUpload"}r(323,304,bi,SO);_.ld=function(a){ot(this,a)};function TO(a){var b=G(Hd);hH(lg,gH(b));this.pb=b;this.b=new NI(this.pb);this.pb[jd]="gwt-HTML";MI(this.b,a,!0);VI(this)}r(327,328,bi,TO);function UO(){Ov();var a=G("textarea");!Rr&&(Rr=new Qr);!Pr&&(Pr=new Or);this.pb=a;this.pb[jd]="gwt-TextArea"}r(367,368,bi,UO);function VO(a,b){var c,d;c=G(Mg);d=G(vg);d[Ec]=a.a.a;d.style[Sg]=a.b.a;var e=(Tr(),Ur(d));c.appendChild(e);Sr(a.d,c);At(a,b,d)}\nfunction WO(){uu.call(this);this.a=(xu(),Eu);this.b=(Fu(),Iu);this.e[fd]=Za;this.e[Yc]=Za}r(376,320,Yh,WO);_.Gd=function(a){var b;b=an(a.pb);(a=Et(this,a))&&this.d.removeChild(an(b));return a};\nfunction XO(a){try{a.w=!1;var b,c,d;d=a.hb;c=a.ab;d||(a.pb.style[Tg]=me,a.ab=!1,a.Td());b=a.pb;b.style[ve]=0+($n(),Af);b.style[Dg]=$a;vK(a,Vi(Cn($doc)+(Bn()-Wm(a.pb,mf)>>1),0),Vi(Dn($doc)+(An()-Wm(a.pb,lf)>>1),0));d||((a.ab=c)?(a.pb.style[nd]=Rf,a.pb.style[Tg]=Ug,wi(a.gb,200)):a.pb.style[Tg]=Ug)}finally{a.w=!0}}function YO(a){a.i=(new IJ(a.j)).nc.Ie();kt(a.i,new ZO(a),(Mo(),Mo(),No));a.d=F(aw,q,38,[a.i])}\nfunction bP(){QK();var a,b,c,d,e;mL.call(this,(EL(),FL),null,!0);this.Cg();this.db=!0;a=new TO(this.k);this.f=new UO;this.f.pb.style[Xg]=bb;Ms(this.f,bb);this.Ag();HK(this,"400px");e=new WO;e.pb.style[le]=bb;e.e[fd]=10;c=(xu(),yu);e.a=c;VO(e,a);VO(e,this.f);this.e=new Mu;this.e.e[fd]=20;for(b=this.d,c=0,d=b.length;c<d;++c)a=b[c],Ju(this.e,a);VO(e,this.e);VK(this,e);RJ(this,!1);this.Bg()}r(623,624,cG,bP);_.Ag=function(){YO(this)};\n_.Bg=function(){var a=this.f;a.pb.readOnly=!0;var b=Ps(a.pb)+"-readonly";Ls(a.td(),b,!0)};_.Cg=function(){QJ(this.I.b,"Copy")};_.d=null;_.e=null;_.f=null;_.i=null;_.j="Close";_.k="Press Ctrl-C (Command-C on Mac) or right click (Option-click on Mac) on the selected text to copy it, then paste into another program.";function ZO(a){this.a=a}r(626,1,{},ZO);_.Xc=function(){XK(this.a,!1)};_.a=null;function cP(a){this.a=a}r(627,1,{},cP);\n_.Dc=function(){gt(this.a.f.pb,!0);fv(this.a.f.pb);var a=this.a.f,b;b=Xm(a.pb,Rg).length;if(0<b&&a.kb){if(0>b)throw new uD("Length must be a positive integer. Length: "+b);if(b>Xm(a.pb,Rg).length)throw new uD("From Index: 0  To Index: "+b+"  Text Length: "+Xm(a.pb,Rg).length);var a=a.pb,c=0;try{var d=a.createTextRange(),e=a.value.substr(c,b).match(/(\\r\\n)/gi);null!=e&&(b-=e.length);var f=a.value.substring(0,c).match(/(\\r\\n)/gi);null!=f&&(c-=f.length);d.collapse(!0);d.moveStart("character",c);d.moveEnd("character",\nb);d.select()}catch(g){}}};_.a=null;function dP(a){YO(a);a.a=(new IJ(a.b)).nc.Ie();kt(a.a,new eP(a),(Mo(),Mo(),No));a.d=F(aw,q,38,[a.a,a.i])}function fP(a){a.j="Cancel";a.k="Paste the text to import into the text area below.";a.b="Accept";QJ(a.I.b,"Paste")}function gP(a){QK();bP.call(this);this.c=a}r(629,623,cG,gP);_.Ag=function(){dP(this)};_.Bg=function(){Ms(this.f,"150px")};_.Cg=function(){fP(this)};_.Td=function(){lL(this);Lm((Im(),Jm),new hP(this))};_.a=null;_.b=null;_.c=null;\nfunction iP(a){QK();gP.call(this,a)}r(628,629,cG,iP);_.Ag=function(){var a;dP(this);a=new SO;kt(a,new jP(this),(uH(),uH(),vH));this.d=F(aw,q,38,[this.a,a,this.i])};_.Bg=function(){Ms(this.f,"150px");var a=new kP(this),b=this.f;RO(b,new lP,(HO(),HO(),IO));RO(b,new mP,(DO(),DO(),EO));RO(b,new nP,(KO(),KO(),LO));RO(b,new oP(a),(NO(),NO(),OO))};_.Cg=function(){fP(this);this.k+=" Or drag and drop a file on it."};function jP(a){this.a=a}r(630,1,{},jP);\n_.Wc=function(a){var b,c;b=new FileReader;a=(c=a.a.srcElement,c.files[0]);pP(b,new qP(this));b.readAsText(a)};_.a=null;function qP(a){this.a=a}r(631,1,{},qP);_.Dg=function(a){Ny();Nv(this.a.a.f,a)};_.a=null;r(634,1,{});r(633,634,{});_.b=null;_.c=1;_.d=-1;function kP(a){this.a=a;this.b=new rP(this);this.c=this.d=1}r(632,633,{},kP);_.a=null;function rP(a){this.a=a}r(635,1,{},rP);_.Dg=function(a){this.a.a.f.pb[Rg]=null!=a?a:l};_.a=null;function eP(a){this.a=a}r(639,1,{},eP);\n_.Xc=function(){if(this.a.c){var a=this.a.c,b;b=new Ky(a.a,0,Xm(this.a.f.pb,Rg));iC(a.a.a,b.a)}XK(this.a,!1)};_.a=null;function hP(a){this.a=a}r(640,1,{},hP);_.Dc=function(){gt(this.a.f.pb,!0);fv(this.a.f.pb)};_.a=null;r(641,1,Ah);_.Oc=function(){var a,b;a=new sP(this.a);void 0!=$wnd.FileReader?b=new iP(a):b=new gP(a);JK(b);XO(b)};function sP(a){this.a=a}r(642,1,{},sP);_.a=null;r(643,1,Ah);\n_.Oc=function(){var a;a=new bP;var b=this.a,c;Nv(a.f,b);b=(c=yD(b,"\\r\\n|\\r|\\n|\\n\\r"),c.length);Ms(a.f,20*(10>b?b:10)+Af);Lm((Im(),Jm),new cP(a));JK(a);XO(a)};function pP(a,b){a.onload=function(a){b.Dg(a.target.result)}}function QO(a,b){a.onloadend=function(a){b.Dg(a.target.result)}}function oP(a){this.a=a}r(648,1,{},oP);_.a=null;function lP(){}r(649,1,{},lP);function mP(){}r(650,1,{},mP);function nP(){}r(651,1,{},nP);Y(634);Y(633);Y(648);Y(649);Y(650);Y(651);Y(203);Y(205);Y(204);Y(206);Y(207);Y(623);\nY(629);Y(628);Y(642);Y(626);Y(627);Y(639);Y(640);Y(630);Y(631);Y(632);Y(635);Y(327);Y(376);Y(367);Y(323);x(aG)(5);\n//@ sourceURL=5.js\n')