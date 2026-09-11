/**
 * One projection, shared by the coastlines and the catalogue points, so the
 * dots land on the right continents.
 *
 * Web Mercator, clamped well short of the poles: past about 72 degrees the
 * stretch is absurd and there is little footage up there anyway.
 */

const MAX_LAT = 72;
const MAX_MERCATOR = Math.log(Math.tan(Math.PI / 4 + (MAX_LAT * Math.PI) / 180 / 2));

export function project(lat: number, lng: number): { x: number; y: number } {
  const clamped = Math.max(-MAX_LAT, Math.min(MAX_LAT, lat));
  const rad = (clamped * Math.PI) / 180;
  const mercator = Math.log(Math.tan(Math.PI / 4 + rad / 2));

  return {
    x: (lng + 180) / 360,
    y: 0.5 - mercator / (2 * MAX_MERCATOR),
  };
}
