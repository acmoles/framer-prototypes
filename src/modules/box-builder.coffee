{ imageButton } = require './image-button'
{ menuToggler } = require './menu-toggler'

export class boxBuilder
  constructor: (@s, @flow, @fadeTransition) ->
    @b = @s.build_box
    @b.visible = true

    # hide static delete buttons
    @s.delete_buttons_add_ons.visible = false
    @s.delete_buttons_crafts.visible = false

    @image_slots_crafts = []
    @image_slots_add_ons = []

    @menuToggler = new menuToggler(@s)

  init: () ->
    @addItemClickEvents()
    @makePriceLayer()

    # make inital crafts
    @addCraft('../framer/images/content/packshot-butterfly-en.png')
    @addCraft('../framer/images/content/packshot-starry-night-en.png')




  addCraft: (image) ->
    if (@image_slots_crafts.length < 4)
      image_button = new imageButton(@image_slots_crafts.length, @image_slots_crafts, 'top', image, () =>
        @updatePrice(this)
      )
      @image_slots_crafts.push(image_button)
      @s.build_box.addChild(image_button.image_layer)

  addAddOn: (image, price) ->
    if (@image_slots_add_ons.length < 4)
      image_button = new imageButton(@image_slots_add_ons.length, @image_slots_add_ons, 'bottom', image, () =>
        @updatePrice(this)
      )
      image_button.price = price
      @image_slots_add_ons.push(image_button)
      @s.build_box.addChild(image_button.image_layer)

  updatePrice: (self) ->
    total = 0
    craftCount = self.image_slots_crafts.length
    if (craftCount == 3)
      total = 1390
    else if (craftCount == 4)
      total = 1585
    else
      total = 995

    for add_on in self.image_slots_add_ons
      total += add_on.price

    total = total / 100
    total.toString()
    total = parseFloat(total).toFixed(2)
    console.log total
    @price.template = total

  addItemClickEvent: (button, row, image, price) ->
    self = this
    button.on Events.Click, (event, layer) ->
      if (row == 'top')
        self.addCraft(image)
      else
        self.addAddOn(image, price)

      self.updatePrice(self)

  makePriceLayer: () ->
    @blocker = new Layer
      width: 75
      height: 30
      x: 80
      y: 564
      backgroundColor: 'white'

    @b.addChild(@blocker)

    @price = new TextLayer
      text: '£{price}'
      y: 6
      x: 15
      fontSize: 18
      fontFamily: 'Kent4F'
      color: '#FF3939'

    @price.template = 9.95

    @blocker.addChild(@price)

  addItemClickEvents: () ->
    crafts = [
      {
        button: @s.butterfly_add
        image: '../framer/images/content/packshot-butterfly-en.png',
      },
      {
        button: @s.modern_art_add
        image: '../framer/images/content/packshot-mondrian-en.png',
      },
      {
        button: @s.shadow_puppets_add
        image: '../framer/images/content/packshot-shadowPuppets-en.png',
      },
      {
        button: @s.starry_night_add
        image: '../framer/images/content/packshot-starry-night-en.png',
      }
    ]

    for craft in crafts
      @addItemClickEvent(craft.button, 'top', craft.image)

    add_ons = [
      {
        button: @s.bag_tag_add
        image: '../framer/images/content/name-tag.png',
        price: 100
      },
      {
        button: @s.cat_book_add
        image: '../framer/images/content/cat-book.png',
        price: 995
      },
      {
        button: @s.brush_add
        image: '../framer/images/content/brush.png',
        price: 295
      },
      {
        button: @s.stickers_add
        image: '../framer/images/content/stickers.png',
        price: 100
      }
    ]

    for add_on in add_ons
      @addItemClickEvent(add_on.button, 'bottom', add_on.image, add_on.price)
