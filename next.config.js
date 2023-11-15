/** @type {import('next').NextConfig} */
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

module.exports = {
    webpack(config, options) {
        if (!options.isServer) {
            config.plugins.push(
                new NextFederationPlugin({
                    name: 'remote_manuscript',
                    filename: 'static/chunks/remoteEntry.js',
                    remoteType: "var",
                    exposes: {
                        './manuscript': './src/components/manuscript.tsx',
                    }
                })
            );
        }

        return config;
    },
    reactStrictMode: true, // Enable React Strict Mode
};
