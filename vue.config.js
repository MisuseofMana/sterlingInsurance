  module.exports = {
	lintOnSave: false, 
    outputDir: "docs",
    publicPath: '/docs/',
    indexPath:'index.html',
    filenameHashing: false,
    chainWebpack: (config) => {
        config.module
            .rule('txt')
            .test(/\.txt$/)
            .use('raw-loader')
            .loader('raw-loader')
            .end();
    },
}