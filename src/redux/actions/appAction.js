import React from "react";
import {
  AVGSALES,
  BASEURL,
  DEFAULTINPUT,
  GETCUSTOMERRATE,
  GETTOTALSALES,
  ONLINESTORESESSION,
  SALESBYTRAFFICSOURCE,
  SALESCHANNEL,
  SESSIONBYDEVICE,
  SESSIONBYLOCATION,
  SESSIONBYTRAFFICSOURCE,
  TOPSELLINGPRODUCTS,
  TOTALORDERS,
} from "../types/type";
import axios from "axios";
const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const convertDate = (data) => {
  const newData = data.map((e) => {
    const xlable = e[`_id`].slice(e[`_id`].indexOf(`-`) + 2);
    const xDay = xlable.substring(xlable.indexOf(`/`) + 1);
    const xMonth = monthNames[xlable.substring(0, xlable.indexOf(`/`)) - 1];
    // console.log(total);
    return {
      x: `${xDay} ${xMonth}`,
      y: e[`total`] === 0 ? 0 : e[`total`],
    };
  });
  return newData;
};
export const DefaultBody = (ele) => {
  return {
    type: DEFAULTINPUT,
    userid: ele.userid,
    startDate: ele.startDate,
    endDate: ele.endDate,
    currancy: ele.currancy,
  };
};
export const GetTotalSales = (ele) => {
  return async (dispatch) => {
    const res = await axios.post(`${BASEURL}/gettotalsales`, ele);
    const data = res.data;
    const newD = convertDate(data);
    const sumValue = newD.reduce((acc, current) => acc + current.y, 0);
    dispatch({ type: GETTOTALSALES, data: newD, sum: sumValue });
  };
};

export const getCustomerRate = (ele) => {
  return async (dispatch) => {
    const res = await axios.post(`${BASEURL}/customerrate`, ele);
    const data = res.data;

    const newD = convertDate(data);
    const sumValue = newD.reduce((acc, current) => acc + current.y, 0);
    dispatch({ type: GETCUSTOMERRATE, data: newD, sum: sumValue });
  };
};

export const getAvgSales = (ele) => {
  return async (dispatch) => {
    const res = await axios.post(`${BASEURL}/avgsales`, ele);
    const data = res.data;
    const newD = convertDate(data);
    const sumValue = newD.reduce((acc, current) => acc + current.y, 0);
    dispatch({ type: AVGSALES, data: newD, sum: sumValue });
  };
};
export const getOnlineStoreSession = (ele) => {
  return async (dispatch) => {
    const res = await axios.post(`${BASEURL}/onlinestoresession`, ele);
    const data = res.data;

    const newD = convertDate(data);
    const sumValue = newD.reduce((acc, current) => acc + current.y, 0);
    dispatch({ type: ONLINESTORESESSION, data: newD, sum: sumValue });
  };
};
export const getTotalOrders = (ele) => {
  return async (dispatch) => {
    const res = await axios.post(`${BASEURL}/totalorders`, ele);
    // console.log(res);
    const data = res.data;

    const newD = convertDate(data);
    const sumValue = newD.reduce((acc, current) => acc + current.y, 0);
    dispatch({ type: TOTALORDERS, data: newD, sum: sumValue });
  };
};
export const getSalesChannel = (ele) => {
  return async (dispatch) => {
    const res = await axios.post(`${BASEURL}/salesbychannel`, ele);
    const data = res.data;
    const sumValue = data.reduce((acc, current) => acc + current.qty, 0);
    dispatch({ type: SALESCHANNEL, data: data, sum: sumValue });
  };
};
export const getTopSellingProducts = (ele) => {
  return async (dispatch) => {
    const res = await axios.post(`${BASEURL}/topsellingproducts`, ele);
    const data = res.data;
    const sumValue = data.reduce(
      (acc, current) => acc + Number(current.qty),
      0
    );
    dispatch({ type: TOPSELLINGPRODUCTS, data: data, sum: sumValue });
  };
};
export const getSessionByLocation = (ele) => {
  return async (dispatch) => {
    const res = await axios.post(`${BASEURL}/sessionbylocation`, ele);
    const data = res.data;
    const sumValue = data.reduce(
      (acc, current) => acc + Number(current.sessiontime),
      0
    );
    dispatch({ type: SESSIONBYLOCATION, data: data, sum: sumValue });
  };
};
export const getSessionByDevice = (ele) => {
  return async (dispatch) => {
    const res = await axios.post(`${BASEURL}/sessionbydevice`, ele);
    const data = res.data;
    const sumValue = data.reduce(
      (acc, current) => acc + Number(current.sessiontime),
      0
    );
    dispatch({ type: SESSIONBYDEVICE, data: data, sum: sumValue });
  };
};
export const getSessionByTrafficSource = (ele) => {
  return async (dispatch) => {
    const res = await axios.post(`${BASEURL}/sessionbytrafficsource`, ele);
    const data = res.data;
    const sumValue = data.reduce(
      (acc, current) => acc + Number(current.sessiontime),
      0
    );
    dispatch({ type: SESSIONBYTRAFFICSOURCE, data: data, sum: sumValue });
  };
};
export const getSalesByTrafficSource = (ele) => {
  return async (dispatch) => {
    const res = await axios.post(`${BASEURL}/salesbytrafficsource`, ele);
    const data = res.data;
    const sumValue = data.reduce(
      (acc, current) => acc + Number(current.qty),
      0
    );
    dispatch({ type: SALESBYTRAFFICSOURCE, data: data, sum: sumValue });
  };
};
