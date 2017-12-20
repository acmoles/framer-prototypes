export class delivery
  constructor: (@s, @flow, @fadeTransition) ->
    @d = @s.Delivery_address
    @d2 = @s.Delivery_address_2

  init: () ->

    @d.visible = false
    @d2.visible = false

    self = this

    @assignTransition( @s.back_to_account, self.s.Account )
    @assignTransition( @s.continue_address, self.s.Payment_details )
    @assignTransition( @s.same_address, self.s.Delivery_address_2 )

    @assignTransition( @s.continue_address_2, self.s.Payment_details )
    @assignTransition( @s.back_to_account_2, self.s.Account )


  assignTransition: (button, transitionTo) ->
    self = this
    button.on Events.Click, (event, layer) ->
      self.flow.transition(transitionTo, self.fadeTransition)
      transitionTo.visible = true
