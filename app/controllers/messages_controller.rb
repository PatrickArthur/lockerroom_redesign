class MessagesController < ApplicationController
  def create
    @conversation = Conversation.includes(:recipient).find(params[:conversation_id])
    @message = @conversation.messages.create(message_params)

    respond_to do |format|
      if @message.save
        render :json => { :message => render_to_string('messages/_message', :layout => false, :locals => { message: @message, user: current_user })}
        format.js
      end
    end
  end

  private

  def message_params
    params.require(:message).permit(:user_id, :body)
  end
end
