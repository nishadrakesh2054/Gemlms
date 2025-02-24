import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePageSix from "./pages/HomePageSix";
import AddUserPage from "./pages/AddUserPage";
import AlertPage from "./pages/AlertPage";
import AssignRolePage from "./pages/AssignRolePage";
import AvatarPage from "./pages/AvatarPage";
import BadgesPage from "./pages/BadgesPage";
import ButtonPage from "./pages/ButtonPage";
import CalendarMainPage from "./pages/CalendarMainPage";
import CardPage from "./pages/CardPage";
import CarouselPage from "./pages/CarouselPage";
import ChatEmptyPage from "./pages/ChatEmptyPage";

import ChatProfilePage from "./pages/ChatProfilePage";
import CodeGeneratorNewPage from "./pages/CodeGeneratorNewPage";

import ColorsPage from "./pages/ColorsPage";
import ColumnChartPage from "./pages/ColumnChartPage";

import DropdownPage from "./pages/DropdownPage";
import ErrorPage from "./pages/ErrorPage";

import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import FormLayoutPage from "./pages/FormLayoutPage";
import FormValidationPage from "./pages/FormValidationPage";
import FormPage from "./pages/FormPage";

import ImageUploadPage from "./pages/ImageUploadPage";
import InvoiceAddPage from "./pages/InvoiceAddPage";
import InvoiceEditPage from "./pages/InvoiceEditPage";
import InvoiceListPage from "./pages/InvoiceListPage";
import InvoicePreviewPage from "./pages/InvoicePreviewPage";
import LineChartPage from "./pages/LineChartPage";
import ListPage from "./pages/ListPage";
import PaginationPage from "./pages/PaginationPage";
import PieChartPage from "./pages/PieChartPage";
import ProgressPage from "./pages/ProgressPage";
import RadioPage from "./pages/RadioPage";
import RoleAccessPage from "./pages/RoleAccessPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import StarRatingPage from "./pages/StarRatingPage";
import StarredPage from "./pages/StarredPage";
import SwitchPage from "./pages/SwitchPage";
import TableBasicPage from "./pages/TableBasicPage";
import TableDataPage from "./pages/TableDataPage";
import TabsPage from "./pages/TabsPage";
import TagsPage from "./pages/TagsPage";
import TooltipPage from "./pages/TooltipPage";
import TypographyPage from "./pages/TypographyPage";
import UsersGridPage from "./pages/UsersGridPage";
import UsersListPage from "./pages/UsersListPage";
import ViewDetailsPage from "./pages/ViewDetailsPage";
import VideosPage from "./pages/VideosPage";
import ViewProfilePage from "./pages/ViewProfilePage";
import WidgetsPage from "./pages/WidgetsPage";
import WizardPage from "./pages/WizardPage";
import RouteScrollToTop from "./helper/RouteScrollToTop";
import TextGeneratorNewPage from "./pages/TextGeneratorNewPage";

import HomePageNine from "./pages/HomePageNine";

import BlogPage from "./pages/BlogPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import AddBlogPage from "./pages/AddBlogPage";
import HomePageTwo from "./pages/HomePageTwo";
import Catalogue from "./pages/LMS/Catalogue";
import BookDetails from "./pages/LMS/BookDetails";
import EditBook from "./pages/LMS/EditBook";

function App() {
  return (
    <BrowserRouter>
      <RouteScrollToTop />
      <Routes>



        {/* lms syatem design start */}
        <Route exact path="/books" element={<Catalogue/>} />
        <Route exact path="/books/:id" element={<BookDetails/>} />
        <Route exact path="/books/edit/:id" element={<EditBook/>} />
        {/* lms syatem design end */}
        <Route exact path="/lms" element={<HomePageSix />} />
        <Route exact path="/index-9" element={<HomePageNine />} />
        <Route exact path="/sms" element={<HomePageTwo />} />
        {/* SL */}
        <Route exact path="/add-user" element={<AddUserPage />} />
        <Route exact path="/alert" element={<AlertPage />} />
        <Route exact path="/assign-role" element={<AssignRolePage />} />
        <Route exact path="/avatar" element={<AvatarPage />} />
        <Route exact path="/badges" element={<BadgesPage />} />
        <Route exact path="/button" element={<ButtonPage />} />
        <Route exact path="/calendar-main" element={<CalendarMainPage />} />
        <Route exact path="/calendar" element={<CalendarMainPage />} />
        <Route exact path="/card" element={<CardPage />} />
        <Route exact path="/carousel" element={<CarouselPage />} />
        <Route exact path="/chat-empty" element={<ChatEmptyPage />} />
        <Route exact path="/chat-profile" element={<ChatProfilePage />} />
        <Route
          exact
          path="/code-generator-new"
          element={<CodeGeneratorNewPage />}
        />
        <Route exact path="/colors" element={<ColorsPage />} />
        <Route exact path="/column-chart" element={<ColumnChartPage />} />
        <Route exact path="/dropdown" element={<DropdownPage />} />
        <Route exact path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route exact path="/form-layout" element={<FormLayoutPage />} />
        <Route exact path="/form-validation" element={<FormValidationPage />} />
        <Route exact path="/form" element={<FormPage />} />
        <Route exact path="/blog" element={<BlogPage />} />
        <Route exact path="/blog-details" element={<BlogDetailsPage />} />
        <Route exact path="/add-blog" element={<AddBlogPage />} />
        <Route exact path="/image-upload" element={<ImageUploadPage />} />
        <Route exact path="/invoice-add" element={<InvoiceAddPage />} />
        <Route exact path="/invoice-edit" element={<InvoiceEditPage />} />
        <Route exact path="/invoice-list" element={<InvoiceListPage />} />
        <Route exact path="/invoice-preview" element={<InvoicePreviewPage />} />
        <Route exact path="/line-chart" element={<LineChartPage />} />
        <Route exact path="/list" element={<ListPage />} />
        <Route exact path="/pagination" element={<PaginationPage />} />
        <Route exact path="/pie-chart" element={<PieChartPage />} />
        <Route exact path="/progress" element={<ProgressPage />} />
        <Route exact path="/radio" element={<RadioPage />} />
        <Route exact path="/role-access" element={<RoleAccessPage />} />
        <Route exact path="/sign-in" element={<SignInPage />} />
        <Route exact path="/sign-up" element={<SignUpPage />} />
        <Route exact path="/star-rating" element={<StarRatingPage />} />
        <Route exact path="/starred" element={<StarredPage />} />
        <Route exact path="/switch" element={<SwitchPage />} />
        <Route exact path="/table-basic" element={<TableBasicPage />} />
        <Route exact path="/table-data" element={<TableDataPage />} />
        <Route exact path="/tabs" element={<TabsPage />} />
        <Route exact path="/tags" element={<TagsPage />} />
        <Route
          exact
          path="/text-generator-new"
          element={<TextGeneratorNewPage />}
        />
        <Route exact path="/tooltip" element={<TooltipPage />} />
        <Route exact path="/typography" element={<TypographyPage />} />
        <Route exact path="/users-grid" element={<UsersGridPage />} />
        <Route exact path="/users-list" element={<UsersListPage />} />
        <Route exact path="/view-details" element={<ViewDetailsPage />} />
        <Route exact path="/videos" element={<VideosPage />} />
        <Route exact path="/view-profile" element={<ViewProfilePage />} />
        <Route exact path="/widgets" element={<WidgetsPage />} />
        <Route exact path="/wizard" element={<WizardPage />} />

        <Route exact path="*" element={<ErrorPage />} />





      </Routes>
    </BrowserRouter>
  );
}

export default App;
