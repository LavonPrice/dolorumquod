"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Field = exports.MasterModel = void 0;
class Field {
    /**
     * Creates an instance of Field with the given parameters
     * @param apiName A string representing the apiName
     */
    constructor(apiName) {
        this.apiName = apiName;
    }
    /**
     * The method to get the apiName
     * @returns A string representing the apiName
     */
    getAPIName() {
        return this.apiName;
    }
}
exports.MasterModel = Field;
exports.Field = Field;
Field.Products = (_a = class {
    },
    _a.PRODUCT_CATEGORY = new Field("Product_Category"),
    _a.QTY_IN_DEMAND = new Field("Qty_in_Demand"),
    _a.OWNER = new Field("Owner"),
    _a.DESCRIPTION = new Field("Description"),
    _a.VENDOR_NAME = new Field("Vendor_Name"),
    _a.TAX = new Field("Tax"),
    _a.SALES_START_DATE = new Field("Sales_Start_Date"),
    _a.PRODUCT_ACTIVE = new Field("Product_Active"),
    _a.RECORD_IMAGE = new Field("Record_Image"),
    _a.MODIFIED_BY = new Field("Modified_By"),
    _a.PRODUCT_CODE = new Field("Product_Code"),
    _a.MANUFACTURER = new Field("Manufacturer"),
    _a.ID = new Field("id"),
    _a.SUPPORT_EXPIRY_DATE = new Field("Support_Expiry_Date"),
    _a.MODIFIED_TIME = new Field("Modified_Time"),
    _a.CREATED_TIME = new Field("Created_Time"),
    _a.COMMISSION_RATE = new Field("Commission_Rate"),
    _a.PRODUCT_NAME = new Field("Product_Name"),
    _a.HANDLER = new Field("Handler"),
    _a.SUPPORT_START_DATE = new Field("Support_Start_Date"),
    _a.USAGE_UNIT = new Field("Usage_Unit"),
    _a.QTY_ORDERED = new Field("Qty_Ordered"),
    _a.QTY_IN_STOCK = new Field("Qty_in_Stock"),
    _a.CREATED_BY = new Field("Created_By"),
    _a.TAG = new Field("Tag"),
    _a.SALES_END_DATE = new Field("Sales_End_Date"),
    _a.UNIT_PRICE = new Field("Unit_Price"),
    _a.TAXABLE = new Field("Taxable"),
    _a.REORDER_LEVEL = new Field("Reorder_Level"),
    _a);
Field.Tasks = (_b = class {
    },
    _b.STATUS = new Field("Status"),
    _b.OWNER = new Field("Owner"),
    _b.MODIFIED_TIME = new Field("Modified_Time"),
    _b.DESCRIPTION = new Field("Description"),
    _b.DUE_DATE = new Field("Due_Date"),
    _b.PRIORITY = new Field("Priority"),
    _b.CREATED_TIME = new Field("Created_Time"),
    _b.CLOSED_TIME = new Field("Closed_Time"),
    _b.SUBJECT = new Field("Subject"),
    _b.SEND_NOTIFICATION_EMAIL = new Field("Send_Notification_Email"),
    _b.MODIFIED_BY = new Field("Modified_By"),
    _b.RECURRING_ACTIVITY = new Field("Recurring_Activity"),
    _b.WHAT_ID = new Field("What_Id"),
    _b.ID = new Field("id"),
    _b.CREATED_BY = new Field("Created_By"),
    _b.TAG = new Field("Tag"),
    _b.REMIND_AT = new Field("Remind_At"),
    _b.WHO_ID = new Field("Who_Id"),
    _b);
