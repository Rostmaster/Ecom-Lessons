$(() => {
    $('#btn1').on(
        'click', () => {
            $('#my_h1').css({ color: 'green', 'font-weight': 'bold' })
        })
    $('#btn1').on(
        {
            'click': () => {
                $('#my_h1').css({ color: 'red', 'font-weight': 'bold' })
            },
            'mouseenter': () => {
                $('#my_h1').css({ color: 'blue', 'font-weight': 'bold' })
            }
        }
    )
    $('#btn2').on(
        'click', () => {
            $('#my_h1').css({ color: 'black', 'font-weight': 'bold' })//color change
            $('#btn1').off()//remove event listener
        })


    //!========================================================================

    $('#fBtn1').on('click', () => {
        event.preventDefault()
        $('.result').text(Date())

    })

    $('#fBtn2').on('click', () => {
        event.preventDefault()
        let random = "0" + (Number(Math.floor(Math.random() * 255))
            .toString(16))
            .slice(-2)
            .toUpperCase()

        $('.colorP').css({ color: `#${random.toString().toUpperCase()}` })

    })
    $('#fBtn3').on(
        {
            mouseenter: () => {
                event.preventDefault()
                $('.colorP').text(Date())
            },
            click: () => {
                event.preventDefault()
            }
        }
    )

    $('#fBtn4').on('click', () => {
        event.preventDefault()
        $('#fBtn1').off()
        $('#fBtn2').off()
        $('#fBtn3').off()
    })

    //!========================================================================

    $('#add').on('click', () => {
        $('.items').append(`
            <div class="item">
                <label></label><button>Complete</button>
            </div>
        `)
    })

})

