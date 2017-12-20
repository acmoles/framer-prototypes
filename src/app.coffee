{ homepage } = require './modules/homepage'
{ child } = require './modules/child'
{ product } = require './modules/product'
{ account } = require './modules/account'
{ delivery } = require './modules/delivery'
{ payment } = require './modules/payment'
{ summary } = require './modules/summary'

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
          show: { opacity: 1 }
          hide: { opacity: 0 }
      layerB:
          show: { opacity: 1 }
          hide: { opacity: 0 }

s = Framer.Importer.load("app.framer/imported/app@2x")

flow = new FlowComponent
	width: 360
	height: 640
flow.center()
flow.backgroundColor = "white"

h = new homepage(s, flow, fadeTransition)
h.init()

c = new child(s, flow, fadeTransition)
c.init()

r = new product(s, flow, fadeTransition)
r.init()

a = new account(s, flow, fadeTransition)
a.init()

d = new delivery(s, flow, fadeTransition)
d.init()

p = new payment(s, flow, fadeTransition)
p.init()

sum = new summary(s, flow, fadeTransition)
sum.init()

flow.showNext(s.Homepage)

# Set the default animation options
animationOptions = {
	curve: "spring(500,12,0)"
}
