const Remark = require(`remark`);
const _ = require(`lodash`);

const plugin = require(`.`);

// Use plugin as done in gatsby-transformer-remark
// Setup Remark.
let remark = new Remark();

if (_.isFunction(plugin.setParserPlugins)) {
  for (let parserPlugin of plugin.setParserPlugins(plugin.pluginOptions)) {
    if (_.isArray(parserPlugin)) {
      const [parser, options] = parserPlugin;
      remark = remark.use(parser, options);
    } else {
      remark = remark.use(parserPlugin);
    }
  }
}

// Try parsing to see if plugin has been correctly used
if (
  remark.parse(`::: my-div\nToto is **back**\n:::`).children[0].type !==
  "fencedDiv"
) {
  console.error("Test fails: plugin has not been correctly used");
  process.exitCode = 1;
} else {
  console.log("Test passes: plugin correctly used");
}
