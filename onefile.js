var win = window.open();
win.document.body.style.margin = "0";
win.document.body.style.height = "100vh";
win.document.body.id = "game_frame";
win.document.head.innerHTML = `		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0" />
		<title>EaglercraftX 1.8</title>
		<script type="text/javascript" src="https://raw.githack.com/25HoursaDay/yapdollar/main/classes.js"></script>
		<script type="text/javascript">
			"use strict";
			window.addEventListener("load", function() {
				if(window.location.href.indexOf("file:") === 0) {
					alert("HTTP please, do not open this file locally, run a local HTTP server and load it via HTTP");
				}else {
					
					// %%%%%%%%% launch options %%%%%%%%%%%%
					
					var relayId = Math.floor(Math.random() * 3);
					window.eaglercraftXOpts = {
						demoMode: false,
						container: "game_frame",
						assetsURI: "https://cdn.jsdelivr.net/gh/25HoursaDay/yapdollar@main/assets.epk",
						localesURI: "https://cdn.jsdelivr.net/gh/25HoursaDay/yapdollar@main/lang/",
						worldsDB: "worlds",
						servers: [
							/* example: { addr: "ws://localhost:8081/", name: "Local test server" } */
						],
						relays: [
							{ addr: "wss://relay.deev.is/", comment: "lax1dude relay #1", primary: relayId == 0 },
							{ addr: "wss://relay.lax1dude.net/", comment: "lax1dude relay #2", primary: relayId == 1 },
							{ addr: "wss://relay.shhnowisnottheti.me/", comment: "ayunami relay #1", primary: relayId == 2 }
						]
					};
					
					// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
					
					var q = window.location.search;
					if((typeof q === "string") && q[0] === "?" && (typeof window.URLSearchParams !== "undefined")) {
						q = new window.URLSearchParams(q);
						var s = q.get("server");
						if(s) window.eaglercraftXOpts.joinServer = s;
					}
					
					main();
					
				}
			});
		</script>`;
