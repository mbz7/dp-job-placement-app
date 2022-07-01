class JobsWithClientAndCandidates < ActiveModel::Serializer
    # belongs_to :client
    attributes :id, :client_name, :email, :role, :urgency, :quantity, :skills
    has_many :candidates
  end