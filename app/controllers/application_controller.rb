class ApplicationController < ActionController::Base
  before_action :authenticate_user!
  before_action :configure_permitted_parameters, if: :devise_controller?
  after_action :set_online


  def after_sign_in_path_for(user)
    root_path
    # user.profile.present? ? root_path : new_profile_path
  end

  layout Proc.new { |controller| controller.devise_controller? ? 'devise' : 'application' }

  include PublicActivity::StoreController

  protected

  def layout_by_resource
    if devise_controller?
      "devise"
    else
      "application"
    end
  end

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name, :email, :password, :avatar, :avatar_cache, :remove_avatar])
    devise_parameter_sanitizer.permit(:sign_in, keys: [:name, :email, :password, :password_confirmation, :avatar, :avatar_cache, :remove_avatar])
    devise_parameter_sanitizer.permit(:account_update, keys: [:name, :email, :password, :password_confirmation, :current_password, :avatar, :avatar_cache, :remove_avatar])
  end

  def set_online
    if !!current_user
      # using separate Redis database
      # such as $redis_onlines = Redis.new db: 15
      # value not need, only key
      $redis_onlines.set( current_user.id, nil, ex: 10*60 )
      # 'ex: 10*60' - set time to live - 10 minutes
    end
  end
end

