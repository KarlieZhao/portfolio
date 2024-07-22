new Vue({
  el: '#app',
  data: {
    loading: true
  },
  mounted() {
    window.addEventListener('load', this.onPageLoad);
    // setTimeout(this.onPageLoad, 3000); // 3-second delay for debugging
  },
  methods: {
    onPageLoad() {
      setTimeout(() => {
        this.loading = false;
        this.$nextTick(() => {
          this.initializeBackground();
        });
      }, 2000); 
    },
    initializeBackground() {
      let s = (p) => {
        let w, h, thisHue;

        p.setup = function () {
          resetBG();
          p.colorMode(p.HSB);
          p.rectMode(p.CENTER);
        }

        function resetBG() {
          p.createCanvas(p.windowWidth, p.windowHeight).parent("backdrop");
          w = p.min(p.width, p.height);
          h = w / 2;
          thisHue = p.random(360);
          p.background(0);
          p.frameRate(20);
          p.noStroke();
        }

        p.draw = function () {
          p.translate(p.width / 2, p.height / 2);
          p.background(0);
          DrawRect(w, 0, 0, thisHue);
        }

        function DrawRect(e, t, r) {
          if (e / h < p.abs(p.noise((p.mouseX / 5 - t) / h + 1, (p.mouseY / 5 - r) / h + p.frameCount / 1000, p.mag(t, r) / w) - 0.5)) {
            p.fill((thisHue + 5 * e) % 360, 5 * e, 70 - e, 1 - 0.028 * e);
            p.rect(t, r, 1.3 * e, 1.2 * e);
          } else if (e /= 2, e > 2.5) {
            DrawRect(e, t - e, r - e);
            DrawRect(e, t + e, r - e);
            DrawRect(e, t - e, r + e);
            DrawRect(e, t + e, r + e);
          }
        }

        p.windowResized = function () {
          resetBG();
        }
      };

      new p5(s);
    }
  },
  beforeDestroy() {
    window.removeEventListener('load', this.onPageLoad);
  }
});