import CUMI from "src/assets/images/CUMI.png";
import {
  AiOutlineBank,
  AiOutlineBell,
  AiOutlineIdcard,
  AiOutlineUser,
  AiOutlineUserDelete,
} from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import * as AiIcons from "react-icons/ai";
import moment from "moment";
export const statusOfInvoiceList = [
  {
    id: "Pending",
    name: "Pending",
    color: "red-500",
  },
  {
    id: "In Progress",
    name: "In Progress",
    color: "yellow-500",
  },
  {
    id: "Completed",
    name: "Completed",
    color: "green-500",
  },
];

export const DashboardArray = [
  "Dashboard",
  "My Invoices",
  "My Wallet",
  "Repayment Statement",
];
export const spportArray = [
  { label: "Talk With Us ", route: "/talkwithus" },
  { label: "Support Ticket ", route: "/support" },
  { label: "Refer And Earn ", route: "/refer&earn" },
];
export const profilearray = [
  { label: "My Profile", route: "/Profile", icon: AiOutlineUser },
  {
    label: "Manage Bank Accounts",
    route: "/Profile/banks",
    icon: AiOutlineBank,
  },
  {
    label: "Notifications",
    route: "/Profile/notification",
    icon: AiOutlineBell,
  },
  {
    label: "Account Closing",
    route: "/Profile/closeAccount",
    icon: AiOutlineUserDelete,
  },
  {
    label: "Personalize Profile",
    route: "/Profile/personalize",
    icon: AiOutlineIdcard,
  },
  {
    label: "Logout",
    route: "/",
    icon: AiOutlineIdcard,
  },
];

export const sellerProfile = [
  { label: "My Profile", route: "/Profile", icon: AiOutlineUser },
  {
    label: "Manage Bank Accounts",
    route: "/Profile/banks",
    icon: AiOutlineBank,
  },
  {
    label: "Notifications",
    route: "/Profile/notification",
    icon: AiOutlineBell,
  },
  {
    label: "Account Closing",
    route: "/Profile/closeAccount",
    icon: AiOutlineUserDelete,
  },

  {
    label: "Logout",
    route: "/",
    icon: AiOutlineIdcard,
  },
];
export const NavBarData = [
  {
    label: "Dashboard",
    link: "/dashboard",
    navPanelValue: "dashboard",
    route: "/Invester/dashboard",
  },
  {
    label: "My Invoices",
    link: "/my-invoice",
    navPanelValue: "my-invoice",
    route: "/Invester/myinvoice",
  },
  {
    label: "My Wallet",
    link: "/my-wallet",
    navPanelValue: "my-wallet",
    route: "/Invester/mywallet",
  },
  {
    label: "Repayment Statement",
    link: "/repayment-statement",
    navPanelValue: "repayment-statement",
    route: "/Invester/repayment",
  },
];

export const drowpdownForIndustries = [
  { id: 1, name: "Clothing material", select: true },
  { id: 2, name: "Building material", select: true },
  { id: 3, name: "Financial Services", select: true },
  { id: 4, name: "Health", select: false },
  { id: 5, name: "Construction", select: false },
  { id: 6, name: "Manufacturing", select: false },
  { id: 7, name: "Retail", select: false },
];

export const drowpdownForBuyer = [
  { name: "cumi", img: CUMI },
  { name: "cumi", img: CUMI },
  { name: "cumi", img: CUMI },
  { name: "cumi", img: CUMI },
  { name: "cumi", img: CUMI },
  { name: "cumi", img: CUMI },
  { name: "cumi", img: CUMI },
  { name: "cumi", img: CUMI },
  { name: "cumi", img: CUMI },
  { name: "cumi", img: CUMI },
  { name: "cumi", img: CUMI },
];
export const HeaderNavbarData = [
  {
    label: "Home",
    link: "/",
    navPanelValue: "Home",
    route: "/",
  },
  {
    label: "Products",
    link: "/products",
    navPanelValue: "products",
    route: "",
  },
  {
    label: "Resources",
    link: "/resources",
    navPanelValue: "resources",
    route: "",
  },
  {
    label: "About Us",
    link: "/about-us",
    navPanelValue: "about-us",
    route: "",
  },
  {
    label: "Contact Us",
    link: "/contact-us",
    navPanelValue: "contact-us",
    route: "",
  },
  {
    label: "Login",
    link: "/",
    navPanelValue: "login",
    route: "",
  },
  {
    label: "Sign up",
    link: "/",
    navPanelValue: "sign-up",
    route: "",
  },
];

const Gender = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
];

export const bankList = [
  { id: 1, name: "state bank", value: "state bank" },
  { id: 2, name: "pnb bank", value: "pnb bank" },
  { id: 3, name: "icici bank", value: "icici bank" },
  { id: 4, name: "hdfc bank", value: "hdfc bank" },
  { id: 5, name: "bob bank", value: "bob bank" },
];
export const resellHeading = [
  "Invested Amount",
  "Resell Request Date",
  "Resell Amount",
  "Net Exp. Repayment",
];

export const invoiceHeading = [
  "setuPay Score",
  "Est. Gross ROI",
  "Value",
  "Unsold Amount",
];
export const soldInvoiceHeading = [
  "Invoice Number",
  "setuPay Score",
  "Invested Amount",
  "Net Exp. Repayment",
];

export const Date_In_DDMMYYYY = (date: Date) => {
  return moment(date).format("DD-MMM-YYYY");
};

export const InvestmentStatus = {
  NOTSELL: "Not Sell",
  PENDING: "Pending",
  INPROGRESS: "In Progress",
};

export const turnOverList = [
  { id: 1, name: "Less than 25 Lakhs", value: "Less than 25 Lakhs" },
  { id: 2, name: "25 Lakhs to 99 Lakhs", value: "25 Lakhs to 99 Lakhs" },
  { id: 3, name: "1 Cr to 49 Cr", value: "1 Cr to 49 Cr" },
  { id: 4, name: "50 Cr to 99 Cr", value: "50 Cr to 99 Cr" },
  { id: 5, name: "100 Cr and above", value: "100 Cr and above" },
];

export const numberWithCommas = (x: number) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const lastFourDigit = (account_number: any) => {
  let num = account_number.toString();
  let length = num.length;
  let res =
    num[length - 4] + num[length - 3] + num[length - 2] + num[length - 1];
  return Number(res);
};
