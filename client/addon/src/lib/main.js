var pageMod = require("sdk/page-mod"),
  data = require("sdk/self").data;

pageMod.PageMod({
  include: "*.locamotion.org",
  contentScriptFile: data.url("client-script.js")
});