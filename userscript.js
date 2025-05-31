// WARNING: You are about to enter a cursed realm
alert("If C.AI asks you to leave the page, PLEASE CLICK NO! \nOtherwise you will be DOWNGRADED to NewUI");

// Intercept navigation-
window.addEventListener("beforeunload", (e) => {
    e.preventDefault();
    e.returnValue = "Do you want to be downgraded to newui (click cancel)";
});
