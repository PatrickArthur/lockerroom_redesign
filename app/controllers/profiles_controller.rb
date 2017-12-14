class ProfilesController < ApplicationController
  before_action :authenticate_user!
  before_action :check_if_signed_in

  # GET /posts
  # GET /posts.json
  def index
  end
end

