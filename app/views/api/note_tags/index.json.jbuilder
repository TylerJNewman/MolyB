json.array!(@api_note_tags) do |api_note_tag|
  json.extract! api_note_tag, :id
  json.url api_note_tag_url(api_note_tag, format: :json)
end
