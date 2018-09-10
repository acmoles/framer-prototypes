export class menuToggler
  constructor: (@s) ->
    @crafts = @assignActiveState(@s.choose_crafts, 'active')
    @crafts_disabled = @assignActiveState(@s.choose_crafts_disabled, 'inactive')

    @add_ons = @assignActiveState(@s.choose_add_ons, 'inactive')
    @add_ons_disabled = @assignActiveState(@s.choose_add_ons_disabled, 'active')

    @craft_group = @s.craft_group
    @add_ons_group = @s.add_ons_group

    @initialState()

    @assignClickEvents(@crafts_disabled, 'crafts')
    @assignClickEvents(@add_ons_disabled, 'add-ons')

  initialState: () ->
    @add_ons_group.visible = false

    @crafts.visible = true
    @crafts_disabled.visible = true

    @add_ons.visible = true
    @add_ons_disabled.visible = true


  assignClickEvents: (button, type) ->
    self = this
    button.on Events.Click, (event, layer) ->
      if (type == 'crafts')
        self.toggleButtonState(self)
        self.gotoCraftState(self)
      else
        self.toggleButtonState(self)
        self.gotoAddonsState(self)

  toggleButtonState: (self) ->
    # buttons swaps
    self.crafts.stateCycle 'active', 'inactive'
    self.crafts_disabled.stateCycle 'inactive', 'active'
    self.add_ons.stateCycle 'active', 'inactive'
    self.add_ons_disabled.stateCycle 'inactive', 'active'

  gotoCraftState: (self) ->
    self.craft_group.opacity = 0
    self.craft_group.visible = true
    self.craft_group.animate
      opacity: 1
      options:
        time: 0.2
    self.add_ons_group.animate
      opacity: 0
      options:
        time: 0.2
    setTimeout ( ->
      self.add_ons_group.visible = false
    ), 200

  gotoAddonsState: (self) ->
    self.add_ons_group.opacity = 0
    self.add_ons_group.visible = true
    self.add_ons_group.animate
      opacity: 1
      options:
        time: 0.2
    self.craft_group.animate
      opacity: 0
      options:
        time: 0.2
    setTimeout ( ->
      self.craft_group.visible = false
    ), 200


  assignActiveState: (object, state) ->
    object.states =
      active:
        opacity: 1
        animationOptions:
          time: 0.2
      inactive:
        opacity: 0
        animationOptions:
          time: 0.2
    object.stateSwitch state
    return object
