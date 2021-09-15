"use strict"

document.addEventListener("DOMContentLoaded", function() {
    let likes = document.querySelectorAll('#heart');
    likes.forEach((e) => {
        e.addEventListener('click', () => {
            e.classList.toggle('like');
        })
    });
});

const app = Vue.createApp({
    data: function() {
        return {
            cards: [
                { img: 'img/img1.svg', price: '189', descr: 'Oral-B ополаскиватель для полости рта Комплекс LASTING FRESHNESS Arctic Mint 250 мл', count: 1, showBtn: true, showCounter: false, discount: false },
                { img: 'img/img2.svg', price: '801', descr: ' Сменные насадки для электрических зубных щеток Oral-B Sensi Ultrathin для бережной чистки, 2 шт.', count: 1, showBtn: true, showCounter: false, discount: false },
                { img: 'img/img3.svg', price: '2 289', descr: 'Электрическая зубная щетка Philips Sonicare 2 Series Gum Health HX6232/20 с двумя насадками, черный', count: 1, showBtn: true, showCounter: false, discount: false },
                { img: 'img/img4.svg', price: '385', descr: 'Oral-B Зубная нить Essential Floss вощеная, мята, 2шт', count: 1, showBtn: true, showCounter: false, discount: true },
            ],
        }
    },
    methods: {
        hideBtn(index) {
            this.cards[index].count = 1;
            this.cards[index].showBtn = false;
            this.cards[index].showCounter = true;
        },
        plusGood(index) {
            this.cards[index].count += 1
        },
        minusGood(index) {
            if (this.cards[index].count == 1) {
                this.cards[index].showBtn = true;
                this.cards[index].showCounter = false;
            }
            this.cards[index].count -= 1
        }
    }
}).mount('#goodsCounter')