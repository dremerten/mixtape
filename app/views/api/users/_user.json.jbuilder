json.extract! user, :id, :name, :email, :created_at
json.imageUrl user.avatar(:thumb)
json.followers user.follower_ids
json.followees user.followable_ids_for('User')
