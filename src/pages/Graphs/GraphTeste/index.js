import React, { useRef, useLayoutEffect } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themesAnimated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themesAnimated);

function GraphTeste() {
  const chart = useRef(null);

  useLayoutEffect(() => {
    const x = am4core.create('graphTeste', am4charts.XYChart);

    x.paddingRight = 20;

    // Export
    x.exporting.menu = new am4core.ExportMenu();
    const data = [];
    let visits = 10;

    for (let i = 1; i < 366; i += 1) {
      visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
      data.push({
        date: new Date(2018, 0, i),
        name: `name${i}`,
        value: visits,
      });
    }

    x.data = data;

    const dateAxis = x.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;

    const valueAxis = x.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.minWidth = 35;

    const series = x.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = 'date';
    series.dataFields.valueY = 'value';
    series.tooltipText = '{valueY.value}';
    x.cursor = new am4charts.XYCursor();

    const scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series);
    x.scrollbarX = scrollbarX;

    chart.current = x;

    return () => {
      x.dispose();
    };
  }, []);
  return (
    <>
      <h2>Gráfico Teste</h2>
      <h4>Faturamento (mil)</h4>
      <div id="graphTeste" style={{ width: '100%', height: '500px' }} />
    </>
  );
}
export default GraphTeste;
