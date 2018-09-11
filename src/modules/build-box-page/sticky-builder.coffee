{ imageButton } = require './image-button'
{ futureToggler } = require './future-toggler'


export class stickyBuilder
  constructor: (@s, @flow) ->
    @s.box_mixer.visible = false
    @container = new Layer
        width: 360
        height: 134
        clip: true
        y: -134
        backgroundColor: 'transparent'
    @flow.footer.addChild(@container)

    @futureToggler = new futureToggler(@s)

    @image_slots_crafts = []
    @image_slots_add_ons = []

    @image_slots_crafts_future = []
    @image_slots_add_ons_future = []

  init: () ->
    @s.box_mixer.visible = true
    @s.box_mixer.x = 0
    @s.box_mixer.y = 4
    @s.box_mixer.shadowY = -4
    @s.box_mixer.shadowColor = 'rgba(0,0,0,0.1)'
    @container.addChild(@s.box_mixer)


    # make inital crafts
    @addCraft('../framer/images/content/butterfly.png')
    @addCraft('../framer/images/content/van_gogh.png')

    @makePriceLayer()


  intro: () ->
    @s.box_mixer.visible = true
    @s.box_mixer.animate
      y: 4
      options:
        time: 0.4


  addItemClickEvent: (button, type, image, price) ->
    self = this
    button.on Events.Click, (event, layer) ->
      if (type == 'crafts')
        self.addCraft(image)
      else if (type == 'add-ons')
        self.addAddOn(image, price)

      self.updatePrice()


  addCraft: (image) ->
    if (@futureToggler.state == 'present' && @image_slots_crafts.length < 4)
      @addImage(@image_slots_crafts, @s.craft_layer, image)
    else if (@futureToggler.state == 'future' && @image_slots_crafts_future.length < 4)
      @addImage(@image_slots_crafts_future, @s.craft_layer_future, image)

  addAddOn: (image, price) ->
    if (@futureToggler.state == 'present' && @image_slots_add_ons.length < 4)
      @addImage(@image_slots_add_ons, @s.add_on_layer, image, price)
    else if (@futureToggler.state == 'future' && @image_slots_add_ons_future.length < 4)
      @addImage(@image_slots_add_ons_future, @s.add_on_layer_future, image, price)

  addImage: (array, parent, image, price) ->
    image_button = new imageButton(array, image, () =>
      # delete self callback
      @updatePrice()
      parent.removeChild(image_button.image_layer)
    )
    if price
      image_button.price = price
    array.push(image_button)
    parent.addChild(image_button.image_layer)


  updatePrice: () ->
    presentTotal = @boxPriceTotal(@image_slots_crafts, @image_slots_add_ons)
    console.log 'present add-on array: ', @image_slots_add_ons
    console.log 'present total: ', presentTotal
    if (presentTotal > 9.95)
      @s.pandp.x = 62
    else
      @s.pandp.x = 52
    @price.template = presentTotal

    futureTotal = @boxPriceTotal(@image_slots_crafts_future, @image_slots_add_ons_future)
    console.log 'future craft array: ', @image_slots_crafts_future
    console.log 'future total: ', futureTotal
    if (futureTotal > 9.95)
      @s.pandp_future.x = 62
    else
      @s.pandp_future.x = 52
    @price_future.template = futureTotal


  boxPriceTotal: (crafts, addOns) ->
    total = 0
    if (crafts.length == 3)
      total = 1390
    else if (crafts.length == 4)
      total = 1585
    else
      total = 995

    for addOn in addOns
      total += addOn.price

    total = total / 100
    total.toString()
    total = parseFloat(total).toFixed(2)

    return total


  makePriceLayer: () ->

    @price = new TextLayer
      text: '£{price}'
      y: 17
      x: 0
      fontSize: 18
      fontFamily: 'Kent4F'
      color: '#FFFFFF'

    @price.template = 9.95

    @s.sticky.addChild(@price)

    @price_future = new TextLayer
      text: '£{price}'
      y: 17
      x: 0
      fontSize: 18
      fontFamily: 'Kent4F'
      color: '#FFFFFF'

    @price_future.template = 9.95

    @s.sticky_future.addChild(@price_future)
