var api = 'http://myminingpool.online:8119/stats';
var apiList = ["https://main01.getspeedcash.org:27771", "https://main02.getspeedcash.org:27771"];

var blockTargetInterval = 60;
var coinUnits = 100000000;
var symbol = 'SCS';
var refreshDelay = 30000;
var blocksPerPage = 20;
var whiteTheme = "css/light.css";
var nightTheme = "css/dark.css";
var addressPattern = new RegExp("^K[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{94}$");
