var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { useEffect, useState } from "react";
/**

- Implement a component that preloads all audios for the `ShortMarkdown` and lets you play one with a callback (look at https://stackoverflow.com/questions/47686345/playing-sound-in-react-js)
- If slide has audio belonging to it, find it and play it. Start at certain point, depending on which part you are at.
- Select the correct audio for every slide, and get the API url for it. Load it in into an `<audio>` element once you go to the slide.

*/
export var useMultiAudio = function (urls) {
    var _a = useState([]), sources = _a[0], setSources = _a[1];
    var _b = useState([]), players = _b[0], setPlayers = _b[1];
    useEffect(function () {
        setSources(urls.map(function (url) {
            return {
                url: url,
                audio: new Audio(url),
            };
        }));
        setPlayers(urls.map(function (url) {
            return {
                url: url,
                playing: false,
            };
        }));
    }, [urls.length]);
    var toggle = function (targetIndex) { return function () {
        if (!players[targetIndex]) {
            console.log("VAAG");
            return;
        }
        var newPlayers = __spreadArray([], players, true);
        var currentIndex = players.findIndex(function (p) { return p.playing === true; });
        if (currentIndex !== -1 && currentIndex !== targetIndex) {
            newPlayers[currentIndex].playing = false;
            newPlayers[targetIndex].playing = true;
        }
        else if (currentIndex !== -1) {
            newPlayers[targetIndex].playing = false;
        }
        else {
            newPlayers[targetIndex].playing = true;
        }
        setPlayers(newPlayers);
    }; };
    useEffect(function () {
        sources.forEach(function (source, i) {
            players[i].playing ? source.audio.play() : source.audio.pause();
        });
    }, [sources, players]);
    useEffect(function () {
        sources.forEach(function (source, i) {
            source.audio.addEventListener("ended", function () {
                var newPlayers = __spreadArray([], players, true);
                newPlayers[i].playing = false;
                setPlayers(newPlayers);
            });
        });
        return function () {
            sources.forEach(function (source, i) {
                source.audio.removeEventListener("ended", function () {
                    var newPlayers = __spreadArray([], players, true);
                    newPlayers[i].playing = false;
                    setPlayers(newPlayers);
                });
            });
        };
    }, []);
    return { players: players, toggle: toggle };
};
