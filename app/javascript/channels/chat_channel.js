import consumer from "./consumer"

consumer.subscriptions.create("ChatChannel", {
  connected() {
    console.log("Connected to the chat room!");
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
  },

  speak: function() {
    return this.perform('speak');
  }
});
