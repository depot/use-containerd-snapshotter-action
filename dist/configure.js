"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/configure.ts
var fsp = __toESM(require("fs/promises"));
async function run() {
  const configExists = await fsp.access("/etc/docker/daemon.json").then(() => true).catch(() => false);
  const existingConfig = configExists ? await fsp.readFile("/etc/docker/daemon.json", "utf8") : "{}";
  const parsedConfig = JSON.parse(existingConfig);
  parsedConfig.features = parsedConfig.features ?? {};
  parsedConfig.features["containerd-snapshotter"] = true;
  await fsp.writeFile("/etc/docker/daemon.json", JSON.stringify(parsedConfig, null, 2));
}
run().catch((error) => {
  console.error(error);
  process.exit(1);
});
