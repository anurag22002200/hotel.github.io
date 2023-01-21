// function for enabling/disabling user profile & bed 

function choose_profile() {
    let book_for = document.getElementById("book_for_").value;

    let single_room = document.getElementById("single_room");
    let double_room = document.getElementById("double_room");
    let triple_room = document.getElementById("triple_room");

    let msg = document.querySelector(".message");



    if (book_for == "human") {
        msg.textContent = "Humans are welcome";
        triple_room.disabled = true;


    }
    else if (book_for == "monster")
        {
            msg.textContent = "Monsters are welcome";
            single_room.disabled = true;
        }
}

//  profile choosing function ends 

// booking confirmation email sending  js  (starts)


function sendmail(){
    
    let user= document.getElementById("user_name").value;
    let email= document.getElementById("user_email").value;
    let arrival= document.getElementById("user_arrival").value;
    let rooms= document.getElementById("no._rooms").value;
    let people= document.getElementById("no._people").value;
    let room_type= document.getElementById("room_type").value + " bed";
    let msg = "Congratulations !!! Your room has been sucessfully booked.This is the confirmation message regarding your booking. Here are the details that you have entered<hr>"



     let body = msg+'<br>Name: ' + user +"<br>Email: " +email+ "<br>Arrival Date: "+arrival +"<br>No. Of Rooms: " + rooms+"<br>No. Of People: " + people+"<br>Room Type: " + room_type  ;


    Email.send({
        SecureToken:"3e2ac407-b09f-46c8-a1f2-e79da3f7540c",
        To : email,
        From: "anupeshforcloud@gmail.com",
        Subject: "Hotel Booking Status",
        Body:body,
    }).then(
        message =>{
            //console.log (message);
            if(message=='OK'){
            alert('Your room has been booked successfully, check your e-mail for confirmation.');
            }
            else{
                console.error (message);
                alert('There is error at sending e-mail. ')
                
            }
        }
    );
}

// email sending js (ends) 