Field.Vendors = (_c = class {
    },
    _c.OWNER = new Field("Owner"),
    _c.MODIFIED_TIME = new Field("Modified_Time"),
    _c.EMAIL = new Field("Email"),
    _c.CATEGORY = new Field("Category"),
    _c.DESCRIPTION = new Field("Description"),
    _c.VENDOR_NAME = new Field("Vendor_Name"),
    _c.CREATED_TIME = new Field("Created_Time"),
    _c.WEBSITE = new Field("Website"),
    _c.CITY = new Field("City"),
    _c.RECORD_IMAGE = new Field("Record_Image"),
    _c.MODIFIED_BY = new Field("Modified_By"),
    _c.PHONE = new Field("Phone"),
    _c.STATE = new Field("State"),
    _c.GL_ACCOUNT = new Field("GL_Account"),
    _c.STREET = new Field("Street"),
    _c.COUNTRY = new Field("Country"),
    _c.ZIP_CODE = new Field("Zip_Code"),
    _c.ID = new Field("id"),
    _c.CREATED_BY = new Field("Created_By"),
    _c.TAG = new Field("Tag"),
    _c);
Field.Calls = (_d = class {
    },
    _d.CALL_DURATION = new Field("Call_Duration"),
    _d.OWNER = new Field("Owner"),
    _d.MODIFIED_TIME = new Field("Modified_Time"),
    _d.DESCRIPTION = new Field("Description"),
    _d.REMINDER = new Field("Reminder"),
    _d.CALLER_ID = new Field("Caller_ID"),
    _d.CTI_ENTRY = new Field("CTI_Entry"),
    _d.CREATED_TIME = new Field("Created_Time"),
    _d.CALL_START_TIME = new Field("Call_Start_Time"),
    _d.SUBJECT = new Field("Subject"),
    _d.CALL_AGENDA = new Field("Call_Agenda"),
    _d.CALL_RESULT = new Field("Call_Result"),
    _d.CALL_TYPE = new Field("Call_Type"),
    _d.MODIFIED_BY = new Field("Modified_By"),
    _d.WHAT_ID = new Field("What_Id"),
    _d.CALL_DURATION_IN_SECONDS = new Field("Call_Duration_in_seconds"),
    _d.CALL_PURPOSE = new Field("Call_Purpose"),
    _d.ID = new Field("id"),
    _d.CREATED_BY = new Field("Created_By"),
    _d.TAG = new Field("Tag"),
    _d.DIALLED_NUMBER = new Field("Dialled_Number"),
    _d.CALL_STATUS = new Field("Call_Status"),
    _d.WHO_ID = new Field("Who_Id"),
    _d);
Field.Leads = (_e = class {
    },
    _e.OWNER = new Field("Owner"),
    _e.COMPANY = new Field("Company"),
    _e.EMAIL = new Field("Email"),
    _e.DESCRIPTION = new Field("Description"),
    _e.RATING = new Field("Rating"),
    _e.WEBSITE = new Field("Website"),
    _e.TWITTER = new Field("Twitter"),
    _e.SALUTATION = new Field("Salutation"),
    _e.LAST_ACTIVITY_TIME = new Field("Last_Activity_Time"),
    _e.FIRST_NAME = new Field("First_Name"),
    _e.FULL_NAME = new Field("Full_Name"),
    _e.LEAD_STATUS = new Field("Lead_Status"),
    _e.INDUSTRY = new Field("Industry"),
    _e.RECORD_IMAGE = new Field("Record_Image"),
    _e.MODIFIED_BY = new Field("Modified_By"),
    _e.SKYPE_ID = new Field("Skype_ID"),
    _e.PHONE = new Field("Phone"),
    _e.STREET = new Field("Street"),
    _e.ZIP_CODE = new Field("Zip_Code"),
    _e.ID = new Field("id"),
    _e.EMAIL_OPT_OUT = new Field("Email_Opt_Out"),
    _e.DESIGNATION = new Field("Designation"),
    _e.MODIFIED_TIME = new Field("Modified_Time"),
    _e.CREATED_TIME = new Field("Created_Time"),
    _e.CITY = new Field("City"),
    _e.NO_OF_EMPLOYEES = new Field("No_of_Employees"),
    _e.MOBILE = new Field("Mobile"),
    _e.CONVERTED_DATE_TIME = new Field("Converted_Date_Time"),
    _e.LAST_NAME = new Field("Last_Name"),
    _e.LAYOUT = new Field("Layout"),
    _e.STATE = new Field("State"),
    _e.LEAD_SOURCE = new Field("Lead_Source"),
    _e.IS_RECORD_DUPLICATE = new Field("Is_Record_Duplicate"),
    _e.TAG = new Field("Tag"),
    _e.CREATED_BY = new Field("Created_By"),
    _e.FAX = new Field("Fax"),
    _e.ANNUAL_REVENUE = new Field("Annual_Revenue"),
    _e.SECONDARY_EMAIL = new Field("Secondary_Email"),
    _e);
