---
layout: article
title: Version History
menu_title: Version History
description: Version History
lang: en
weight: 1
ref: misc-1
redirect_from:
  - /misc/06-en-version-history.html
footer: 2.8.0.0 (08.03.2021)
---
  
## 2.8.0.0 (08.03.2021) [Download](https://peakboard.com/peakboard-designer/) 
* Rework for the [Advanced-Chart-Control](/controls/Chart/en-advanced-chart.html)
* Stability adjustment for Peakboard Runtime monitoring
* Stability adjustment for Peakboard Management Service
* Added step in dataflow that allows to change multiple data types at once
* User-Agent for [Web Widget-Control](/controls/Extended/en-web-widget.html) and [Web Page-Control](/controls/Extended/en-webpage.html) can be defined
* OAuth2 authentication now allows an implicit grant type
* Added ability to publish via shared [MQTT data source](/data_sources/en-mqtt-broker.html)
* Shared MQTT connections now use a single shared connection
* [Variables/Lists](/scripting/en-variables.html) now allow the use of Unicode characters
* The [PowerBi control](/controls/Extended/en-power-bi.html) can now use dashboards shared in SharePoint
* Fix for a bug where it was possible to update an updated Peakboard Box endlessly
* Fix for a bug where the scaling on the Peakboard Box was not done correctly with different screen resolutions
* Fix for a bug where multiple connections to a MQTT broker were established
* Fix for a bug where the script function [addmonth()] was not executed correctly
* Fix for a bug where OAuth2 authentication for the type grant did not accept email authentication
* Fix for a bug where authentication did not work in the OData data source
* Fix for a bug where CSV data could no longer be loaded from URL or local network
* Fix for a bug where a circular gauge diagram caused the preview or Peakboard Box to crash
* Fix for a bug where the Peakboard Hub and Peakboard data source could not be used in a dataflow
* Fix for a bug where Unicode characters were not accepted within the Excel data source
* Fix for a bug where an image control within a Tile control caused Peakboard Designer to crash
* Fix for a bug where reloading an Excel data source reset the data type settings
  
  
## 2.7.0.0 (02/09/2021) [Download](https://Peakboard.com/Peakboard-designer/) 
* Added Peakboard Hub List as data source for [Peakboard Hub](https://Peakboard.com/produkt/Peakboard-hub/)
* Rework for MQTT data source
* Rework for interactive [Controls]
* Data Sources UI Rework 
* Rework for communication between Peakboard Designer and Peakboard Box.
* Rework for [User Management] on Peakboard Box

* Rework for the SharePointList data source
* Publish function for MQTT data sources added to the Script Editor
* Added variables as comparison operator for conditional formatting
* Reworked Empty States for all elements
* Right-click options like copy, paste, delete,... added for conditional formatting
* QR Code Controls can be linked directly to a data source
* [Remove Columns] dialog for dataflows reworked and functions for [Select All] and [Deselect All] added
* Fix for a bug where the [selectvalue] function of a DropDown control did not work correctly
* Fix for a bug where the [Max Rows] property for the Peakboard data source was without function
* Fix for a bug where it was not possible to move files under [Resources] to a folder
* Fix for a bug where the limitation to 50 preview records for the SQL data source was without function
* Fix for a bug where a single variable from a Peakboard data source could not be used in a script
* Fix for a bug where the functions [Group] and [Visible] could not be used in a tile control
* Fix for a bug where the text ticker control was not executed after a certain length
* Fix for a bug where cleaning up the resources on the Peakboard Box was not executed correctly
* Fix for a bug where changing the frame size via conditional formatting caused the frame to disappear
* Fix for a bug where the [Shared Connection] for a OneDrive data source could not be used
* Fix for a bug where creating a [Resource] with a [Shared Connection] caused the [Resource] to be added twice
* Fix for a bug where changing the alignment of a ListView control resulted in a fatal error
* Fix for a bug where the [Save button] for scripts was without function 
* Fix for a bug where duplicating a data source with a refresh script resulted in the script not being copied properly
* Fix for a bug where the GoogleDocs control caused an error in the Lua Intellisense
* Fix for a bug where the log files on the Peakboard Box were not sorted correctly
* Fix for a bug where the preview was run on a different monitor than the Peakboard Designer

## 2.6.2.0 (17.12.2020) [Download](https://theobaldsoftware.sharepoint.com/:f:/s/Peakboardpublic/Ejzogw8wAfFIkKfyq_iKMMEB1CM2pSuQXSpg9MKHOHfNjQ?e=oW3wim)
* Hotfix for a bug in the XML data source where the data was not loaded.
* Hotfix for a bug where changing the JSON, XML, CSV headers was not applied.

## 2.6.1.0 (30.11.2020) 
* Hotfix for runtime observer

## 2.6.0.0 (23.11.2020)
* Information graphics added
* Rework for web data sources (CSV, XML, JSON)
* Added load bar for the Web Control
* Dataflow step aggregation revised
* Added function to overwrite lists
* Added information message for Dataflows if no data could be loaded
* Limit for preview data of SAP data source increased
* Preview of the data types in the data-load dialog added
* Fix for an error where Excel data could not be loaded from all areas of an Excel file
* Fix for an error where editing custom variables in the S7 data source was no longer possible
* Fix for an error where disabling data sources caused a critical error
* Fix for an error in the path definition of a JSON data source
* Fix for a bug where automatic IP assignment did not work
* Fix for incorrect naming in the Peakboard log files
* Fix for an error where saving an SAP data source was not possible
* Fix for an error in the timeline grid
* Fix for an error where executing conditional formatting caused a crash
* Fix for an error where no user was needed for an Excel data source
* Fix for an error where the web widget was not displayed on the drawing area
* Fix for an error where the XQL statements for the SAP data source returned incorrect values

## 2.5.2.0 (26.10.2020)
* Hotfix for an error where writing to list variables was no longer possible

## 2.5.1.0 (23.10.2020)
* Hotfix for an error where the SAP data source was opened empty after an error

## 2.5.0.0 (20.10.2020)
* Peakboard 1 preview, as well as update for Peakboard 1 Boxes removed
* Peakboard Bridge removed from the update process
* Added automatic restart if the Peakboard 2 Box application crashes
* SharePoint data source permissions reduced
* Web page tables data source revised
* CSV data source revised
* Feed data source revised
* Peakboard Edge, more sounds added
* Peakboard Edge, volume control for the sound output of the Peakboard Edge Box added in Peakboard Designer
* Script examples for JSON objects added in Peakboard Designer
* Added alphabetical sorting for data source selection
* Fix for an error where controls used too much memory
* Fix for an error where the initial default visualization was not displayed
* Fix for an error when using inactive Peakboard Extensions data sources
* Fix for an error in Advanced Chart where no new data was displayed
* Fix for an error in the refresh script of a variable where a refresh script was not executed when the variable was written via API call
* Fix for an error in the Json data source
* Fix for an error where the Peakboard 2 Box was not restarted after changing the screen orientation
* Fix for an error where in a Peakboard Edge connection the name was prioritized over the IP address
* Fix for an error where in simple charts the color could not be changed
* Fix for an error where the Excel Chart Control did not display certain fonts correctly
* Fix for an error where the properties for an icon control could not be changed in the conditional format
* Fix for an error where the "Save" button had closed the application
* Fix for an error where a password protected visualization could not be opened in the preview
* Fix for a bug where event scripts were loaded in an outdated editor
* Fix for an error where the Designer had to be restarted after wrong password entry
* Fix for an error where the webpage control could not be used with authentication "none
* Fix for an error where uninstalling Peakboard Designer was not correctly completed

## 2.4.5.0 // 1.13.5.0 (01.10.2020) [Download](https://theobaldsoftware.sharepoint.com/:f:/s/Peakboardpublic/Ev2WJvGLtwFLvz5nRtGX4KABmPad9KPzH7w9J37lCRFrZQ?e=BRL3y0)
* Hotfix for an error in the SQL data source dialog
* Hotfix for an error with http-put requests

## 2.4.4.1 // 1.13.4.1 (30.09.2020)
* Hotfix for an error where Dataflows for an Excel data source could not be executed anymore
 
## 2.4.3.0 // 1.13.3.0 (29.09.2020)
* Hotfix for IPv6 address handling

## 2.4.2.0 // 1.13.2.0 (28.09.2020)
* Hotfix for an error when opening the Siemens and Mitsubishi data source

## 2.4.1.0 // 1.13.1.0 (25.09.2020)
* Hotfix for Peakboard Edge Mangement Dialog

## 2.4.0.2 // 1.13.0.2 (24.09.2020)
* Mitsubishi data source added
* Added connection management for data sources with user credentials
* Added deactivation of data sources in Peakboard Designer
* Lua script for "ExecutNonQuerey" function added for ODBC and Oracle data sources
* Added example template for calling SAP tables with many columns
* Added option to select a column for the DropDown control
* Added additional properties for conditional formatting
* MQTT Publish function added to the script tree
* Oracle data source dialog revised
* SQL-Server data source dialog revised
* ODBC data source dialog revised
* Feed data sources dialog revised
* SAP data sources dialog revised
* Google Sheet data sources dialog revised
* SharePoint data sources dialog revised
* Mail data sources dialog revised
* Textticker-Control revised
* Icons in Box properties dialog revised
* Sorting of the log files of the Peakboard Boxes revised
* The reload interval of the JSON data source can now be set to >1 second
* The gateway option has been removed from the SAP data source
* Proxy authentication removed from the Add Box dialog
* Fix for an error where the Excel data source required write permissions for the connection type "Sharepoint
* Fix for an error where no custom font could be assigned to the axes of a bar chart
* Fix for an error where the datarowloaded event was not executed correctly
* Fix for an error where proxy authentication was not used when uploading a visualization
* Fix for an error where the connection between Box and Manage dialog was not disconnected properly
* Fix for an error where a wrong threat was assigned to a script
* Fix for an error where too much memory was used
* Fix for an error where the folder property was ignored in the mail data source
* Fix for an error that occurred when copying an element with its own font
* Fix for an error in the Peakboard data source
* Fix for an error where no variables or dataflows could be used with the Peakboard Basic Box
* Fix for an error where the order of the last opened visualizations was not correct
* Fix for an error where diagrams were copied with incorrect colors and fonts
* Fix for handling a fatal error
* Fix for an error where the Manage dialog used the DNS name instead of the IP address
* Fix for an error where the script function Peakboard.restart() had no function
* Fix for an error where Peakboard Designer crashed when accessing an unconnected Peakboard Edge Box
* Fix for an error where renaming a data source was not applied to the corresponding refresh script
* Fix for an error where the X and Y axis designation of an advanced chart was lost
* Fix for an error where the toggle button control could not be used properly
* Fix for an error where variables could not be moved to a folder
* Fix for an error where global functions could be copied but not pasted
* Fix for a bug where auto-complete did not work correctly in the script editor
* Fix for a translation error in the script editor
* Fix for an error caused by a button in a tile control
* Fix for an error where empty columns in an Excel data source were not processed correctly
* Fix for an error, when managing Peakboard Edge Boxes
* Fix for an error where no sound could be played with a Peakboard Edge Box
* Fix for an error where an event for a text control was not triggered if no background was assigned to the control
* Fix for an error where copying controls did not result in them being copied to the correct layers
* Fix for an error where created variables could be found in the script editor under data and not under variables
* Fix for an error where no data source could be linked to the slider control
* Fix for a script error when using an index for Peakboard Edge Boxes
* Fix for an error when using an image control within a ListView control
* Fix for an error where a video could not be displayed with the video control
* Fix for an error where an already opened template could not be reopened
* Fix for an error where the TileView control used too much memory
* Fix for an error where the refresh script for the mail data source was not executed
* Fix for a bug where the Visibilty property

## 2.3.4.0 // 1.12.4.0 (19.08.2020) [Download](https://theobaldsoftware.sharepoint.com/:u:/s/Peakboardpublic/EUGQRR7M8W5Ej5ukKhI45fQBDAGRBJToERgRKib2BfINhw?e=PBN4Zy)
* Hotfix for memory errors

## 2.3.3.1 // 1.12.3.1 (07.08.2020)
* Hotfix for errors when opening and closing the S7 data source

## 2.3.2.0 // 1.12.2.0 (06.08.2020)
* Hotfix for an error in the CSV data source where the column captions were not entered correctly

## 2.3.1.0 // 1.12.1.0 (17.07.2020)
* Hotfix for an error where the data from the SQL data source was not loaded
* Hotfix for an error in the PowerBI control

## 2.3.0.2 // 1.12.0.2 (15.07.2020)
* Peakboard Edge added
* Peakboard Edge added as data source
* Peakboard data source added
* Data connection via the local network for CSV, XML and JSON data sources implemented
* XML data source revised
* Unicode character support extended for Excel data source
* Icon Control revised and more icons added
* Obsolete slack data source removed
* Plug-in platform implemented to support specially developed data sources
* WLAN dialog for Peakboard 2 Boxes revised
* Error message for obsolete visualizations adapted
* Added upgrade notification when updating Peakboard 1 Boxes
* Fix for an error where the password of the Peakboard 2 Box could not be changed correctly
* Fix for Tile and TileView control
* Fix for multiple access to local resources
* Fix for an error when selecting a data source for a control
* Fix for an error when sharing a web widget and web view control
* Fix for an error where the created rules disappeared in the conditional formatting
* Fix for an error when the update process is aborted
* Fix for an error in the CSV data source where the option "Column Names in First Row" was ignored
* Fix for an error in the CSV data source where the source type "File" was not supported
* Fix for an error in the JSON data source where the option "Max Rows" was ignored
* Fix for an error where time data sources could be processed with a dataflow
* Fix for a bug where image files added as local resource could not be displayed correctly
* Fix for a display error in the gauge diagram
* Fix for an error where the broadcast of the Peakboard 2 Box was not executed correctly
* Fix for an error where the Textticker-Control and the DropDown-Control were not executed correctly

## 2.2.4.2 / 1.11.4.2 (25.06.2020) [Download](https://theobaldsoftware.sharepoint.com/:u:/s/Peakboardpublic/EfQyi0GFHAtGus9DFknb0ssBXsLk98ATOn_IMfkt7qq1tA?e=v0KQIj)
* Hotfix for the use of local network resources
* Hotfix for an error in the Excel data source where the use of local network files did not work correctly

## 2.2.3.0 // 1.11.3.0 (29.05.2020)
* Hotfix for the Json data source

## 2.2.2.1// 1.11.2.1 (26.05.2020)
* Hotfix for an error where the license was not detected
* Hotfix for an error where changing the password of a Peakboard 2 Box caused an error

## 2.2.0.1 // 1.11.0.1 (12.05.2020)
* Peakboard Extension Kit for the development of own data sources implemented
* The Peakboard 2 Preview is now used as the default preview
* Start page dialog in Designer revised
* Note in the start page dialog as well as in the canvas of the Peakboard Designer for the availability of a new Peakboard Designer version
* News section added to the home page dialog
* Video section added to the home page dialog
* The Getting-Started visualization is now displayed by default if no other visualization is active
* Tile Controls: Right-click on the control to call the Template Selector and the conditional formatting
* Json data source revised
* CSV data source revised
* XML data source revised
* Excel data source marker added for selecting the data type
* Device portal for Peakboard 2 Boxes removed
* License model extended by Peakboard Basic and revised for Professional and Enterprise
* SharePoint data source documents of the main page are now available
* Icons in Manage&Upload dialog updated
* Icons for editing the steps of a dataflow updated
* Display text of several error messages revised 
* Dataflows allow to transpose tabular data sources
* Dialog for data binding for several controls revised
* Lua snippets for the editor of the List- or TileViews added
* In conditional formatting, the frame can now also be changed to rules for controls with frames
* Fix for an error when copying the conditional formatting within the editor for List- or TileViews
* Fix for an error when adding text to a button within the editor for List or TileViews
* Fix for an error where a dataflow could be created for a single variable
* Fix for a critical error when changing the resolution in the Set Resolution dialog
* Fix for an error in the dataflow where the manipulation of the data was not displayed in the designer
* Fix for an error in the SQL data source where null values were not processed correctly
* Fix for an error where an SQL database was temporarily locked after the Peakboard Box lost the connection due to a power loss
* Fix for an error where the IP of Peakboard 2 Boxes was not saved in the designer
* Fix for an error where a locked element on the drawing area prevented the processing of an underlying element
* Fix for an error where Peakboard 2 Preview could not run on a Windows 7 device

## 2.1.1.0 // 1.10.1.0 (03.04.2020)
* Fix for data binding of columns starting with a number
* Fix for a bug where tab key navigation did not work when renaming columns
* Data binding dialog for Tile, ListView, TileView and Live Tiles adopted
* Minor error corrections for the data binding dialog

## 2.1.0.0 // 1.10.0.0 (23.03.2020)
* Added SharePoint OneDrive as a new data source
* Conditional formatting largely replaces the rule editor
* Conditional formatting for elements within a ListView or TileView
* Script Editor - Extension of the script editor functions for controls created in a TileView or ListView
* The data source index of a tile control can be changed by means of a script
* The ListView and TileView control are now scrollable
* Additional interactive controls have been added to the ListView and TileView controls
* The tile control now also has a template selector
* Script editor - function runtime.currentscreenname implemented to control screens by name
* Oracle data source for Peakboard 2 Boxes revised
* ODBC data source for Peakboard 2 Boxes revised
* Video Control - Added additional functions such as start, stop, restart and mute to control by script
* Format property for controls moved from Appearance to General
* Direct access to domain files
* The password field was removed from the S7 data source
* The JSON data source now supports scalar values
* Error message for incorrectly selected JSON objects adapted
* Added footer notification for elements that require a Peakboard 2 Box
* Customization of the icon for the font editor
* Fix for a bug where the version of the Peakboard Box was displayed as not up to date although it is the current version
* Fix for data type detection for OData data source
* Fix for the data type recognition for the S7 data source
* Fix for the "use full path" option of the JSON data source 
* Fix for the Gauge diagrams if they are included in a ListView
* Fix for switching PDFs over the network (PB2) 
* Fix for switching PDFs via the bridge (PB1)
* Fix for an error where the wrong script was selected and not the one to be edited
* Fix for a display error of the runtime.shownotification function
* Fix for notification of current Boxes
* Fix for an error in the XML data source if the XML file consists of only one line
* Fix for the Photoframe control
* Fix for an error that could cause the Designer to crash when deleting a color code
* Fix for a bug that could cause the Designer to crash when editing a non-existent font
* Fix for adjusting a control at 200% zoom
* Error message for incorrectly selected JSON objects adapted
* Fix for an error where the preview scaling was not displayed correctly

 
## 2.0.0.7 // 1.9.0.7 (10.02.2020) [Download](https://theobaldsoftware.sharepoint.com/:u:/s/Peakboardpublic/EaC8Bc2W-15HrXrYbCu9BL4BRIZaEQrhMuwUWzQMJMMBjQ?e=pFFAgz)
* Differentiation in versioning for Peakboard 2 Boxes (2.x.x.x) and Peakboard Boxes (1.x.x.x)  
* Change of Peakboard Runtime (Preview) architecture from UWP to WPF
* Abolition of the Peakboard Bridge for Peakboard 2 Boxes
* Support of the designer of Peakboard and Peakboard 2 Boxes
* Version separation of Peakboard Boxes and Peakboard 2 Boxes
* Dataflows can now be created by right-clicking on a data source.
* In a Dataflow, simple filters and sorting functions can be performed by right-clicking on the table displayed in the Dataflow.
* Support for OAuth2 authentication implemented.
* Windows Explorer button added.
* Created data sources can also be used by script to write back.
* It is now possible to activate and deactivate individual data sources via script.
* Resources stored in the Designer can be downloaded by right clicking.
* Renamed from NetworkFileShare to Peakboard Bridge 
* Renaming from NetworkFileShareDirecet to Local Area Network (only available for Peakboard 2 Boxes)
* The width of the frame can be adjusted by script for elements with frames.
* Script debugger for preview implemented (only available for Peakboard 2 Boxes)
* Template dialog added to the initial loading screen of the Peakboard Designer.
* Added tooltip icons in dialogs.
* Fixed an error where switching screens with a PDF caused the designer to crash.
* Fix for an error where an error was generated when a preview was active and a preview was reopened.
* Fix for an error where the logs of the Peakboard Box could not be deleted.
* Fix for the Undo function for grouped elements.
* Fix for an error where no further screenshot could be created after some screenshots.
* Fix for an error when copying an OPC/UA data source
* Fix for script error messages in Peakboard Runtime Log

## 1.8.7.0 (31.01.2020) [Download](https://theobaldsoftware.sharepoint.com/:u:/s/Peakboardpublic/EWNEpnPQNOFCjqG7OvWuxV0BIkIHRXdOO3yCGSgBwQnf3A?e=MlaQeI)
* Hotfix for an Excel data source error that caused the Excel data source not to load the data when no column names were selected

## 1.8.6.0 (14.01.2020)
* Hotfix for Excel column names

## 1.8.5.1 (13.01.2020)
* An error was fixed in the Designer, which caused the OPC UA data source to crash when connecting to the server.

## 1.8.4.0 (07.01.2020)
* Hotfix for ShowDialog Lua functions

## 1.8.3.0 (19.12.2019)
* Hotfix for WLAN configuration via script

## 1.8.2.0 (18.12.2019)
* Hotfix for JSON data source
* Hotfix for Excel data source

## 1.8.1.0 (17.12.2019)
* Hotfix for a bug where the Peakboard Runtime for the preview was not updated

## 1.8.0.2 (16.12.2019)
* Significant improvement in performance when processing scripts (Multithreading)
* Debugger for Lua scripts implemented
* The dialog of the Excel data source has been fundamentally revised.
* Files added as a resource can be downloaded
* Added Save&Close button to scripts
* Error handling improved
* Error message for screenshots adjusted
* Fix for deleting scripts, deleted scripts are no longer displayed
* Fix for the use of newly created fonts
* Fix for adding an updated Excel list again
* Fix for dataflows where the data source was changed
* Fix for Linear and Circular Gauge if incorrect Min or Max values were entered
* Fix for the Photoframe Control
* Fix for incorrect assignment of IPv6 addresses
* Fix for handling resources via the Peakboard Bridge

## 1.7.1.0 (29.10.2019) [Download](https://theobaldsoftware.sharepoint.com/:u:/s/Peakboardpublic/EVc9Kqf3pWlLsxFJ8D8ZWhMB4u6rmd5MgSYRigChfvJ4jA?e=I9T6Bu)
* Hotfix for Template Designer

## 1.7.0.0 (28.10.2019)
* New data source: SharePoint Lists
* Optimization for resources loaded via the bridge
* A relative time to the current time can now be defined directly in the time data source
* Optimization of error handling of broken packets
* Web APIs now pass "Peakboard" as User-Agent
* The reset in the Manage dialog will now be performed properly.
* Selected controls are marked in the Explorer.
* OneDrive Excel, PeakboardIO and AzureSQL removed
* MQTT Tester is available again
* Properties for Simple Charts have been re-sorted
* Image preview no longer distorts the image
* Icons in the property editor have been revised
* Silent Installation has been optimized
* Added global function for Peakboard communication
* Locked controls can now be selected via the Explorer
* The installer is now multilingual
* Fix at installer if only bridge was installed
* The Timeline Grid has been revised
* Fix when naming a control to "Background"
* Fix for custom fonts
* Fix for an error message when starting the Designer
* Fix in the JSON data source when loading some data sources
* Fix for the time data source
* Fix for the color picker when changing the values in the text field

## 1.6.4.0 (18.10.2019) [Download](https://theobaldsoftware.sharepoint.com/:u:/s/Peakboardpublic/EYyKT0GXBTlLiTKu0NqnesEBMTN6QRcCyjaxUeThQgBKew?e=jVNs2G)
* The default setting for the Designer theme was reverted to "Light" mode.

## 1.6.3.0 (17.10.2019)
* An issue was fixed, where time zones occasionally where not applied to time data sources.

## 1.6.2.0 (19.09.2019)
* Fixed an issue within the S7 data source, which caused an error when reading multiple variables in memory blocks.

## 1.6.1.0 (27.08.2019)
* Hotfix for the Peakboard Webbrowser 

## 1.6.0.0 (22.08.2019)
* Sending email with the Peakboard now does support none authentication
* XML dialog reworked
* Animate function reworked
* Translation error for SAP templates fixed
* The "Scrollbar" option now also allows horizontal scrolling
* New functions for font editing added
* Script editor: elements in the script tree can only be opened by double-clicking on them
* Script editor: Scripts can no longer be deleted in the editor itself
* scripts can be deleted or edited by right-clicking on the corresponding script
* script editor: memory message for successful saving removed
* Tablegrid: multiple selection for deleting columns added
* Fix for writing the display value of combo Box elements
* Fix for using a bridge resource image as background for a visualization
* Fix for Drag&Drop functionality of Tile, TileView and ListView elements
* Fix for saving custom fonts
* Fix for copying elements with a refresh script
* Fix for opening files 

## 1.5.3.9 (07.08.2019) [Download](https://theobaldsoftware.sharepoint.com/:u:/s/Peakboardpublic/ESHFf50r2tdFrrr2RA_rRegBzgCcoM7oz8C-IeIQPXRljw?e=3Mp4Nl)
* Fixed a problem in the SQL server data source, where NULL values where not handled correctly

## 1.5.3.1 (06.08.2019)
* Hotfix for the version comparison between Designer and Runtime, here an error was reported although the versions were on the same state

## 1.5.2.15 (05.08.2019)
* Fix for Bridge-Resources
* Fix for missing DLLs

## 1.5.1.0 (16.07.2019)
* Fixed an issue, where images could not be loaded as bridge resources

## 1.5.0.0 (15.07.2019)
* Fixed issue, which caused heavy memory usage for files resources
* Fixed a bug, where the installer forced to install the Peakboard Designer with the Bridge
* Added missing German translations for SAP data source query templates
* Fixed error message in WLAN dialog
* Reworked the structure of the backstage in the Peakboard Designer
* Added search/replace functionality for scripts in script editor
* Fixed a bug, where saving the visualization was not possible when making changes to scripts
* The script editor now has a tree view to quickly navigate between scripts
* Fixed a bug, which caused the upload of visualizations to fail if an image resource was in the package
* Fixed a bug, where opening a script in a Dataflow disabled the save button in other scripts
* Fixed a bug, which caused the Designer to crash upon drag'n dropping a chart onto the canvas in Chinese version

## 1.4.2.7 (08.07.2019)
* Hotfix for memory overflow when using images

## 1.4.2.2 (05.07.2019)
* Hotfix for handling image files

## 1.4.1.0 (14.06.2019)
* Hotfix for using the Tile control

## 1.4.0.0 (11.06.2019)
* WiFi Dialog revised - function is only supported on Boxes from version 1.4.0.0 onward
* CSV data source: Handling for double column captions added
* CSV data source: it is now possible to skip several rows
* Lua script editor: function .animate() for controls added
* Lua script editor: custom global functions can be selected via ctrl+space key 
* Lua script editor: script tree implemented analogous to folder structure in script editor
* Dataflows: Only the English number format (#,###.##) is supported for mathematical operations. Using the format option of a control, the result of the operation can be converted to the German number format (#.###,##) for display on the screen
* Update: Before the update is executed, the function checks whether the current visualization has been saved
* PDF viewer revised
* Fix for copying invalid elements in Tile, Tile View, and List View
* Fix for scripts which are executed during screen activation
* Fix in script editor for global functions 

## 1.3.1.0 (29.05.2019) [Download](https://theobaldsoftware.sharepoint.com/:u:/s/Peakboardpublic/Eb34w5ubUXVLkIfnSREFSNEBFwHlT-3UVgFaXcc1vNr0qA?e=AjCyqo)
* Hotfix for saving colors for circle and donut diagrams

## 1.3.0.0 (21.05.2019)
* OPC UA: Fix browsing problems with absolute node IDs
* OPC UA: Fix for progress bar that runs infinitely long during connection test
* OPC UA: Add multi-node browsing to select variables to read
* OPC UA: table view for all variables of a subscription
* Bar, line and pie charts have been revised and are available outside the Advanced Chart
* Color selection for all diagrams revised
* Padding for all controls added
* Lua script editor: Dynamic timer added
* Lua script editor: Added example for determining calendar weeks
* Lua script editor: Revision of the validation function
* Lua script editor: Added logic for local variables and global functions
* Lua script editor: Search and replace function implemented
* Lua script editor: Marked elements can be replaced by code templates
* When a variable is deleted, the system also checks whether it is used in a script in addition to a control element.
* Template Dialog revised and integrated into the menu
* Refresh scripts are named after the data source they are based on
* Added web service icon to the Manage dialog
* Save button works analogous to "Save as", if the current visualization has not yet been saved.
* Bridge function for NetworkShareFileDirect of Excel data source removed
* Message for the adjustment of the designer and Box version implemented
* Added tapped event for text controls
* Fix for calendar data source
* Fix for the web interface for browser access
* Fix for open dialog for files that are not .pbmx files
* Fix for duplicating a dataflow containing a refresh script
* Fix for scaling screenshots
* Fix for handling more than 127 characters in strings in SQL data source
* Fix for table control in Chinese language package

## 1.2.2.0 (23.04.2019)
* Hotfix for the Peakboard Runtime installation

## 1.2.1.1 (17.04.2019)
* Hotfix for the reload of a S7 data source in the preview

## 1.2.0.1 (16.04.2019)
* Rule editor for the controls Text, Linear-Gauge and Circular-Gauge
* For Excel data, the data type can be changed directly from "String" to "Number" in the data source
* Selection of several variables for the OPC-UA data source
* After installation of the Peakboard Runtime was added to the setup
* Version comparison of runtime and designer implemented
* The text Box control can be filled with multiple lines
* Revision of last opened files
* Screenshot of last opened files added
* Color selection compressed and last used colors added
* Revision of the color selection for Advanced Charts
* Revised design of the ribbon bar
* Revision of the Microsoft calendar data source
* Revised web interface for entering variables and lists
* Settings and logs moved from the Web interface to the designer's Manage dialog
* Merging of "Activate" and "Delete" of a visualization in the Manage dialog
* Improved highlighting for active screen
* After duplicating a screen, the duplicated screen is set to the active screen
* Fix for an error when reloading a visualization from a Box
* Fix for saving lists on the Box 
* Fix for "default" type time data sources
* Fix for switching an ODBC connection to an Oracle connection
* Fix for Lua code examples
* Fix for creating and deleting scripts
* Fix for the Lua command runtime.shownotification
* Fix for renaming scripts 

## 1.1.0.46 (18.03.2019)
* Hotfix for the Threshold Diagram of the Advanced Chart

## 1.1.0.1 (11.03.2019)
* Missing German translations added

## 1.1.0.0 (11.03.2019)
* Language selection extended by Mandarin
* Display of the file name in the title bar
* Reworked StartUp dialog
* Reworked ribbon bar
* Amount of preview data for all data sources was increased from five to 50 rows (if available)
* German translation for Dataflows added
* Web GUI for pushing data to variables added
* List View reworked, controls and functions were added
* Tile View reworked, controls and functions were added
* Excel files no longer need to be closed when located on a network share
* Default for Dataflows set to "Reload when source is updated." 
* OPC UA allows the deletion of server certificates
* Fix for displaying dialogs
* Fix for the update dialog (x had the same function as YES)
* Fix in LUA for using SQL connections before connecting
* Fix for NULL handling for SQL
* Fix for adding a new local resource that has already been created
* Fixed for JSON queries with empty JSON
* Fix for JSON Push
* Fix for OPC UA

## 1.0.35.53 (12.02.2019)

* Hotfix for OPC UA server certificate handling

## 1.0.35.50 (12.02.2019)

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
* Fix for deploy to multiple Boxes
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
* Added Shadow Frame to TextBox
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

* The dialog for managing the Boxes in the network has been revised so that all actions that can be performed with a Peakboard Box are in one dialog.
* A user management system for Peakboard Boxes has been added
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

* Fixed a problem, where the Peakboard Box had to do a reboot to active speech recognition after deployment
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
* DropBox API V. 1 Usage replaced by V. 2
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
* Values of variables can now be stored on the Box for the long term
* Global properties for Boxes have been added
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

{% include collapsible.html %}
