const compression = require('compression');

const compressionMiddleware = compression();

function cacheControlMiddleware(req, res, next) {
  if (req.method === 'GET' && req.url.startsWith('/api/')) {
    res.setHeader('Cache-Control', 'public, max-age=60, stale-while-revalidate=120');
  }
  next();
}

const lazyLoadingHints = {
  images: 'Use loading="lazy" for non-critical images.',
  scripts: 'Defer non-critical scripts and split route-level chunks.',
  prefetch: 'Use rel="preconnect" for critical origins and prefetch key routes.'
};

module.exports = {
  compressionMiddleware,
  cacheControlMiddleware,
  lazyLoadingHints
};
