# discord-webclient
<p>Discord WebClient (2016-09 - 2019-04) - [v0.1.0-BETA]</p>
<p>Using express.js to host a webserver, Discord v6 API Proxy, with Assets cacher</p>

# Demo
You may check out our demo [By clicking me!](https://dc19.gunawan092w1.eu.org). This is not a phishing website. This is a demo just to show how it looked like when hosting discord-webclient. Do not put fake information in there since those Discord API is from Discord official API. Once again, Our demo is not a phising website. You may review the code if you don't believe it.

# Client Version
<p>All clients are retrieved from web.archive.org - List of Client Version listed down below: [Year-Month]</p>

[2016-09](https://github.com/gunawan092w/discord-webclient/tree/2016-09) - [2017-?]() - [2018-?]() - [2019-04 (You are here!)](https://github.com/gunawan092w/discord-webclient/tree/2019-04)

# How do i run Discord WebClient?
1. Clone this repository: `git clone https://github.com/gunawan092w/discord-webclient.git && cd discord-webclient`
2. Install required dependency: `npm i`
3. Run the webclient: `node .` or `node index.js`
4. Visit the webclient on your browser: `http://localhost:3000`

# How Asset caching works?
Everytime client fetches assets through `/assets/`, It first fetch the files through Discord Server `https://discord.com/assets/`. If the request responds 200 (OK), It downloads the assets and saves it to `cache` folder.

# Does it collect any user's information from it's client and API?
No, Discord WebClient does not collect any user's information.

# What information does it collect from user?
Nothing. We do not collect any informations from user. Such as IP Addresses, User-Agent, GeoLocation, API Requests (such as Login, which includes email and password), etc. We take people's privacy very seriously. You may review our code if you don't believe it.

# Why did you upload the javascript file for core of Discord Client?
We uploaded the "CORE" so that people can help us contribute to the client such as improvement, fix bugs, etc.

# Some features doesn't work on the client!
Yes, we don't gurantee that everything will work on the Client. Such as Uploading attachement to Discord, Payment information, Discord nitro subscription info, Server boosts, etc.

# We need your help!
We need your help to implement hCaptcha on older client! Since newer client uses hCaptcha, reCaptcha is now pretty useless to Discord. reCaptcha's site key is basically gone now. We really appreciate if you could help us implement hCaptcha!

# Contributions
If you have found any problems or want to add features on WebClient, Don't hesitate to open pull requests. This is really important to us and further developement of this project. We would love for you to contribute to our project to help us improve our webclient!

# License
Licensed in [MIT License](https://github.com/gunawan092w/discord-webclient/blob/main/LICENSE)
