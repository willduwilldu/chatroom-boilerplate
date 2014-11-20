
// Wait for DOM to Load
jQuery(function($) {
    
    // Create New Socket Connection using Socket.io
    var socket = io();
    // var emojis = [
    //         {typed:'sick',link:'1f621.png'},
    //         {typed:'>:(',link:'1f621.png'},
    //         {typed:':/',link:'1f613.png'},
    //         {typed:';D',link:'1f609.png'},
    //         {typed:':)',link:'1f604.png'},
    //         {typed:'=)',link:'1f603.png'},
    //         {typed:'D:',link:'1f601.png'},
    //         {typed:'T.T',link:'1f62d.png'},
    //         {typed:'o.0',link:'1f61c.png'},
    //     ];

    // function replaceEmoji(){
    //     for (var i in emojis){
    //         var obj=emojis[i];
    //         console.log(obj.link);
    //         text.replace(new RegExp(text, obj.typed),'<img src="'+obj.link+'">');
    //     }
    //     console.log(text);
    // };

var text;

    //Send a message to the server
    $('.send').on('click',function(){
    	text=$('input').val();
        // replaceEmoji();
    	socket.emit('message', text); //pass message to server!
        $('input').val('');
        text='';
    });

    //listening from server for the update in this socket
    //Recieve Update Event from the server
    socket.on('update', function(msg){
    	$('.messages').append(msg);
    });
    $('img').on('click',function(){
        $('input').val($('input').val()+this.className);
        $(".emoji").toggle([400]);
    });
});


// $(document).ready(function(){
//   $("#smile").click(function(){
//     // $(".emoji").toggle();
//   });
// });






