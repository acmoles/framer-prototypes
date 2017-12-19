export class delivery
  constructor: (@s, @flow, @fadeTransition) ->
    @d = @s.Delivery_address
    @d2 = @s.Delivery_address_2

  init: () ->

    @d.visible = false
    @d2.visible = false

    self = this

    @assignTransition( @s.continue_address_1, self.s.Payment_details )
    @assignTransition( @s.back_to_personalisation_1, self.s.Child_details )
    @assignTransition( @s.same_address_1, self.s.Delivery_address_2 )

    @assignTransition( @s.continue_address_2, self.s.Payment_details_1 )
    @assignTransition( @s.back_to_personalisation_2, self.s.Child_details_2 )


  assignTransition: (button, transitionTo) ->
    self = this
    button.on Events.Click, (event, layer) ->
      self.flow.transition(transitionTo, self.fadeTransition)
      transitionTo.visible = true