Field.Deals = (_f = class {
    },
    _f.OWNER = new Field("Owner"),
    _f.DESCRIPTION = new Field("Description"),
    _f.CAMPAIGN_SOURCE = new Field("Campaign_Source"),
    _f.CLOSING_DATE = new Field("Closing_Date"),
    _f.LAST_ACTIVITY_TIME = new Field("Last_Activity_Time"),
    _f.MODIFIED_BY = new Field("Modified_By"),
    _f.LEAD_CONVERSION_TIME = new Field("Lead_Conversion_Time"),
    _f.DEAL_NAME = new Field("Deal_Name"),
    _f.EXPECTED_REVENUE = new Field("Expected_Revenue"),
    _f.OVERALL_SALES_DURATION = new Field("Overall_Sales_Duration"),
    _f.STAGE = new Field("Stage"),
    _f.ID = new Field("id"),
    _f.MODIFIED_TIME = new Field("Modified_Time"),
    _f.TERRITORY = new Field("Territory"),
    _f.CREATED_TIME = new Field("Created_Time"),
    _f.AMOUNT = new Field("Amount"),
    _f.PROBABILITY = new Field("Probability"),
    _f.NEXT_STEP = new Field("Next_Step"),
    _f.CONTACT_NAME = new Field("Contact_Name"),
    _f.SALES_CYCLE_DURATION = new Field("Sales_Cycle_Duration"),
    _f.TYPE = new Field("Type"),
    _f.DEAL_CATEGORY_STATUS = new Field("Deal_Category_Status"),
    _f.LEAD_SOURCE = new Field("Lead_Source"),
    _f.CREATED_BY = new Field("Created_By"),
    _f.TAG = new Field("Tag"),
    _f);
Field.Campaigns = (_g = class {
    },
    _g.STATUS = new Field("Status"),
    _g.OWNER = new Field("Owner"),
    _g.MODIFIED_TIME = new Field("Modified_Time"),
    _g.DESCRIPTION = new Field("Description"),
    _g.CAMPAIGN_NAME = new Field("Campaign_Name"),
    _g.CREATED_TIME = new Field("Created_Time"),
    _g.END_DATE = new Field("End_Date"),
    _g.TYPE = new Field("Type"),
    _g.MODIFIED_BY = new Field("Modified_By"),
    _g.NUM_SENT = new Field("Num_sent"),
    _g.EXPECTED_REVENUE = new Field("Expected_Revenue"),
    _g.ACTUAL_COST = new Field("Actual_Cost"),
    _g.ID = new Field("id"),
    _g.EXPECTED_RESPONSE = new Field("Expected_Response"),
    _g.CREATED_BY = new Field("Created_By"),
    _g.TAG = new Field("Tag"),
    _g.PARENT_CAMPAIGN = new Field("Parent_Campaign"),
    _g.START_DATE = new Field("Start_Date"),
    _g.BUDGETED_COST = new Field("Budgeted_Cost"),
    _g);
