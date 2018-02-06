json.extract! user, :id, :name, :email, :created_at
json.imageUrl user.avatar(:thumb)
