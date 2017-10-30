
require 'twitter'
require 'singleton'

class TwitterClient
	include Singleton

	@@credentials_path = Rails.root.join('config/twitter_credentials.yml')

	def initialize
		configuration = YAML.load_file(@@credentials_path)[Rails.env]

		@client = Twitter::REST::Client.new do |config|
		  config.consumer_key        = configuration['consumer_key']
		  config.consumer_secret     = configuration['consumer_secret']
		  config.access_token        = configuration['access_token']
		  config.access_token_secret = configuration['access_token_secret']
		end
	end

	def search(query)
		@client.search(query, result_type: "recent").take(25)
	end
end