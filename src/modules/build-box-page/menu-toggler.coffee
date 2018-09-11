export class menuToggler
  constructor: (@s) ->
    @state = 'crafts'

    # static buttons
    @crafts = @assignActiveState(@s.choose_crafts, 'active')
    @crafts_disabled = @assignActiveState(@s.choose_crafts_disabled, 'inactive')
    @add_ons = @assignActiveState(@s.choose_add_ons, 'inactive')
    @add_ons_disabled = @assignActiveState(@s.choose_add_ons_disabled, 'active')

    # sticky buttons
    @createStickyTogglers()

    # groups
    @craft_group = @s.craft_group
    @add_ons_group = @s.add_ons_group

    # image button groups
    @present_craft_group = @s.craft_layer
    @present_add_ons_group = @s.add_on_layer
    @future_craft_group = @s.craft_layer_future
    @future_add_ons_group = @s.add_on_layer_future


    @initialState()

    @assignClickEvent(@crafts_disabled)
    @assignClickEvent(@add_ons_disabled)


  initialState: () ->
    # static groups
    @add_ons_group.visible = false

    # static buttons
    @crafts.visible = true
    @crafts_disabled.visible = true
    @add_ons.visible = true
    @add_ons_disabled.visible = true

    # sticky craft groups
    @present_craft_group.visible = true
    @present_add_ons_group.visible = false
    @future_craft_group.visible = true
    @future_add_ons_group.visible = false


  assignClickEvent: (button, type) ->
    self = this
    button.on Events.Click, (event, layer) ->
      if (self.state == 'add ons')
        self.toggleButtonState(self)
        self.gotoCraftState(self)
        self.state = 'crafts'
      else
        self.toggleButtonState(self)
        self.gotoAddonsState(self)
        self.state = 'add ons'


  toggleButtonState: (self) ->
    # static buttons swaps
    self.crafts.stateCycle 'active', 'inactive'
    self.crafts_disabled.stateCycle 'inactive', 'active'
    self.add_ons.stateCycle 'active', 'inactive'
    self.add_ons_disabled.stateCycle 'inactive', 'active'

    # sticky button swaps
    self.sticky_toggler_crafts.stateCycle 'active', 'inactive'
    self.sticky_toggler_add_ons.stateCycle 'inactive', 'active'
    self.sticky_toggler_crafts_future.stateCycle 'active', 'inactive'
    self.sticky_toggler_add_ons_future.stateCycle 'inactive', 'active'


  gotoCraftState: (self) ->
    self.transitionBetween(self.craft_group, self.add_ons_group)
    self.transitionBetween(self.present_craft_group, self.present_add_ons_group)
    self.transitionBetween(self.future_craft_group, self.future_add_ons_group)

  gotoAddonsState: (self) ->
    self.transitionBetween(self.add_ons_group, self.craft_group)
    self.transitionBetween(self.present_add_ons_group, self.present_craft_group)
    self.transitionBetween(self.future_add_ons_group, self.future_craft_group)


  transitionBetween: (incoming, outgoing) ->
    incoming.opacity = 0
    incoming.visible = true
    incoming.animate
      opacity: 1
      options:
        time: 0.2
        delay: 0.3
    outgoing.animate
      opacity: 0
      options:
        time: 0.2
    setTimeout ( ->
      outgoing.visible = false
    ), 310



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


  createStickyTogglers: () ->
    @sticky_toggler_crafts = @assignActiveState(@s.sticky_menu_toggle, 'active')
    @sticky_toggler_crafts.x = 210
    @sticky_toggler_crafts.y = -1
    @sticky_toggler_add_ons = @assignActiveState(@s.sticky_menu_toggle_add_ons, 'inactive')
    @sticky_toggler_add_ons.x = 210
    @sticky_toggler_add_ons.y = -1
    @sticky_toggler_crafts_future = @assignActiveState(@sticky_toggler_crafts.copy(), 'active')
    @sticky_toggler_add_ons_future = @assignActiveState(@sticky_toggler_add_ons.copy(), 'inactive')

    @assignClickEvent(@sticky_toggler_crafts)
    @assignClickEvent(@sticky_toggler_crafts_future)
    @assignClickEvent(@sticky_toggler_add_ons)
    @assignClickEvent(@sticky_toggler_add_ons_future)

    @s.sticky.addChild(@sticky_toggler_crafts)
    @s.sticky.addChild(@sticky_toggler_add_ons)
    @s.sticky_future.addChild(@sticky_toggler_crafts_future)
    @s.sticky_future.addChild(@sticky_toggler_add_ons_future)
