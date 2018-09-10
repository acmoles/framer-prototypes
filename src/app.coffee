
{ boxBuilder } = require './modules/build-box-page/box-builder'

Framer.Extras.Preloader.enable()

# setup device for presentation
device = new Framer.DeviceView();

device.deviceType = "fullscreen"

device.background.backgroundColor = "#212121"

deviceHeight = device.screen.height
deviceWidth = device.screen.width

Framer.Defaults.Layer.force2d = true

fadeTransition = () ->
   transition =
      layerA:
          show: { options: {time: 0.1}, opacity: 1 }
          hide: { options: {time: 0.1}, opacity: 0 }
      layerB:
          show: { options: {time: 0.1}, opacity: 1 }
          hide: { options: {time: 0.1}, opacity: 0 }

# generated sketch file
s = Framer.Importer.load("app.framer/imported/app@2x")

flow = new FlowComponent
	width: 360
	height: 640
flow.center()
flow.backgroundColor = "white"

header = new Layer
  image: 'framer/images/header.png'
  width: 360
  height: 79

footer = new Layer
  image: 'framer/images/navbar.png'
  width: 360
  height: 48

flow.header = header
flow.footer = footer

footer.on Events.Click, (event, layer) ->
  flow.showPrevious()

flow.showNext(s.build_box)

# page modules
b = new boxBuilder(s, flow, fadeTransition)
b.init()




# Set the default animation options
animationOptions = {
	curve: "spring(500,12,0)"
}
