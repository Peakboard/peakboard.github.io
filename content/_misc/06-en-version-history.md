---
layout: article
title: Version History
menu_title: Version History
description: Version History
lang: en
ref: misc-06
---

## 1.0.35.6 (05.02.2019)

* Hotfix for wrong translations

## 1.0.35.6 (05.02.2019)

* Language selection and German language is now available
* Separation of variables, lists and data sources
* New data source: Google Spreadsheet
* New folder structure for variables, lists and scripts
* Various time formats added
* New date functions with .NET formatting
* Introduction of different drawing levels
* Possibility to change levels by drag and drop in the Screen section
* Possibility to step an element up or down a level
* Fix for Undo/Redo 
* Fix for the time server with old visualizations
* Fix for displaying a Live Tile Box
* Fix for display when using a resolution of 1280*720
* Fix for read errors in the S7 data source
* Fix for the input of RGB values
* Fix for deploy to multiple boxes
* Fix for Google Docs Control

## 1.0.34.7 (18.01.2019)

* Hotfix for validating data in the opc ua data dialog

## 1.0.34.3 (14.01.2019)

* The selection of several elements can be terminated via ESC
* Added additional formatting points to arrange elements horizontally and vertically
* Fix for the Siemens S7 data connection
* Fix for Undo/Redo
* Fix for moving multiple objects
* Fix for Microsoft One Drive access rights

## 1.0.33.7 (19.12.2018)

* OPC UA datasource: The certificate handling for server certificates was reworked and now behaves as the specification says

## 1.0.33.0 (17.12.2018)

* The fixed property has been renamed to locked
* The Lock, Hide and Group functions can be used by right-clicking on the mouse
* The Designer can be used with a resolution of 1280*720 or higher
* A confirmation dialog has been added for deleting resources, data sources and folders
* Fix for the Linear Gauge

## 1.0.32.1 (03.12.2018)

* Fix for array handling in json data source
* Fix for abas authentication in json data source

## 1.0.32.0 (28.11.2018)

* Reworked Bridge data dialog
* Time server is now set globally for the visualization

## 1.0.31.1 (22.11.2018)

* Added Signal Block Control
* Added Wifi Manager
* Updated Package Explorer Style
* Linear Gauge can be used with vertical Orientation
* Added new Templates
* JSON Datasource reworked and added Networksharefiles
* Added Shadow Frame to Textbox
* Dataflows can be putted to Folders
* Removed Google Anaylitcs control
* Fix for SAP Dialog height with low resolution
* Fix for Lua Date Snippet
* Fix bug for changes in select data dialog
* Fix for Shadowframe not reacting to visible flag
* Fix for cached screenshots that could crash the designer

## 1.0.30.2 (14.11.2018)

* Hotfix for not updating PDF files

## 1.0.30.1 (07.11.2018)

* Hotfix for automatically grouping from clipboard pasted controls

## 1.0.30.0 (05.11.2018)

* Excel files use a English culture now in the designer and Runtime
* Tablegrid cell padding and margin can now be customized
* Screens can be moved now with Ctrl + Up / Down

## 1.0.29.3 (31.10.2018)

* Hotfix for zooming and scrolling WebViews

## 1.0.29.1 (30.10.2018)

* Hotfix for changing the admin password

## 1.0.29.0 (29.10.2018)

* The dialog for managing the boxes in the network has been revised so that all actions that can be performed with a Peakboard box are in one dialog.
* A user management system for Peakboard boxes has been added
* The JSON data source now stores sample data of the preview dialog for dataflows
* Minor changes to the dialog for editing fonts
* The fonts can now be adjusted in the Excel chart
* Graphical elements can now be grouped
* Properties for identical elements can now be manipulated when multiple graphical elements are selected

## 1.0.28.23 (22.10.2018)

* Fix for lookup column step in dataflow

## 1.0.28.22 (19.10.2018)

* Fix for bridge resources not being loaded anymore when the file was blocked by another instance

## 1.0.28.15 (14.10.2018)

* The background color of the table grid's title is now shown correctly

## 1.0.28.9 (11.10.2018)

* Hotfix for a bug causing the load of excel charts to fail
* Hotfix for a bug when changing pages in the new pdfviewer

## 1.0.28.5 (09.10.2018)

* Fixed buttons for adding IPs/ domains to OPC UA certificates
* Fixed namespace validation for OPC UA nodes

## 1.0.28.4 (27.09.2018)

* Fix for crash when loading certain visualizations

## 1.0.28.1 (25.09.2018)

* Hotfix for editing static lists

## 1.0.28.0 (24.09.2018)

* Http put function for Lua added
* Improved stability of Peakboard Bridge for files
* Fixes for Time Datasource
* Fixes for Bridge Log
* Fixes for Dataflows
* Fix for SAP Number Columns

## 1.0.27.27 (20.09.2018)

