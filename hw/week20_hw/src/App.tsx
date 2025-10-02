import "./App.css";

interface Pet {
  name: string;
  age: number;
  species: string;
}

interface Owner {
  ownerName: string;
  contact: string;
}

interface PetProfile extends Pet, Owner {
  favoriteSnack: string;
  personality: "활발함" | "소심함" | "차분함";
  likesPeople: boolean;
}

const myPet: PetProfile = {
  name: "코코",
  age: 13,
  species: "말티즈",
  ownerName: "박소연",
  contact: "010-8905-5797",
  favoriteSnack: "고구마",
  personality: "소심함",
  likesPeople: true,
};

function introduceMyPet(pet: PetProfile): void {
  console.log("🐾 코코를 소개합니다 🐾");
  console.log(`이름: ${pet.name}`);
  console.log(`나이: ${pet.age}살`);
  console.log(`종: ${pet.species}`);
  console.log(`좋아하는 간식: ${pet.favoriteSnack}`);
  console.log(`성격: ${pet.personality}`);
  console.log(
    `사람을 좋아하나요? ${
      pet.likesPeople
        ? "네, 강아지보다 사람을 더 좋아해요!"
        : "아니요, 낯가려요."
    }`
  );
  console.log("🚨비상 연락망🚨");
  console.log(`주인 이름: ${pet.ownerName}`);
  console.log(`연락처: ${pet.contact}`);
}

introduceMyPet(myPet);
function App() {
  return <></>;
}

export default App;
