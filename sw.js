if(!self.define){let e,s={};const i=(i,c)=>(i=new URL(i+".js",c).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,a)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let o={};const r=e=>i(e,n),d={module:{uri:n},exports:o,require:r};s[n]=Promise.all(c.map((e=>d[e]||r(e)))).then((e=>(a(...e),o)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/0b7b90cd.980a42d700821c9e.js",revision:"980a42d700821c9e"},{url:"/_next/static/chunks/128-3e54d24513fd371d.js",revision:"3e54d24513fd371d"},{url:"/_next/static/chunks/132-3f9e7f46ac1ffa2f.js",revision:"3f9e7f46ac1ffa2f"},{url:"/_next/static/chunks/134-d7a45c7808de6c34.js",revision:"d7a45c7808de6c34"},{url:"/_next/static/chunks/140.1cd13b669cd89fdf.js",revision:"1cd13b669cd89fdf"},{url:"/_next/static/chunks/200-a691c41d5111cb8d.js",revision:"a691c41d5111cb8d"},{url:"/_next/static/chunks/244.21678abe5776396c.js",revision:"21678abe5776396c"},{url:"/_next/static/chunks/245-6ddd52159e857055.js",revision:"6ddd52159e857055"},{url:"/_next/static/chunks/493-4db40a54d2b13d96.js",revision:"4db40a54d2b13d96"},{url:"/_next/static/chunks/540-16739d1ada133fe2.js",revision:"16739d1ada133fe2"},{url:"/_next/static/chunks/560-8302a84212c84e7d.js",revision:"8302a84212c84e7d"},{url:"/_next/static/chunks/586-9468f7a244f31356.js",revision:"9468f7a244f31356"},{url:"/_next/static/chunks/614-f7fad7c2d73bacad.js",revision:"f7fad7c2d73bacad"},{url:"/_next/static/chunks/646-3cd36fd59196e1dc.js",revision:"3cd36fd59196e1dc"},{url:"/_next/static/chunks/677-8759604e44777329.js",revision:"8759604e44777329"},{url:"/_next/static/chunks/798.090c3ecc08eb3abf.js",revision:"090c3ecc08eb3abf"},{url:"/_next/static/chunks/832.ba506a9ae51e4f14.js",revision:"ba506a9ae51e4f14"},{url:"/_next/static/chunks/914-b7ec015207c01324.js",revision:"b7ec015207c01324"},{url:"/_next/static/chunks/967-827c3bafaaefc191.js",revision:"827c3bafaaefc191"},{url:"/_next/static/chunks/ee8b1517-67aacbd964ee043a.js",revision:"67aacbd964ee043a"},{url:"/_next/static/chunks/framework-73b8966a3c579ab0.js",revision:"73b8966a3c579ab0"},{url:"/_next/static/chunks/main-8769e7291525010c.js",revision:"8769e7291525010c"},{url:"/_next/static/chunks/pages/404-0885a1a1361a25ef.js",revision:"0885a1a1361a25ef"},{url:"/_next/static/chunks/pages/_app-c7a59c2e906a65e0.js",revision:"c7a59c2e906a65e0"},{url:"/_next/static/chunks/pages/_error-409f831d3504c8f5.js",revision:"409f831d3504c8f5"},{url:"/_next/static/chunks/pages/auth-10cedd224c09806b.js",revision:"10cedd224c09806b"},{url:"/_next/static/chunks/pages/emergencyInformation-0b25d0ac31c0c4aa.js",revision:"0b25d0ac31c0c4aa"},{url:"/_next/static/chunks/pages/index-e19b550748dfc9ac.js",revision:"e19b550748dfc9ac"},{url:"/_next/static/chunks/pages/map-de8052f6c795bf5e.js",revision:"de8052f6c795bf5e"},{url:"/_next/static/chunks/pages/meteoSummary-21e1573ce297d8b5.js",revision:"21e1573ce297d8b5"},{url:"/_next/static/chunks/pages/puiddCombinedReport-9e2c14fe568461e5.js",revision:"9e2c14fe568461e5"},{url:"/_next/static/chunks/pages/puiddIntervalReport-0f91720ab04967c6.js",revision:"0f91720ab04967c6"},{url:"/_next/static/chunks/pages/puiddMonthlySummaryReport-8798a3cdf7746f62.js",revision:"8798a3cdf7746f62"},{url:"/_next/static/chunks/pages/puiddOdmDReport-f74be33584982bad.js",revision:"f74be33584982bad"},{url:"/_next/static/chunks/pages/puiddOdmGReport-68fd49abeb554991.js",revision:"68fd49abeb554991"},{url:"/_next/static/chunks/pages/puiddSummaryReport-e1a3bf44496c9d78.js",revision:"e1a3bf44496c9d78"},{url:"/_next/static/chunks/pages/puiddSummaryTruckReport-637cee3cfa26b85b.js",revision:"637cee3cfa26b85b"},{url:"/_next/static/chunks/pages/puiddYearlyAverageReport-186c1cffb45f6e8a.js",revision:"186c1cffb45f6e8a"},{url:"/_next/static/chunks/pages/puiddYearlyReport-fff69d6f83bc237d.js",revision:"fff69d6f83bc237d"},{url:"/_next/static/chunks/pages/smartCrossroadStatusReport-f72d7787d6228322.js",revision:"f72d7787d6228322"},{url:"/_next/static/chunks/pages/videoWall-b05e8dfe995f00a0.js",revision:"b05e8dfe995f00a0"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-104852151c261d77.js",revision:"104852151c261d77"},{url:"/_next/static/css/1d2f2697fd71976f.css",revision:"1d2f2697fd71976f"},{url:"/_next/static/css/1fdd0138dd893433.css",revision:"1fdd0138dd893433"},{url:"/_next/static/css/288f23130d20332e.css",revision:"288f23130d20332e"},{url:"/_next/static/css/4c676dc1d219c89f.css",revision:"4c676dc1d219c89f"},{url:"/_next/static/css/4cb31295138f98e2.css",revision:"4cb31295138f98e2"},{url:"/_next/static/css/4d516aa18e26e43f.css",revision:"4d516aa18e26e43f"},{url:"/_next/static/css/610364c1c0cda3b5.css",revision:"610364c1c0cda3b5"},{url:"/_next/static/css/6e3ef7c6a1b35ed3.css",revision:"6e3ef7c6a1b35ed3"},{url:"/_next/static/css/83c70edd2e28076d.css",revision:"83c70edd2e28076d"},{url:"/_next/static/css/89c0fb75f60ffbc1.css",revision:"89c0fb75f60ffbc1"},{url:"/_next/static/css/998811dee1ffa751.css",revision:"998811dee1ffa751"},{url:"/_next/static/css/a3c0840e5835f80b.css",revision:"a3c0840e5835f80b"},{url:"/_next/static/css/b00882e6fb94814b.css",revision:"b00882e6fb94814b"},{url:"/_next/static/css/b16dd3b240495945.css",revision:"b16dd3b240495945"},{url:"/_next/static/css/cf91cbedb46ae49f.css",revision:"cf91cbedb46ae49f"},{url:"/_next/static/css/cfd950b3005743c1.css",revision:"cfd950b3005743c1"},{url:"/_next/static/css/d3087d89c0092726.css",revision:"d3087d89c0092726"},{url:"/_next/static/css/d84531e7a3110a47.css",revision:"d84531e7a3110a47"},{url:"/_next/static/css/e02c46ff13187ef8.css",revision:"e02c46ff13187ef8"},{url:"/_next/static/css/e41a0f50d2ca0979.css",revision:"e41a0f50d2ca0979"},{url:"/_next/static/sVTi7cAxazlV1Z9F5HXtG/_buildManifest.js",revision:"f44b15303cf5488ef5ef9775d38140b9"},{url:"/_next/static/sVTi7cAxazlV1Z9F5HXtG/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/api-config.js",revision:"5fbb922075bcb6840b70ea7d152d5eaa"},{url:"/browserconfig.xml",revision:"a2ae6fa741e10815af479f82e19b1600"},{url:"/close-icon.svg",revision:"177a02341ff492d9b5874a2dd8fa415b"},{url:"/dropdown-arrow.svg",revision:"20c64f17d705aba5f792151aeec5755a"},{url:"/forecast-point-mobile.svg",revision:"a8153c070a2e2704622fa17a07d0c4bd"},{url:"/forecast-point.svg",revision:"f19c733f8cddea447b0baa26328298f1"},{url:"/icons/points/desktop/all/alarm.svg",revision:"9309ad2c3626f3c34edf0a7f8a0a9644"},{url:"/icons/points/desktop/all/normal.svg",revision:"7ab40ce84b8a155b7105dec32923bedb"},{url:"/icons/points/desktop/all/warning.svg",revision:"1e981f60d93c2716e283df89a14c6783"},{url:"/icons/points/desktop/forecast/alarm.svg",revision:"c669f78a04b67699bb7e2bf29246d48f"},{url:"/icons/points/desktop/forecast/normal.svg",revision:"f143f64d929852b510727be356cbd817"},{url:"/icons/points/desktop/forecast/warning.svg",revision:"3711e7485d4250e0892cc6906442d641"},{url:"/icons/points/desktop/meteo/alarm.svg",revision:"63085299d94deefe96fdd8bbc0b1db9d"},{url:"/icons/points/desktop/meteo/normal.svg",revision:"f63198c8d490a2db16d7daec8125364a"},{url:"/icons/points/desktop/meteo/warning.svg",revision:"ffb5a1091be4811fd054749c15051b21"},{url:"/icons/points/desktop/puidd/alarm.svg",revision:"26376aecd15f8e9e657870beeb886182"},{url:"/icons/points/desktop/puidd/normal.svg",revision:"d03e21ce43339b90424e3fa5fa94c72b"},{url:"/icons/points/desktop/puidd/warning.svg",revision:"0c22c0a79a8be2d73bbbd0636c4e7c25"},{url:"/icons/points/desktop/road/alarm.svg",revision:"2d8e5891a99ac73c207680b933698bc3"},{url:"/icons/points/desktop/road/normal.svg",revision:"30fe395cd1a162ef89f06c723de29a41"},{url:"/icons/points/desktop/road/warning.svg",revision:"c74155467cc530210f631d2320cb2468"},{url:"/icons/points/desktop/tpi/alarm.svg",revision:"0080676ca6f1b5396da2b95d83e240d8"},{url:"/icons/points/desktop/tpi/normal.svg",revision:"1fe889c280cce37d3f299a6b8fe241a9"},{url:"/icons/points/desktop/tpi/warning.svg",revision:"c5dd3c5e8f6e836630afbd1d60be0f96"},{url:"/icons/points/desktop/video/alarm.svg",revision:"dba0c25e94494e41f365698854f11646"},{url:"/icons/points/desktop/video/normal.svg",revision:"7cf45bd677f38da8956670f7f7c41240"},{url:"/icons/points/desktop/video/warning.svg",revision:"76243969e67af87a3f8034a54b50c5e1"},{url:"/icons/points/mobile/all/alarm.svg",revision:"f283e1baff57a7aad8d49de0d182267f"},{url:"/icons/points/mobile/all/normal.svg",revision:"3cb2fcf9850a5681710987483f38c1b1"},{url:"/icons/points/mobile/all/warning.svg",revision:"7d035e0b0d125c5eb0f95c6dc1651083"},{url:"/icons/points/mobile/forecast/alarm.svg",revision:"b316148304bafba6eb5b3315c841e457"},{url:"/icons/points/mobile/forecast/normal.svg",revision:"8bb5b5ec6f169f648295d6b6346cd6fd"},{url:"/icons/points/mobile/forecast/warning.svg",revision:"7513d462da1bf9226421f807123702e8"},{url:"/icons/points/mobile/meteo/alarm.svg",revision:"2b64846826cd461993d4c468dbf87f3a"},{url:"/icons/points/mobile/meteo/normal.svg",revision:"80a23e5c4afd7f9d692dd7825ede320f"},{url:"/icons/points/mobile/meteo/warning.svg",revision:"cfb7b00e888ca3c4f3c1b3b69d6e5dd0"},{url:"/icons/points/mobile/puidd/alarm.svg",revision:"6b9cb3290f4e427cb148dc79d4fbf3fc"},{url:"/icons/points/mobile/puidd/normal.svg",revision:"79f4d4e51b6f452c6c3a4c6165a34b8e"},{url:"/icons/points/mobile/puidd/warning.svg",revision:"4526899b6d963b6173b6f10dc962e09b"},{url:"/icons/points/mobile/road/alarm.svg",revision:"0503ccb01e0bea85af138e47036faddd"},{url:"/icons/points/mobile/road/normal.svg",revision:"e413169953f76954ac5227d7bec28195"},{url:"/icons/points/mobile/road/warning.svg",revision:"daad46dd4e5d00a153780639ee24218a"},{url:"/icons/points/mobile/tpi/alarm.svg",revision:"c0b2643a7a2871f0bf78967a291d40fa"},{url:"/icons/points/mobile/tpi/normal.svg",revision:"004e168b31f5d04bdb67ec10018abbb2"},{url:"/icons/points/mobile/tpi/warning.svg",revision:"8f3ae32a820961bc34730dc87fdcb3be"},{url:"/icons/points/mobile/video/alarm.svg",revision:"bc745ab938a6aae106c57f3b81564a98"},{url:"/icons/points/mobile/video/normal.svg",revision:"067eb32ee314c6370bdcfebc372b1a52"},{url:"/icons/points/mobile/video/warning.svg",revision:"255b58099d6fa7856ca0bf19c95df42b"},{url:"/icons/weather/desktop/Cloud-0.svg",revision:"0dfb435f2649ca1db7e4b92672778240"},{url:"/icons/weather/desktop/Cloud-1.svg",revision:"7cbadb07a62a8a184bb0dc936eb86142"},{url:"/icons/weather/desktop/Cloud-2.svg",revision:"ecdcec6e0a11cec6c81328dd8dfb5803"},{url:"/icons/weather/desktop/Cloud-3.svg",revision:"15a31fc12a4f915726b27239b4ef8d11"},{url:"/icons/weather/desktop/Cloud-4.svg",revision:"e60e203ad8fdd529b120b389315f8e77"},{url:"/icons/weather/desktop/Clouds-0.svg",revision:"db733f4f2f83f76353f67b6d3d5fe263"},{url:"/icons/weather/desktop/Clouds-1.svg",revision:"a0bd952e7175b76b3796b58ec2c48235"},{url:"/icons/weather/desktop/Clouds-2.svg",revision:"9eba8494f51a6084d036a03f68e081b7"},{url:"/icons/weather/desktop/Clouds-3.svg",revision:"90d3877ce33c06bf68de8054fddd8bb5"},{url:"/icons/weather/desktop/Clouds-4.svg",revision:"e60e203ad8fdd529b120b389315f8e77"},{url:"/icons/weather/desktop/Frozen-Rain-1.svg",revision:"9dcf5d5602dbd6b28d30dfaa8eef7ece"},{url:"/icons/weather/desktop/Frozen-Rain-2.svg",revision:"a4aa1aaa0596df8d86f7cd0f8456dee2"},{url:"/icons/weather/desktop/Frozen-Rain-3.svg",revision:"07e924dbb9ae1aa368bff7a6087442dc"},{url:"/icons/weather/desktop/Frozen-Rain-4.svg",revision:"1ea305089432414ee9014159504eca17"},{url:"/icons/weather/desktop/IceGrains-1.svg",revision:"24557bd3b3ddafeec752d4e9fd5250d5"},{url:"/icons/weather/desktop/IceGrains-2.svg",revision:"19e5cc03a3c48c7920bfdbc171782d27"},{url:"/icons/weather/desktop/IceGrains-3.svg",revision:"ebc7641111516dee19f2d3dab5602e0f"},{url:"/icons/weather/desktop/IceGrains-4.svg",revision:"be88ed82bec692672c6857be9c381d6a"},{url:"/icons/weather/desktop/Moon-1.svg",revision:"84c7370fabae7585407f41d43ce43ad8"},{url:"/icons/weather/desktop/Moon-Full.svg",revision:"b1d0708080d2068a82abc1a858402f10"},{url:"/icons/weather/desktop/Rain-1.svg",revision:"8f9fe6793ce65892870c44eac4b07d5f"},{url:"/icons/weather/desktop/Rain-2.svg",revision:"97689d5c0bbe9f967e277d18def7672c"},{url:"/icons/weather/desktop/Rain-3.svg",revision:"68fc62917d6dc1d1d5fa12bf5dbf0ab9"},{url:"/icons/weather/desktop/Rain-4.svg",revision:"340ed9e221b74905ad514e3b9adeba99"},{url:"/icons/weather/desktop/Rain-With-Snow-1.svg",revision:"5af9296b80584026a433779acc982e7f"},{url:"/icons/weather/desktop/Rain-With-Snow-2.svg",revision:"29663c2fb618c02a758b08827546d2a2"},{url:"/icons/weather/desktop/Rain-With-Snow-3.svg",revision:"65ca1602cbbaef10bf1a900105aab2fa"},{url:"/icons/weather/desktop/Rain-With-Snow-4.svg",revision:"984d6c47b5be21b4bec3cece604bfa4f"},{url:"/icons/weather/desktop/Snow-1.svg",revision:"fd88d0c62585afa2c386d0155323cf15"},{url:"/icons/weather/desktop/Snow-2.svg",revision:"b1caab6d9fb6b3350e6133b42b00c773"},{url:"/icons/weather/desktop/Snow-3.svg",revision:"47b8d65ea1108206b1ca4dc840249566"},{url:"/icons/weather/desktop/Snow-4.svg",revision:"8abe5142d0b4d1ab63bcc4e71afecf71"},{url:"/icons/weather/desktop/Sun-1.svg",revision:"807cd159c97b0263671ec9038ea45a05"},{url:"/icons/weather/desktop/Sun-Full.svg",revision:"7a86cd06b2d7d3f3815c10446f7895e5"},{url:"/icons/weather/desktop/Thunder.svg",revision:"41b5605f81d47f5a96b9b7328120c051"},{url:"/icons/weather/mobile/Cloud-0.svg",revision:"485859cef302606671c52aed7b30c278"},{url:"/icons/weather/mobile/Cloud-1.svg",revision:"9524f0cee50fe6bda3e7266720d6bd0f"},{url:"/icons/weather/mobile/Cloud-2.svg",revision:"2311cdf1f5345970e4ab753171fd52bb"},{url:"/icons/weather/mobile/Cloud-3.svg",revision:"a859b3fc99234dce03e1088256bdf97d"},{url:"/icons/weather/mobile/Cloud-4.svg",revision:"471338d5eaeb169ad2fb442cbac78f55"},{url:"/icons/weather/mobile/Clouds-0.svg",revision:"e739726b34dc828d19c49bf293d9be5f"},{url:"/icons/weather/mobile/Clouds-1.svg",revision:"006af9ed199c9c0d088806390a7ea2db"},{url:"/icons/weather/mobile/Clouds-2.svg",revision:"b519b35d7694809d9d7bf11b68bf2526"},{url:"/icons/weather/mobile/Clouds-3.svg",revision:"67f3b9199d3716bc5b43c4a0697f975c"},{url:"/icons/weather/mobile/Clouds-4.svg",revision:"6c0117e21f6c494681aa0098f966aa46"},{url:"/icons/weather/mobile/Frozen-Rain-1.svg",revision:"7537377cc5887364893dbe8446b207cb"},{url:"/icons/weather/mobile/Frozen-Rain-2.svg",revision:"7d9e602962265aa829fa63ae8b029220"},{url:"/icons/weather/mobile/Frozen-Rain-3.svg",revision:"b80d2e1c5f7b10ee4bc3188e3bbe7405"},{url:"/icons/weather/mobile/Frozen-Rain-4.svg",revision:"c6eab0e87430d6e66bf3512e72443b48"},{url:"/icons/weather/mobile/IceGrains-1.svg",revision:"dcf1d311857fcbaf5c9feedca1c5709f"},{url:"/icons/weather/mobile/IceGrains-2.svg",revision:"61b670ca8f64ac1d0f09fc0b695dc0c1"},{url:"/icons/weather/mobile/IceGrains-3.svg",revision:"13687e222ee5197eefa9ac9d739a75ce"},{url:"/icons/weather/mobile/IceGrains-4.svg",revision:"a412f59027f0c8497d2f37a608301b33"},{url:"/icons/weather/mobile/Moon-1.svg",revision:"a3ca499f27a975b74027938d944ceffd"},{url:"/icons/weather/mobile/Moon-Full.svg",revision:"b77eda68e03b287a5fb81a3ef744b7c2"},{url:"/icons/weather/mobile/Rain-1.svg",revision:"8e1df62f0be8d0dfd80d407a082d99cb"},{url:"/icons/weather/mobile/Rain-2.svg",revision:"21d1aad3894ae8ab9f4f03777d3a3b71"},{url:"/icons/weather/mobile/Rain-3.svg",revision:"b342032e47a9875559a78bad05b3a54d"},{url:"/icons/weather/mobile/Rain-4.svg",revision:"18e3692b97eb1c57f9f9c68b4f99e731"},{url:"/icons/weather/mobile/Rain-With-Snow-1.svg",revision:"8590a0459ff08bc96419f49b61cf5188"},{url:"/icons/weather/mobile/Rain-With-Snow-2.svg",revision:"71b22aeffbddb7efd8fb6cdf93ef0522"},{url:"/icons/weather/mobile/Rain-With-Snow-3.svg",revision:"294bca45650bcca043ff2aa47eb95bc1"},{url:"/icons/weather/mobile/Rain-With-Snow-4.svg",revision:"d1a71547bed9aab90b2903683c57297c"},{url:"/icons/weather/mobile/Snow-1.svg",revision:"209649c1f20dffa3d26a95b0b0af54b0"},{url:"/icons/weather/mobile/Snow-2.svg",revision:"33415bd4a8cc1177fd829c292a4354ea"},{url:"/icons/weather/mobile/Snow-3.svg",revision:"b5c8b2a4e05f6ce89d606c0d5cc1691c"},{url:"/icons/weather/mobile/Snow-4.svg",revision:"c982506443373ecd24954d0fd212e6a1"},{url:"/icons/weather/mobile/Sun-1.svg",revision:"3b856a285a219766a312b1093073f7d1"},{url:"/icons/weather/mobile/Sun-Full.svg",revision:"ab207553e9bc5f158b8779907e447acd"},{url:"/icons/weather/mobile/Thunder.svg",revision:"ba245a1f8226c72398dbbeb7a58b48f6"},{url:"/iconsSite/apple-icon-114x114.png",revision:"3b7986c4a7a7ce148b27c2e2a40d253a"},{url:"/iconsSite/apple-icon-120x120.png",revision:"e789844d2455ad4bb5d600416890480e"},{url:"/iconsSite/apple-icon-144x144.png",revision:"3aceb4b445181ced77c9df64fefacabd"},{url:"/iconsSite/apple-icon-152x152.png",revision:"27b5bac0b82dba9a112a3bbf4cf46bca"},{url:"/iconsSite/apple-icon-180x180.png",revision:"5fc9db04cedb446d2e0ba5e5151ce336"},{url:"/iconsSite/apple-icon-192x192.png",revision:"2275592ffa8ea62afad659020702bc58"},{url:"/iconsSite/apple-icon-57x57.png",revision:"c64ff8cab085b8943d88415050309ce6"},{url:"/iconsSite/apple-icon-60x60.png",revision:"751f95c86d01da9d6eff28372cf16b13"},{url:"/iconsSite/apple-icon-72x72.png",revision:"6ef2db40ab8a3fce71d16f7e27b9e3a6"},{url:"/iconsSite/apple-icon-76x76.png",revision:"5a721321e1103243bd80af358f8c9b8b"},{url:"/iconsSite/favicon-144x144.png",revision:"3aceb4b445181ced77c9df64fefacabd"},{url:"/iconsSite/favicon-16x16.png",revision:"c2671435538fab1ff76cea8edfcdc715"},{url:"/iconsSite/favicon-192x192.png",revision:"2275592ffa8ea62afad659020702bc58"},{url:"/iconsSite/favicon-32x32.png",revision:"9d25c593c400025780cc0bb40ca12ac0"},{url:"/iconsSite/favicon-36x36.png",revision:"8eac79b673430c1b493869b8342d1351"},{url:"/iconsSite/favicon-48x48.png",revision:"0e74e0cf36612904f7f41fcad2b87a43"},{url:"/iconsSite/favicon-512x512.png",revision:"217082a288f6341a283f1c86d7b6437b"},{url:"/iconsSite/favicon-72x72.png",revision:"6ef2db40ab8a3fce71d16f7e27b9e3a6"},{url:"/iconsSite/favicon-96x96.png",revision:"67bc2b3708719a06e24fad989af2dddc"},{url:"/iconsSite/favicon.ico",revision:"ea455b7a884efa8c5005ea9b1bb08100"},{url:"/iconsSite/icon-maskable-192x192.png",revision:"df7fe836fa51a031b0adfcdc7a9ef73d"},{url:"/iconsSite/icon-maskable-512x512.png",revision:"145f8f704067951f4d4bb6e32ba6de9a"},{url:"/iconsSite/ms-icon-144x144.png",revision:"3aceb4b445181ced77c9df64fefacabd"},{url:"/iconsSite/ms-icon-150x150.png",revision:"decab737d6543c96e3e64a7a583a891c"},{url:"/iconsSite/ms-icon-270x270.png",revision:"1052dc946651b2f315d61150defe0ca4"},{url:"/iconsSite/ms-icon-310x310.png",revision:"76c5a0642ace9ae101660551e46a2f92"},{url:"/iconsSite/ms-icon-70x70.png",revision:"31acc61866ee18c2085fc629ca3a0d73"},{url:"/manifest.json",revision:"2d9ce8be4758bcc2c3f4e4d17685a609"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/thirteen.svg",revision:"53f96b8290673ef9d2895908e69b2f92"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
