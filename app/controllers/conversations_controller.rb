class ConversationsController < ApplicationController
  def create
    @conversation = Conversation.get(current_user.id, params[:user_id])
    conversation_exists = conversated?
    add_to_conversations unless conversated?

    respond_to do |format|
      if conversation_exists
        render :json => { :conversated => conversation_exists }
      else
        render :json => { :conversation => render_to_string('conversations/_conversation', :layout => false, :locals => { conversation: @conversation, user: current_user }) , id: @conversation.id}
      end
      format.js
    end
  end

  def close
    @conversation = Conversation.find(params[:id])

    session[:conversations].delete(@conversation.id)

    respond_to do |format|
      render :json => { :conversation => params[:id]}
      format.js
    end
  end

  private

  def add_to_conversations
    session[:conversations] ||= []
    session[:conversations] << @conversation.id
  end

  def conversated?
    session[:conversations].include?(@conversation.id)
  end
end

