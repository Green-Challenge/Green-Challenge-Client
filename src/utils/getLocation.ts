import {MutableRefObject} from 'react';

export type Axis = {
  latitude: number;
  longitude: number;
};

export type Distance = Axis & {
  distance: number;
};

/**
X = ( cos( 위도#1 ) * 6400 * 2 * 3.14 / 360 ) * | 경도#1 - 경도#2 |
Y = 111 * | 위도#1 - 위도#2 |
D = √ ( X² + Y² )
 */
const getDistance = (distance: Distance, {latitude, longitude}: Axis) => {
  const {latitude: prevLatitude, longitude: prevLongitude} = distance;
  const X =
    ((Math.cos(latitude) * 6400 * 2 * Math.PI) / 360) *
    Math.abs(longitude - prevLongitude);
  const Y = 111 * Math.abs(latitude - prevLatitude);
  return (X ** 2 + Y ** 2) ** (1 / 2);
};

export const getCurrentLocation = (ref: MutableRefObject<Distance>) => {
  navigator.geolocation.getCurrentPosition(pos => {
    const {latitude, longitude} = pos.coords;
    if (ref.current.latitude === 0 && ref.current.longitude === 0) {
      ref.current.latitude = latitude;
      ref.current.longitude = longitude;
    } else {
      const distance = getDistance(ref.current, {latitude, longitude});
      ref.current = {
        distance: ref.current.distance + distance,
        latitude,
        longitude,
      };
    }
  });
};
