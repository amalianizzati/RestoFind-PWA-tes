import UrlParser from '../../routes/url-parser';
import {
  createRestoDetailTemplate,
  createRestoReviewTemplate,
} from '../templates/template-creator';
import RestaurantSource from '../../data/source';

import '../../component/resto-detail';

const Detail = {
  async render() {
    return `
      <div id= "resto" class= "resto"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parserActiveUrlWithoutCombiner();
    const resto = await RestaurantSource.detailResto(url.id);
    const restoContainer = document.querySelector('#resto-detail');
    restoContainer.innerHTML = createRestoDetailTemplate(resto);

    // restoContainer.innerHTML += `
    //   <resto-review></resto-review>
    // `;

    // const restoReview = document.querySelector('#resto-review');
    // detail.customerReviews.forEach((review) => {
    //   restoReview.innerHTML += createRestoReviewTemplate(review);
    // });
  },
};
export default Detail;
