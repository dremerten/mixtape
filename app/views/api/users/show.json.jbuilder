# json.partial! 'api/users/user', user: @user, track_ids: @track_ids
json.user do
  json.partial! 'api/users/user', user: @user
end

json.users do
  [*@user.followers, *@user.followed_users].each do |user|
    json.set! user.id do
      json.partial! 'api/users/user', user: user
    end
end
