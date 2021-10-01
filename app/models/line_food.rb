class LineFood < ApplicationRecord
  belongs_to :restaurant
  belongs_to :food
  belongs_to :order
end
