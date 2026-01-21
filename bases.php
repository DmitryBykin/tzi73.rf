<!DOCTYPE html>
<html lang="ru">
<head>
 <meta charset='utf-8'>
 <title>Dr. Web</title>
 <meta name="description" content="Обновление антивирусных баз Dr. Web">
 <meta name="keywords" content="">
 <meta name="viewport" content="width=device-width">
 <link rel='stylesheet' href='css/normalize.css'>
 <link rel='stylesheet' href='css/style.min.css'>
 <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
 <link rel="icon" href="favicon.ico" type="image/x-icon">
 <link rel="canonical" href="www.tzi73.ru"/>
 <!--[if lt IE 9]>
 <script src='js/html5shiv.js'></script>
 <![endif]-->
</head>
<body>
 

    <svg style="display: none;">
      <symbol id="download--bases" viewBox="41.4 105.7 395.7 298.6">
        <g>
        	<polygon points="325.7,227.1 255.7,227.1 255.7,105.7 221.4,105.7 221.4,227.1 157.1,227.1 238.6,314.3 	"/>
        	<path d="M392.9,314.3v17.1c0,17.1-12.9,30-30,30H114.3c-17.1,0-30-12.9-30-30v-17.1H41.4v17.1
        		c0,40,32.9,72.9,72.9,72.9h250c40,0,72.9-32.9,72.9-72.9v-17.1H392.9z"/>
        </g>
      </symbol>
    </svg>

  <main>
    <h2 class="bases__title">Обновление антивирусных баз Dr. Web</h2>
    <table class="bases__table">
      <thead>
        <tr>
          <th class="bases__table-title">
            Версия Dr.Web
          </th>
          <th class="bases__table-title">
            Дата обновления
          </th>
          <th class="bases__table-title">
            Файл
          </th>
        </tr>
      </thead>

      <tbody>
        <!-- <tr class="bases__table-row">
          <td class="bases__table-item">
            6.0
          </td>
          <td class="bases__table-item">
            04.10.2018
          </td>
          <td class="bases__table-item">
            <a class="bases__table-item--link" href="data/Bases6.rar">
              <svg>
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#download--bases">
                </use>
              </svg>
              <span class="bases__table-link-text">Bases.rar (220 Мб)</span>
            </a>
          </td>
        </tr> -->
        <tr class="bases__table-row">
          <td class="bases__table-item">
            10.0/11.X/12.X (Windows)
          </td>
          <td class="bases__table-item" id="date">
           <?php echo date("d.m.Y", filemtime("data/Bases10.zip")); ?> 
          </td>
          <td class="bases__table-item">
            <a class="bases__table-item--link" href="data/Bases10.zip">
              <svg>
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#download--bases">
                </use>
              </svg>
              <span class="bases__table-link-text">Bases10.zip (<?php echo round(filesize("data/Bases10.zip")/1024/1024,0)?> Мб)</span>
            </a>
          </td>
        </tr>

        <tr class="bases__table-row">
          <td class="bases__table-item">
            11.1 (Astra Linux) (замена /var/opt/drweb.com/bases)
          </td>
          <td class="bases__table-item">
            <?php echo date("d.m.Y", filemtime("data/bases.tar.gz")); ?>
          </td>
          <td class="bases__table-item">
            <a class="bases__table-item--link" href="data/bases.tar.gz">
              <svg>
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#download--bases">
                </use>
              </svg>
              <span class="bases__table-link-text">bases.tar.gz (<?php echo round(filesize("data/bases.tar.gz")/1024/1024,0)?> Мб)</span>
            </a>
          </td>
        </tr>

        <tr class="bases__table-row">
          <td class="bases__table-item">
            11.1 (Astra Linux) (drweb-ctl update --From)
          </td>
          <td class="bases__table-item">
            <?php echo date("d.m.Y", filemtime("data/update.tar.gz")); ?>
          </td>
          <td class="bases__table-item">
            <a class="bases__table-item--link" href="data/update.tar.gz">
              <svg>
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#download--bases">
                </use>
              </svg>
              <span class="bases__table-link-text">update.tar.gz (<?php echo round(filesize("data/update.tar.gz")/1024/1024,0)?> Мб)</span>
            </a>
          </td>
        </tr>
      </tbody>

    </table>
  </main>

</body>
</html>
