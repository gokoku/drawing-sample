
export class Ball {
    private dx: number = 0
    private dy: number = 0
    public moveActiveFlag: boolean = false

    constructor(
        private x: number,
        private y: number,
        private radius: number,
        private color: string
    ) {}

    draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    move(dx: number, dy: number) {
        this.x += dx
        this.y += dy
    }

    moveActivate(x: number, y: number) {
        if(this.x - this.radius < x &&
            this.x + this.radius > x &&
            this.y - this.radius < y &&
            this.y + this.radius > y)
        {
            console.log(`moveActivation : ${x}, ${y}`)
            this.moveActiveFlag = true

            return true
        }

        this.moveActiveFlag = false
        return false
    }
}