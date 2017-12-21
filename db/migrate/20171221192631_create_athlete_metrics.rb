class CreateAthleteMetrics < ActiveRecord::Migration[5.1]
  def change
    create_table :athlete_metrics do |t|
      t.integer :user_id
      t.integer :age
      t.integer :weight
      t.integer :height
      t.integer :waist
      t.integer :neck
      t.integer :bmi
      t.integer :bodyfat
      t.integer :wilkes
      t.integer :speed
      t.integer :neck
      t.integer :hip
      t.integer :bench
      t.integer :squat
      t.integer :deadlift
      t.integer :powerclean
      t.integer :cleanpress
      t.string :description
      t.timestamps
    end
    add_index :athlete_metrics, :user_id
  end
end
