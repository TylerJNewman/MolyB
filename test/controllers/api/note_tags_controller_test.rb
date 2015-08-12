require 'test_helper'

class Api::NoteTagsControllerTest < ActionController::TestCase
  setup do
    @api_note_tag = api_note_tags(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:api_note_tags)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create api_note_tag" do
    assert_difference('Api::NoteTag.count') do
      post :create, api_note_tag: {  }
    end

    assert_redirected_to api_note_tag_path(assigns(:api_note_tag))
  end

  test "should show api_note_tag" do
    get :show, id: @api_note_tag
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @api_note_tag
    assert_response :success
  end

  test "should update api_note_tag" do
    patch :update, id: @api_note_tag, api_note_tag: {  }
    assert_redirected_to api_note_tag_path(assigns(:api_note_tag))
  end

  test "should destroy api_note_tag" do
    assert_difference('Api::NoteTag.count', -1) do
      delete :destroy, id: @api_note_tag
    end

    assert_redirected_to api_note_tags_path
  end
end
