function authenticate() {
  // Получаем значения логина и пароля из формы
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Получаем содержимое файла vhod.txt из GitHub
  fetch('https://github.com/Bolshoypapa/Simple_Kovyazin/blob/main/vhod.txt')
      .then(response => response.text())
      .then(data => {
          // Разбиваем содержимое файла на строки
          var lines = data.split('\n');

          // Получаем логин и пароль из файла
          var correctUsername = lines[1].trim();
          var correctPassword = lines[2].trim();

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