* Changed default language of speech recognition
* Fixed bug in backward compatiblity of speech recognition

## 1.0.27.17 (18.09.2018)

* Fixed a problem, where the Peakboard box had to do a reboot to active speech recognition after deployment
* Fixed a bug, which occured during runtime installation on Windows Server 2016

## 1.0.27.10 (14.09.2018)

* Hotfix for PDF Control

## 1.0.27.0 (11.09.2018)

* Added Proxy Authentication
* PDF Viewer can be used interactive now on a touchscreen
* Webbrowser supports PDF files now
* Added Voice Global Event
* Optimized Title Spacing
* Optimizatizons for OPC UA datasource
* Optimizatizons and fixes for Dataflows
* Changed Bridge default Log Level
* Added more languages for time datasource
* Fix for Title/ Subtitle Binding

## 1.0.26.9 (07.09.2018)

* Hotfix for JSON datasource

## 1.0.26.2 (28.08.2018)

* Updated delivered Templates
* Removed background Templates 
* Released dataflows from beta
* Added union to Dataflows
* CSV delimiter can be \t for tab now
* Preview Panel can be disabled now by pressing ctrl + p
* Fix for crashing the Designer when opening bad files
* Fix for not loading SAP preview data in the designer

## 1.0.25.1 (22.08.2018)

* Hotfix for Rectangle Controls when updating from 1.0.24.5

## 1.0.25.0 (21.08.2018)

* Dataflows added
* Shadow, Title and Subtitle added to controls
* New Retro Flipper Control
* UI Rework for some dialogs
* Azure SQL got replaced with SQL Server datasource
* Fix for Siemens S7 datasource with single bit
* Fix for Siemens S7 dialog
* Fix for Error messages dialog
* Fix for some 4k Displays
* Fixes for Lua date Snippets

## 1.0.24.5 (06.08.2018)

* Hotfix for feed data source

## 1.0.24.1 (01.08.2018)

* Supports 64 Bit Boxes
* Speech Recognition
* Added Video Control
* Changes for GUIs in dialogs
* Reworked Rectangle Control
* Added Lua Snippets
* Reworked Save As Dialog
* SAP Reports can use Batch now
* Added Icons for Drop Down Menu and Package Explorer
* Sperated Dialog Single and Table Variables
* Data type is shown in Tables
* Canvas can be dragged by middle mouse button now
* Added Advanced Chart to Live Tiles
* Added Screencount Property to Lua
* Log files can be deleted now
* Reworked Error Dialogs 
* Colorpicker Colors are sorted now by color not alphabetic anymore
* Reworked File menu
* Lua shownextscreen function is called showscreen now
* Added show previous screen to Lua
* Time datasource can be formated directly to Lua date
* Timer default is endless now
* Added Lua date functions like format or addday
* Fixed Controls can be unfixed now by clicking on the pin
* Added Shorkeys for open, save, open and show preview
* Added feature when doubleclicking format options
* Added Series Dialog for Advanced Chart
* Fix for formating of new added Rows
* Fix for zooming centering the canvas
* Fix for first Refresh Event of variables and lists
* Fix for Linear Gauge Fonts
* Fix for Timeline Grid Control
* Fix for Table Grid Control without rows and header
* Fix for Table Grid Control when changing the source
* Fix for Layout icons
* Fix for Log files
* Fix for updating global lua scripts
* Fix for deleting activation Script
* Fix for renaming timer scripts
* Fix for Power BI Tile Control

## 1.0.23.10 (13.07.2018)

* Fix for SAP in Preview
* Fix for Resources with Authentifizierung

## 1.0.23.3 (09.07.2018)

* Peakboard Designer dialogs optimized
* Designer supports now 64bit architectures
* Screens can be copied and pasted now to other packages
* Resources can be copied and pasted now to other packages
* New series to advanced chart control
* New properties to advanced chart control
* abas authetication
* Lua Sort functions
* Lua Count distinct function
* XQL Reports support UseBatch
* Fixed bug that some fonts were not accepted
* Fixed bug for Excel Chart Control in the data selection
* Fixed some bugs in Slack datasource
* Fix for not showing the title of the templates

## 1.0.22.0 (18.06.2018)

* Reworked datasource dialogs
* Updates for advanced chart control
* XtractQL Updates for Reports
* Changed default fonts
* Fix for variable list dialog
* Fix for Peakboard IO Table duplicate
* Fix for Xaml validation in list view
* Fix for Json datadialog
* Fix for invalid license error
* Fix for datasource names
* Fix for Error when adding a column to a lua script table
* Fix for CSV datasource columns

## 1.0.21.2 (13.06.2018)

* Fix for datasource names

## 1.0.21.1 (12.06.2018)

