<?php

use craft\helpers\App;

return [
    'useDevServer' => (bool) App::env('USE_VITE_DEV_SERVER'),
    'manifestPath' => Craft::getAlias('@webroot') . '/dist/.vite/manifest.json',
    'devServerPublic' => Craft::getAlias('@web') . ':5173',
    'serverPublic' => Craft::getAlias('@web') . '/dist/',
    'errorEntry' => 'src/js/main.js',
    'cacheKeySuffix' => '',
    'devServerInternal' => '',
    'checkDevServer' => false,
    'includeReactRefreshShim' => false,
    'includeModulePreloadShim' => true,
    'criticalPath' => '@webroot/dist/criticalcss',
    'criticalSuffix' => '_critical.min.css',
];
