let x = 0;
let y = 0;
basic.forever(function () {
    x = randint(0, 4);
    y = randint(0, 4);
    if (led.point(x, y))
    {
        led.unplot(x, y);
    }
    else
    {
let bright = 5 * randint(1,51);
led.plotBrightness(x, y, bright);
    }
    basic.pause(50 * randint(0, 5));
})
