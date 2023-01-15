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
  yearBirth: {
    isRequired: {
      message: 'Поле \'Год рождения\' обязательно для заполнения',
    },
    isInRange: {
      message: 'Год введён некорректно',
      min: new Date().getFullYear() - 120,
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
