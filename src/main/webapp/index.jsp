<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
  <title>ahg00048 - DAW - Example 1</title>
  <link rel="stylesheet" href="resources/css/mainStyle.css">
  <link rel="stylesheet" href="resources/css/contextMenu.css">
</head>
<body>
<div id="contextMenu">
  <ul>
    <li>
      <label for="current_color_header">header color</label>
      <input type="color" id="current_color_header">
    </li>
    <li>
      <label for="current_color_main">main color</label>
      <input type="color" id="current_color_main">
    </li>
    <li>
      <label for="current_color_footer">footer color</label>
      <input type="color" id="current_color_footer">
    </li>
  </ul>
</div>

<header id="header">
</header>

<main id="main">
</main>

<footer id="footer">
</footer>

</body>
<script src="resources/js/contextMenu.js"></script>
</html>