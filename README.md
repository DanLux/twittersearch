# Twitter Search Application

> A single page application in Rails which uses Twitter API to search for the latest tweets related to a given query.


## Configuration

After cloning the repository, first navigate to the root project directory and download all project dependencies.

	$ bundle install

This application needs valid [Twitter developer credentials](https://developer.twitter.com/en/docs/basics/authentication/guides/access-tokens) to run. You can get them [here](https://apps.twitter.com/). With your Twitter credentials in hand, rename [twitter_credentials_example.yml](https://github.com/DanLux/twittersearch/blob/master/config/twitter_credentials_example.yml) file in **config** directory to **twitter_credentials.yml** and fill in your *consumer_key*, *consumer_secret*, *access_token* and *access_token_secret*.

And now you are ready to run the server locally.

	$ rails s -p [port]
