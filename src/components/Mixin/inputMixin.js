export const inputMixin = {
  methods: {
    inputBlur() {
      let m = this.$store.state.eventMotto
      let i = this.$store.state.eventInput0
      let s = this.$store.state.eventSection0
      let c0 = this.$store.state.eventCover
      let t = this.$store.state.eventTitle
      m.style.opacity = "0";
      m.style.animation = "none";
      i.value = "";
      s.style.opacity = "0";
      s.style.top = "";
      i.classList.remove("focus");
      c0.style.display = "none"
      setTimeout(() => {
        s.style.display = "none";
        s.style.top = "";
      },
      250);
      if (innerWidth <= 600) {
        t.style.top = "100px";
        i.style.top = "";
      }
  },
  inputFocus() {
    let e = this.$store.state.eventMotto
    let i = this.$store.state.eventInput0
    let s = this.$store.state.eventSection0
    let c0 = this.$store.state.eventCover
    let t = this.$store.state.eventTitle
    e.style.opacity = "1"
    s.style.display = "block";
    i.classList.add("focus");
    c0.style.display = "block"
    setTimeout(() => {
      s.style.opacity = "1";
      s.style.top = innerWidth > 600 ? "270px": "155px";
    },
    100);
    if (innerWidth <= 600) {
      t.style.top = "30px";
    }
    }
}
}