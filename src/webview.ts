// I've only included HTML in this and CSS and JS files are linked externally
// If you are here to contribute to the UI just edit the files in /ui folder and test it from index.html and then create a pull request
// I will take the files from ui folder and will host it over cdn
const html = `
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Integrated Stackoverflow Search</title>
        <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://thephukettrip.com/style-0.0.2.css">
        <!-- <link rel="stylesheet" href="https://raw.githubusercontent.com/aef-nattanon/vscode-integrated-stackoverflow/master/ui/style1.css"> -->
        <!-- <link rel="stylesheet" href="file:///Users/nattanon/Codes/tesis/vscode-integrated-stackoverflow/ui/style.css"> -->
        <link rel="shortcut icon" href="logo-192.png" type="image/x-icon">
    </head>
    <body>
        <div style="padding:20px;">
            <!-- <label for="search" style="color:#09f;">Search</label> -->
            <div style="display:flex;">
                <input id="search" style="display:inline-block;width:75%;padding:6px;flex:1;" type="search">
                <button class="search-button blue-button">Search</button>
            </div>
            <div id="loading" style="display: none;">Loading...</div>
            <div id="answers" style="margin-top:20px;">

            </div>
        </div>
        <script src="https://thephukettrip.com/script-0.0.2.js"></script>
        <!-- <script src="https://raw.githubusercontent.com/aef-nattanon/vscode-integrated-stackoverflow/master/ui/script.js"></script> -->
        <!-- <script src="file:///Users/nattanon/Codes/tesis/vscode-integrated-stackoverflow/ui/script.js"></script> -->
    </body>
</html>
`;


export const getHtmlContent=()=> {
    console.log(html);
    return html;
};
