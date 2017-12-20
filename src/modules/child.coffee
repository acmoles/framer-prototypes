export class child
  constructor: (@s, @flow, @fadeTransition) ->
    @c = @s.Child_details
    @c2 = @s.Child_details_2

  init: () ->

    @c.visible = false
    @c2.visible = false

    self = this

    @assignTransition( @s.continue_child, self.s.Products )
    @assignTransition( @s.add_child, self.s.Child_details_2 )
    @assignTransition( @s.got_code_child, self.s.Child_details_2 )

    @assignTransition( @s.continue_child_2, self.s.Products )

  assignTransition: (button, transitionTo) ->
    self = this
    button.on Events.Click, (event, layer) ->
      self.flow.transition(transitionTo, self.fadeTransition)
      transitionTo.visible = true
