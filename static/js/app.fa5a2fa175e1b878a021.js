webpackJsonp([2],{"/SXP":function(s,t){},0:function(s,t){},1:function(s,t){},2:function(s,t){},3:function(s,t){},"Adi+":function(s,t){},Jirl:function(s,t){},JvGh:function(s,t){},NHnr:function(s,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=e("7+uW"),o=e("mvHQ"),i=e.n(o),a=e("Xxa5"),c=e.n(a),l=e("exGp"),u=e.n(l),d=e("//Fk"),h=e.n(d),f=e("afOB");function w(s){for(var t=[],e=0;e<s.length;e++){var n=["A","B","C","D","E","F","G","H"];t.push({question:s[e][0],answers:[],correctAnswer:s[e][s[e].length-1]});for(var r=[],o=1;o<s[e].length-1;o++)r.push({pointer:n[o-1],answer:s[e][o]});t[e].answers=r}return t}f.parsePromise=function(s){return new h.a(function(t,e){f.parse(s,{delimiter:"$",complete:t,error:e})})};var v={csvParsing:(n=u()(c.a.mark(function s(t){var e;return c.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,f.parsePromise(t);case 2:return e=s.sent,s.abrupt("return",w(e.data));case 4:case"end":return s.stop()}},s,this)})),function(s){return n.apply(this,arguments)})},p=e("N1Pc");function m(s){return new h.a(function(t,e){var n=new FileReader;n.onload=function(){t(n.result)},n.readAsArrayBuffer(s)})}var g={pdfParsing:function(){var s=u()(c.a.mark(function s(t){var e,n,r,o,i,a,l,u;return c.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,m(t);case 2:return e=s.sent,n=new Uint8Array(e),s.next=6,p.getDocument(n);case 6:r=s.sent,o=[],i=0;case 9:if(!(i<r._pdfInfo.numPages)){s.next=21;break}return s.next=12,r.getPage(i+1);case 12:return a=s.sent,s.next=15,a.getTextContent();case 15:l=s.sent,u=l.items.map(function(s){return s.str}),o=o.concat(u);case 18:i++,s.next=9;break;case 21:return s.abrupt("return",o);case 22:case"end":return s.stop()}},s,this)}));return function(t){return s.apply(this,arguments)}}()};function _(s){return new h.a(function(t,e){var n=new FileReader;n.onload=function(){t(JSON.parse(n.result))},n.readAsText(s)})}var C={jsonParsing:function(){var s=u()(c.a.mark(function s(t){var e,n,r,o,i,a;return c.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,_(t);case 2:for(e=s.sent,n=[],r=0;r<e.length;r++){for(o=["A","B","C","D","E","F","G","H"],n.push({question:e[r].question,answers:[],correctAnswer:e[r].correctAnswer}),i=[],a=0;a<e[r].answers.length;a++)i.push({pointer:o[a],answer:e[r].answers[a]});n[r].answers=i}return s.abrupt("return",n);case 6:case"end":return s.stop()}},s,this)}));return function(t){return s.apply(this,arguments)}}()},A={name:"DragAndDrop",data:function(){return{dragAndDropCapable:!1,files:null}},mounted:function(){this.dragAndDropCapable=this.determineDragAndDropCapable(),this.dragAndDropCapable&&(["drag","dragstart","dragend","dragover","dragenter","dragleave","drop"].forEach(function(s){this.$refs.fileform.addEventListener(s,function(s){s.preventDefault(),s.stopPropagation()}.bind(this),!1)}.bind(this)),this.$refs.fileform.addEventListener("drop",function(s){this.$emit("changedFile"),this.files=s.dataTransfer.files[0]}.bind(this)))},methods:{handleFileUpload:function(){this.files=this.$refs.file.files[0],this.$emit("changedFile")},clear:function(){this.dragAndDropCapable=!1,this.files=null},determineDragAndDropCapable:function(){var s=document.createElement("div");return("draggable"in s||"ondragstart"in s&&"ondrop"in s)&&"FormData"in window&&"FileReader"in window},submitFiles:function(){var s=this,t=this.files.name.substring(this.files.name.lastIndexOf(".")+1,this.files.name.length)||this.name.files;"csv"==t?v.csvParsing(this.files).then(function(t){s.$emit("parsedCsv",t)}):"pdf"==t?g.pdfParsing(this.files).then(function(t){s.$emit("parsedPDF",t)}):"json"==t&&C.jsonParsing(this.files).then(function(t){s.$emit("parsedJson",t)})}}},P={render:function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{attrs:{id:"file-drag-drop"}},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row justify-content-md-center"},[e("form",{ref:"fileform"},[e("span",{staticClass:"drop-files"},[s._v("Drop the file here!")])])]),s._v(" "),e("div",{staticClass:"row justify-content-md-center"},[s.files?e("div",{staticClass:"file-listing border"},[s._v("\n        "+s._s(s.files.name)+"\n      ")]):s._e()]),s._v(" "),e("div",{staticClass:"row justify-content-md-center"},[e("input",{ref:"file",staticClass:"btn,",staticStyle:{display:"none"},attrs:{type:"file",id:"file"},on:{change:function(t){return s.handleFileUpload()}}}),s._v(" "),e("input",{staticClass:"btn",attrs:{type:"button",value:"Get File",onclick:"document.getElementById('file').click();"}})]),s._v(" "),e("div",{staticClass:"row justify-content-md-center"},[e("button",{directives:[{name:"show",rawName:"v-show",value:s.files,expression:"files"}],staticClass:"btn",on:{click:function(t){return s.submitFiles()}}},[s._v("Submit")])])])])},staticRenderFns:[]};var b=e("VU/8")(A,P,!1,function(s){e("wAuL")},null,null).exports,Q=e("/ocq"),R={render:function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{attrs:{id:"mocktest"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row justify-content-md-center text text-success font-weight-bold"},[s._v("Corrent Answers = "+s._s(s.correctAnswers)+"/"+s._s(s.nQuestions))]),s._v(" "),e("div",{staticClass:"row justify-content-md-center text text-danger font-weight-bold"},[s._v("Wrong Answers = "+s._s(s.wrongAnswers)+"/"+s._s(s.nQuestions))]),s._v(" "),e("div",{staticClass:"row justify-content-md-center text text-warning font-weight-bold"},[s._v("No Answers ="+s._s(s.noAnswers)+"/"+s._s(s.nQuestions))]),s._v(" "),e("div",{staticClass:"row justify-content-md-center text font-weight-bold"},[s._v("Total Points = "+s._s(s.totalPoints)+"/"+s._s(s.nQuestions))]),s._v(" "),e("hr"),s._v(" "),e("div",{staticClass:"row justify-content-md-center text font-weight-bold"},[s._v("Wrong or No answers")]),s._v(" "),e("div",{staticClass:"row justify-content-md-center text font-weight-bold"},[e("table",{staticClass:"table"},[s._m(0),s._v(" "),e("tbody",s._l(s.questions,function(t,n){return e("tr",[t.givenAnswer&&t.givenAnswer==t.correctAnswer?s._e():e("th",{attrs:{scope:"row"}},[s._v(s._s(n))]),s._v(" "),t.givenAnswer&&t.givenAnswer==t.correctAnswer?s._e():e("td",{staticClass:"text text-right"},[s._v(s._s(t.question))]),s._v(" "),t.givenAnswer&&t.givenAnswer==t.correctAnswer?s._e():e("td",{staticClass:"text text-center"},[s._v(s._s(t.correctAnswerText.answer))])])}),0)])])])])},staticRenderFns:[function(){var s=this.$createElement,t=this._self._c||s;return t("thead",[t("tr",[t("th",{attrs:{scope:"col"}},[this._v("#")]),this._v(" "),t("th",{staticClass:"text text-right",attrs:{scope:"col"}},[this._v("Question")]),this._v(" "),t("th",{staticClass:"text text-center",attrs:{scope:"col"}},[this._v("Correct Answer")])])])}]};var x={name:"Test",components:{Results:e("VU/8")({name:"Results",props:["questions","parameters"],data:function(){return{nQuestions:this.parameters.nQuestions,correctAnswersPoints:this.parameters.correctAnswersPoints,noAnswersPoints:this.parameters.noAnswersPoints,wrongAnswersPoints:this.parameters.wrongAnswersPoints,correctAnswers:0,wrongAnswers:0,noAnswers:0,totalPoints:0}},mounted:function(){if(this.questions){for(var s=0;s<this.questions.length;s++)this.questions[s].givenAnswer?this.questions[s].givenAnswer==this.questions[s].correctAnswer?this.correctAnswers++:this.wrongAnswers++:this.noAnswers++;this.totalPoints=this.correctAnswers*this.correctAnswersPoints+this.wrongAnswers*this.wrongAnswersPoints+this.noAnswers*this.noAnswersPoints}},methods:{clear:function(){this.nQuestions=null,this.correctAnswersPoints=null,this.noAnswersPoints=null,this.wrongAnswersPoints=null,this.correctAnswers=0,this.wrongAnswers=0,this.noAnswers=0,this.totalPoints=0}}},R,!1,function(s){e("Jirl")},"data-v-554f7080",null).exports},props:["allQuestions","parameters"],data:function(){return{colorClass:[],shuffledQuestions:[],questions:[],showCorrectAnswers:!1,nQuestions:this.parameters.nQuestions,showResults:!1}},mounted:function(){this.$refs.Results&&this.$refs.Results.clear(),this.prepareQuestions(),this.getQuestions()},methods:{shuffle:function(s){for(var t=s.length;t>0;){var e=Math.floor(Math.random()*t),n=s[--t];s[t]=s[e],s[e]=n}return s},prepareQuestions:function(){for(var s=0;s<this.allQuestions.length;s++)this.shuffledQuestions.push(this.allQuestions[s]);this.shuffledQuestions=this.shuffle(this.shuffledQuestions);for(var t=0;t<this.shuffledQuestions.length;t++){this.shuffledQuestions[t].answers=this.shuffle(this.shuffledQuestions[t].answers);for(var e=!1,n=0;n<this.shuffledQuestions[t].answers.length;n++){var r=["A","B","C","D","E","F","G","H"];this.shuffledQuestions[t].answers[n].pointer!=this.shuffledQuestions[t].correctAnswer||e||(this.shuffledQuestions[t].correctAnswer=r[n],e=!0),this.shuffledQuestions[t].answers[n].pointer=r[n]}}},getQuestions:function(){for(var s=this,t=function(t){var e=s.shuffledQuestions.pop();s.questions.push({question:e.question,answers:e.answers,correctAnswer:e.correctAnswer,givenAnswer:null,correctAnswerText:e.answers.find(function(s){return s.pointer===e.correctAnswer})})},e=0;e<this.nQuestions;e++)t()},getResults:function(){this.showCorrectAnswers=!0;for(var s=0;s<this.questions.length;s++)this.questions[s].givenAnswer?this.questions[s].givenAnswer==this.questions[s].correctAnswer?this.colorClass.push("background bg-success"):this.colorClass.push("background bg-danger"):this.colorClass.push("background bg-warning");this.showResults=!0},refresh:function(){this.clear(),this.nQuestions=this.parameters.nQuestions,this.prepareQuestions(),this.getQuestions()},clear:function(){this.showResults=!1,this.questions=[],this.showCorrectAnswers=!1,this.shuffledQuestions=[],this.colorClass=[],this.nQuestions=null,this.$refs.Results&&this.$refs.Results.clear()}}},q={render:function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{attrs:{id:"test"}},[s._l(s.questions,function(t,n){return e("div",{staticClass:"row justify-content-md-center"},[e("div",{staticClass:"coloredCol col col-lg-1 border",class:[s.colorClass[n]]}),s._v(" "),e("div",{staticClass:"questionCol col col-lg-5 border"},[s._v(s._s(t.question))]),s._v(" "),e("div",{staticClass:"answersCol col col-lg-5 border"},s._l(t.answers,function(r){return e("div",{staticClass:"form-check"},[e("label",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.givenAnswer,expression:"question.givenAnswer"}],staticClass:"form-check-input",attrs:{name:n,type:"radio",disabled:s.showCorrectAnswers},domProps:{value:r.pointer,checked:s._q(t.givenAnswer,r.pointer)},on:{change:function(e){return s.$set(t,"givenAnswer",r.pointer)}}}),s._v(" "),e("span",[s._v(s._s(r.pointer)+"- "+s._s(r.answer))])])])}),0),s._v(" "),e("div",{staticClass:"resultCol col col-lg-1 border"},[e("div",{directives:[{name:"show",rawName:"v-show",value:s.showCorrectAnswers,expression:"showCorrectAnswers"}]},[s._v(s._s(t.correctAnswer))])])])}),s._v(" "),e("div",{staticClass:"row justify-content-md-center"},[e("div",{staticClass:"col col-6",attrs:{id:"getResultsButton"}},[e("button",{staticClass:"btn",on:{click:s.getResults}},[s._v("Get Results")])]),s._v(" "),e("div",{staticClass:"col col-6",attrs:{id:"getResultsButton"}},[e("button",{staticClass:"btn",on:{click:s.refresh}},[s._v("Refresh")])])]),s._v(" "),s.showResults?e("Results",{ref:"Results",attrs:{parameters:s.parameters,questions:s.questions}}):s._e()],2)},staticRenderFns:[]};var k={name:"MockTest",props:["allQuestions"],components:{Test:e("VU/8")(x,q,!1,function(s){e("v5hL")},"data-v-3d4d7734",null).exports},data:function(){return{nQuestions:null,correctAnswersPoints:null,noAnswersPoints:null,wrongAnswersPoints:null,inputCreated:!1,parameters:{nQuestions:null,correctAnswersPoints:null,noAnswersPoints:null,wrongAnswersPoints:null}}},mounted:function(){this.allQuestions||this.$emit("refresh")},methods:{goOn:function(){this.inputCreated=!0,this.parameters.nQuestions=this.nQuestions,this.parameters.correctAnswersPoints=this.correctAnswersPoints,this.parameters.noAnswersPoints=this.noAnswersPoints,this.parameters.wrongAnswersPoints=this.wrongAnswersPoints,this.$refs.Test&&this.$refs.Test.refresh()}}},y={render:function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{attrs:{id:"mocktest"}},[e("div",{staticClass:"container",attrs:{id:"header-mocktest"}},[e("div",{staticClass:"row justify-content-md-center"},[e("div",{staticClass:"col"},[e("input",{directives:[{name:"model",rawName:"v-model",value:s.nQuestions,expression:"nQuestions"}],attrs:{type:"text",placeholder:"N° Questions"},domProps:{value:s.nQuestions},on:{input:function(t){t.target.composing||(s.nQuestions=t.target.value)}}})])]),s._v(" "),e("div",{staticClass:"row justify-content-md-center"},[e("div",{staticClass:"col col-lg-4"},[e("input",{directives:[{name:"model",rawName:"v-model",value:s.correctAnswersPoints,expression:"correctAnswersPoints"}],attrs:{type:"text",placeholder:"Points correct answer"},domProps:{value:s.correctAnswersPoints},on:{input:function(t){t.target.composing||(s.correctAnswersPoints=t.target.value)}}})]),s._v(" "),e("div",{staticClass:"col col-lg-4"},[e("input",{directives:[{name:"model",rawName:"v-model",value:s.wrongAnswersPoints,expression:"wrongAnswersPoints"}],attrs:{type:"text",placeholder:"Points wrong answer"},domProps:{value:s.wrongAnswersPoints},on:{input:function(t){t.target.composing||(s.wrongAnswersPoints=t.target.value)}}})]),s._v(" "),e("div",{staticClass:"col col-lg-4"},[e("input",{directives:[{name:"model",rawName:"v-model",value:s.noAnswersPoints,expression:"noAnswersPoints"}],attrs:{type:"text",placeholder:"Points no answer"},domProps:{value:s.noAnswersPoints},on:{input:function(t){t.target.composing||(s.noAnswersPoints=t.target.value)}}})])]),s._v(" "),e("div",{staticClass:"row justify-content-md-center"},[e("div",{staticClass:"col",on:{click:s.goOn}},[e("button",{staticClass:"btn"},[s._v("Go On")])])])]),s._v(" "),s.inputCreated?e("div",{staticClass:"container",attrs:{id:"body-mocktest"}},[e("Test",{ref:"Test",attrs:{allQuestions:s.allQuestions,parameters:s.parameters}})],1):s._e()])},staticRenderFns:[]};var j=e("VU/8")(k,y,!1,function(s){e("JvGh")},"data-v-3d23ee34",null).exports,D={name:"Table",props:["allRows"],data:function(){return{rows:[],questions:[],pointersArray:["A","B","C","D","E","F","G","H"],showModal:!1}},mounted:function(){if(this.allRows)for(var s=0;s<this.allRows.length;s++)this.rows.push({str:this.allRows[s],numRow:s,isQuestion:!1,isAnswer:!1,isCorrect:!1,showModal:!1});else this.$emit("refresh")},methods:{createQuestionsArray:function(){for(var s=this,t="",e=[],n="",r=function(r){s.rows.find(function(s){return s.numRow===r}).isQuestion?t=s.rows.find(function(s){return s.numRow===r}).str:s.rows.find(function(s){return s.numRow===r}).isAnswer&&(e.push({str:s.rows.find(function(s){return s.numRow===r}).str,numRow:r}),s.rows.find(function(s){return s.numRow===r}).isCorrect&&(n=s.rows.find(function(s){return s.numRow===r}).str)),r+1!=s.allRows.length&&!s.rows.find(function(s){return s.numRow===r+1}).isQuestion||""==t||(s.questions.push({question:t,answers:e,correctAnswer:s.pointersArray[e.indexOf(e.find(function(s){return s.str==n}))]}),e=[],n="")},o=0;o<this.allRows.length;o++)r(o)},shuffle:function(s){for(var t=s.length;t>0;){var e=Math.floor(Math.random()*t),n=s[--t];s[t]=s[e],s[e]=n}return s},csvFile:function(){for(var s="",t=0;t<this.questions.length;t++){for(var e=[],n=0;n<this.questions[t].answers.length;n++)e.push(this.questions[t].answers[n].str);s+=this.questions[t].question+"$"+e.join("$")+"$"+this.questions[t].correctAnswer,t+1!=this.questions.length&&(s+="\n")}if(""!=s){var r=document.createElement("a");r.href="data:text/csv;charset=utf-8,"+encodeURI(s);var o=(new Date).toISOString();r.download="csv_"+o+".csv",r.click()}},jsonFile:function(){for(var s=[],t=0;t<this.questions.length;t++){for(var e=[],n=0;n<this.questions[t].answers.length;n++)e.push(this.questions[t].answers[n].str);s.push({question:this.questions[t].question,answers:e,correctAnswer:this.questions[t].correctAnswer})}if(s!=[]){var r=document.createElement("a");r.href="data:text/json;charset=utf-8,"+encodeURIComponent(i()(s));var o=(new Date).toISOString();r.download="json_"+o+".json",r.click()}},download:function(){this.questions=[],this.createQuestionsArray();for(var s=!0,t=0;t<this.questions.length;t++)this.questions[t].correctAnswer||(s=!1);s?(this.jsonFile(),this.$emit("refresh")):this.showModal=!0},questionButton:function(s){this.rows.find(function(t){return t.numRow===s}).isQuestion?this.rows.find(function(t){return t.numRow===s}).isQuestion=!1:this.rows.find(function(t){return t.numRow===s}).isQuestion=!0},answerButton:function(s){this.rows.find(function(t){return t.numRow===s}).isAnswer?this.rows.find(function(t){return t.numRow===s}).isAnswer=!1:this.rows.find(function(t){return t.numRow===s}).isAnswer=!0},correctAnswerButton:function(s){this.rows.find(function(t){return t.numRow===s}).isCorrect?this.rows.find(function(t){return t.numRow===s}).isCorrect=!1:this.rows.find(function(t){return t.numRow===s}).isCorrect=!0}}},F={render:function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{attrs:{id:"table"}},[e("table",{staticClass:"table"},[s._m(0),s._v(" "),e("tbody",s._l(s.rows,function(t){return e("tr",[e("th",{attrs:{scope:"row"}},[s._v(s._s(t.numRow))]),s._v(" "),e("td",[e("button",{staticClass:"btn",class:{"btn-success":t.isQuestion},on:{click:function(e){return s.questionButton(t.numRow)}}})]),s._v(" "),e("td",[e("button",{staticClass:"btn",class:{"btn-info":t.isAnswer},on:{click:function(e){return s.answerButton(t.numRow)}}})]),s._v(" "),e("td",[e("button",{staticClass:"btn",class:{"btn-danger":t.isCorrect},on:{click:function(e){return s.correctAnswerButton(t.numRow)}}})]),s._v(" "),e("td",{staticClass:"text text-left",class:{"text-success":t.isQuestion,"text-info":t.isAnswer,"text-danger":t.isCorrect}},[s._v(s._s(t.str))])])}),0)]),s._v(" "),e("button",{staticClass:"btn",on:{click:s.download}},[s._v("Download")]),s._v(" "),s.showModal?e("div",[e("transition",{attrs:{name:"modal"}},[e("div",{staticClass:"modal-mask"},[e("div",{staticClass:"modal-wrapper"},[e("div",{staticClass:"modal-dialog"},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-body"},[e("div",{staticClass:"container-fluid"},s._l(s.questions,function(t){return e("div",[t.correctAnswer?s._e():e("div",[e("div",{staticClass:"row justify-content-md-center"},[e("div",{staticClass:"col col-lg-2 border"}),s._v(" "),e("div",{staticClass:"col col-lg-10 border font-weight-bold"},[s._v("\n                        "+s._s(t.question)+"\n                      ")])]),s._v(" "),s._l(t.answers,function(t){return e("div",{staticClass:"row justify-content-md-center"},[e("div",{staticClass:"col col-lg-2 border"},[e("button",{staticClass:"btn",class:{"btn-danger":s.rows.find(function(s){return s.numRow===t.numRow}).isCorrect},on:{click:function(e){return s.correctAnswerButton(t.numRow)}}})]),s._v(" "),e("div",{staticClass:"col col-lg-10 border text text-left",class:{"text-danger":s.rows.find(function(s){return s.numRow===t.numRow}).isCorrect}},[s._v("\n                        "+s._s(t.str)+"\n                      ")])])})],2)])}),0)]),s._v(" "),e("div",{staticClass:"modal-footer"},[e("div",{staticClass:"row justify-content-md-center"},[e("div",{staticClass:"col col-lg-4"}),s._v(" "),e("div",{staticClass:"col col-lg-4"},[e("button",{staticClass:"btn",attrs:{type:"button"},on:{click:function(t){s.showModal=!1}}},[s._v(" Ok ")])]),s._v(" "),e("div",{staticClass:"col col-lg-4"})])])])])])])])],1):s._e()])},staticRenderFns:[function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[s._v("#")]),s._v(" "),e("th",{attrs:{scope:"col"}},[s._v("Question")]),s._v(" "),e("th",{attrs:{scope:"col"}},[s._v("Answer")]),s._v(" "),e("th",{attrs:{scope:"col"}},[s._v("Correct Answer")]),s._v(" "),e("th",{staticClass:"text text-left",attrs:{scope:"col"}},[s._v("String")])])])}]};var $=e("VU/8")(D,F,!1,function(s){e("/SXP")},"data-v-016db03e",null).exports;r.a.use(Q.a);var T=new Q.a({routes:[{path:"/"},{path:"/MockTestPage",name:"MockTestPage",component:j,props:!0},{path:"/Table",name:"Table",component:$,props:!0}]}),E={name:"App",components:{DragAndDrop:b},data:function(){return{created:!1,csvParsed:!1,allQuestions:null,pdfParsed:!1,jsonParsed:!1,allRows:null}},methods:{createJsonFromCsv:function(){for(var s=[],t=0;t<this.allQuestions.length;t++){for(var e=[],n=0;n<this.allQuestions[t].answers.length;n++)e.push(this.allQuestions[t].answers[n].answer);s.push({question:this.allQuestions[t].question,answers:e,correctAnswer:this.allQuestions[t].correctAnswer})}if(s!=[]){var r=document.createElement("a");r.href="data:text/json;charset=utf-8,"+encodeURIComponent(i()(s));var o=(new Date).toISOString();r.download="json_"+o+".json",r.click()}this.clear()},createMockTest:function(){this.created=!0,this.csvParsed=!1,this.jsonParsed=!1,T.push({name:"MockTestPage",params:{allQuestions:this.allQuestions}})},createTable:function(){this.created=!0,this.pdfParsed=!1,T.push({name:"Table",params:{allRows:this.allRows}})},clear:function(){this.$refs.dragAndDropComp&&this.$refs.dragAndDropComp.clear(),this.created=!1,this.csvParsed=!1,this.allQuestions=null,this.pdfParsed=!1,this.jsonParsed=!1,this.allRows=null,T.push({path:"/"})},passFileData:function(s){this.allRows=null,this.pdfParsed=!1,this.jsonParsed=!1,this.allQuestions=s,this.csvParsed=!0},passPDFData:function(s){this.allQuestions=null,this.csvParsed=!1,this.jsonParsed=!1,this.allRows=s,this.pdfParsed=!0},passJsonData:function(s){this.allRows=null,this.csvParsed=!1,this.pdfParsed=!1,this.allQuestions=s,this.jsonParsed=!0},hideButtonCreate:function(){this.csvParsed=!1,this.pdfParsed=!1,this.allQuestions=null,this.allRows=null,this.jsonParsed=!1}}},B={render:function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"container",attrs:{id:"header"}},[e("div",{staticClass:"row justify-content-md-center"},[e("div",{directives:[{name:"show",rawName:"v-show",value:s.csvParsed,expression:"csvParsed"}],staticClass:"col",on:{click:s.createMockTest}},[e("button",{staticClass:"btn"},[s._v("Create Mock Test")])])]),s._v(" "),e("div",{staticClass:"row justify-content-md-center"},[e("div",{directives:[{name:"show",rawName:"v-show",value:s.csvParsed,expression:"csvParsed"}],staticClass:"col",on:{click:s.createJsonFromCsv}},[e("button",{staticClass:"btn"},[s._v("Create Json")])])]),s._v(" "),e("div",{staticClass:"row justify-content-md-center"},[e("div",{directives:[{name:"show",rawName:"v-show",value:s.jsonParsed,expression:"jsonParsed"}],staticClass:"col",on:{click:s.createMockTest}},[e("button",{staticClass:"btn"},[s._v("Create Mock Test")])])]),s._v(" "),e("div",{staticClass:"row justify-content-md-center"},[e("div",{directives:[{name:"show",rawName:"v-show",value:s.pdfParsed,expression:"pdfParsed"}],staticClass:"col",on:{click:s.createTable}},[e("button",{staticClass:"btn"},[s._v("Create Json")])])])]),s._v(" "),s.created?s._e():e("DragAndDrop",{ref:"dragAndDropComp",on:{changedFile:s.hideButtonCreate,parsedCsv:s.passFileData,parsedPDF:s.passPDFData,parsedJson:s.passJsonData}}),s._v(" "),e("div",{attrs:{id:"main"}},[s.created?e("router-view",{on:{refresh:s.clear}}):s._e()],1),s._v(" "),e("div",{attrs:{id:"footer"}},[e("div",{staticClass:"row justify-content-md-center"},[e("div",{staticClass:"col col-6",attrs:{id:"clearButton"}},[e("button",{staticClass:"btn",on:{click:s.clear}},[s._v("Clear")])])])])],1)},staticRenderFns:[]};var M=e("VU/8")(E,B,!1,function(s){e("Adi+")},null,null).exports;r.a.config.productionTip=!1,new r.a({el:"#app",router:T,components:{App:M,DragAndDrop:b},template:"<App/>"})},v5hL:function(s,t){},wAuL:function(s,t){}},["NHnr"]);
//# sourceMappingURL=app.fa5a2fa175e1b878a021.js.map