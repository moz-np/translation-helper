var pageMod = require("sdk/page-mod"),
  self = require("sdk/self");

pageMod.PageMod({
  include: "mozilla.locamotion.org",
  contentScriptFile: self.data.url("client-script.js");
});