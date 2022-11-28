"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.markdownToSayable=void 0;
/**
all mp3s should be stored in a separate location because we don't need them in the file system and we don't reference them, as they are data that is located by convention. all markdowns should have a linked `TextToSpeechAudio[]` which is auto updated every time `dev` is ran. `TextToSpeechAudio` also includes infromation about the `duration`, `voice` and more...

a bigger `.md.mp3` file is auto-created for every markdown file that concatenates all `sayable` audio pieces in the right order, but also includes the audio pieces in between.
*/
var markdownToSayable=function(a){
//1 get markdownparse
a.markdown,a.markdownFilePath;
//2. alter every piece of content as needed into a sayable text that can be understood through audio only
/*
      - headings should be paused before (long) and after (shorter)
      - headings should be numbered
      - images and other inline assets should be referenced with alt text, unless it's an audio file
      - new alineas should get some pause before
      - OPTIONAL: maybe, when starting a (sub)chapter, tell the reader how many subchapters there are in this (sub)chapter. This can give a better orientation
      */return[]};exports.markdownToSayable=markdownToSayable;
//# sourceMappingURL=markdownToSayable.js.map