Field.Quotes = (_h = class {
    },
    _h.OWNER = new Field("Owner"),
    _h.DISCOUNT = new Field("Discount"),
    _h.DESCRIPTION = new Field("Description"),
    _h.SHIPPING_STATE = new Field("Shipping_State"),
    _h.TAX = new Field("Tax"),
    _h.MODIFIED_BY = new Field("Modified_By"),
    _h.DEAL_NAME = new Field("Deal_Name"),
    _h.VALID_TILL = new Field("Valid_Till"),
    _h.BILLING_COUNTRY = new Field("Billing_Country"),
    _h.ACCOUNT_NAME = new Field("Account_Name"),
    _h.TEAM = new Field("Team"),
    _h.ID = new Field("id"),
    _h.CARRIER = new Field("Carrier"),
    _h.QUOTE_STAGE = new Field("Quote_Stage"),
    _h.GRAND_TOTAL = new Field("Grand_Total"),
    _h.MODIFIED_TIME = new Field("Modified_Time"),
    _h.BILLING_STREET = new Field("Billing_Street"),
    _h.ADJUSTMENT = new Field("Adjustment"),
    _h.CREATED_TIME = new Field("Created_Time"),
    _h.TERMS_AND_CONDITIONS = new Field("Terms_and_Conditions"),
    _h.SUB_TOTAL = new Field("Sub_Total"),
    _h.BILLING_CODE = new Field("Billing_Code"),
    _h.PRODUCT_DETAILS = new Field("Product_Details"),
    _h.SUBJECT = new Field("Subject"),
    _h.CONTACT_NAME = new Field("Contact_Name"),
    _h.SHIPPING_CITY = new Field("Shipping_City"),
    _h.SHIPPING_COUNTRY = new Field("Shipping_Country"),
    _h.SHIPPING_CODE = new Field("Shipping_Code"),
    _h.BILLING_CITY = new Field("Billing_City"),
    _h.QUOTE_NUMBER = new Field("Quote_Number"),
    _h.BILLING_STATE = new Field("Billing_State"),
    _h.CREATED_BY = new Field("Created_By"),
    _h.TAG = new Field("Tag"),
    _h.SHIPPING_STREET = new Field("Shipping_Street"),
    _h);
Field.Invoices = (_j = class {
    },
    _j.OWNER = new Field("Owner"),
    _j.DISCOUNT = new Field("Discount"),
    _j.DESCRIPTION = new Field("Description"),
    _j.SHIPPING_STATE = new Field("Shipping_State"),
    _j.TAX = new Field("Tax"),
    _j.INVOICE_DATE = new Field("Invoice_Date"),
    _j.MODIFIED_BY = new Field("Modified_By"),
    _j.BILLING_COUNTRY = new Field("Billing_Country"),
    _j.ACCOUNT_NAME = new Field("Account_Name"),
    _j.ID = new Field("id"),
    _j.SALES_ORDER = new Field("Sales_Order"),
    _j.STATUS = new Field("Status"),
    _j.GRAND_TOTAL = new Field("Grand_Total"),
    _j.SALES_COMMISSION = new Field("Sales_Commission"),
    _j.MODIFIED_TIME = new Field("Modified_Time"),
    _j.DUE_DATE = new Field("Due_Date"),
    _j.BILLING_STREET = new Field("Billing_Street"),
    _j.ADJUSTMENT = new Field("Adjustment"),
    _j.CREATED_TIME = new Field("Created_Time"),
    _j.TERMS_AND_CONDITIONS = new Field("Terms_and_Conditions"),
    _j.SUB_TOTAL = new Field("Sub_Total"),
    _j.INVOICE_NUMBER = new Field("Invoice_Number"),
    _j.BILLING_CODE = new Field("Billing_Code"),
    _j.PRODUCT_DETAILS = new Field("Product_Details"),
    _j.SUBJECT = new Field("Subject"),
    _j.CONTACT_NAME = new Field("Contact_Name"),
    _j.EXCISE_DUTY = new Field("Excise_Duty"),
    _j.SHIPPING_CITY = new Field("Shipping_City"),
    _j.SHIPPING_COUNTRY = new Field("Shipping_Country"),
    _j.SHIPPING_CODE = new Field("Shipping_Code"),
    _j.BILLING_CITY = new Field("Billing_City"),
    _j.PURCHASE_ORDER = new Field("Purchase_Order"),
    _j.BILLING_STATE = new Field("Billing_State"),
    _j.CREATED_BY = new Field("Created_By"),
    _j.TAG = new Field("Tag"),
    _j.SHIPPING_STREET = new Field("Shipping_Street"),
    _j);
Field.Attachments = (_k = class {
    },
    _k.OWNER = new Field("Owner"),
    _k.MODIFIED_BY = new Field("Modified_By"),
    _k.MODIFIED_TIME = new Field("Modified_Time"),
    _k.FILE_NAME = new Field("File_Name"),
    _k.CREATED_TIME = new Field("Created_Time"),
    _k.SIZE = new Field("Size"),
    _k.PARENT_ID = new Field("Parent_Id"),
    _k.ID = new Field("id"),
    _k.CREATED_BY = new Field("Created_By"),
    _k);
