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
    const config = withBundleAnalyzer({
        ...defaultConfig,
        images: imgixImageLoader,
        ...(phase === PHASE_DEVELOPMENT_SERVER ? {
            pageExtensions: defaultConfig.pageExtensions.map((extension) => [`dev\.${ extension }`, extension]).flat(),
            webpack: (config) => {
                config.module.rules.push({
                    test: /\.md/,
                    type: "asset/source"
                });
    
                return config;
            }
        } : {
            pageExtensions: defaultConfig.pageExtensions.map((extension) => `(?<!dev\.)${ extension }`),
        })
    });

    // @next/bundle-analyzer adds values which next complains about
    delete config.webpackDevMiddleware;
    delete config.configOrigin;
    delete config.target;

    // next itself adds some defaults that it complains about
    delete config.amp.canonicalBase;
    delete config.assetPrefix;
    delete config.experimental.outputFileTracingRoot;
    delete config.i18n;
    delete config.reactStrictMode;

    return config;
};
