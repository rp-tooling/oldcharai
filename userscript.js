window.addEventListener("beforeunload", (e) => {
    e.preventDefault();
    e.returnValue = "Do you want to be downgraded to newui (click cancel)";
});
