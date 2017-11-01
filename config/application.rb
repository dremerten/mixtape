require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module SpinnRepo
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.1
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
    config.paperclip_defaults = {
      :storage => :s3,
      :s3_credentials => {
        :bucket => ENV["s3_bucket"],
        :access_key_id => ENV["s3_access_key_id"],
        :secret_access_key => ENV["s3_secret_access_key"],
        :s3_region => ENV["s3_region"],
        :s3_host_name => "s3.#{ENV['s3_region']}.amazonaws.com"
      }
    }
  end
end

# s3_client = Aws::S3::Client.new(region: ENV["s3_region"],
#   access_key_id: ENV['s3_access_key_id'],
#   secret_access_key: ENV['s3_secret_access_key'])
#
#   s3_client.list_objects(bucket:'spinnmusicfiles').each do |response|
#     puts response.contents.map(&:key)
#   end
#
# stream = open('http://s3.us-east-2.amazonaws.com/spinnmusicfiles/music/Schoolboy%20Q/Oxymoron%20(Deluxe%20Version)/schoolboy-q-oxymoron.jpg')
