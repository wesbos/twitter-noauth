# Noauth
### Node.js based oauth passthrough

Have a simple website widget based on the 1.0 API? Run this node script to shim your old end points. Useful if you have a number of client sites pulling tweets from the 1.0 API. 

Steps to get going:

1. Download / fork this repo
2. cd into this directory, type `npm install`
3. Sign up for a twitter app at [dev.twitter.com](http://dev.twitter.com)
4. Rename `config-sample.js` to `config.js` and replace the values
5. Host it somewhere. I reccomend nodejitsu.
5. Replace your old twitter end points of this your new domain.

`http://api.twitter.com/1/statuses/user_timeline/wesbos.json?callback=?`

would now be

http://your-domain.com/1/statuses/user_timeline/wesbos.json?callback=?

Yay for quick fixes!