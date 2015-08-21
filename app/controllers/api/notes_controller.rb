class Api::NotesController < ApplicationController

  def create
    @note = current_user.notes.new(note_params)
    if @note.save
      render json: @note
    else
      render json: { error: "invalid entry" }, status: :unprocessable_entity
    end
  end

  # def index
  #   @notes = Note.search(params[:search])
  #   # @notes = current_user.notes.search(params)
  #   render json: @notes


  # end

  def index
    if params[:search] && params[:search] != ""

      @notes = current_user.notes.search_by_title_and_body(params[:search])
      render json: @notes
    else
      @notes = current_user.notes
      render json: @notes

    end
  end


  def update
    @note = Note.find(params[:id])
    if @note.update(note_params)
      render json: @note
    else
      render json: { error: "invalid entry" }, status: :unprocessable_entity
    end
  end

  def show
    @note = Note.find(params[:id])
    render json: @note
  end

  def destroy
    @note = Note.find(params[:id])
    @note.destroy
    render json: {}
  end

  private

  def note_params
    params.require(:note).permit(:title, :body, :notebook_id, :owner_id)
  end
end
