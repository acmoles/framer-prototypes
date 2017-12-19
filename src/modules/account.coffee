export class account
  constructor: (@s, @flow, @fadeTransition) ->
    @a = @s.Account
    @mask = @s.whitemask_account

  init: () ->

    sl = this

    @assignTransition( @s.continue_account, sl.s.Child_details )

    # Login
    @s.have_an_account.on Events.Click, (event, layer) ->
      sl.mask.opacity = 0
      sl.mask.states.active =
        opacity: 1
        animationOptions:
          time: 0.1
      sl.mask.visible = true
      sl.mask.animate 'active'

      sl.s.have_an_account_modal.opacity = 0
      sl.s.have_an_account_modal.states.active =
        opacity: 1
        animationOptions:
          time: 0.1
      sl.s.have_an_account_modal.visible = true
      sl.s.have_an_account_modal.animate 'active'

      sl.s.summary_title.states.faded =
        opacity: 0.2
      sl.s.summary_title.animate 'faded'
      sl.s.summary_folded_back.states.faded =
        opacity: 0.2
      sl.s.summary_folded_back.animate 'faded'

    @s.summary_title.on Events.Click, (event, layer) ->
      sl.s.caret_account.states.active =
        rotation: 180
      sl.s.caret_account.animate 'active'




    @assignTransition( @s.login, sl.s.Child_details )


  assignTransition: (button, transitionTo) ->
    sl = this
    button.on Events.Click, (event, layer) ->
      sl.flow.transition(transitionTo, sl.fadeTransition)
      transitionTo.visible = true
