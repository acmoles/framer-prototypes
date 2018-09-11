export class imageButton
  constructor: (array, image, deleteCallback) ->

    # self identifying index is it's initial position in the array, updated on delete
    # array.length because we haven't added it to the array yet so the inital length is the position
    @i = array.length
    @price = 0

    @image_layer = new Layer
      x: (70 * @i)
      y: 0
      width: 60
      height: 60
      borderRadius: 10
      opacity: 0
      scale: 0
      backgroundColor: '#FBF7F4'
      image: image

    @delete_button = new Layer
      x: 35
      y: 35
      width: 32
      height: 36
      image: '../framer/images/delete.png'

    @image_layer.addChild(@delete_button)


    self = this

    @delete_button.on Events.Click, (event, layer) ->
      self.animateOut()
      self.shuntRowDown(self.i, array)
      array.splice(array.indexOf(self), 1)
      self.resetIndices(array)
      self.image_layer.on Events.AnimationEnd, (animation, layer) ->
        deleteCallback()


    @animateIn()


  animateIn: () ->
    @image_layer.animate
      opacity: 1
      scale: 1
      options:
        time: 0.4
        curve: Spring(damping: 0.5)

  animateOut: () ->
      @image_layer.animate
        opacity: 0
        scale: 0
        options:
          time: 0.4
          curve: 'spring(500,12,0)'

  shuntRowDown: (index, array) ->
    if (index == array.length - 1)
      return

    for image, i in array
      if (i != 0 && i > index)
        image.image_layer.animate
          x: (70 * (i - 1))
          options:
            time: 0.4
            curve: Spring(damping: 0.5)

  resetIndices: (array) ->
    for image, i in array
      image.i = i
