export const BASE_OPTIONS = ({
  chartType = "line",
  titleText = "",
  textColor = "#F0F0F0",
  bgColor = "#20232a",
  xAxisTitleText = "custom x axis title",
  xAxisType = "linear",
  xAxisTitleColor = textColor,
  xAxisLabelColor = textColor,
  yAxisTitleText = "custom y axis title",
  yAxisTitleColor = textColor,
  yAxisLabelColor = textColor,
  yAxisType = "linear",
  yAxisGridLineColor = "transparent",
} = {}) => {
  return {
    chart: {
      type: chartType,
      backgroundColor: bgColor,
    },
    title: {
      text: titleText,
      style: {
        color: textColor,
      },
    },
    legend: {
      itemStyle: {
        color: textColor,
      },
    },
    xAxis: {
      type: xAxisType,
      title: {
        text: xAxisTitleText,
        style: {
          color: xAxisTitleColor,
          fontWeight: "bold",
        },
      },
      labels: {
        style: {
          color: xAxisLabelColor,
        },
      },
    },
    yAxis: {
      type: yAxisType,
      title: {
        text: yAxisTitleText,
        style: {
          color: yAxisTitleColor,
          fontWeight: "bold",
        },
      },
      labels: {
        style: {
          color: yAxisLabelColor,
        },
      },
      gridLineColor: yAxisGridLineColor,
    },
  };
};
