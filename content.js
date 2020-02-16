const targetNode = document.getElementsByClassName("news");
const config = { childList: true };

const callback = function(mutationsList, observer) {
  for (const mutation of mutationsList) {
    if (mutation.type === "childList") {
      const collapsedElements = document.getElementsByClassName("Details js-news-feed-event-group");
      for (let i = 0; i < collapsedElements.length; i++) {
        collapsedElements[i].className += "open Details--on";
      }
      if (collapsedElements.className === "Details js-news-feed-event-group open Details--on") {
        observer.disconnect();
      }
    }
  }
};

const observer = new MutationObserver(callback);
observer.observe(targetNode[0], config);
