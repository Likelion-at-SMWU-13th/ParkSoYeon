// DOM 요소 선택
const heart = document.getElementById("heart");
const count = document.getElementById("likeCount");
const more = document.getElementById("more");
const moreText = document.getElementById("moreText");


function clickLike(event){
    
    heart.classList.toggle('liked'); // 하트에 liked 클래스가 없으면 추가되고, 있으면 제거됨.

    // 좋아요 개수를 정수로 변환
    let count = parseInt(likeCount.textContent, 10);
    
    // liked가 붙어 있다면, 좋아요 수 +1
    if (heart.classList.contains('liked')) {
        likeCount.textContent = count + 1;
    } 
    // liked 클래스가 제거 되었다면, 좋아요 수 -1
    else {
        likeCount.textContent = count - 1;
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


heart.addEventListener("click", clickLike);
more.addEventListener("click", clickMore);



