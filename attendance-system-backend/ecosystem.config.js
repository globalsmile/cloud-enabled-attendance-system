module.exports = {
  apps: [{
    name: 'attendance-system',
    script: 'server.js',
    env_production: {
      NODE_ENV: 'production',
    },
    env_file: '.env'
  }],
};


