json.array!(@api_notebooks) do |api_notebook|
  json.extract! api_notebook, :id
  json.url api_notebook_url(api_notebook, format: :json)
end
