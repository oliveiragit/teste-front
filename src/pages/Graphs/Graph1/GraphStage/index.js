import React, { useRef, useLayoutEffect } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themesAnimated from '@amcharts/amcharts4/themes/animated';

import { data } from './mock';

am4core.useTheme(am4themesAnimated);

function GraphStage() {
  const x = useRef(null);

  useLayoutEffect(() => {
    // Create chart instance
    const chart = am4core.create('graphStage', am4charts.XYChart);
    // Add data
    chart.data = data;

    // Export
    chart.exporting.menu = new am4core.ExportMenu();

    // Create axes
    const yAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    yAxis.dataFields.category = 'category';
    // yAxis.renderer.grid.template.disabled = true;
    // yAxis.renderer.labels.template.disabled = true;

    const xAxis = chart.xAxes.push(new am4charts.ValueAxis());
    xAxis.min = 0;
    xAxis.max = 100;
    xAxis.strictMinMax = true;
    xAxis.calculateTotals = true;
    xAxis.renderer.minWidth = 6;

    function createSeries(field, name) {
      const series = chart.series.push(new am4charts.ColumnSeries());
      series.columns.template.width = am4core.percent(80);
      series.columns.template.tooltipText =
        "{name}: {valueX.totalPercent.formatNumber('#.00')}%";
      series.name = name;
      series.dataFields.categoryY = 'category';
      series.dataFields.valueX = field;
      series.dataFields.valueXShow = 'totalPercent';

      series.dataItems.template.locations.categoryX = 0.5;
      series.stacked = true;
      series.tooltip.pointerOrientation = 'vertical';

      const bullet = series.bullets.push(new am4charts.LabelBullet());
      bullet.interactionsEnabled = false;
      bullet.label.text = '{valueX}';
      bullet.label.fill = am4core.color('#ffffff');
      bullet.locationX = 0.5;
    }

    createSeries('preEmbarque', 'Pré-Embarque');
    createSeries('emTransito', 'Em trânsito');
    createSeries('desembaraco', 'Desembaraço');
    createSeries('faturamento', 'Faturamento');
    createSeries('armETransp', 'Armazém e transporte');
    createSeries('entrega', 'Entrega');

    chart.legend = new am4charts.Legend();

    x.current = chart;

    return () => {
      chart.dispose();
    };
  }, []);
  return (
    <>
      <h4>Processos por etapa</h4>
      <div id="graphStage" style={{ width: '100%', height: '200px' }} />
    </>
  );
}

export default GraphStage;
