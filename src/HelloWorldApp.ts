import {MinitelApp} from 'bunitel'
import {Label} from 'bunitel/ui/compo'

export class HelloWorldApp extends MinitelApp {

  private readonly _label: Label

  constructor() {
    super()
    this._label = new Label('Hello world!')
  }

  public async onOpen() {
    this._label.underline = true
    this._label.x = 1
    this.stage.addChild(this._label)
  }

}