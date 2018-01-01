const fs = require('fs');
const join = require('path').join;

const PRESET_DIR = "presets";

fs.readdir(PRESET_DIR, (err, files) => {
    let allPresets = {};
    files.forEach(file => {
        let presetsInFile = require(join(PRESET_DIR, file));
        allPresets = Object.assign({}, allPresets, presetsInFile);
    });
    console.log(JSON.stringify(allPresets));
});