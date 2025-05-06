const movies = [
    {title: "썬더볼츠", rating: 8.42, genre: "액션"},
    {title: "마인크래프트 무비비", rating: 7.32, genre: "코미디"},
    {title: "파과", rating: 8.25, genre: "액션"},
    {title: "거룩한 밤: 데몬 헌터스", rating: 6.92, genre: "액션"},
    {title: "야당", rating: 9.07, genre: "범죄"},
    {title: "해피엔드", rating: 8.44, genre: "드라마"},
];

const actionMovie = movies.filter((movie => {
    return movie.genre.includes("액");
}))

console.log("액이 포함된 영화 목록", actionMovie);