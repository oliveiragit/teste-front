import React, { useRef, useLayoutEffect } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themesAnimated from '@amcharts/amcharts4/themes/animated';

import { data } from './mock';

am4core.useTheme(am4themesAnimated);

function Graph3() {
  const x = useRef(null);

  useLayoutEffect(() => {
    // Create chart instance
    var chart = am4core.create('graph3', am4charts.XYChart);

    // Add data
    chart.data = data;

    // Export
    chart.exporting.menu = new am4core.ExportMenu();

    // Create axes
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'category';
    categoryAxis.renderer.minGridDistance = 5;

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;

    // Create series
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = 'value';
    series.dataFields.categoryX = 'category';
    series.tooltipText = '{valueY.value}';

    chart.cursor = new am4charts.XYCursor();
    categoryAxis.tooltip.label.adapter.add('text', function (text, target) {
      if (target.dataItem) {
        return target.dataItem.dataContext.axisLabel;
      }
      return text;
    });

    x.current = chart;

    return () => {
      chart.dispose();
    };
  }, []);

  return (
    <>
      <h2>Gráfico 3</h2>
      <h4>Faturamento (mil)</h4>
      <div id="graph3" style={{ width: '100%', height: '500px' }}></div>
    </>
  );
}

export default Graph3;
