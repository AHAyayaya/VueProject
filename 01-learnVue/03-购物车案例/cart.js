const app = new Vue({
  el: '#app',
  data: {
    books: [{
        id: 1,
        name: '算法导论',
        data: '2020-5-18',
        price: 85.00,
        count: 1
      },
      {
        id: 2,
        name: 'UNIX编程艺术',
        data: '2020-5-08',
        price: 89.00,
        count: 1
      },
      {
        id: 3,
        name: '编程珠玑',
        data: '2020-5-17',
        price: 105.00,
        count: 1
      },
      {
        id: 4,
        name: '现代操作系统',
        data: '2020-5-13',
        price: 95.00,
        count: 1
      }
    ]
  },
  methods: {
    // getAllPrice(price) {
    //   return '¥' + price.toFixed(2)
    // }
    increment(index){
      this.books[index].count++
    },
    decrement(index){
      this.books[index].count--
    },
    remove(index){
      this.books.splice(index,1)
    }
  },
  filters:{
    showPrice(price){
      return '¥' + price.toFixed(2)
    }
  },
  computed: {
    totalPrice(){
      let totalPrice = 0
      for(let i = 0; i < this.books.length; i++){
        totalPrice += this.books[i].price * this.books[i].count
      }
      return totalPrice
    }
  },
})