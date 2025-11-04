const date = new Date();

console.log(`${date.getFullYear()}년 ${date.getMonth()+1}월 ${date.getDate()}일 `);
console.log(`${date.getHours()}시 ${date.getMinutes()}분 ${date.getSeconds()}초 `);

const formattedDate = `${date.getFullYear()}-${String(date.getMonth()).padStart(2, "0")}-${String(date.getDate).padStart(2, "0")}`;
const formattedHours = `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}: ${String(date.getSeconds()).padStart(2, "0")}`
