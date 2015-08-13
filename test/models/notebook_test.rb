# == Schema Information
#
# Table name: notebooks
#
#  id         :integer          not null, primary key
#  name       :text             not null
#  owner_id   :integer          not null
#  created_at :datetime
#  updated_at :datetime
#

require 'test_helper'

class NotebookTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
