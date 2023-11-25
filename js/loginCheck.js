function authenticate() {
  // Получаем значения логина и пароля из формы
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Получаем содержимое файла https://d.zaix.ru/DnWu.txt
  fetch('https://d.zaix.ru/Do2k.txt')
      .then(response => response.text())
      .then(data => {
          // Разбиваем содержимое файла на строки
          var lines = data.split('\n');

          // Получаем логин и пароль из одной строки, разделенной пробелом
          var credentials = lines[0].trim().split(' ');
          var correctUsername = credentials[0].trim();
          var correctPassword = credentials[1].trim();

          // Проверяем соответствие введенных данных данным из файла
          if (username === correctUsername && password === correctPassword) {
              alert('Авторизация успешна!');
              // Здесь можно выполнить дополнительные действия после успешной авторизации
          } else {
              alert('Неверный логин или пароль. Попробуйте еще раз.');
          }
      })
      .catch(error => {
          console.error('Ошибка при получении файла: ', error);
          alert('Произошла ошибка. Пожалуйста, попробуйте позже.');
      });
}