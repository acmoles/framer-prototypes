export class child
  constructor: (@s, @flow, @fadeTransition) ->
    @c = @s.Child_details
    @c2 = @s.Child_details_2

  init: () ->

    @c.visible = false
    @c2.visible = false

    self = this

    @s.continue_child.on Events.Click, (event, layer) ->
      self.flow.transition(self.s.Delivery_address, self.fadeTransition)
      self.s.Delivery_address.visible = true

    @s.continue_child_2.on Events.Click, (event, layer) ->
      self.flow.transition(self.s.Delivery_address, self.fadeTransition)
      self.s.Delivery_address.visible = true
