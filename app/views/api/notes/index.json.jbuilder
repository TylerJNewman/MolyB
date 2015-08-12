json.array!(@api_notes) do |api_note|
  json.extract! api_note, :id
  json.url api_note_url(api_note, format: :json)
end
