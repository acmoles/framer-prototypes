export class stickyBuilder
  constructor: (@s, @flow) ->
    @s.box_mixer.visible = false
    @container = new Layer
        width: 360
        height: 130
        clip: true
        y: -130
        backgroundColor: 'transparent'
    @flow.footer.addChild(@container)

  init: () ->
    @s.box_mixer.visible = true
    @s.box_mixer.x = 0
    @s.box_mixer.y = 0
    @container.addChild(@s.box_mixer)
