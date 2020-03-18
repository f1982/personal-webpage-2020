class WelcomeAnimation {
    private canvas: any;
    private context: any;

    public constructor(canvas: any, ctx: any) {
        this.canvas = canvas;
        this.context = ctx;
        this.init();
    }

    public init() {
        window.requestAnimationFrame(() => {
            this.draw();
        });
    }
    private drawCircle(x: number = 0, y: number = 0, radius: number = 100) {
        // this.context.save();
        const ctx = this.context;
        let r = Math.round(Math.random() * 255);
        let g = Math.round(Math.random() * 255);
        let b = Math.round(Math.random() * 255);
        let color = `rgb(${r}, ${g}, ${b})`;
        // console.log('color', color);
        ctx.fillStyle = color;
        // ctx.fillStyle = '#ccc';
        ctx.strokeStyle = 'rgba(0, 153, 255, 1)';

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        this.context.stroke();
        ctx.fill();
        // this.context.restore();
    }

    private draw() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height); // clear canvas
        // console.log('this.canvas.width, this.canvas.height', this.canvas.width, this.canvas.height);

        for (let i = 0; i < 5; i++) {
            let r = Math.round(Math.random() * this.canvas.width);
            let g = Math.round(Math.random() * this.canvas.width);
            let b = 20 + Math.round(Math.random() * 60);

            this.drawCircle(r, g, b);
        }
        window.requestAnimationFrame(() => {
            this.draw();
        });
    }
}

const getRandomFloat = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
};

const getRandomColor = () => {
    // return `rgba(0,0,0,0.3)`;
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);
    let a = 0.1;
    return `rgba(${r}, ${g}, ${b},${a})`;
};

class Particle {
    private canvas: any;
    private context: any;
    private x: number = 0;
    private y: number = 0;
    private vel: any = {
        x: getRandomFloat(-20, 20) / 100,
        y: getRandomFloat(-20, 20) / 100,
        min: getRandomFloat(2, 10),
        max: getRandomFloat(10, 100) / 10
    };
    private particleSpeed = 0.05;
    private velocity = 0.9;
    // private color: string = 'rgba(0, 0, 0, 0.05)';
    private color: string = getRandomColor();

    public constructor(canvas: any, ctx: any, x: number, y: number) {
        this.canvas = canvas;
        this.context = ctx;
        this.x = x;
        this.y = y;
        this.init();
    }

    private init() {}

    public render() {
        const context = this.context;
        context.beginPath();
        context.fillStyle = this.color;
        context.arc(this.x, this.y, 0.1, 0, Math.PI * 2);
        context.fill();
    }
    public draw() {
        const forceDirection = {
            x: getRandomFloat(-1, 1),
            y: getRandomFloat(-1, 1)
        };

        if (Math.abs(this.vel.x + forceDirection.x) < this.vel.max) {
            this.vel.x += forceDirection.x;
        }
        if (Math.abs(this.vel.y + forceDirection.y) < this.vel.max) {
            this.vel.y += forceDirection.y;
        }

        this.x += this.vel.x * this.particleSpeed;
        this.y += this.vel.y * this.particleSpeed;

        if (Math.abs(this.vel.x) > this.vel.min) {
            this.vel.x *= this.velocity;
        }
        if (Math.abs(this.vel.y) > this.vel.min) {
            this.vel.y *= this.velocity;
        }

        this.testBorder();
    }

    private testBorder() {
        let windowWidth = this.canvas.width;
        let windowHeight = this.canvas.height;
        if (this.x > windowWidth) {
            this.setPosition(this.x, 'x');
        } else if (this.x < 0) {
            this.setPosition(windowWidth, 'x');
        }
        if (this.y > windowHeight) {
            this.setPosition(this.y, 'y');
        } else if (this.y < 0) {
            this.setPosition(windowHeight, 'y');
        }
    }
    private setPosition(pos: any, coor: string) {
        if (coor === 'x') {
            this.x = pos;
        } else if (coor === 'y') {
            this.y = pos;
        }
    }
}

class ParticleCircle {
    private canvas: any;
    private context: any;
    private numberParticlesStart = 500;
    private circleWidth = 180;
    private particles: Particle[] = [];
    private count: number = 0;

    public constructor(canvas: any, ctx: any) {
        this.canvas = canvas;
        this.context = ctx;
<<<<<<< HEAD

        console.log('this.canvas.width,this.canvas.height', this.canvas.width, this.canvas.height);
        this.init();
    }

    private init() {
        let winWidth = window.innerWidth;
        console.log('winWidth', winWidth);
        let winHeight = window.innerHeight;
        console.log('winHeight', winHeight);
=======
        // this.init();
    }

    public init() {
        if (window.innerWidth < 768) {
            this.circleWidth = 120;
        } else {
            this.circleWidth = 180;
        }
        this.count = 0;
>>>>>>> develop
        for (let i = 0; i < this.numberParticlesStart; i++) {
            const angle = Math.random() * 360;
            const p = new Particle(
                this.canvas,
                this.context,
                winWidth * 0.5 + Math.cos(angle) * this.circleWidth,
                winHeight * 0.5 - Math.sin(angle) * this.circleWidth
            );
            this.particles.push(p);
        }
        window.requestAnimationFrame(() => {
            this.draw();
        });
    }
    public clear() {
        window.requestAnimationFrame(() => {});
        this.particles = [];
    }
    private draw() {
        // this.context.clearRect(0, 0, this.canvas.width, this.canvas.height); // clear canvas

        const length = this.particles.length;
        for (let i = 0; i < length; i++) {
            const p: Particle = this.particles[i] as Particle;
            p.draw();
            p.render();
        }

        this.count++;
        if (this.count < 1000) {
            window.requestAnimationFrame(() => {
                this.draw();
            });
        }
        // console.log(this.count);
    }
}

export { WelcomeAnimation, ParticleCircle };
