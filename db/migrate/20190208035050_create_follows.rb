class CreateFollows < ActiveRecord::Migration[5.2]
  def change
    create_table :follows do |t|
      t.belongs_to :follower, null: false
      t.belongs_to :followee, null: false

      t.timestamps null: false
    end
  end
end
