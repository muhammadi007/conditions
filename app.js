
// conditions

let marks = prompt("plese enter your marks")

if(marks <= 100 && marks >= 90  ){
    alert("Grade A++")
}
    else if(marks >= 80 && marks <= 89 ){
        alert("Grade A+")
    }

    else if(marks >= 70 && marks <= 79 ){
        alert("Grade A")
    }
    else if(marks >= 60 && marks <= 69 ){
        alert("Grade B")
    }

    else if(marks >= 50 && marks <= 59 ){
        alert("Grade C")
    }

    else if(marks >= 40 && marks <= 49 ){
        alert("Grade D")
    }

    else if( marks >= 0 && marks <=  39 ){
        alert       ("fail")
    }

    else{
        alert("please enter valid number")
    }
