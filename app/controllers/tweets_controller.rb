class TweetsController < ApplicationController
	def index
		@client = TwitterClient.new
	end
end
