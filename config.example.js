// Environment Configuration Example
// Copy this file to config.js and add your actual API keys

const API_CONFIG = {
    // NewsAPI - Get your free API key from https://newsapi.org/
    NEWS_API_KEY: 'YOUR_NEWS_API_KEY_HERE',
    
    // Alpha Vantage - Get your free API key from https://www.alphavantage.co/
    ALPHA_VANTAGE_KEY: 'YOUR_ALPHA_VANTAGE_KEY_HERE',
    
    // Yahoo Finance API (if using)
    YAHOO_FINANCE_KEY: 'YOUR_YAHOO_FINANCE_KEY_HERE',
    
    // API Endpoints
    NEWS_API_URL: 'https://newsapi.org/v2/top-headlines',
    COUNTRIES_API_URL: 'https://restcountries.com/v3.1/all',
    WORLD_MAP_URL: 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json',
    ALPHA_VANTAGE_URL: 'https://www.alphavantage.co/query',
    
    // Refresh intervals (in milliseconds)
    NEWS_REFRESH_INTERVAL: 300000, // 5 minutes
    MARKET_REFRESH_INTERVAL: 60000, // 1 minute
    
    // Feature flags
    ENABLE_AUTO_REFRESH: true,
    ENABLE_NOTIFICATIONS: false,
    
    // Development mode
    DEV_MODE: false, // Set to true to use demo data instead of live APIs
};

// Export for use in application
if (typeof module !== 'undefined' && module.exports) {
    module.exports = API_CONFIG;
}
