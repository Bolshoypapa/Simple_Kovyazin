document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Получаем значения логина и пароля из формы
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Загружаем содержимое файла vhod.txt с GitHub
  fetch('https://github.com/Bolshoypapa/Simple_Kovyazin/blob/main/vhod.txt')
      .then(response => response.text())
      .then(data => {
          // Разбиваем содержимое файла на строки
          var lines = data.split('\n');

          // Проверяем, совпадает ли введенный логин и пароль с содержимым файла
          if (username === lines[0].trim() && password === lines[1].trim()) {
              alert("Вы авторизовались");
              // Здесь можно добавить код для перенаправления на защищенную страницу
          } else {
              alert("Вы не авторизовались");
          }
      })
      .catch(error => {
          console.error('Error fetching vhod.txt:', error);
      });
});