export class payment
  constructor: (@s, @flow, @fadeTransition) ->
    @p = @s.Payment_details
    @p2 = @s.Payment_details_2

  init: () ->

    @p.visible = false
    @p2.visible = false
