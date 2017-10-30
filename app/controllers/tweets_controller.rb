class TweetsController < ApplicationController
	def index
		@tweets = []
	end

	def search
		@tweets = TwitterClient.instance.search params[:query]
	end
end
