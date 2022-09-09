$(document).ready(function(){
    var togs=3
    var grass;
    var togsz = 5
    var grassz;
    $("#chat").click(function(){
        $("#keyboard").show(1000)
        $("#bottom").css('position','fixed')
        $("#bottom").css('top',340)
        $("#chat").css("margin-top",0)
        // $("#chat").dblclick(function(){
        //     $("#bottom").toggle(1000)
    
        // })
    })
    $("#right").dblclick(function(){
        $("#bottom").toggle(1000)

    })
    
    $("#chat").keyup(function(){
        function blunt(){
            $("#name2").html('~Sam~')
            $("#name2").css('margin-top','-37px')
            $("#name2").css('margin-left','90%')
            $("#name2").css('font-size','larger')
            // $("#name2").css('font-size','10px')
            // $("#name2").css('margin-top','-50px')
            $("horizon2").show()
        }
        var mess=$("#chat").val()
        $("#chat").append(mess)
        if(($("#chat").val())!=''){
            $("#send").show(500)

            $("#name2").html('..Sam is typing')
            $("#name2").css('font-size','10px')
            $("#name2").css('margin-top','-50px')
            $("horizon2").hide()
            setTimeout(blunt,2000)

        }
        else{
            $("#send").hide(1000)    
        }
        $("#send").click(function one(){
            $("#right").show(700)
            $("#right2").show(700)
            $("#times").show(1000)
            $("#left2").show(2000)
            $("#left").show(2000)
            $("#ltimes2").show(2000)
            var mess=$("#chat").val()
            $("#right").append(mess+' \n\n')
            $("#left2").append(mess+' \n\n\n\n')
            $("#chat").val('')
            $("#left").append('\n\n')
            $("#right2").append('\n\n')
            $("#left").append("<span style='visibility:hidden;'>"+mess+'\n\n'+"</span>")
            $("#right2").append("<span style='visibility:hidden;'>"+mess+'\n\n'+"</span>")
        
        })
            
            
        // second phone
        
    
    })
    $("#chat2").click(function(){
        $("#keyboard2").show(500)
        $("#bottom2").css('position','fixed')
        $("#bottom2").css('top',340)
        $("#chat2").css("margin-top",0)
        $("#right2").dblclick(function(){
            $("#bottom2").toggle(1000)
    
        })
    })
    // $("#chat2").dblclick(function(){
    //     $("#bottom2").toggle(1000)

    // })
    
    $("#chat2").keyup(function(){
        function blunt(){
            $("#name").html('~Wiz~')
            $("#name").css('margin-top','-37px')
            $("#name").css('margin-left','90%')
            $("#name").css('font-size','larger')
            
            $("horizon").show()
        }
        var mess=$("#chat2").val()
        $("#chat2").append(mess)
        if(($("#chat2").val())!=''){
            $("#send2").show(500)

            $("#name").html('..Wiz is typing')
            $("#name").css('font-size','10px')
            $("#name").css('margin-top','-50px')
            $("horizon").hide()
            setTimeout(blunt,2000)
        }
        else{
            $("#send2").hide(1000)    
        }
        $("#send2").click(function two(){
            $("#right2").show(200)
            $("#times2").show(100)
            $("#left").show()
            $("#right").show()
            $("#left2").show()
            $("#ltimes").show()
            // $("#left2").hide()
            // $("#ltimes2").hide()
            var mess=$("#chat2").val()
            $("#right2").append(mess+' \n\n')
            $("#left").append(mess+'\n\n')
            $("#left2").append("<span style='visibility:hidden;'>"+mess+'\n\n'+"</span>")
            $("#right").append("<span style='visibility:hidden;'>"+mess+'\n\n'+"</span>")
            $("#right").append('\n\n')
            $("#chat2").val('')
            // $("#chat").show()

            // $("#left").append('<br>')
            // $("#right2").append('<br>')
            // $("#right2").hide()
            // $("#left").hide()
        }) 
    })

    // android keys
    // $('#keyboard').click(function(){
    //     blunt()
    // })
    $('#case').click(function(){
        // e.preventDefault();
        var tog=togs%2
        if(tog==1){
            $('#case').html('aa')
            $('#a').html('a')
            $('#b').html('b')
            $('#c').html('c')
            $('#d').html('d')
            $('#e').html('e')
            $('#f').html('f')
            $('#g').html('g')
            $('#h').html('h')
            $('#i').html('i')
            $('#j').html('j')
            $('#k').html('k')
            $('#l').html('l')
            $('#m').html('m')
            $('#n').html('n')
            $('#o').html('o')
            $('#p').html('p')
            $('#q').html('q')
            $('#r').html('r')
            $('#s').html('s')
            $('#t').html('t')
            $('#u').html('u')
            $('#v').html('v')
            $('#w').html('w')
            $('#x').html('x')
            $('#y').html('y')
            $('#z').html('z')
            $('#space').html(' ')
            // $('#delete').pop(grass)
            togs=togs+1
        }
        else{
            $('#case').html('AA')
            $('#a').html('A')
            $('#b').html('B')
            $('#c').html('C')
            $('#d').html('D')
            $('#e').html('E')
            $('#f').html('F')
            $('#g').html('G')
            $('#h').html('H')
            $('#i').html('I')
            $('#j').html('J')
            $('#k').html('K')
            $('#l').html('L')
            $('#m').html('M')
            $('#n').html('N')
            $('#o').html('O')
            $('#p').html('P')
            $('#q').html('Q')
            $('#r').html('R')
            $('#s').html('S')
            $('#t').html('T')
            $('#u').html('U')
            $('#v').html('V')
            $('#w').html('W')
            $('#x').html('X')
            $('#y').html('Y')
            $('#z').html('Z')
            $('#space').html(' ')
            // $('#delete').pop(grass)
            togs=3
        }
        
    })
    
    $("#a").click(function(){
        grass=$('#a').html()
        $('#chat').append(grass)
        $('#send').show(400)
        one()
    })
    $("#b").click(function(){
        grass=$('#b').html()
        $('#chat').append(grass)
        $('#send').show(400)
        one()

    })
    $("#c").click(function(){
        grass=$('#c').html()
        $('#send').show(400)
        $('#chat').append(grass)
        one()

    })
    $("#d").click(function(){
        grass=$('#d').html()
        $('#chat').append(grass)
        $('#send').show(400)
        one()

    })
    $("#e").click(function(){
        grass=$('#e').html()
        $('#chat').append(grass)
        $('#send').show(400)
        one()

    })
    $("#f").click(function(){
        grass=$('#f').html()
        $('#chat').append(grass)
        $('#send').show(400)
        one()

    })
    $("#g").click(function(){
        grass=$('#g').html()
        $('#chat').append(grass)
        $('#send').show(400)
        one()

        
    })
    $("#h").click(function(){
        grass=$('#h').html()
        $('#chat').append(grass)
        $('#send').show(400)
        one()

    })
    $("#i").click(function(){
        grass=$('#i').html()
        $('#send').show(400)
        $('#chat').append(grass)
        one()

    })
    $("#j").click(function(){
        grass=$('#j').html()
        $('#chat').append(grass)
        $('#send').show(400)
        one()

    })
    $("#k").click(function(){
        grass=$('#k').html()
        $('#chat').append(grass)
        $('#send').show(400)
        one()


    })
    $("#l").click(function(){
        grass=$('#l').html()
        $('#chat').append(grass)
        $('#send').show(400)
        one()


    })
    $("#m").click(function(){
        grass=$('#m').html()
        $('#chat').append(grass)
        $('#send').show(400)
        one()

    })
    $("#n").click(function(){
        grass=$('#n').html()
        $('#chat').append(grass)
        $('#send').show(400)
        one()


    })
    $("#o").click(function(){
        grass=$('#o').html()
        $('#send').show(400)
        $('#chat').append(grass)
        one()

    })
    $("#p").click(function(){
        grass=$('#p').html()
        $('#chat').append(grass)
        $('#send').show(400)
        one()

    })
    $("#q").click(function(){
        grass=$('#q').html()
        $('#chat').append(grass)
        $('#send').show(400)
        one()


    })
    $("#r").click(function(){
        grass=$('#r').html()
        $('#chat').append(grass)
        $('#send').show(400)
        one()


    })
    $("#s").click(function(){
        grass=$('#s').html()
        $('#chat').append(grass)
        $('#send').show(400)
        one()

    })
    $("#t").click(function(){
        grass=$('#t').html()
        $('#send').show(400)
        $('#chat').append(grass)
        one()


    })
    $("#u").click(function(){
        grass=$('#u').html()
        $('#send').show(400)
        $('#chat').append(grass)
        one()

        
    })
    $("#v").click(function(){
        grass=$('#v').html()
        $('#chat').append(grass)
        $('#send').show(400)
        one()

    })
    $("#w").click(function(){
        grass=$('#w').html()
        $('#chat').append(grass)
        $('#send').show(400)
        one()


    })
    $("#x").click(function(){
        grass=$('#x').html()
        $('#chat').append(grass)
        $('#send').show(400)
        one()
    })
    $("#y").click(function(){
        grass=$('#y').html()
        $('#chat').append(grass)
        $('#send').show(400)
        one()


    })
    $("#z").click(function(){
        grass=$('#z').html()
        $('#chat').append(grass)
        $('#send').show(400)
        $('#send').show(400)
        one()


    })
    $("#space").click(function(){
        $('#chat').append(' ') 
        one()

    })
    
    $("#delete").click(function(){
        var cvalue=$('#chat').val()
        var news=cvalue.slice(0,-1)
        $('#chat').val(news)
        one()


    })
    $("#clear").click(function(){ 
        $('#chat').val('')
    })


    $('#case2').click(function two(){
        var togz =(togsz)%2
        if(togz==1){
            $('#case2').html('aa')
            $('#a2').html('a')
            $('#b2').html('b')
            $('#c2').html('c')
            $('#d2').html('d')
            $('#e2').html('e')
            $('#f2').html('f')
            $('#g2').html('g')
            $('#h2').html('h')
            $('#i2').html('i')
            $('#j2').html('j')
            $('#k2').html('k')
            $('#l2').html('l')
            $('#m2').html('m')
            $('#n2').html('n')
            $('#o2').html('o')
            $('#p2').html('p')
            $('#q2').html('q')
            $('#r2').html('r')
            $('#s2').html('s')
            $('#t2').html('t')
            $('#u2').html('u')
            $('#v2').html('v')
            $('#w2').html('w')
            $('#x2').html('x')
            $('#y2').html('y')
            $('#z2').html('z')
            $('#space2').html(' ')
            togsz=togsz+1
        }
        else{
            $('#case2').html('AA')
            $('#a2').html('A')
            $('#b2').html('B')
            $('#c2').html('C')
            $('#d2').html('D')
            $('#e2').html('E')
            $('#f2').html('F')
            $('#g2').html('G')
            $('#h2').html('H')
            $('#i2').html('I')
            $('#j2').html('J')
            $('#k2').html('K')
            $('#l2').html('L')
            $('#m2').html('M')
            $('#n2').html('N')
            $('#o2').html('O')
            $('#p2').html('P')
            $('#q2').html('Q')
            $('#r2').html('R')
            $('#s2').html('S')
            $('#t2').html('T')
            $('#u2').html('U')
            $('#v2').html('V')
            $('#w2').html('W')
            $('#x2').html('X')
            $('#y2').html('Y')
            $('#z2').html('Z')
            $('#space2').html(' ')
            togsz=5
        }
        
    })
    
    $("#a2").click(function(){
        (grassz)=$('#a2').html()
        $('#chat2').append(grassz)
        $('#send2').show(400)
        two()
    })
    $("#b2").click(function(){
        (grassz)=$('#b2').html()
        $('#chat2').append(grassz)
        $('#send2').show(400)
        two()

    })
    $("#c2").click(function(){
        grassz=$('#c2').html()
        $('#send2').show(400)
        $('#chat2').append(grassz)
        two()
    })
    $("#d2").click(function(){
        grassz=$('#d2').html()
        $('#chat2').append(grassz)
        $('#send2').show(400)
        two()
    })
    $("#e2").click(function(){
        grassz=$('#e2').html()
        $('#chat2').append(grassz)
        $('#send2').show(400)
        two()
    })
    $("#f2").click(function(){
        grassz=$('#f2').html()
        $('#chat2').append(grassz)
        $('#send2').show(400)
        two()
    })
    $("#g2").click(function(){
        grass2=$('#g2').html()
        $('#chat2').append(grassz)
        $('#send2').show(400)
        two()
    })
    $("#h2").click(function(){
        grassz=$('#h2').html()
        $('#chat2').append(grassz)
        $('#send2').show(400)
        two()
})
    $("#i2").click(function(){
        grassz=$('#i2').html()
        $('#send2').show(400)
        $('#chat2').append(grassz)
        two()
    })
    $("#j2").click(function(){
        grassz=$('#j2').html()
        $('#chat2').append(grassz)
        $('#send2').show(400)
        two()
    })
    $("#k2").click(function(){
        grassz=$('#k2').html()
        $('#chat2').append(grassz)
        $('#send2').show(400)
        two()

    })
    $("#l2").click(function(){
        grassz=$('#l2').html()
        $('#chat2').append(grassz)
        $('#send2').show(400)
        two()

    })
    $("#m2").click(function(){
        grassz =$('#m2').html()
        $('#chat2').append(grassz)
        $('#send2').show(400)
    })
    $("#n2").click(function(){
        grassz=$('#n2').html()
        $('#chat2').append(grassz)
        $('#send2').show(400)

    })
    $("#o2").click(function(){
        grassz=$('#o2').html()
        $('#send2').show(400)
        $('#chat2').append(grassz)
    })
    $("#p2").click(function(){
        grassz=$('#p2').html()
        $('#chat2').appendgrassz
        $('#send2').show(400)
    })
    $("#q2").click(function(){
        grassz=$('#q2').html()
        $('#chat2').append(grassz)
        $('#send2').show(400)

    })
    $("#r2").click(function(){
        grassz=$('#r2').html()
        $('#chat2').append(grassz)
        $('#send2').show(400)

    })
    $("#s2").click(function(){
        grassz=$('#s2').html()
        $('#chat2').append(grassz)
        $('#send2').show(400)
    })
    $("#t2").click(function(){
        grassz=$('#t2').html()
        $('#chat2').append(grassz)
        $('#send2').show(400)

    })
    $("#u2").click(function(){
        grassz=$('#u2').html()
        $('#chat2').append(grassz)
        $('#send2').show(400)
        
    })
    $("#v2").click(function(){
        grassz=$('#v2').html()
        $('#chat2').append(grassz)
        $('#send2').show(400)
    })
    $("#w2").click(function(){
        grassz=$('#w2').html()
        $('#chat2').append(grassz)
        $('#send2').show(400)

    })
    $("#x2").click(function(){
        grassz=$('#x2').html()
        $('#chat2').append(grassz)
        $('#send2').show(400)

    })
    $("#y2").click(function(){
        grassz=$('#y2').html()
        $('#chat2').append(grassz)
        $('#send2').show(400)

    })
    $("#z2").click(function(){
        grassz=$('#z2').html()
        $('#chat2').append(grassz)
        $('#send2').show(400)

    })
    $("#space2").click(function(){
        $('#chat2').append(' ')
        $('#send2').show(400)
    })
    
    $("#delete2").click(function(){
        var cvalue2=$('#chat2').val()
        var news2=cvalue2.slice(0,-1)
        $('#chat2').val(news2)

    })
    $("#clear2").click(function(){ 
        $('#chat2').val('')
    })




    $("#send").click(function one(){
        $("#right").show(700)
        $("#right2").show(700)
        $("#times").show(1000)
        $("#left2").show(2000)
        $("#left").show(2000)
        $("#ltimes2").show(2000)
        var mess=$("#chat").val()
        $("#right").append(mess+' \n\n')
        $("#left2").append(mess+' \n\n\n\n')
        $("#chat").val('')
        $("#left").append('\n\n')
        $("#right2").append('\n\n')
        $("#left").append("<span style='visibility:hidden;'>"+mess+'\n\n'+"</span>")
        $("#right2").append("<span style='visibility:hidden;'>"+mess+'\n\n'+"</span>")
    
    })
    var rightContent=$('#right')
    rightContent.animate({scrollTop:rightContent.prop('200px')},1000)


    setInterval(
        function(){
            var dt=(Date.now())
            // var use=dt.toLocaleString()
            var news =new Date(dt)
            var hours=(news.getHours())
            var minutes=(news.getMinutes())
            var seconds=(news.getSeconds())
            $('#hour').html(hours)
            $('#minute').html(minutes)
            $('#second').html(seconds)
            if(hours>9){
                $('#hzero').hide()
            }
            else{
                $('#hzero').show()
            }

            if(minutes>9){
                $('#mzero').hide()
            }
            else{
                $('#mzero').show()
            }
            if(seconds>9){
                $('#szero').hide()
            }
            else{
                $('#szero').show()
            }

        },1000
    )
    setInterval(
        function(){
            var d2t=(Date.now())
            // var use=dt.toLocaleString()
            var n2ews =new Date(d2t)
            var h2ours=(n2ews.getHours())
            var m2inutes=(n2ews.getMinutes())
            var s2econds=(n2ews.getSeconds())
            $('#h2our').html(h2ours)
            $('#m2inute').html(m2inutes)
            $('#s2econd').html(s2econds)
            if(h2ours>9){
                $('#h2zero').hide()
            }
            else{
                $('#h2zero').show()
            }

            if(m2inutes>9){
                $('#m2zero').hide()
            }
            else{
                $('#m2zero').show()
            }
            if(s2econds>9){
                $('#s2zero').hide()
            }
            else{
                $('#s2zero').show()
            }

        },1000
    )
    setInterval(
        function(){
            $('#space1').fadeIn(500)
            $('#space1').fadeOut(500)
        },1000
    )
    setInterval(
        function(){
            $('#s2pace').fadeIn(500)
            $('#s2pace').fadeOut(500)
        },1000
    )

})

