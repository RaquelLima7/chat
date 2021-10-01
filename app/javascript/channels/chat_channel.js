import consumer from "./consumer"

const chatChannel = consumer.subscriptions.create("ChatChannel", {
  connected() {
    console.log("Connected to the chat room!");
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    $('#messages').append(`<p>${data.sender}: ${data.message}</p>`);
    $('html, body').animate({scrollTop:$(document).height()}, 0);
  },

  speak: function(data) {
    return this.perform('speak', data);
  }
});

$(document).on('turbolinks:load', function () {
  $("#message_form").on('submit', function(e){
    e.preventDefault();
    let data = {
      message: $('#message_to_sent').val(),
      sender: $('#sender').val()
    }

    if (data.message.length > 0 && data.sender.length > 0) {
      chatChannel.speak(data);
      $('#message_to_sent').val('')
    }
  });
})