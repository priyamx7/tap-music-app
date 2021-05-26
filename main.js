window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sounds");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const colors = [
    "#60d394",
    "#c060d3",
    "#d36060",
    "#6860d3",
    "#d3d160",
    "#60d3ba"
  ];

  pads.forEach((pad, index) => {
    pad.addEventListener("click", function() {
      sounds[index].currentTime = 0;
      sounds[index].play();
      createBubble(index);
    });
  });
});