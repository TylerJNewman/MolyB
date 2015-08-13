# == Schema Information
#
# Table name: tags
#
#  id         :integer          not null, primary key
#  name       :text             not null
#  owner_id   :integer          not null
#  created_at :datetime
#  updated_at :datetime
#

class Tag < ActiveRecord::Base
end
