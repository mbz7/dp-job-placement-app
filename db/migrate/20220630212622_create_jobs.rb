class CreateJobs < ActiveRecord::Migration[6.1]
  def change
    create_table :jobs do |t|
        t.string :client_name
        t.string :contact_name
        t.string :email
        t.string :role
        t.string :urgency
        t.integer :quantity
        t.string :skills

      t.timestamps
    end
  end
end
