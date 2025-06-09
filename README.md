# oldcharai
## nevermind not patched! you just need to click on "log in"
Weird tutorial that makes you able to use old c.ai, albeit in a scuffed way

## How to use
Tip: use Chrome Dev Tools and set the speed throttle to 3G and disable cache to make it easier for you to hit the injection in time
1. Go to "https://plus.character.ai/chat/characters/search/?query=nothing"
2. [Run in console RIGHT after you see Tone.js](https://raw.githubusercontent.com/rp-tooling/oldcharai/refs/heads/main/userscript.js)
3. Click cancel on all "are you sure" prompts that pop up.
> [!CAUTION]
> If C.AI asks you to leave the page, PLEASE CLICK NO! Otherwise you will be DOWNGRADED to NewUI

Done!

tip: run `document.querySelector(".apppage > div:nth-child(1)").remove()` after it has loaded to hide the stupid red bar
> [!WARNING]
> You can't easily use email login, just use google/apple login which is in-page.
