export class Modals
  constructor: (@s, @flow, @fadeTransition) ->
    @container = new Layer
        width: 360
        height: 513
        clip: true
        y: -513
        backgroundColor: 'transparent'
    @flow.footer.addChild(@container)

    @mod = @assignToggle(@s.modern_art_look, @s.look_inside_modern_art, @s.close_modern_art)
    @pup = @assignToggle(@s.shadow_puppets_look, @s.look_inside_shadow_puppets, @s.close_shadow_puppets)
    @but = @assignToggle(@s.butterfly_look, @s.look_inside_butterfly, @s.close_butterfly)
    @van = @assignToggle(@s.van_gogh_look, @s.look_inside_starry_night, @s.close_van_gogh)

  init: () ->
    # hide modals
    @mod.visible = false
    @pup.visible = false
    @but.visible = false
    @van.visible = false

  assignToggle: (modal, button, close) ->
    self = this
    button.on Events.Click, (event, layer) ->
      modal.x = 0
      modal.y = 0
      modal.visible = true
      modal.scale = 0.9
      modal.opacity = 0
      self.container.addChild(modal)
      self.flow.scroll.scroll = false

      self.container.animate
        backgroundColor: 'rgba(65, 79, 79, 0.8)'
        options:
          time: 0.2
      modal.animate
        opacity: 1
        scale: 1
        options:
          time: 0.4
          curve: Spring(damping: 0.5)


    close.on Events.Click, (event, layer) ->
      self.container.animate
        backgroundColor: 'transparent'
        options:
          time: 0.2
      self.flow.scroll.scroll = true
      self.flow.scroll.scrollHorizontal = false
      self.flow.scroll.directionLock = true
      self.container.removeChild(modal)
      modal.visible = false
    return modal
