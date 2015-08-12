class Api::NotebooksController < ApplicationController
  before_action :set_api_notebook, only: [:show, :edit, :update, :destroy]

  # GET /api/notebooks
  # GET /api/notebooks.json
  def index
    @api_notebooks = Api::Notebook.all
  end

  # GET /api/notebooks/1
  # GET /api/notebooks/1.json
  def show
  end

  # GET /api/notebooks/new
  def new
    @api_notebook = Api::Notebook.new
  end

  # GET /api/notebooks/1/edit
  def edit
  end

  # POST /api/notebooks
  # POST /api/notebooks.json
  def create
    @api_notebook = Api::Notebook.new(api_notebook_params)

    respond_to do |format|
      if @api_notebook.save
        format.html { redirect_to @api_notebook, notice: 'Notebook was successfully created.' }
        format.json { render :show, status: :created, location: @api_notebook }
      else
        format.html { render :new }
        format.json { render json: @api_notebook.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /api/notebooks/1
  # PATCH/PUT /api/notebooks/1.json
  def update
    respond_to do |format|
      if @api_notebook.update(api_notebook_params)
        format.html { redirect_to @api_notebook, notice: 'Notebook was successfully updated.' }
        format.json { render :show, status: :ok, location: @api_notebook }
      else
        format.html { render :edit }
        format.json { render json: @api_notebook.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /api/notebooks/1
  # DELETE /api/notebooks/1.json
  def destroy
    @api_notebook.destroy
    respond_to do |format|
      format.html { redirect_to api_notebooks_url, notice: 'Notebook was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_api_notebook
      @api_notebook = Api::Notebook.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def api_notebook_params
      params[:api_notebook]
    end
end
