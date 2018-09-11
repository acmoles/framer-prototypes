export class futureToggler
  constructor: (@s) ->
    @state = 'present'

    @s.box_selector.clip = true

    #boxes
    @nextBoxSticky = @assignState(@s.sticky, 'active')
    @futureBoxSticky = @assignState(@s.sticky_future, 'right')

    @nextBox = @assignState(@s.box_name, 'active')
    @futureBox = @assignState(@s.box_name_future, 'right')

    #buttons
    @future_button_sticky = @assignButtonState(@s.sticky_forward, 'active', 'forward')
    @past_button_sticky = @assignButtonState(@s.sticky_back, 'inactive', 'back')

    @future_button = @assignButtonState(@s.forward_box, 'active', 'forward')
    @past_button = @assignButtonState(@s.back_box, 'invisible', 'back')
    @future_button_disabled = @assignButtonState(@s.forward_box_disabled, 'invisible', 'none')
    @past_button_disabled = @assignButtonState(@s.back_box_disabled, 'active', 'none')


  toggleButtonState: (self) ->
    # buttons swaps
    self.future_button_sticky.stateCycle 'active', 'inactive'
    self.past_button_sticky.stateCycle 'inactive', 'active'

    self.future_button.stateCycle 'active', 'invisible'
    self.past_button.stateCycle 'invisible', 'active'
    self.future_button_disabled.stateCycle 'invisible', 'active'
    self.past_button_disabled.stateCycle 'active', 'invisible'



  gotoPresentState: (self) ->
    @nextBoxSticky.stateCycle 'left', 'active'
    @futureBoxSticky.stateCycle 'active', 'right'

    @nextBox.stateCycle 'left', 'active'
    @futureBox.stateCycle 'active', 'right'

    @state = 'present'


  gotoFutureState: (self) ->
    @nextBoxSticky.stateCycle 'active', 'left'
    @futureBoxSticky.stateCycle 'right', 'active'

    @nextBox.stateCycle 'active', 'left'
    @futureBox.stateCycle 'right', 'active'

    @state = 'future'


  assignState: (object, state) ->
    object.states =
      left:
        x: object.x - 325
        animationOptions:
          time: 0.4
      active:
        x: object.x
        animationOptions:
          time: 0.4
      right:
        x: object.x + 325
        animationOptions:
          time: 0.4
    object.stateSwitch state
    return object

  assignButtonState: (object, state, type) ->
    object.states =
      inactive:
        opacity: 0.25
        animationOptions:
          time: 0.4
      active:
        opacity: 1
        animationOptions:
          time: 0.4
      invisible:
        opacity: 0
        animationOptions:
          time: 0.4
    object.stateSwitch state

    self = this
    object.on Events.Click, (event, layer) ->
      if (type == 'back' && self.state != 'present')
        self.toggleButtonState(self)
        self.gotoPresentState(self)
      else if (type == 'forward' && self.state != 'future')
        self.toggleButtonState(self)
        self.gotoFutureState(self)

    return object
