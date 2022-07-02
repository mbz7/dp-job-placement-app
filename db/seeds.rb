require 'faker'

# start seeding
puts '🌱 Seeding data...'

puts '🗑 Destroying old data...'
# Client.destroy_all
Job.destroy_all
Candidate.destroy_all

# create jobs
puts 'Creating jobs...'
j1 = Job.create!(
    client_name: 'PwC',
    contact_name: 'Maria Rodriguez',
    email: 'M.RD43@datapiper.com',
    role: 'Core Senior Software Developer - Senior Associate',
    urgency: 'High',
    quantity: '1',
    skills: 'Java, Springboot Docker, Kubernetes, API, Microservices, Cloud',
)

j2 = Job.create!(
  client_name: 'Zendesk',
  contact_name: 'David Smith',
  email: 'DavidS_33@datapiper.com',
  role: 'Zendesk Developer',
  urgency: 'Medium',
  quantity: '1',
  skills: 'Zendesk Developer',
)

j3 = Job.create!(
  client_name: 'Datavault',
  contact_name: 'Rob Adams',
  email: 'Rob_Adams@datapiper.com',
  role: 'Datavault 2.0',
  urgency: 'High',
  quantity: '3',
  skills: 'Datavault 2.0 Certified',
)

j4 = Job.create!(
  client_name: 'PwC',
  contact_name: 'Eliza Cath',
  email: 'ElizaT_Cat@datapiper.com',
  role: 'Snowflake Data Engineer',
  urgency: 'Low',
  quantity: '1',
  skills: 'JD',
)

# create candidates
puts 'Creating candidates...'

5.times do
Candidate.create!(
    job_id: j1.id,
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    phone: Faker::PhoneNumber.phone_number,
    city_state: 'Los Angeles, CA',
)
end

5.times do
  Candidate.create!(
      job_id: j2.id,
      first_name: Faker::Name.first_name,
      last_name: Faker::Name.last_name,
      phone: Faker::PhoneNumber.phone_number,
      city_state: 'Austin, TX',
  )
  end

  5.times do
    Candidate.create!(
        job_id: j3.id,
        first_name: Faker::Name.first_name,
        last_name: Faker::Name.last_name,
        phone: Faker::PhoneNumber.phone_number,
        city_state: 'Raleigh, NC',
    )
    end

    5.times do
      Candidate.create!(
          job_id: j4.id,
          first_name: Faker::Name.first_name,
          last_name: Faker::Name.last_name,
          phone: Faker::PhoneNumber.phone_number,
          city_state: 'Los Angeles, CA',
      )
      end