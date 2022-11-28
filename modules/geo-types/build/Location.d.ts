import { Markdown, Slug, SlugModelType, KeyValueMarkdownModelType } from "model-types";
import { Area } from "./Area";
import { Polygon } from "./Polygon";
export interface City extends SlugModelType {
    name: string;
    latitude: number;
    longitude: number;
    population: number;
    countrySlug: Slug;
    country?: Country;
}
export interface Country extends SlugModelType {
    name: string;
    continent: string;
    subContinent: string;
    latitude: number;
    longitude: number;
    polygons: Polygon[];
}
/**
 * locations are hierarchically categorized pieces of information.
 *
 * a city can refer to the area, the area can refer the the country, the country to the continent, etc.
 *
 * there are multiple ways to categorize it, but this depends on the application.
 */
export interface Location extends KeyValueMarkdownModelType {
    parent_locationSlug?: Slug;
    parent_location?: Location;
}
export interface Address extends SlugModelType {
    locationSlug: Slug;
    location?: Location;
    postalCode: string;
    street: string;
    houseNumber: string;
    area?: Area;
    description?: Markdown;
}
//# sourceMappingURL=Location.d.ts.map