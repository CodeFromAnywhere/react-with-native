"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_map_gl_1 = __importStar(require("react-map-gl"));
var react_1 = require("react");
var HiOutlineLocationMarker_svg_1 = __importDefault(require("../assets/HiOutlineLocationMarker.svg"));
var react_with_native_1 = require("react-with-native");
var react_autosuggest_1 = __importDefault(require("react-autosuggest"));
var MapInput = function (_a) {
    var _b, _c, _d;
    var value = _a.value, onChange = _a.onChange, extra = _a.extra, config = _a.config;
    //amsterdam
    var mapRef = (0, react_1.useRef)(null);
    var _e = (0, react_1.useState)(""), search = _e[0], setSearch = _e[1];
    var _f = (0, react_1.useState)([]), suggestions = _f[0], setSuggestions = _f[1];
    var _g = (0, react_1.useState)({
        width: "100%",
        height: 300,
        latitude: value === null || value === void 0 ? void 0 : value.latitude,
        longitude: value === null || value === void 0 ? void 0 : value.longitude,
        zoom: value === null || value === void 0 ? void 0 : value.zoom,
    }), viewport = _g[0], setViewport = _g[1];
    // Teach Autosuggest how to calculate suggestions for any given input value.
    var getSuggestions = function (value) { return __awaiter(void 0, void 0, void 0, function () {
        var inputValue, url, suggestions;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    inputValue = value.trim().toLowerCase();
                    if ((inputValue === null || inputValue === void 0 ? void 0 : inputValue.length) === 0) {
                        return [2 /*return*/, []];
                    }
                    url = "https://api.mapbox.com/geocoding/v5/mapbox.places/".concat(inputValue, ".json?access_token=").concat(config === null || config === void 0 ? void 0 : config.mapboxKey, "&limit=4");
                    return [4 /*yield*/, fetch(url, {
                            method: "GET",
                            headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                                // "User-Agent": "*",
                            },
                        })
                            .then(function (response) { return response.json(); })
                            .then(function (response) {
                            return response;
                        })
                            .catch(function (error) {
                            console.error(error);
                        })];
                case 1:
                    suggestions = _a.sent();
                    return [2 /*return*/, (inputValue === null || inputValue === void 0 ? void 0 : inputValue.length) === 0 ? [] : (suggestions === null || suggestions === void 0 ? void 0 : suggestions.features) || []];
            }
        });
    }); };
    // const debouncedGetSuggestions = useMemo(
    //   () => debounce(getSuggestions, 2000, { trailing: true }),
    //   []
    // );
    // When suggestion is clicked, Autosuggest needs to populate the input
    // based on the clicked suggestion. Teach Autosuggest how to calculate the
    // input value for every given suggestion.
    var getSuggestionValue = function (suggestion) { return suggestion.place_name; };
    // Use your imagination to render suggestions.
    var renderSuggestion = function (suggestion) {
        var text = suggestion.place_name;
        return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "bg-white hover:bg-gray-200 p-4" }, { children: (text === null || text === void 0 ? void 0 : text.length) > 30 ? text.slice(0, 28) + ".." : text }), void 0));
    };
    var inputProps = {
        placeholder: "Find your place",
        value: search,
        onChange: function (e, _a) {
            var newValue = _a.newValue;
            return setSearch(newValue);
        },
    };
    // Autosuggest will call this function every time you need to update suggestions.
    // You already implemented this logic above, so just use it.
    var onSuggestionsFetchRequested = function (_a) {
        var value = _a.value;
        return __awaiter(void 0, void 0, void 0, function () {
            var newSuggestions;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, getSuggestions(value)];
                    case 1:
                        newSuggestions = _b.sent();
                        if (newSuggestions) {
                            setSuggestions(newSuggestions);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // Autosuggest will call this function every time you need to clear suggestions.
    var onSuggestionsClearRequested = function () {
        setSuggestions([]);
    };
    var selectSuggestion = function (_, suggestion) {
        var latitude = suggestion.suggestion.center[1];
        var longitude = suggestion.suggestion.center[0];
        console.log("sugg", suggestion.suggestion);
        var zoom = 14;
        if (suggestion.suggestion.bbox) {
            var latDiff = suggestion.suggestion.bbox[3] - suggestion.suggestion.bbox[1];
            var lngDiff = suggestion.suggestion.bbox[2] - suggestion.suggestion.bbox[0];
            var avgDiff = (latDiff + lngDiff) / 2;
            zoom = Math.round(Math.log(2500 / avgDiff));
        }
        var nextViewport = {
            width: "100%",
            height: 300,
            latitude: latitude,
            longitude: longitude,
            zoom: zoom,
        };
        //@ts-ignore
        setViewport(nextViewport);
        onChange({
            latitude: nextViewport.latitude,
            longitude: nextViewport.longitude,
            zoom: nextViewport === null || nextViewport === void 0 ? void 0 : nextViewport.zoom,
        });
    };
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "w-full bg-white border rounded-lg" }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "w-full bg-white" }, { children: (0, jsx_runtime_1.jsxs)(react_map_gl_1.default, __assign({ doubleClickZoom: false, ref: mapRef, mapStyle: "mapbox://styles/picozzimichele/ckty78kzo0q4t17qubs9yi8ok", className: "w-full h-40", mapboxApiAccessToken: config === null || config === void 0 ? void 0 : config.mapboxKey }, viewport, { onViewportChange: function (nextViewport) {
                        //@ts-ignore
                        setViewport(nextViewport);
                        onChange({
                            latitude: nextViewport === null || nextViewport === void 0 ? void 0 : nextViewport.latitude,
                            longitude: nextViewport === null || nextViewport === void 0 ? void 0 : nextViewport.longitude,
                            zoom: nextViewport === null || nextViewport === void 0 ? void 0 : nextViewport.zoom,
                        });
                    } }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ onClick: function () {
                                setViewport(__assign(__assign({}, viewport), { zoom: viewport.zoom + 1 }));
                                onChange({
                                    latitude: value === null || value === void 0 ? void 0 : value.latitude,
                                    longitude: value === null || value === void 0 ? void 0 : value.longitude,
                                    zoom: (viewport === null || viewport === void 0 ? void 0 : viewport.zoom) + 1,
                                });
                            }, className: "z-10 cursor-pointer absolute top-4 right-4 w-10 h-10 bg-white rounded flex justify-center items-center" }, { children: "+" }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ onClick: function () {
                                setViewport(__assign(__assign({}, viewport), { zoom: viewport.zoom - 1 }));
                                onChange({
                                    latitude: value === null || value === void 0 ? void 0 : value.latitude,
                                    longitude: value === null || value === void 0 ? void 0 : value.longitude,
                                    zoom: (viewport === null || viewport === void 0 ? void 0 : viewport.zoom) - 1,
                                });
                            }, className: "z-10 cursor-pointer absolute top-16 right-4 w-10 h-10 bg-white rounded flex justify-center items-center" }, { children: "-" }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: "z-10 absolute top-4 left-0 bg-white mx-10" }, { children: (0, jsx_runtime_1.jsx)(react_autosuggest_1.default, { suggestions: suggestions, onSuggestionsFetchRequested: onSuggestionsFetchRequested, onSuggestionsClearRequested: onSuggestionsClearRequested, getSuggestionValue: getSuggestionValue, renderSuggestion: renderSuggestion, onSuggestionSelected: selectSuggestion, 
                                // renderSuggestionsContainer={({ children }) => {
                                //   return <div className={`h-60 overflow-scroll`}>{children}</div>;
                                // }}
                                inputProps: inputProps }, void 0) }), void 0), value && value.latitude && value.longitude && (extra === null || extra === void 0 ? void 0 : extra.showMarker) && ((0, jsx_runtime_1.jsx)(react_map_gl_1.Marker, __assign({ latitude: value.latitude, longitude: value.longitude, offsetLeft: 0, offsetTop: 0 }, { children: (0, jsx_runtime_1.jsx)("p", __assign({ className: "text-2xl cursor-pointer animate-bounce" }, { children: (0, jsx_runtime_1.jsx)(react_with_native_1.Svg, { src: HiOutlineLocationMarker_svg_1.default, className: "h-6 text-blue-500" }, void 0) }), void 0) }), void 0))] }), void 0) }), void 0), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "m-3" }, { children: [(0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("strong", { children: "Latitude:" }, void 0), " ", (_b = value === null || value === void 0 ? void 0 : value.latitude) === null || _b === void 0 ? void 0 : _b.toFixed(4)] }, void 0), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("strong", { children: "Longitude:" }, void 0), " ", (_c = value === null || value === void 0 ? void 0 : value.longitude) === null || _c === void 0 ? void 0 : _c.toFixed(4)] }, void 0), (extra === null || extra === void 0 ? void 0 : extra.showZoom) && ((0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("strong", { children: "Zoom:" }, void 0), " ", (_d = value === null || value === void 0 ? void 0 : value.zoom) === null || _d === void 0 ? void 0 : _d.toFixed(1)] }, void 0))] }), void 0)] }), void 0));
};
var defaultLatidue = 52.377956;
var defaultLongitude = 4.89707;
var defaultZoom = 11;
MapInput.defaultInitialValue = {
    latitude: defaultLatidue,
    longitude: defaultLongitude,
    zoom: defaultZoom,
};
exports.default = MapInput;
//# sourceMappingURL=MapInput.js.map