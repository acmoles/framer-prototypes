{ stickyBuilder } = require './sticky-builder'
{ menuToggler } = require './menu-toggler'
{ Modals } = require './modals'

export class boxBuilder
  constructor: (@s, @flow, @fadeTransition) ->
    @b = @s.build_box
    @b.visible = true

    @sticky = new stickyBuilder(@s, @flow)
    @sticky.init()

    @menuToggler = new menuToggler(@s)

    @modals = new Modals(@s, @flow, @fadeTransition)
    @modals.init()

  init: () ->

    @addItemClickEvents()

  addItemClickEvents: () ->
    crafts = [
      {
        button: @s.butterfly_add
        image: '../framer/images/content/butterfly.png',
      },
      {
        button: @s.modern_art_add
        image: '../framer/images/content/modern_art.png',
      },
      {
        button: @s.shadow_puppets_add
        image: '../framer/images/content/shadow_puppets.png',
      },
      {
        button: @s.starry_night_add
        image: '../framer/images/content/van_gogh.png',
      }
    ]

    for craft in crafts
      @sticky.addItemClickEvent(craft.button, 'crafts', craft.image)

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
      @sticky.addItemClickEvent(add_on.button, 'add-ons', add_on.image, add_on.price)
