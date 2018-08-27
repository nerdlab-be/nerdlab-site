<?php
/**
 * Craft web bootstrap file
 */

// Multisite
define('CRAFT_SITE','stoom');

// Set path constants
define('CRAFT_VENDOR_PATH', '/vendor');
$root = dirname('../../craft/vendor');
define('CRAFT_BASE_PATH', dirname('../../craft/vendor'));

// Load Composer's autoloader
require_once $root.'/vendor/autoload.php';

// Load dotenv?
if (file_exists($root.'/.env')) {
  $dotenv = new Dotenv\Dotenv($root);
  $dotenv->load();
}

// Load and run Craft
$app = require $root.'/vendor/craftcms/cms/bootstrap/web.php';
$app->run();
