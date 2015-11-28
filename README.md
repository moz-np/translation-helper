#Mozilla Nepal Localization Helper (for Pootle)

This is a helper utility for localization. It utilizes google translate api (a dirty hack, by the way) to fetch translation of given string to nepali language (by default). 
Server side is implemented on plain php, and client side is being worked as an addon. PRs, as always, are heartily welcomed!

#Configuration and Setting up the Server.
It's simple. Configuration is done on config.php, where you can set source and target language, (standard short forms that are listed on google translate works).
You'll need to host the server with `php5` (other versions might work because it's not so much code). 

#Setting up the client.
For information on how to configure the client side code to your needs, check out the README inside `client` folder!

We're currently implementing an addon for firefox, but the basic concept (which works) is to attach the javascript written on `translate.js` once you *start translating* on pootle,
the event fires if you click the textbox and if it' not empty! 

#Authors
* Nootan Ghimire , @nootanghimire on github
* Nishchal Gautam, @cyberhck on github
