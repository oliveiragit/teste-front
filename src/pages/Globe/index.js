import React, { useRef, useLayoutEffect } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodataWorldLow from '@amcharts/amcharts4-geodata/worldLow';

import { linesData } from './mock';
import capitals from './capitals.json';

function Globe() {
  const x = useRef(null);

  useLayoutEffect(() => {
    // Create map instance
    const chart = am4core.create('globeChart', am4maps.MapChart);
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

    // CREATE MAP POINTS
    const values = capitals.map((store) => ({
      long: am4core.type.toNumber(store.CapitalLongitude),
      lat: am4core.type.toNumber(store.CapitalLatitude),
      name: store.CapitalName,
      count: Math.floor(Math.random() * 10),
    }));
    chart.data = values;

    const series = chart.series.push(new am4maps.MapImageSeries());
    series.dataFields.value = 'count';

    const { template } = series.mapImages;
    template.verticalCenter = 'middle';
    template.horizontalCenter = 'middle';
    template.propertyFields.latitude = 'lat';
    template.propertyFields.longitude = 'long';
    template.tooltipText = '[bold]{name} {count} stores[/]';

    const circle = template.createChild(am4core.Circle);
    circle.radius = 10;
    circle.fillOpacity = 0.7;
    circle.verticalCenter = 'middle';
    circle.horizontalCenter = 'middle';
    circle.nonScaling = true;

    const label = template.createChild(am4core.Label);
    label.text = '{count}';
    label.fill = am4core.color('#fff');
    label.verticalCenter = 'middle';
    label.horizontalCenter = 'middle';
    label.nonScaling = true;

    series.heatRules.push({
      target: circle,
      property: 'radius',
      min: 8,
      max: 15,
    });

    // lines
    function createLines(start, destiny, color) {
      const lineSeries = chart.series.push(new am4maps.MapLineSeries());
      lineSeries.mapLines.template.stroke = am4core.color(color);
      lineSeries.mapLines.template.strokeWidth = 4;

      const line = lineSeries.mapLines.create();
      line.multiGeoLine = [[start, destiny]];

      // Add a map object to line
      const { arrow } = line;
      arrow.position = 1;
      arrow.nonScaling = true;
    }
    linesData.forEach((line) => {
      createLines(line.start, line.destiny, line.color);
    });

    x.current = chart;

    return () => {
      chart.dispose();
    };
  }, []);

  return (
    <h1>
      Globo
      <div id="globeChart" style={{ width: '100%', height: '700px' }} />
    </h1>
  );
}

export default Globe;
