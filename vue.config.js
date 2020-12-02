  module.exports = {
	lintOnSave: false, 
    outputDir: "docs",
    publicPath: '/sterlingInsurance/',
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