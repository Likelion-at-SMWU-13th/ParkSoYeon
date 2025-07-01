const day = document.getElementById("date");
const keyword = document.getElementById("singer");
const searchButton = document.getElementById("search");


const showDate = setInterval(() => {
    const date = new Date();

    const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
    const formattedTime = `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}:${String(date.getSeconds()).padStart(2, "0")}`;

    day.innerHTML = `${formattedDate} ${formattedTime}`;

}, 1000);



async function fetchUser(){

    try{
        const response = await fetch(`https://api.manana.kr/karaoke/singer/${keyword.value}.json`);
        const data = await response.json();
        const container = document.getElementById("musicContainer");

        container.innerHTML = ""; // 기존 검색 결과 지우기

        const playList = data.filter((item) => {
            return item.singer.includes(keyword.value);
        })

        playList.forEach(item => {
            const card = document.createElement("div");
            card.className = "card";

            card.innerHTML = `
                <div class = "music-body">
                <h3 class="music-title">${item.title}</h3>
                <p class="music-singer">${item.singer}</p>
                <div id = "info1">
                    <p class="info"><span class="label">번호</span><span class="value">${item.no}</span></p>
                    <p class="info"><span class="label">작곡</span><span class="value">${item.composer}</span></p>
                </div>
                <div id = "info2">
                    <p class="info"><span class="label">작사</span><span class="value">${item.lyricist}</span></p>
                    <p class="info"><span class="label">발매일</span><span class="value">${item.release}</span></p>
                </div>
            </div>
            `;

            container.appendChild(card);

        })
    }
    catch(error){
        console.error("에러 발생: ", error);
    }

}

function clickSinger(event){
    keyword.style.backgroundColor = "aliceblue"; // 가수 입력창 클릭하면 색상 바뀌게
}

function clickSearch(event){
    fetchUser();
}

keyword.addEventListener("click", clickSinger);
searchButton.addEventListener("click", clickSearch);


