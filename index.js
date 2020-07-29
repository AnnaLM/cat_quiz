//array representing different cats for adoption, manually evaluated based on their online bios
let cats = [[3,3,2,2,3,2,0,0,2],[3,3,2,2,3,2,3,0,0],[2,3,2,1,2,1,3,1,0],[2,2,2,0,2,1,3,0,0],[2,3,2,2,2,2,1,0,0],[2,2,2,1,2,1,3,0,0],[3,3,3,2,3,2,2,0,0],[1,1,1,2,1,1,2,2,0]];
//old colours:
//background: rgb(246, 246, 255)
//box: rgb(155, 153, 252)
//button: rgb(8, 73, 82)
//main function called when "find me a cat" button is clicked
function returnVal(){
    let answers = [];
    //collect answers from form
    for (i = 0; i < 9; i ++){
        answers += document.getElementById("catQuiz").elements[i].value;
    }
    results = findMax(answers);
    //display elements after match is found 
    document.getElementById("catQuiz").style.display='none';
    document.getElementById("title").style.display='none';
    document.getElementById("subhead").style.display='none';
    document.getElementById("go").style.display='none';
    document.getElementById("congrats").innerHTML = "Congratulations!";
    document.getElementById("matchHead").innerHTML = "You have been matched with:";
    document.getElementById("matchCat").innerHTML = results[0];
    document.getElementById("catPic").src = results[1];
    document.getElementById("catPic").alt = "photo of cat chosen";
    document.getElementById("toCat").style.display='block';    
    document.getElementById("toCat").href = results[2];
}
//find which cat in the array is the best match, and return the name, photo, and link to the cat
function findMax(ans){
    let maxCat = 0;
    let maxVal = 0;
    let catName = "";
    let imagePath = "";
    let catLink = "";
    for (j = 0; j<=(cats.length - 1); j++){
        let thisCat = matchCat(cats[j], ans);
        if (thisCat>maxVal){
            maxCat = j;
            maxVal = thisCat;
        }
    }
    switch (maxCat){
        case 0:
            catName = "Love";
            imagePath = "/images/love.jpg";
            catLink = "https://www.torontohumanesociety.com/adopt-a-pet/cats/40653765";
            break;
        case 1:
            catName = "Buddy";
            imagePath = "/images/buddy.jpg";
            catLink = "https://www.torontohumanesociety.com/adopt-a-pet/cats/42296131";
            break;
        case 2:
            catName = "Misty";
            imagePath = "/images/misty.jpg";
            catLink = "https://ws.petango.com/webservices/adoptablesearch/wsAdoptableAnimalDetails.aspx?id=39314301&css=https://annexcatrescue.ca/wp-content/themes/annexcatrescue/catstyle.css";
            break;
        case 3:
            catName = "Sweetie";
            imagePath = "/images/sweetie.jpg";
            catLink = "https://ws.petango.com/webservices/adoptablesearch/wsAdoptableAnimalDetails.aspx?id=40315480&css=https://annexcatrescue.ca/wp-content/themes/annexcatrescue/catstyle.css";
            break;
        case 4:
            catName = "Chuck";
            imagePath = "/images/chuck.jpg";
            catLink = "https://ws.petango.com/webservices/adoptablesearch/wsAdoptableAnimalDetails.aspx?id=43998451&css=https://annexcatrescue.ca/wp-content/themes/annexcatrescue/catstyle.css";
            break;
        case 5:
            catName = "Bridget";            
            imagePath = "/images/bridget.jpg";
            catLink = "https://ws.petango.com/webservices/adoptablesearch/wsAdoptableAnimalDetails.aspx?id=44403726&css=https://annexcatrescue.ca/wp-content/themes/annexcatrescue/catstyle.css";
            break;
        case 6:
            catName = "Peachy";
            imagePath = "/images/peachy.jpg";
            catLink = "https://www.torontohumanesociety.com/adopt-a-pet/cats/41266030";
        case 7:
            catName = "Harrison";
            imagePath = "/images/harrison.jpg";
            catLink = "https://ws.petango.com/webservices/adoptablesearch/wsAdoptableAnimalDetails.aspx?id=45176738&css=https://annexcatrescue.ca/wp-content/themes/annexcatrescue/catstyle.css";
        default:
            break;
    }
    return [catName,imagePath,catLink];
}
//calculate the match between a cat and the form response
function matchCat(cat, answers){
    let matchScore = [];
    denom = 8;
    for (i = 0; i <= cat.length - 1; i++){
        if (cat[i]==0||answers[i]==0){
            denom --;
        }
        if (cat[i]==answers[i]){
            matchScore++;
        }
    }
    return matchScore/denom;
}