* Added Slack datasource
* Added Microsoft Calendar datasource
* Added advanced chart control
* Templates from Git will be added to Setup
* Json datasource supports hierarchies
* Optimization of S7 performance
* Changes for S7 datadialog
* Table Column Dialog reworked
* Gauge defaults settings optimizied
* XAML Code Control Supports Extended Charts
* Error Handling for datasource dialogs optimized
* Updated designer databinding
* Instagram datasource with name is not supported anymore
* Datenquellen Spaltennamen erlauben nun alle Unicode Zeichen
* Fix for Toggle Switch control wich looked different in the Designer then in the Runtime
* Fix for KeyInput Event
* Fix for crashing runtime when Text of Textfield is set to null

## 1.0.20.9 (30.04.2018)

* Added scroll- and zoomproperty to webview
* Added Lua Runtime property for Sreen Scale
* Fix for S7 custom variables

## 1.0.20.6 (24.04.2018)

* Reworked manually update functionality and added multiple manual update
* Timer scripts can be disabled now
* Fix for formatting Tablegrid with one line

## 1.0.19.7 (17.04.2018)

* OPC UA datasource allows now to call event Methods
* Peakbord IO Portal added possibility to pair Boxes with Peakboard IO Account
* Script performance updates
* Siemens S7:
  * Increased connection stability
  * Support for all prmitive datatype on all PLCs
  * implemented variable data validator for designer
  * can now organize variables in groups (structs)
* Timer scripts are global now
* Added control animations
* Added screen animations
* Improved package encryption
* Changed Bridge .NET Version from 4.5 to 4.6
* Fix for adding Controls over existing ones
* Fix for Webviews fatal error when missing c++ libs
* Fix for modified on start
* Fix for toggle switch control calling event on start
* Fix for validating new scripts
* Fix for resources stored in the screens
* Fix for casing of Lua functions
* Fix for adding a screen with empty name
* Fix for SAP datasource thread issues

## 1.0.18.0 (06.03.2018)

* Enhancements to the OPC UA data source
* New Icons
* Fix for bridge logging
* Fix for logging the runtime
* Fix for Box Properties
* Fix for the mail data source
* Fix for script validation

## 1.0.17.0 (16.02.2018)

* Fix for using templates and global scripts when opening a pbmx file
* Fix for select file dialog

## 1.0.16.0 (13.02.2018)

* Excel Datasource supports .xlsm files now
* Improved Error handling for Webtables and Webviews
* Fixes for copying controls with not existing fonts
* Fixes for Peakboard IO Tables

## 1.0.15.0 (09.02.2018)

* Improvements for Peakboard-Bridge
* Improvements for OPC UA Datasource
* Replaced Ribbon Bar Icons

## 1.0.14.4 (02.02.2018)

* Improvements for Peakboard-Bridge

## 1.0.13.4 (30.01.2018)

* Fix for Twitter/ Instagram with Images

## 1.0.13.0 (30.01.2018)

* OPC UA now supports method calls
* Peakboard-Bridge Stability Optimization

## 1.0.12.9 (22.01.2018)

* Internal changes without effects

## 1.0.12.0 (19.01.2018)

* Peakboard IO Pages published
* OPC UA supports certificates
* OPC UA Extensions
* Top and Left settings in the Property Panel
* Screen order changeable
* S7 now supports string variables
* Textticker Fixes and Extensions

## 1.0.11.6 (16.01.2018)

* OPC UA Datasource has been extended

## 1.0.10.0 (12.01.2018)

* First version of Peakboard IO Portals
* IMAP Mail Datasource wurde hinzugefügt
* Control icons have been reworked
* CSV data source can now retrieve data via bridge
* CSV data source can now use definable delimiters
* New text formatting for percentages
* Bridge stability improved
* Fixes for Lua Json Parsing
* Fix for table grid columns with special characters
* Fix for SAP Query queries without return values
* Fixes for S7 data source

## 1.0.9.0 (22.12.2017)

* New Control: Live Tiles
* First preview version for the OPC UA data source
* XML data can now be retrieved from the network
* Via Ctrl + L the current log can be displayed in the runtime.
* Fixes for Map Control, Image Control, Websnippet Control, Animated Gifs

## 1.0.8.17 (15.12.2017)

* Fix for changing fonts using a Lua script

## 1.0.8.7 (27.11.2017)

* Fix for local PDF files

## 1.0.8.4 (23.11.2017)

* Global Event Key Down has been added
* Global event key input has been added
* Fix changes in resources during runtime

## 1.0.8.0 (23.11.2017)

* Excel Chart Control
* Web resources have been added
* Bridge Resources were added
* Performance improvements for Lua scripts
* SAP message servers are now supported
* Lua Snippets were extended by Waiting Screen
* SAP over bridge is no longer supported

## 1.0.7.3 (08.11.2017)

* Two new templates have been added
* Fix for tablejoin Lua functions
* Fix for math. tonumber () and string. tostring () Lua functions

