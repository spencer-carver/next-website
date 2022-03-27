const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

const imgixImageLoader = {
    deviceSizes: [360, 500, 760, 1240],
    loader: "imgix",
    path: "https://carvers.imgix.net/",
};

module.exports = withBundleAnalyzer({
    images: { loader: "custom" }
});
