$(document).ready(init_conversation);

$(document).on('turbolinks:load', function() {
  init_conversation();
});

function init_conversation() {
  var conversation = $('#conversation_page')
  if (conversation.length != 0) {
    show_message_list(conversation)
    $(".create-message").click(create_message);
    $(".close_conv").click(close_conversation);
  }
}

function close_conversation() {
  var id = $(this).attr("data-id");
  $.post( "/conversations/" + id + "/close" ,function( data ) {
    if (data.conversartion =! null ) {
      $('[data-conversation-id=' + data.conversation + ']').remove()
      location.replace("/users");
    } else {
      console.log("conversation not removed");
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

function message_callback(data, id) {
  var conversation = $('#conversations-list').find("[data-conversation-id='" + id + "']");
  conversation.find('.messages-list').find('ul').append(data.message);
  conversation.find('textarea').val('');
}

function show_message_list(conversation) {
  conversation.find('.panel-body').show();
  var messages_list = conversation.find('.messages-list');
  var height = messages_list[0].scrollHeight;
  messages_list.scrollTop(height);
}



