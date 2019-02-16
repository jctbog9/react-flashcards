require 'rails_helper'

RSpec.describe Follow, type: :model do
  it { should have_valid(:follower_id).when(1) }

  it { should have_valid(:followee_id).when(1) }
end
