import React from "react";
import { Navigate } from "react-router-dom";

// Pages Component
import Chat from "../../interfaces/ui/pages/Chat/Chat";

// // File Manager
import FileManager from "../../interfaces/ui/pages/FileManager";

// // Profile
import UserProfile from "../../interfaces/ui/pages/Authentication/user-profile";

// Pages Calendar
import Calendar from "../../interfaces/ui/pages/Calendar";

// // //Tasks
import TasksList from "../../interfaces/ui/pages/Tasks/tasks-list";
import TasksCreate from "../../interfaces/ui/pages/Tasks/tasks-create";
import TasksKanban from "../../interfaces/ui/pages/Tasks/tasks-kanban";

// // //Projects
import ProjectsGrid from "../../interfaces/ui/pages/Projects/projects-grid";
import ProjectsList from "../../interfaces/ui/pages/Projects/projects-list";
import ProjectsOverview from "../../interfaces/ui/pages/Projects/ProjectOverview/projects-overview";
import ProjectsCreate from "../../interfaces/ui/pages/Projects/projects-create";

// // //Ecommerce Pages
import EcommerceProducts from "../../interfaces/ui/pages/Ecommerce/EcommerceProducts";
import EcommerceProductDetail from "../../interfaces/ui/pages/Ecommerce/EcommerceProductDetail";
import EcommerceOrders from "../../interfaces/ui/pages/Ecommerce/EcommerceOrders";
import EcommerceCustomers from "../../interfaces/ui/pages/Ecommerce/EcommerceCustomers";
import EcommerceCart from "../../interfaces/ui/pages/Ecommerce/EcommerceCart";
import EcommerceCheckout from "../../interfaces/ui/pages/Ecommerce/EcommerceCheckout";
import EcommerceShops from "../../interfaces/ui/pages/Ecommerce/EcommerceShops";
import EcommerenceAddProduct from "../../interfaces/ui/pages/Ecommerce/EcommerceAddProduct";

// //Email
import EmailInbox from "../../interfaces/ui/pages/Email/email-inbox";
import EmailRead from "../../interfaces/ui/pages/Email/email-read";
import EmailBasicTemplte from "../../interfaces/ui/pages/Email/email-basic-templte";
import EmailAlertTemplte from "../../interfaces/ui/pages/Email/email-template-alert";
import EmailTemplateBilling from "../../interfaces/ui/pages/Email/email-template-billing";

// //Invoices
import InvoicesList from "../../interfaces/ui/pages/Invoices/invoices-list";
import InvoiceDetail from "../../interfaces/ui/pages/Invoices/invoices-detail";

// // Authentication related pages
import Login from "../../interfaces/ui/pages/Authentication/Login";
import Logout from "../../interfaces/ui/pages/Authentication/Logout";
import Register from "../../interfaces/ui/pages/Authentication/Register";
import ForgetPwd from "../../interfaces/ui/pages/Authentication/ForgetPassword";

// //  // Inner Authentication
import Login1 from "../../interfaces/ui/pages/AuthenticationInner/Login";
import Login2 from "../../interfaces/ui/pages/AuthenticationInner/Login2";
import Register1 from "../../interfaces/ui/pages/AuthenticationInner/Register";
import Register2 from "../../interfaces/ui/pages/AuthenticationInner/Register2";
import Recoverpw from "../../interfaces/ui/pages/AuthenticationInner/Recoverpw";
import Recoverpw2 from "../../interfaces/ui/pages/AuthenticationInner/Recoverpw2";
import ForgetPwd1 from "../../interfaces/ui/pages/AuthenticationInner/ForgetPassword";
import ForgetPwd2 from "../../interfaces/ui/pages/AuthenticationInner/ForgetPassword2";
import LockScreen from "../../interfaces/ui/pages/AuthenticationInner/auth-lock-screen";
import LockScreen2 from "../../interfaces/ui/pages/AuthenticationInner/auth-lock-screen-2";
import ConfirmMail from "../../interfaces/ui/pages/AuthenticationInner/page-confirm-mail";
import ConfirmMail2 from "../../interfaces/ui/pages/AuthenticationInner/page-confirm-mail-2";
import EmailVerification from "../../interfaces/ui/pages/AuthenticationInner/auth-email-verification";
import EmailVerification2 from "../../interfaces/ui/pages/AuthenticationInner/auth-email-verification-2";
import TwostepVerification from "../../interfaces/ui/pages/AuthenticationInner/auth-two-step-verification";
import TwostepVerification2 from "../../interfaces/ui/pages/AuthenticationInner/auth-two-step-verification-2";

