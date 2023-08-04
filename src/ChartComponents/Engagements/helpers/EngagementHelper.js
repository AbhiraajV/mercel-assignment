import Highcharts from "highcharts";
import { BASE_OPTIONS } from "./baseOptionSettings";
const engagementMessageOverTimeChartOptions = (messageCountList, channels) => {
  const channelData = {};
  messageCountList.forEach((entry) => {
    const channelId = entry.channelId;
    const channel = channels.find((c) => c.value === channelId);

    if (channel) {
      const date = new Date(entry.timeBucket).getTime();

      channelData[channelId] = channelData[channelId] || {
        name: channel.name,
        data: [],
      };

      const existingDataPoint = channelData[channelId].data.find(
        (dataPoint) => dataPoint[0] === date
      );

      if (existingDataPoint) {
        existingDataPoint[1] += parseInt(entry.count);
      } else {
        channelData[channelId].data.push([date, parseInt(entry.count)]);
      }
    }
  });

  const filteredChannelData = Object.values(channelData).filter(
    (channel) => channel.data.length > 1
  );
  const options = {
    ...BASE_OPTIONS({
      chartType: "spline",
      titleText: "Engagement Message Overtime",
      xAxisTitleText: "Date",
      xAxisType: "datetime",
      yAxisTitleText: "Messages",
    }),
    tooltip: {
      useHTML: true,
      formatter: function () {
        return `<div style="color: #F0F0F0; border: 1px solid #61dafb; border-radius: 3px; padding: 5px;">
            <span style="color: white; font-weight: bold; font-size: 14px;">${
              this.series.name
            }</span><br/>
            ${this.y} messages on
            ${Highcharts.dateFormat("%Y-%m-%d", this.x)} 
          </div>`;
      },
      backgroundColor: "black",
    },

    series: filteredChannelData.map((channel) => ({
      ...channel,
      color: "#61dafb",
      marker: {
        enabled: true,
        symbol: "circle",
      },
    })),
  };

  return options;
};
export default { engagementMessageOverTimeChartOptions };
