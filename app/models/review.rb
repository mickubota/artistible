class Review < ApplicationRecord
  belongs_to :booking
  has_one :user, through: :booking
  has_one :service, through: :booking

  validates :rating, presence: true, numericality: {
    only_integer: true,
    greater_than_or_equal_to: 1,
    less_than_or_equal_to: 5
  }
end
