export class imageButton
  constructor: (index, array, row, image, deleteCallback) ->
    y = 357
    if (row == 'bottom')
      y = 465

    @i = index
    @price = 0

    @image_layer = new Layer
      x: (75 * index) + 35
      y: y
      width: 66
      height: 66
      borderRadius: 10
      backgroundColor: '#FBF7F4'
      image: image

    @delete_button = new Layer
      x: 42
      y: 40
      width: 32
      height: 36
      image: '../framer/images/delete.png'

    @image_layer.addChild(@delete_button)


    self = this

    @delete_button.on Events.Click, (event, layer) ->
      self.image_layer.animate
        opacity: 0
        options:
          time: 0.2
      self.image_layer.on Events.AnimationEnd, (animation, layer) ->

        self.shuntRowDown(self.i, array)
        array.splice(array.indexOf(self), 1)
        self.resetIndices(array)
        deleteCallback()

  shuntRowDown: (index, array) ->
    if (index == array.length - 1)
      return

    for image, i in array
      if (i != 0 && i > index)
        image.image_layer.animate
          x: (75 * (i - 1)) + 35
          options:
            time: 0.4

  resetIndices: (array) ->
    for image, i in array
      image.i = i
