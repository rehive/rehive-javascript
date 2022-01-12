# Rehive app translations

The rehive app uses i18n standard json language files along with i18next to manage translations in the app. These language files are divided into the following different namespaces:

- Common
- Accounts
- Auth
- Onboarding
- Products
- Profile
- Rewards
- Settings

## Language files

### Variables

Variables can be included in the strings using `{{variable_name}}`. The list of available variables in each namespace will be added soon.

### Formatting

(not 100% working yet, but this is the intended usage)

The following formatting identifiers are available:

- `**text**` for Bold
- `__text__` for Underline

## Usage

These base translations are hard coded on the app. However each one of these can be overwritten using the locales section of the app service in the dashboard.

### Config

Above the fixed content in the app, there is also client generated app content such as home screen prompts/alerts, group names/descriptions, fee names, etc. These can also be localized by providing a key as the text/label field in the dashboard and then adding the related translations to the locales section of the app service in the dashboard.

### Localize

To be added
