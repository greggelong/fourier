## fourier series

following the coding train coding challenge

https://youtu.be/Mm2eYfj0SgA


he used the formula from wiki

https://en.wikipedia.org/wiki/Fourier_series

using

radius * (4* cos(n* time))/(n*PI);

radius * (4* sin(n* time))/(n*PI);

but only doing the multiplying and dividing by 4 and PI in a 

in computing the radius

but as that is simply a scaler value you can pretty much ignore it

I got the same results simply by using a odd series 1 3 5 7 etc

```javascript
    // but you don't need the pi and the other multipliers
    // you just need to change the n value
    // n= i*2+1 is and odd series which makes the square wave
    // n = i + 1 is odd and even and make a saw tooth like wave
    // n= (i+1)*2  is and even series and and makes saw tooth
    let prevx =x
    let prevy =y
    let n = i*2+1
    let radius = 150/n //(100 * 4)/(n*PI)
     
    // this makes the wave additive literally adding them while looping i times
    x+= radius * cos(n* time)
    y+= radius * sin(n* time)


```