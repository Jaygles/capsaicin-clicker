//Particles

particlesJS.load('particles-js', '/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

//Chat
const socket = io();

$('.send-button').click(function (event) {
  event.preventDefault();

  let msg = $('#message-box').val();

  if (msg.trim() === '') {
    return null
  }

  //TODO Nice-to-have: unique usernames
  const time = moment().tz('America/Chicago').format('h:mm:ss a');

  if(JSON.parse(window.localStorage.payload).helpers.purchasedHelpers.Madagascar >= 1) {
    msg = time + ' - 🇲🇬 ' + 'A ' + JSON.parse(window.localStorage.payload).species + ' - ' + msg;
  } else {
    msg = time + ' - ' + 'A ' + JSON.parse(window.localStorage.payload).species + ' - ' + msg;
  }
  socket.emit('chat', msg);

  $('.messages').append($('<p>').text(msg));
  $('#message-box').val('');
  return false;
});

socket.on('chat', function (msg) {
  $('.messages').append($('<p>').text(msg));
});