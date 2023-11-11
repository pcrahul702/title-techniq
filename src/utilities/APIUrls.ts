const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const VERIFY_PAN_INVESTOR = "/investor/pan-verify";
const UPDATE_iNVESTOR_DATA = "/investor/updateUser/investorId";
const SEARCHGST_FOR_INVESTOR = "/investor/searchGst";
const GET_GST_DATA_FOR_INVESTOR = "investor/getGstData";

//buyer
const GET_ALL_BUYER = "/buyer";

// invoices api

//invoices api
const POST_BUY_INVOICE = "/invoice/buy-invoice";
const GET_INVESTED_INVOICES = (investorId: any) =>
  `/invoice/invested-invoice/${investorId}`;
const GET_APPROVE_INVOICES = (investorId: any) =>
  `/invoice/getApproveInvoices/${investorId}`;
const GET_INVOICE_BY_ID = (invoiceId: any) =>
  `invoice/getInvoiceById/${invoiceId}`;
const SEARCH_APPROVE_INVOICES = (search: any, investorId: any) =>
  `/invoice/searchApproveInvoices/${investorId}?search=${search}`;
const FILTER_BUYER_IN_APPROVE_INVOICE = (filterBy: any, investorId: any) =>
  `invoice/fiterApproveInvoice/${investorId}?${filterBy?.key}=${filterBy?.value}`;
const GET_PENDING_INVESTED_INVOICES = (investorId: any) =>
  `/invoice/resellInvested-invoice/${investorId}`;
const GET_INPROGRESS_INVESTED_INVOICES = (investorId: any) =>
  `/invoice/inprogressInvested-invoice/${investorId}`;
const RESELL_INVESTED_INVOICE = (invoiceId: any) =>
  `/invoice/resellInvestedInvoice/${invoiceId}`;
const POST_RESELL_INVESTED_INVOICE_SEND_OTP =
  "/invoice/resell-invested-invoice-sendOtp";
const POST_RESELL_INVESTED_INVOICE_VERIFY_OTP =
  "/invoice/resell-invested-invoice-verifyOtp";
const POST_INVOICE_CREATE ="/invoice/create-invoice"
  

const GET_PROFILE_DATA_FOR_INVESTOR = (userId: number) =>
  `/investor/usersid/${userId}`;
const Profile_NOMINEE_DATA = (investorId: number) =>
  `/investor/profile/nominee/${investorId}`;
const SIGNUP_MOBILE_GENERATE = "signup/mobile/generate";
const ADD_BANK_ACCOUNT_DETAILS = "/bank-detail/create-account";

// repayment statements api

const GET_ALL_UPCOMMING_PAYMENTS = (investor_id: number) =>
  `/repayment-statement/get-all-upcomming-payment/${investor_id}`;
const GET_ALL_HISTORY_PAYMENTS = (investor_id: number) =>
  `/repayment-statement/get-all-history-payment/${investor_id}`;
const GET_UPCOMMING_INVOICE_FILTER_BY_DATE = (
  investor_id: number,
  startDate: Date,
  endDate: Date
) =>
  `/repayment-statement/get-upcomming-invoice-by-date-filter/${investor_id}?start=${startDate}&end=${endDate}`;
const GET_PAYMENT_SORT = (investor_id: number, sortBy: string) =>
  `/repayment-statement/get-payment-sort/${investor_id}?sortBy=${sortBy}`;
const GET_PAYMENT_SEARCH = (investor_id: number, searchBy: string) =>
  `/repayment-statement/get-payment-search/${investor_id}?searchBy=${searchBy}`;

//end of repayment statement api


// seller  api
const GET_SELLER_DETAILS = (seller_id:number)=>`/seller/get-seller-details/${seller_id}`


//end of seller api

