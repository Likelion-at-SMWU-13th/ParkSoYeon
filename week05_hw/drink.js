const drinks = ["콜라", "제로 콜라", "바나나 우유", "하늘보리", "포카리 스웨트"];

const drinksPrice = {
    "콜라" : 2000,
    "제로 콜라" : 2500,
    "바나나 우유" : 1500,
    "하늘보리" : 1000,
    "포카리 스웨트" : 1800,
}

function getRandom(arr){
    return arr[Math.floor(Math.random() * arr.length)];
}

function getResult(i, select, price, money){

    console.log(`${i}회: ${select} 가 나왔어요! (가격: ${price} 원)`);
    
    if(money >= price){
        money -= price;
        console.log(`지갑에 남은 돈: ${money} 원`);
    }
    else{
        console.log(`돈이 부족해요! 음료를 살 수 없어요!`);
    }

    console.log("=====================================================");
    return money;
}

function buyDrink(){
    let money = 3000;
    console.log("안녕하세요! 랜덤 자판기입니다!");
    console.log(`자판기에 투입한 금액: ${money}원`);
    console.log("=====================================================");


    for(let i = 1; i <= 3; i++){
        const select = getRandom(drinks);
        const price = drinksPrice[select];

        money = getResult(i, select, price, money); // 남은 금액 리턴 받기
            
    }
    }

// 호출
buyDrink();
