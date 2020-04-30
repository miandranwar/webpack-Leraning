let path = require('path');


module.exports = {
    entry : './app/asserts/index.js',
    output : {
        filename : 'bundle.js',
        path : path.resolve(__dirname,'app')
    },
    module : {
        rules: [
            {
                test :/\.s[c]ss$/i,
                use : ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    mode : 'development',
    watch : true
}