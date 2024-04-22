# ![IETng icon] Import Export Tools NG


[ImportExportTools NG](https://addons.thunderbird.net/addon/importexporttools-ng/) adds import and 
export functions for messages, folders and profiles.

[Click here to view this add-on’s version history](https://addons.thunderbird.net/addon/importexporttools-ng/versions/).

[![TB78](https://raster.shields.io/badge/version-v12.0.4%20(released%20version)-darkgreen.png?label=Thunderbird%20102)](https://addons.thunderbird.net/addon/importexporttools-ng/)
[![TB91](https://raster.shields.io/badge/version-v14.0.2%20(released%20version)-C70039.png?label=Thunderbird%20115)](https://github.com/thundernest/import-export-tools-ng/issues/264)
[![License: GPL 3.0](https://img.shields.io/badge/License-GPL%203.0-red.png)](https://opensource.org/licenses/GPL-3.0)

## New Wiki 

- Notes, help and utility scripts (WIP)
- [Apple mail conversion help](https://github.com/thundernest/import-export-tools-ng/wiki) - @obar

## Import Export Tools NG Add-On Features

Version 14.0.2 : Subfolders Release - April 10, 2024

- New: Recursive Subfolder Export for EML, HTML, PDF and Plaintext #538
- New: Size column in index #508
- New: Import OSX 9- CR terminations mbox files #540
- New: Support shortcuts for ExportSelectedMessages #519
- New: Czech (cs) locale - @cewbdex
- Fix mbox From_ separator to use asctime() date format #537
- Fix PDF exports do not use Mozilla Save toPDF settings #528
- Fix Right-clicking folder doesn't show export mbox option for Maildir #525
- Fix Cannot import emails with linebreaks in Return-Path header #516
- Fix Export all messages of a virtual folder to html with attachments and index - missing messages folder #509
- Fix context menu for message window #505
- Convert dtd files to messages.json

Version 14.0.1 : Maintenance Release - November 10, 2023

- New: Add Account level mbox import
- New: Add Account level mbox flattened export
- New: Support for mbox import and export to filesys levels
- Fix CSV export to text #451, #463
- Fix export folder to ZIP
- Fix help load only on IETNG updates
- Add preference to never load help on updates #458
  extensions.importexporttoolsng.export.help.showOnInstallAndUpdate
- Fix help for sublocales and unsupported locales
- Fix mbox From_ separators to adhere to RFC 4155 #455
- Add back Export Messages in message display windows #459
- Fix Account export for pop3
- Fix buffer boundary From_ escaping
- Fix selected messages handling #485
- Complete de locale update @Mr-Update
- Complete fr locale update @DenB10
- Complete da locale update @Joergen
- Updated ja locale @kiki-ja

Version 14.0.0 : Thunderbird v115 Support - September 26, 2023

- Thunderbird v115 ESR support
- New UI refresh
- New Dark mode support
- New clean, consistent and logical menus
- New toolbar button for profile, backup and options support
- New .mbox extension option for non-structured exports
- New strip CR from eml exports
- Improved mbox From_ escaping


Version 10.0.2 : Maintenance Release - November 14, 2020

Bug Issues Fixed:

- #140 Handle right click on unselected folder
- #149 EML import fixes
- #154 Backup does not run if File/Exit used
- #157, #159 Backups failing
- #173 Handle no selected folder
- #174 Sender_email & recipient_email  tokens missing for  attachments
- #175 Support comma and single quote in filenames

Notables:

- Added Backup on exit option
- Use `Index, CSV Date Format` option for full custom format (options Misc tab)


Thanks to many! : See issues

# Features

Menus:
 - Tools (most import and export functions including profiles)
 - Folders (most import and export functions)
 - Search dialog (export search results)
 - Selected messages (export or copy to clipboard)

Export:
 - Individual folder(s), optionally including subfolders (mbox format)
 - All folder messages in the following formats:
   - EML, HTML, PDF, CSV or plaintext
   - Export as individual files or a single file
   - Optionally include attachments
   - Export indexes as plain text or CSV
   - Extensive file naming convention options
   - Export messages from search dialog

Import:
 - Mbox files (including structure)
 - EML & EMLX files
 - Individual or all directory files

Profiles:
 - Export complete profile or just the mail files
 - Import profile
 - Auto profile backup with schedule on shutdown

SMS: Will be deprecated!

## Import Export Tools NG Add-On Installation

Normal install (requires Internet access) from [Thunderbird Add-on site](https://addons.thunderbird.net/):
- Download and install [ATN version](https://addons.thunderbird.net/addon/ImportExportToolsNG/) via the ``Add-ons Manager``.
- From the [Thunderbird Menu Bar](https://support.mozilla.org/en-US/kb/display-thunderbird-menus-and-toolbar), select ``Tools`` then ``Add-ons`` to open the ``Add-ons Manager``. Choose the ``Extensions`` tab, search for “TBD”, select ``+ Add to Thunderbird`` and follow the prompts to install and then restart.

Install (with or without Internet access) XPI directly:
- Download and install [GitHub XPI version](xpi) via the ``Add-ons Manager``.
- From the [Thunderbird Menu Bar](https://support.mozilla.org/en-US/kb/display-thunderbird-menus-and-toolbar), select ``Tools`` then ``Add-ons`` to open the ``Add-ons Manager``. Choose the ``Extensions`` tab, click the gear icon and choose ``Install Add-on From File…``
- Choose [XPI file](xpi), install and restart.

## Brief Usage Instructions

The extension adds a new menu item in the Tools menu.
(You may have to enable the Menu Bar from Preferences to make it display. Depending on the version of Thunderbird, the option to show the menu bar may be under "View" or "Customize" instead.)
The new submenu displays a number of additional actions which you can peform
to import or export various types of information into and out of Thunderbird.

The original add-on (link above) has a number of notes about individual commands,
though no structured user guide or handbook yet. (Sorry.)

## XPI Add-on Package Build instructions

Visual Studio Code:
 Build Default Task

Basic Command Line Build: (requires 7zip CLI version)
7z a ./xpi/import-export-tools-ng-4.0.0-tb.xpi ./src/*

## Issues & Questions
Post any issues or questions for Import Export Tools under [Issues](https://github.com/thundernest/import-export-tools-ng/issues)

## Changelog
 ImportExportTools NG changes are logged [here](CHANGELOG.md).

## Credits
Original Author: [Paolo “Kaosmos”](https://addons.thunderbird.net/user/Paolo_Kaosmos/)  
Developing Author: [Christopher Leidigh](https://github.com/cleidigh/)  

<html>
<div>Extension Icon: <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/"                 title="Flaticon">www.flaticon.com & cleidigh</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"                 title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
</html>

[IETng icon]: rep-resources/images/import-export-tools-ng-icon-64px.png 