// // Dashboard
import Dashboard from "../../interfaces/ui/pages/Dashboard";
import DashboardSaas from "../../interfaces/ui/pages/Dashboard-saas";
import DashboardCrypto from "../../interfaces/ui/pages/Dashboard-crypto";
import Blog from "../../interfaces/ui/pages/Dashboard-Blog";
import DashboardJob from "../../interfaces/ui/pages/DashboardJob";

// //Crypto
import CryptoWallet from "../../interfaces/ui/pages/Crypto/CryptoWallet/crypto-wallet";
import CryptoBuySell from "../../interfaces/ui/pages/Crypto/crypto-buy-sell";
import CryptoExchange from "../../interfaces/ui/pages/Crypto/crypto-exchange";
import CryptoLending from "../../interfaces/ui/pages/Crypto/crypto-lending";
import CryptoOrders from "../../interfaces/ui/pages/Crypto/CryptoOrders";
import CryptoKYCApplication from "../../interfaces/ui/pages/Crypto/crypto-kyc-application";
import CryptoIcoLanding from "../../interfaces/ui/pages/Crypto/CryptoIcoLanding";

// // Charts
import ChartApex from "../../interfaces/ui/pages/Charts/Apexcharts";
import ChartjsChart from "../../interfaces/ui/pages/Charts/ChartjsChart";
import EChart from "../../interfaces/ui/pages/Charts/EChart";
import SparklineChart from "../../interfaces/ui/pages/Charts/SparklineChart";
import ChartsKnob from "../../interfaces/ui/pages/Charts/charts-knob";
import ReCharts from "../../interfaces/ui/pages/Charts/ReCharts";

// // Maps
import MapsGoogle from "../../interfaces/ui/pages/Maps/MapsGoogle";

// //Icons
import IconBoxicons from "../../interfaces/ui/pages/Icons/IconBoxicons";
import IconDripicons from "../../interfaces/ui/pages/Icons/IconDripicons";
import IconMaterialdesign from "../../interfaces/ui/pages/Icons/IconMaterialdesign";
import IconFontawesome from "../../interfaces/ui/pages/Icons/IconFontawesome";

// //Tables
import BasicTables from "../../interfaces/ui/pages/Tables/BasicTables";
import DatatableTables from "../../interfaces/ui/pages/Tables/DatatableTables";

// //Blog
import BlogList from "../../interfaces/ui/pages/Blog/BlogList";
import BlogGrid from "../../interfaces/ui/pages/Blog/BlogGrid";
import BlogDetails from "../../interfaces/ui/pages/Blog/BlogDetails";

//Job
import JobGrid from "../../interfaces/ui/pages/JobPages/JobGrid";
import JobDetails from "../../interfaces/ui/pages/JobPages/JobDetails";
import JobCategories from "../../interfaces/ui/pages/JobPages/JobCategories";
import JobList from "../../interfaces/ui/pages/JobPages/JobList";
import ApplyJobs from "../../interfaces/ui/pages/JobPages/ApplyJobs";
import CandidateList from "../../interfaces/ui/pages/JobPages/CandidateList";
import CandidateOverview from "../../interfaces/ui/pages/JobPages/CandidateOverview";

// // Forms
import FormElements from "../../interfaces/ui/pages/Forms/FormElements";
import FormLayouts from "../../interfaces/ui/pages/Forms/FormLayouts";
import FormAdvanced from "../../interfaces/ui/pages/Forms/FormAdvanced";
import FormEditors from "../../interfaces/ui/pages/Forms/FormEditors";
import FormValidations from "../../interfaces/ui/pages/Forms/FormValidations";
import FormMask from "../../interfaces/ui/pages/Forms/FormMask";
import FormRepeater from "../../interfaces/ui/pages/Forms/FormRepeater";
import FormUpload from "../../interfaces/ui/pages/Forms/FormUpload";
import FormWizard from "../../interfaces/ui/pages/Forms/FormWizard";
import DualListbox from "../../interfaces/ui/pages/Tables/DualListbox";

