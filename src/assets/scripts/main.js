
// Wait for DOM to Load
jQuery(function($) {
    
    // Create New Socket Connection using Socket.io
    var socket = io();
    var emojis = [
            {typed:'sick',link:'1f621.png'},
            {typed:'>:(',link:'1f621.png'},
            {typed:':/',link:'1f613.png'},
            {typed:';D',link:'1f609.png'},
            {typed:':)',link:'1f604.png'},
            {typed:'=)',link:'1f603.png'},
            {typed:'D:',link:'1f601.png'},
            {typed:'T.T',link:'1f62d.png'},
            {typed:'o.0',link:'1f61c.png'},
        ];
    var text;

    //Send a message to the server
    $('.send').on('click',function(){
    	text=$('input').val();
    	socket.emit('message', text); //pass message to server!
        $('input').val('');
        text='';
    });

    //listening from server for the update in this socket
    //Recieve Update Event from the server
    socket.on('update', function(msg){
        
        // Loop through emojis
        $.each(emojis, function(){
            msg = msg.replace(this.typed, '<img class="small-emoji" src="/assets/images/' + this.link + '">');
            console.log(this.typed, msg);
        });

        // Append message
    	$('.messages').append(msg);
    });
    $('img').on('click',function(){
        $('input').val($('input').val()+this.className);
        $(".emoji").toggle([200]);
    });
});







