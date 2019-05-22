# Fractionize

Approximate your favorite numbers in fractional form!

Specify:
- **the decimal** to approximate,
- **how many digits** are to be used in the fraction,
- and the minimum **digits of accuracy**,

and Fractionize will return a list of qualifying unique fractions!

## Examples

Find approximations for popular constants:

    $ fractionize pi 2 1
    -> Testing approximations with accuracy of 0.1...
       [ '16 / 5 = 3.2 ... R = 0.09295817894065106',
         '19 / 6 = 3.1666666666666665 ... R = 0.047887837492022634',
         '22 / 7 = 3.142857142857143 ... R = 0.0028174960433950957',
         '41 / 13 = 3.1538461538461537 ... R = 0.05070533353541862',
         '60 / 19 = 3.1578947368421053 ... R = 0.09859317102744214',
         '85 / 27 = 3.1481481481481484 ... R = 0.05634032562220881' ]
    
    $ fractionize e 2 2
    -> [ '87 / 32 = 2.71875 ... R = 0.005511381915482616' ]
    
    $ fractionize sqrt2 2 2
    -> [ '99 / 70 = 1.4142857142857144 ... R = 0.0035713374682018184' ]

Of course, you can also use any decimal number you'd like.

    $ fractionize 9.83135 3 4
    -> Testing approximations with accuracy of 0.0001...
       [ '8022 / 869 = 9.231300345224396 ... R = 0.000032498131417924014' ]

## Future Improvements

- I'd love to add the ability for other non-fractional approximations (e.g. the cube root of 31 is a great approximation for Pi). Feel free to contribute if you'd like.