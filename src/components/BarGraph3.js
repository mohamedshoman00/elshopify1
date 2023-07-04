import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import BarItem from "./BarItem";
import { Container } from "react-bootstrap";
import DeadTemp from "./DeadTemp";

const BarGraph3 = ({ data, ySum }) => {
  const newData = data.map((obj) => {
    const percentage =
      ((obj.sessiontime ? obj.sessiontime : obj.qty) / ySum) * 100;
    return { ...obj, percentage };
  });
  return (
    <>
      {newData.length >= 1 ? (
        <Container fluid className="p-0 m-0 ms-3 d-flex mt-2 flex-column pe-2">
          {newData.map((ele) => (
            <BarItem
              wid={`${ele.percentage}%`}
              val={ele.sessiontime ? ele.sessiontime : ele.qty}
              title={ele.traffic}
            />
          ))}
        </Container>
      ) : (
        <DeadTemp />
      )}
    </>
  );
};

export default BarGraph3;
