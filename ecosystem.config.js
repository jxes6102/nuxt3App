module.exports = {
    apps: [
      {
        name: 'NuxtAppName',
        exec_mode: 'cluster',
        instances: 'max',
        script: './.output/server/index.mjs',
        env: {
            NITRO_PORT: 3003,
            NITRO_HOST: '127.0.0.1'
        }
      }
    ]
  }