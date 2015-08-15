class SessionsController < ApplicationController
  before_filter :require_logged_in!, :only => [:destroy]
  before_filter :require_logged_out!, :only => [:new, :create]

  def new
    @user = User.new
  end

  def create
    credentials = [params[:user][:name], params[:user][:password]]
    @user = User.find_by_credentials(*credentials)
    if @user
      login!(@user)
      redirect_to root_url
    else
      flash.now[:notices] = ["Invalid credentials."]
      @user = User.new
      render :new
    end
  end

  def destroy
    current_user.reset_session_token!
    session[:session_token] = nil
    redirect_to root_url
  end
end
