# Changelog

All notable changes to this template will be documented in this file.

## Note

- We have updated Vuexy HTML (Bootstrap 5) with new structure and documentation. Older Bootstrap 5 version is deprecated. Upcoming Vuexy Laravel and .NET Core will use the same new structure.
- Jetstream support is enabled for HTML + Laravel version only. It will not work with Vue + Laravel version.

## [9.4.1] - 2023-01-18

## **HTML, Laravel & .Net Core**

### Updated

- Full Calendar version updated to latest
- Email app, select all functionality updated

### Fixed

- Full Calendar production bugfix
- Quill Editor direction plugin bugfix

## [9.4.0] - 2023-01-10

## **React**

### Added

- Added Next.js version based on MUI(initial release)

### Deprecated

- Vite version is now deprecated but will be supported for 6 months.

## **Laravel**

#### Updated

- Updated structure Re-written from the ground up
- Updated documentation
- Updated all the dependencies to their latest version

## **HTML & .Net Core**

### Updated

- Updated Datatable Library
- Updated Full Calendar Library

### Removed

- Datatables libs files as loading from single file
- jszip libs JS file as including with datatables
- pdfmake libs JS file as including with datatables

### Fixed

- Datatable Excel export
- Datatable button UI as update
- Minor bugfixes

## **Angular**

### Deprecated

- Angular version is deprecated due to less community support for Bootstrap and their libraries.

## [9.3.0] - 2022-12-07

## **ASP.NET Core**

### Added

- Initial release with full-version & starter-kit
- ASP.NET Core 6
- Razor Pages

## **VueJs + Laravel**

### Added

- Added Vue 3 support
- Added Vuetify 3 support
- Added TypeScript version (Vue 3 only)

### Deprecated

- Vue2 version is now deprecated

## **VueJs**

### Added

- Added appbar global search
- Added user profile page
- Added progress component

### Refactored

- Used new alias `@images`  for images import
- Used new alias `@styles`  for style import
- Renamed `card-analytics`  to  `card-widgets`

### Updated

- Updated Vuetify to `v3.0.3`

## **HTML**

### Updated

- Updated Bootstrap `5.2.3`
- Updated documentation

### Fixed

- Minor bugfixes & improvements

## **React**

### Removed

- React Bootstrap 4 version is now removed

## [9.2.0] - 2022-11-29


### **HTML**

#### Updated

- Updated structure Re-written from the ground up
- Updated documentation
- Updated all the dependencies to their latest version

### **Figma**

#### Updated

- Atomic design structure
- Drag & Drop dashboard builder
- One-click light & dark view
- Design & Dev consistency

### **Sketch**

#### Deprecated

- Deprecated sketch design, it will be removed from future updates.

## [9.1.0] - 2022-11-25

### **React**

#### Updated

- Updated react package from CRA to Vite
- Updated all the dependencies to its latest version

## [9.0.1] - 2022-11-23

### **VueJS**

#### Updated

- Lazy loaded default layout navigation menus for speed optimization
- Texts is now more readable
- Shadows enhanced

#### Fixed

- Update logo color according to theme’s primary color
- Vertical nav wasn’t using theme’s primary color if it’s semi-dark

## [9.0.0] - 2022-11-16

### **VueJS**

#### Added

- Vue 3 version added
- Vuetify 3 support added
- TypeScript version added(Vue 3 only)

#### Deprecated

- vuexy-bootstrapvue-vue2 version deprecated and will be remove after 6 months of support

## [8.2.2] - 2022-09-09

### **HTML + Bootstrap 5**

#### Added

- Added sass (dart sass)

#### Updated

- Updated gulp-sass
- Updated package.json
- Updated gulp tasks

#### Fixed

- Fixed scss files as required for latest sass

## [8.2.1] - 2022-07-25

### **Angular**

#### Updated

- Updated to Angular 14+
- Updated Dependencies

#### Fixed

- Fixed division error due to DartSass2
- Other minor bug fixes

## [8.2.0] - 2022-05-26

### **React**

#### Added

