// вы можете как угодно изменять программу и код
// добавлять любые переменные и модели
// ваша задача реализовать так, как показано на видео, чтобы оно работало

const App = {
  data() {
    return {
      activeIndex: 0, // то, что позволяет определить текущий активный шаг
      steps: [
        {title: 'Основы', text: '1 В блоке вы познакомитесь со всеми основами Vue.js на практике. На протяжении блока мы напишем реактивное приложение, в процессе разработки которого разберем вся базу фреймворка.'},
        {title: 'Компоненты', text: ' 2 Один из самых важных блоков в курсе, где вы узнаете все о компонентах. В блоке мы напишем 2 разных приложения и создадим более 5 различных UI компонентов как в реальной разработке. Блок расскажет про абсолютно все составляющие, которые есть в компонентах: взаимодействие, slots, асинхронные и динамические компоненты и тонна примеров.'},
        {title: 'Роутер', text: '3 В данном блоке вы узнаете все о том, как работает мультиязычность во Vue. Мы создадим миниклон Gmail в данном блоке, где вы на практике увидите как работать с динамическим роутером.'},
        {title: 'Vuex', text: '4 В блоке вы узнаете абсолютно все про Vuex. Вы узнаете как работать с данными, какие есть лучшие практики по их программированию и структурированию. Все на практике.'},
        {title: 'Composition', text: '5 Одним из наиболее важных обновлений в Vue 3 является появление альтернативного синтаксиса Composition API. В этом блоке вы узнаете все, чтобы полностью пользоваться данными синтаксисом на практических примерах. Помимо этого вы узнаете как работать совместно с Vue Router и Vuex.'},
      ],
      isFinish: false,
    }
  },
  methods: {
    prev() {
      // когда нажимаем кнопку назад
      if(this.activeIndex === 0) {
        this.activeIndex = 0
      } else {
        this.activeIndex--
      }
    },

    reset() {
      // начать заново
      this.activeIndex = 0
      this.isFinish = false
    },

    nextOfFinish() {
      // кнопка вперед или закончить
      if(this.activeIndex === this.steps.length - 1) {
        this.isFinish = true;
      } else {
        this.activeIndex++
      }
    },

    setActive(idx) {
      // когда нажимаем на определенный шаг
      this.activeIndex = idx
    }
  },

  computed: {
    // тут стоит определить несколько свойств:
    // 1. текущий выбранный шаг
    // 2. выключена ли кнопка назад
    // 3. находимся ли мы на последнем шаге
    isActiveStep() {
      return this.steps[this.activeIndex]
    },
    checkPrevStep() {
      return this.activeIndex === 0
    },

    checkLastStep() {
      return this.activeIndex === this.steps.length - 1
    },

    isLastStep() {
      return this.activeIndex === this.steps.length - 1
    }
  }
}

Vue.createApp(App).mount('#app')
