# discord-webclient 
<p>Discord WebClient (2016-09 - 2019-04) - [v0.1.0-BETA]</p>
<p>Using express.js to host a webserver, Discord API Proxy, with Assets cacher</p>

# Demo
Soon. 

# Client Version
<p>All clients are retrieved from web.archive.org - List of Client Version listed down below: [Year-Month]</p>

[main (You are here!)] - [2016-09](https://github.com/gunawan092w/discord-webclient/tree/2016-09) - [2017-?]() - [2018-?]() - [2019-04](https://github.com/gunawan092w/discord-webclient/tree/2019-04)

# How do i run Discord WebClient?
1. Clone this repository: `git clone https://github.com/gunawan092w/discord-webclient.git && cd discord-webclient`
2. Install required dependency: `npm i`
3. Run the webclient: `node .` or `node index.js`
4. Visit the webclient on your browser: `http://localhost:3000`

# How Asset caching works?
Simple! it fetches to https://discord.com/assets/ first and saves it onto caching folder ;)

# Does it collect any user's information from it's client and API?
No, Discord WebClient does not collect any user's information.

# What information does it collect from user?
We do not collect any informations from user. Such as IP Addresses, User-Agent, GeoLocation, API Requests (such as Login, which includes email and password), etc. We take people's privacy very seriously. You may review our code for further inspection.

# What is client.js on public folder?
client.js is a javascript file for Discord client created by Discord. Made using React Framework. But, client.js has been modified by us to make it stable as possible

# What's not working?
Only Account registration, Upload system, and Captcha doesn't work for now. [for older clients.]
For newer client issues, you tell me!

# What about the captcha on the older client?
Probably we will try to add hcaptcha into older client if it's possible.

# Contributions
If you have found any problems or want to add features on WebClient, Don't hesitate to open pull requests. This is really important to us and further developement of this project. We would love for you to contribute to our project to help us improve our webclient!

# License
Licensed in [MIT License](https://github.com/gunawan092w/discord-webclient/blob/main/LICENSE)
