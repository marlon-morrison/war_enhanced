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
        var suits = ["Hearts","Diamonds","Spades","clubs"];
        // var cardimg = ["images/ace.jpg","","","","","","","","","","images/jack.jpg","images/queen.jpg","images/king.jpg"];              
        var cardimg = ["Ace","2","3","4","5","6","7","8","9","10","Jack","Queen","King"];
        b = document.getElementById("board").innerHTML
        b = b + '<div class="row"><div class="col-sm-4" ><table id="game'+ count +'"></table></div><div class="col-sm-4" ><table id="game'+ (count+1) +'"></table></div><div class="col-sm-4" ><table id="game'+ (count+2) +'"></table></div></div>';
        document.getElementById("board").innerHTML = b;
        
        for (let i = 0; i < 3; i++) {
            oneCard = Math.floor(Math.random() * 13 + 1); 
            twoCard = Math.floor(Math.random() * 13 + 1);
            if(oneCard > twoCard) {
                playerOne++; 
            } else if(twoCard > oneCard ) {
                playerTwo ++;
            } else {
                ties++;
            }
            
            
            // if (oneCard == 1,11,12,13) {
            //     card1 = cardimg[oneCard-1];
            // } 
            
            // if (twoCard == 1,11,12,13) {
            //     card2 = cardimg[twoCard-1];
            // }
            document.getElementById("game" + count).innerHTML = "<tr><td colspan '2'>&nbsp;</td></tr> <tr><td colspan = '2'><h4>Deal Number: " + count + "</h4></td></tr><tr><td><img src='"+ card1 +"' alt=''></td><tr><td>" + name1 + "'s card: " + cardimg[oneCard-1] + " of " + suits[Math.floor(Math.random() * 3)] + " -- Score : " + playerOne + "</td><tr><td><img src='"+ card2 +"' alt=''></td><tr><td>" + name2 + "'s card: " + cardimg[twoCard-1] + " of " + suits[Math.floor(Math.random() * 3)] + " -- Score : " + playerTwo + "</td><tr><td>Number of Ties: " + ties + "</td>";
            
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