// //Ui
import UiAlert from "../../interfaces/ui/pages/Ui/UiAlerts";
import UiButtons from "../../interfaces/ui/pages/Ui/UiButtons";
import UiCards from "../../interfaces/ui/pages/Ui/UiCard";
import UiCarousel from "../../interfaces/ui/pages/Ui/UiCarousel";
import UiColors from "../../interfaces/ui/pages/Ui/UiColors";
import UiDropdown from "../../interfaces/ui/pages/Ui/UiDropdown";
import UiOffCanvas from "../../interfaces/ui/pages/Ui/UiOffCanvas";

import UiGeneral from "../../interfaces/ui/pages/Ui/UiGeneral";
import UiGrid from "../../interfaces/ui/pages/Ui/UiGrid";
import UiImages from "../../interfaces/ui/pages/Ui/UiImages";
import UiLightbox from "../../interfaces/ui/pages/Ui/UiLightbox";
import UiModal from "../../interfaces/ui/pages/Ui/UiModal";


import UiTabsAccordions from "../../interfaces/ui/pages/Ui/UiTabsAccordions";
import UiTypography from "../../interfaces/ui/pages/Ui/UiTypography";
import UiVideo from "../../interfaces/ui/pages/Ui/UiVideo";
import UiSessionTimeout from "../../interfaces/ui/pages/Ui/UiSessionTimeout";
import UiRating from "../../interfaces/ui/pages/Ui/UiRating";
import UiRangeSlider from "../../interfaces/ui/pages/Ui/UiRangeSlider";
import UiNotifications from "../../interfaces/ui/pages/Ui/UINotifications";

import UiPlaceholders from "../../interfaces/ui/pages/Ui/UiPlaceholders";
import UiToasts from "../../interfaces/ui/pages/Ui/UiToast";
import UiUtilities from "../../interfaces/ui/pages/Ui/UiUtilities";

// //Pages
import PagesStarter from "../../interfaces/ui/pages/Utility/pages-starter";
import PagesMaintenance from "../../interfaces/ui/pages/Utility/pages-maintenance";
import PagesComingsoon from "../../interfaces/ui/pages/Utility/pages-comingsoon";
import PagesTimeline from "../../interfaces/ui/pages/Utility/pages-timeline";
import PagesFaqs from "../../interfaces/ui/pages/Utility/pages-faqs";
import PagesPricing from "../../interfaces/ui/pages/Utility/pages-pricing";
import Pages404 from "../../interfaces/ui/pages/Utility/pages-404";
import Pages500 from "../../interfaces/ui/pages/Utility/pages-500";

// //Contacts
import ContactsGrid from "../../interfaces/ui/pages/Contacts/contacts-grid";
import ContactsList from "../../interfaces/ui/pages/Contacts/ContactList/contacts-list";
import ContactsProfile from "../../interfaces/ui/pages/Contacts/ContactsProfile";
import UiProgressbar from "../../interfaces/ui/pages/Ui/UiProgressbar";
// import UiProgressbar from "../../src/pages/Ui/UiProgressbar"

