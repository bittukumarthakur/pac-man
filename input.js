const readStdin = function () {
  process.stdin.setEncoding("utf-8");
  const readLine = function () {
    const line = process.stdin.read();
    if (line) {
      if (line.trim() === '\033[A') {
        console.log("hi");
      }
    }
  }
  setInterval(readLine, 300);
};

window.on

readStdin();
