require 'test_helper'

class Api::NotebooksControllerTest < ActionController::TestCase
  setup do
    @api_notebook = api_notebooks(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:api_notebooks)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create api_notebook" do
    assert_difference('Api::Notebook.count') do
      post :create, api_notebook: {  }
    end

    assert_redirected_to api_notebook_path(assigns(:api_notebook))
  end

  test "should show api_notebook" do
    get :show, id: @api_notebook
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @api_notebook
    assert_response :success
  end

  test "should update api_notebook" do
    patch :update, id: @api_notebook, api_notebook: {  }
    assert_redirected_to api_notebook_path(assigns(:api_notebook))
  end

  test "should destroy api_notebook" do
    assert_difference('Api::Notebook.count', -1) do
      delete :destroy, id: @api_notebook
    end

    assert_redirected_to api_notebooks_path
  end
end
