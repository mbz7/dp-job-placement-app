class Client < ApllicationRecord
    has_many :jobs
    has_many :candidates, through: :jobs
end