module.exports = {
  apps: [
    {
      name: 'atlas-landing-master',
      exec_interpreter: 'node',
      script: './.output/server/index.mjs',
      port: '3066',
    },
  ],
}