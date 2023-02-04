const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          module: {
            rules: [
              {
                test: /\.s[ac]ss$/i,
                use: [
                  "sass-loader",
                ],
              },
            ],
          },
        },
        additionalData: `@import "@/scss/_variables.scss";`,
      },
    },
  },
});
