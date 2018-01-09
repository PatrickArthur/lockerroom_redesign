$(document).ready(function () {
  init_conversation();
  $('.panel-body').show();
});

function init_conversation() {
  $(".select_user_conv").click(create_conversation);
  $(".close_conv").click(close_conversation);
}

function create_conversation() {
  var user_id = $(this).attr("data-id");
  $.post( "/conversations",{ user_id: user_id },function( data ) {
    if (data.conversation != null) {
      conversation_callback(data);
    } else {
      console.log("conversation not created");
    }
  });
}

function conversation_callback(data) {
  $("#conversations-list").append(data.conversation);
  show_message_list(data);
  $(".close_conv").click(close_conversation);
  $(".create-message").click(create_message);
}

function close_conversation() {
  var id = $(this).attr("data-id");
  $.post( "/conversations/" + id + "/close" ,function( data ) {
    if (data.conversartion =! null ) {
      $('[data-conversation-id=' + data.conversation + ']').remove()
    } else {
      console.log("conversation not removed");
    }
  });
}

function show_message_list(data) {
  conversation = $("[data-conversation-id='" + data.id + "']");
  conversation.find('.panel-body').show();
  var messages_list = conversation.find('.messages-list');
  var height = messages_list[0].scrollHeight;
  messages_list.scrollTop(height);
}


