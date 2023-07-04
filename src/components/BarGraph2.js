import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import BarItem from "./BarItem";
import { Container } from "react-bootstrap";
import DeadTemp from "./DeadTemp";

const BarGraph2 = ({ data, ySum }) => {
  const newData = data.map((obj) => {
    const percentage = (obj.sessiontime / ySum) * 100;
    return { ...obj, percentage };
  });
  return (
    <>
      {newData.length >= 1 ? (
        <Container fluid className="p-0 m-0 ms-3 d-flex mt-2 flex-column pe-2">
          {newData.map((ele) => (
            <BarItem
              wid={`${ele.percentage}%`}
              val={ele.sessiontime}
              title={ele.location ? ele.location : ele.device}
            />
          ))}
        </Container>
      ) : (
        <DeadTemp />
      )}
    </>
  );
};

export default BarGraph2;
