import "./app-browse.js";

window.addEventListener("beforeinstallprompt", event => {
  event.preventDefault();
  const a2hs = document.querySelector("#a2hs");
  a2hs.classList.add("show");

  a2hs.addEventListener("click", () => {
    event.prompt();
    event.userChoice.then(result => {
      // send it to Analytics
      console.log(result.outcome);
    });
  });
});

const fab = document.querySelector("#fab");
fab.addEventListener("click", () => {
  import("./app-edit.js").then(module => {
    console.log(module);
  });
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then(registration => {
      console.debug(registration);
    })
    .catch(error => {
      console.log("There was an error", error);
    });
}
