class Api::NotesController < ApplicationController
  before_action :set_api_note, only: [:show, :edit, :update, :destroy]

  # GET /api/notes
  # GET /api/notes.json
  def index
    @api_notes = Api::Note.all
  end

  # GET /api/notes/1
  # GET /api/notes/1.json
  def show
  end

  # GET /api/notes/new
  def new
    @api_note = Api::Note.new
  end

  # GET /api/notes/1/edit
  def edit
  end

  # POST /api/notes
  # POST /api/notes.json
  def create
    @api_note = Api::Note.new(api_note_params)

    respond_to do |format|
      if @api_note.save
        format.html { redirect_to @api_note, notice: 'Note was successfully created.' }
        format.json { render :show, status: :created, location: @api_note }
      else
        format.html { render :new }
        format.json { render json: @api_note.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /api/notes/1
  # PATCH/PUT /api/notes/1.json
  def update
    respond_to do |format|
      if @api_note.update(api_note_params)
        format.html { redirect_to @api_note, notice: 'Note was successfully updated.' }
        format.json { render :show, status: :ok, location: @api_note }
      else
        format.html { render :edit }
        format.json { render json: @api_note.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /api/notes/1
  # DELETE /api/notes/1.json
  def destroy
    @api_note.destroy
    respond_to do |format|
      format.html { redirect_to api_notes_url, notice: 'Note was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_api_note
      @api_note = Api::Note.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def api_note_params
      params[:api_note]
    end
end
