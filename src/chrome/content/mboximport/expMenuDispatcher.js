// expMenuDispatcher

/* global
exportSelectedMsgs,

*/

console.log("load");

/* Export types:
	0 = EML
	1 = HTML
	2 = Plain Text
	3 = MBOX
	4 = MBOX (append mode)
	5 = index (HTML)
	6 = index (CSV)
	7 = CSV (with body)
	8 = HTML with attachments
	9 = Plain Text with attachments
	*/

var { mboxImportExport, setGlobals } = ChromeUtils.importESModule("chrome://mboximport/content/mboximport/modules/mboxImportExport.js");
var gVars = {
	window: window,
};
setGlobals(gVars);


async function expMenuDispatcher(data) {
	console.log("expMenuDispacher: ", data);
	switch (data.command) {
		case "WXMCMD_EML_Format":
			console.log("mdis: ", data);
			if (Object.keys(data.params).length == 0) {
				await exportSelectedMsgs(0);
			} else if (data.params.createIndex) {
				await exportSelectedMsgs(100);
			}
			break;
		case "WXMCMD_HTML_Format":
			console.log("mdis: ", data.params);
			if (Object.keys(data.params).length == 0) {
				await exportSelectedMsgs(1);
			} else if (data.params.saveAtts && !data.params.createIndex) {
				await exportSelectedMsgs(8);
			} else if (data.params.createIndex && !data.params.saveAtts) {
				await exportSelectedMsgs(101);
			} else if (data.params.saveAtts && data.params.createIndex) {
				await exportSelectedMsgs(108);
			}

			break;
		case "WXMCMD_PDF_Format":
			await IETprintPDFmain.print(false);
			break;
		case "WXMCMD_PlainText_Format":
			if (Object.keys(data.params).length == 0) {
				await exportSelectedMsgs(2);
			} else if (data.params.saveAtts && !data.params.createIndex) {
				await exportSelectedMsgs(9);
			} else if (data.params.createIndex && !data.params.saveAtts) {
				await exportSelectedMsgs(102);
			} else if (data.params.saveAtts && data.params.createIndex) {
				await exportSelectedMsgs(109);
			}
			break;
		case "WXMCMD_CSV_Format":
			await exportSelectedMsgs(7);
			break;
		case "WXMCMD_Mbox_Format":
			if (data.params.mboxExpType == "newMbox") {
				await exportSelectedMsgs(3);
			} else if (data.params.mboxExpType == "appendMbox") {
				await exportSelectedMsgs(4);
			}
			break;
		case "WXMCMD_CopyToClipboard":
			if (data.params.clipboardType == "Message") {
				await copyMSGtoClip();
			} else {
				copyHeaders.start();
			}
			break;
		case "WXMCMD_Index":
			if (data.params.indexType == "indexHTML") {
				await exportSelectedMsgs(5);
			} else if (data.params.indexType == "indexCSV") {
				await exportSelectedMsgs(6);
			}
			break;
				
		case "WXMCMD_ExpFolderMboxFormat":
			exportfolder(data.params);
			break;
		case "WXMCMD_ExpFolderRemote":
			exportfolder(data.params);
			break;
		case "WXMCMD_ExpSearch":
			searchANDsave();
			break;
		case "WXMCMD_FolderExp_EML_Format":
			await exportAllMsgs(0);
			break;
		case "WXMCMD_FolderExp_HTML_Format":
			if (data.params.createIndex && !data.params.saveAtts) {
			await exportAllMsgs(0);
			} else if (data.params.saveAtts) {
				await exportAllMsgs(8);
			}
			break;
		case "WXMCMD_FolderExp_PDF_Format":
			IETprintPDFmain.print(true);
			break;
		case "WXMCMD_FolderExp_PlainText_Format":
			if (data.params.createIndex && !data.params.saveAtts) {
				await exportAllMsgs(2);
			} else if (data.params.saveAtts && !data.params.singleFile) {
				await exportAllMsgs(9);
			} else if (!data.params.saveAtts && data.params.singleFile) {
				await exportAllMsgs(4);
			} else if (data.params.saveAtts && data.params.singleFile) {
				await exportAllMsgs(7);
			}
			break;
		case "WXMCMD_FolderExp_Index":
			if (data.params.indexType == "indexHTML") {
				await exportAllMsgs(3);
			} else if (data.params.indexType == "indexCSV") {
				await exportAllMsgs(5);
			}
			break;
		case "WXMCMD_Exp_Profile":
			IETexport_all(data.params);
			break;
		case "WXMCMD_Imp_Profile":
			openProfileImportWizard();
			break;
		case "WXMCMD_Backup":
			window.ietng.OpenBackupDialog('manual');
			break;
		case "WXMCMD_ImpMbox":

			console.log(data.params);
			mboxImportExport.importMboxSetup(data.params);
			break;
		case "WXMCMD_ImpMaildirFiles":
			trytocopyMAILDIR();
			break;
		case "WXMCMD_ImportEML":
			importALLasEML(true);
			break;
		case "WXMCMD_CopyFolderPath":
			IETcopyFolderPath();
		break;
		case "WXMCMD_OpenFolderDir":
			IETopenFolderPath();
		break;
		case "WXMCMD_OpenOptions":
			openIEToptions();
			break;
		case "WXMCMD_OpenHelp":
			openIEThelp();
			break;
		case "WXMCMD_SaveJSON":
			IOUtils.writeJSON(data.params.path, data.params.obj);
			break;
		case "WXMCMD_getMailStoreFromFolderPath":
			let storeType = getMailStoreFromFolderPath(data.params.accountId, data.params.folderPath);
			console.log(storeType)
			return storeType;
		
		default:
			break;
	}

	return true;
}

function onUnload() {
	console.log("unload");
}
// exp listener
var listener_id = window.ietngAddon.notifyTools.addListener(expMenuDispatcher);
