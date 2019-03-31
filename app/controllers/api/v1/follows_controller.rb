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
    @user = User.find(params[:user_id])
    if current_user
      if current_user.id != @user.id
        return current_user.followers.include?(@user)
      end
    end
  end

  def user_follows
    @user = User.find(params[:user_id])
    return @user.followees
  end

  def follow_params
    params.permit(:follower_id, :followee_id)
  end
end
