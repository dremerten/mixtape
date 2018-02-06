json.extract! user, :id, :name, :email, :created_at
json.imageUrl asset_path(user.avatar(:thumb))
