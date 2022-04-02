const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});

const imgixImageLoader = {
    deviceSizes: [360, 500, 760, 1020, 1240, 1440],
    loader: "imgix",
    path: "https://carvers.imgix.net/",
};

module.exports = (phase, { defaultConfig }) => {
    return withBundleAnalyzer({
        ...defaultConfig,
        images: imgixImageLoader,
        ...(phase === PHASE_DEVELOPMENT_SERVER ? {
            pageExtensions: defaultConfig.pageExtensions.map((extension) => [`dev\.${extension}`, extension]).flat(),
            webpack: (config) => {
                config.module.rules.push({
                    test: /\.md/,
                    type: "asset/source"
                });
    
                return config;
            }
        } : {
            pageExtensions: defaultConfig.pageExtensions.map((extension) => `(?<!dev\.)${extension}`),
        })
    });
};
