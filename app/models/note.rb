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

class Note < ActiveRecord::Base
  include PgSearch

  pg_search_scope :search_by_title_and_body, against: [:title, :body]

  belongs_to(
    :owner,
    class_name: User,
    foreign_key: :owner_id,
    primary_key: :id
  )
  # def self.search(search)
  #   if search
  #     find(:all, :conditions => ['name LIKE ?', "%#{search}%"])
  #   else
  #     find(:all)
  #   end
  # end


end
