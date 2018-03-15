//Particles

particlesJS.load('particles-js', '/particles.json', function() {
  console.log('');
});

//Chat
const socket = io();

$('.send-button').click(function (event) {
  event.preventDefault();

  let msg = $('#message-box').val();

  if (msg.trim() === '') {
    return null
  }

  const time = moment().tz('America/Chicago').format('h:mm:ss a');

  if(JSON.parse(window.localStorage.payload).helpers.purchasedHelpers.Madagascar >= 1) {
    msg = time + ' - 🇲🇬 ' + window.localStorage.user + ' - ' + msg;
  } else {
    msg = time + ' - ' + window.localStorage.user + ' - ' + msg;
  }

  const chatPackage = {
    username: window.localStorage.user,
    content: msg,
  };
  if((window.localStorage.user) === undefined){
    alert('You need an account to chat')
  } else {
    socket.emit('chat', chatPackage);

    $('.messages').append($('<p>').text(msg));
  }

  $('#message-box').val('');
  return false;
});

// $('.send-button').click(function (event) {
//   event.preventDefault();
// });

const ban = function(user) {

};

socket.on('chat', function (msg) {
  if(window.localStorage.user === 'Admin') {
    const message = new $('<p/>', {text: msg.content});
    const banButton = new $('<button />', {class: "button ban-btn", text: 'X'});
    banButton.attr('id', msg.user);
    message.append(banButton);
    $('.messages').append(message);
  } else {
    $('.messages').append($('<p>', { text: msg.content, id: msg.user}));
  }
});

//login-logout
$(() => {
  $(document).on('submit', '#create-form', function(event) {
    event.preventDefault();
  });

  $(document).on('submit', '#login-form', function(event) {
    event.preventDefault();
    setTimeout(function(){location.reload();}, 500)
  });

  $(document).on('submit', '.logout-btn', function(event) {
    event.preventDefault();
    setTimeout(function(){location.reload();}, 500)
  });

  $(document).on('click', '.ban-btn', function(event) {
    event.preventDefault();
    $.ajax({
      url: '/ban',
      method: 'POST',
      data: {user: event.target.attributes[1].nodeValue},
      dataType: 'json',
    }).done(response => {
      console.log(response)
    });
    setTimeout(function(){location.reload();}, 500)
  });
});