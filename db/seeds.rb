require 'faker'

# start seeding
puts '🌱 Seeding data...'

puts '🗑 Destroying old data...'
Client.destroy_all
Job.destroy_all
Candidate.destroy_all

# create companies
puts 'Creating Clients...'
c1 =
  Client.create!(
    user_id: "1",
    company_name: Faker::Company.name,
  )

c2 =
  Client.create!(
    user_id: "2",
    company_name: Faker::Company.name,
  )

c3 =
  Client.create!(
    user_id: "1",
    company_name: Faker::Company.name,
  )

# create jobs
puts 'Creating jobs...'
j1 = Job.create!(
    client_id: c1.id,
    contact: 'Maria Rodriguez',
    email: 'M.RD43@datapiper.com'
    role: 'Core Senior Software Developer - Senior Associate',
    urgency: 'High',
    quantity: '1',
    skills: 'Java, Springboot Docker, Kubernetes, API, Microservices, Cloud',
)

# create candidates
puts 'Creating candidates...'

3.times do
Candidate.create!(
    job_id: j1.id,
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    phone: Faker::PhoneNumber.phone_number,
    city: 'Los Angeles',
    state: 'CA',
)
end