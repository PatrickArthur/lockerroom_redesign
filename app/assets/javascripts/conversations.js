$(document).ready(function () {
  init_conversation();
  $('.panel-body').show();
});

function init_conversation() {
  $(".select_user_conv").click(create_conversation);
  $(".close_conv").click(close_conversation);
  $(".create-message").click(create_message);
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

function create_message(e) {
  var form_data = $(this).closest("form").serialize();
  var conversation_id = $(this).attr("data-id");
  e.preventDefault();
  e.stopImmediatePropagation();

  $.post( "/conversations/" + conversation_id + "/messages", form_data ,function( data ) {
    if (data.message != null) {
      message_callback(data, conversation_id)
    } else {
      console.log("message not created");
    }
  });
  false
}

function conversation_callback(data) {
  $("#conversations-list").append(data.conversation);
  show_message_list(data);
  $(".close_conv").click(close_conversation);
  $(".create-message").click(create_message);
}

function message_callback(data, id) {
  var conversation = $('#conversations-list').find("[data-conversation-id='" + id + "']");
  conversation.find('.messages-list').find('ul').append(data.message);
  conversation.find('textarea').val('');
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


