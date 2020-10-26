import React, { useRef, useLayoutEffect } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themesFrozen from '@amcharts/amcharts4/themes/frozen';
import am4themesAnimated from '@amcharts/amcharts4/themes/animated';

import { data } from './mock';

/* Chart code */
// Themes begin
am4core.useTheme(am4themesFrozen);
am4core.useTheme(am4themesAnimated);
// Themes end

function Graph2() {
  const x = useRef(null);

  useLayoutEffect(() => {
    // Create chart instance
    const chart = am4core.create('graph2', am4charts.XYChart);

    // Export
    chart.exporting.menu = new am4core.ExportMenu();

    /* Create axes */
    const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'porto';
    categoryAxis.renderer.minGridDistance = 5;

    /* Create value axis */
    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;

    /* Create series */
    const columnSeries = chart.series.push(new am4charts.ColumnSeries());
    columnSeries.name = 'Containers';
    columnSeries.dataFields.valueY = 'containers';
    columnSeries.dataFields.categoryX = 'porto';

    columnSeries.columns.template.tooltipText =
      '[#fff font-size: 15px]{name} em {categoryX}:\n[/][#fff font-size: 20px]{valueY}[/] [#fff]{additional}[/]';
    columnSeries.columns.template.propertyFields.fillOpacity = 'fillOpacity';
    columnSeries.columns.template.propertyFields.stroke = 'stroke';
    columnSeries.columns.template.propertyFields.strokeWidth = 'strokeWidth';
    columnSeries.columns.template.propertyFields.strokeDasharray = 'columnDash';
    columnSeries.columns.template.width = am4core.percent(40);

    columnSeries.tooltip.label.textAlign = 'middle';

    const lineSeries = chart.series.push(new am4charts.LineSeries());
    lineSeries.name = 'Embarques';
    lineSeries.dataFields.valueY = 'embarques';
    lineSeries.dataFields.categoryX = 'porto';

    lineSeries.stroke = am4core.color('#191970');
    lineSeries.strokeWidth = 3;
    lineSeries.propertyFields.strokeDasharray = 'lineDash';
    lineSeries.tooltip.label.textAlign = 'middle';

    const bullet = lineSeries.bullets.push(new am4charts.Bullet());
    bullet.fill = am4core.color('#fdd400'); // tooltips grab fill from parent by default
    bullet.tooltipText =
      '[#fff font-size: 15px]{name} em {categoryX}:\n[/][#fff font-size: 20px]{valueY}[/] [#fff]{additional}[/]';
    const circle = bullet.createChild(am4core.Circle);
    circle.radius = 4;
    circle.fill = am4core.color('#fff');
    circle.strokeWidth = 3;

    chart.data = data;

    x.current = chart;

    return () => {
      chart.dispose();
    };
  }, []);

  return (
    <>
      <h2>Gráfico 2</h2>
      <h4>Porto x Embarque x Containers</h4>
      <div id="graph2" style={{ width: '100%', height: '500px' }} />
    </>
  );
}
export default Graph2;
