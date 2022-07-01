class JobSerializer < ActiveModel::Serializer
  attributes :id, :client_name, :email, :role, :urgency, :quantity, :skills
  # has_many :candidates
end
