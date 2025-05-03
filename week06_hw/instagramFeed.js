// DOM 요소 선택
const likePicture = document.getElementById("heart");
const count = document.getElementById("likeCount");
const more = document.getElementById("more");
const moreText = document.getElementById("moreText");

// 추가 기능
const share = document.getElementById("share");

let like = false;

function clickLike(event){
    
    if(!like){
        like = true;
        likePicture.src = "./images/fullHeart.svg"
        let currentNum = parseInt(count.textContent, 10);
        let clickNum = currentNum+1;
        count.textContent = clickNum;
    }
    else{
        like=false;
        likePicture.src = "./images/heart.svg"
        let currentNum = parseInt(count.textContent, 10);
        let clickNum = currentNum-1;
        count.textContent = clickNum;
    }

}

function clickMore(event){
    if(moreText.style.display === "none" || moreText.style.display === ""){
        moreText.style.display = "inline";
        more.textContent = "접기";
    }

    else{
        moreText.style.display = "none";
        more.textContent = "...더보기";
    }
}


likePicture.addEventListener("click", clickLike);
more.addEventListener("click", clickMore);



