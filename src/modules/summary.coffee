export class summary
  constructor: (@s, @flow, @fadeTransition) ->
    @sum = @s.Summary
    @sum2 = @s.Summary_2

  init: () ->

    @sum.visible = false
    @sum2.visible = false

  assignTransition: (button, transitionTo) ->
    self = this
    button.on Events.Click, (event, layer) ->
      self.flow.transition(transitionTo, self.fadeTransition)
      transitionTo.visible = true