Field.Price_Books = (_l = class {
    },
    _l.OWNER = new Field("Owner"),
    _l.ACTIVE = new Field("Active"),
    _l.MODIFIED_BY = new Field("Modified_By"),
    _l.MODIFIED_TIME = new Field("Modified_Time"),
    _l.PRICING_DETAILS = new Field("Pricing_Details"),
    _l.PRICING_MODEL = new Field("Pricing_Model"),
    _l.DESCRIPTION = new Field("Description"),
    _l.CREATED_TIME = new Field("Created_Time"),
    _l.PRICE_BOOK_NAME = new Field("Price_Book_Name"),
    _l.ID = new Field("id"),
    _l.CREATED_BY = new Field("Created_By"),
    _l.TAG = new Field("Tag"),
    _l);
Field.Sales_Orders = (_m = class {
    },
    _m.OWNER = new Field("Owner"),
    _m.DISCOUNT = new Field("Discount"),
    _m.DESCRIPTION = new Field("Description"),
    _m.CUSTOMER_NO = new Field("Customer_No"),
    _m.SHIPPING_STATE = new Field("Shipping_State"),
    _m.TAX = new Field("Tax"),
    _m.MODIFIED_BY = new Field("Modified_By"),
    _m.DEAL_NAME = new Field("Deal_Name"),
    _m.BILLING_COUNTRY = new Field("Billing_Country"),
    _m.ACCOUNT_NAME = new Field("Account_Name"),
    _m.ID = new Field("id"),
    _m.CARRIER = new Field("Carrier"),
    _m.QUOTE_NAME = new Field("Quote_Name"),
    _m.STATUS = new Field("Status"),
    _m.SALES_COMMISSION = new Field("Sales_Commission"),
    _m.GRAND_TOTAL = new Field("Grand_Total"),
    _m.MODIFIED_TIME = new Field("Modified_Time"),
    _m.DUE_DATE = new Field("Due_Date"),
    _m.BILLING_STREET = new Field("Billing_Street"),
    _m.ADJUSTMENT = new Field("Adjustment"),
    _m.CREATED_TIME = new Field("Created_Time"),
    _m.TERMS_AND_CONDITIONS = new Field("Terms_and_Conditions"),
    _m.SUB_TOTAL = new Field("Sub_Total"),
    _m.BILLING_CODE = new Field("Billing_Code"),
    _m.PRODUCT_DETAILS = new Field("Product_Details"),
    _m.SUBJECT = new Field("Subject"),
    _m.CONTACT_NAME = new Field("Contact_Name"),
    _m.EXCISE_DUTY = new Field("Excise_Duty"),
    _m.SHIPPING_CITY = new Field("Shipping_City"),
    _m.SHIPPING_COUNTRY = new Field("Shipping_Country"),
    _m.SHIPPING_CODE = new Field("Shipping_Code"),
    _m.BILLING_CITY = new Field("Billing_City"),
    _m.SO_NUMBER = new Field("SO_Number"),
    _m.PURCHASE_ORDER = new Field("Purchase_Order"),
    _m.BILLING_STATE = new Field("Billing_State"),
    _m.CREATED_BY = new Field("Created_By"),
    _m.TAG = new Field("Tag"),
    _m.PENDING = new Field("Pending"),
    _m.SHIPPING_STREET = new Field("Shipping_Street"),
    _m);
