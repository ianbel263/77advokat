<?php
require_once('config.php');
require_once('func.php');

// $is_auth = rand(0, 1);
// $user_name = 'Андрей Беляев';

// $link = mysqli_connect($DB_HOST, $DB_USER, $DB_PASSWORD, $DB_NAME);
// mysqli_set_charset($link, 'utf8');

// $today = date('Y-m-d');

// if (!$link) {
//     $error = mysqli_connect_error();
//     $content = include_template('error.php', ['error' => $error]);
// } else {
//     $sql_category = 'SELECT code, category_name FROM category';
//     $result_category = mysqli_query($link, $sql_category);

//     $sql_lot = 'SELECT l.lot_name, l.lot_price, l.img_url, l.date_exp, c.category_name
//                 FROM lot l
//                 JOIN category c
//                 ON l.category_id = c.id
//                 WHERE l.date_exp >= ?';
//     $stmt = mysqli_prepare($link, $sql_lot);
//     mysqli_stmt_bind_param($stmt, 's', $today);
//     mysqli_stmt_execute($stmt);
//     $result_lots = mysqli_stmt_get_result($stmt);

//     $lots_categories = mysqli_fetch_all($result_category, MYSQLI_ASSOC);
//     $lots = mysqli_fetch_all($result_lots, MYSQLI_ASSOC);

//     $main_content = include_template('main.php', [
//         'lots_categories' => $lots_categories,
//         'lots' => $lots]);
// }

$layout_content = include_template('layout.php', [
    'title' => $config['sitename'],
    ]);

print($layout_content);
