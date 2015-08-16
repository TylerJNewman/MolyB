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

class Notebook < ActiveRecord::Base
  validates :name, :owner, presence: true

  has_many(
    :notes,
    inverse_of: :notebook,
    dependent: :destroy
  )

  belongs_to :owner, class_name: "User"
end
