class CreateProfile < ActiveRecord::Migration[5.1]
  def change
    create_table :profiles do |t|
      t.integer :user_id
      t.string :first_name
      t.string :last_name
      t.string :sport
      t.string :team
      t.string :position
      t.string :address
      t.string :city
      t.string :state
      t.string :country
      t.string :zip
      t.string :phone
      t.string :gender
      t.string :description
      t.timestamps
    end
    add_index :profiles, :user_id
  end
end