const authProtectedRoutes = [
  { path: "/dashboard", component: <Dashboard /> },
  { path: "/dashboard-saas", component: <DashboardSaas /> },
  { path: "/dashboard-crypto", component: <DashboardCrypto /> },
  { path: "/blog", component: <Blog /> },
  { path: "/dashboard-job", component: <DashboardJob /> },

  //   //Crypto
  { path: "/crypto-wallet", component: <CryptoWallet /> },
  { path: "/crypto-buy-sell", component: <CryptoBuySell /> },
  { path: "/crypto-exchange", component: <CryptoExchange /> },
  { path: "/crypto-lending", component: <CryptoLending /> },
  { path: "/crypto-orders", component: <CryptoOrders /> },
  { path: "/crypto-kyc-application", component: <CryptoKYCApplication /> },

  //chat
  { path: "/chat", component: <Chat /> },

  //File Manager
  { path: "/apps-filemanager", component: <FileManager /> },

  // //calendar
  { path: "/calendar", component: <Calendar /> },

  //   // //profile
  { path: "/profile", component: <UserProfile /> },

  //   //Ecommerce
  {
    path: "/ecommerce-product-detail/:id",
    component: <EcommerceProductDetail />,
  },
  { path: "/ecommerce-products", component: <EcommerceProducts /> },
  { path: "/ecommerce-orders", component: <EcommerceOrders /> },
  { path: "/ecommerce-customers", component: <EcommerceCustomers /> },
  { path: "/ecommerce-cart", component: <EcommerceCart /> },
  { path: "/ecommerce-checkout", component: <EcommerceCheckout /> },
  { path: "/ecommerce-shops", component: <EcommerceShops /> },
  { path: "/ecommerce-add-product", component: <EcommerenceAddProduct /> },

  //   //Email
  { path: "/email-inbox", component: <EmailInbox /> },
  { path: "/email-read/:id?", component: <EmailRead /> },
  { path: "/email-template-basic", component: <EmailBasicTemplte /> },
  { path: "/email-template-alert", component: <EmailAlertTemplte /> },
  { path: "/email-template-billing", component: <EmailTemplateBilling /> },

  //   //Invoices
  { path: "/invoices-list", component: <InvoicesList /> },
  { path: "/invoices-detail", component: <InvoiceDetail /> },
  { path: "/invoices-detail/:id?", component: <InvoiceDetail /> },

  //   // Tasks
  { path: "/tasks-list", component: <TasksList /> },
  { path: "/tasks-create", component: <TasksCreate /> },
  { path: "/tasks-kanban", component: <TasksKanban /> },

  //   //Projects
  { path: "/projects-grid", component: <ProjectsGrid /> },
  { path: "/projects-list", component: <ProjectsList /> },
  { path: "/projects-overview", component: <ProjectsOverview /> },
  { path: "/projects-overview/:id", component: <ProjectsOverview /> },
  { path: "/projects-create", component: <ProjectsCreate /> },

  //   //Blog
  { path: "/blog-list", component: <BlogList /> },
  { path: "/blog-grid", component: <BlogGrid /> },
  { path: "/blog-details", component: <BlogDetails /> },

  { path: "/job-grid", component: <JobGrid /> },
  { path: "/job-details", component: <JobDetails /> },
  { path: "/job-categories", component: <JobCategories /> },
  { path: "/job-list", component: <JobList /> },
  { path: "/job-apply", component: <ApplyJobs /> },
  { path: "/candidate-list", component: <CandidateList /> },
  { path: "/candidate-overview", component: <CandidateOverview /> },

  // Contacts
  { path: "/contacts-grid", component: <ContactsGrid /> },
  { path: "/contacts-list", component: <ContactsList /> },
  { path: "/contacts-profile", component: <ContactsProfile /> },

  //   //Charts
  { path: "/apex-charts", component: <ChartApex /> },
  { path: "/chartjs-charts", component: <ChartjsChart /> },
  { path: "/e-charts", component: <EChart /> },
  { path: "/sparkline-charts", component: <SparklineChart /> },
  { path: "/charts-knob", component: <ChartsKnob /> },
  { path: "/re-charts", component: <ReCharts /> },

  //   // Icons
  { path: "/icons-boxicons", component: <IconBoxicons /> },
  { path: "/icons-dripicons", component: <IconDripicons /> },
  { path: "/icons-materialdesign", component: <IconMaterialdesign /> },
  { path: "/icons-fontawesome", component: <IconFontawesome /> },

  //   // Tables
  { path: "/tables-basic", component: <BasicTables /> },
  { path: "/tables-datatable", component: <DatatableTables /> },

  //   // Maps
  { path: "/maps-google", component: <MapsGoogle /> },

  //   // Forms
  { path: "/form-elements", component: <FormElements /> },
  { path: "/form-layouts", component: <FormLayouts /> },
  { path: "/form-advanced", component: <FormAdvanced /> },
  { path: "/form-editors", component: <FormEditors /> },
  { path: "/form-mask", component: <FormMask /> },
  { path: "/form-repeater", component: <FormRepeater /> },
  { path: "/form-uploads", component: <FormUpload /> },
  { path: "/form-wizard", component: <FormWizard /> },
  { path: "/form-validation", component: <FormValidations /> },
  { path: "/dual-listbox", component: <DualListbox /> },

  //   // Ui
  { path: "/ui-alerts", component: <UiAlert /> },
  { path: "/ui-buttons", component: <UiButtons /> },
  { path: "/ui-cards", component: <UiCards /> },
  { path: "/ui-carousel", component: <UiCarousel /> },
  { path: "/ui-colors", component: <UiColors /> },
  { path: "/ui-dropdowns", component: <UiDropdown /> },
  { path: "/ui-offcanvas", component: <UiOffCanvas /> },
  { path: "/ui-general", component: <UiGeneral /> },
  { path: "/ui-grid", component: <UiGrid /> },
  { path: "/ui-images", component: <UiImages /> },
  { path: "/ui-lightbox", component: <UiLightbox /> },
  { path: "/ui-modals", component: <UiModal /> },
  { path: "/ui-progressbars", component: <UiProgressbar /> },
  { path: "/ui-tabs-accordions", component: <UiTabsAccordions /> },
  { path: "/ui-typography", component: <UiTypography /> },
  { path: "/ui-video", component: <UiVideo /> },
  { path: "/ui-session-timeout", component: <UiSessionTimeout /> },
  { path: "/ui-rating", component: <UiRating /> },
  { path: "/ui-rangeslider", component: <UiRangeSlider /> },
  { path: "/ui-notifications", component: <UiNotifications /> },
  { path: "/ui-placeholders", component: <UiPlaceholders /> },
  { path: "/ui-toasts", component: <UiToasts /> },
  { path: "/ui-utilities", component: <UiUtilities /> },

  //   //Utility
  { path: "/pages-starter", component: <PagesStarter /> },
  { path: "/pages-timeline", component: <PagesTimeline /> },
  { path: "/pages-faqs", component: <PagesFaqs /> },
  { path: "/pages-pricing", component: <PagesPricing /> },

  //   // this route should be at the end of all other routes
  //   // eslint-disable-next-line react/display-name
  { path: "/", exact: true, component: <Navigate to="/dashboard" /> },
];

