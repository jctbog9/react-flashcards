class CreateStars < ActiveRecord::Migration[5.2]
  def change
    create_table :stars do |t|
      t.belongs_to :user, null: false, unique: true
      t.belongs_to :deck, null: false

      t.timestamps null: false
    end
  end
end
