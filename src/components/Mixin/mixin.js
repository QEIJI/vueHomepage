export const mixin = {
  methods: {
    showPop(thePopUp) {
      let c = this.$store.state.eventCover1
      c.style.display = "block";
      thePopUp.style.display = "block";
      if (this.reduceMotion === false) {
        setTimeout(() => {
          c.style.opacity = "1";
          thePopUp.style.opacity = "1";
          thePopUp.classList.add("showPop");
          setTimeout(() => {
            thePopUp.style.transform = "rotate3d(0,0,0,0deg)";
            thePopUp.classList.remove("showPop");
          },
          350);
        },
        100);
      } else {
        c.style.opacity = "1";
        thePopUp.style.transition = "all 0s";
        thePopUp.style.transform = "rotate3d(0,0,0,0deg)";
        thePopUp.style.transition = "all 0.25s";
        setTimeout(() => thePopUp.style.opacity = "1", 25);
      }
    },
    closePop(obj) {
      let c = this.$store.state.eventCover1
      this.popUpClosing = true;
      c.style.opacity = "0";  
      obj.style.opacity = "0";
      if (this.reduceMotion === false) {
        obj.style.transform = "rotate3d(1,1,0,20deg)";
      }
      setTimeout(() => {
        c.style.display = "none";
        obj.style.display = "none";
        if (this.reduceMotion === false) {
          obj.style.transform = "rotate3d(1,1,0,90deg)";
        }
        this.popUpClosing = false;
      },
      350);
    }
  }
}