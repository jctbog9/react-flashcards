require 'rails_helper'

RSpec.describe Api::V1::DecksController, type: :controller do

  describe "GET#index" do
    it "should return json" do
      get :index
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
    end
  end
end
