json.extract! user, :id, :name, :email, :created_at
json.avatar_url asset_path(user.avatar.url)
