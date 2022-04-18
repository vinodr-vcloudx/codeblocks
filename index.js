
var message1 = null;
var message2 = null;
var message3 = null;
var message4 = null;
var message5 = null;
var message6 = null;
var message7 = null;

function enxHookRoomConnected() {
    console.log('Room is connected');
    message1 = document.createElement('div');
    message1.classList.add('enxHookmessage1');
    document.getElementsByTagName('body')[0].appendChild(message1);
    message1.innerHTML = `<h5>Room name is ${room.roomSettings.description} </h5>
    <h5>Local Stream ID is ${localStream.getID()}
    `;
}

function enxHookRoomDisconnected() {
    console.log('Room disconnected Event', enxEvents.roomDisconnected);
    console.log('Room is disconnected');
    message2 = document.createElement('div');
    message2.classList.add('enxHookmessage2');
    document.getElementsByTagName('body')[0].appendChild(message2);
    message2.innerHTML = `<h5>Disconnected Event ${enxEvents.roomDisconnected.message}</h5>`
}

function enxHookCustomSignalReceived() {
    console.log('custom signal event', enxEvents.customSignalReceived);
    console.log('Custom signal is received');
    message3 = document.createElement('div');
    message3.classList.add('enxHookmessage3');
    document.getElementsByTagName('body')[0].appendChild(message3);
    message3.innerHTML = `<h5>Custom Signal received ${enxEvents.customSignalReceived.message}</h5>`
}

function enxHookRoomAwaited() {
    console.log('Room is awaited');
    message4 = document.createElement('div');
    message4.classList.add('enxHookmessage4');
    document.getElementsByTagName('body')[0].appendChild(message4);
    message4.innerHTML = `<h5>Room is awaited</h5>`
}

function enxHookRoomEntryAllowed() {
    console.log('ROOM Allowed EVENT', enxEvents.roomEntryAllowed);
    console.log('Entry is allowed in room');
    message5 = document.createElement('div');
    message5.classList.add('enxHookmessage5');
    document.getElementsByTagName('body')[0].appendChild(message5);
    message5.innerHTML = `<h5>Room is allowed ${enxEvents.roomEntryAllowed.message}</h5>`

}

function enxHookRoomEntryDenied() {
    console.log('ROOM Denied EVENT', enxEvents.roomEntryDenied);
    console.log('Entry is denied in room');
    message5 = document.createElement('div');
    message5.classList.add('enxHookmessage5');
    document.getElementsByTagName('body')[0].appendChild(message5);
    message5.innerHTML = `<h5>Room is denied ${enxEvents.roomEntryDenied.message}</h5>`
}

function enxHookRoomReconnected() {
    console.log('Room reconnected event', enxEvents.roomReconnected);
    console.log('Room is reconnected');
    message6 = document.createElement('div');
    message6.classList.add('enxHookmessage6');
    document.getElementsByTagName('body')[0].appendChild(message6);
    message6.innerHTML = `<h5>Room is reconnected ${enxEvents.roomReconnected.message}</h5>`
}

function enxHookStreamSubscribed() {
    console.log('Stream subscribed event', enxEvents.streamSubscribed);
    console.log('Stream is subscribed');
    message5 = document.createElement('div');
    message5.classList.add('enxHookmessage5');
    document.getElementsByTagName('body')[0].appendChild(message5);
    message5.innerHTML = `<h5>Stream is Subscribed</h5>`
}
