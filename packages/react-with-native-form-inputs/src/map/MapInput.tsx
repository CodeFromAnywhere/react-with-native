import ReactMapGL, { Marker, MapRef } from "react-map-gl";
import { useState, useRef } from "react";

import { PluginComponent } from "react-with-native-form";
// import HiOutlineLocationMarker from "../assets/HiOutlineLocationMarker.svg";
// import { Svg } from "react-with-native";
// import Autosuggest from "react-autosuggest";
import { MapInputType, Suggestion, ViewPort } from "./types";

export const MapInput: PluginComponent<MapInputType> = ({
  value,
  onChange,
  extra,
  config,
}) => {
  //amsterdam
  const mapRef = useRef<MapRef>(null);
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [viewport, setViewport] = useState({
    width: "100%",
    height: 300,
    latitude: value?.latitude,
    longitude: value?.longitude,
    zoom: value?.zoom,
  });

  // Teach Autosuggest how to calculate suggestions for any given input value.
  const getSuggestions = async (value: string): Promise<Suggestion[]> => {
    const inputValue = value.trim().toLowerCase();

    if (inputValue?.length === 0) {
      return [];
    }

    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${inputValue}.json?access_token=${config?.mapboxKey}&limit=4`;

    const suggestions = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // "User-Agent": "*",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.error(error);
      });

    return inputValue?.length === 0 ? [] : suggestions?.features || [];
  };

  // const debouncedGetSuggestions = useMemo(
  //   () => debounce(getSuggestions, 2000, { trailing: true }),
  //   []
  // );

  // When suggestion is clicked, Autosuggest needs to populate the input
  // based on the clicked suggestion. Teach Autosuggest how to calculate the
  // input value for every given suggestion.
  const getSuggestionValue = (suggestion: Suggestion) => suggestion.place_name;

  // Use your imagination to render suggestions.
  const renderSuggestion = (suggestion: Suggestion) => {
    const text = suggestion.place_name;

    return (
      <div className={`bg-white hover:bg-gray-200 p-4`}>
        {text?.length > 30 ? text.slice(0, 28) + ".." : text}
      </div>
    );
  };
  const inputProps = {
    placeholder: "Find your place",
    value: search,
    onChange: (e: any, { newValue }: { newValue: string }) =>
      setSearch(newValue),
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  const onSuggestionsFetchRequested = async ({ value }: { value: string }) => {
    const newSuggestions = await getSuggestions(value);
    if (newSuggestions) {
      setSuggestions(newSuggestions);
    }
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const selectSuggestion = (_: any, suggestion: { suggestion: Suggestion }) => {
    const latitude = suggestion.suggestion.center[1];
    const longitude = suggestion.suggestion.center[0];

    console.log("sugg", suggestion.suggestion);
    let zoom = 14;
    if (suggestion.suggestion.bbox) {
      const latDiff =
        suggestion.suggestion.bbox[3] - suggestion.suggestion.bbox[1];
      const lngDiff =
        suggestion.suggestion.bbox[2] - suggestion.suggestion.bbox[0];

      const avgDiff = (latDiff + lngDiff) / 2;

      zoom = Math.round(Math.log(2500 / avgDiff));
    }

    const nextViewport: ViewPort = {
      width: "100%",
      height: 300,
      latitude,
      longitude,
      zoom: zoom,
    };
    //@ts-ignore
    setViewport(nextViewport);

    onChange({
      latitude: nextViewport.latitude as number,
      longitude: nextViewport.longitude,
      zoom: nextViewport?.zoom,
    });
  };

  return (
    <div className={`w-full bg-white border rounded-lg`}>
      <div className={`w-full bg-white`}>
        {/* <ReactMapGL
          doubleClickZoom={false}
          ref={mapRef}
          mapStyle="mapbox://styles/picozzimichele/ckty78kzo0q4t17qubs9yi8ok"
          // className={`w-full h-40`}
          mapboxAccessToken=""={config?.mapboxKey}
          {...viewport}
          // TODO: Fix this, doesn't seem to exist anymore
          // onViewportChange={(nextViewport: ViewPort | undefined) => {
          //   //@ts-ignore
          //   setViewport(nextViewport);
          //   onChange({
          //     latitude: nextViewport?.latitude as number,
          //     longitude: nextViewport?.longitude as number,
          //     zoom: nextViewport?.zoom as number,
          //   });
          // }}
        ><div>
          <div
            onClick={() => {
              setViewport({ ...viewport, zoom: viewport.zoom + 1 });
              onChange({
                latitude: value?.latitude as number,
                longitude: value?.longitude,
                zoom: viewport?.zoom + 1,
              });
            }}
            className={`z-10 cursor-pointer absolute top-4 right-4 w-10 h-10 bg-white rounded flex justify-center items-center`}
          >
            +
          </div>

          <div
            onClick={() => {
              setViewport({ ...viewport, zoom: viewport.zoom - 1 });
              onChange({
                latitude: value?.latitude as number,
                longitude: value?.longitude,
                zoom: viewport?.zoom - 1,
              });
            }}
            className={`z-10 cursor-pointer absolute top-16 right-4 w-10 h-10 bg-white rounded flex justify-center items-center`}
          >
            -
          </div>

          <div className={`z-10 absolute top-4 left-0 bg-white mx-10`}>
            <Autosuggest
              suggestions={suggestions}
              onSuggestionsFetchRequested={onSuggestionsFetchRequested}
              onSuggestionsClearRequested={onSuggestionsClearRequested}
              getSuggestionValue={getSuggestionValue}
              renderSuggestion={renderSuggestion}
              onSuggestionSelected={selectSuggestion}
              // renderSuggestionsContainer={({ children }) => {
              //   return <div className={`h-60 overflow-scroll`}>{children}</div>;
              // }}
              inputProps={inputProps}
            />
          </div>
          {value && value.latitude && value.longitude && extra?.showMarker && (
            <Marker
              latitude={value.latitude}
              longitude={value.longitude}
              offsetLeft={0}
              offsetTop={0}
            >
              <p className="text-2xl cursor-pointer animate-bounce">
                <Svg
                  src={HiOutlineLocationMarker}
                  className="h-6 text-blue-500"
                />
              </p>
            </Marker>
          )}
          </div>
        </ReactMapGL> */}
      </div>
      <div className={`m-3`}>
        <p>
          <strong>Latitude:</strong> {value?.latitude?.toFixed(4)}
        </p>
        <p>
          <strong>Longitude:</strong> {value?.longitude?.toFixed(4)}
        </p>
        {extra?.showZoom && (
          <p>
            <strong>Zoom:</strong> {value?.zoom?.toFixed(1)}
          </p>
        )}
      </div>
    </div>
  );
};

const defaultLatidue = 52.377956;
const defaultLongitude = 4.89707;
const defaultZoom = 11;

MapInput.defaultInitialValue = {
  latitude: defaultLatidue,
  longitude: defaultLongitude,
  zoom: defaultZoom,
};
