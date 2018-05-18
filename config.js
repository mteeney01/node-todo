let config = {};

config.host = process.env.HOST || 'URL from Keys panel in Azure Portal';
config.authKey = process.env.AUTH_KEY || 'Auth Key from Keys panel in Azure Portal';
config.databaseId = 'Database ID from Azure Portal';
config.collectionId = 'Collection ID from Azure Portal';

module.exports = config;