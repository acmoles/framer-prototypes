export class account
  constructor: (@s, @flow, @fadeTransition) ->
    @a = @s.Account
    @mask = @s.whitemask_account

  init: () ->

    @a.visible = false

    sl = this

    @assignTransition( @s.continue_account, sl.s.Delivery_address )
    @assignTransition( @s.back_to_product, sl.s.Products )

    @assignTransition( @s.login, sl.s.Delivery_address )

    # Login
    @s.have_an_account.on Events.Click, (event, layer) ->
      sl.flow.showOverlayCenter(sl.s.have_an_account_modal, animate: true)

    @s.caret_account.states =
      active:
        rotation: 180
      inactive:
        rotation: 0
    @assignActiveState( @s.whitemask_account )
    @assignActiveState( @s.summary_unfolded )

    clickoff = [
      @s.summary_title
      @s.caret_account
      @s.close_summary_unfolded
      @s.edit_order_summary_unfolded
    ]
    for link in clickoff
      do (link) ->
        link.on  Events.Click, sl.dropdownEvent.bind(sl)





  dropdownEvent: (event, layer) ->
    this.s.caret_account.stateCycle 'active', 'inactive'
    this.s.whitemask_account.visible = if this.s.whitemask_account.visible then false else true
    this.s.whitemask_account.stateCycle 'inactive', 'active'
    this.s.summary_unfolded.visible = if this.s.summary_unfolded.visible then false else true
    this.s.summary_unfolded.stateCycle 'inactive', 'active'

  assignTransition: (button, transitionTo) ->
    sl = this
    button.on Events.Click, (event, layer) ->
      sl.flow.transition(transitionTo, sl.fadeTransition)
      transitionTo.visible = true

  assignActiveState: (object) ->
    object.states =
      active:
        opacity: 1
      inactive:
        opacity: 0
    object.stateSwitch 'inactive'

  assignInactiveState: (object) ->
    object.states =
      active:
        opacity: 1
      inactive:
        opacity: 0
    object.stateSwitch 'active'
