class Api::NotesController < ApplicationController

  def create
    @note = current_user.notes.new(note_params)
    if @note.save
      render json: @note
    else
      render json: { error: "invalid entry" }, status: :unprocessable_entity
    end
  end

  def index
    @notes = current_user.notes.order({updated_at: :asc})
    render json: @notes
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
