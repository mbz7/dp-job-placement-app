class CandidateSerializer < ActiveModel::Serializer
  attributes :id, :job_id, :first_name, :last_name, :phone, :city_state
end
