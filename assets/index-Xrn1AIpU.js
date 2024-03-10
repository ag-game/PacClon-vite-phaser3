var t=Object.defineProperty,e=(e,a,s)=>(((e,a,s)=>{a in e?t(e,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[a]=s})(e,"symbol"!=typeof a?a+"":a,s),s);import{p as a}from"./phaser-cxBNu8M8.js";!function(){const t=document.createElement("link").relList;if(!(t&&t.supports&&t.supports("modulepreload"))){for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver((t=>{for(const a of t)if("childList"===a.type)for(const t of a.addedNodes)"LINK"===t.tagName&&"modulepreload"===t.rel&&e(t)})).observe(document,{childList:!0,subtree:!0})}function e(t){if(t.ep)return;t.ep=!0;const e=function(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),"use-credentials"===t.crossOrigin?e.credentials="include":"anonymous"===t.crossOrigin?e.credentials="omit":e.credentials="same-origin",e}(t);fetch(t.href,e)}}();const s=class t{static getPuntos(){return t.puntos}static getNivel(){return t.nivel}static getRecord(){return t.hi}static getVidas(){return t.vidas}static getTxtScore(){return t.txtScore}static isFantasmasScary(){return t.fantasmasScary.activo}static getFantasmasScaryDuracion(){return t.fantasmasScary.duracion}static getFantasmasBonusInc(){return t.fantasmasBonusInc}static isGameOver(){return t.gameOver}static isBotonesYcruceta(){return t.botonesYcruceta}static getCerezasIniXY(){return t.cerezasIniXY}static getBonusCerezas(){return t.bonusCerezas}static getCoorCruceta(){return t.coorCruceta}static getScreen(){return t.screen}static getDepth(){return t.depth}static getCameraControles(){return t.cameraControles}static getCameraScores(){return t.cameraScores}static setPuntos(e){t.puntos=e}static setNivel(e){t.nivel=e}static setRecord(e){t.hi=e}static setVidas(e){t.vidas=e}static setFantasmasScary(e){t.fantasmasScary.activo=e}static setFantasmasScaryDuracion(e){t.fantasmasScary.duracion=e}static setFantasmasBonusInc(e){t.fantasmasBonusInc.contador=e}static setGameOver(e){t.gameOver=e}static setBotonesYcruceta(e){t.botonesYcruceta=e}static setScreen(e,a,s,i){t.screen.width=e,t.screen.height=a,t.screen.escBoundsX=s,t.screen.escBoundsY=i}static setDepth(e,a,s,i,o,n,r){t.depth.fondo=e,t.depth.puntitos=a,t.depth.pared=s,t.depth.item=i,t.depth.jugador=o,t.depth.fantasmas=n,t.depth.textos=r}};e(s,"screen",{width:800,height:550,escBoundsX:1.45,escBoundsY:1.6}),e(s,"tileXY",{x:64,y:64}),e(s,"puntos",0),e(s,"nivel",1),e(s,"hi",12e3),e(s,"vidas",3),e(s,"gameOver",!1),e(s,"txtScore"," Score: "),e(s,"pausa",{inicial:4300,pacmanDies:3100,comeFantasma:!1,comeFantasmaDuracion:500,nivelSuperado:!1,nivelSuperadoDuracion:3e3}),e(s,"pacman",{iniX:9,iniY:4,vel:4}),e(s,"pacmanPregame",{iniX:-4,iniY:2,vel:4}),e(s,"fantasmasIniXY",{azul:[4,8],rojo:[8,8],verde:[12,8],pink:[16,8]}),e(s,"fantasmasScary",{activo:!1,duracion:8e3}),e(s,"fantasmasBonusInc",{puntos:[200,400,800,1600],color:["#f91","#f61","#f41","#f21"],contador:0,duracion:3200}),e(s,"cerezasIniXY",[9,8]),e(s,"bonusCerezas",[300,300,500,800,1e3,2e3,3e3,5e3,5e3,5e3,5e3,5e3,5e3,5e3,5e3]),e(s,"botonesYcruceta",!1),e(s,"coorCruceta",{xx:60,yy:1400,sizeX:2.5,sizeY:2.1}),e(s,"cameraControles",{x:0,y:300,ancho:800,alto:290,scrollX:0,scrollY:1250}),e(s,"cameraScores",{x:0,y:0,ancho:800,alto:34,scrollX:0,scrollY:-90}),e(s,"depth",{fondo:0,puntitos:10,pared:20,item:30,jugador:40,fantasmas:50,textos:60}),e(s,"array_laberinto",[[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],[9,5,1,1,1,1,1,1,1,9,1,1,1,1,1,1,1,5,9],[9,1,9,9,1,9,9,9,1,9,1,9,9,9,1,9,9,1,9],[9,1,9,9,1,9,9,9,1,9,1,9,9,9,1,9,9,1,9],[9,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,9],[9,1,9,9,1,9,1,9,9,9,9,9,1,9,1,9,9,1,9],[9,1,1,1,1,9,1,1,1,9,1,1,1,9,1,1,1,1,9],[9,9,9,9,1,9,9,9,1,9,1,9,9,9,1,9,9,9,9],[9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9],[9,1,9,9,1,9,1,9,1,9,1,9,1,9,1,9,9,1,9],[9,1,9,9,1,9,1,9,1,9,1,9,1,9,1,9,9,1,9],[0,1,1,1,1,9,1,1,1,1,1,1,1,9,1,1,1,1,0],[9,1,9,9,1,9,1,9,9,9,9,9,1,9,1,9,9,1,9],[9,5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,9],[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]]);let i=s;class o{constructor(t,e){this.relatedScene=t,this.datos=e}create(){const t=i.getBonusCerezas().concat(i.getFantasmasBonusInc().puntos).map((t=>t.toString()));t.push(" Congratulations! "),t.push(" Level Up! "),console.log(t);const{x:e,y:a,txt:s,size:o,color:n,style:r,stroke:c,sizeStroke:h,shadowOsx:l,shadowOsy:d,shadowColor:g,bool1:u,bool2:m,origin:p,elastic:f,dura:y}=this.datos;this.texto=this.relatedScene.add.text(e,a,s,{fontSize:o+"px",fill:n,fontFamily:"verdana, arial, sans-serif",fontStyle:r}),this.texto.setOrigin(p[0],p[1]),this.texto.setStroke(c,h),this.texto.setShadow(l,d,g,2,u,m),this.decremento_alpha(s,t),this.elastic(s,f,y),console.log(this.texto)}decremento_alpha(t,e){e.includes(t)&&" Congratulations! "!==t&&this.relatedScene.tweens.add({targets:this.texto,alpha:0,ease:"Sine.easeInOut",duration:i.getFantasmasBonusInc().duracion})}elastic(t,e,a){a>0&&this.relatedScene.tweens.add({targets:this.texto,y:e,ease:"Elastic",duration:a})}get(){return this.texto}}class n extends a.Scene{constructor(){super("Boot")}init(){this.txt=new o(this,{x:Math.floor(this.sys.game.config.width/2),y:Math.floor(this.sys.game.config.height/2),txt:" Toque pantalla o haga \n click para comenzar... ",size:50,color:"#fff",style:"bold",stroke:"#ee9011",sizeStroke:16,shadowOsx:2,shadowOsy:2,shadowColor:"#111111",bool1:!1,bool2:!0,origin:[.5,.5],elastic:!1,dura:0})}preload(){this.load.image("background","assets/bg.png"),this.load.image("fondo","assets/fondo_pacmanPh.png")}create(){this.add.image(0,0,"background").setOrigin(0,0),this.txt.create(),this.input.on("pointerdown",(()=>this.scene.start("Preloader"))),console.log(this.txt)}}const r=class t{constructor(t){this.relatedScene=t}create(){this.tile=this.relatedScene.physics.add.staticGroup();for(let e=0;e<t.array_laberinto.length;e++)for(let a=0;a<t.array_laberinto[e].length;a++){const s=t.array_laberinto[e][a];9===s&&this.tile.create(a*i.tileXY.x,e*i.tileXY.y,`tile${i.getNivel()}`).refreshBody(),9!==s&&1===i.getNivel()&&this.tile.create(a*i.tileXY.x,e*i.tileXY.y,`tile-suelo${i.getNivel()}`).refreshBody()}console.log(this.tile)}static check_colision(e,a){return 9===t.array_laberinto[a][e]}get(){return this.tile}};e(r,"array_laberinto",[[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],[9,5,1,1,1,1,1,1,1,9,1,1,1,1,1,1,1,5,9],[9,1,9,9,1,9,9,9,1,9,1,9,9,9,1,9,9,1,9],[9,1,9,9,1,9,9,9,1,9,1,9,9,9,1,9,9,1,9],[9,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,9],[9,1,9,9,1,9,1,9,9,9,9,9,1,9,1,9,9,1,9],[9,1,1,1,1,9,1,1,1,9,1,1,1,9,1,1,1,1,9],[9,9,9,9,1,9,9,9,1,9,1,9,9,9,1,9,9,9,9],[9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9],[9,1,9,9,1,9,1,9,1,9,1,9,1,9,1,9,9,1,9],[9,1,9,9,1,9,1,9,1,9,1,9,1,9,1,9,9,1,9],[0,1,1,1,1,9,1,1,1,1,1,1,1,9,1,1,1,1,0],[9,1,9,9,1,9,1,9,9,9,9,9,1,9,1,9,9,1,9],[9,5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,9],[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]]);let c=r;function h(t,e,a,s,i,o,n,r,c,h){const l=h.add.particles(t,e,a,{speed:s,lifespan:i,scale:o,tint:n,blendMode:"ADD"});c&&l.startFollow(r)}function l(t){const e=i.getPuntos()+t.getData("puntos");i.setPuntos(e)}function d(t,e,a){t.play(),t.loop=e,t.volume=a}class g{constructor(t){this.relatedScene=t}create(){this.puntito=this.relatedScene.physics.add.staticGroup();for(let t=0;t<c.array_laberinto.length;t++)for(let e=0;e<c.array_laberinto[t].length;e++)1===c.array_laberinto[t][e]&&this.puntito.create(e*i.tileXY.x,t*i.tileXY.y,"puntito").setScale(.25).setData("puntos",10).refreshBody();console.log(this.puntito)}get(){return this.puntito}}class u{constructor(t){this.relatedScene=t}create(){this.puntitosgordos=this.relatedScene.physics.add.staticGroup();for(let t=0;t<c.array_laberinto.length;t++)for(let e=0;e<c.array_laberinto[t].length;e++)5===c.array_laberinto[t][e]&&this.puntitosgordos.create(e*i.tileXY.x,t*i.tileXY.y,"puntito").setData("puntos",50).setScale(1.6).refreshBody();this.relatedScene.tweens.add({targets:this.puntitosgordos.getChildren(),scale:.8,tint:new Phaser.Display.Color(255,Phaser.Math.Between(150,255),255).color,yoyo:!0,duration:900,repeat:-1}),this.puntitosgordos.children.iterate((t=>{h(t.x,t.y,"sparkle",100,500,{start:.17,end:0},16777045,null,!1,this.relatedScene)})),console.log(this.puntitosgordos)}get(){return this.puntitosgordos}}const m=class t{constructor(t){this.relatedScene=t}create(t,e){this.jugador=this.relatedScene.physics.add.sprite(t,e,"pacman"),this.jugador.setAngle(0).setCircle(Math.floor(i.tileXY.y/3),Math.floor(i.tileXY.x/6),Math.floor(i.tileXY.y/6)),this.intentoGiro="right",this.direccion=this.intentoGiro,this.relatedScene.anims.remove("le-ri-up-do"),this.relatedScene.anims.create({key:"le-ri-up-do",frames:this.relatedScene.anims.generateFrameNumbers("pacman",{start:0,end:6}),frameRate:30,yoyo:!0,repeat:-1}),this.relatedScene.anims.create({key:"turn",frames:[{key:"pacman",frame:0}],frameRate:20}),this.jugador.anims.play("le-ri-up-do",!0),this.controles=this.relatedScene.input.keyboard.createCursorKeys(),console.log(this.jugador)}update(){if(!this.jugador.body.enable||i.pausa.comeFantasma||i.pausa.nivelSuperado)return;const e=t.INFO_DIRECCION;if(Object.keys(t.INFO_DIRECCION).forEach((t=>{this.controles[t].isDown&&(this.intentoGiro=t),i.isBotonesYcruceta()&&(this.relatedScene.crucetaup.isDown?this.intentoGiro="up":this.relatedScene.crucetadown.isDown?this.intentoGiro="down":this.relatedScene.crucetaleft.isDown?this.intentoGiro="left":this.relatedScene.crucetaright.isDown&&(this.intentoGiro="right"))})),this.jugador.x%i.tileXY.x==0&&this.jugador.y%i.tileXY.y==0){const t=Math.floor(this.jugador.x/i.tileXY.x)+e[this.intentoGiro][0],a=Math.floor(this.jugador.y/i.tileXY.y)+e[this.intentoGiro][1];9!==c.array_laberinto[a][t]&&(this.direccion=this.intentoGiro,this.jugador.setAngle(e[this.direccion][4]))}const a=e[this.direccion][2]*(i.tileXY.x-t.VEL),s=e[this.direccion][3]*(i.tileXY.y-t.VEL),o=e[this.direccion][0]*t.VEL,n=e[this.direccion][1]*t.VEL,r=Math.floor((this.jugador.x+o+a)/i.tileXY.x),h=Math.floor((this.jugador.y+n+s)/i.tileXY.y);9!==c.array_laberinto[h][r]&&(this.jugador.x+=e[this.direccion][0]*t.VEL,this.jugador.y+=e[this.direccion][1]*t.VEL,this.jugador.x>c.array_laberinto[0].length*i.tileXY.x&&e[this.direccion][0]>0&&(this.jugador.x=-i.tileXY.x),this.jugador.x<-i.tileXY.x&&e[this.direccion][0]<0&&(this.jugador.x=(c.array_laberinto[0].length-1)*i.tileXY.x))}get(){return this.jugador}};e(m,"VEL",4),e(m,"INFO_DIRECCION",{left:[-1,0,0,0,180],right:[1,0,1,0,0],up:[0,-1,0,0,270],down:[0,1,0,1,90]});let p=m;class f{constructor(t){this.relatedScene=t}create(t,e){this.jugadordies=this.relatedScene.physics.add.sprite(t,e,"pacman"),this.jugadordies.setFrame(4),this.relatedScene.tweens.add({targets:this.jugadordies,angle:359,duration:1e3,repeat:2}),console.log(this.jugadordies)}get(){return this.jugadordies}}class y{constructor(t,e){this.relatedScene=t,this.args=e}create(){const{left:t,top:e}=this.args;this.jugadorshowvidas=this.relatedScene.physics.add.group({key:["pacman"],frameQuantity:i.getVidas(),setXY:{x:t,y:e,stepX:i.tileXY.x},frame:4}),this.jugadorshowvidas.children.iterate((t=>{t.setOrigin(.5,0).setScale(1,.7).setBlendMode(Phaser.BlendModes.ADD)})),console.log(this.jugadorshowvidas)}get(){return this.jugadorshowvidas}}class x{constructor(t){this.relatedScene=t}create(t,e){this.jugadorpregame=this.relatedScene.physics.add.sprite(t,e,"pacman"),this.jugadorpregame.setAngle(0),this.relatedScene.anims.create({key:"le-ri-up-do",frames:this.relatedScene.anims.generateFrameNumbers("pacman",{start:0,end:6}),frameRate:30,yoyo:!0,repeat:-1}),this.jugadorpregame.anims.play("le-ri-up-do",!0),this.relatedScene.tweens.add({targets:this.jugadorpregame,x:this.relatedScene.sys.game.config.width+2*i.tileXY.x,yoyo:!0,duration:8e3,repeat:-1}),setInterval((()=>{this.jugadorpregame.setFlipX(!this.jugadorpregame.flipX)}),8e3),console.log(this.jugadorpregame)}}const S=class t{constructor(t){this.relatedScene=t}create(){this.fantasmas=this.relatedScene.physics.add.group({key:["fantanim0","fantanim1","fantanim2","fantanim3"],frameQuantity:1,setXY:{x:i.fantasmasIniXY.azul[0]*i.tileXY.x,y:i.fantasmasIniXY.azul[1]*i.tileXY.y,stepX:3*i.tileXY.x}}),this.fantasmas.children.iterate(((t,e)=>{t.setData("intentoGiro","right"),t.setData("direccion","right"),t.setData("id",e),t.setCircle(Math.floor(i.tileXY.y/3),Math.floor(i.tileXY.x/12),Math.floor(i.tileXY.y/12)),t.setAngle(0).setScale(1.15,1.15).setFrame(0).setFlipX(!1)})),this.fantasmas.children.iterate(((t,e)=>{for(let a=0;a<4;a++)this.relatedScene.anims.remove(`anim${e}${a}`),this.relatedScene.anims.create({key:`anim${e}${a}`,frames:this.relatedScene.anims.generateFrameNumbers(`fantanim${e}${a}`,{start:0,end:1}),frameRate:8,yoyo:!0,repeat:-1});t.anims.play(`anim${e}0`,!0)})),console.log(this.fantasmas)}update(){if(!this.relatedScene.jugador.get().body.enable||i.pausa.comeFantasma||i.pausa.nivelSuperado)return;const e=t.INFO_DIRECCION;this.fantasmas.children.iterate(((a,s)=>{i.isFantasmasScary()&&a.setTint(new Phaser.Display.Color(0,Phaser.Math.Between(60,200),Phaser.Math.Between(60,255)).color);let o,n=0,r=0;for(let e=0;e<t.ptosClave.length;e++){let n=t.ptosClave[e][0]*i.tileXY.x,r=t.ptosClave[e][1]*i.tileXY.y;a.x==n&&a.y==r&&(o=Phaser.Math.Between(0,10),o<7+i.getNivel()&&(this.fantasma_persigue(a),this.set_flips(a,s)))}n=Math.floor((a.x+e[a.getData("direccion")][0]+i.tileXY.x*e[a.getData("direccion")][2])/i.tileXY.x),r=Math.floor((a.y+e[a.getData("direccion")][1]+i.tileXY.y*e[a.getData("direccion")][3])/i.tileXY.y),c.check_colision(n,r)?(o=Phaser.Math.Between(0,10),o<5+i.getNivel()?this.fantasma_persigue(a):a.setData("direccion",this.elegir_otra_direccion(e,a)),this.set_flips(a,s)):(a.x+=e[a.getData("direccion")][0]*t.VEL,a.y+=e[a.getData("direccion")][1]*t.VEL,a.x>c.array_laberinto[0].length*i.tileXY.x&&"right"===a.getData("direccion")&&(a.x=-i.tileXY.x),a.x<-i.tileXY.x&&"left"===a.getData("direccion")&&(a.x=(c.array_laberinto[0].length-1)*i.tileXY.x))}))}elegir_otra_direccion(e,a){let s=e[a.getData("direccion")][5];return t.OTRA_DIRECCION_RND[s][Math.floor(3*Math.random())]}fantasma_persigue(t){Phaser.Math.Between(0,10)<5?t.y<this.relatedScene.jugador.get().y?t.setData("direccion","down"):t.setData("direccion","up"):t.x<this.relatedScene.jugador.get().x?t.setData("direccion","right"):t.setData("direccion","left")}set_flips(t,e){"left"===t.getData("direccion")?t.anims.play(`anim${e}1`,!0):"right"===t.getData("direccion")?t.anims.play(`anim${e}0`,!0):"up"===t.getData("direccion")?t.anims.play(`anim${e}2`,!0):"down"===t.getData("direccion")&&t.anims.play(`anim${e}3`,!0)}duracion_scary(){let t=i.getFantasmasScaryDuracion()-900*i.getNivel();return console.log(t),t<1900?1900:t}clear_tint(){this.fantasmas.children.iterate((t=>{t.visible?t.clearTint():(t.setVisible(!0).clearTint(),this.relatedScene.ojos.get().getChildren()[t.getData("id")].setVisible(!1))}))}get(){return this.fantasmas}};e(S,"VEL",4),e(S,"INFO_DIRECCION",{left:[-1,0,0,0,180,"left"],right:[1,0,1,0,0,"right"],up:[0,-1,0,0,270,"up"],down:[0,1,0,1,90,"down"]}),e(S,"OTRA_DIRECCION_RND",{left:["right","up","down"],right:["left","up","down"],up:["right","left","down"],down:["right","left","up"]}),e(S,"ptosClave",[[4,1],[14,1],[4,4],[6,4],[12,4],[14,4],[4,8],[6,8],[12,8],[14,8],[1,11],[4,11],[6,11],[12,11],[14,11],[17,11],[4,13],[6,13],[12,13],[14,13]]);let b=S;class w{constructor(t){this.relatedScene=t}create(){this.fantasmaspregame=this.relatedScene.physics.add.group({key:["fantanim0","fantanim1","fantanim2","fantanim3"],frameQuantity:1,setXY:{x:(i.fantasmasIniXY.azul[0]-12)*i.tileXY.x,y:(i.fantasmasIniXY.azul[1]-7)*i.tileXY.y,stepX:i.tileXY.x}}),this.fantasmaspregame.children.iterate((t=>{t.setAngle(0).setScale(1.15,1.15).setFrame(0).setFlipX(!1)})),this.fantasmaspregame.children.iterate(((t,e)=>{for(let a=0;a<4;a++)this.relatedScene.anims.create({key:`anim${e}${a}`,frames:this.relatedScene.anims.generateFrameNumbers(`fantanim${e}${a}`,{start:0,end:1}),frameRate:8,yoyo:!0,repeat:-1});t.anims.play(`anim${e}0`,!0),this.relatedScene.tweens.add({targets:t,x:this.relatedScene.sys.game.config.width+2*i.tileXY.x,yoyo:!0,duration:9e3,repeat:-1}),setInterval((()=>{t.setFlipX(!t.flipX)}),9e3)})),console.log(this.fantasmaspregame)}}class X{constructor(t){this.relatedScene=t}create(){this.ojosfantasma=this.relatedScene.physics.add.group({key:["fantanim5","fantanim5","fantanim5","fantanim5"],frameQuantity:1,setXY:{x:(i.fantasmasIniXY.azul[0]-12)*i.tileXY.x,y:(i.fantasmasIniXY.azul[1]-7)*i.tileXY.y,stepX:i.tileXY.x}}),this.ojosfantasma.children.iterate((t=>{t.setAngle(0).setScale(1.15,1.15).setFrame(0).setFlipX(!1).setVisible(!1)})),this.ojosfantasma.children.iterate(((t,e)=>{for(let a=0;a<4;a++)this.relatedScene.anims.create({key:`anim5${a}`,frames:this.relatedScene.anims.generateFrameNumbers(`fantanim5${a}`,{start:0,end:1}),frameRate:8,yoyo:!0,repeat:-1});t.anims.play("anim50",!0)})),console.log(this.ojosfantasma)}update(){this.ojosfantasma.children.iterate(((t,e)=>{const a=this.relatedScene.fantasmas.get().getChildren()[e];this.set_flips(a,t),t.setX(a.x),t.setY(a.y)}))}set_flips(t,e){"left"===t.getData("direccion")?e.anims.play("anim51",!0):"right"===t.getData("direccion")?e.anims.play("anim50",!0):"up"===t.getData("direccion")?e.anims.play("anim52",!0):"down"===t.getData("direccion")&&e.anims.play("anim53",!0)}get(){return this.ojosfantasma}}const Y=class t{constructor(t){this.relatedScene=t}create(){this.cerezas=this.relatedScene.physics.add.sprite(i.getCerezasIniXY()[0]*i.tileXY.x,i.getCerezasIniXY()[1]*i.tileXY.y,"cerezas"),this.cerezas.setData("intentoGiro","right"),this.cerezas.setData("direccion","right"),this.cerezas.setData("puntos",i.getBonusCerezas()[i.getNivel()]),this.cerezas.setCircle(Math.floor(i.tileXY.y/3)),this.cerezas.setAngle(-20).setScale(.8).setFrame(0).setFlipX(!1),this.relatedScene.tweens.add({targets:this.cerezas,angle:20,ease:"linear",yoyo:!0,duration:2e3,repeat:-1}),console.log(this.cerezas)}update(){if(!this.relatedScene.jugador.get().body.enable)return;const e=t.INFO_DIRECCION,a=Math.floor((this.cerezas.x+e[this.cerezas.getData("direccion")][0]+i.tileXY.x*e[this.cerezas.getData("direccion")][2])/i.tileXY.x),s=Math.floor((this.cerezas.y+e[this.cerezas.getData("direccion")][1]+i.tileXY.y*e[this.cerezas.getData("direccion")][3])/i.tileXY.y);c.check_colision(a,s)?this.cerezas.setData("direccion",this.elegir_otra_direccion(e,this.cerezas)):(this.cerezas.x+=e[this.cerezas.getData("direccion")][0]*t.VEL,this.cerezas.y+=e[this.cerezas.getData("direccion")][1]*t.VEL,this.cerezas.x>c.array_laberinto[0].length*i.tileXY.x&&"right"===this.cerezas.getData("direccion")&&(this.cerezas.x=-i.tileXY.x),this.cerezas.x<-i.tileXY.x&&"left"===this.cerezas.getData("direccion")&&(this.cerezas.x=(c.array_laberinto[0].length-1)*i.tileXY.x))}elegir_otra_direccion(e,a){let s=e[a.getData("direccion")][5];return t.OTRA_DIRECCION_RND[s][Math.floor(3*Math.random())]}get(){return this.cerezas}};e(Y,"VEL",2),e(Y,"INFO_DIRECCION",{left:[-1,0,0,0,180,"left"],right:[1,0,1,0,0,"right"],up:[0,-1,0,0,270,"up"],down:[0,1,0,1,90,"down"]}),e(Y,"OTRA_DIRECCION_RND",{left:["right","up","down"],right:["left","up","down"],up:["right","left","down"],down:["right","left","up"]});let _=Y;class v{constructor(t,e){this.relatedScene=t,this.datos=e}create(){const{x:t,y:e,size:a,txt:s,color:o,id:n}=this.datos;let r="";0===n&&(r=`${s}${i.getPuntos()}`),1===n&&(r=`${s}${i.getNivel()}`),2===n&&(r=`${s}${i.getRecord()}`),this.marcador=this.relatedScene.add.text(t,e,r,{fontSize:a+"px",fill:o,fontFamily:"verdana, arial, sans-serif",fontStyle:"bold"}),this.marcador.setStroke("#ee9011",16).setShadow(2,2,"#111111",2,!1,!0),console.log(this.marcador)}update(t,e){this.marcador.setText(`${t}${e}`)}get(){return this.marcador}}class D{constructor(t){this.relatedScene=t}create(t,e){this.relatedScene.sys.game.config.width,this.relatedScene.sys.game.config.height;const a=i.getNivel()>1?"boton-continuar":"boton-nueva-partida";this.boton=this.relatedScene.add.sprite(e[0],e[1],a).setInteractive(),this.boton.setScale(.6),this.boton.setAngle(1),this.boton.setTint(new Phaser.Display.Color(255,255,105).color),this.boton.on("pointerover",(()=>{this.boton.setScale(.8)})),this.boton.on("pointerout",(()=>{this.boton.setScale(.6)})),this.boton.on("pointerdown",(()=>{this.relatedScene.scene.start(t)})),this.relatedScene.tweens.add({targets:this.boton,angle:359,ease:"Elastic",yoyo:!0,hold:1900,duration:2e3,repeat:-1})}}class z{constructor(t){this.relatedScene=t}create(t){const e=this.relatedScene.sys.game.config.width,a=this.relatedScene.sys.game.config.height;this.boton=this.relatedScene.add.sprite(Math.floor(e/2),Math.floor(a/1.1),"boton-settings").setInteractive(),this.boton.setScale(.5),this.boton.setAngle(0),this.boton.setTint(new Phaser.Display.Color(255,255,115).color),this.boton.on("pointerover",(()=>{this.boton.setScale(.8)})),this.boton.on("pointerout",(()=>{this.boton.setScale(.5)})),this.boton.on("pointerdown",(()=>{this.relatedScene.scene.start(t)})),this.relatedScene.tweens.add({targets:this.boton,y:Math.floor(a/1),ease:"Sine.easeIn",yoyo:!0,duration:2700,repeat:-1})}}class C{constructor(t,e){this.relatedScene=t,this.args=e}create(){const{x:t,y:e}=this.args,a=Math.floor(28.8);this.boton=this.relatedScene.add.sprite(t,e+a,"boton-fullscreen").setInteractive(),this.boton.setScale(.9).setDepth(i.getDepth().textos).setFrame(0),this.boton.on("pointerover",(()=>{this.boton.setScale(1)})),this.boton.on("pointerout",(()=>{this.boton.setScale(.9)})),this.boton.on("pointerdown",(()=>{this.relatedScene.scale.isFullscreen?this.relatedScene.scale.stopFullscreen():this.relatedScene.scale.startFullscreen()}))}}class j{constructor(t,e){this.relatedScene=t,this.direccion=e}create(){const{id:t,press:e,x:a,y:s,ang:o,scX:n,scY:r}=this.direccion;this.boton=this.relatedScene.add.image(a,s,t).setInteractive(),this.boton.setScale(n,r).setAngle(o).setDepth(4),this.boton.setX(a).setY(s),this.boton.setData("on",!0),this.boton.setData("press",e),i.isBotonesYcruceta()||this.boton.setVisible(!1),this.isDown=!1,this.boton.on("pointerover",(()=>{this.boton.setScale(n+.1,r+.1)})),this.boton.on("pointerout",(()=>{this.boton.setScale(n,r)})),this.boton.on("pointerdown",(()=>{this.isDown=!0})),this.boton.on("pointerup",(()=>{this.isDown=!1})),console.log(this.boton)}get(){return this.boton}}class I{constructor(t,e){this.relatedScene=t,this.direccion=e}create(){const{x:t,y:e,id:a,ang:s,scX:o,scY:n}=this.direccion;this.iconogamepad=this.relatedScene.add.image(t,e,a).setInteractive(),this.iconogamepad.setScale(o,n).setAngle(s),this.iconogamepad.setDepth(4).setBlendMode(Phaser.BlendModes.ADD),this.iconogamepad.setX(t).setY(e),this.iconogamepad.setData("on",!0),i.isBotonesYcruceta()&&this.iconogamepad.setVisible(!1),this.isDown=!1,this.iconogamepad.on("pointerover",(()=>{this.iconogamepad.setScale(o+.4,n+.4)})),this.iconogamepad.on("pointerout",(()=>{this.iconogamepad.setScale(o,n)})),this.iconogamepad.on("pointerdown",(()=>{this.isDown=!0})),this.iconogamepad.on("pointerup",(()=>{this.isDown=!1})),console.log(this.iconogamepad)}get(){return this.iconogamepad}}class O{constructor(t){this.relatedScene=t}create(t,e){this.sonidoGameOver=this.relatedScene.sound.add("sonidoGameOverRetro"),this.txt=new o(this.relatedScene,{x:t,y:e-i.tileXY.y,txt:" Game Over ",size:90,color:"#dd9",style:"bold",stroke:"#f41",sizeStroke:16,shadowOsx:2,shadowOsy:2,shadowColor:"#111111",bool1:!1,bool2:!0,origin:[.5,.5],elastic:!1,dura:0}),this.txt.create(),this.txt.get().setAlpha(0),this.relatedScene.tweens.add({targets:this.txt.get(),alpha:1,duration:Math.floor(3500)}),this.timeline=this.relatedScene.add.timeline([{at:7e3,run:()=>{this.relatedScene.botonrejugar.create("MainMenu",[t,e+2*i.tileXY.y])}}]),this.timeline.play(),this.sonidoGameOver.play(),this.sonidoGameOver.volume=.5,this.check_newRecord()}update(){}check_newRecord(){i.getPuntos()>=i.getRecord()&&(i.setRecord(i.getPuntos()),this.txtnewrecord=new o(this,{x:Math.floor(this.relatedScene.sys.game.config.width/2),y:Math.floor(this.relatedScene.sys.game.config.height/3),txt:" Enhorabuena! \n Nuevo Record! ",size:50,color:"#ff9",style:"bold",stroke:"#5f1",sizeStroke:16,shadowOsx:2,shadowOsy:2,shadowColor:"#111111",bool1:!1,bool2:!0,origin:[.5,.5],elastic:!1,dura:0}),this.txtnewrecord.create(),this.tweens.add({targets:this.txtnewrecord.get(),scale:2.1,ease:"sine.out",duration:1e3,yoyo:!0,delay:500,repeat:-1,repeatDelay:3e3}))}get(){return this.txt}}class M extends Phaser.Scene{constructor(){super("game")}init(){i.setGameOver(!1),i.setFantasmasScary(!1),i.setFantasmasBonusInc(0),this.set_pausaInicial(4300),this.laberinto=new c(this),this.puntito=new g(this),this.puntitogordo=new u(this),this.jugador=new p(this),this.jugadordies=new f(this),this.fantasmas=new b(this),this.ojos=new X(this),this.cerezas=new _(this),this.instanciar_marcadores(),this.instanciar_mobileControls(),this.gameover=new O(this),this.botonrejugar=new D(this)}preload(){}create(){this.add.image(0,0,"fondo").setOrigin(0,0),this.set_sonidos(),this.set_cameras(),this.set_cameras_controles(),this.set_cameras_marcadores(),this.laberinto.create(),this.puntito.create(),this.puntitogordo.create(),this.jugador.create(i.pacman.iniX*i.tileXY.x,i.pacman.iniY*i.tileXY.y),this.fantasmas.create(),this.ojos.create(),this.cerezas.create(),this.jugadorshowvidas.create(),this.marcadorPtos.create(),this.marcadorNivel.create(),this.marcadorHi.create(),this.botonfullscreen.create(),this.crucetaleft.create(),this.crucetaright.create(),this.crucetaup.create(),this.crucetadown.create(),this.iconogamepad.create(),this.cameras.main.startFollow(this.jugador.get()),this.crear_colliders()}update(){this.pausa_inicial.activa||i.isGameOver()||(this.jugador.update(),this.fantasmas.update(),this.ojos.update(),this.cerezas.update()),this.puntito.get().countActive()<=0&&!i.pausa.nivelSuperado&&(i.pausa.nivelSuperado=!0,i.setFantasmasScary(!1),this.texto_enhorabuena(),setTimeout((()=>{i.pausa.nivelSuperado=!1,this.scene.start("congratulations")}),i.pausa.nivelSuperadoDuracion)),this.mobile_controls()}set_pausaInicial(t){this.pausa_inicial={duracion:t,activa:!0},this.txtpreparado=new o(this,{x:i.pacman.iniX*i.tileXY.x,y:0,txt:" Ready! ",size:78,color:"#ffa",style:"bold",stroke:"#ea1",sizeStroke:16,shadowOsx:2,shadowOsy:2,shadowColor:"#111111",bool1:!1,bool2:!0,origin:[.5,0],elastic:(i.pacman.iniY+1)*i.tileXY.y,dura:3e3}),this.txtpreparado.create(),this.txtpreparado.get().setDepth(i.getDepth().textos),this.timeline=this.add.timeline([{at:this.pausa_inicial.duracion,run:()=>{this.pausa_inicial.activa=!1,this.txtpreparado.get().setVisible(!1)}}]),this.timeline.play(),console.log(this.txtpreparado)}texto_enhorabuena(){this.txtcongrats=new o(this,{x:this.jugador.get().x,y:0,txt:" Congratulations! ",size:70,color:"#ffa",style:"bold",stroke:"#5f1",sizeStroke:16,shadowOsx:2,shadowOsy:2,shadowColor:"#111111",bool1:!1,bool2:!0,origin:[.5,.5],elastic:this.jugador.get().y-i.tileXY.y,dura:3e3}),this.txtcongrats.create(),this.txtcongrats.get().setDepth(i.getDepth().textos)}crear_colliders(){this.physics.add.overlap(this.jugador.get(),this.puntito.get(),((t,e)=>{l(e),this.marcadorPtos.update(i.getTxtScore(),i.getPuntos()),e.disableBody(!0,!0),d(this.sonido_waka,!1,.9)})),this.physics.add.overlap(this.jugador.get(),this.puntitogordo.get(),((t,e)=>{l(e),this.marcadorPtos.update(i.getTxtScore(),i.getPuntos()),e.disableBody(!0,!0),i.setFantasmasScary(!0),setTimeout((()=>{i.setFantasmasScary(!1),this.fantasmas.clear_tint(),this.sonido_fantasmasScary.pause(),i.setFantasmasBonusInc(0)}),this.fantasmas.duracion_scary()),d(this.sonido_eatingGhost,!1,.9),setTimeout((()=>d(this.sonido_fantasmasScary,!0,.9)),500)}),(()=>!i.isFantasmasScary())),this.physics.add.overlap(this.jugador.get(),this.fantasmas.get(),((t,e)=>{if(i.isFantasmasScary()){d(this.sonido_eatingGhost,!1,.9),e.setVisible(!1),this.ojos.get().getChildren()[e.getData("id")].setVisible(!0),i.pausa.comeFantasma=!0,setTimeout((()=>i.pausa.comeFantasma=!1),i.pausa.comeFantasmaDuracion),this.txt_bonusfantasmas=new o(this,{x:t.x,y:t.y,txt:i.getFantasmasBonusInc().puntos[i.getFantasmasBonusInc().contador].toString(),size:40,color:"#ff7",style:"bold",stroke:i.getFantasmasBonusInc().color[i.getFantasmasBonusInc().contador],sizeStroke:16,shadowOsx:2,shadowOsy:2,shadowColor:"#111111",bool1:!1,bool2:!0,origin:[.5,.5],elastic:t.y-i.tileXY.y,dura:2e3}),this.txt_bonusfantasmas.create(),this.txt_bonusfantasmas.get().setDepth(i.getDepth().textos).setAlpha(1);const a=i.getPuntos()+i.getFantasmasBonusInc().puntos[i.getFantasmasBonusInc().contador];i.setPuntos(a),this.marcadorPtos.update(i.getTxtScore(),i.getPuntos()),i.setFantasmasBonusInc(i.getFantasmasBonusInc().contador+1),i.getFantasmasBonusInc().contador>=4&&i.setFantasmasBonusInc(0)}else d(this.sonido_jugadorDies,!1,.7),t.disableBody(!0,!0),this.jugadordies.create(t.x,t.y),this.timeline=this.add.timeline([{at:i.pausa.pacmanDies,run:()=>{this.jugadordies.get().disableBody(!0,!0),this.jugador.get().enableBody(!0,i.pacman.iniX*i.tileXY.x,i.pacman.iniY*i.tileXY.x,!0,!0),this.jugador.intentoGiro="right",this.jugador.direccion="right",function(){const t=i.getVidas()-1;i.setVidas(t)}(),i.getVidas()<0&&(i.setGameOver(!0),this.jugador.get().setVisible(!1),this.gameover.create(this.jugador.get().x,this.jugador.get().y)),this.jugadorshowvidas.get().children.iterate(((t,e)=>{e===i.getVidas()&&t.setVisible(!1)})),this.fantasmas.get().children.iterate(((t,e)=>{i.isGameOver()?t.setVisible(!1):(t.setX(i.fantasmasIniXY[Object.keys(i.fantasmasIniXY)[e]][0]*i.tileXY.x),t.setY(i.fantasmasIniXY[Object.keys(i.fantasmasIniXY)[e]][1]*i.tileXY.y))}))}}]),this.timeline.play()}),((t,e)=>!!e.visible)),this.physics.add.overlap(this.jugador.get(),this.cerezas.get(),((t,e)=>{l(e),this.marcadorPtos.update(i.getTxtScore(),i.getPuntos()),e.disableBody(!0,!0),d(this.sonido_eatingCherry,!1,.9),this.txt_bonuscerezas=new o(this,{x:t.x,y:t.y,txt:e.getData("puntos").toString(),size:40,color:"#ffa",style:"bold",stroke:"#f51",sizeStroke:16,shadowOsx:2,shadowOsy:2,shadowColor:"#111111",bool1:!1,bool2:!0,origin:[.5,.5],elastic:t.y-i.tileXY.y,dura:2e3}),this.txt_bonuscerezas.create(),this.txt_bonuscerezas.get().setDepth(i.getDepth().textos).setAlpha(1),setTimeout((()=>{this.cerezas.get().enableBody(!0,i.getCerezasIniXY()[0]*i.tileXY.x,i.getCerezasIniXY()[1]*i.tileXY.y,!0,!0)}),15e3)}))}mobile_controls(){!i.isBotonesYcruceta()&&this.iconogamepad.isDown&&(i.setBotonesYcruceta(!0),this.iconogamepad.get().setVisible(!1),this.crucetaleft.get().setVisible(!0),this.crucetaright.get().setVisible(!0),this.crucetaup.get().setVisible(!0),this.crucetadown.get().setVisible(!0))}set_cameras(){this.cameras.main.setBounds(0,0,Math.floor(this.sys.game.config.width*i.getScreen().escBoundsX),Math.floor(this.sys.game.config.height*i.getScreen().escBoundsY)),this.physics.world.setBounds(0,0,Math.floor(this.sys.game.config.width*i.getScreen().escBoundsX),Math.floor(this.sys.game.config.height*i.getScreen().escBoundsY))}set_cameras_controles(){var{x:t,y:e,ancho:a,alto:s,scrollX:o,scrollY:n}=i.getCameraControles();this.mapa_controles=this.cameras.add(t,e,a,s).setZoom(.9).setName("view-controls").setAlpha(.7).setOrigin(0,0),this.mapa_controles.scrollX=o,this.mapa_controles.scrollY=n}set_cameras_marcadores(){var{x:t,y:e,ancho:a,alto:s,scrollX:o,scrollY:n}=i.getCameraScores();this.mapa_scores=this.cameras.add(t,e,a,s).setZoom(.6).setName("view-scores").setAlpha(1).setOrigin(0,0),this.mapa_scores.scrollX=o,this.mapa_scores.scrollY=n}instanciar_marcadores(){const t=this.sys.game.config.width;this.sys.game.config.height;this.jugadorshowvidas=new y(this,{left:Math.floor(1.4*t),top:-90}),this.marcadorPtos=new v(this,{x:10,y:-99,size:40,txt:i.getTxtScore(),color:"#fff",id:0}),this.marcadorNivel=new v(this,{x:Math.floor(t/2),y:-99,size:40,txt:" Level: ",color:"#ff5",id:1}),this.marcadorHi=new v(this,{x:Math.floor(t/1.2),y:-99,size:40,txt:" Record: ",color:"#fff",id:2}),this.botonfullscreen=new C(this,{x:Math.floor(1.33*t),y:-90})}instanciar_mobileControls(){var{xx:t,yy:e,sizeX:a,sizeY:s}=i.getCoorCruceta();this.crucetaleft=new j(this,{id:"cruceta-left",press:"left",x:t,y:e+55,ang:0,scX:a,scY:s}),this.crucetaright=new j(this,{id:"cruceta-right",press:"right",x:t+350,y:e+55,ang:0,scX:a,scY:s}),this.crucetaup=new j(this,{id:"cruceta-left",press:"up",x:t+175,y:e-80,ang:90,scX:a-.7,scY:s+.1}),this.crucetadown=new j(this,{id:"cruceta-left",press:"down",x:t+175,y:e+80,ang:270,scX:a-.5,scY:s+.1}),this.iconogamepad=new I(this,{id:"icono-gamepad",x:t+90,y:e,ang:0,scX:2,scY:2})}set_sonidos(){this.sonido_preparado=this.sound.add("sonidoPacmanInicioNivel"),d(this.sonido_preparado,!1,.8),this.sonido_waka=this.sound.add("sonidoWakaWaka"),this.sonido_jugadorDies=this.sound.add("sonidoPacmanDies"),this.sonido_eatingGhost=this.sound.add("sonidoPacmanEatingGhost"),this.sonido_eatingCherry=this.sound.add("sonidoPacmanEatingCherry"),this.sonido_fantasmasScary=this.sound.add("sonidoPacmanAzules"),this.sonido_sirena=this.sound.add("sonidoPacmanSirena")}}class F extends Phaser.Scene{constructor(){super({key:"congratulations"})}init(){this.botoninicio=new D(this)}create(){this.add.image(0,0,"fondo").setOrigin(0,0),this.incremento_nivel=i.getNivel()+1,this.sonido_intermision=this.sound.add("sonidoPacmanIntermision"),this.txt=new o(this,{x:Math.floor(this.sys.game.config.width/2),y:Math.floor(this.sys.game.config.height/3.5),txt:" Level Up! ",size:86,color:"#ffa",style:"bold",stroke:"#f91",sizeStroke:16,shadowOsx:2,shadowOsy:2,shadowColor:"#111111",bool1:!1,bool2:!0,origin:[.5,.5],elastic:!1,dura:0}),this.txt.create(),this.txt.get().setDepth(i.getDepth().textos).setAlpha(1),h(this.sys.game.config.width/2,this.sys.game.config.height/2,"sparkle",{min:90,max:320},{min:5500,max:6e3},{start:0,end:.4},16763921,null,!1,this),this.timeline=this.add.timeline([{at:3200,run:()=>{i.setNivel(this.incremento_nivel),this.botoninicio.create("game",[Math.floor(this.sys.game.config.width/2),Math.floor(this.sys.game.config.height/1.7)])}}]),this.timeline.play(),d(this.sonido_intermision,!1,.8),console.log(this.txt)}}class P extends a.Scene{constructor(){super("MainMenu")}init(){i.setPuntos(0),i.setNivel(1),i.setVidas(3),i.setGameOver(!1),i.setFantasmasScary(!1),i.setBotonesYcruceta(!1),i.setFantasmasBonusInc(0),this.botoninicio=new D(this),this.botonsettings=new z(this),this.jugador=new x(this),this.fantasmaspregame=new w(this)}create(){this.sonido_intermision=this.sound.add("sonidoPacmanIntermision"),this.add.image(0,0,"fondo").setOrigin(0,0),this.jugador.create(i.pacmanPregame.iniX*i.tileXY.x,i.pacmanPregame.iniY*i.tileXY.y),this.fantasmaspregame.create();const t=[Math.floor(this.sys.game.config.width/2),Math.floor(this.sys.game.config.height/20),Math.floor(this.sys.game.config.height/4)];this.txt=new o(this,{x:t[0],y:t[1],txt:" Pac Clon ",size:99,color:"#ffa",style:"bold",stroke:"#ea1",sizeStroke:16,shadowOsx:2,shadowOsy:2,shadowColor:"#111111",bool1:!1,bool2:!0,origin:[.5,0],elastic:t[2],dura:2500}),this.txt.create(),this.timeline=this.add.timeline([{at:4e3,run:()=>{this.botoninicio.create("game",[t[0],Math.floor(this.sys.game.config.height/1.5)]),this.botonsettings.create("game"),h(t[0],t[2]+50,"sparkle",{min:60,max:120},{min:2500,max:3e3},{start:.2,end:0},16763921,null,!1,this)}}]),this.timeline.play(),this.sonido_intermision.play(),this.sonido_intermision.volume=.5,console.log(this.txt)}update(){}}class k extends a.Scene{constructor(){super("Preloader")}init(){const t=this.sys.game.config.width,e=this.sys.game.config.height;this.add.image(0,0,"fondo").setOrigin(0,0),this.txt=new o(this,{x:Math.floor(t/2),y:Math.floor(e/4),txt:" Cargando... ",size:50,color:"#ffa",style:"bold",stroke:"",sizeStroke:0,shadowOsx:0,shadowOsy:0,shadowColor:"#111111",bool1:!1,bool2:!1,origin:[.5,.5],elastic:!1,dura:0}),this.txt.create(),this.add.rectangle(Math.floor(t/2),Math.floor(e/2),Math.floor(t/1.5),Math.floor(e/12)).setStrokeStyle(1,16772744);const a=this.add.rectangle(Math.floor(t/2)-Math.floor(t/3)+4,Math.floor(e/2),4,Math.floor(e/14),16750865);this.load.on("progress",(e=>{a.width=Math.floor(t/1.52)*e}))}preload(){this.load.setPath("assets"),this.load.image("fondo","fondo_pacmanPh.png"),this.load.image("tile2","tile_pacmanMarron.png"),this.load.image("tile1","tile_pacmanMarron-2.png"),this.load.image("tile3","tile_pacmanBlue.png"),this.load.image("tile-suelo1","sueloTile-pacmanMarron-2.png"),this.load.image("puntito","silverbubble.png"),this.load.image("sparkle","sparkle1.png"),this.load.spritesheet("pacman","pac-animasPh.png",{frameWidth:64,frameHeight:64});for(let t=0;t<4;t++)this.load.spritesheet(`fantanim0${t}`,`fantanim0${t}.png`,{frameWidth:50,frameHeight:50}),this.load.spritesheet(`fantanim1${t}`,`fantanim1${t}.png`,{frameWidth:50,frameHeight:50}),this.load.spritesheet(`fantanim2${t}`,`fantanim2${t}.png`,{frameWidth:50,frameHeight:50}),this.load.spritesheet(`fantanim3${t}`,`fantanim3${t}.png`,{frameWidth:50,frameHeight:50}),this.load.spritesheet(`fantanim5${t}`,`fantanim5${t}.png`,{frameWidth:50,frameHeight:50});this.load.image("cerezas","cerezas.png"),this.load.image("boton-continuar","boton-continuar.png"),this.load.image("boton-nueva-partida","boton-start.png"),this.load.image("boton-settings","boton-config.png"),this.load.image("cruceta-left","left.png"),this.load.image("cruceta-right","right.png"),this.load.image("icono-gamepad","icono-gamePad.png"),this.load.spritesheet("boton-fullscreen","boton-fullscreen.png",{frameWidth:64,frameHeight:64}),this.load.audio("sonidoGameOverRetro","audio/gameoveretro.ogg"),this.load.audio("sonidoPacmanAzules","audio/pacmanazules.ogg"),this.load.audio("sonidoPacmanDies","audio/pacmandies.ogg"),this.load.audio("sonidoPacmanEatingCherry","audio/pacmaneatingcherry.mp3"),this.load.audio("sonidoPacmanEatingGhost","audio/pacmaneatinghost.ogg"),this.load.audio("sonidoPacmanInicioNivel","audio/pacmaninicionivel.ogg"),this.load.audio("sonidoPacmanIntermision","audio/pacmanintermision.ogg"),this.load.audio("sonidoPacmanSirena","audio/pacmansirena.ogg"),this.load.audio("sonidoWakaWaka","audio/pacmanwakawaka.mp3")}create(){this.scene.start("MainMenu")}}const B={type:Phaser.AUTO,width:800,height:550,parent:"game-container",backgroundColor:"#807011",physics:{default:"arcade",arcade:{debug:!1}},scale:{mode:Phaser.Scale.FIT,autoCenter:Phaser.Scale.CENTER_BOTH},scene:[n,k,P,M,F]};new Phaser.Game(B);
