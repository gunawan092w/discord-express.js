///////////////////////////////////////////////////////////////
//         discord-webclient [v0.1.0-beta 2024-05-24]        //
//      https://github.com/gunawan092w/discord-webclient     // Client: 2019-04
//        Copyright (c) Gunawan092w 2024 - MIT License       //
///////////////////////////////////////////////////////////////

const express = require('express');
const axios = require('axios');
const fs = require('fs-extra');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;
const https = require('https');

const CACHE_DIR = path.join(__dirname, 'cache');
const api = 'https://canary.discord.com/api/'; // Discord's API Endpoint
const assets = 'https://canary.discord.com/assets/'; // Discord's Assets endpoint
const altassets = 'https://web.archive.org/canary.discord.com/assets/'; // Alternative Discord Assets
const cdn = 'https://cdn.discordapp.com';

fs.ensureDirSync(CACHE_DIR); // Check cache folder

// Middleware to check the cache
async function checkCache(req, res, next) {
	const file = req.params.file; const cacheFilePath = path.join(CACHE_DIR, file);
	if (await fs.pathExists(cacheFilePath)) { return res.sendFile(cacheFilePath) } else { next() };
}

app.get('/assets/:file', checkCache, async (req, res) => {
	const file = req.params.file; const cacheFilePath = path.join(CACHE_DIR, file);
  
	if (file.endsWith('.woff')) { // Usually discord would deny people downloading fonts from their server so this is an alternative mirror
		try {
			const assetalt = altassets + file;
			const response = await axios.get(assetalt, { responseType: 'arraybuffer' });
			await fs.outputFile(cacheFilePath, response.data); res.send(response.data);
		} catch (error) { console.error('Failed fetching asset:', file); res.status(500).send('Fetching failed.') }
	} else {
		try {
			const asset = assets + file;
			const response = await axios.get(asset, { responseType: 'arraybuffer' });
			await fs.outputFile(cacheFilePath, response.data); res.sendFile(cacheFilePath);
		} catch (error) { console.error('Failed fetching asset:', file); res.status(500).send('Fetching failed.') }
	}
});

app.use(bodyParser.json());

app.use((req, res, next) => { // Ignore Discord tracker
	if (req.path.startsWith('/api/') && req.path.endsWith('/science')) {
		return res.end(); // Returns 200 (OK) with blank message
	} next();
});

app.use((req, res, next) => { // Ignore Discord tracker
	if (req.path.startsWith('/error-reporting-proxy/') && req.path.endsWith('/web')) {
		return res.end(); // Returns 200 (OK) with blank message
	} next();
});

app.use('/cdn/*', async (req, res) => {
	const path = req.originalUrl.replace('/cdn', ''); const url = `${api}${path}`;
	try {
		const response = await fetch(url, { method, body, headers: {
			'Content-type': req.headers['content-type']
		}});
		const responseBody = await response.text(); 
		const contentType = response.headers.get('content-type');
		res.status(response.status).header('Content-Type', contentType).send(responseBody);
	} catch (error) {
		console.error('Error forwarding request:', url);
		res.status(500).json({ error: 'Internal server error', details: error.message });
	}
})
app.use('/api/*', async (req, res) => {
	const path = req.originalUrl.replace('/api', ''); const url = `${api}${path}`;
	const method = req.method; const body = (req.method !== 'GET' && req.method !== 'HEAD') ? JSON.stringify(req.body) : null;

	try {
		const response = await fetch(url, { method, body, headers: { 
				'Content-type': req.headers['content-type'], 
				'Authorization': req.headers['authorization'],
				'X-Captcha-Key': req.headers['x-captcha-key'],
				'X-Captcha-Rqtoken': req.headers['x-captcha-rqtoken'],
				'X-Super-Properties': req.headers['x-super-properties']
		}});

		const responseBody = await response.text();
		const contentType = response.headers.get('content-type');

		res.status(response.status).header('Content-Type', contentType).send(responseBody);
	} catch (error) {
		console.error('Error forwarding request:', url);
		res.status(500).json({ error: 'Internal server error', details: error.message });
	}
});

app.use(express.static(path.join(__dirname, 'public'))); // Static folder
app.use((req, res) => {res.status(404).sendFile(path.join(__dirname, 'public', 'index.html'))}); // Loads index.html as 404 page
//app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`)}); // Start webserver
https.createServer({ key: fs.readFileSync('key.pem'), cert: fs.readFileSync('cert.pem') }, app).listen(PORT);