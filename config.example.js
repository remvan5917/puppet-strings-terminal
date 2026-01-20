// Environment Configuration
// This file shows the configuration structure for the Puppet Strings Terminal dashboard
// 
// USAGE:
// 1. Copy this file to config.js: cp config.example.js config.js
// 2. Add your API keys to config.js
// 3. Include config.js BEFORE index.html's script tag:
//    <script src="config.js"></script>
// 4. config.js is gitignored to protect your API keys

const API_CONFIG = {
    // NewsAPI - Get your free API key from https://newsapi.org/
    // Free tier: 100 requests/day, 1000 requests/month
    NEWS_API_KEY: 'YOUR_NEWS_API_KEY_HERE',
    
    // Alpha Vantage - Get your free API key from https://www.alphavantage.co/
    // Free tier: 5 API requests/minute, 500 requests/day
    ALPHA_VANTAGE_KEY: 'YOUR_ALPHA_VANTAGE_KEY_HERE',
    
    // API Endpoints (usually don't need to change these)
    NEWS_API_URL: 'https://newsapi.org/v2/top-headlines',
    COUNTRIES_API_URL: 'https://restcountries.com/v3.1/all',
    WORLD_MAP_URL: 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json',
    
    // Refresh intervals (in milliseconds)
    REFRESH_INTERVAL: 300000, // 5 minutes for news and economic data
    
    // Map zoom limits
    MIN_ZOOM_SCALE: 1,   // Minimum zoom (fully zoomed out)
    MAX_ZOOM_SCALE: 8,   // Maximum zoom (8x magnification)
    
    // Demo data configuration
    MAX_MARKET_VOLATILITY_PERCENT: 5, // Maximum random price change for demo economic data
};

// Export for use in application
if (typeof module !== 'undefined' && module.exports) {
    module.exports = API_CONFIG;
}
