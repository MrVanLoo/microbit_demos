input.onButtonPressed(Button.A, function () {
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
})
basic.showLeds(`
    # # # # #
    . # . # .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
	
})
