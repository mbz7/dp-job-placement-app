class CreateCandidates < ActiveRecord::Migration[6.1]
  def change
    create_table :candidates do |t|
      t.integer :job_id
      t.string :first_name
      t.string :last_name
      t.string :phone
      t.string :city_state

      t.timestamps
    end
  end
end
