module.exports = {
  apps: [
    {
      name: 'atlas-landing-develop',
      exec_interpreter: 'node',
      script: './.output/server/index.mjs',
      port: '3087',
    },
  ],
}