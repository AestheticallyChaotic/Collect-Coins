AFRAME.registerComponent("game-play", {
    schema: {
      elementId: { type: "string", default: "#ring1" },    
    },
    update: function () {
      this.isCollided(this.data.elementId);
    },
  
    init: function () {
      var duration = 120;
      const timerEl = document.querySelector("#timer");
      this.startTimer(duration, timerEl);
    },
    
    isCollided: function (elementId) {
    const element = document.querySelector(elementId);
        element.addEventListener("collide", e => {
            if (elementId.includes("#coin")) {
                element.setAttribute("visible", false);
                console.log("ring collision");
            }
            if (elementId.includes("#fish")) {
                console.log("fish collision");
            }
        })
    }
});