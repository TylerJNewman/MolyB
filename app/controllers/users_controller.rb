class UsersController < ApplicationController
  before_action :require_logged_out!, only: [:new, :create]
  before_action :require_logged_in!, only: [:show]

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      redirect_to root_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def update
    @user = User.find(params[:id])

    current_password = params[:user][:current_password]

    if params[:user][:password] == ""
      params[:user][:password] = current_password
    end

    if !current_user.is_password?(current_password)
      flash.now[:errors] = ["invalid password confirmation"]
      render :edit
    elsif @user.update(user_params)
      redirect_to root_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :edit
    end
  end

  def edit
    @user = User.find(params[:id])
  end

  def show
    @user = User.find(params[:id])
  end

  def index
    @users = User.all
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
    flash[:success] = "User deleted"
    redirect_to root_url
  end

  private
  def user_params
    params.require(:user).permit(:name, :email, :password)
  end
end
