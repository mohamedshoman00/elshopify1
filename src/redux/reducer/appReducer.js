import {
  AVGSALES,
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

const Initial = {
  body: {
    userid: ``,
    startDate: ``,
    endDate: ``,
    currancy: ``,
  },
  totalSales: [],
  totalSalesSum: 0,
  customerRate: [],
  totalRate: 0,
  avgSales: [],
  avgSalesSum: 0,
  onlineStoreSession: [],
  onlineStoreSessionSum: 0,
  totalOrders: [],
  totalOrdersSum: 0,
  loginOrNot: false,
  salesChannel: [],
  salesChannelSum: 0,
  topSellingProducts: [],
  topSellingProductsSum: 0,
  sessionByLocation: [],
  sessionByLocationSum: 0,
  sessionByDevice: [],
  sessionByDeviceSum: 0,
  sessionByTrafficSource: [],
  sessionByTrafficSourceSum: 0,
  salesByTrafficSource: [],
  salesByTrafficSourceSum: 0,
};
export const appReducer = (state = Initial, action) => {
  switch (action.type) {
    case DEFAULTINPUT:
      return {
        ...state,
        body: {
          userid: action.userid,
          startDate: action.startDate,
          endDate: action.endDate,
          currancy: action.currancy,
        },
      };
    case GETTOTALSALES:
      return {
        ...state,
        totalSales: action.data,
        totalSalesSum: action.sum,
      };
    case GETCUSTOMERRATE:
      return {
        ...state,
        customerRate: action.data,
        totalRate: action.sum,
      };
    case AVGSALES:
      return {
        ...state,
        avgSales: action.data,
        avgSalesSum: action.sum,
      };
    case ONLINESTORESESSION:
      return {
        ...state,
        onlineStoreSession: action.data,
        onlineStoreSessionSum: action.sum,
      };
    case TOTALORDERS:
      return {
        ...state,
        totalOrders: action.data,
        totalOrdersSum: action.sum,
      };
    case SALESCHANNEL:
      return {
        ...state,
        salesChannel: action.data,
        salesChannelSum: action.sum,
      };
    case TOPSELLINGPRODUCTS:
      return {
        ...state,
        topSellingProducts: action.data,
        topSellingProductsSum: action.sum,
      };
    case SESSIONBYLOCATION:
      return {
        ...state,
        sessionByLocation: action.data,
        sessionByLocationSum: action.sum,
      };
    case SESSIONBYDEVICE:
      return {
        ...state,
        sessionByDevice: action.data,
        sessionByDeviceSum: action.sum,
      };
    case SESSIONBYTRAFFICSOURCE:
      return {
        ...state,
        sessionByTrafficSource: action.data,
        sessionByTrafficSourceSum: action.sum,
      };
    case SALESBYTRAFFICSOURCE:
      return {
        ...state,
        salesByTrafficSource: action.data,
        salesByTrafficSourceSum: action.sum,
      };
    default:
      return { ...state };
  }
};
