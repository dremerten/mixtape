desc "This task is called by the Heroku scheduler add-on"

task :set_featured_playlists => :environment do
  puts "Updating featured playlists..."
  Playlist.set_featured_playlists
  puts "done."
end
