require 'rails_helper'

RSpec.describe Deck, type: :model do
  it { should have_valid(:name).when("Deck Name") }
  it { should_not have_valid(:name).when(nil) }

  it { should have_valid(:user_id).when(1) }
  it { should_not have_valid(:user_id).when(nil) }
end
