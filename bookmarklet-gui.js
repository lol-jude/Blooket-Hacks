(()=>{let e=document.createElement("iframe");document.body.append(e),window.alert=e.contentWindow.alert.bind(window),window.prompt=e.contentWindow.prompt.bind(window),window.confirm=e.contentWindow.confirm.bind(window),e.remove()})(),(()=>{let e=document.createElement("style");e.innerHTML="details > summary {\n    cursor: pointer;\n    transition: 0.15s;\n    list-style: none;\n}\ndetails > summary:hover {\n    color: hsl(0, 0%, 50%)\n}\ndetails > summary::-webkit-details-marker {\n    display: none;\n}\ndetails summary ~ * {\n    animation: sweep .5s ease-in-out;\n}\n\n@keyframes sweep {\n    0%    {opacity: 0; transform: translateY(-10px)}\n    100%  {opacity: 1; transform: translateY(0)}\n}\n.cheat {\n    border: none;\n    background: hsl(0, 0%, 20%);\n    padding: 5px;\n    margin: 3px;\n    width: 60%;\n    color: hsl(0, 0%, 100%);\n    transition: 0.2s;\n    border-radius: 5px;\n    cursor: pointer;\n}\n.cheat:hover {\n    background: hsl(0, 0%, 30%);\n}";const t=document.createElement("div");t.appendChild(e),t.style.width="400px",t.style.background="hsl(0, 0%, 10%)",t.style.borderRadius="10px",t.style.position="absolute",t.style.textAlign="center",t.style.fontFamily="Nunito",t.style.color="white",t.style.overflow="hidden",t.style.top="50px",t.style.left="50px";var o=0,a=0,n=0,r=0;t.onmousedown=(e=window.event)=>{e.preventDefault(),n=e.clientX,r=e.clientY,document.onmouseup=()=>{document.onmouseup=null,document.onmousemove=null},document.onmousemove=e=>{(e=e||window.event).preventDefault(),o=n-e.clientX,a=r-e.clientY,n=e.clientX,r=e.clientY,t.style.top=t.offsetTop-a+"px",t.style.left=t.offsetLeft-o+"px"}};let s,l=document.createElement("div");t.appendChild(l),l.style.width="100%",l.style.height="35px",l.style.paddingTop="2px",l.style.fontSize="1.5rem",l.style.textAlign="center",l.innerHTML='Blooket Cheats <span style="font-size: 0.75rem">v4.10.22</span>';let i=document.createElement("button");l.appendChild(i),i.style.background="red",i.style.height="45px",i.style.width="45px",i.style.border="none",i.style.cursor="pointer",i.style.position="absolute",i.style.top="-10px",i.style.right="-10px",i.style.fontSize="1.5rem",i.style.borderRadius="10px",i.style.fontFamily="Nunito",i.style.fontWeight="bolder",i.style.paddingTop="10px",i.style.paddingRight="15px",i.innerText="X",i.onclick=()=>{t.remove(),clearInterval(s),removeEventListener("keypress",P)};let d=document.createElement("button");l.appendChild(d),d.style.background="#444444",d.style.height="45px",d.style.width="45px",d.style.border="none",d.style.cursor="pointer",d.style.position="absolute",d.style.top="-10px",d.style.left="-10px",d.style.fontSize="1.5rem",d.style.borderRadius="10px",d.style.fontFamily="Nunito",d.style.fontWeight="bolder",d.style.paddingTop="10px",d.style.paddingLeft="15px",d.innerText="-",d.onclick=()=>{c.hidden=!c.hidden};let c=document.createElement("div"),p=document.createElement("div");c.appendChild(p),t.appendChild(c),p.innerHTML=`<span id="curPageEl">${T(!0)?`Current gamemode: ${T(!0)}`:"No game detected"}</span><br><span>(Press E to hide)</span><br>`,p.style.display="block",p.style.margin="10px",p.style.minHeight="70px";let m=document.createElement("span");p.appendChild(m),document.body.append(t);let u=document.createElement("div");c.appendChild(u),u.style.fontSize="0.9rem",u.style.paddingBottom="5px",u.innerHTML='<span>GUI by OneMinesraft2#5394<br>Cheats by <a style="color: lightblue" href="https://twitter.com/glizuwu">gliz</a></span>';var h=()=>new Promise(((e,t)=>{try{let t=window.webpackJsonp.map((e=>Object.keys(e[1]).map((t=>e[1][t])))).reduce(((e,t)=>[...e,...t]),[]).find((e=>/\w{8}-\w{4}-\w{4}-\w{4}-\w{12}/.test(e.toString())&&/\(new TextEncoder\)\.encode\(\"(.+?)\"\)/.test(e.toString()))).toString();e({blooketBuild:t.match(/\w{8}-\w{4}-\w{4}-\w{4}-\w{12}/)[0],secret:t.match(/\(new TextEncoder\)\.encode\(\"(.+?)\"\)/)[1]})}catch{t("Could not fetch auth details")}})),y=async(e,t)=>{let o=window.crypto.getRandomValues(new Uint8Array(12));return window.btoa(Array.from(o).map((e=>String.fromCharCode(e))).join("")+Array.from(new Uint8Array(await window.crypto.subtle.encrypt({name:"AES-GCM",iv:o},await window.crypto.subtle.importKey("raw",await window.crypto.subtle.digest("SHA-256",(new TextEncoder).encode(t)),{name:"AES-GCM"},!1,["encrypt"]),(new TextEncoder).encode(JSON.stringify(e))))).map((e=>String.fromCharCode(e))).join(""))};function w(){return Object.values(document.querySelector("#app > div > div"))[1].children[1]._owner}let f,b,g,k,N,S={global:{"Get Daily Rewards":()=>{fetch("https://api.blooket.com/api/users",{credentials:"include"}).then((e=>e.json())).then((e=>{h().then((async t=>{fetch("https://api.blooket.com/api/users/add-rewards",{method:"put",credentials:"include",headers:{"content-type":"application/json","X-Blooket-Build":t.blooketBuild},body:await y({name:e.name,addedTokens:250,addedXp:300},t.secret)}),fetch("https://api.blooket.com/api/users/add-rewards",{method:"put",credentials:"include",headers:{"content-type":"application/json","X-Blooket-Build":t.blooketBuild},body:await y({name:e.name,addedTokens:250,addedXp:300},t.secret)}).then((()=>alert("Added daily rewawrds!"))).catch((()=>alert("There was an error when adding rewards!")))})).catch((()=>alert("There was an error encoding requests!")))})).catch((()=>alert("There was an error getting username!")))},"Spoof Blooks":()=>{if(!window.location.pathname.split("/").includes("lobby"))return alert("You must be in a game lobby! (e.g. https://www.blooket.com/play/lobby)");w().stateNode.setState({lockedBlooks:[],takenBlooks:[]})},"Toggle Auto Answer":()=>{f=!f},"Toggle Highlight Answers":()=>{b=!b},"Spam Open Boxes":()=>{let e=prompt("Which box do you want to open? (e.g. Space)"),t={safari:25,aquatic:20,bot:20,space:20,breakfast:15,medieval:15,wonderland:15};if(!Object.keys(t).includes(e.toLowerCase()))return alert("I could not find that box!");let o=prompt("How many boxes do you want to open?");fetch("https://api.blooket.com/api/users",{credentials:"include"}).then((e=>e.json())).then((a=>{if(a.tokens<t[e.toLowerCase()]*o&&(o=Math.floor(a.tokens/t[e.toLowerCase()])),!o)return alert("You do not have enough tokens!");let n=e=>new Promise((t=>setTimeout(t,e)));h().then((async t=>{let r=!1,s=[];for(let l=0;l<o&&(fetch("https://api.blooket.com/api/users/unlockblook",{method:"put",credentials:"include",headers:{"content-type":"application/json","X-Blooket-Build":t.blooketBuild},body:await y({name:a.name,box:e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()},t.secret)}).then((async e=>{let t=await e.json();s.push(t.unlockedBlook),alert(`${t.unlockedBlook} (${l+1}/${o})`)})).catch((()=>{r=!0})),await n(750),!r);l++);let l={};s.forEach((e=>{l[e]=(l[e]||0)+1})),alert("Results:\n"+Object.entries(l).map((e=>`    ${e[1]} ${e[0]}`)).join("\n"))})).catch((()=>alert("There was an error encoding requests!")))})).catch((()=>alert("There was an error getting username!")))},"Auto Sell Dupes":()=>{fetch("https://api.blooket.com/api/users",{credentials:"include"}).then((e=>e.json())).then((e=>{let t=Object.entries(e.unlocks).map((e=>[e[0],e[1]-1])).filter((e=>e[1]>0)),o=e=>new Promise((t=>setTimeout(t,e)));h().then((async a=>{let n=!1;alert("Selling duplicate blooks, please wait");for(let[r,s]of t)if(fetch("https://api.blooket.com/api/users/sellblook",{method:"put",credentials:"include",headers:{"content-type":"application/json","X-Blooket-Build":a.blooketBuild},body:await y({name:e.name,blook:r,numSold:s},a.secret)}).catch((()=>{n=!0})),await o(750),n)break;alert("Results:\n"+t.map((e=>`    ${e[1]} ${e[0]}`)).join("\n"))})).catch((()=>alert("There was an error encoding requests!")))})).catch((()=>alert("There was an error getting user data!")))}},cafe:{"Infinite Food":()=>{if("/cafe"!=document.location.pathname)return alert("This cheat doesn't work in the shop!");w().stateNode.state.foods.forEach((e=>e.stock=99999)),w().stateNode.forceUpdate()},"Max Levels":()=>{if("/cafe/shop"!=document.location.pathname)return alert("This cheat only works in the shop!");Object.keys(w().stateNode.state.items).forEach((e=>w().stateNode.state.items[e]=5)),w().stateNode.forceUpdate()},"Set Cash":()=>{w().stateNode.setState({cafeCash:Number(parseFloat(prompt("How much cash would you like?")))})},"Reset Abilities":()=>{Object.keys(w().stateNode.state.abilities).forEach((e=>w().stateNode.state.abilities[e]=5)),w().stateNode.forceUpdate()}},kingdom:{"Choice ESP":()=>{g=!g},"Max Stats":()=>{w().stateNode.setState({materials:100,people:100,happiness:100,gold:100})},"Disable Toucan":()=>{w().stateNode.taxCounter=Number.MAX_VALUE},"Set Guests":()=>{let e=Number(parseFloat(prompt("How many guests do you want?")));w().stateNode.setState({guestScore:e})},"Skip Guest":()=>{w().stateNode.nextGuest()}},crypto:{"Auto Hack":()=>{k=!k},"Set Crypto":()=>{let e=Number(parseFloat(prompt("How much crypto do you want?")));w().stateNode.setState({crypto2:e,crypto:e})},"Custom Password":()=>{let e=Number(parseFloat(prompt("What do you want to set your password to?")));w().stateNode.setState({password:e})},"Remove Hack":()=>{w().stateNode.setState({hack:""})},"Reset Player's Crypto":()=>{let e=prompt("Name of player"),t=w();!e||t.memoizedProps.firebase.getDatabaseVal(t.memoizedProps.client.hostId,"c",((...o)=>{let a=Object.keys(o[0]);a.some((t=>t==e))?a.forEach((a=>{a==e&&(t.memoizedProps.firebase.setVal({id:t.memoizedProps.client.hostId,path:"c/"+t.memoizedProps.client.name,val:{p:t.stateNode.state.password,b:t.memoizedProps.client.blook,cr:t.stateNode.state.crypto,tat:a+":"+(o[0][a].cr||0)}}),alert("Reset player's crypto"))})):alert("Player does not exist")}))}},factory:{"All Mega Bot":()=>{let e=[0,0,0,0,0,0,0,0,0,0].fill({name:"Mega Bot",color:"#d71f27",class:"🤖",rarity:"Legendary",cash:[8e4,43e4,42e5,62e6,1e9],time:[5,5,3,3,3],price:[7e6,12e7,19e8,35e9],active:!1,level:4,bonus:5.5});w().stateNode.setState({blooks:e})},"Remove Glitches":()=>{w().stateNode.setState({glitch:"",bites:0,ads:[0,0,0,0,0,0,0,0,0,0],hazards:["","","","",""],lol:!1,joke:!1,slow:!1,dance:!1,popUpAmount:0})},"Max Blooks":()=>{w().stateNode.state.blooks.forEach((e=>{e.level=4}))},"Set Cash":()=>{let e=Number(parseFloat(prompt("How much cash do you want?")));w().stateNode.setState({cash:e})}},fishing:{"Set Weight":()=>{let e=Number(parseFloat(prompt("How much weight do you want?")));w().stateNode.setState({weight2:e,weight:e})},"Set Lure":()=>{let e=Number(parseFloat(prompt("What do you want to set your lure to? (1 - 5)")))-1;w().stateNode.setState({lure:e<0?0:e>4?4:e})}},gold:{"Set Gold":()=>{let e=Number(parseFloat(prompt("How much gold do you want?")));w().stateNode.setState({gold2:e,gold:e})},"Chest ESP":()=>{N=!N},"Set Player's Gold":()=>{let e=w(),t=prompt("Player to set gold"),o=Number(parseFloat(prompt("Amount to set gold to")));e.memoizedProps.firebase.setVal({id:e.memoizedProps.client.hostId,path:"c/"+e.memoizedProps.client.name,val:{b:e.memoizedProps.client.blook,g:e.stateNode.state.gold,tat:t+":swap:"+o}})}},racing:{"Instant Win":()=>{w().stateNode.setState({progress:w().stateNode.state.goalAmount}),setTimeout((()=>{try{Array.from(document.body.querySelectorAll('div[class*="answerText"]')).filter((e=>e.firstChild.innerHTML==w().memoizedState.question.correctAnswers[0]))[0].click()}catch{try{Array.from(document.body.querySelectorAll('div[class*="answerText"]')).filter((e=>e.firstChild.innerHTML==w().memoizedProps.client.question.correctAnswers[0]))[0].click()}catch{}}}),100)}},defense:{"Clear Enemies":()=>{w().stateNode.enemies=[]},"Max Towers":()=>{w().stateNode.towers.forEach((e=>{e.damage=99999999,e.range=99999999,e.fullCd=0}))},"Remove Ducks":()=>{data=w().stateNode,data.ducks.forEach((e=>{data.tiles[e.y][e.x]=0})),data.ducks.length=0},"Place Towers Anywhere":()=>{w().stateNode.tiles=w().stateNode.tiles.map((e=>e.map((e=>2==e?0:e))))},"Set Damage":()=>{let e=Number(parseFloat(prompt("How much damage do you want?")));w().stateNode.dmg=e},"Set Round":()=>{let e=Number(parseFloat(prompt("What round do you want to set it to?")));w().stateNode.setState({round:e})},"Set Tokens":()=>{let e=Number(parseFloat(prompt("How many tokens do you want?")));w().stateNode.setState({tokens:e})}},doom:{"Set Coins":()=>{try{w().stateNode.props.setTowerCoins(Number(parseFloat(prompt("How many coins do you want?"))))}catch{}},"Lower Enemy Stats":()=>{let e=w().stateNode.state;if("select"!=e.phase)return alert("You must be on the attribute selection page!");w().stateNode.setState({enemyCard:{...e.enemyCard,strength:0,charisma:0,wisdom:0}})},"Max Player Stats":()=>{let e=w().stateNode.state;if("select"!=e.phase)return alert("You must be on the attribute selection page!");w().stateNode.setState({myCard:{...e.myCard,strength:20,charisma:20,wisdom:20}})},"Heal Player":()=>{w().stateNode.setState({myLife:100})}},rush:{"Set Defense":()=>{let e=w();e.stateNode.props.firebase.setVal({id:e.stateNode.props.client.hostId,path:"c/"+e.stateNode.props.client.name+"/d",val:Number(parseFloat(prompt("How much defense do you want?")))})},"Set Blooks":()=>{let e=w();e.stateNode.props.firebase.setVal({id:e.stateNode.props.client.hostId,path:"c/"+e.stateNode.props.client.name+"/bs",val:Number(parseFloat(prompt("How many blooks do you want?")))})}}},x=document.createElement("details");x.innerHTML='<summary style="padding: 10px; font-size: 1.5em; font-weight: bolder">Global</summary>';for(var E=0;E<Object.keys(S.global).length;E++){let e=A(Object.keys(S.global)[E]);e.onclick=S.global[Object.keys(S.global)[E]],x.appendChild(e)}x.open=!0,x.style.paddingBottom="10px",p.appendChild(x);let C=document.createElement("div");p.appendChild(C),s=setInterval((()=>{v!=T()&&(v=T(),curPageEl.innerText=T(!0)?`Current gamemode: ${T(!0)}`:"No game detected",Array.from(C.children).forEach((e=>e.remove())),v&&S[v]&&Object.keys(S[v]).forEach((e=>{let t=A(e);t.onclick=S[v][e],C.appendChild(t),C.appendChild(document.createElement("br"))})));let e=`Auto Answer: ${f?"Enabled":"Disabled"}\nHighlight Answers: ${b?"Enabled":"Disabled"}${"kingdom"==v?"\nChoice ESP: "+(g?"Enabled":"Disabled"):"crypto"==v?"\nAuto Hack: "+(k?"Enabled":"Disabled"):"gold"==v?"\nChest ESP: "+(N?"Enabled":"Disabled"):""}`;if(m.innerText!=e&&(m.innerText=e),f)try{Array.from(document.body.querySelectorAll('div[class*="answerText"]')).filter((e=>e.firstChild.innerHTML==w().memoizedState.question.correctAnswers[0]))[0].click()}catch{try{Array.from(document.body.querySelectorAll('div[class*="answerText"]')).filter((e=>e.firstChild.innerHTML==w().memoizedProps.client.question.correctAnswers[0]))[0].click()}catch{}}if(b)try{Array.from(document.querySelector('div[class*="answersHolder"').children).forEach((e=>{w().memoizedState.question.correctAnswers.includes(e.innerText)||w().memoizedProps.client.question.correctAnswers.includes(e.innerText)?e.firstChild.style="background-color: rgb(0, 207, 119);":e.firstChild.style="background-color: rgb(225, 40, 33);"}))}catch{}if("kingdom"==v&&(Array.from(document.getElementsByClassName("choiceESP")).forEach((e=>e.remove())),g))try{let e={materials:Array.from(document.querySelectorAll("div")).find((e=>Array.from(e.children).find((e=>e.className.includes("tree"))))),people:Array.from(document.querySelectorAll("div")).find((e=>Array.from(e.children).find((e=>e.className.includes("users")&&e.parentElement.className.includes("statContainer"))))),happiness:Array.from(document.querySelectorAll("div")).find((e=>Array.from(e.children).find((e=>e.className.includes("grin"))))),gold:Array.from(document.querySelectorAll("div")).find((e=>Array.from(e.children).find((e=>e.className.includes("coins")))))},t=w().stateNode.state.guest;Object.entries(t.yes).forEach((t=>{if("msg"==t[0])return;let o=document.createElement("div");o.className="choiceESP",o.style="font-size: 24px; color: rgb(75, 194, 46); font-weight: bolder;",o.innerText=String(t[1]),e[t[0]].appendChild(o)})),Object.entries(t.no).forEach((t=>{if("msg"==t[0])return;let o=document.createElement("div");o.className="choiceESP",o.style="font-size: 24px; color: darkred; font-weight: bolder;",o.innerText=String(t[1]),e[t[0]].appendChild(o)}))}catch(e){}if("crypto"==v&&k){let{stage:e,correctPassword:t}=Object.values(document.querySelector("#app > div > div"))[1].children[1]._owner.stateNode.state;"hack"==e&&Array.from(document.querySelectorAll("div")).filter((e=>e.innerHTML==t))[0].click()}if("gold"==v&&N)try{if("prize"==w().stateNode.state.stage){let{choices:e}=w().stateNode.state,t=document.querySelector("div[class*='regularBody']").children[1];t&&(document.querySelectorAll(".chest-esp").length?e.forEach(((e,o)=>{3==t.children.length&&t.children[o].children[1].innerText!=e.text&&(t.children[o].children[1].innerText=e.text)})):e.forEach(((e,o)=>{textElement=document.createElement("p"),textElement.className="chest-esp",textElement.innerText=e.text,textElement.style="text-align: center;\n                    font-size: 30px;\n                    color: white;\n                    font-family:Titan One;\n                    sans-serif;\n                    border-color: black;\n                    margin-top: 200px;";try{t.children[o].appendChild(textElement)}catch(e){console.log(e)}})))}}catch(e){console.log(e)}}));let v=T();function A(e){let t=document.createElement("button");return t.classList.add("cheat"),t.innerText=e,t}function T(e){switch(window.location.pathname.split("/")[2]){case"rush":return e?"Blook Rush":"rush";case"gold":return e?"Gold Quest":"gold";case"fishing":return e?"Fishing Frenzy":"fishing";case"hack":return e?"Crypto Hack":"crypto";case"battle-royale":return e?"Battle Royale":"royale";case"factory":return e?"Factory":"factory";case"racing":return e?"Racing":"racing";case"classic":return e?"Classic":"classic";default:switch(window.location.pathname.split("/")[1]){case"defense":return e?"Tower Defense":"defense";case"cafe":return e?"Café":"cafe";case"tower":return e?"Tower of Doom":"doom";case"kingdom":return e?"Crazy Kingdom":"kingdom";default:return!1}}}function P(e){"KeyE"==e.code&&(t.hidden=!t.hidden)}v&&S[v]&&Object.keys(S[v]).forEach((e=>{let t=A(e);t.onclick=S[v][e],C.appendChild(t),C.appendChild(document.createElement("br"))})),addEventListener("keypress",P)})();
