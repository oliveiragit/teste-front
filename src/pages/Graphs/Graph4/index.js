import React, { useRef, useLayoutEffect } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themesAnimated from '@amcharts/amcharts4/themes/animated';

import { data } from './mock';

/* Chart code */
// Themes begin
am4core.useTheme(am4themesAnimated);
// Themes end

function Graph4() {
  const x = useRef(null);

  useLayoutEffect(() => {
    // Create chart instance
    const chart = am4core.create('graph4', am4charts.XYChart);

    // Export
    chart.exporting.menu = new am4core.ExportMenu();

    /* Create axes */
    const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'imposto';
    categoryAxis.renderer.minGridDistance = 5;

    /* Create value axis */
    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;

    /* Create series */
    const series = chart.series.push(new am4charts.ColumnSeries());
    series.columns.template.width = am4core.percent(50);
    series.name = 'Impostos';
    series.dataFields.valueY = 'valor';
    series.dataFields.categoryX = 'imposto';

    series.columns.template.tooltipText =
      '[#fff font-size: 15px]Valor do {categoryX}:\n[/][#fff font-size: 20px]{valueY}[/] [#fff]{additional}[/]';
    series.tooltip.label.textAlign = 'middle';
    series.tooltipText = '{valueY.value}';

    series.columns.template.propertyFields.fillOpacity = 'fillOpacity';
    series.columns.template.propertyFields.stroke = 'stroke';
    series.columns.template.propertyFields.strokeWidth = 'strokeWidth';
    series.columns.template.propertyFields.strokeDasharray = 'columnDash';

    series.columns.template.adapter.add('fill', (fill, target) => {
      return target.dataItem
        ? chart.colors.getIndex(target.dataItem.index)
        : fill;
    });

    const fillModifier = new am4core.LinearGradientModifier();
    fillModifier.brightnesses = [0, 1, 1, 0];

    chart.data = data;

    chart.cursor = new am4charts.XYCursor();

    x.current = chart;

    return () => {
      chart.dispose();
    };
  }, []);

  return (
    <>
      <h2>Gráfico 4</h2>
      <h4>Imposto de Nacionalização (mil)</h4>
      <div id="graph4" style={{ width: '100%', height: '500px' }} />
    </>
  );
}
export default Graph4;
