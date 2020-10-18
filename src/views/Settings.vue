<template>
  <div class="settings">
    <h1>Выберите метрики, которые следует использовать в презентации: </h1>
    <form @submit.prevent>
      <div
        v-for="(item, index) in data"
        :key="index"
      >
        <input type="checkbox" :name="item.name" />
        <label :for="item.name">
          {{ item.title }}
        </label>
      </div>
      <button type="submit">
        Обновить презентацию
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Settings',
  data() {
    return {
      currentSlide: 0,
      // data format is array of objects with properties: id and content
      data: [
        {
          id: 0,
          title: 'Человеко-дней в отпуске',
        },
        {
          id: 1,
          title: 'Cамый общительный человек и канал',
        },
        {
          id: 2,
          title: 'Kто использует here и channel',
        },
        {
          id: 3,
          title: 'Самое популярное имя в компании',
        },
        {
          id: 4,
          title: 'Возраст офисов и распределение по офисам',
        },
        {
          id: 5,
          title: 'Соотношение по отделам',
        },
        {
          id: 6,
          title: 'Погода в Нижневартовске',
        },
      ],
    };
  },
  methods: {
    dislikeSlide() {
      console.log('dislike');
    },
  },
};
</script>
