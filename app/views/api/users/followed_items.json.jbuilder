@followed_items.includes(:followers).joins(:follows).each do |user|
  json.set! user.id do
    json.partial! 'api/users/user', user: user
  end
end
