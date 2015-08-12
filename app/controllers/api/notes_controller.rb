class Api::NotesController < ApplicationController
  def index
    render json: Note.all
  end
end
