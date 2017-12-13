export class summary
  constructor: (@s, @flow, @fadeTransition) ->
    @sum = @s.Summary
    @sum1 = @s.Summary_1
    @sum2 = @s.Summary_2

  init: () ->

    @sum.visible = false
    @sum1.visible = false
    @sum2.visible = false
