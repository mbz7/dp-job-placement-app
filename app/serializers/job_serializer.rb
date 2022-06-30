class JobSerializer < ActiveModel::Serializer
  attributes :id, :client_id, :email, :role, :urgency, :quantity, :skills
end
