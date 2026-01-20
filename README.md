# Puppet Strings Terminal - Intelligence Dashboard

A real-time intelligence dashboard that integrates live data from multiple sources to provide comprehensive geopolitical, economic, and strategic insights.

## Features

### 🌍 Interactive Global Map
- D3.js-powered world map visualization
- Zoom and pan capabilities
- Click countries for detailed information
- Real-time data from REST Countries API
- Interactive tooltips with country statistics

### 📰 Live News Feed
- Real-time geostrategic news
- Integration with NewsAPI
- Country-specific news filtering
- Auto-refresh functionality

### 📊 Economic Indicators
- Global market monitoring
- Stock indices (S&P 500, NASDAQ, Dow Jones)
- Commodity prices (Gold, Oil)
- Currency exchange rates
- Real-time updates and percentage changes

### 💻 Intelligence Console
- System activity logging
- API status monitoring
- Event notifications
- Scrollable history

### 🎨 UI Features
- Dark mode (default) and Light mode toggle
- Fully responsive design (desktop, tablet, mobile)
- Loading indicators for all data sources
- Smooth animations and transitions
- Accessible design with ARIA support

## Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection for API access
- Optional: API keys for full functionality

### Installation

1. Clone the repository:
```bash
git clone https://github.com/remvan5917/puppet-strings-terminal.git
cd puppet-strings-terminal
```

2. Copy the example configuration:
```bash
cp config.example.js config.js
```

3. (Optional) Edit `config.js` and add your API keys:
```javascript
const API_CONFIG = {
    NEWS_API_KEY: 'your-newsapi-key',
    ALPHA_VANTAGE_KEY: 'your-alphavantage-key',
    // ... other configuration
};
```

4. Open `index.html` in your web browser:
```bash
# On macOS
open index.html

# On Linux
xdg-open index.html

# On Windows
start index.html
```

Or use a local web server:
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js http-server
npx http-server
```

Then navigate to `http://localhost:8000`

## API Configuration

### NewsAPI
- **Purpose**: Live news feeds
- **Get API Key**: https://newsapi.org/
- **Free Tier**: 100 requests/day
- **Required**: No (demo data used as fallback)

### REST Countries
- **Purpose**: Country information and statistics
- **API Key**: Not required
- **Free Tier**: Unlimited
- **Required**: Yes (for country data)

### Alpha Vantage
- **Purpose**: Stock market and economic data
- **Get API Key**: https://www.alphavantage.co/
- **Free Tier**: 5 API requests/minute, 500 requests/day
- **Required**: No (demo data used as fallback)

## Configuration Options

Edit the `CONFIG` object in `index.html` or create a separate `config.js` file:

```javascript
const CONFIG = {
    NEWS_API_KEY: 'demo',              // Your NewsAPI key
    ALPHA_VANTAGE_KEY: 'demo',         // Your Alpha Vantage key
    NEWS_API_URL: '...',               // NewsAPI endpoint
    COUNTRIES_API_URL: '...',          // REST Countries endpoint
    WORLD_MAP_URL: '...',              // World map GeoJSON source
    REFRESH_INTERVAL: 300000,          // Auto-refresh interval (5 minutes)
};
```

## Usage

### Theme Toggle
Click the "Toggle Theme" button in the header to switch between dark and light modes. Your preference is saved in browser local storage.

### Interactive Map
- **Hover** over countries to see basic information
- **Click** countries to view detailed data and related news
- **Zoom** using mouse wheel or pinch gesture
- **Pan** by clicking and dragging
- Click **Reset** to return to default view

### News Feed
- Automatically updates every 5 minutes
- Click **Refresh** for immediate update
- Click on news items to open full articles (when available)

### Economic Indicators
- Real-time market data updates
- Green (▲) indicates positive change
- Red (▼) indicates negative change
- Click **Refresh** for immediate update

### Intelligence Console
- Shows system events and API activity
- Click **Clear** to remove all entries
- Maximum 50 entries retained

## Development

### File Structure
```
puppet-strings-terminal/
├── index.html           # Main application file
├── config.example.js    # Example configuration
├── config.js           # Your configuration (gitignored)
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

### Technologies Used
- **D3.js v7**: Data visualization and map rendering
- **TopoJSON**: Geographic data format
- **REST APIs**: Live data integration
- **Vanilla JavaScript**: No framework dependencies
- **CSS Grid & Flexbox**: Responsive layout
- **CSS Variables**: Theme management

### Browser Support
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimization

The dashboard includes several performance optimizations:

1. **Lazy Loading**: Data loaded only when needed
2. **Caching**: Browser caching for static resources
3. **Debouncing**: Throttled API requests
4. **Fallback Data**: Demo data when APIs unavailable
5. **Efficient DOM Updates**: Minimal reflows and repaints

## Troubleshooting

### Map Not Loading
- Check browser console for errors
- Verify internet connection
- GeoJSON data is loaded from CDN (cdn.jsdelivr.net)
- Fallback message displayed if unavailable

### News Not Updating
- Verify NewsAPI key is valid
- Check API rate limits (100/day for free tier)
- Demo news shown when API unavailable

### Economic Data Missing
- Alpha Vantage has strict rate limits (5 req/min)
- Demo data used as fallback
- Ensure API key is configured correctly

### Theme Not Persisting
- Enable browser local storage
- Check browser privacy settings
- Clear cache and reload

## Security Considerations

⚠️ **Important**: Never commit API keys to version control

- Use `config.js` for sensitive data (gitignored)
- Keep API keys secure
- Use environment-specific configurations
- For production, implement backend proxy for API requests

## Future Enhancements

Potential improvements for future versions:

- [ ] Backend API proxy for secure key management
- [ ] WebSocket support for real-time updates
- [ ] Additional data sources (Twitter, financial APIs)
- [ ] Custom alert system for specific events
- [ ] Export data to CSV/PDF
- [ ] User authentication and preferences
- [ ] Historical data visualization
- [ ] Advanced filtering and search
- [ ] Mobile app version

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Credits

- World map data: [Natural Earth](https://www.naturalearthdata.com/)
- Country data: [REST Countries](https://restcountries.com/)
- News data: [NewsAPI](https://newsapi.org/)
- Market data: [Alpha Vantage](https://www.alphavantage.co/)
- D3.js library: [Mike Bostock](https://d3js.org/)

## Support

For issues, questions, or suggestions:
- Open an issue on GitHub
- Check existing issues for solutions
- Review the troubleshooting section

---

**Version**: 1.0.0  
**Last Updated**: January 2026
