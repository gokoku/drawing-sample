import './style.css'
import { Ball } from './Ball'
import { Screen } from './Screen'

const document = window.document
const canvas = document.querySelector<HTMLCanvasElement>('#myCanvas')!
const ballRadius = 50
let x = 250
let y = 250


class Dragger {
  private screen: Screen
  private isDragging = false

  constructor(screen: Screen) {
    this.screen = screen
    canvas.addEventListener('mousedown', this.handleMouseDown, false)
    canvas.addEventListener('mouseup', this.handleMouseUp, false)
    canvas.addEventListener('mousemove', this.handleMouseMove, false)
  }


  private handleMouseDown = (e: MouseEvent) => {
    this.screen.dragStart(e.offsetX, e.offsetY)
    this.isDragging = true
    e.stopPropagation()
  }

  private handleMouseUp = (e: MouseEvent) => {
    this.screen.dragEnd()
    this.isDragging = false
    e.stopPropagation()
  }

  private handleMouseMove = (e: MouseEvent) => {
    if (!this.isDragging) {
      return
    }
    this.screen.dragging(e.offsetX, e.offsetY)
    e.stopPropagation()

  }

}




const ball1 = new Ball(250, 250, ballRadius, '#0095DD')
const ball2 = new Ball(250, 250, ballRadius, '#aa6600')
const ball3 = new Ball(250, 250, ballRadius, '#55ab33')

const screen = new Screen(canvas)
const dragger = new Dragger(screen)
screen.add(ball1)
screen.add(ball2)
screen.add(ball3)

screen.draw()





