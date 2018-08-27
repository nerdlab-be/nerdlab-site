<?php

$vendorDir = dirname(__DIR__);

return array (
  'barrelstrength/sprout-active' => 
  array (
    'class' => 'barrelstrength\\sproutactive\\SproutActive',
    'basePath' => $vendorDir . '/barrelstrength/sprout-active/src',
    'handle' => 'sprout-active',
    'aliases' => 
    array (
      '@barrelstrength/sproutactive' => $vendorDir . '/barrelstrength/sprout-active/src',
    ),
    'name' => 'Sprout Active',
    'version' => '2.0.7',
    'description' => 'Simplify navigation and URL-based logic in your templates.',
    'developer' => 'Barrel Strength',
    'developerUrl' => 'https://barrelstrengthdesign.com',
    'developerEmail' => 'support@barrelstrengthdesign.com',
    'documentationUrl' => 'https://sprout.barrelstrengthdesign.com/craft-plugins/active',
    'changelogUrl' => 'https://raw.githubusercontent.com/barrelstrength/sprout-active/master/CHANGELOG.md',
    'downloadUrl' => 'https://github.com/barrelstrength/sprout-active/archive/master.zip',
  ),
  'clubstudioltd/craft-asset-rev' => 
  array (
    'class' => 'club\\assetrev\\AssetRev',
    'basePath' => $vendorDir . '/clubstudioltd/craft-asset-rev/src',
    'handle' => 'assetrev',
    'aliases' => 
    array (
      '@club/assetrev' => $vendorDir . '/clubstudioltd/craft-asset-rev/src',
    ),
    'name' => 'Asset Rev',
    'version' => '6.0.1',
    'description' => 'A plugin to aid cache-busting in Craft 3',
    'developer' => 'Club Studio Ltd',
    'developerUrl' => 'https://clubstudio.co.uk',
    'documentationUrl' => 'https://github.com/clubstudioltd/craft-asset-rev',
    'changelogUrl' => 'https://github.com/clubstudioltd/craft-asset-rev/blob/master/CHANGELOG.md',
    'downloadUrl' => 'https://github.com/clubstudioltd/craft-asset-rev/archive/v6.zip',
    'hasCpSettings' => false,
    'hasCpSection' => false,
  ),
  'craftcms/redactor' => 
  array (
    'class' => 'craft\\redactor\\Plugin',
    'basePath' => $vendorDir . '/craftcms/redactor/src',
    'handle' => 'redactor',
    'aliases' => 
    array (
      '@craft/redactor' => $vendorDir . '/craftcms/redactor/src',
    ),
    'name' => 'Redactor',
    'version' => '2.1.6',
    'description' => 'Edit rich text content in Craft CMS using Redactor by Imperavi.',
    'developer' => 'Pixel & Tonic',
    'developerUrl' => 'https://pixelandtonic.com/',
    'developerEmail' => 'support@craftcms.com',
    'documentationUrl' => 'https://github.com/craftcms/redactor',
  ),
  'craftcms/store-hours' => 
  array (
    'class' => 'craft\\storehours\\Plugin',
    'basePath' => $vendorDir . '/craftcms/store-hours/src',
    'handle' => 'store-hours',
    'aliases' => 
    array (
      '@craft/storehours' => $vendorDir . '/craftcms/store-hours/src',
    ),
    'name' => 'Store Hours',
    'version' => '2.1.0.1',
    'schemaVersion' => '1.0.2',
    'description' => 'This plugin adds a new “Store Hours” field type to Craft, for collecting the opening and closing hours of a business for each day of the week.',
    'developer' => 'Pixel & Tonic',
    'developerUrl' => 'https://pixelandtonic.com/',
    'developerEmail' => 'support@craftcms.com',
    'documentationUrl' => 'https://github.com/craftcms/store-hours',
    'changelogUrl' => 'https://raw.githubusercontent.com/craftcms/store-hours/v2/CHANGELOG.md',
    'downloadUrl' => 'https://github.com/craftcms/store-hours/archive/v2.zip',
  ),
  'ether/seo' => 
  array (
    'class' => 'ether\\seo\\Seo',
    'basePath' => $vendorDir . '/ether/seo/src',
    'handle' => 'seo',
    'aliases' => 
    array (
      '@ether/seo' => $vendorDir . '/ether/seo/src',
    ),
    'name' => 'SEO',
    'version' => '3.3.0',
    'schemaVersion' => '3.0.0',
    'description' => 'SEO utilities including a unique field type, sitemap, & redirect manager',
    'developer' => 'Ether Creative',
    'developerUrl' => 'https://ethercreative.co.uk',
    'documentationUrl' => 'https://github.com/ethercreative/seo/blob/v3/README.md',
  ),
  'ether/simplemap' => 
  array (
    'class' => 'ether\\simplemap\\SimpleMap',
    'basePath' => $vendorDir . '/ether/simplemap/src',
    'handle' => 'simplemap',
    'aliases' => 
    array (
      '@ether/simplemap' => $vendorDir . '/ether/simplemap/src',
    ),
    'name' => 'SimpleMap',
    'version' => '3.3.3',
    'schemaVersion' => '3.0.0',
    'description' => 'A beautifully simple Google Map field type.',
    'developer' => 'Ether Creative',
    'developerUrl' => 'https://ethercreative.co.uk',
    'developerEmail' => 'tam@ethercreative.co.uk',
  ),
  'mmikkel/cp-field-inspect' => 
  array (
    'class' => 'mmikkel\\cpfieldinspect\\CpFieldInspect',
    'basePath' => $vendorDir . '/mmikkel/cp-field-inspect/src',
    'handle' => 'cp-field-inspect',
    'aliases' => 
    array (
      '@mmikkel/cpfieldinspect' => $vendorDir . '/mmikkel/cp-field-inspect/src',
    ),
    'name' => 'CP Field Inspect',
    'version' => '1.0.4',
    'schemaVersion' => '1.0.0',
    'description' => 'Inspect field handles and easily edit field settings',
    'developer' => 'Mats Mikkel Rummelhoff',
    'developerUrl' => 'http://mmikkel.no',
    'documentationUrl' => 'https://github.com/mmikkel/CpFieldInspect-Craft/blob/master/README.md',
    'changelogUrl' => 'https://raw.githubusercontent.com/mmikkel/CpFieldInspect-Craft/master/CHANGELOG.md',
    'hasCpSettings' => false,
    'hasCpSection' => false,
  ),
  'nystudio107/craft-cookies' => 
  array (
    'class' => 'nystudio107\\cookies\\Cookies',
    'basePath' => $vendorDir . '/nystudio107/craft-cookies/src',
    'handle' => 'cookies',
    'aliases' => 
    array (
      '@nystudio107/cookies' => $vendorDir . '/nystudio107/craft-cookies/src',
    ),
    'name' => 'Cookies',
    'version' => '1.1.10',
    'schemaVersion' => '1.0.0',
    'description' => 'A simple plugin for setting and getting cookies from within Craft CMS templates.',
    'developer' => 'nystudio107',
    'developerUrl' => 'https://nystudio107.com/',
    'documentationUrl' => 'https://github.com/nystudio107/craft-cookies/blob/v1/README.md',
    'changelogUrl' => 'https://raw.githubusercontent.com/nystudio107/craft-cookies/v1/CHANGELOG.md',
    'hasCpSettings' => false,
    'hasCpSection' => false,
    'components' => 
    array (
      'cookies' => 'nystudio107\\cookies\\services\\CookiesService',
    ),
  ),
  'nystudio107/craft-minify' => 
  array (
    'class' => 'nystudio107\\minify\\Minify',
    'basePath' => $vendorDir . '/nystudio107/craft-minify/src',
    'handle' => 'minify',
    'aliases' => 
    array (
      '@nystudio107/minify' => $vendorDir . '/nystudio107/craft-minify/src',
    ),
    'name' => 'Minify',
    'version' => '1.2.9',
    'schemaVersion' => '1.0.0',
    'description' => 'A simple plugin that allows you to minify blocks of HTML, CSS, and JS inline in Craft CMS templates.',
    'developer' => 'nystudio107',
    'developerUrl' => 'https://nystudio107.com/',
    'documentationUrl' => 'https://github.com/nystudio107/craft-minify/blob/v1/README.md',
    'changelogUrl' => 'https://raw.githubusercontent.com/nystudio107/craft-minify/v1/CHANGELOG.md',
    'hasCpSettings' => false,
    'hasCpSection' => false,
    'components' => 
    array (
      'minify' => 'nystudio107\\minify\\services\\MinifyService',
    ),
  ),
  'pennebaker/craft-architect' => 
  array (
    'class' => 'pennebaker\\architect\\Architect',
    'basePath' => $vendorDir . '/pennebaker/craft-architect/src',
    'handle' => 'architect',
    'aliases' => 
    array (
      '@pennebaker/architect' => $vendorDir . '/pennebaker/craft-architect/src',
    ),
    'name' => 'Architect',
    'version' => '2.2.9',
    'schemaVersion' => '2.0.0',
    'description' => 'CraftCMS plugin to generate content models from JSON data.',
    'developer' => 'Pennebaker',
    'developerUrl' => 'https://pennebaker.com',
    'documentationUrl' => 'https://github.com/Pennebaker/craft-architect/blob/master/README.md',
    'changelogUrl' => 'https://raw.githubusercontent.com/Pennebaker/craft-architect/master/CHANGELOG.md',
    'hasCpSettings' => false,
    'hasCpSection' => true,
    'components' => 
    array (
      'architectService' => 'pennebaker\\architect\\services\\ArchitectService',
    ),
  ),
  'rias/craft-position-fieldtype' => 
  array (
    'class' => 'rias\\positionfieldtype\\PositionFieldtype',
    'basePath' => $vendorDir . '/rias/craft-position-fieldtype/src',
    'handle' => 'position-fieldtype',
    'aliases' => 
    array (
      '@rias/positionfieldtype' => $vendorDir . '/rias/craft-position-fieldtype/src',
    ),
    'name' => 'Position Fieldtype',
    'version' => '1.0.13',
    'schemaVersion' => '1.0.0',
    'description' => 'Brings back the Position fieldtype from Craft 2',
    'developer' => 'Rias',
    'developerUrl' => 'https://rias.be',
    'documentationUrl' => 'https://github.com/Rias500/craft-position-fieldtype/blob/master/README.md',
    'changelogUrl' => 'https://raw.githubusercontent.com/Rias500/craft-position-fieldtype/master/CHANGELOG.md',
    'hasCpSettings' => false,
    'hasCpSection' => false,
  ),
  'rias/craft-schema' => 
  array (
    'class' => 'rias\\schema\\Schema',
    'basePath' => $vendorDir . '/rias/craft-schema/src',
    'handle' => 'schema',
    'aliases' => 
    array (
      '@rias/schema' => $vendorDir . '/rias/craft-schema/src',
    ),
    'name' => 'schema',
    'version' => '1.0.3',
    'schemaVersion' => '1.0.0',
    'description' => 'A fluent builder Schema.org types and ld+json generator based on Spatie\'s schema-org package',
    'developer' => 'Rias',
    'developerUrl' => 'https://rias.be',
    'documentationUrl' => 'https://github.com/rias500/schema/blob/master/README.md',
    'changelogUrl' => 'https://raw.githubusercontent.com/rias500/schema/master/CHANGELOG.md',
    'hasCpSettings' => false,
    'hasCpSection' => false,
  ),
  'verbb/cp-nav' => 
  array (
    'class' => 'verbb\\cpnav\\CpNav',
    'basePath' => $vendorDir . '/verbb/cp-nav/src',
    'handle' => 'cp-nav',
    'aliases' => 
    array (
      '@verbb/cpnav' => $vendorDir . '/verbb/cp-nav/src',
    ),
    'name' => 'Control Panel Nav',
    'version' => '2.0.4',
    'schemaVersion' => '2.0.0',
    'description' => 'Control Panel Nav helps you managing your Control Panel navigation.',
    'developer' => 'Verbb',
    'developerUrl' => 'http://verbb.io',
    'developerEmail' => 'support@verbb.io',
    'documentationUrl' => 'https://github.com/verbb/cp-nav',
    'changelogUrl' => 'https://raw.githubusercontent.com/verbb/cp-nav/craft-3/CHANGELOG.md',
    'hasCpSettings' => true,
    'hasCpSection' => false,
  ),
  'wildbit/craft3-donottrack' => 
  array (
    'class' => 'wildbit\\donottrack\\DoNotTrack',
    'basePath' => $vendorDir . '/wildbit/craft3-donottrack/src',
    'handle' => 'do-not-track',
    'aliases' => 
    array (
      '@wildbit/donottrack' => $vendorDir . '/wildbit/craft3-donottrack/src',
    ),
    'name' => 'Do Not Track',
    'version' => '1.0.0',
    'description' => 'Craft 3 plugin for respecting Do Not Track headers sent by browsers.',
    'developer' => 'Wildbit',
    'developerUrl' => 'https://wildbit.com',
    'documentationUrl' => 'https://github.com/wildbit/craft3-donottrack/blob/master/README.md',
    'changelogUrl' => 'https://raw.githubusercontent.com/wildbit/craft3-donottrack/master/CHANGELOG.md',
    'hasCpSettings' => false,
    'hasCpSection' => false,
    'components' => 
    array (
      'doNotTrackService' => 'wildbit\\donottrack\\services\\DoNotTrackService',
    ),
  ),
);
