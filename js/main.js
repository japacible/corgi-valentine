var facingRight = false;

$(document).click(function(e) {
    var offset = $("#corgi").offset();
    var corgiX = offset.left;

    if(facingRight == true) {
        corgiX += $("#corgi").width();
    }
    
    var corgiY = offset.top;
    var clickX = e.clientX;
    var clickY = e.clientY;
    
    if (clickX > corgiX) {
        $("#corgi").attr("src", "corgi/corgi-right.gif");
        facingRight = true;
        $("#corgi").stop().animate({left:e.pageX - $("#corgi").width(), top:e.pageY});
    } else if (clickX < corgiX) {
        $("#corgi").attr("src", "corgi/corgi-left.gif");
        facingRight = false;
        $("#corgi").stop().animate({ left:e.pageX, top:e.pageY});
    }
});

