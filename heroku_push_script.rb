puts "Please remove all Debuggers and Console.logs from this directory. When finished, press any key to continue."
gets.chomp
puts "Run bundle install. Press any key to continue."
gets.chomp
puts "Make sure you are on the master branch. Make any necessary merges. Press any key to continue."
gets.chomp
puts "Heroku push properly staged. Press any key to execute push."
gets.chomp
puts "Pushing branch master to Heroku...\n\n\n\n"
system("git push heroku master")