## 1.0.7.0 (06.11.2017)

* Fundamental changes for licensing
* Windows are opened depending on the screen size
* Tables Performance Improvements
* Table column changes can now be reset
* Fix for changing the password of a User Box by the Designer

## 1.0.6.5 (26.10.2017)

* Settings and variable dialogs have been reworked
* Fixes for gauges at the same maximum, minimum and current value
* Fixes for Intellisense

## 1.0.6.3 (19.10.2017)

* Insert category was added in the menu strip
* Peakboard-Bridge Dataqullen can be downloaded via Lua
* Insertion wizard for images
* Syntax editor has been reworked
* New code snippets have been added
* Fix for Max, Min and Sum Function

## 1.0.5.0 (06.10.2017)

* Pop-up notifications can be displayed
* Revision of the error display in the preview
* New templates have been added
* Lua objects and functions can now be called in lower case
* Script suggestions are now all lowercase
* Changes of Peakboard-Box IP addresses are updated automatically
* Fix for Excel with language-dependent decimal places
* Fixes for Script Validation and Script Editor

## 1.0.4.0 (29.09.2017)

* The Template Dialog has been divided into categories
* Queries in Excel data sources now offer the possibility to define ranges
* Excel files can now be created as a resource
* A waiting bar can now be displayed via Lua
* The script editor font has been changed
* Double-clicking a button now opens the script editor
* Data changes that cause changes in controls can now be disabled
* Additional templates have been added
* Dropbox API V. 1 Usage replaced by V. 2
* Fix for Global Lua functions
* Fix for the validator in Global Lua scripts

## 1.0.3.1 (22.09.2017)

* Script Editor dialog has been revised
* Version history was linked in the about dialog

## 1.0.3.0 (22.09.2017)

* The Lua Script Editor has been reworked
* Voice input was added (beta)
* Bridge data source error handling has been optimized
* Bridge data source now allows dynamic calls
* Some dialogs of data sources have been reworked
* Scripts in resource files can now be called directly from the script editor
* Fixed for feed data source
* Fixes for Excel data source
* Fix for bindings of lists

## 1.0.2.1 (14.09.2017)

* Fixed for Webpage table data source without authentication

## 1.0.2.0 (05.09.2017)

* Peakboard can now record voice commands via microphone
* Peakboard can now send data to an S7 controller
* New templates were added and the existing templates were revised
* Values of variables can now be stored on the box for the long term
* Global properties for boxes have been added
* Global properties for boards have been added
* Some GUI icons have been reworked
* Values of gauges can now be hidden
* Unnecessary settings in the gauges have been removed
* Numbers are now displayed independent of the language of the operating system
* Scripts can now be added directly to Resources using the right mouse button
* Variables are now called “Variables” and no longer “General Data”.
* Revision of some dialogs
* NET Core Runtime V1.0 has been increased to V1.1

## 1.0.1.2 (21.08.2017)

* Siemens S7 Data Source
* Send Mail function for LUA to send emails
* Drag and drop to move data sources and resources to folders
* Reactivation of the Screen IsEnabled Property
* Delete the Expand Collase folder functions
* ODBC databases can now be connected using the Peakboard-Bridge
* Fix for deleting empty folders
* Fix for SQLSever with empty column names
* Fix for creating new packages without admin rights

## 1.0.0.486 (31.07.2017)

* Fix for SQL data source with double values
* Fix so that a new control element can be seen immediately in front position
* Fix detection if something has changed in the visualization

## 1.0.0.483 (28.07.2017)

* Fixed table columns can only be designated with valid names.
* Fix for connection termination problems while publishing a Peakboard

## 1.0.0.482 (25.07.2017)

* Fix for selection field for fixed elements

## 1.0.0.481 (24.07.2017)

* Elements can now be fixed in the Peakboard Designer and thus made unmodifiable
* You can now create static tables that are initially empty.
* Authentication can now be passed for loading images from a URL
* PDF data can now be loaded from a URL
* Changes to the icons in the Control Layout area
* The selection field has been redesigned
* Screens can no longer be deactivated

## 1.0.0.475 (21.07.2017)

* New Interactive Controls (Date Picker, Time Picker)
* You can now call a pop-up dialog via Lua Script
* After a http push, the data source now fires a refresh event
* With RemoveAt you can remove an element from a defined index with Lua.
* Fixed size and position fixes when viewing windows in Peakboard-Designer
* Changes to the icons of some controls

## 1.0.0.469 (18.07.2017)

* New Interactive Controls (Flat Button, Repeat Button, Toggle Button, Toggle Switch, Check Box, Radio Button, Combo-Box, Slider)
* It is now possible to generate a Basic Authentication directly in the Lua Script
* Fixed for time data source with internal NTP servers
* Fix for CSV and JSon data source authentication
