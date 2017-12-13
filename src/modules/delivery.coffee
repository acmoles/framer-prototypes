export class delivery
  constructor: (@s, @flow, @fadeTransition) ->
    @d = @s.Delivery_address
    @d2 = @s.Delivery_address_2

  init: () ->

    @d.visible = false
    @d2.visible = false
