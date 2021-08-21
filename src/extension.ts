// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	let stackOverflowView = vscode.commands.registerCommand('my-stackoverflow.myView',() => {
		const panel = vscode.window.createWebviewPanel(
			'stackOverflow',
			'My StackOverFlow 6430621001 Demo',
			vscode.ViewColumn.Two,
			{
				enableScripts: true
			}
		);
		const filePath: vscode.Uri = vscode.Uri.file(path.join(context.extensionPath, 'ui', 'index.html'));
		panel.webview.html = fs.readFileSync(filePath.fsPath,'utf8');
	});
	context.subscriptions.push(stackOverflowView);
}

// this method is called when your extension is deactivated
export function deactivate() {}
