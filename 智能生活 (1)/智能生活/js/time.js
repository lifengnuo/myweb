    function displayDateTime() {
      var element = document.getElementById('datetime');
      var now = new Date();
      var year = now.getFullYear();
      var month = now.getMonth() + 1; // 月份是从 0 开始的，所以要加 1
      var day = now.getDate();
      var hours = now.getHours();
      var minutes = now.getMinutes();
      var seconds = now.getSeconds();
      var dateTimeString = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
      element.textContent = dateTimeString;
    }

    // 初始加载时显示日期和时间
    window.onload = function() {
      displayDateTime();
      // 每秒更新一次日期和时间
      setInterval(displayDateTime, 1000);
    };