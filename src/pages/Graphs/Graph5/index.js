import React, { useRef, useLayoutEffect } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themesAnimated from '@amcharts/amcharts4/themes/animated';

import { data } from './mock';

// Themes begin
am4core.useTheme(am4themesAnimated);
// Themes end

function Graph5() {
  const x = useRef(null);

  useLayoutEffect(() => {
    const chart = am4core.create('graph5', am4charts.XYChart);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.colors.list = [
      am4core.color('#4169E1'),
      am4core.color('#00FA9A'),
      am4core.color('#DF3520'),
    ];

    chart.data = data;

    // Export
    chart.exporting.menu = new am4core.ExportMenu();

    chart.colors.step = 2;
    chart.padding(30, 30, 10, 30);
    chart.legend = new am4charts.Legend();

    const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'category';
    categoryAxis.renderer.minGridDistance = 5;

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.max = 100;
    valueAxis.strictMinMax = true;
    valueAxis.calculateTotals = true;
    valueAxis.renderer.minWidth = 6;

    function createSeries(field) {
      const series = chart.series.push(new am4charts.ColumnSeries());
      series.columns.template.width = am4core.percent(80);
      series.columns.template.tooltipText =
        "{name}: {valueY.totalPercent.formatNumber('#.00')}%";
      series.name = 'dentro da média';
      series.dataFields.categoryX = 'category';
      series.dataFields.valueY = field;
      series.dataFields.valueYShow = 'totalPercent';
      series.dataItems.template.locations.categoryX = 0.5;
      series.stacked = true;
      series.tooltip.pointerOrientation = 'vertical';

      const bullet = series.bullets.push(new am4charts.LabelBullet());
      bullet.interactionsEnabled = false;
      bullet.label.text = "{valueY.totalPercent.formatNumber('#.00')}%";
      bullet.label.fill = am4core.color('#ffffff');
      bullet.locationY = 0.5;
    }
    const fields = ['value1', 'value2', 'value3', 'value4'];
    fields.forEach((field) => createSeries(field));

    chart.scrollbarX = new am4core.Scrollbar();

    x.current = chart;
    return () => {
      chart.dispose();
    };
  }, []);

  return (
    <>
      <h2>Gráfico 5</h2>
      <h4>Faturamento (mil)</h4>
      <div id="graph5" style={{ width: '100%', height: '500px' }} />
    </>
  );
}

export default Graph5;
