puts "Please remove all Debuggers and Console.logs from this directory. When finished, press 'c'"
input = gets.chomp

if input == "c"
  puts "Run bundle install. If you have already, press 'c'"
  input = gets.chomp
  if input == "c"
    puts "Have you made any changes to your schema? If so, update your Heroku migrations. When ready, press 'c'"
    if input == "c"
      system("rails c")
    end
  end
end