const MOBILE_VERIFY_OTP="mobile-verify/otp";
const INVESTOR_INDIVIDUAL_PAN_VERIFY= "investor/individual/pan-verify"
const EMAIL_OTP_GENERATE= "email/otp-generate"
const INDIVIDUAL_PAN_PERSONAL_INFORMATION="investor/individual/pan-personal-information"
const INVESTOR_INDIVIDUAL_NOMINEE= "investor/individual/nominee"
const INVESTOR_ENTITY_PAN_VERIFY = "investor/entity/pan-verify"
const INVESTOR_ENTITY_GET_GST_DATA= "investor/get-gst-data"
const INVESTOR_INDIAN_ENTITY ="investor/indian/entity"
const INVESTOR_FORIEGN_INDIVIDUAL_PERSONAL_DETAIL="investor/foriegn-individual-personal-detail"
const INVESTOR_FORIEGN_ENTITY_CREATE="investor/foriegn-entity-create"
const INVESTOR_AUTHORISED_DETAIL_FORIEGN_ENTITY= "investor/authorised-detail-foriegn-entity"
const INVESTOR_AUTHORISED_DETAIL_INDIAN_ENTITY= "investor/authorised-detail-indian-entity"
const LOGIN_MOBILE_OTP_GENERATE= "login/mobile/otp-generate"
const LOGIN_MOBILE_VERIFY_OTP= "login/mobile-verify/otp"
const LOGIN_EMAIL_OTP_GENERATE="login/email/otp-generate"
const RESEND_OTP_GENERATE="resend/otp-generate"
const USER_BANK_DETAILS=(userId:number)=>`/bank-detail/getuserbanks/${userId}`
const DELETE_ONE_BANK_DETAILS=(bankId:number)=>`/bank-detail/deletebanksdetails/${bankId}`


const ORGANIZATION_DETAILS = "/seller/seller-details";
const CONTACT_PERSON_DETAILS = "/seller/contact-person-details";
const Seller_DATA=(user_id:number)=>`/seller/get-selller/${user_id}`
export {
  BASE_URL,
  VERIFY_PAN_INVESTOR,
  UPDATE_iNVESTOR_DATA,
  SEARCHGST_FOR_INVESTOR,
  GET_GST_DATA_FOR_INVESTOR,
  POST_BUY_INVOICE,
  GET_APPROVE_INVOICES,
  GET_INVOICE_BY_ID,
  SEARCH_APPROVE_INVOICES,
  FILTER_BUYER_IN_APPROVE_INVOICE,
  GET_INVESTED_INVOICES,
  GET_PENDING_INVESTED_INVOICES,
  GET_INPROGRESS_INVESTED_INVOICES,
  RESELL_INVESTED_INVOICE,
  GET_PROFILE_DATA_FOR_INVESTOR,
  Profile_NOMINEE_DATA,
  GET_ALL_BUYER,
  SIGNUP_MOBILE_GENERATE,
  MOBILE_VERIFY_OTP,
  INVESTOR_INDIVIDUAL_PAN_VERIFY,
  EMAIL_OTP_GENERATE,
  INDIVIDUAL_PAN_PERSONAL_INFORMATION,
  INVESTOR_INDIVIDUAL_NOMINEE,
  INVESTOR_ENTITY_PAN_VERIFY,
  INVESTOR_ENTITY_GET_GST_DATA,
  INVESTOR_INDIAN_ENTITY,
  INVESTOR_FORIEGN_INDIVIDUAL_PERSONAL_DETAIL,
  INVESTOR_FORIEGN_ENTITY_CREATE,
  INVESTOR_AUTHORISED_DETAIL_FORIEGN_ENTITY,
  INVESTOR_AUTHORISED_DETAIL_INDIAN_ENTITY,
  LOGIN_MOBILE_OTP_GENERATE,
  LOGIN_MOBILE_VERIFY_OTP,
  LOGIN_EMAIL_OTP_GENERATE,
  USER_BANK_DETAILS,
  DELETE_ONE_BANK_DETAILS,
  POST_RESELL_INVESTED_INVOICE_SEND_OTP,
  POST_RESELL_INVESTED_INVOICE_VERIFY_OTP,
  ADD_BANK_ACCOUNT_DETAILS,

  ORGANIZATION_DETAILS,
  GET_ALL_UPCOMMING_PAYMENTS,
  GET_ALL_HISTORY_PAYMENTS,
  GET_UPCOMMING_INVOICE_FILTER_BY_DATE,
  GET_PAYMENT_SORT,
  GET_PAYMENT_SEARCH,
  RESEND_OTP_GENERATE,
  GET_SELLER_DETAILS,
  CONTACT_PERSON_DETAILS,
  POST_INVOICE_CREATE,
  Seller_DATA
};
