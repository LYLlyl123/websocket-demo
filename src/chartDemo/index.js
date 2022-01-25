import React, { useState, useEffect } from "react";
import { Area } from "@ant-design/plots";
const io = require("socket.io-client");
export default function ChartDemo() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    //创建webSocket连接
    const client = io.connect("http://localhost:80/chart");
    // 连接成功
    client.on("connect", () => {
      console.log("client connect server");
    });
    // 监听消息
    client.on("getChartData", (json) => {
      let newData = chartData;
      newData.push(json);
      if (newData.length > 20) {
        newData.shift();
      }
      setChartData([...newData]);
    });
    //断开连接
    client.on("disconnect", () => {
      console.log("client disconnect");
    });
    return () => {
      client.close();
    };
  }, []);

  const config = {
    data: chartData,
    animation: "position-update",
    width: 1200,
    xField: "Date",
    yField: "scales",
    meta: {
      scales: {
        min: 0,
        max: 1000,
      },
    },
    areaStyle: () => {
      return {
        fill: "l(90) 0:#32ff6f 0.5:#32ff6f  1:#1890ff00",
      };
    },
  };

  return <Area {...config} />;
}
