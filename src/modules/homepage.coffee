export class homepage
  constructor: (@s, @flow, @fadeTransition) ->
    @h = @s.Homepage
    @hc = @s.Homepage_code

  init: () ->

    @hc.visible = false

    self = this

    @s.sticky_get_started.parent = null
    @s.sticky_get_started.y = @flow.y + 58
    @s.sticky_get_started.opacity = 0
    @s.sticky_get_started.centerX();
    @s.sticky_get_started.states =
      out:
          y: @flow.y + 58
          opacity: 0
      in:
          y: @flow.y + 78
          opacity: 1
    visible = false

    @flow.scroll.onMove ->
      if self.flow.scroll.scrollY >= 700 && !visible
        visible = true
        self.s.sticky_get_started.stateCycle('in', 'out')
      else if self.flow.scroll.scrollY < 700 && visible
        visible = false
        self.s.sticky_get_started.stateCycle('out', 'in')
      else
        # body...

    @assignTransition( @s.get_started, self.s.Child_details, @s.sticky_get_started )
    @assignTransition( @s.sticky_get_started, self.s.Child_details, @s.sticky_get_started )

    @assignTransition( @s.get_started_code, self.s.Child_details_2, @s.sticky_get_started )
    @assignTransition( @s.sticky_get_started_code, self.s.Child_details_2, @s.sticky_get_started )


  assignTransition: (button, transitionTo, Overlay) ->
    self = this
    button.on Events.Click, (event, layer) ->
      self.s.sticky_get_started.stateCycle('out', 'in')
      self.flow.transition(transitionTo, self.fadeTransition)
      transitionTo.visible = true
