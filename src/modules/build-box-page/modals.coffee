export class Modals
  constructor: (@s, @flow, @fadeTransition) ->
    @mod = @s.modern_art_look
    @pup = @s.shadow_puppets_look
    @but = @s.butterfly_look
    @van = @s.van_gogh_look

    @mod_layer = @s.modern_art_look.modern_art_modal_group
    @pup_layer = @s.shadow_puppets_look.shadow_puppets_modal_group
    @but_layer = @s.butterfly_look.butterfly_modal_group
    @van_layer = @s.van_gogh_look.van_gogh_modal_group

    @craft_group = @s.build_box.craft_group

    # @look_inside_buttons = [
    #   @craft_group.van_gogh_group.look_inside_starry_night
    # ]

  init: () ->

    self = this
    # hide modals
    @mod.visible = false
    @pup.visible = false
    @but.visible = false
    @van.visible = false

    # for button in @look_inside_buttons
      # body...
