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

//
// module.exports = {
//     webpack: (config, options) => {
//         config.plugins.push(
//             new options.webpack.container.ModuleFederationPlugin({
//                 name:"remote_manuscript",
//                 filename: "static/chunks/remoteEntry.js",
//                 remoteType: "var",
//                 exposes: {
//                     "./manuscript": "./src/components/Manuscript.tsx"
//                 },
//                 shared: {
//                     react: {
//                         eager: true,
//                         singleton: true
//                     },
//                     "react-dom": {
//                         eager: true,
//                         singleton: true
//                     }
//                 }
//             })
//         )
//         return config
//     },
//     reactStrictMode: true,
// };


// module.exports = {
//     webpack(config, options) {
//         config.plugins.push(
//             new NextFederationPlugin({
//                 name: 'remote_manuscript',
//                 filename: 'static/chunks/remoteEntry.js',
//                 exposes: {
//                     './manuscript': './src/components/Manuscript.tsx'
//                 },
//                 shared: {},
//                 extraOptions:{
//                     exposePages: true
//                 }
//             }),
//         );
//
//         return config;
//     },
//     reactStrictMode: true,
// };