Field.Contacts = (_o = class {
    },
    _o.OWNER = new Field("Owner"),
    _o.EMAIL = new Field("Email"),
    _o.DESCRIPTION = new Field("Description"),
    _o.VENDOR_NAME = new Field("Vendor_Name"),
    _o.MAILING_ZIP = new Field("Mailing_Zip"),
    _o.REPORTS_TO = new Field("Reports_To"),
    _o.OTHER_PHONE = new Field("Other_Phone"),
    _o.MAILING_STATE = new Field("Mailing_State"),
    _o.TWITTER = new Field("Twitter"),
    _o.OTHER_ZIP = new Field("Other_Zip"),
    _o.MAILING_STREET = new Field("Mailing_Street"),
    _o.OTHER_STATE = new Field("Other_State"),
    _o.SALUTATION = new Field("Salutation"),
    _o.OTHER_COUNTRY = new Field("Other_Country"),
    _o.LAST_ACTIVITY_TIME = new Field("Last_Activity_Time"),
    _o.FIRST_NAME = new Field("First_Name"),
    _o.FULL_NAME = new Field("Full_Name"),
    _o.ASST_PHONE = new Field("Asst_Phone"),
    _o.RECORD_IMAGE = new Field("Record_Image"),
    _o.DEPARTMENT = new Field("Department"),
    _o.MODIFIED_BY = new Field("Modified_By"),
    _o.SKYPE_ID = new Field("Skype_ID"),
    _o.ASSISTANT = new Field("Assistant"),
    _o.PHONE = new Field("Phone"),
    _o.MAILING_COUNTRY = new Field("Mailing_Country"),
    _o.ACCOUNT_NAME = new Field("Account_Name"),
    _o.ID = new Field("id"),
    _o.EMAIL_OPT_OUT = new Field("Email_Opt_Out"),
    _o.REPORTING_TO = new Field("Reporting_To"),
    _o.MODIFIED_TIME = new Field("Modified_Time"),
    _o.DATE_OF_BIRTH = new Field("Date_of_Birth"),
    _o.MAILING_CITY = new Field("Mailing_City"),
    _o.OTHER_CITY = new Field("Other_City"),
    _o.CREATED_TIME = new Field("Created_Time"),
    _o.TITLE = new Field("Title"),
    _o.OTHER_STREET = new Field("Other_Street"),
    _o.MOBILE = new Field("Mobile"),
    _o.TERRITORIES = new Field("Territories"),
    _o.HOME_PHONE = new Field("Home_Phone"),
    _o.LAST_NAME = new Field("Last_Name"),
    _o.LEAD_SOURCE = new Field("Lead_Source"),
    _o.IS_RECORD_DUPLICATE = new Field("Is_Record_Duplicate"),
    _o.TAG = new Field("Tag"),
    _o.CREATED_BY = new Field("Created_By"),
    _o.FAX = new Field("Fax"),
    _o.SECONDARY_EMAIL = new Field("Secondary_Email"),
    _o);
Field.Solutions = (_p = class {
    },
    _p.STATUS = new Field("Status"),
    _p.OWNER = new Field("Owner"),
    _p.MODIFIED_TIME = new Field("Modified_Time"),
    _p.CREATED_TIME = new Field("Created_Time"),
    _p.COMMENTS = new Field("Comments"),
    _p.NO_OF_COMMENTS = new Field("No_of_comments"),
    _p.PRODUCT_NAME = new Field("Product_Name"),
    _p.ADD_COMMENT = new Field("Add_Comment"),
    _p.SOLUTION_NUMBER = new Field("Solution_Number"),
    _p.ANSWER = new Field("Answer"),
    _p.MODIFIED_BY = new Field("Modified_By"),
    _p.SOLUTION_TITLE = new Field("Solution_Title"),
    _p.PUBLISHED = new Field("Published"),
    _p.QUESTION = new Field("Question"),
    _p.ID = new Field("id"),
    _p.CREATED_BY = new Field("Created_By"),
    _p.TAG = new Field("Tag"),
    _p);
