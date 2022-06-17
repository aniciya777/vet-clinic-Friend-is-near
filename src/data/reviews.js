import toHumanString from "human-readable-numbers";
import {truncateString} from "./utils";

const defaultAvatarURL = "./assets/svg/user-profile-default.svg";
const maxReviewTextLength = 64;
const maxFullnameLength = 64;


const reviews = [
  {
    id: 1,
    text: "Очень конпетентные врачи и удобный магазин с доставкой до дома!",
    sname: "Фамилия1",
    name: "Имя1",
    avatar: null,
    rating: 4.9,
  },
  {
    id: 2,
    text: "Отличные врачи и приемлимые цены",
    sname: "Фамилия2",
    name: "Имя2",
    avatar: null,
    rating: 5,
  },
  {
    id: 3,
    text: "Всё супер",
    sname: "Фамилия3",
    name: "Имя3",
    avatar: null,
    rating: 4.8,
  },
];

export function getCountReviews() {
  return reviews.length;
}

export function getCountReviewsHuman() {
  var n = getCountReviews();
  if (n > 10) {
    n = Math.floor(n / 10) * 10;
    return toHumanString(n) + '+';
  } else {
    return n.toString();
  }
}

export function getRating() {
  var n = getCountReviews();
  if (n === 0) {
    return NaN;
  }
  var rating = reviews.reduce((a, c) => a + c.rating, 0) / getCountReviews();
  return (Math.round((rating + Number.EPSILON) * 10) / 10).toFixed(1);
}

export function getRandomReview(old_review = null) {
  const n = getCountReviews();
  if (n === 0) {
    return {
      text: "",
      sname: "",
      name: "",
      avatar: "",
      rating: NaN,
    };
  }
  const old_id = (old_review === null) ? null : old_review.id;
  let result = {};
  // Генерация нового отзыва, чтобы он не совпадал с предыдущим
  do {
    Object.assign(result, reviews[Math.floor(Math.random() * n)]);
  } while (n > 1 && result.id === old_id);
  result.fullname = truncateString(result.sname + ' ' + result.name, maxFullnameLength);
  result.text = truncateString(result.text, maxReviewTextLength)
  if (result.avatar === null) {
    result.avatar = defaultAvatarURL;
  }
  return result;
}
