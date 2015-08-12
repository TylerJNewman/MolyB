class Api::NoteTagsController < ApplicationController
  before_action :set_api_note_tag, only: [:show, :edit, :update, :destroy]

  # GET /api/note_tags
  # GET /api/note_tags.json
  def index
    @api_note_tags = Api::NoteTag.all
  end

  # GET /api/note_tags/1
  # GET /api/note_tags/1.json
  def show
  end

  # GET /api/note_tags/new
  def new
    @api_note_tag = Api::NoteTag.new
  end

  # GET /api/note_tags/1/edit
  def edit
  end

  # POST /api/note_tags
  # POST /api/note_tags.json
  def create
    @api_note_tag = Api::NoteTag.new(api_note_tag_params)

    respond_to do |format|
      if @api_note_tag.save
        format.html { redirect_to @api_note_tag, notice: 'Note tag was successfully created.' }
        format.json { render :show, status: :created, location: @api_note_tag }
      else
        format.html { render :new }
        format.json { render json: @api_note_tag.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /api/note_tags/1
  # PATCH/PUT /api/note_tags/1.json
  def update
    respond_to do |format|
      if @api_note_tag.update(api_note_tag_params)
        format.html { redirect_to @api_note_tag, notice: 'Note tag was successfully updated.' }
        format.json { render :show, status: :ok, location: @api_note_tag }
      else
        format.html { render :edit }
        format.json { render json: @api_note_tag.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /api/note_tags/1
  # DELETE /api/note_tags/1.json
  def destroy
    @api_note_tag.destroy
    respond_to do |format|
      format.html { redirect_to api_note_tags_url, notice: 'Note tag was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_api_note_tag
      @api_note_tag = Api::NoteTag.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def api_note_tag_params
      params[:api_note_tag]
    end
end