Field.Events = (_q = class {
    },
    _q.ALL_DAY = new Field("All_day"),
    _q.OWNER = new Field("Owner"),
    _q.CHECK_IN_STATE = new Field("Check_In_State"),
    _q.CHECK_IN_ADDRESS = new Field("Check_In_Address"),
    _q.DESCRIPTION = new Field("Description"),
    _q.START_DATETIME = new Field("Start_DateTime"),
    _q.LATITUDE = new Field("Latitude"),
    _q.PARTICIPANTS = new Field("Participants"),
    _q.EVENT_TITLE = new Field("Event_Title"),
    _q.END_DATETIME = new Field("End_DateTime"),
    _q.CHECK_IN_BY = new Field("Check_In_By"),
    _q.MODIFIED_BY = new Field("Modified_By"),
    _q.CHECK_IN_CITY = new Field("Check_In_City"),
    _q.ID = new Field("id"),
    _q.CHECK_IN_COMMENT = new Field("Check_In_Comment"),
    _q.REMIND_AT = new Field("Remind_At"),
    _q.WHO_ID = new Field("Who_Id"),
    _q.CHECK_IN_STATUS = new Field("Check_In_Status"),
    _q.CHECK_IN_COUNTRY = new Field("Check_In_Country"),
    _q.MODIFIED_TIME = new Field("Modified_Time"),
    _q.VENUE = new Field("Venue"),
    _q.ZIP_CODE = new Field("ZIP_Code"),
    _q.CREATED_TIME = new Field("Created_Time"),
    _q.LONGITUDE = new Field("Longitude"),
    _q.CHECK_IN_TIME = new Field("Check_In_Time"),
    _q.RECURRING_ACTIVITY = new Field("Recurring_Activity"),
    _q.WHAT_ID = new Field("What_Id"),
    _q.CHECK_IN_SUB_LOCALITY = new Field("Check_In_Sub_Locality"),
    _q.CREATED_BY = new Field("Created_By"),
    _q.TAG = new Field("Tag"),
    _q);
Field.Purchase_Orders = (_r = class {
    },
    _r.OWNER = new Field("Owner"),
    _r.DISCOUNT = new Field("Discount"),
    _r.DESCRIPTION = new Field("Description"),
    _r.VENDOR_NAME = new Field("Vendor_Name"),
    _r.SHIPPING_STATE = new Field("Shipping_State"),
    _r.TAX = new Field("Tax"),
    _r.PO_DATE = new Field("PO_Date"),
    _r.MODIFIED_BY = new Field("Modified_By"),
    _r.BILLING_COUNTRY = new Field("Billing_Country"),
    _r.ID = new Field("id"),
    _r.CARRIER = new Field("Carrier"),
    _r.STATUS = new Field("Status"),
    _r.GRAND_TOTAL = new Field("Grand_Total"),
    _r.SALES_COMMISSION = new Field("Sales_Commission"),
    _r.MODIFIED_TIME = new Field("Modified_Time"),
    _r.PO_NUMBER = new Field("PO_Number"),
    _r.DUE_DATE = new Field("Due_Date"),
    _r.BILLING_STREET = new Field("Billing_Street"),
    _r.ADJUSTMENT = new Field("Adjustment"),
    _r.CREATED_TIME = new Field("Created_Time"),
    _r.TERMS_AND_CONDITIONS = new Field("Terms_and_Conditions"),
    _r.SUB_TOTAL = new Field("Sub_Total"),
    _r.BILLING_CODE = new Field("Billing_Code"),
    _r.PRODUCT_DETAILS = new Field("Product_Details"),
    _r.SUBJECT = new Field("Subject"),
    _r.TRACKING_NUMBER = new Field("Tracking_Number"),
    _r.CONTACT_NAME = new Field("Contact_Name"),
    _r.EXCISE_DUTY = new Field("Excise_Duty"),
    _r.SHIPPING_CITY = new Field("Shipping_City"),
    _r.SHIPPING_COUNTRY = new Field("Shipping_Country"),
    _r.SHIPPING_CODE = new Field("Shipping_Code"),
    _r.BILLING_CITY = new Field("Billing_City"),
    _r.REQUISITION_NO = new Field("Requisition_No"),
    _r.BILLING_STATE = new Field("Billing_State"),
    _r.CREATED_BY = new Field("Created_By"),
    _r.TAG = new Field("Tag"),
    _r.SHIPPING_STREET = new Field("Shipping_Street"),
    _r);
