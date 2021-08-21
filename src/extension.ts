// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import {getHtmlContent} from './webview';
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	let stackOverflowView = vscode.commands.registerCommand('my-stackoverflow.myView',() => {
		// Gotta play with this API :)
		// https://api.stackexchange.com/2.2/search/advanced?order=desc&sort=relevance&q=get+date+in+javascript&answers=1&site=stackoverflow
		    // Create and show panel
		const panel = vscode.window.createWebviewPanel(
			'stackOverflow',
			'My StackOverFlow 6430621001',
			vscode.ViewColumn.Two,
			{
				enableScripts: true
			}
		);	
	
		// And set its HTML content
		panel.webview.html = getHtmlContent();
	});
	context.subscriptions.push(stackOverflowView);
}

// this method is called when your extension is deactivated
export function deactivate() {}