- Added Kanban App
- Added new articles in documentation

#### Updated

- Updated React to V18
- Updated Documentation
- Updated Dependencies to latest version
- Updated Router Structure to fix lifecycle side effects

#### Fixed

- Fixed ACL sub to sub group not visible bug
- Fixed z-index bug in react-select

#### Removed

- Router Transition

## [8.1.0] - 2022-03-25

### **React**

#### Added

- Added React router 6 support
- Added React Hot Toast
- Added Register With Multi-steps Page

#### Updated

- Updated Core structure to accommodate react router 6 update
- Updated router, app and index files
- Updated Horizontal Menu to use Popper for better control
  
#### Removed

- Removed React Router 5
- Removed Toastr

### **HTML + Laravel**

#### Added

- Browsersync Support

#### Updated

- Updated Laravel Framework to v9.0
- Updated Installation Process

#### Fixed

- Fixed autoload compatibility issue in Helper.php
- Fixed Apexchart's Card overlap issue
- Fixed File Input validation issue in Dark Mode

### **Vue + Laravel**

#### Added

- Browsersync Support

#### Updated

- Updated Laravel Framework to v9.0

## [8.0.0] - 2021-12-01

### **React**

#### Added

- Roles & Permission app
- Account Settings
- Useful modal examples Added
  - Share project
  - Add/Edit New Card
  - Pricing
  - Refer & Earn
  - Add New Address
  - Create App
  - Two factor authentication
  - Edit User
- Create Account - Register - Multisteps modal
- Two steps Authentication pages
- API key page
- Licenses Page
- Verify Email Pages
- Offcanvas Component Page
- i18next for translation
- redux-toolkit for store
- react-dropzone for file upload
- RC Input Number for number input

#### Updated

- Updated Bootstrap to V5.1.0
- Updated Reactstrap to V9.0.1
- Updated Third-party plugins to Stable versions
- Updated eslint
- Updated Account Settings Page
- Updated Users App
  
#### Removed

- Removed Carousel
- Removed Leaflet Maps
- Removed Reactstrap Validation
- Removed react-intl
- Removed redux
- Removed uppy
- Removed custom number input

### **Angular**

#### Updated

- Update Angular version 13 🎉
- Update NgBootstrap 11.0.0-rc.0
- Update Bootstrap 4.6.1

#### Fixed

- Form repeater container layout
- Set NgSelect close icon on right side

## [7.4.1] - 2021-11-03

### **React**

#### Added

- Added Craco to override webpack config, RTL compatibility & Alias support
  
#### Removed

- React App Rewired & It's dependencies due to incompatibility with Node 16.x version

## [7.4.0] - 2021-09-14

### **HTML Bootstrap 5 + Laravel**

#### Added

