goog.provide('session.client.websocket');
goog.require('cljs.core');
goog.require('goog.net.WebSocket.MessageEvent');
goog.require('goog.net.WebSocket.EventType');
goog.require('goog.net.WebSocket');
goog.require('goog.events');
session.client.websocket.create = (function create(){
return (new goog.net.WebSocket());
});
/**
* Configures WebSocket
*/
session.client.websocket.configure = (function() {
var configure = null;
var configure__3 = (function (soc,opened,message){
return configure.call(null,soc,opened,message,null);
});
var configure__4 = (function (soc,opened,message,error){
return configure.call(null,soc,opened,message,error,null);
});
var configure__5 = (function (soc,opened,message,error,closed){
var handler = (new goog.events.EventHandler());
handler.listen(soc,goog.net.WebSocket.EventType.OPENED,opened);
handler.listen(soc,goog.net.WebSocket.EventType.MESSAGE,(function (p1__3111_SHARP_){
var payload = p1__3111_SHARP_.message();
var vec__3113 = cljs.core.re_matches.call(null,/\/([^ ]+) (.*)/,payload);
var _ = cljs.core.nth.call(null,vec__3113,0,null);
var cmd = cljs.core.nth.call(null,vec__3113,1,null);
var body = cljs.core.nth.call(null,vec__3113,2,null);
alert("websocket",[cljs.core.str("R: "),cljs.core.str(payload)].join(''));
return message.call(null,cmd,body);
}));
if(cljs.core.truth_(error))
{handler.listen(soc,goog.net.WebSocket.EventType.ERROR,error);
} else
{}
if(cljs.core.truth_(closed))
{handler.listen(soc,goog.net.WebSocket.EventType.CLOSED,closed);
} else
{}
return soc;
});
configure = function(soc,opened,message,error,closed){
switch(arguments.length){
case 3:
return configure__3.call(this,soc,opened,message);
case 4:
return configure__4.call(this,soc,opened,message,error);
case 5:
return configure__5.call(this,soc,opened,message,error,closed);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
configure.cljs$lang$arity$3 = configure__3;
configure.cljs$lang$arity$4 = configure__4;
configure.cljs$lang$arity$5 = configure__5;
return configure;
})()
;
/**
* Connects WebSocket
*/
session.client.websocket.connect_BANG_ = (function connect_BANG_(socket,url){
try{socket.open(url);
return socket;
}catch (e3115){if(cljs.core.instance_QMARK_.call(null,Error,e3115))
{var e = e3115;
return alert("websocket","No WebSocket supported, get a decent browser.");
} else
{if("\uFDD0'else")
{throw e3115;
} else
{return null;
}
}
}});
/**
* Closes WebSocket
*/
session.client.websocket.close_BANG_ = (function close_BANG_(socket){
return socket.close();
});
/**
* Sends a command to server, optionally with message.
*/
session.client.websocket.emit_BANG_ = (function() {
var emit_BANG_ = null;
var emit_BANG___2 = (function (socket,cmd){
return emit_BANG_.call(null,socket,cmd,null);
});
var emit_BANG___3 = (function (socket,cmd,msg){
var packet = [cljs.core.str("/"),cljs.core.str(cmd),cljs.core.str((cljs.core.truth_(msg)?[cljs.core.str(" "),cljs.core.str(msg)].join(''):null))].join('');
alert("websocket",[cljs.core.str("T: "),cljs.core.str(packet)].join(''));
return socket.send(packet);
});
emit_BANG_ = function(socket,cmd,msg){
switch(arguments.length){
case 2:
return emit_BANG___2.call(this,socket,cmd);
case 3:
return emit_BANG___3.call(this,socket,cmd,msg);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
emit_BANG_.cljs$lang$arity$2 = emit_BANG___2;
emit_BANG_.cljs$lang$arity$3 = emit_BANG___3;
return emit_BANG_;
})()
;
