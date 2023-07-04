import React, { useEffect, useRef } from "react";
import { Button, Container } from "react-bootstrap";
import SingleChart from "./SingleChart";
import Graph1 from "./Graph1";
import Graph2 from "./Graph2";
import { useState } from "react";
import DateBtnToday from "./DateBtnToday";
import CompareBtn from "./CompareBtn";
import OnlineStoreRate from "./OnlineStoreRate";
import DeadTemp from "./DeadTemp";
import BarGraph1 from "./BarGraph1";
import BarGraph2 from "./BarGraph2";
import BarGraph3 from "./BarGraph3";
import BarItem from "./BarItem";
import BarGraph0 from "./BarGraph0";
import GetCurrency from "./GetCurrency";
import { useDispatch, useSelector } from "react-redux";
import { DefaultBody } from "../redux/actions/appAction";

const Charts = ({
  today,
  yesterday,
  activeDateRange,
  setActiveDateRange,
  ranges,
  changeHandler,
}) => {
  // Total Sales Graph Data
  const totalSale = useSelector((state) => state.totalSales);
  const totalSaleSum = useSelector((state) => state.totalSalesSum);
  const body = useSelector((state) => state.body);
  // console.log(totalData);
  const totalSalesData = [
    {
      name: `Line1`,
      data: [...totalSale],
    },
  ];
  //////////////////////////////
  // Customer Rate Graph Data
  const cus = useSelector((state) => state.customerRate);
  const cusRateSum = useSelector((state) => state.totalRate);
  const customerRateData = [
    {
      name: `Line1`,
      data: [...cus],
    },
  ];
  /////////////////////////////
  // Average Sales order
  const avgs = useSelector((state) => state.avgSales);
  const avgsSum = useSelector((state) => state.avgSalesSum);
  const AvgSalesData = [
    {
      name: `Line1`,
      data: [...avgs],
    },
  ];
  ////////////////////////////
  // Online Store Session
  const onlineSession = useSelector((state) => state.onlineStoreSession);
  const onlineSessionSum = useSelector((state) => state.onlineStoreSessionSum);
  const onlineSessionData = [
    {
      name: `Line1`,
      data: [...onlineSession],
    },
  ];
  //////////////////////////////
  // Online Store Session
  const tOrders = useSelector((state) => state.totalOrders);
  const tOrdersSum = useSelector((state) => state.totalOrdersSum);
  const totalOrdersData = [
    {
      name: `Line1`,
      data: [...tOrders],
    },
  ];
  //////////////////////////////
  // sales channel
  const salesChannelData = useSelector((state) => state.salesChannel);
  const salesChannelDataSum = useSelector((state) => state.salesChannelSum);
  /////////////////////////////////
  // top selling products
  const topSellingProductsData = useSelector(
    (state) => state.topSellingProducts
  );
  const topSellingProductsDataSum = useSelector(
    (state) => state.topSellingProductsSum
  );
  //////////////////////
  // session by location
  const sessionByLocationData = useSelector((state) => state.sessionByLocation);
  const sessionByLocationDataSum = useSelector(
    (state) => state.sessionByLocationSum
  );
  ////////////////////////////
  // session by Device
  const sessionByDeviceData = useSelector((state) => state.sessionByDevice);
  const sessionByDeviceDataSum = useSelector(
    (state) => state.sessionByDeviceSum
  );
  /////////////////////////
  // session by Traffic source
  const sessionByTrafficSourceData = useSelector(
    (state) => state.sessionByTrafficSource
  );
  const sessionByTrafficSourceDataSum = useSelector(
    (state) => state.sessionByTrafficSourceSum
  );
  /////////////////////////
  // sales by traffic source
  const salesByTrafficSourceData = useSelector(
    (state) => state.salesByTrafficSource
  );
  const salesByTrafficSourceDataSum = useSelector(
    (state) => state.salesByTrafficSourceSum
  );
  /////////////////////////
  // useEffect(() => {
  //   const oldEE = [...totalSales];
  //   oldEE[0] = { name: "Graph1", data: totalData };
  //   settotalSales(oldEE);
  // }, [totalData]);
  const EEData = [{ name: "Ele", data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] }];
  const [graphData, setGraphData] = useState([
    {
      name: `Graph1`,
      data: [
        {
          x: "Jan",
          y: 10,
        },
        {
          x: "11Jan",
          y: 50,
        },
        {
          x: "1111Jan",
          y: 100,
        },
      ],
    },
    // { name: "Jun 20", data: [1, 10, 0, 0, 0, 15, 0, 0, 0, 0] },
  ]);
  // console.log(graphData);

  const dataList = [
    // row 1
    {
      id: 1,
      title: "Total Sales",
      format: `${body.currancy} ${totalSaleSum} -`,
      child: <Graph1 data={totalSalesData} ySum={totalSaleSum} />,
    },
    {
      title: "Returning customer rate",
      format: `${cusRateSum / customerRateData[0].data.length}% -`,
      child: <Graph2 data={customerRateData} ySum={cusRateSum} />,
    },
    {
      title: "Average order value",
      format: `${body.currancy} ${totalSaleSum} -`,
      child: <Graph1 data={AvgSalesData} ySum={avgsSum} />,
    },
    // row 2
    {
      title: "Online store sessions",
      format: `${onlineSessionSum} -`,
      child: <Graph1 data={onlineSessionData} ySum={onlineSessionSum} />,
    },
    {
      title: "Total orders",
      format: "34 -",
      child: <Graph1 data={totalOrdersData} ySum={tOrdersSum} />,
    },
    {
      title: "Sales by channel",
      // format: "E£0.00",
      child: <BarGraph1 data={salesChannelData} ySum={salesChannelDataSum} />,
    },
    // row 3
    {
      title: "Online store conversion rate",
      format: "0% -",
      child: <OnlineStoreRate />,
    },
    {
      title: "Top selling products",
      // format: "E£0.00",
      child: (
        <BarGraph1
          data={topSellingProductsData}
          ySum={topSellingProductsDataSum}
        />
      ),
    },
    {
      title: "Customer analysis",
      // format: "E£0.00",
      child: <DeadTemp />,
    },
    // row 4
    {
      title: "Sales attributed to marketing",
      // format: "AED0.00 -",
      child: <DeadTemp />,
    },
    {
      title: "Sessions by location",
      // format: "E£0.00",
      child: (
        <BarGraph2
          data={sessionByLocationData}
          ySum={sessionByLocationDataSum}
        />
      ),
    },
    {
      title: "Sessions by device type",
      // format: "E£0.00",
      // format: "E£0.00",
      child: (
        <BarGraph2 data={sessionByDeviceData} ySum={sessionByDeviceDataSum} />
      ),
    },
    // row 5
    {
      title: "Total Sales",
      // format: "AED0.00 -",
      child: <DeadTemp />,
    },
    {
      title: "Sales by channel",
      // format: "E£0.00",
      child: <DeadTemp />,
    },
    {
      title: "Online store conversion rate",
      // format: "E£0.00",
      child: <DeadTemp />,
    },
    // row 6
    {
      title: "Session by traffic source",
      // format: "AED0.00 -",
      child: (
        <BarGraph3
          data={sessionByTrafficSourceData}
          ySum={sessionByTrafficSourceDataSum}
        />
      ),
    },
    {
      title: "Sales by traffic source",
      // format: "E£0.00",
      child: (
        <BarGraph3
          data={salesByTrafficSourceData}
          ySum={salesByTrafficSourceDataSum}
        />
      ),
    },
    {
      title: "Online store conversion rate",
      // format: "E£0.00",
      child: <DeadTemp />,
    },
    // row 7
    {
      title: "Total Sales",
      // format: "AED0.00 -",
      child: <DeadTemp />,
    },
    {
      title: "Sales by channel",
      // format: "E£0.00",
      child: <DeadTemp />,
    },
  ];
  return (
    <Container
      fluid
      className="p-4 m-0 col-10 mb-2 pe-0 ps-5 d-flex flex-wrap justify-content-center"
      style={{ background: "#f1f2f4", minHeight: "100vh", width: "88%" }}
    >
      <Container fluid className="p-0 m-0 w-100 p-2 px-4">
        <div className="head d-flex justify-content-between align-items-center">
          <h1 className="w-100 fs-4">Analytics</h1>
          <div className="head-side d-flex align-items-center gap-4">
            <p className="m-0">Customize</p>
            <p className="d-flex align-items-center justify-content-center gap-2 m-0">
              <i className="fa-solid fa-expand me-1"></i> Fullscreen
            </p>
          </div>
        </div>
      </Container>
      <Container
        fluid
        className="p-2 px-4 m-0 w-100 d-flex justify-content-between align-items-center"
      >
        <div className="d-flex gap-4 ms-1 align-items-center">
          <DateBtnToday
            today={today}
            yesterday={yesterday}
            activeDateRange={activeDateRange}
            setActiveDateRange={setActiveDateRange}
            ranges={ranges}
          />
          {/* <CompareBtn /> */}
          <GetCurrency changeHandler={changeHandler} />
        </div>
        <div className="d-flex gap-3 justify-content-end align-items-center">
          <div className="d-flex gap-2 justify-content-center align-items-center">
            <input type="checkbox" className="mt-1" style={{ width: "15px" }} />
            <p className="p-0 m-0">Auto-refresh</p>
          </div>
          <i
            className="fa-solid fa-circle-question"
            style={{
              fontSize: "18px",
            }}
          ></i>
        </div>
      </Container>
      <Container
        fluid
        className="p-0 m-0 w-100 d-flex flex-wrap justify-content-start"
      >
        {dataList.map((ele, i) => (
          <SingleChart item={ele} key={i} />
        ))}
        {/* <SingleChart item={dataList[0]} /> */}
        {/* row 1 */}
        {/* <SingleChart titles={dataList[0]}> */}
        {/* <Graph1 graphData={graphData} /> */}
        {/* </SingleChart> */}
        {/* <SingleChart>
          <Graph2 />
        </SingleChart>
        <SingleChart graphData={graphData}>
          <Graph1 graphData={graphData} />
        </SingleChart> */}
        {/* row 2 */}
        {/* <SingleChart>
          <OnlineStoreRate />
        </SingleChart>
        <SingleChart graphData={EEData}>
          <Graph1 graphData={EEData} />
        </SingleChart>
        <SingleChart graphData={EEData}>
          <Graph1 graphData={EEData} />
        </SingleChart> */}
        {/* row 3 */}
        {/* <SingleChart>
          <DeadTemp />
        </SingleChart>
        <SingleChart>
          <DeadTemp />
        </SingleChart>
        <SingleChart>
          <DeadTemp />
        </SingleChart> */}
        {/* row 4 */}
        {/* <SingleChart>
          <DeadTemp />
        </SingleChart>
        <SingleChart>
          <DeadTemp />
        </SingleChart>
        <SingleChart>
          <DeadTemp />
        </SingleChart> */}
        {/* row 5 */}
        {/* <SingleChart>
          <DeadTemp />
        </SingleChart>
        <SingleChart>
          <DeadTemp />
        </SingleChart>
        <SingleChart>
          <DeadTemp />
        </SingleChart> */}
        {/* row 6 */}
        {/* <SingleChart>
          <DeadTemp />
        </SingleChart>
        <SingleChart>
          <DeadTemp />
        </SingleChart>
        <SingleChart>
          <DeadTemp />
        </SingleChart> */}
        {/* row 7 */}
        {/* <SingleChart>
          <DeadTemp />
        </SingleChart>
        <SingleChart>
          <DeadTemp />
        </SingleChart> */}
      </Container>
    </Container>
  );
};

export default Charts;
