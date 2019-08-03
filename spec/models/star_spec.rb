require 'rails_helper'

RSpec.describe Star, type: :model do
  it { should have_valid(:user_id).when(1) }
  it { should_not have_valid(:user_id).when(nil) }

  it { should have_valid(:deck_id).when(1) }
  it { should_not have_valid(:deck_id).when(nil) }
end
