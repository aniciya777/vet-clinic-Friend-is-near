<template>
  <div class="row">
    <div class="col">
      <h1>
        {{ title }}
      </h1>
      <p>
        Клиника «Друг рядом» ведёт свою историю с 1965 года. Здоровье ваших питомцев в надежных руках!
      </p>
      <div class="row">
        <div class="col-4 align-self-end">
          <div class="rating-component review-component">
            <div class="rating-component__rating">
              {{ rating }}
            </div>
            <div class="rating-component__count-reviews">
              {{ countReviews }}
            </div>
          </div>
        </div>
        <div class="col-8">
          <div class="review-component">
            <div class="row review-component__review-text">
              <div class="col-lg-10 offset-lg-2 col-sm-12 offset-sm-0">
                {{ review.text }}
              </div>
            </div>
            <div class="row align-items-center">
              <div class="col-lg-2 col-sm-3">
                <div class="review-component__review-avatar">
                  <img :src="review.avatar" :alt="review.fullname">
                </div>
              </div>
              <div class="col-lg-10 col-sm-9">
                {{ review.fullname }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col text-center">
      <img src="@/assets/big_logo.png">
    </div>
  </div>
  <br>
  <div class="row text-center">
    <p>
      Проконсультироваться с ведущим ветеринаром клиники можно по телефону
    </p>
    <p>
      {{ phonenumber }}
    </p>
  </div>
</template>

<script>
import {app} from "@/_config";
import {getCountReviewsHuman, getRating, getRandomReview} from "@/data/reviews";

export default {
  name: "PageMain",
  data () {
    return {
      title: "Ветклиника и ветаптека\n«Друг рядом»",
      phonenumber: app.phones[0].phone_number,
      countReviews: getCountReviewsHuman() + ' отзывов',
      rating: getRating(),
      review: getRandomReview(),
    };
  },
  created() {
    this.fetchData();
    this.timer = setInterval(this.fetchData, 5000);
  },
  methods: {
    async fetchData() {
      this.review = getRandomReview();
    },
    cancelAutoUpdate() {
      clearInterval(this.timer);
    },
  },
  beforeUnmount() {
    this.cancelAutoUpdate();
  },
}
</script>

<style scoped lang="scss">
  .review-component {
    background: rgba(255, 255, 255, 0.46);
    border-radius: 30px;
    padding: 10px;
    font-size: 23px;
  }

  .rating-component {
    padding: 5px;
    text-align: center;
  }

  .rating-component__rating {
    font-size: 56px;
  }

  .rating-component__count-reviews {
    font-size: 20px;
  }

  .review-component__review-text {
    margin-bottom: 24px;
  }

  .review-component__review-avatar {
    border: 1px solid #000000;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    overflow: hidden;
  }
</style>