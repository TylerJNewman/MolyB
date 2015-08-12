require 'test_helper'

class Api::NotesControllerTest < ActionController::TestCase
  setup do
    @api_note = api_notes(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:api_notes)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create api_note" do
    assert_difference('Api::Note.count') do
      post :create, api_note: {  }
    end

    assert_redirected_to api_note_path(assigns(:api_note))
  end

  test "should show api_note" do
    get :show, id: @api_note
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @api_note
    assert_response :success
  end

  test "should update api_note" do
    patch :update, id: @api_note, api_note: {  }
    assert_redirected_to api_note_path(assigns(:api_note))
  end

  test "should destroy api_note" do
    assert_difference('Api::Note.count', -1) do
      delete :destroy, id: @api_note
    end

    assert_redirected_to api_notes_path
  end
end
