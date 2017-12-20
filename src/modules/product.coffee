export class product
  constructor: (@s, @flow, @fadeTransition) ->
    @r = @s.Products

  init: () ->

    @r.visible = false

    self = this

    @assignTransition( @s.continue_product, self.s.Account )
    @assignTransition( @s.back_to_child, self.s.Child_details_2 )

    # Product select dropdown
    @assignInactiveState( @s.dropdown_up_rectangle )
    @s.caret.states =
      active:
        rotation: 180
      inactive:
        rotation: 0
    @assignActiveState( @s.whitemask_products )
    @assignActiveState( @s.dropdown_dropped_rectangle )
    @assignActiveState( @s.dropped_boxes )

    clickoff = [
      @s.caret
      @s.box_details
      @s.dropped_boxes
      @s.dropdown_dropped_rectangle
    ]
    for link in clickoff
      do (link) ->
        link.on  Events.Click, self.dropdownEvent.bind(self)

  dropdownEvent: (event, layer) ->
    this.s.caret.stateCycle 'active', 'inactive'
    this.s.dropdown_up_rectangle.stateCycle 'active', 'inactive'
    this.s.whitemask_products.visible = if this.s.whitemask_products.visible then false else true
    this.s.whitemask_products.stateCycle 'inactive', 'active'
    this.s.dropdown_dropped_rectangle.visible = if this.s.dropdown_dropped_rectangle.visible then false else true
    this.s.dropdown_dropped_rectangle.stateCycle 'inactive', 'active'
    this.s.dropped_boxes.visible = if this.s.dropped_boxes.visible then false else true
    this.s.dropped_boxes.stateCycle 'inactive', 'active'

  assignTransition: (button, transitionTo) ->
    self = this
    button.on Events.Click, (event, layer) ->
      self.flow.transition(transitionTo, self.fadeTransition)
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
