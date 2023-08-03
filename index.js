//require os
const os = require("os");
const path = require("path");

const homeDirectory = os.homedir();

module.exports = function untildify(absolutePath) {
  const normalizedPath = path.normalize(absolutePath) + path.sep;

  return (
    normalizedPath.startsWith(homeDirectory)
      ? normalizedPath.replace(homeDirectory + path.sep, `~${path.sep}`)
      : normalizedPath
  ).slice(0, -1);
};
