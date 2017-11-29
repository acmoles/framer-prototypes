Framer.Extras.Preloader.enable()

# setup device for presentation
device = new Framer.DeviceView();

device.deviceType = "fullscreen"

device.background.backgroundColor = "#212121"

deviceHeight = device.screen.height
deviceWidth = device.screen.width

Framer.Defaults.Layer.force2d = true

app = Framer.Importer.load("app.framer/imported/app@1x")
app.Mobile.center()

app.circle.opacity = 0.9
app.circle.center()
console.log app.circle.x

app.circle.states = {
	second: {x: 0, y:0, scale:0.6, rotationZ:100},
	third:  {y:300, scale:1.3},
	fourth:	{x: deviceWidth / 2 - app.circle.width / 2, y:200, scale:0.9, rotationZ:200}
}

# Set the default animation options
app.circle.animationOptions = {
	curve: "spring(500,12,0)"
}

# On a click, go to the next state
app.circle.on Events.Click, (event, layer) ->
	app.circle.stateCycle()

# imageLayer = new Layer
#     x: 100
#     y: 100
#     width: 250
#     height: 250
#     opacity: 0.1
#     backgroundColor: "green"
#
# imageLayer.center()
