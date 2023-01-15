export const validatorConfig = {
  name: {
    isRequired: {
      message: 'Поле \'Имя\' обязательно для заполнения',
    },
  },
  surname: {
    isRequired: {
      message: 'Поле \'Фамилия\' обязательно для заполнения',
    },
  },
  yearOfBirth: {
    isRequired: {
      message: 'Поле \'Год рождения\' обязательно для заполнения',
    },
    isInRange: {
      message: 'Год введён некорректно',
      // Для примера, допускаю, что возраст человека должен быть в пределах от 0 до 100 лет
      min: new Date().getFullYear() - 100,
      max: new Date().getFullYear(),
    },
  },
  portfolioUrl: {
    isRequired: {
      message: 'Поле \'Портфолио\' обязательно для заполнения',
    },
    isUrl: {
      message: 'Введите корректный url-адрес!',
    },
  },
}