Field.Accounts = (_s = class {
    },
    _s.OWNER = new Field("Owner"),
    _s.OWNERSHIP = new Field("Ownership"),
    _s.DESCRIPTION = new Field("Description"),
    _s.ACCOUNT_TYPE = new Field("Account_Type"),
    _s.RATING = new Field("Rating"),
    _s.SIC_CODE = new Field("SIC_Code"),
    _s.SHIPPING_STATE = new Field("Shipping_State"),
    _s.WEBSITE = new Field("Website"),
    _s.EMPLOYEES = new Field("Employees"),
    _s.LAST_ACTIVITY_TIME = new Field("Last_Activity_Time"),
    _s.INDUSTRY = new Field("Industry"),
    _s.RECORD_IMAGE = new Field("Record_Image"),
    _s.MODIFIED_BY = new Field("Modified_By"),
    _s.ACCOUNT_SITE = new Field("Account_Site"),
    _s.PHONE = new Field("Phone"),
    _s.BILLING_COUNTRY = new Field("Billing_Country"),
    _s.ACCOUNT_NAME = new Field("Account_Name"),
    _s.ID = new Field("id"),
    _s.ACCOUNT_NUMBER = new Field("Account_Number"),
    _s.TICKER_SYMBOL = new Field("Ticker_Symbol"),
    _s.MODIFIED_TIME = new Field("Modified_Time"),
    _s.BILLING_STREET = new Field("Billing_Street"),
    _s.CREATED_TIME = new Field("Created_Time"),
    _s.BILLING_CODE = new Field("Billing_Code"),
    _s.TERRITORIES = new Field("Territories"),
    _s.PARENT_ACCOUNT = new Field("Parent_Account"),
    _s.SHIPPING_CITY = new Field("Shipping_City"),
    _s.SHIPPING_COUNTRY = new Field("Shipping_Country"),
    _s.SHIPPING_CODE = new Field("Shipping_Code"),
    _s.BILLING_CITY = new Field("Billing_City"),
    _s.BILLING_STATE = new Field("Billing_State"),
    _s.TAG = new Field("Tag"),
    _s.CREATED_BY = new Field("Created_By"),
    _s.FAX = new Field("Fax"),
    _s.ANNUAL_REVENUE = new Field("Annual_Revenue"),
    _s.SHIPPING_STREET = new Field("Shipping_Street"),
    _s);
Field.Cases = (_t = class {
    },
    _t.OWNER = new Field("Owner"),
    _t.EMAIL = new Field("Email"),
    _t.DESCRIPTION = new Field("Description"),
    _t.INTERNAL_COMMENTS = new Field("Internal_Comments"),
    _t.NO_OF_COMMENTS = new Field("No_of_comments"),
    _t.REPORTED_BY = new Field("Reported_By"),
    _t.CASE_NUMBER = new Field("Case_Number"),
    _t.MODIFIED_BY = new Field("Modified_By"),
    _t.DEAL_NAME = new Field("Deal_Name"),
    _t.PHONE = new Field("Phone"),
    _t.ACCOUNT_NAME = new Field("Account_Name"),
    _t.ID = new Field("id"),
    _t.SOLUTION = new Field("Solution"),
    _t.STATUS = new Field("Status"),
    _t.MODIFIED_TIME = new Field("Modified_Time"),
    _t.PRIORITY = new Field("Priority"),
    _t.CREATED_TIME = new Field("Created_Time"),
    _t.COMMENTS = new Field("Comments"),
    _t.PRODUCT_NAME = new Field("Product_Name"),
    _t.ADD_COMMENT = new Field("Add_Comment"),
    _t.CASE_ORIGIN = new Field("Case_Origin"),
    _t.SUBJECT = new Field("Subject"),
    _t.CASE_REASON = new Field("Case_Reason"),
    _t.TYPE = new Field("Type"),
    _t.IS_RECORD_DUPLICATE = new Field("Is_Record_Duplicate"),
    _t.TAG = new Field("Tag"),
    _t.CREATED_BY = new Field("Created_By"),
    _t.RELATED_TO = new Field("Related_To"),
    _t);
Field.Notes = (_u = class {
    },
    _u.OWNER = new Field("Owner"),
    _u.MODIFIED_BY = new Field("Modified_By"),
    _u.MODIFIED_TIME = new Field("Modified_Time"),
    _u.CREATED_TIME = new Field("Created_Time"),
    _u.PARENT_ID = new Field("Parent_Id"),
    _u.ID = new Field("id"),
    _u.CREATED_BY = new Field("Created_By"),
    _u.NOTE_TITLE = new Field("Note_Title"),
    _u.NOTE_CONTENT = new Field("Note_Content"),
    _u);
//# sourceMappingURL=field.js.map