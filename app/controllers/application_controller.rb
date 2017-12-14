class ApplicationController < ActionController::Base
  before_action :authenticate_user!
  before_action :configure_permitted_parameters, if: :devise_controller?

  def after_sign_in_path_for(user)
    # user.profile.present? ? profiles_path : new_profile_path
  end

  layout Proc.new { |controller| controller.devise_controller? ? 'devise' : 'application' }

  include PublicActivity::StoreController

  protected

  def layout_by_resource
    if devise_controller?
      "application"
    else
      "application"
    end
  end

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:email, :password])
    devise_parameter_sanitizer.permit(:sign_in, keys: [:name, :email, :password, :password_confirmation])
    devise_parameter_sanitizer.permit(:account_update, keys: [:email, :password, :password_confirmation, :current_password])
  end
end

