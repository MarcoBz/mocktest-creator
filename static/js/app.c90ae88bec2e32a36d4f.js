webpackJsonp([2],{0:function(s,t){},1:function(s,t){},2:function(s,t){},3:function(s,t){},G6YC:function(s,t){},LBXj:function(s,t){},NHnr:function(s,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e,r=n("7+uW"),o=n("Xxa5"),i=n.n(o),a=n("exGp"),c=n.n(a),u=n("//Fk"),l=n.n(u),d=n("afOB");function w(s){for(var t=[],n=0;n<s.length;n++){var e=["A","B","C","D","E","F","G","H"];t.push({question:s[n][0],answers:[],correctAnswer:s[n][s[n].length-1]});for(var r=[],o=1;o<s[n].length-1;o++)r.push({pointer:e[o-1],answer:s[n][o]});t[n].answers=r}return t}d.parsePromise=function(s){return new l.a(function(t,n){d.parse(s,{delimiter:"$",complete:t,error:n})})};var f={csvParsing:(e=c()(i.a.mark(function s(t){var n;return i.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,d.parsePromise(t);case 2:return n=s.sent,s.abrupt("return",w(n.data));case 4:case"end":return s.stop()}},s,this)})),function(s){return e.apply(this,arguments)})},v=n("N1Pc");function h(s){return new l.a(function(t,n){var e=new FileReader;e.onload=function(){t(e.result)},e.readAsArrayBuffer(s)})}var p={pdfParsing:function(){var s=c()(i.a.mark(function s(t){var n,e,r,o,a,c,u,l;return i.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,h(t);case 2:return n=s.sent,e=new Uint8Array(n),s.next=6,v.getDocument(e);case 6:r=s.sent,o=[],a=0;case 9:if(!(a<r._pdfInfo.numPages)){s.next=21;break}return s.next=12,r.getPage(a+1);case 12:return c=s.sent,s.next=15,c.getTextContent();case 15:u=s.sent,l=u.items.map(function(s){return s.str}),o=o.concat(l);case 18:a++,s.next=9;break;case 21:return s.abrupt("return",o);case 22:case"end":return s.stop()}},s,this)}));return function(t){return s.apply(this,arguments)}}()},m={name:"DragAndDrop",data:function(){return{dragAndDropCapable:!1,files:null}},mounted:function(){this.dragAndDropCapable=this.determineDragAndDropCapable(),this.dragAndDropCapable&&(["drag","dragstart","dragend","dragover","dragenter","dragleave","drop"].forEach(function(s){this.$refs.fileform.addEventListener(s,function(s){s.preventDefault(),s.stopPropagation()}.bind(this),!1)}.bind(this)),this.$refs.fileform.addEventListener("drop",function(s){this.files=s.dataTransfer.files[0]}.bind(this)))},methods:{clear:function(){this.dragAndDropCapable=!1,this.files=null},determineDragAndDropCapable:function(){var s=document.createElement("div");return("draggable"in s||"ondragstart"in s&&"ondrop"in s)&&"FormData"in window&&"FileReader"in window},submitFiles:function(){var s=this,t=this.files.name.substring(this.files.name.lastIndexOf(".")+1,this.files.name.length)||this.name.files;"csv"==t?f.csvParsing(this.files).then(function(t){s.$emit("parsedCsv",t)}):"pdf"==t&&p.pdfParsing(this.files).then(function(t){s.$emit("parsedPDF",t)})}}},g={render:function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{attrs:{id:"file-drag-drop"}},[n("form",{ref:"fileform"},[n("span",{staticClass:"drop-files"},[s._v("Drop the file here!")])]),s._v(" "),s.files?n("div",{staticClass:"file-listing border"},[s._v("\n    "+s._s(s.files.name)+"\n  ")]):s._e(),s._v(" "),n("button",{directives:[{name:"show",rawName:"v-show",value:s.files,expression:"files"}],staticClass:"btn",on:{click:function(t){return s.submitFiles()}}},[s._v("Submit")])])},staticRenderFns:[]};var A=n("VU/8")(m,g,!1,function(s){n("LBXj")},null,null).exports,C=n("/ocq"),_={name:"MockTest",props:["allQuestions"],data:function(){return{nQuestions:null,correctAnswersPoints:null,noAnswersPoints:null,wrongAnswersPoints:null,questions:[],answers:[],showCorrectAnswers:!1,colorClass:[],inputCreated:!1}},mounted:function(){this.allQuestions||this.$emit("refresh")},methods:{goOn:function(){this.inputCreated=!0,this.allQuestions=this.shuffle(this.allQuestions);for(var s=0;s<this.allQuestions.length;s++){this.allQuestions[s].answers=this.shuffle(this.allQuestions[s].answers);for(var t=!1,n=0;n<this.allQuestions[s].answers.length;n++){var e=["A","B","C","D","E","F","G","H"];this.allQuestions[s].answers[n].pointer!=this.allQuestions[s].correctAnswer||t||(this.allQuestions[s].correctAnswer=e[n],t=!0),this.allQuestions[s].answers[n].pointer=e[n]}}for(var r=0;r<this.nQuestions;r++){var o=this.allQuestions.pop();this.questions.push(o),this.answers.push({givenAnswer:null,correctAnswer:o.correctAnswer})}},shuffle:function(s){for(var t=s.length;t>0;){var n=Math.floor(Math.random()*t),e=s[--t];s[t]=s[n],s[n]=e}return s},getResults:function(){y.push({name:"Results",params:{answers:this.answers,nQuestions:this.nQuestions,correctAnswersPoints:this.correctAnswersPoints,noAnswersPoints:this.noAnswersPoints,wrongAnswersPoints:this.wrongAnswersPoints}}),this.showCorrectAnswers=!0;for(var s=0;s<this.answers.length;s++)this.answers[s].givenAnswer?this.answers[s].givenAnswer==this.answers[s].correctAnswer?this.colorClass.push("background bg-success"):this.colorClass.push("background bg-danger"):(this.answers[s].correc,this.colorClass.push("background bg-warning"))}}},b={render:function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{attrs:{id:"mocktest"}},[n("div",{staticClass:"container",attrs:{id:"header"}},[n("div",{staticClass:"row justify-content-md-center"},[n("div",{staticClass:"col"},[n("input",{directives:[{name:"model",rawName:"v-model",value:s.nQuestions,expression:"nQuestions"}],attrs:{type:"text",placeholder:"N° Questions"},domProps:{value:s.nQuestions},on:{input:function(t){t.target.composing||(s.nQuestions=t.target.value)}}})])]),s._v(" "),n("div",{staticClass:"row justify-content-md-center"},[n("div",{staticClass:"col col-lg-4"},[n("input",{directives:[{name:"model",rawName:"v-model",value:s.correctAnswersPoints,expression:"correctAnswersPoints"}],attrs:{type:"text",placeholder:"Points correct answer"},domProps:{value:s.correctAnswersPoints},on:{input:function(t){t.target.composing||(s.correctAnswersPoints=t.target.value)}}})]),s._v(" "),n("div",{staticClass:"col col-lg-4"},[n("input",{directives:[{name:"model",rawName:"v-model",value:s.wrongAnswersPoints,expression:"wrongAnswersPoints"}],attrs:{type:"text",placeholder:"Points wrong answer"},domProps:{value:s.wrongAnswersPoints},on:{input:function(t){t.target.composing||(s.wrongAnswersPoints=t.target.value)}}})]),s._v(" "),n("div",{staticClass:"col col-lg-4"},[n("input",{directives:[{name:"model",rawName:"v-model",value:s.noAnswersPoints,expression:"noAnswersPoints"}],attrs:{type:"text",placeholder:"Points no answer"},domProps:{value:s.noAnswersPoints},on:{input:function(t){t.target.composing||(s.noAnswersPoints=t.target.value)}}})])]),s._v(" "),n("div",{staticClass:"row justify-content-md-center"},[n("div",{staticClass:"col",on:{click:s.goOn}},[n("button",{staticClass:"btn",attrs:{disabled:s.inputCreated}},[s._v("Go On")])])])]),s._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:s.inputCreated,expression:"inputCreated"}],staticClass:"container",attrs:{id:"body"}},[s._l(s.questions,function(t,e){return n("div",{staticClass:"row justify-content-md-center"},[n("div",{staticClass:"coloredCol col col-lg-1 border",class:[s.colorClass[e]]}),s._v(" "),n("div",{staticClass:"questionCol col col-lg-5 border"},[s._v(s._s(t.question))]),s._v(" "),n("div",{staticClass:"answersCol col col-lg-5 border"},s._l(t.answers,function(t){return n("div",{staticClass:"form-check"},[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:s.answers[e].givenAnswer,expression:"answers[index].givenAnswer"}],staticClass:"form-check-input",attrs:{name:e,type:"radio",disabled:s.showCorrectAnswers},domProps:{value:t.pointer,checked:s._q(s.answers[e].givenAnswer,t.pointer)},on:{change:function(n){return s.$set(s.answers[e],"givenAnswer",t.pointer)}}}),s._v(" "),n("span",[s._v(s._s(t.pointer)+"- "+s._s(t.answer))])])])}),0),s._v(" "),n("div",{staticClass:"resultCol col col-lg-1 border"},[n("div",{directives:[{name:"show",rawName:"v-show",value:s.showCorrectAnswers,expression:"showCorrectAnswers"}]},[s._v(s._s(s.answers[e].correctAnswer))])])])}),s._v(" "),n("div",{staticClass:"row justify-content-md-center"},[n("div",{staticClass:"col col-6",attrs:{id:"getResultsButton"}},[n("button",{staticClass:"btn",on:{click:s.getResults}},[s._v("Get Results")])])]),s._v(" "),n("router-view")],2)])},staticRenderFns:[]};var P=n("VU/8")(_,b,!1,function(s){n("RP9c")},"data-v-25e4b0d3",null).exports,R={render:function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{attrs:{id:"mocktest"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row justify-content-md-center text text-success font-weight-bold"},[s._v("Corrent Answers = "+s._s(s.correctAnswers)+"/"+s._s(s.nQuestions))]),s._v(" "),n("div",{staticClass:"row justify-content-md-center text text-danger font-weight-bold"},[s._v("Wrong Answers = "+s._s(s.wrongAnswers)+"/"+s._s(s.nQuestions))]),s._v(" "),n("div",{staticClass:"row justify-content-md-center text text-warning font-weight-bold"},[s._v("No Answers ="+s._s(s.noAnswers)+"/"+s._s(s.nQuestions))]),s._v(" "),n("div",{staticClass:"row justify-content-md-center text font-weight-bold"},[s._v("Total Points = "+s._s(s.totalPoints)+"/"+s._s(s.nQuestions))])])])},staticRenderFns:[]};var x=n("VU/8")({name:"Results",props:["answers","nQuestions","correctAnswersPoints","noAnswersPoints","wrongAnswersPoints"],data:function(){return{correctAnswers:0,wrongAnswers:0,noAnswers:0,totalPoints:0}},mounted:function(){if(this.answers){for(var s=0;s<this.answers.length;s++)this.answers[s].givenAnswer?this.answers[s].givenAnswer==this.answers[s].correctAnswer?this.correctAnswers++:this.wrongAnswers++:this.noAnswers++;this.totalPoints=this.correctAnswers*this.correctAnswersPoints+this.wrongAnswers*this.wrongAnswersPoints+this.noAnswers*this.noAnswersPoints}}},R,!1,function(s){n("i2MU")},"data-v-0b9c59dc",null).exports,Q={name:"Table",props:["allRows"],data:function(){return{rows:[],questions:[]}},mounted:function(){if(this.allRows)for(var s=0;s<this.allRows.length;s++)this.rows.push({str:this.allRows[s],numRow:s,isQuestion:!1,isAnswer:!1,isCorrect:!1});else this.$emit("refresh")},methods:{createCsv:function(){for(var s=this,t=["A","B","C","D","E","F","G","H"],n="",e=[],r="",o=function(o){s.rows.find(function(s){return s.numRow===o}).isQuestion?n=s.rows.find(function(s){return s.numRow===o}).str:s.rows.find(function(s){return s.numRow===o}).isAnswer&&(e.push(s.rows.find(function(s){return s.numRow===o}).str),s.rows.find(function(s){return s.numRow===o}).isCorrect&&(r=s.rows.find(function(s){return s.numRow===o}).str)),o+1!=s.allRows.length&&!s.rows.find(function(s){return s.numRow===o+1}).isQuestion||""==n||(s.questions.push({question:n,answers:e,correct:t[e.indexOf(r)]}),e=[],r="")},i=0;i<this.allRows.length;i++)o(i);var a="";for(i=0;i<this.questions.length;i++)a+=this.questions[i].question+"$"+this.questions[i].answers.join("$")+"$"+this.questions[i].correct,i+1!=this.questions.length&&(a+="\n");if(""!=a){var c=document.createElement("a");c.href="data:text/csv;charset=utf-8,"+encodeURI(a);var u=(new Date).toISOString();c.download="csv_"+u+".csv",c.click()}this.$emit("refresh")},questionButton:function(s){this.rows.find(function(t){return t.numRow===s}).isQuestion?this.rows.find(function(t){return t.numRow===s}).isQuestion=!1:this.rows.find(function(t){return t.numRow===s}).isQuestion=!0},answerButton:function(s){this.rows.find(function(t){return t.numRow===s}).isAnswer?this.rows.find(function(t){return t.numRow===s}).isAnswer=!1:this.rows.find(function(t){return t.numRow===s}).isAnswer=!0},correctAnswerButton:function(s){this.rows.find(function(t){return t.numRow===s}).isCorrect?this.rows.find(function(t){return t.numRow===s}).isCorrect=!1:this.rows.find(function(t){return t.numRow===s}).isCorrect=!0}}},D={render:function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{attrs:{id:"table"}},[n("table",{staticClass:"table"},[s._m(0),s._v(" "),n("tbody",s._l(s.rows,function(t){return n("tr",[n("th",{attrs:{scope:"row"}},[s._v(s._s(t.numRow))]),s._v(" "),n("td",[n("button",{staticClass:"btn",class:{"btn-success":t.isQuestion},on:{click:function(n){return s.questionButton(t.numRow)}}})]),s._v(" "),n("td",[n("button",{staticClass:"btn",class:{"btn-info":t.isAnswer},on:{click:function(n){return s.answerButton(t.numRow)}}})]),s._v(" "),n("td",[n("button",{staticClass:"btn",class:{"btn-danger":t.isCorrect},on:{click:function(n){return s.correctAnswerButton(t.numRow)}}})]),s._v(" "),n("td",{staticClass:"text text-left",class:{"text-success":t.isQuestion,"text-info":t.isAnswer,"text-danger":t.isCorrect}},[s._v(s._s(t.str))])])}),0)]),s._v(" "),n("button",{staticClass:"btn",on:{click:s.createCsv}},[s._v("Download Csv")])])},staticRenderFns:[function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[s._v("U")]),s._v(" "),n("th",{attrs:{scope:"col"}},[s._v("Question")]),s._v(" "),n("th",{attrs:{scope:"col"}},[s._v("Answer")]),s._v(" "),n("th",{attrs:{scope:"col"}},[s._v("Correct Answer")]),s._v(" "),n("th",{attrs:{scope:"col"}},[s._v("String")])])])}]};var k=n("VU/8")(Q,D,!1,function(s){n("wSBU")},"data-v-26d95491",null).exports;r.a.use(C.a);var y=new C.a({routes:[{path:"/"},{path:"/MockTest",name:"MockTest",component:P,props:!0,children:[{path:"/MockTest/Results",name:"Results",props:!0,component:x}]},{path:"/Table",name:"Table",component:k,props:!0}]}),F={name:"App",components:{DragAndDrop:A},data:function(){return{created:!1,csvParsed:!1,allQuestions:null,pdfParsed:!1,allRows:null}},methods:{createMockTest:function(){this.created=!0,this.csvParsed=!1,y.push({name:"MockTest",params:{allQuestions:this.allQuestions}})},createTable:function(){this.created=!0,this.pdfParsed=!1,y.push({name:"Table",params:{allRows:this.allRows}})},clear:function(){this.$refs.dragAndDropComp.clear(),this.created=!1,this.csvParsed=!1,this.allQuestions=null,this.pdfParsed=!1,this.allRows=null,y.push({path:"/"})},passFileData:function(s){this.allRows=null,this.pdfParsed=!1,this.allQuestions=s,this.csvParsed=!0},passPDFData:function(s){this.allQuestions=null,this.csvParsed=!1,this.allRows=s,this.pdfParsed=!0}}},q={render:function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container",attrs:{id:"header"}},[n("div",{staticClass:"row justify-content-md-center"},[n("div",{directives:[{name:"show",rawName:"v-show",value:s.csvParsed,expression:"csvParsed"}],staticClass:"col",on:{click:s.createMockTest}},[n("button",{staticClass:"btn"},[s._v("Create Mock Test")])])]),s._v(" "),n("div",{staticClass:"row justify-content-md-center"},[n("div",{directives:[{name:"show",rawName:"v-show",value:s.pdfParsed,expression:"pdfParsed"}],staticClass:"col",on:{click:s.createTable}},[n("button",{staticClass:"btn"},[s._v("Create Csv")])])])]),s._v(" "),n("DragAndDrop",{directives:[{name:"show",rawName:"v-show",value:!s.created,expression:"!created"}],ref:"dragAndDropComp",on:{parsedCsv:s.passFileData,parsedPDF:s.passPDFData}}),s._v(" "),n("div",{attrs:{id:"main"}},[n("router-view",{on:{refresh:s.clear}})],1),s._v(" "),n("div",{attrs:{id:"footer"}},[n("div",{staticClass:"row justify-content-md-center"},[n("div",{staticClass:"col col-6",attrs:{id:"clearButton"}},[n("button",{staticClass:"btn",on:{click:s.clear}},[s._v("Clear")])])])])],1)},staticRenderFns:[]};var $=n("VU/8")(F,q,!1,function(s){n("G6YC")},null,null).exports;r.a.config.productionTip=!1,new r.a({el:"#app",router:y,components:{App:$,DragAndDrop:A},template:"<App/>"})},RP9c:function(s,t){},i2MU:function(s,t){},wSBU:function(s,t){}},["NHnr"]);
//# sourceMappingURL=app.c90ae88bec2e32a36d4f.js.map