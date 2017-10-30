json.extract! track, :title, :ord, :popularity
json.avatar_url asset_path(track.audio.url)