const publicRoutes = [
  { path: "/logout", component: <Logout /> },
  { path: "/login", component: <Login /> },
  { path: "/forgot-password", component: <ForgetPwd /> },
  { path: "/register", component: <Register /> },

  { path: "/pages-maintenance", component: <PagesMaintenance /> },
  { path: "/pages-comingsoon", component: <PagesComingsoon /> },
  { path: "/pages-404", component: <Pages404 /> },
  { path: "/pages-500", component: <Pages500 /> },
  { path: "/crypto-ico-landing", component: <CryptoIcoLanding /> },

  //   // Authentication Inner
  { path: "/pages-login", component: <Login1 /> },
  { path: "/pages-login-2", component: <Login2 /> },
  { path: "/pages-register", component: <Register1 /> },
  { path: "/pages-register-2", component: <Register2 /> },
  { path: "/page-recoverpw", component: <Recoverpw /> },
  { path: "/page-recoverpw-2", component: <Recoverpw2 /> },
  { path: "/pages-forgot-pwd", component: <ForgetPwd1 /> },
  { path: "/pages-forgot-pwd-2", component: <ForgetPwd2 /> },
  { path: "/auth-lock-screen", component: <LockScreen /> },
  { path: "/auth-lock-screen-2", component: <LockScreen2 /> },
  { path: "/page-confirm-mail", component: <ConfirmMail /> },
  { path: "/page-confirm-mail-2", component: <ConfirmMail2 /> },
  { path: "/auth-email-verification", component: <EmailVerification /> },
  { path: "/auth-email-verification-2", component: <EmailVerification2 /> },
  { path: "/auth-two-step-verification", component: <TwostepVerification /> },
  {
    path: "/auth-two-step-verification-2",
    component: <TwostepVerification2 />,
  },
];

// export { authProtectedRoutes, publicRoutes };
export { authProtectedRoutes, publicRoutes }
