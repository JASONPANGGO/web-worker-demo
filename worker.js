onmessage = function heavyWork() {
    let num = 9999999;
    let ran;
    while (num--) {
        ran = Math.random().toString(16).slice(2);
    }
    console.log("heavy work finish", ran);
    postMessage(`heavy work finish: ${ran}<br>`)
}