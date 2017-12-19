export class payment
  constructor: (@s, @flow, @fadeTransition) ->
    @p = @s.Payment_details
    @p1 = @s.Payment_details_1
    @p2 = @s.Payment_details_2

  init: () ->

    @p.visible = false
    @p1.visible = false
    @p2.visible = false

    self = this
    #0
    @assignTransition( @s.continue_payment, self.s.Summary )
    @assignTransition( @s.back_to_delivery, self.s.Delivery_address )
    @assignTransition( @s.payment_type_toggle, self.s.Payment_details_3 )

    #1
    @assignTransition( @s.continue_payment_1, self.s.Summary_1 )
    @assignTransition( @s.back_to_delivery_1, self.s.Delivery_address_2 )
    @assignTransition( @s.payment_type_toggle_1, self.s.Payment_details_3 )

    #2
    @assignTransition( @s.continue_payment_2, self.s.Summary_2 )
    @assignTransition( @s.continue_payment_2, self.s.Delivery_address )
    @assignTransition( @s.payment_type_toggle_2, self.s.Payment_details )


  assignTransition: (button, transitionTo) ->
    self = this
    button.on Events.Click, (event, layer) ->
      self.flow.transition(transitionTo, self.fadeTransition)
      transitionTo.visible = true
