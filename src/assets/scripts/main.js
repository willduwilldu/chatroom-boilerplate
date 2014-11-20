
// Wait for DOM to Load
jQuery(function($) {
    
    // Create New Socket Connection using Socket.io
    var socket = io();
    
    //Send a message to the server
    $('a').on('click',function(){
    	var text=$('input').val();
    	socket.emit('message', text); //pass message to server!
    });

    //listening from server for the update in this socket
    //Recieve Update Event from the server
    socket.on('update', function(msg){
    	$('.messages').append(msg);
    });
    $('img').on('click',function(){
        $('input').val($('input').val()+this.className);
    });
});