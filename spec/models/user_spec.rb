require 'rails_helper'

RSpec.describe User, type: :model do  
  it { should have_valid(:email).when("test@gmail.com") }
  it { should_not have_valid(:email).when("invalid email", nil) }

  it { should have_valid(:password).when("123456") }
  it { should_not have_valid(:password).when("1234", nil) }

  it { should have_valid(:username).when("123456") }
end
