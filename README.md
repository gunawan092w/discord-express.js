# Overview
Discord WebClient (2016-09 - 2019-04) - V0.1.0-BETA
Using Express.JS to host a webserver, Discord v6 API Proxy, with Assets cacher

# How do i run Discord WebClient?
1. Clone this repository: `git clone https://github.com/gunawan092w/discord-webclient.git && cd discord-webclient`
2. Install required dependency: `npm i`
3. Run the webclient: `node .` or `node index.js`
4. Visit the webclient on your browser: `http://localhost:3000`

# How Asset caching works?
Everytime client fetches assets through `/assets/`, It first fetch the files through Discord Server `https://discord.com/assets/`. If the request responds 200 (OK), It downloads the assets and saves it to `cache` folder.

# Does it collect information such as Account information, Token, Tracking every user movement (`/science/`), etc?
No, Discord WebClient does not collect any user's information. 
We have blocked `/api/science/` to prevent Discord tracking users.

# Some features doesn't work on the client!
Yes, we don't gurantee that everything will work on the Client. Such as Uploading attachement to discord, Payment information, Discord nitro subscription info, Server boosts, etc.

# We need your help!
We need your help to implement hCaptcha on older client! Since newer client uses hCaptcha, reCaptcha is now pretty useless to Discord. reCaptcha's site key is basically gone now. We really appreciate if you could help us implement hCaptcha!

# Contributions
If you have found any problems or want to add features on WebClient, Don't hesitate to open pull requests. This is really important to us and further developement of this project. We would love for you to contribute to our project to help us improve our webclient!

# License
Licensed in [MIT License](https://github.com/gunawan092w/discord-webclient/blob/main/LICENSE)
