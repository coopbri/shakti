const path = require("path");

const aliasPathsToResolve = [
  { name: "src", path: path.resolve(__dirname, "../src/") },
];

module.exports = () => {
  return {
    webpack(config, { defaultLoaders }) {
      config.module.rules.push({
        test: /\.(ts|tsx)$/,
        use: [defaultLoaders.babel],
      });

      /** Resolve aliases */
      aliasPathsToResolve.forEach((module) => {
        config.resolve.alias[module.name] = module.path;
      });

      return config;
    },
  };
};
