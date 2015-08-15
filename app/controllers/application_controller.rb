class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :current_user, :user_signed_in?, :current_user_id

  def login!(user)
    session[:session_token] = user.reset_session_token!
  end

  def logout!
    current_user.reset_session_token!
  end

  def current_user
    return nil if session[:session_token].nil?
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def current_user_id
    current_user ? current_user.id : nil
  end

  def user_signed_in?
    !!current_user
  end

  def require_logged_in!
    redirect_to root_url unless user_signed_in?
  end

  def require_logged_out!
    redirect_to root_url if current_user
  end


  end
