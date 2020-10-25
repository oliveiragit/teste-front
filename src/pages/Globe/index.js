import React, { useRef, useLayoutEffect } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodataWorldLow from '@amcharts/amcharts4-geodata/worldLow';

// import { Container } from './styles';

function Globe() {
  const x = useRef(null);

  useLayoutEffect(() => {
    // Create map instance
    const chart = am4core.create('chartdiv', am4maps.MapChart);
    chart.projection = new am4maps.projections.Orthographic();
    chart.panBehavior = 'rotateLongLat';
    chart.deltaLongitude = 10;
    chart.deltaLatitude = -20;
    chart.geodata = am4geodataWorldLow;
    // Create map polygon series
    const polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.north = 90;
    // Make map load polygon (like country names) data from GeoJSON
    polygonSeries.useGeodata = true;
    // Configure series
    const polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = '{name}';
    polygonTemplate.fill = am4core.color('#74B266');
    // Create hover state and set alternative fill color
    const hs = polygonTemplate.states.create('hover');
    hs.properties.fill = am4core.color('#367B25');
    const graticuleSeries = chart.series.push(new am4maps.GraticuleSeries());
    graticuleSeries.mapLines.template.line.stroke = am4core.color('#67b7dc');
    graticuleSeries.mapLines.template.line.strokeOpacity = 0.2;
    graticuleSeries.fitExtent = false;
    chart.backgroundSeries.mapPolygons.template.polygon.fill = am4core.color(
      '#aadaff'
    );
    chart.backgroundSeries.mapPolygons.template.polygon.fillOpacity = 1;
    const lineSeries = chart.series.push(new am4maps.MapLineSeries());
    lineSeries.mapLines.template.stroke = am4core.color('#e03e96');
    lineSeries.mapLines.template.strokeWidth = 4;
    lineSeries.data = [
      {
        multiGeoLine: [
          [
            { latitude: 48.856614, longitude: 2.352222 },
            { latitude: 19.432608, longitude: -99.133209 },
            { latitude: 21.306944, longitude: -157.858337 },
          ],
        ],
      },
    ];
    x.current = chart;

    return () => {
      chart.dispose();
    };
  }, []);

  return (
    <>
      <h1>
        WORKS
        <div id="chartdiv" style={{ width: '100%', height: '500px' }} />
      </h1>
    </>
  );
}

export default Globe;
