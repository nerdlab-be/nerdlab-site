<?php
/**
 * Craft web bootstrap file
 */

// Set path constants
define('CRAFT_BASE_PATH', dirname(__DIR__));
define('CRAFT_VENDOR_PATH', '/vendor');
$root = dirname(__DIR__);

// Load Composer's autoloader
require_once $root.'/vendor/autoload.php';

// Load dotenv?
if (file_exists($root.'/.env')) {
  $dotenv = new Dotenv\Dotenv($root);
  $dotenv->load();
}

// Load and run Craft
// define('CRAFT_ENVIRONMENT', getenv('ENVIRONMENT') ?: 'production');
$app = require $root.'/vendor/craftcms/cms/bootstrap/web.php';
$app->run();
