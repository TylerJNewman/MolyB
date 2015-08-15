class SessionsController < ApplicationController
  before_filter :require_logged_in!, :only => [:destroy]
  before_filter :require_logged_out!, :only => [:new, :create]

  def new
    @user = User.new
  end

  def create
    credentials = [params[:user][:email], params[:user][:password]]
    @user = User.find_by_credentials(*credentials)
    if @user
      login!(@user)
      redirect_to root_url
    else
      @user = User.new(user_params)
      flash.now[:errors] = ["Invalid credentials."]
      render :new
    end
  end

  def destroy
    current_user.reset_session_token!
    current_user = nil;
    session[:session_token] = nil
    redirect_to root_url
  end

  private
  def user_params
    params.require(:user).permit(:name, :email, :password)
  end
end
