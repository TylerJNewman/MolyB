# == Schema Information
#
# Table name: notes
#
#  id          :integer          not null, primary key
#  title       :string           default("Untitled")
#  body        :text
#  owner_id    :integer          not null
#  notebook_id :integer          not null
#  created_at  :datetime
#  updated_at  :datetime
#

require 'test_helper'

class NoteTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
