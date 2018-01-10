class ProfilesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_profile, only: [:show, :edit, :update, :destroy]

  def index
    session[:conversations] ||= []

    @users = User.all.where.not(id: current_user)
    @conversations = Conversation.includes(:recipient, :messages)
                                 .find(session[:conversations])
  end

  def new
    @profile = Profile.new
  end

  def edit
  end

  def create
    @profile = Profile.new(profile_params)

    respond_to do |format|
      if @profile.save
        format.html { redirect_to @profile, notice: 'Profile was successfully created.' }
        format.json { render json: Profile.all }
      else
        format.html { render :new }
      end
    end
  end

  def update
    respond_to do |format|
      if @profile.update(profile_params)
        format.html { redirect_to @project, notice: 'Profile was successfully updated.' }
      else
        format.html { render :edit }
      end
    end
  end

  def destroy
    @profile.destroy
    respond_to do |format|
      format.html { redirect_to profiles_url, notice: 'Profile was successfully destroyed.' }
    end
  end

  private

  def set_project
    @profile = Profile.find(params[:id])
  end

  def profile_params
    params.require(:project).permit(:first_name, :last_name, :sport, :team, :position, :address, :city, :state,
      :country, :zip, :phone, :gender, :description)
  end
end

