const socket = io();
$('.send-button').click(function () {
  event.preventDefault();
  let msg = $('#message-box').val();
  if (msg === '') {
    return null
  }
  msg = 'A ' + JSON.parse(window.localStorage.payload).species + ' - ' + msg;
  socket.emit('chat', msg);
  $('.messages').prepend($('<p>').text(msg));
  $('#message-box').val('');
  return false;
});
socket.on('chat', function (msg) {
  $('.messages').prepend($('<p>').text(msg));
});