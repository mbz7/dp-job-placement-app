class Job < ApplicationRecord
    belongs_to :client
    has_many :candidates
end
