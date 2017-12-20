export class payment
  constructor: (@s, @flow, @fadeTransition) ->
    @p = @s.Payment_details
    @p2 = @s.Payment_details_2

  init: () ->

    @p.visible = false
    @p2.visible = false

    self = this
    #1
    @assignTransition( @s.continue_payment, self.s.Summary )
    @assignTransition( @s.back_to_delivery, self.s.Delivery_address_2 )
    @assignTransition( @s.payment_method_toggle, self.s.Payment_details_2 )
    @assignTransition( @s.payment_type_toggle, self.s.Payment_details_2 )


    #2
    @assignTransition( @s.continue_payment_2, self.s.Summary_2 )
    @assignTransition( @s.back_to_delivery_2, self.s.Delivery_address_2 )
    @assignTransition( @s.payment_type_toggle_2, self.s.Payment_details )
    @assignTransition( @s.payment_method_toggle_2, self.s.Payment_details )


  assignTransition: (button, transitionTo) ->
    self = this
    button.on Events.Click, (event, layer) ->
      self.flow.transition(transitionTo, self.fadeTransition)
      transitionTo.visible = true
