import { Col, Container } from "react-bootstrap";
import "./App.css";
import Charts from "./components/Charts";
import Test from "./components/Graph1";
import NavigationExample from "./components/siedbar";
import Topbar from "./components/TopBar";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DefaultBody,
  GetTotalSales,
  getAvgSales,
  getCustomerRate,
  getOnlineStoreSession,
  getSalesByTrafficSource,
  getSalesChannel,
  getSessionByDevice,
  getSessionByLocation,
  getSessionByTrafficSource,
  getTopSellingProducts,
  getTotalOrders,
} from "./redux/actions/appAction";
import Graph1 from "./components/Graph1";
import Graph2 from "./components/Graph2";
import BarGraph1 from "./components/BarGraph1";
import OnlineStoreRate from "./components/OnlineStoreRate";
import BarGraph2 from "./components/BarGraph2";
import DeadTemp from "./components/DeadTemp";
import BarGraph3 from "./components/BarGraph3";
import BarGraph0 from "./components/BarGraph0";
function App() {
  // const [bodyEle, setBodyEle] = useState(useSelector((state) => state.body));
  // console.log(bodyEle);
  const [curr, setCurr] = useState(`AED`);
  const today = new Date(new Date().setHours(0, 0, 0, 0));
  const yesterday = new Date(
    new Date(new Date().setDate(today.getDate() - 1)).setHours(0, 0, 0, 0)
  );

  const ranges = [
    {
      title: "Today",
      alias: "today",
      period: {
        since: today,
        until: today,
      },
    },
    {
      title: "Yesterday",
      alias: "yesterday",
      period: {
        since: yesterday,
        until: yesterday,
      },
    },
    {
      title: "Last 7 days",
      alias: "last7days",
      period: {
        since: new Date(
          new Date(new Date().setDate(today.getDate() - 7)).setHours(0, 0, 0, 0)
        ),
        until: yesterday,
      },
    },
    {
      title: "Last 30 days",
      alias: "last30days",
      period: {
        since: new Date(
          new Date(new Date().setDate(today.getDate() - 30)).setHours(
            0,
            0,
            0,
            0
          )
        ),
        until: yesterday,
      },
    },
    {
      title: "Last 90 days",
      alias: "last90days",
      period: {
        since: new Date(
          new Date(new Date().setDate(today.getDate() - 90)).setHours(
            0,
            0,
            0,
            0
          )
        ),
        until: yesterday,
      },
    },
    {
      title: "Last month",
      alias: "lastmonth",
      period: {
        since: new Date(
          new Date(new Date().setDate(today.getDate() - 30)).setHours(
            0,
            0,
            0,
            0
          )
        ),
        until: yesterday,
      },
    },
    {
      title: "Last year",
      alias: "lastyear",
      period: {
        since: new Date(
          new Date(new Date().setDate(today.getDate() - 365)).setHours(
            0,
            0,
            0,
            0
          )
        ),
        until: yesterday,
      },
    },
  ];
  const [activeDateRange, setActiveDateRange] = useState(ranges[0]);

  // console.log(activeDateRange);
  // return Days From range
  // useEffect(() => {

  // }, [activeDateRange]);
  // console.log(startTime);
  // console.log(startTime.getUTCMonth() + 1);
  // console.log(startTime.getDate());
  // console.log(labels);
  //////////////////////////////////////

  // GET Currancy
  const changeHandler = (e) => {
    setCurr(e.target.value);
  };
  ///
  //// return BodyData to State And pass to Redux
  const dispatch = useDispatch();
  const dispatchAllData = (oldState) => {
    dispatch(DefaultBody(oldState));
    dispatch(GetTotalSales(oldState));
    dispatch(getCustomerRate(oldState));
    dispatch(getAvgSales(oldState));
    dispatch(getOnlineStoreSession(oldState));
    dispatch(getTotalOrders(oldState));
    dispatch(getSalesChannel(oldState));
    dispatch(getTopSellingProducts(oldState));
    dispatch(getSessionByLocation(oldState));
    dispatch(getSessionByDevice(oldState));
    dispatch(getSessionByTrafficSource(oldState));
    dispatch(getSalesByTrafficSource(oldState));
  };
  useEffect(() => {
    const startTime = new Date(activeDateRange.period.since);
    const endTime = new Date(activeDateRange.period.until);
    // console.log(startTime);
    // console.log(
    //   `${startTime.getFullYear()}-${n
    //     startTime.getMonth() + 1 > 9
    //       ? startTime.getMonth() + 1
    //       : `0${startTime.getMonth() + 1}`
    //   }-${
    //     startTime.getDate() > 9
    //       ? startTime.getDate()
    //       : `0${startTime.getDate()}T00:00:00.000Z`
    //   }`
    // );
    // get state
    // edit state
    const oldState = {
      userid: `649f23d7f6299981b8a0b934`,
      startDate: `${startTime.getFullYear()}-${
        startTime.getMonth() + 1 > 9
          ? startTime.getMonth() + 1
          : `0${startTime.getMonth() + 1}`
      }-${
        startTime.getDate() > 9
          ? startTime.getDate()
          : `0${startTime.getDate()}T00:00:00.000Z`
      }`,
      endDate: `${endTime.getFullYear()}-${
        endTime.getMonth() + 1 > 9
          ? endTime.getMonth() + 1
          : `0${endTime.getMonth() + 1}`
      }-${
        endTime.getDate() > 9
          ? endTime.getDate()
          : `0${endTime.getDate()}T00:00:00.000Z`
      }`,
      currancy: `${curr}`,
    };
    // set state
    dispatchAllData(oldState);
  }, [activeDateRange || curr]);

  // const newData = useSelector((state) => state.data);
  // console.log(newData);
  // const newww = newData.map((e) => {
  //   return {
  //     x: Object.keys(e).filter((key) => key.startsWith("_"))[0],
  //     y: e.total,
  //   };
  // });

  // console.log(newww);
  return (
    <>
      <Topbar />
      <Container
        fluid
        className="w-100 p-0 m-0 d-flex"
        style={{ position: "relative" }}
      >
        <Col c style={{ position: "relative" }}>
          <div
            className="mt-5 pt-2"
            style={{ position: "fixed", left: 0, top: 0 }}
          >
            {/* <NavigationExample /> */}
          </div>
        </Col>
        <Container
          fluid
          className="w-100 p-0 m-0 d-flex align-items-end justify-content-end flex-column pe-4"
        >
          <Charts
            today={today}
            yesterday={yesterday}
            activeDateRange={activeDateRange}
            setActiveDateRange={setActiveDateRange}
            ranges={ranges}
            changeHandler={changeHandler}
          />
        </Container>
      </Container>
    </>
  );
}

export default App;
