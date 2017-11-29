const socket = io();

$('.send-button').click(function (event) {
  event.preventDefault();

  let msg = $('#message-box').val();

  if (msg.trim() === '') {
    return null
  }

  //TODO Nice-to-have: unique usernames
  //TODO Add timestamps
  //TODO Fix chat messages populating wrong way on page load
  const time = moment().tz('America/Chicago').format('h:mm:ss a');

  msg = time + ' - ' + 'A ' + JSON.parse(window.localStorage.payload).species + ' - ' + msg;

  socket.emit('chat', msg);

  $('.messages').append($('<p>').text(msg));
  $('#message-box').val('');
  return false;
});

socket.on('chat', function (msg) {
  $('.messages').append($('<p>').text(msg));
});