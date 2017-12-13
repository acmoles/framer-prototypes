export class account
  constructor: (@s, @flow, @fadeTransition) ->
    @a = @s.Account

  init: () ->

    self = this

    @s.continue_account.on Events.Click, (event, layer) ->
      self.flow.transition(self.s.Child_details, self.fadeTransition)
      self.s.Child_details.visible = true
