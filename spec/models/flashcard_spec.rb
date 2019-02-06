require 'rails_helper'

RSpec.describe Flashcard, type: :model do
  it { should have_valid(:front).when("Front") }
  it { should_not have_valid(:front).when(nil) }

  it { should have_valid(:back).when("Back") }
  it { should_not have_valid(:back).when(nil) }

  it { should have_valid(:deck_id).when(1) }
  it { should_not have_valid(:deck_id).when(nil) }
end
