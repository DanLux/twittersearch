
class TweetsController < ApplicationController
	def index
		@tweets = []
	end

	def search
		@tweets = TwitterClient.instance.search params[:query]

		respond_to do |format|
	        format.html { render :action => "index" }
	        format.js { render :action => "refresh_results" }
	    end
	end
end
