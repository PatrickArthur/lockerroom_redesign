class ConversationsController < ApplicationController
  before_action :authenticate_user!

  def create
    @conversation = Conversation.get(current_user.id, params[:user_id])
    conversation_exists = conversated?
    redirect_to conversation_path(@conversation.id) unless conversated?
  end

  def show
    @conversation = Conversation.find(params[:id])
  end

  def close
    @conversation = Conversation.find(params[:id])

    session[:conversations].delete(@conversation.id)
    @conversation.destroy

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

