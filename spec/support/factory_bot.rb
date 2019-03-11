require 'factory_bot'

FactoryBot.define do
  factory :user do
    sequence(:email) {|n| "user#{n}@example.com" }
    password { 'password' }
    username { 'user1' }
    password_confirmation { 'password' }
  end

end
