
let cats = [[3,3,2,2,3,2,0,0,2],[3,1,1,2,3,2,2,0,0],[3,3,2,2,3,2,3,0,0],[2,3,2,1,2,1,3,1,0],[2,2,2,0,2,1,3,0,0],[2,3,2,2,2,2,1,0,0],[2,2,2,1,2,1,3,0,0],[2,3,2,2,2,1,2,0,0]];

function returnVal(){
    let answers = [];
    for (i = 0; i < 9; i ++){
        answers += document.getElementById("catQuiz").elements[i].value;
    }
    match = findMax(answers);
    document.getElementById("catQuiz").style.display='none';
    document.getElementById("title").style.display='none';
    document.getElementById("subhead").style.display='none';
    document.getElementById("go").style.display='none';
    document.getElementById("secondResult").innerHTML = match;
}

function findMax(ans){
    let maxCat = 0;
    let maxVal = 0;
    let catName = "";
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
            break;
        case 1:
            catName = "Ghost Pepper";
            break;
        case 2:
            catName = "Buddy";
            break;
        case 3:
            catName = "Misty";
            break;
        case 4:
            catName = "Sweetie";
            break;
        case 5:
            catName = "Chucky";
            break;
        case 6:
            catName = "Bridget";
            break;
        case 7:
            catName = "Felix";
            break;
        default:
            catName = "unavailable";
            break;
    }
    return catName;
}

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
/*
top: 50%;   
    left: 50%;         
    -ms-transform: translate(-50%, 50%);
    transform: translate(-50%, -50%);
    */