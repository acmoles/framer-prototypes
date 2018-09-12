
{ boxBuilder } = require './modules/build-box-page/box-builder'
# TODO: add child page, add a child on same page
# TODO: chose no crafts in next box? Message shows
# TODO: preferences can be chosen? on first child? Or just screen?

# TODO: start in account home screen?
# TODO: can go from manage subscriptions? Add another child when added in choose your box? Global variable

Framer.Extras.Preloader.enable()
# Framer.Extras.Preloader.brand.style.backgroundScale = 'cover'
console.log Framer.Extras.Preloader
Framer.Extras.Preloader.setLogo('../framer/images/content/logo_square.png')
preload_images = [
  '../framer/images/content/butterfly.png',
  '../framer/images/content/modern_art.png',
  '../framer/images/content/shadow_puppets.png',
  '../framer/images/content/van_gogh.png',
  '../framer/images/content/name-tag.png',
  '../framer/images/content/cat-book.png',
  '../framer/images/content/brush.png',
  '../framer/images/content/stickers.png'
]
for image in preload_images
  Framer.Extras.Preloader.addImage(image)

Framer.Extras.Hints.enable()

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
