class Api::NotesController < ApplicationController
  helper_method :notes, :note

  def notes
    @_notes ||= Note.all
  end

  def note
    @_note ||= notes.find(params[:id])
  end

  def index
    render json: Note.all
  end

  def show
    render json: notes.find(params[:id])
  end
end
