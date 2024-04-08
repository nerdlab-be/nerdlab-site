<?php
/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 *
 * @see \craft\config\GeneralConfig
 */

use craft\helpers\App;

return [
    '*' => [
        // Default Week Start Day (0 = Sunday, 1 = Monday...)
        'defaultWeekStartDay' => 1,

        // Whether generated URLs should omit "index.php"
        'omitScriptNameInUrls' => true,

        // The URI segment that tells Craft to load the control panel
        'cpTrigger' => App::env('CP_TRIGGER') ?: 'admin',

        // The secure key Craft will use for hashing and encrypting data
        'securityKey' => App::env('SECURITY_KEY'),

        // Whether Dev Mode should be enabled (see https://craftcms.com/guides/what-dev-mode-does)
        'devMode' => in_array(App::env('ENVIRONMENT'), ['dev', 'staging']),

        // Whether administrative changes should be allowed
        'allowAdminChanges' => in_array(App::env('ENVIRONMENT'), ['dev', 'staging']),

        // Whether crawlers should be allowed to index pages and following links
        'disallowRobots' => App::env('ENVIRONMENT') !== 'production',

        // Whether image transforms should be generated before page load.
        'generateTransformsBeforePageLoad' => true,

        // Aliases
        'aliases' => [
          '@web' => App::env('PRIMARY_SITE_URL'),
          '@webroot' => dirname(__DIR__, 2) . '/web',
          '@assetBaseUrl' => '@web/data/',
          '@assetBasePath' => '@webroot/data/',
          '@assetBaseUrlImages' => '@web/data/images/',
          '@assetBasePathImages' => '@webroot/data/images/',
          '@assetBaseUrlVideo' => '@web/data/Video/',
          '@assetBasePathVideo' => '@webroot/data/Video/',
        ]
    ]
];
