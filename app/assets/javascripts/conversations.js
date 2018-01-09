$(document).ready(function () {
  create_conversation();
  close_conversation();
});

function create_conversation() {
  $(".select_user_conv").click( function() {
    var user_id = $(this).attr("data-id");
    $.post( "/conversations",{ user_id: user_id },function( data ) {
      if (data.conversation != null) {
        $("#conversations-list").append(data.conversation);
        show_message_list(data);
        close_conversation();
      } else {
        console.log("conversation not created");
      }
    });
  });
}

function show_message_list(data) {
  conversation = $("[data-conversation-id='" + data.id + "']");
  conversation.find('.panel-body').show();
  var messages_list = conversation.find('.messages-list');
  var height = messages_list[0].scrollHeight;
  messages_list.scrollTop(height);
}

function close_conversation() {
  $(".close_conv").click( function() {
      var id = $(this).attr("data-id");
      $.post( "/conversations/" + id + "/close" ,function( data ) {
        if (data.conversartion =! null ) {
          $('[data-conversation-id=' + data.conversation + ']').remove()
        } else {
          console.log("conversation not removed");
        }
      });
  });
}


