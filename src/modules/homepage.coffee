export class homepage
  constructor: (@s, @flow, @fadeTransition) ->
    @h = @s.Homepage
    @hc = @s.Homepage_code

  init: () ->

    @hc.visible = false

    self = this

    @assignTransition( @s.get_started, self.s.Child_details )
    @assignTransition( @s.sticky_get_started, self.s.Child_details )

    @assignTransition( @s.get_started_code, self.s.Child_details_2 )
    @assignTransition( @s.sticky_code_get_started, self.s.Child_details_2 )

    @flow.showOverlayTop(@s.sticky_get_started)


  assignTransition: (button, transitionTo) ->
    self = this
    button.on Events.Click, (event, layer) ->
      self.flow.transition(transitionTo, self.fadeTransition)
      transitionTo.visible = true
