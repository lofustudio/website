const nextConfig = {
    webpack: (config, options) => {
        // modify the `config` here

        if (options.isServer) {
            config.externals = ["react", ...config.externals];
        }
        config.resolve.alias["react"] = path.resolve(__dirname, ".\\node_modules\\react");

        return config;
    },
};

module.exports = {
    async redirects() {
        return [
            {
                source: '/discord',
                destination: '/404',
                permanent: true,
            },
        ]
    },
}