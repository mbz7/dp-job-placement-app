class CreateClients < ActiveRecord::Migration[6.1]
  def change
    create_table :clients do |t|
      t.string :company_name
      
      t.timestamps
    end
  end
end
