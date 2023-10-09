function goToWar(params) {
    var name1 = " "; 
    var name2 =""; 
    name1 = prompt("Enter your name: "," ");
    name2 = prompt("Enter your name: "," ");

    var playerOne = 0; 
    var playerTwo = 0;
    var oneCard = 0;
    var twoCard = 0; 
    var ties = 0;
    var count = 1;
    var card1 = "";
    var card2 = "";
    var b = "";
    
    document.getElementById("introG").innerHTML = "<h3>The Game of War</h3>";

    
    
    while ((playerOne < 10) && (playerTwo < 10)){
        var suits = ["hearts","diamonds","spades","clubs"];
        // var cardimg = ["images/ace.jpg","","","","","","","","","","images/jack.jpg","images/queen.jpg","images/king.jpg"];              
        var cardimg = ["ace","2","3","4","5","6","7","8","9","10","jack","queen","king"];
        var fcardnum = 0;
        var scardnum = 0;
        var fsuit = 0;
        var ssuit = 0;
        b = document.getElementById("board").innerHTML
        b = b + '<div class="row"><div class="col-sm-4" ><table id="game'+ count +'"></table></div><div class="col-sm-4" ><table id="game'+ (count+1) +'"></table></div><div class="col-sm-4" ><table id="game'+ (count+2) +'"></table></div></div>';
        document.getElementById("board").innerHTML = b;
        
        for (let i = 0; i < 3; i++) {
            oneCard = Math.floor(Math.random() * 13 + 1); 
            twoCard = Math.floor(Math.random() * 13 + 1);

            fcardnum = cardimg[oneCard-1]
            scardnum = cardimg[twoCard-1]

            fsuit = suits[Math.floor(Math.random() * 3)]
            ssuit = suits[Math.floor(Math.random() * 3)]

            if(oneCard > twoCard) {
                playerOne++; 
            } else if(twoCard > oneCard ) {
                playerTwo ++;
            } else {
                ties++;
            }
            card1.readdir
            card1 = fcardnum + "-of-" + fsuit;
            card2 = scardnum + "-of-" + ssuit;
            console.log(card1);

            document.getElementById("game" + count).innerHTML = "<tr><td colspan '2'>&nbsp;</td></tr> <tr><td colspan = '2'><h4>Deal Number: " + count + "</h4></td></tr><tr><td><img src='../media/"+ card1 +".png' alt=''></td><tr><td><p><b>" + name1 + "'s card:</b> " + fcardnum + " of " + fsuit + " -- Score : " + playerOne + "</p></td><tr><td><img src='../media/"+ card2 +".png' alt=''></td><tr><td><p><b>" + name2 + "'s card:</b> " + scardnum + " of " + ssuit + " -- Score : " + playerTwo + "</p></td><tr><td>Number of Ties: " + ties + "</td>";
            
            count++;

            if ((playerOne == 10) && (playerTwo != 10)) {
                document.getElementById("winner").innerHTML = "<tr><td colspan '2'><h3>The winner is " + name1 + "!</h3></td></tr>";
                break
            } else if ((playerTwo == 10) && (playerOne != 10)) {
                document.getElementById("winner").innerHTML = "<tr><td colspan '2'><h3>The winner is " + name2 + "!</h3></td></tr>";
                break
            }
        }
    }
}