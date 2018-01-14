class ConversationsController < ApplicationController
  before_action :authenticate_user!

  def create
    @conversation = Conversation.get(current_user.id, params[:user_id])
    redirect_to conversation_path(@conversation.id)
  end

  def show
    @conversation = Conversation.find(params[:id])
  end

  def close
    @conversation = Conversation.find(params[:id])

    @conversation.destroy

    respond_to do |format|
      render :json => { :conversation => params[:id]}
      format.js
    end
  end
end

