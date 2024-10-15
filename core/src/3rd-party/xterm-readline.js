/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/xterm-readline@1.1.1/lib/readline.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import t from"string-width";var e,s,i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},r={},o={};e=o,Object.defineProperty(e,"__esModule",{value:!0}),e.parseInput=e.InputType=void 0,function(t){t[t.Text=0]="Text",t[t.AltEnter=1]="AltEnter",t[t.ArrowUp=2]="ArrowUp",t[t.ArrowDown=3]="ArrowDown",t[t.ArrowLeft=4]="ArrowLeft",t[t.ArrowRight=5]="ArrowRight",t[t.Delete=6]="Delete",t[t.Backspace=7]="Backspace",t[t.CtrlA=8]="CtrlA",t[t.CtrlC=9]="CtrlC",t[t.CtrlD=10]="CtrlD",t[t.CtrlE=11]="CtrlE",t[t.CtrlK=12]="CtrlK",t[t.CtrlL=13]="CtrlL",t[t.CtrlQ=14]="CtrlQ",t[t.CtrlS=15]="CtrlS",t[t.CtrlU=16]="CtrlU",t[t.End=17]="End",t[t.Enter=18]="Enter",t[t.Home=19]="Home",t[t.ShiftEnter=20]="ShiftEnter",t[t.UnsupportedControlChar=21]="UnsupportedControlChar",t[t.UnsupportedEscape=22]="UnsupportedEscape"}(s=e.InputType||(e.InputType={})),e.parseInput=function(t){return Array.from(function*(t){let e=[];const i=t[Symbol.iterator]();for(let t=i.next();!t.done;t=i.next()){const r=t.value;if(r.length>1){e.push(r);continue}const o=r.charCodeAt(0);if(e.length>0&&(o<32||127===o)&&(yield{inputType:s.Text,data:e},e=[]),27!==o)if(o<32||127===o){let t=s.UnsupportedControlChar;switch(o){case 1:t=s.CtrlA;break;case 3:t=s.CtrlC;break;case 4:t=s.CtrlD;break;case 5:t=s.CtrlE;break;case 11:t=s.CtrlK;break;case 17:t=s.CtrlQ;break;case 19:t=s.CtrlS;break;case 21:t=s.CtrlU;break;case 13:t=s.Enter;break;case 127:t=s.Backspace;break;case 12:t=s.CtrlL}yield{inputType:t,data:[r]}}else e.push(r);else{const t=i.next();if(t.done){e.push("");continue}let r=s.UnsupportedEscape;if("["!==t.value){"\r"===t.value&&(r=s.AltEnter),yield{inputType:r,data:["",t.value]};continue}const o=i.next();if(o.done)continue;if(o.value>="0"&&o.value<="9"){let t=o.value;const e=i.next();if(e.done)return;if(e.value>="0"&&e.value<="9")t+=e.value;else if("~"!==e.value)continue;"3"===t&&(r=s.Delete),yield{inputType:r,data:["","[",t,"~"]};continue}switch(o.value){case"A":r=s.ArrowUp;break;case"B":r=s.ArrowDown;break;case"C":r=s.ArrowRight;break;case"D":r=s.ArrowLeft;break;case"F":r=s.End;break;case"H":r=s.Home;break;case"\r":r=s.AltEnter}yield{inputType:r,data:["","[",o.value]}}}e.length>0&&(yield{inputType:s.Text,data:e})}(t))};var h={},n={};Object.defineProperty(n,"__esModule",{value:!0}),n.LineBuffer=void 0;n.LineBuffer=class{constructor(){this.buf="",this.pos=0}buffer(){return this.buf}pos_buffer(){return this.buf.slice(0,this.pos)}length(){return this.buf.length}char_length(){return[...this.buf].length}update(t,e){this.buf=t,this.pos=e}insert(t){const e=t.length,s=this.pos===this.buf.length;return this.buf=s?this.buf+t:this.buf.slice(0,this.pos)+t+this.buf.slice(this.pos),this.pos+=e,s}moveBack(t){const e=this.prevPos(t);return void 0!==e&&(this.pos=e,!0)}moveForward(t){const e=this.nextPos(t);return void 0!==e&&(this.pos=e,!0)}moveHome(){const t=this.startOfLine();return this.pos>t&&(this.pos=t,!0)}moveEnd(){const t=this.endOfLine();return this.pos!==t&&(this.pos=t,!0)}startOfLine(){const t=this.buf.slice(0,this.pos).lastIndexOf("\n");return-1!==t?t+1:0}endOfLine(){const t=this.buf.slice(this.pos).indexOf("\n");return-1!==t?this.pos+t:this.buf.length}moveLineUp(t){const e=this.buf.slice(0,this.pos).lastIndexOf("\n");if(-1===e)return!1;const s=[...this.buf.slice(e+1,this.pos)].length;let i=this.buf.slice(0,e).lastIndexOf("\n");-1===i?i=0:i+=1;let r=e;for(let e=1;e<t&&0!==i;e++)r=i-1,i=this.buf.slice(0,r).lastIndexOf("\n"),-1===i?i=0:i+=1;const o=[...this.buf.slice(i,r)].slice(0,s);let h=e;return o.length>0&&(h=o.map((t=>t.length)).reduce(((t,e)=>t+e),0),h=i+h),this.pos=h,!0}moveLineDown(t){const e=this.buf.slice(this.pos).indexOf("\n");if(-1===e)return!1;let s=this.buf.slice(0,this.pos).lastIndexOf("\n");-1===s?s=0:s+=1;const i=[...this.buf.slice(s,this.pos)].length;let r=this.pos+e+1,o=this.buf.slice(r).indexOf("\n");o=-1===o?this.buf.length:r+o;for(let e=1;e<t&&o!==this.buf.length;e++)r=o+1,o=this.buf.slice(r).indexOf("\n"),o=-1===o?this.buf.length:r+o;const h=[...this.buf.slice(r,o)];return i<h.length?this.pos=h.slice(0,i).map((t=>t.length)).reduce(((t,e)=>t+e),0)+r:this.pos=o,!0}set_pos(t){this.pos=t}prevPos(t){if(0===this.pos)return;const e=this.buf.slice(0,this.pos);return this.pos-[...e].slice(-t).map((t=>t.length)).reduce(((t,e)=>t+e),0)}nextPos(t){if(this.pos===this.buf.length)return;const e=this.buf.slice(this.pos);return this.pos+[...e].slice(0,t).map((t=>t.length)).reduce(((t,e)=>t+e),0)}backspace(t){const e=this.prevPos(t);return void 0!==e&&(this.buf=this.buf.slice(0,e)+this.buf.slice(this.pos),this.pos=e,!0)}delete(t){const e=this.nextPos(t);return void 0!==e&&(this.buf=this.buf.slice(0,this.pos)+this.buf.slice(e),!0)}deleteEndOfLine(){if(0==this.buf.length||this.pos==this.buf.length)return!1;const t=this.pos,e=this.endOfLine();return t==e?this.delete(1):this.buf=this.buf.slice(0,t)+this.buf.slice(e),!0}};var a=i&&i.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(h,"__esModule",{value:!0}),h.State=h.Layout=h.Position=void 0;const l=n,u=a(t);class c{constructor(t,e){this.row=void 0!==t?t:0,this.col=void 0!==e?e:0}}h.Position=c;class p{constructor(t){this.promptSize=t,this.cursor=new c,this.end=new c}}h.Layout=p;h.State=class{constructor(t,e,s,i){this.line=new l.LineBuffer,this.highlighting=!1,this.prompt=t,this.tty=e,this.highlighter=s,this.history=i,this.promptSize=e.calculatePosition(t,new c),this.layout=new p(this.promptSize)}buffer(){return this.line.buffer()}shouldHighlight(){return this.highlighter.highlightChar(this.line.buf,this.line.pos)?(this.highlighting=!0,!0):!!this.highlighting&&(this.highlighting=!1,!0)}clearScreen(){this.tty.clearScreen(),this.layout.cursor=new c,this.layout.end=new c,this.refresh()}editInsert(t){const e=this.line.insert(t),s=t.includes("\n");if(e&&!s){const e=(0,u.default)(t);e>0&&this.layout.cursor.col+e<this.tty.col&&!this.shouldHighlight()?(this.layout.cursor.col+=e,this.layout.end.col+=e,this.tty.write(t)):this.refresh()}else this.refresh()}update(t){this.line.update(t,t.length),this.refresh()}editBackspace(t){this.line.backspace(t)&&this.refresh()}editDelete(t){this.line.delete(t)&&this.refresh()}editDeleteEndOfLine(){this.line.deleteEndOfLine()&&this.refresh()}refresh(){const t=this.tty.computeLayout(this.promptSize,this.line);this.tty.refreshLine(this.prompt,this.line,this.layout,t,this.highlighter),this.layout=t}moveCursorBack(t){this.line.moveBack(t)&&this.moveCursor()}moveCursorForward(t){this.line.moveForward(t)&&this.moveCursor()}moveCursorUp(t){this.line.moveLineUp(t)?this.moveCursor():this.previousHistory()}moveCursorDown(t){this.line.moveLineDown(t)?this.moveCursor():this.nextHistory()}moveCursorHome(){this.line.moveHome()&&this.moveCursor()}moveCursorEnd(){this.line.moveEnd()&&this.moveCursor()}moveCursorToEnd(){this.layout.cursor!==this.layout.end&&(this.tty.moveCursor(this.layout.cursor,this.layout.end),this.layout.cursor=Object.assign({},this.layout.end))}previousHistory(){if(-1===this.history.cursor&&this.line.length()>0)return;const t=this.history.prev();void 0!==t&&this.update(t)}nextHistory(){if(-1===this.history.cursor)return;const t=this.history.next();void 0!==t?this.update(t):this.update("")}moveCursor(){const t=this.tty.calculatePosition(this.line.pos_buffer(),this.promptSize);t!==this.layout.cursor&&(this.shouldHighlight()?this.refresh():(this.tty.moveCursor(this.layout.cursor,t),this.layout.promptSize=Object.assign({},this.promptSize),this.layout.cursor=Object.assign({},t)))}};var d={};Object.defineProperty(d,"__esModule",{value:!0}),d.History=void 0;d.History=class{constructor(t){this.entries=[],this.cursor=-1,this.maxEntries=t}saveToLocalStorage(){const t=null===window||void 0===window?void 0:window.localStorage;void 0!==t&&t.setItem("history",JSON.stringify(this.entries))}restoreFromLocalStorage(){const t=null===window||void 0===window?void 0:window.localStorage;if(void 0!==t){const e=t.getItem("history");if(null==e)return;try{const s=JSON.parse(e);Array.isArray(s)&&void 0===s.find((t=>"string"!=typeof t))?this.entries=s:(this.entries=[],t.setItem("history","[]"))}catch(e){this.entries=[],t.setItem("history","[]")}}}append(t){this.resetCursor(),this.entries.includes(t)?(this.entries.splice(this.entries.indexOf(t),1),this.entries.unshift(t)):this.entries.unshift(t),this.entries.length>this.maxEntries&&this.entries.pop(),this.saveToLocalStorage()}resetCursor(){this.cursor=-1}next(){if(-1!==this.cursor)return this.cursor-=1,this.entries[this.cursor]}prev(){if(!(this.cursor+1>=this.entries.length))return this.cursor+=1,this.entries[this.cursor]}};var f={},y=i&&i.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(f,"__esModule",{value:!0}),f.Tty=void 0;const w=y(t);f.Tty=class{constructor(t,e,s,i){this.tabWidth=s,this.col=t,this.row=e,this.out=i}write(t){return this.out.write(t)}print(t){return this.out.print(t)}println(t){return this.out.println(t)}clearScreen(){this.out.write("[H[2J")}calculatePosition(t,e){const s=Object.assign({},e);let i=0;return[...t].forEach((t=>{if("\n"===t)return s.row+=1,void(s.col=0);let e=0;if("\t"===t)e=this.tabWidth-s.col%this.tabWidth;else{let s;[s,i]=function(t,e){return 1===e?"["===t?[0,2]:[0,0]:2===e?";"===t||t[0]>="0"&&t[0]<="9"?[0,e]:[0,0]:""===t?[0,1]:"\n"===t?[0,e]:[(0,w.default)(t),e]}(t,i),e=s}s.col+=e,s.col>this.col&&(s.row+=1,s.col=e)})),s.col===this.col&&(s.col=0,s.row+=1),s}computeLayout(t,e){const s=Object.assign({},t),i=e.pos,r=this.calculatePosition(e.buf.slice(0,e.pos),t);return{promptSize:s,cursor:r,end:i===e.buf.length?Object.assign({},r):this.calculatePosition(e.buf.slice(i),r)}}refreshLine(t,e,s,i,r){const o=i.cursor,h=i.end;this.clearOldRows(s),this.write(r.highlightPrompt(t)),this.write(r.highlight(e.buf,e.pos)),0===h.col&&h.row>0&&"\n"!==e.buf[e.buf.length-1]&&this.write("\n");const n=h.row-o.row;n>0&&this.write(`[${n}A`),o.col>0?this.write(`\r[${o.col}C`):this.write("\r")}clearOldRows(t){const e=t.cursor.row,s=t.end.row,i=Math.max(s-e,0);i>0&&this.write(`[${i}B`);for(let t=0;t<s;t++)this.write("\r[0K[A");this.write("\r[0K")}moveCursor(t,e){if(e.row>t.row){const s=e.row-t.row;1===s?this.write("[B"):this.write(`[${s}B`)}else if(e.row<t.row){const s=t.row-e.row;1===s?this.write("[A"):this.write(`[${s}A`)}if(e.col>t.col){const s=e.col-t.col;1===s?this.write("[C"):this.write(`[${s}C`)}else if(e.col<t.col){const s=t.col-e.col;1===s?this.write("[D"):this.write(`[${s}D`)}}};var v={};Object.defineProperty(v,"__esModule",{value:!0}),v.IdentityHighlighter=void 0;v.IdentityHighlighter=class{highlight(t,e){return t}highlightPrompt(t){return t}highlightChar(t,e){return!1}},Object.defineProperty(r,"__esModule",{value:!0});var b=r.Readline=void 0;const g=o,m=h,C=d,T=f,k=v;b=r.Readline=class{constructor(){this.highlighter=new k.IdentityHighlighter,this.history=new C.History(50),this.disposables=[],this.watermark=0,this.highWatermark=1e4,this.lowWatermark=1e3,this.highWater=!1,this.state=new m.State(">",this.tty(),this.highlighter,this.history),this.checkHandler=()=>!0,this.ctrlCHandler=()=>{},this.pauseHandler=t=>{},this.history.restoreFromLocalStorage()}activate(t){this.term=t,this.term.onData(this.readData.bind(this)),this.term.attachCustomKeyEventHandler(this.handleKeyEvent.bind(this))}dispose(){this.disposables.forEach((t=>t.dispose()))}appendHistory(t){this.history.append(t)}setHighlighter(t){this.highlighter=t}setCheckHandler(t){this.checkHandler=t}setCtrlCHandler(t){this.ctrlCHandler=t}setPauseHandler(t){this.pauseHandler=t}writeReady(){return!this.highWater}write(t){const e=(t="\n"===t?"\r\n":(t=t.replace(/^\n/,"\r\n")).replace(/([^\r])\n/g,"$1\r\n")).length;this.watermark+=e,this.watermark>this.highWatermark&&(this.highWater=!0),this.term&&this.term.write(t,(()=>{this.watermark=Math.max(this.watermark-e,0),this.highWater&&this.watermark<this.lowWatermark&&(this.highWater=!1)}))}print(t){return this.write(t)}println(t){return this.write(t+"\r\n")}output(){return this}tty(){var t,e;return void 0!==(null===(e=null===(t=this.term)||void 0===t?void 0:t.options)||void 0===e?void 0:e.tabStopWidth)?new T.Tty(this.term.cols,this.term.rows,this.term.options.tabStopWidth,this.output()):new T.Tty(0,0,8,this.output())}read(t){return new Promise(((e,s)=>{void 0!==this.term?(this.state=new m.State(t,this.tty(),this.highlighter,this.history),this.state.refresh(),this.activeRead={prompt:t,resolve:e,reject:s}):s("addon is not active")}))}handleKeyEvent(t){return"Enter"!==t.key||!t.shiftKey||("keydown"===t.type&&this.readKey({inputType:g.InputType.ShiftEnter,data:["\r"]}),!1)}readData(t){const e=(0,g.parseInput)(t);e.length>1||e[0].inputType===g.InputType.Text&&e[0].data.length>1?this.readPaste(e):this.readKey(e[0])}readPaste(t){const e=t.map((t=>t.inputType===g.InputType.Enter?{inputType:g.InputType.Text,data:["\n"]}:t));for(const t of e)t.inputType===g.InputType.Text?this.state.editInsert(t.data.join("")):this.readKey(t)}readKey(t){var e,s,i;if(void 0!==this.activeRead)switch(t.inputType){case g.InputType.Text:this.state.editInsert(t.data.join(""));break;case g.InputType.AltEnter:case g.InputType.ShiftEnter:this.state.editInsert("\n");break;case g.InputType.Enter:this.checkHandler(this.state.buffer())?(this.state.moveCursorToEnd(),null===(e=this.term)||void 0===e||e.write("\r\n"),this.history.append(this.state.buffer()),null===(s=this.activeRead)||void 0===s||s.resolve(this.state.buffer()),this.activeRead=void 0):this.state.editInsert("\n");break;case g.InputType.CtrlC:this.state.moveCursorToEnd(),null===(i=this.term)||void 0===i||i.write("^C\r\n"),this.state=new m.State(this.activeRead.prompt,this.tty(),this.highlighter,this.history),this.state.refresh();break;case g.InputType.CtrlS:this.pauseHandler(!1);break;case g.InputType.CtrlU:this.state.update("");break;case g.InputType.CtrlK:this.state.editDeleteEndOfLine();break;case g.InputType.CtrlQ:this.pauseHandler(!0);break;case g.InputType.CtrlL:this.state.clearScreen();break;case g.InputType.Home:case g.InputType.CtrlA:this.state.moveCursorHome();break;case g.InputType.End:case g.InputType.CtrlE:this.state.moveCursorEnd();break;case g.InputType.Backspace:this.state.editBackspace(1);break;case g.InputType.Delete:case g.InputType.CtrlD:this.state.editDelete(1);break;case g.InputType.ArrowLeft:this.state.moveCursorBack(1);break;case g.InputType.ArrowRight:this.state.moveCursorForward(1);break;case g.InputType.ArrowUp:this.state.moveCursorUp(1);break;case g.InputType.ArrowDown:this.state.moveCursorDown(1);case g.InputType.UnsupportedControlChar:case g.InputType.UnsupportedEscape:}else switch(t.inputType){case g.InputType.CtrlC:this.ctrlCHandler();break;case g.InputType.CtrlL:this.write("[H[2J")}}};var I=r.__esModule;export{b as Readline,I as __esModule,r as default};