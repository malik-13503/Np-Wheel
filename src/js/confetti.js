// class ConfettiGenerator {
//   constructor(params) {
//     this.target = params.target;
//     this.maxCount = params.maxCount || 200;
//     this.size = params.size || 12;
//     this.canvas = document.getElementById(this.target);
//     this.ctx = this.canvas.getContext("2d");
//     this.particles = [];
//     this.speedFactor = 18;
//     this.colors = ['#ED1F23', '#231F20', '#FFFFFF', '#203B8C', '#A68C5B', '#F22727']; // Added colors array
//     this.populateParticles();
//   }

//   render() {
//     this.canvas.width = window.innerWidth;
//     this.canvas.height = window.innerHeight;

//     const draw = () => {
//       this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
//       this.particles.forEach((particle, index) => {
//         this.ctx.beginPath();
//         particle.color = this.colors[index % this.colors.length]; // Assign color from colors array
//         this.ctx.fillStyle = particle.color;
//         this.ctx.moveTo(particle.x, particle.y);
//         this.ctx.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2, true);
//         this.ctx.fill();
//       });
//       this.updateParticles();
//     };
//     setInterval(draw, 30);
//   }

//   populateParticles() {
//     for (let i = 0; i < this.maxCount; i++) {
//       this.particles.push({
//         x: Math.random() * window.innerWidth,
//         y: Math.random() * window.innerHeight,
//         r: Math.random() * 12 + 8,
//         d: Math.random() * this.maxCount,
//         color: this.colors[i % this.colors.length], // Assign color from colors array
//         angle: Math.random() * Math.PI * 2,
//         speed: Math.random() * 10 + 5,
//       });
//     }
//   }

//   updateParticles() {
//     for (let i = 0; i < this.maxCount; i++) {
//       let particle = this.particles[i];
//       particle.x += Math.cos(particle.angle) * particle.speed;
//       particle.y += Math.sin(particle.angle) * particle.speed;

//       if (
//         particle.x > window.innerWidth + 5 ||
//         particle.x < -5 ||
//         particle.y > window.innerHeight
//       ) {
//         this.particles[i] = {
//           x: Math.random() * window.innerWidth,
//           y: -10,
//           r: particle.r,
//           d: particle.d,
//           color: this.colors[i % this.colors.length], // Assign color from colors array
//           angle: Math.random() * Math.PI * 2,
//           speed: Math.random() * 10 + 5,
//         };
//       }
//     }
//   }
// }

class ConfettiGenerator {
  constructor(params) {
    this.target = params.target;
    this.maxCount = params.maxCount || 200;
    this.size = params.size || 12;
    this.canvas = document.getElementById(this.target);
    this.ctx = this.canvas.getContext("2d");
    this.particles = [];
    this.speedFactor = 18;
    this.colors = ['#ED1F23', '#231F20', '#FFFFFF', '#203B8C', '#A68C5B', '#F22727']; // Added colors array
    this.populateParticles();
  }

  render() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    const draw = () => {
      this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      this.particles.forEach((particle, index) => {
        this.ctx.beginPath();
        particle.color = this.colors[index % this.colors.length]; // Assign color from colors array
        this.ctx.fillStyle = particle.color;

        // Draw ellipse instead of circle
        this.ctx.save(); // Save the current state of the context
        this.ctx.translate(particle.x, particle.y); // Translate to the particle's position
        this.ctx.scale(1, 0.6); // Scale horizontally to make circles ovals
        this.ctx.arc(0, 0, particle.r, 0, Math.PI * 2, true);
        this.ctx.fill();
        this.ctx.restore(); // Restore the saved state to clear the scale

      });
      this.updateParticles();
    };
    setInterval(draw, 30);
  }

  populateParticles() {
    for (let i = 0; i < this.maxCount; i++) {
      this.particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 12 + 8,
        d: Math.random() * this.maxCount,
        color: this.colors[i % this.colors.length], // Assign color from colors array
        angle: Math.random() * Math.PI * 2,
        speed: Math.random() * 10 + 5,
      });
    }
  }

  updateParticles() {
    for (let i = 0; i < this.maxCount; i++) {
      let particle = this.particles[i];
      particle.x += Math.cos(particle.angle) * particle.speed;
      particle.y += Math.sin(particle.angle) * particle.speed;

      if (
        particle.x > window.innerWidth + 5 ||
        particle.x < -5 ||
        particle.y > window.innerHeight
      ) {
        this.particles[i] = {
          x: Math.random() * window.innerWidth,
          y: -10,
          r: particle.r,
          d: particle.d,
          color: this.colors[i % this.colors.length], // Assign color from colors array
          angle: Math.random() * Math.PI * 2,
          speed: Math.random() * 10 + 5,
        };
      }
    }
  }
}
