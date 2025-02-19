<?php
/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 *
 * @see \craft\config\GeneralConfig
 */

use craft\config\GeneralConfig;
use craft\helpers\App;

return GeneralConfig::create()
    // Set the default week start day for date pickers (0 = Sunday, 1 = Monday, etc.)
    ->defaultWeekStartDay(1)
    // Prevent generated URLs from including "index.php"
    ->omitScriptNameInUrls()
    // Preload Single entries as Twig variables
    ->preloadSingles()
    // Prevent user enumeration attacks
    ->preventUserEnumeration()

    ->securityKey(App::env('SECURITY_KEY'))

    // Set the @webroot alias so the clear-caches command knows where to find CP resources
    ->aliases([
        '@web' => App::env('PRIMARY_SITE_URL'),
        '@webroot' => dirname(__DIR__) . '/web',
        '@assetBasePath' => '@web/' . App::env('ASSET_PUBLIC_PATH'),
        '@assetBasePath' => '@webroot/' . App::env('ASSET_BASE_PATH'),
        '@assetBaseUrlImages' => '@web/data/images/',
        '@assetBasePathImages' => '@webroot/data/images/',
        '@assetBaseUrlVideo' => '@web/data/Video/',
        '@assetBasePathVideo' => '@webroot/data/Video/',
        '@mapsApiKey' => App::env('MAPS_API_KEY'),
    ])

    ->allowAdminChanges(App::env('CRAFT_ALLOW_ADMIN_CHANGES'))

    ->devMode(App::env('CRAFT_DEV_MODE'))

    ->disallowRobots(App::env('CRAFT_DISALLOW_ROBOTS'))
;
