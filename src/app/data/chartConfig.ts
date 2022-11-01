import { ChartConfiguration } from 'chart.js';

const tooltipLine = {
  id: 'tooltip-line',
  afterDraw: (chart: any) => {
    if (chart.tooltip?._active?.length) {
      let x = chart.tooltip._active[0].element.x;
      let yAxis = chart.scales.y;
      let ctx = chart.ctx;

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(x, yAxis.top);
      ctx.lineTo(x, yAxis.bottom);
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = '#455A64';
      ctx.stroke();
      ctx.restore();
    }
  },
};

export const chartConfig: ChartConfiguration = {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Avr'],
    datasets: [
      {
        tension: 0.3,
        label: '',
        data: [2.5, 1.4, 6, 4],
        spanGaps: true,
        fill: true,
        borderWidth: 5,
        backgroundColor: '#C1CBFB',
        borderColor: '#2B60F6',
      },
    ],
  },
  plugins: [tooltipLine],
  options: {
    responsive: true,
    elements: {
      point: {
        radius: 0,
        hoverRadius: 6,
        hoverBorderColor: '#FFF',
        hoverBackgroundColor: '#2B60F6',
      },
    },
    hover: {
      intersect: false,
    },
    interaction: {
      intersect: false,
      mode: 'index',
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        borderColor: "#181818",
        borderWidth: 0.2,
        backgroundColor: "#FFF",
        titleColor: "#455A64",
        titleFont: {
          weight: 'thin',
         // size: 20,
        },
        position: "nearest",
        titleMarginBottom: 8,
        bodyColor: "#2B60F6",
        bodyFont: {
          weight: "thin",
         // size: 20,
        },
        padding: 16,
        boxPadding: 16,
        displayColors: false,
        // mode: "index",
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        display: true,
      },
      y: {
        grid: {
          display: false,
        },
        display: false,
      },
    },
  },
};
