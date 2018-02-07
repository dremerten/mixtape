json.user do
  json.extract! @user, :id, :name, :email, :created_at
  json.imageUrl asset_path(@user.avatar(:thumb))
  json.followers @user.follower_ids
  json.followees @user.followed_user_ids
  json.playlists @user.playlist_ids
end

json.users do
  [*@user.followers, *@user.followed_users].each do |user|
    json.set! user.id do
      json.partial! 'api/users/user', user: user
    end
  end
end

json.playlists do
  @user.playlists.each do |playlist|
    json.set! playlist.id do
      json.extract! playlist, :id, :name, :author_id
      json.imageUrl asset_path(playlist.image.url)
      json.author playlist.author.email
      json.background playlist.background
      json.trackIds playlist.track_ids
    end
  end
end
