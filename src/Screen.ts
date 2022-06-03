import { Ball } from './Ball'

export class Screen {
  private canvas: HTMLCanvasElement
  private ctx: CanvasRenderingContext2D
  private objects: Ball[] = []
  private prevX: number = 0
  private prevY: number = 0

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.ctx = canvas.getContext('2d')!
    this.draw = this.draw.bind(this)
  }

  add(ball: Ball) {
    this.objects.push(ball)
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    for(let i = 0; i < this.objects.length; i++) {
      this.objects[i].draw(this.ctx)
    }
  }

  dragStart(x: number, y: number) {
    let dragging = false
    this.prevX = x
    this.prevY = y
    for(let i = this.objects.length - 1; i >= 0 ; i--) {
      if(this.objects[i].moveActivate(x, y)) {
        dragging = true
        break
      }
    }
    return dragging
  }

  dragEnd() {
    this.objects.forEach(obj => {
      if(obj.moveActiveFlag) {
        obj.moveActiveFlag = false
      }
    })
  }

  dragging(x: number, y: number) {
    const dx = x - this.prevX
    const dy = y - this.prevY

    this.objects.forEach(obj => {
      if(obj.moveActiveFlag) {
        obj.move(dx, dy)
      }
    })
    this.draw()
    this.prevX = x
    this.prevY = y


    //console.log(`${x}, ${y}  dx: ${dx}, dy: ${dy}`)
  }

}
