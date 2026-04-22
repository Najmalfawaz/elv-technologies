module.exports = {
  apps: [
    {
      name: 'elv-technologies',
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
      instances: 'max', // Utilizes all CPU cores for maximum performance
      exec_mode: 'cluster', // Enables cluster mode for load balancing
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      error_file: './logs/error.log',
      out_file: './logs/out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      merge_logs: true
    }
  ]
};
