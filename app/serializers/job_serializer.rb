class JobSerializer < ActiveModel::Serializer
  attributes :id, :client_name, :contact_name, :email, :role, :urgency, :quantity, :skills
end
