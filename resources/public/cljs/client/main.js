goog.provide('session.client.main');
goog.require('cljs.core');
goog.require('session.client.hiccup');
goog.require('goog.events');
goog.require('session.client.loop');
goog.require('session.client.session');
goog.require('cljs.reader');
goog.require('session.ui');
goog.require('subpar.core');
goog.require('goog.events.EventType');
goog.require('goog.object');
goog.require('session.client.mvc');
goog.require('cljs_jquery.core');
goog.require('session.client.subsession');
goog.require('session.client.editor');
goog.require('fetch.remotes');
goog.require('clojure.browser.repl');
clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
session.client.main.session = cljs.core.atom.call(null,null);
session.client.main.load_session = (function load_session(id){
return fetch.remotes.remote_callback.call(null,"get-session",cljs.core.PersistentVector.fromArray([id], true),(function (result){
session.client.main.saved_result = (new cljs.core.Keyword("\uFDD0'result")).call(null,result);
var s__26077 = cljs.reader.read_string.call(null,(new cljs.core.Keyword("\uFDD0'result")).call(null,result));
var v__26079 = ((cljs.core._EQ_.call(null,"\uFDD0'this",session.client.mvc.view.call(null,s__26077)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____26078 = cljs.core.vector_QMARK_.call(null,session.client.mvc.view.call(null,s__26077));
if(or__3824__auto____26078)
{return or__3824__auto____26078;
} else
{return cljs.core.keyword_QMARK_.call(null,session.client.mvc.view.call(null,s__26077));
}
})())?cljs_jquery.core.dom_create.call(null,session.client.mvc.view.call(null,s__26077)):((true)?cljs_jquery.core.jquery.call(null,session.client.mvc.view.call(null,s__26077)):null)));
cljs.core.reset_BANG_.call(null,session.client.main.session,s__26077);
session.client.mvc.control.call(null,s__26077,v__26079);
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this","body > .container"))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____26080 = cljs.core.vector_QMARK_.call(null,"body > .container");
if(or__3824__auto____26080)
{return or__3824__auto____26080;
} else
{return cljs.core.keyword_QMARK_.call(null,"body > .container");
}
})())?cljs_jquery.core.dom_create.call(null,"body > .container"):((true)?cljs_jquery.core.jquery.call(null,"body > .container"):null))),cljs.core.PersistentVector.fromArray(["html",""], true));
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",v__26079))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____26081 = cljs.core.vector_QMARK_.call(null,v__26079);
if(or__3824__auto____26081)
{return or__3824__auto____26081;
} else
{return cljs.core.keyword_QMARK_.call(null,v__26079);
}
})())?cljs_jquery.core.dom_create.call(null,v__26079):((true)?cljs_jquery.core.jquery.call(null,v__26079):null))),cljs.core.PersistentVector.fromArray(["appendTo",((cljs.core._EQ_.call(null,"\uFDD0'this","body > .container"))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____26082 = cljs.core.vector_QMARK_.call(null,"body > .container");
if(or__3824__auto____26082)
{return or__3824__auto____26082;
} else
{return cljs.core.keyword_QMARK_.call(null,"body > .container");
}
})())?cljs_jquery.core.dom_create.call(null,"body > .container"):((true)?cljs_jquery.core.jquery.call(null,"body > .container"):null)))], true));
}));
});
session.client.main.save_session = (function save_session(){
return fetch.remotes.remote_callback.call(null,"store-session",cljs.core.PersistentVector.fromArray([(new cljs.core.Keyword("\uFDD0'id")).call(null,cljs.core.deref.call(null,session.client.main.session)),cljs.core.pr_str.call(null,cljs.core.deref.call(null,session.client.main.session))], true),(function (result){
return result;
}));
});
session.client.main.load_new_file = (function load_new_file(x){
var s__26089 = cljs.reader.read_string.call(null,x);
var v__26091 = ((cljs.core._EQ_.call(null,"\uFDD0'this",session.client.mvc.view.call(null,s__26089)))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____26090 = cljs.core.vector_QMARK_.call(null,session.client.mvc.view.call(null,s__26089));
if(or__3824__auto____26090)
{return or__3824__auto____26090;
} else
{return cljs.core.keyword_QMARK_.call(null,session.client.mvc.view.call(null,s__26089));
}
})())?cljs_jquery.core.dom_create.call(null,session.client.mvc.view.call(null,s__26089)):((true)?cljs_jquery.core.jquery.call(null,session.client.mvc.view.call(null,s__26089)):null)));
cljs.core.reset_BANG_.call(null,session.client.main.session,s__26089);
session.client.mvc.control.call(null,s__26089,v__26091);
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this","body > .container"))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____26092 = cljs.core.vector_QMARK_.call(null,"body > .container");
if(or__3824__auto____26092)
{return or__3824__auto____26092;
} else
{return cljs.core.keyword_QMARK_.call(null,"body > .container");
}
})())?cljs_jquery.core.dom_create.call(null,"body > .container"):((true)?cljs_jquery.core.jquery.call(null,"body > .container"):null))),cljs.core.PersistentVector.fromArray(["html",""], true));
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",v__26091))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____26093 = cljs.core.vector_QMARK_.call(null,v__26091);
if(or__3824__auto____26093)
{return or__3824__auto____26093;
} else
{return cljs.core.keyword_QMARK_.call(null,v__26091);
}
})())?cljs_jquery.core.dom_create.call(null,v__26091):((true)?cljs_jquery.core.jquery.call(null,v__26091):null))),cljs.core.PersistentVector.fromArray(["appendTo",((cljs.core._EQ_.call(null,"\uFDD0'this","body > .container"))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____26094 = cljs.core.vector_QMARK_.call(null,"body > .container");
if(or__3824__auto____26094)
{return or__3824__auto____26094;
} else
{return cljs.core.keyword_QMARK_.call(null,"body > .container");
}
})())?cljs_jquery.core.dom_create.call(null,"body > .container"):((true)?cljs_jquery.core.jquery.call(null,"body > .container"):null)))], true));
});
session.client.main.download_session = (function download_session(){
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this","#downloadformdata"))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____26100 = cljs.core.vector_QMARK_.call(null,"#downloadformdata");
if(or__3824__auto____26100)
{return or__3824__auto____26100;
} else
{return cljs.core.keyword_QMARK_.call(null,"#downloadformdata");
}
})())?cljs_jquery.core.dom_create.call(null,"#downloadformdata"):((true)?cljs_jquery.core.jquery.call(null,"#downloadformdata"):null))),cljs.core.PersistentVector.fromArray(["val",(function (){var _STAR_print_meta_STAR_26101__26102 = cljs.core._STAR_print_meta_STAR_;
try{cljs.core._STAR_print_meta_STAR_ = true;
return cljs.core.pr_str.call(null,cljs.core.deref.call(null,session.client.main.session));
}finally {cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR_26101__26102;
}})()], true));
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this","#downloadform"))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____26104 = cljs.core.vector_QMARK_.call(null,"#downloadform");
if(or__3824__auto____26104)
{return or__3824__auto____26104;
} else
{return cljs.core.keyword_QMARK_.call(null,"#downloadform");
}
})())?cljs_jquery.core.dom_create.call(null,"#downloadform"):((true)?cljs_jquery.core.jquery.call(null,"#downloadform"):null))),cljs.core.PersistentVector.fromArray(["submit"], true));
});
session.client.main.ds2 = (function ds2(){
var dataurl__26112 = [cljs.core.str("data:text/csv;charset=UTF-8,"),cljs.core.str(encodeURIComponent((function (){var _STAR_print_meta_STAR_26109__26110 = cljs.core._STAR_print_meta_STAR_;
try{cljs.core._STAR_print_meta_STAR_ = true;
return cljs.core.pr_str.call(null,cljs.core.deref.call(null,session.client.main.session));
}finally {cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR_26109__26110;
}})()))].join('');
return window.location.href=dataurl__26112;
});
session.client.main.keymap = {"Shift-Enter":(function (cm){
return cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",cm.getWrapperElement()))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____26113 = cljs.core.vector_QMARK_.call(null,cm.getWrapperElement());
if(or__3824__auto____26113)
{return or__3824__auto____26113;
} else
{return cljs.core.keyword_QMARK_.call(null,cm.getWrapperElement());
}
})())?cljs_jquery.core.dom_create.call(null,cm.getWrapperElement()):((true)?cljs_jquery.core.jquery.call(null,cm.getWrapperElement()):null))),cljs.core.PersistentVector.fromArray(["trigger","evaluate-input"], true));
}),"Backspace":(function (cm){
return subpar.core.backward_delete.call(null,cm);
}),"Delete":(function (cm){
return subpar.core.forward_delete.call(null,cm);
}),"Ctrl-D":(function (cm){
return subpar.core.forward_delete.call(null,cm);
}),"Shift-9":(function (cm){
return subpar.core.open_expression.call(null,cm,"()");
}),"[":(function (cm){
return subpar.core.open_expression.call(null,cm,"[]");
}),"Shift-[":(function (cm){
return subpar.core.open_expression.call(null,cm,"{}");
}),"Shift-0":(function (cm){
return subpar.core.close_expression.call(null,cm,")");
}),"]":(function (cm){
return subpar.core.close_expression.call(null,cm,"]");
}),"Shift-]":(function (cm){
return subpar.core.close_expression.call(null,cm,"}");
}),"Shift-'":(function (cm){
return subpar.core.double_quote.call(null,cm);
}),"Ctrl-Alt-F":(function (cm){
return subpar.core.forward.call(null,cm);
}),"Ctrl-Alt-B":(function (cm){
return subpar.core.backward.call(null,cm);
}),"Ctrl-Alt-U":(function (cm){
return subpar.core.backward_up.call(null,cm);
}),"Ctrl-Alt-D":(function (cm){
return subpar.core.forward_down.call(null,cm);
}),"Ctrl-Alt-P":(function (cm){
return subpar.core.backward_down.call(null,cm);
}),"Ctrl-Alt-N":(function (cm){
return subpar.core.forward_up.call(null,cm);
}),"Shift-Ctrl-[":(function (cm){
return subpar.core.backward_barf.call(null,cm);
}),"Ctrl-Alt-Right":(function (cm){
return subpar.core.backward_barf.call(null,cm);
}),"Ctrl-]":(function (cm){
return subpar.core.backward_barf.call(null,cm);
}),"Shift-Ctrl-]":(function (cm){
return subpar.core.forward_barf.call(null,cm);
}),"Ctrl-Left":(function (cm){
return subpar.core.forward_barf.call(null,cm);
}),"Shift-Ctrl-9":(function (cm){
return subpar.core.backward_slurp.call(null,cm);
}),"Ctrl-Alt-Left":(function (cm){
return subpar.core.backward_slurp.call(null,cm);
}),"Ctrl-[":(function (cm){
return subpar.core.backward_slurp.call(null,cm);
}),"Shift-Ctrl-0":(function (cm){
return subpar.core.forward_slurp.call(null,cm);
}),"Ctrl-Right":(function (cm){
return subpar.core.forward_slurp.call(null,cm);
}),"Alt-Up":(function (cm){
return subpar.core.splice_delete_backward.call(null,cm);
}),"Alt-Down":(function (cm){
return subpar.core.splice_delete_forward.call(null,cm);
}),"Alt-S":(function (cm){
return subpar.core.splice.call(null,cm);
}),"Ctrl-Alt-\\":(function (cm){
return subpar.core.indent_selection.call(null,cm);
}),"fallthrough":["basic","emacs"]};
(CodeMirror.keyMap["subpar"] = session.client.main.keymap);
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",document))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____26114 = cljs.core.vector_QMARK_.call(null,document);
if(or__3824__auto____26114)
{return or__3824__auto____26114;
} else
{return cljs.core.keyword_QMARK_.call(null,document);
}
})())?cljs_jquery.core.dom_create.call(null,document):((true)?cljs_jquery.core.jquery.call(null,document):null))),cljs.core.PersistentVector.fromArray(["ready",(function (){
cljs.reader.register_tag_parser_BANG_.call(null,"testtag",(function (x){
return cljs.core.PersistentVector.fromArray([cljs.core.PersistentVector.fromArray([x], true)], true);
}));
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this",".example"))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____26115 = cljs.core.vector_QMARK_.call(null,".example");
if(or__3824__auto____26115)
{return or__3824__auto____26115;
} else
{return cljs.core.keyword_QMARK_.call(null,".example");
}
})())?cljs_jquery.core.dom_create.call(null,".example"):((true)?cljs_jquery.core.jquery.call(null,".example"):null))),cljs.core.PersistentVector.fromArray(["on","click",(function (){
return session.client.main.load_session.call(null,cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this","\uFDD0'this"))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____26116 = cljs.core.vector_QMARK_.call(null,"\uFDD0'this");
if(or__3824__auto____26116)
{return or__3824__auto____26116;
} else
{return cljs.core.keyword_QMARK_.call(null,"\uFDD0'this");
}
})())?cljs_jquery.core.dom_create.call(null,"\uFDD0'this"):((true)?cljs_jquery.core.jquery.call(null,"\uFDD0'this"):null))),cljs.core.PersistentVector.fromArray(["attr","id"], true)));
})], true));
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this","#savebutton"))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____26117 = cljs.core.vector_QMARK_.call(null,"#savebutton");
if(or__3824__auto____26117)
{return or__3824__auto____26117;
} else
{return cljs.core.keyword_QMARK_.call(null,"#savebutton");
}
})())?cljs_jquery.core.dom_create.call(null,"#savebutton"):((true)?cljs_jquery.core.jquery.call(null,"#savebutton"):null))),cljs.core.PersistentVector.fromArray(["on","click",(function (){
return session.client.main.download_session.call(null);
})], true));
cljs_jquery.core.call_jquery.call(null,((cljs.core._EQ_.call(null,"\uFDD0'this","#fileupload"))?cljs_jquery.core.jquery.call(null,this):(((function (){var or__3824__auto____26118 = cljs.core.vector_QMARK_.call(null,"#fileupload");
if(or__3824__auto____26118)
{return or__3824__auto____26118;
} else
{return cljs.core.keyword_QMARK_.call(null,"#fileupload");
}
})())?cljs_jquery.core.dom_create.call(null,"#fileupload"):((true)?cljs_jquery.core.jquery.call(null,"#fileupload"):null))),cljs.core.PersistentVector.fromArray(["fileupload",goog.object.create("add",(function (e,data){
return data.submit().complete((function (result,status,xx){
return session.client.main.load_new_file.call(null,result.responseText);
}));
}))], true));
return session.client.main.load_session.call(null,"default-session");
})], true));