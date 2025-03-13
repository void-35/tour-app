import React from "react";
import { YMaps, Map, Placemark, Polyline, GeolocationControl } from "react-yandex-maps";

const TourMap = ({ coordinates }) => {
  const points = [
    [43.25654, 76.94578], // проспект Сейфуллина, 506/99
    [43.24282, 76.93615], // ул. Байтурсынова, 58А
    [43.25271, 76.94360], // ул. Гоголя, 40
    [43.20291, 76.93490], // Горная улица, 465
    [43.22764, 76.96569], // Гора Кок-Тобе
    [43.23710, 76.90910], // пр. Достык, 104А
    [43.18598, 77.06448], // Или-Алатавский нац. парк
    [43.15660, 77.08060], // Алматинская область (примерная точка)
    [43.00000, 77.00000], // с. Чунджа (примерная точка)
    [43.26123, 76.90123], // ул. Кабанбай батыра, 58
  ];
  console.log(coordinates[0])
  console.log(points[0])

  return (
    <YMaps query={{ apikey: "ВАШ_API_КЛЮЧ" }}>
      <Map defaultState={{ center: coordinates[0], zoom: 12 }} width="100%" height="500px">
        <GeolocationControl options={{ float: "right" }} />

        {/* Маркеры на карте */}
        {coordinates.map((coords, index) => (
          <Placemark key={index} geometry={coords} options={{ preset: "islands#redDotIcon" }} />
        ))}

        {/* Линия маршрута */}
        <Polyline geometry={coordinates} options={{ strokeColor: "#ff0000", strokeWidth: 4, strokeOpacity: 0.8 }} />
      </Map>
    </YMaps>
  );
};

export default TourMap;