- Jetstream Authentication Support - [Installation Docs](https://pixinvent.com/demo/vuexy-html-bootstrap-admin-template/documentation/documentation-laravel-jetstream.html)

#### Updated

- Renamed sass folder to scss
- Updated Navbar for Jetstream Compatibility
  
#### Fixed

- Selector renaming issue solved in dark theme(RTL).

#### Removed

Removed Default Auth (Laravel UI)

### **Vue + Laravel**

#### Updated

- Updated Folder Structure [Doc](https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/documentation/guide/laravel-integration/folder-structure.html)

## [7.3.0] - 2021-08-26

### **HTML + Bootstrap 5 & HTML Bootstrap 5 + Laravel**

#### Added

- Roles & Permission app
- User view pages - User app
- Account Settings
- Custom Options with radios & checkboxes
- Useful modal examples Added
  - Share project
  - Add/Edit New Card
  - Pricing
  - Refer & Earn
  - Add New Address
  - Create App
  - Two factor authentication
  - Edit User
- Create Account - Register - Multisteps modal
- Verify email pages
- Two steps Authentication pages
- API key page
- Licenses Page
- .btn-pinned class added to pin / fix element

#### Updated

- Updated to Bootstrap 5.1.0
- User list page - User app
- DataTables responsive library files updated with template js
- Updated Documentation

#### Fixed

- Horizontal responsive console error fixed
- Auth page ui fixed
- Auth page responsive issue fixed
- Bootstrap validation fixed for Datepicker

#### Removed

- User Edit page removed
- Bootstrap Tables - Table hover animation example removed

### **Email Templates**

#### Fixed

- Background color issue fixed for Gmail & similar mail clients
- Other minor bugfixes

### **Design Files**

#### Added

- Roles & Permission App
- User view pages - User App
- Account Settings
- Custom Options
- Useful modal examples Added
  - Share project
  - Add/Edit New Card
  - Pricing
  - Refer & Earn
  - Add New Address
  - Create App
  - Two factor authentication
  - Edit User
- Create Account - Register - Multisteps modal
- Verify email pages
- Two steps Authentication pages
- API key page

## [7.2.0] - 2021-07-27

### **HTML + Bootstrap 5**

#### Fixed

- Invoice print style fixed
- Horizontal menu dropdown position issue fixed

### **HTML + Bootstrap 4**

#### Updated

- Custom file input validation UI updated
- Updated shepherd JS vendor files to solve tour issue

#### Fixed

- Navbar theme toggler button issue solved
- Invoice-list's table UI fixed

### **HTML + Bootstrap 4 & 5**

#### Removed

- Disabled number input border-color removed

#### Fixed

- E-commerce Shop overlay sidebar issue solved

### **HTML Bootstrap 5 + Laravel**

- Initial releases

### **HTML Bootstrap 4 + Laravel**

#### Updated

- Laravel Framework Updated to v8.40
- Laravel Mix Updated to 6.0.6
- Box layout is now the default layout.
- Custom file input validation UI updated
- Updated shepherd JS vendor files to solve tour issue
- RTL css moved into separate folder
- Updated multiple packages to latest version
- Updated documentation
  - Laravel Installation
  - Added "How to use a custom font?" FAQ

#### Fixed

- Login Remember me token issue solved.
- Navbar theme toggler button issue solved
- Invoice-list's table UI fixed
- E-commerce Shop overlay sidebar issue solved
- Small Screen sidebar visible on page load issue solved.

## [7.1.2] - 2021-07-14

### **HTML + Bootstrap 5**

#### Fixed

- Offcanvas variable issue fix
- Navbar Dropdown UI in mobile updated
- toastr slide-up fixed
- Authentication & Misc pages UI for small screen updated

### **HTML + Bootstrap 4**

#### Fixed

- Tour issue fixed
- toastr slide-up fixed
- Authentication & Misc pages UI for small screen updated
- Dark page Validation UI Fixed
- Dark layout - layout style switch issue fixed

## [7.1.1] - 2021-07-07

### **Angular**

#### Updated

- Updated unique BehaviorSubject
- Updated documentation for the following FAQs.
  - [How to make API call?](https://pixinvent.com/demo/vuexy-angular-admin-dashboard-template/documentation/articles/how-to-make-api-call.html)
  - [How can I use fullscreen layout?](https://pixinvent.com/demo/vuexy-angular-admin-dashboard-template/documentation/articles/how-can-i-have-fullscreen-layout.html)
  - [I have integrated toastr component in my project/starter-kit, why is display bottom-left behind the menu?](https://pixinvent.com/demo/vuexy-angular-admin-dashboard-template/documentation/faq/#i-have-integrated-toastr-component-in-my-project-starter-kit-why-is-display-bottom-left-behind-the-menu)

#### Fixed

- Router Based Multiple API call issue
- Starter kit navbar console error
- Other minor bugs and fixes

## [7.1.0] - 2021-06-29

### **React**

#### Updated

- Updated layouts for users to override easily i.e. Navbar, Footer, Menu etc..
- Updated Documentation

#### Fixed

- Todo App Tag Update Bug Fix

#### Removed

- Removed deprecated react version

## [7.0.0] - 2021-06-21

### **HTML + Bootstrap 5**

- Initial releases

### **HTML + Bootstrap 4**

#### Updated

- Updated default Full layout to Container Layout. You can also change it to full-width if you want.
- Updated major third party libs to latest
- Updated Documentation

#### Fixed

- Other minor bug fixes
- hamburger menu fix in layout without menu

### **Angular**

#### Added

- Added Angular 12 support
- Now update default language using app-config with LocalStorage support.

#### Updated

- Updated role bases access support for menu, now you can add role based access for menu item, collapsible and section.
- Updated default layout to container instead of full-width, you can still change it to full-width if you want.
- Updated major third party libs to latest
- Updated bootstrap 4.6.0
- Updated starter-kit accordingly
- Updated Documentation:
  - Updated role based access for menu collapsible and section.
  - FAQ: How to provide role based access to component/element?

#### Fixed

- Other minor bug fixes

## [6.6.1] - 2021-06-09

### **Vue, Vue + Laravel, Angular, Rect, HTML, HTML+Laravel**

#### Fixed

- Full calendar chrome issue (https://github.com/fullcalendar/fullcalendar/issues/6358)

## [6.6.0] - 2021-04-12

### **Angular**

#### Added

- Routing animation with app config support

#### Updated

- Core Card with call back & actions event support
- TouchSpin supported with minimum value now
- Todo: New todo will be added first on the todo list
- Invoice & User list filters are functional now
- Updated documentation with new FAQs

#### Fixed

- Collapsed menu layout gets expanded in few pages
- eCommerce Add to Cart item sometimes get remove from the checkout
- Fixed chat unseen message issue
- File upload with upload image support
- Other minor bugs

## [6.5.0] - 2021-03-09

### **Angular**

#### Added

- Angular version Initial Release

## [6.4.0] - 2021-02-27

### **HTML, HTML + Laravel**

#### Added

- Added Laravel sanctum documentation
- Added Laravel Sail(Docker) documentation
- Added HTML Semi dark layout documentation

#### Updated

- Updated Bootstrap to 4.6.0
- Updated Laravel framework to latest
- Updated Laravel folder structure according to the latest one
- Updated Laravel passport documentation

#### Fixed

- Fixed Toastr RTL UI bug
- Fixed Modal-xl style
- Fixed quill editor active tools color
- Fixed bordered layout issue on chat sidebar
- Fixed Mac & Linux OS app scrolling issue
- Fixed Mac(Safari) console error
- Fixed Hamburger menu icon on Laravel starter kit
- Fixed Laravel footer script for dynamic year
- Fixed Laravel horizontal menu - hard coded class issue
- Fixed Laravel menu files documentation and support links target
- Fixed minor HTML bugs

## [6.3.0] - 2021-02-01

### **React**

#### Added

- All-new design based on Ul/UX principles
- Based on React 17.x
- Based on Hooks & Functional Components
- Built with Reactstrap framework
- Extendable Layouts
- New Bordered & Dark layout
- New eCommerce Dashboard
- New widgets & cards (with new gamification cards, analytics cards)
- Calendar App with Full Calendar
- Invoice App
- Authentication Pages (2 Types with SVG illustration)
- Tables & Charts with real-life usage examples
- Pricing Page
- Blog Pages (List, Detail, Edit Pages)
- Added layout options
  - Boxed Layout
  - Without Menu
- Rating Component
- Leaflet Maps
- SweetAlert
- Toastify
- Slider
- General Error Page
- SVG and Font-icons support
- Well documented

#### Updated

- JWT Auth
- Updated all libs to the latest version
- Improved components & extensions
- Improved widgets & cards (with new gamification cards, analytics cards)
- ACL (Updated to CASL Library)
- Autosuggest
- Updated Todo App
- Updated Users App
- Updated Authentication Pages (2 Types with SVG illustration)
- Updated Account Setting
- Updated FAQs
- Updated Knowledge Base
- Improved Tables with real-life usage examples
- Improved Forms with new components
- Improved Charts
- Updated Misc Pages
- Improved Documentation for better understanding and usage

#### Deprecated

- Old version with Class based components (We are planning to remove this version from future updates)

#### Removed

- AgGrid
- Firebase, Auth0
- Removed content pages and moved to documentation
- Tree Component
- Data list
- Google Maps
- Search Page
- Lock Screen Page
- 500 Page

## [6.2.0] - 2021-01-11

### **Vue, Vue + Laravel**

#### Added

- Laravel Passport Support

#### Updated

- FAQ page is filterable via search and category
- More Detailed Docs

#### Fixed

- Fixed @core folder difference in Starter-kit and Full Package
- Starter-kit issues resolved
- Fixed Vertical Menu scroll issue in mobile
- IPhone specific issue resolved - Cart Dropdown Stretched Image & Window zoom on input focus
- Router animation horizontal scrollbar issue

## [6.1.0] - 2021-01-01

### **Vue, Vue + Laravel**

#### Added

- All-new design based on Ul/UX principles
- Built with BootstrapVue framework
- Composition API support
- Extendable Layouts
- New Bordered & Dark layout
- New eCommerce Dashboard
- Added support for Laravel 8
- New widgets & cards (with new gamification cards, analytics cards)
- Calendar App
- Invoice App
- Authentication Pages (2 Types with SVG illustration)
- Tables & Charts with real-life usage examples
- Pricing Page
- Blog Pages (List, Detail, Edit Pages)
- Added layout options
  - Box Layout
  - Without Menu
- Rating Component
- Leaflet Maps
- SweetAlert
- Toastification
- Slider
- General Error Page
- SVG and Font-icons support
- Well documented BootstrapVue version documentation

#### Updated

- Update Laravel 8
- JWT Auth
- Updated all libs to the latest version
- Improved components & extensions
- Improved widgets & cards (with new gamification cards, analytics cards)
- ACL (Updated to CASL Library)
- Autosuggest (Updated to vue-autosuggest Library)
- Updated Todo App
- Updated Users App
- Updated Authentication Pages (2 Types with SVG illustration)
- Updated Account Setting
- Updated FAQs
- Updated Knowledge Base
- Improved Tables with real-life usage examples
- Improved Forms with new components
- Improved Charts
- Updated Misc Pages
- Improved Documentation for better understanding and usage
- VueJS Vuesax version documentation [URL](https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/documentation-vuesax-version/) changed

#### Deprecated

- Vuexy Vuesax framework support (We are planning to remove this version from future updates)

#### Removed

- AgGrid
- Firebase, Auth0 & Algolia
- Removed content pages and moved to documentation
- Tree Component
- Data list
- Google Maps
- Search Page
- Lock Screen Page
- 500 Page

### **HTML, HTML + Laravel**

#### Added

- Added semi-dark layout

#### Updated

- Updated minor UI

#### Fixed

- Menu hover icons issue
- Fixed select border and file upload border height

## [6.0.0] - 2020-11-28

### **HTML, HTML + Laravel**

#### Added

- All-new design based on Ul/UX principles
- New Bordered & Dark layout
- New eCommerce Dashboard
- Invoice App
- Kanban App (Only in HTML & HTML + Laravel)
- File Manager App (Only in HTML & HTML + Laravel)
- Pricing Page
- Blog Pages (List, Detail, Edit Pages)
- Added layout options
  - Compact menu
  - Box Layout
  - Without Menu
  - Empty Layout
  - Blank Layout
- Tree Component
- Rating Component
- Leaflet Maps
- SVG and Font-icons support

#### Updated

- Updated Bootstrap to v4.5.3
- Update Laravel 8
- Updated Laravel UI, Passport to latest versions
- Updated all libs to the latest version
- Improved components & extensions
- Improved widgets & cards (with new gamification cards, analytics cards)
- Updated Calendar App
- Updated Todo App
- Updated Users App
- Updated Authentication Pages (2 Types with SVG illustration)
- Updated Account Setting
- Updated FAQs
- Updated Knowledge Base
- Improved Tables with real-life usage examples
- Improved Forms with new components
- Improved Charts
- Updated Misc Pages
- Improved Documentation for better understanding and usage

#### Deprecated

- AgGrid (Will be removed in future updates)

#### Removed

- Removed content pages and moved to documentation
- Data list
- Chips component
- Echarts
- Google Maps

### **Design Files**

#### Added

- Added Sketch & Figma full design files with the atomic design system.
  - Dark & Light design system
  - Responsive support
  - 2 Dashboard & 6 Layouts
  - 9 Apps & 30+ Pages
  - All UI & Form Elements, Widgets, Charts

### **Email Templates**

#### Added

- Added ready to use email templates
  - Welcome
  - Verify Account
  - Reset Password
  - Deactivate Account
  - Invoice
  - Promotional

## [5.4.0] - 2020-05-08

### **HTML, HTML + Laravel**

#### Fixed

- Scroll to active on mobile

### **VueJS, VueJS + Laravel**

#### Added

- Breadcrumb i18n support
- Laravel 7 migration guide added to docs
- Main Layout now supports modifying Menu Items from any route component

#### Updated

- Firebase updated to latest
- Vuexy now uses Vuesax package forked repo

#### Fixed

- vue-select extension theme color updation
- Data list app freeze on browser back when sidebar is open
- ACL support to navGroup(hide group if all child are hidden)

### **React**

#### Fixed

- Sweet Alert in dark layout

### **Design Files**

#### Removed

- Removed complementary design files from the package

## [5.3.0] - 2020-04-04

### **VueJS + Laravel, HTML + Laravel**

#### Updated

- Updated laravel 7 to all full version and starter-kit

### **React**

#### Fixed

- Firebase issue during npm install

## [5.2.0] - 2020-02-18

### **React**

#### Aaded

- Data List
- React DataTable Component
- Light Badges
- Drag and Drop Functionality in Bookmarks
- Import-Export Excel & CSV Files

#### Fixed

- Firebase Namespace Error
- Memory Leak Error

#### Updated

- Wizard Functionality
- React Big Calendar

## [5.1.0] - 2020-02-12

### **VueJS, VueJS + Laravel, HTML, HTML + Laravel**

#### Updated

- Strict linting added to improve code quality

## [5.0.0] - 2020-02-06

### **React**

#### Added

- React full version Initial Release

## [4.2.0] - 2020-01-06

### **VueJS, VueJS + Laravel, HTML, HTML + Laravel**

#### Fixed

- Fixed menu navigation issue on iOS update

### **HTML, HTML + Laravel**

#### Updated

- Updated HTML - Laravel version base structure and configuration options

## [4.1.0] - 2019-11-14

### **VueJS, VueJS + Laravel, HTML, HTML + Laravel**

#### Added

- RTL compatibility for all versions
- User App
- User List
- User Add / Edit
- User View
- Account Settings Page
- Product Detail Page
- Statistics Cards

#### Updated

- Laravel core structure
- Global Search UI include pages, files and contacts group filter
- DataList UI Updates
- Print Ready Invoice Page

#### Fixed

- Reported bugs and minor design fix

### **HTML, HTML + Laravel**

#### Added

- Swiper Component

## [4.0.0] - 2019-10-03

- Vuesax is now Vuexy :)

### **VueJS + Laravel**

#### Added

- VueJS + Laravel full version Initial Release

### **HTML + Laravel**

#### Added

- HTML + Laravel full version Initial Release

### **VueJS**

#### Added

- Horizontal Menu with light & dark layout
- JWT Authentication
- API Ready
- Import-Export
- Full Laravel Version

#### Fixed

- UI updates
- Bug Fixes

#### Updated

- DataList now support CRUD
- Major structural changes, Please check migration guide (v3 - v4)

### **HTML**

#### Added

- Horizontal Menu with light & dark layout
- AG Grid
- Media Player

#### Updated

- Updated Vendors/Libs
- Updated to Gulp4

#### Fixed

- Minor Bugs

## [3.3.0] - 2019-07-18

### **VueJS**

#### Added

- SSR table

#### Fixed

- VxTooltip fix
- Sidebar active link fix

#### Updated

- Functional component for performance
- All Libraries updated to its latest
- UI improvements

#### Removed

- Deprecated calendar removed

### **HTML**

#### Added

- User Settings Page
- Full Calender with Timegrid and custom buttons

#### Fixed

- Email application - Form Reset on Compose Click
- Accordion Component - clickable on accordion heading section
- Set default badge color
- Custom Radio design fixed
- Main Menu Sub-item Icon Fixed

#### Updated

- Updated Documentation

## [3.2.0] - 2019-06-13

### **HTML + Laravel**

#### Added

- HTML + Laravel starter-kit version Initial Release

### **VueJS**

#### Added

- VueJS cards actions events

#### Fixed

- VueJS Table was not showing initial data using api
- Responsiveness issues

## [3.1.0] - 2019-06-04

### **VueJS**

#### Added

- New Date Time picker
- New classes in tailwind v1.x

#### Updated

- vue-select component's UI improved
- Search list UI for navbar type improved
- Authentication and comning-soon pages' UI improved for small devices

#### Fixed

- Fixed navbar-type and footer-type selection in customizer
- Fixed vxAutoSuggest bug
- Fixed: Chat app update about/status

#### Removed

- API table of component is removed from component demo pages

## [3.0.0] - 2019-05-27

### **HTML**

#### Added

- HTML version Initial Release

### **VueJS**

#### Added

- HTML added
- Swipe out menu
- agGrid table
- Form Input Group
- Button group
- New calendar added
- Auto-suggest
- Tree component
- Star ratings

#### Updated

- All packages updated to latest
- Tailwind updated to latest v1.x
- Dark layout enhanced
- More customizable cards
- UI improved

#### Fixed

- Firebase register bug fixed
- Vulnerabilities in npm packages

#### Removed

- Old Calendar

## [2.1.0] - 2019-04-18

### **Laravel**

#### Added

- Laravel Starter Kit version Initial Release

### **VueJS**

#### Fixed

- Bookmark Autosuggest Component Bug
- E-Commerce Sidebar Filter Reset Bug
- Laravel Starter Kit

#### Fixed

- Chats now start from bottom so one doesn't have to scroll all the way to the end of the chat

## [2.0.0] - 2019-04-09

### **VueJS + Laravel**

#### Added

- Vuexy Laravel Starter Kit version Initial Release

### **VueJS**

#### Added

- Auth 0 Integration
- Firebase authentication + Social Logins
- E-Commerce App with shop, wishlist, checkout pages
- Algolia search and filter demo integrated with E-Commerce app
- Data List with firestore integration using axios
  - List View
  - Thumb List View
- App Tour
- Drag & Drop Bookmarks to re-arrange
- Carousel (Image Slider)
- Clipboard (Copy to clipboard)
- Context Menu
- Scroll to top
- Not authorised Page
- Access Control (ACL)
- i18n Page

#### Updated

- Updated VueJS to latest version
- Updated Vuexy component framework to latest version
- Upadated all the npm dependencies to its latest version
- Updated drag & drop plugin
- Updated dark layout background color and text colors
- Code Toggler to work well with light & dark both layouts

#### Fixed

- Fixed fuzzy search
- Fixed email app bug
- Large message in chat
- z-index issues

## [1.1.0] - 2019-02-27

### **VueJS**

#### Added

- Added Semi Dark Layout
- Added Starter Kit
- Added App Loader
- Added Sketch, Adobe XD & Figma files
- Added 404 page for Unknown URLs

#### Updated

- Updated Folder Structure
- Updated Store
- Updated Documentation

#### Fixed

- Fixed Minor Bugs

## [1.0.1] - 2019-02-18

### **VueJS**

#### Updated

- Customizer can be enabled / disabled from themeconfig

#### Fixed

- Customizer can be enabled / disabled from themeconfig
- Fixed search list of navbar
- Fixed public path in vue config
- Fixed date alignment in chat app
- Fixed Sidebar page sidebar style
- Select component list font size increased

## [1.0.0] - 2019-02-16

### **VueJS**

#### Added

- VueJS version Initial Release
