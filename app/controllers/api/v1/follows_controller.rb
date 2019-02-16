class Api::V1::FollowsController < ApplicationController
  protect_from_forgery unless: -> {request.format.json?}

  def index
    render json: {following_status: following?, follows: user_follows}
  end

  def create
    @follow = Follow.new(follow_params)
    if @follow.save
      @follow.save
      render json: "Successfully Followed"
    end
  end

  def destroy
    @follow = Follow.where(followee_id: current_user.id)
    if @follow[0].destroy
      @follow[0].destroy
      render json: "Successfully Unfollowed"
    end
  end

  private

  def following?
    following = nil
    if current_user && current_user.id != params[:user_id].to_i
      user_follows.each do |follow|
        if follow[:followee_id] == current_user.id
          return true
        else
          following = false
        end
      end
    end
    return following
  end

  def user_follows
    user_follows = []
    following_status = false
    @follows = Follow.all
    @follows.each do |follow|
      if follow[:follower_id] == params[:user_id].to_i
        user_follows << follow
      end
    end
    return user_follows
  end

  def follow_params
    params.permit(:follower_id, :followee_id)
  end
end
