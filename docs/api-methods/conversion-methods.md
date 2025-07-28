# Conversion Extension Methods

**Client:** `conversion-api`
**Total Methods:** 60

## POST Methods (10)

### `/activate/`

- **Operation ID:** `activate_create`
- **Summary:** Activate service

### `/admin/conversion-pairs/`

- **Operation ID:** `admin_conversion_pairs_create`
- **Summary:** Create conversion pair

### `/admin/conversions/`

- **Operation ID:** `admin_conversions_create`
- **Summary:** Create conversion

### `/admin/currencies/`

- **Operation ID:** `admin_currencies_create`
- **Summary:** Create currency

### `/admin/integrations/`

- **Operation ID:** `admin_integrations_create`
- **Summary:** Create integration

### `/admin/integrations/{identifier}/webhooks/`

- **Operation ID:** `admin_integrations_webhooks_create`
- **Summary:** Create integration webhook

### `/admin/rate-pairs/`

- **Operation ID:** `admin_rate_pairs_create`
- **Summary:** Create rate pair

### `/deactivate/`

- **Operation ID:** `deactivate_create`
- **Summary:** Deactivate service

### `/user/conversions/`

- **Operation ID:** `user_conversions_create`
- **Summary:** Create conversion

### `/webhook/`

- **Operation ID:** `webhook_create`
- **Summary:** Receive Platform webhook

## GET Methods (26)

### `/admin/company/`

- **Operation ID:** `admin_company_retrieve`
- **Summary:** Retrieve company

### `/admin/conversion-pairs/`

- **Operation ID:** `admin_conversion_pairs_list`
- **Summary:** List conversion pairs

### `/admin/conversion-pairs/{identifier}/`

- **Operation ID:** `admin_conversion_pairs_retrieve`
- **Summary:** Retrieve conversion pair

### `/admin/conversions/`

- **Operation ID:** `admin_conversions_list`
- **Summary:** List conversions

### `/admin/conversions/{identifier}/`

- **Operation ID:** `admin_conversions_retrieve`
- **Summary:** Retrieve conversion

### `/admin/currencies/`

- **Operation ID:** `admin_currencies_list`
- **Summary:** List currencies

### `/admin/currencies/{code}/`

- **Operation ID:** `admin_currencies_retrieve`
- **Summary:** Retrieve currency

### `/admin/integrations/`

- **Operation ID:** `admin_integrations_list`
- **Summary:** List integration

### `/admin/integrations/{identifier}/`

- **Operation ID:** `admin_integrations_retrieve`
- **Summary:** Retrieve integration

### `/admin/integrations/{identifier}/webhooks/`

- **Operation ID:** `admin_integrations_webhooks_list`
- **Summary:** List integration webhooks

### `/admin/integrations/{integration_id}/webhooks/{webhook_id}/`

- **Operation ID:** `admin_integrations_webhooks_retrieve`
- **Summary:** Retrieve integration webhook

### `/admin/rate-pairs/`

- **Operation ID:** `admin_rate_pairs_list`
- **Summary:** List rate pairs

### `/admin/rate-pairs/{identifier}/`

- **Operation ID:** `admin_rate_pairs_retrieve`
- **Summary:** Retrieve rate pair

### `/admin/users/`

- **Operation ID:** `admin_users_list`
- **Summary:** List users

### `/admin/users/{identifier}/`

- **Operation ID:** `admin_users_retrieve`
- **Summary:** Retrieve user

### `/user/conversion-pairs/`

- **Operation ID:** `user_conversion_pairs_list`
- **Summary:** List conversion pairs

### `/user/conversion-pairs/{identifier}/`

- **Operation ID:** `user_conversion_pairs_retrieve`
- **Summary:** Retrieve conversion pair

### `/user/conversions/`

- **Operation ID:** `user_conversions_list`
- **Summary:** List conversions

### `/user/conversions/{identifier}/`

- **Operation ID:** `user_conversions_retrieve`
- **Summary:** Retrieve conversion

### `/user/currencies/`

- **Operation ID:** `user_currencies_list`
- **Summary:** List currencies

### `/user/currencies/{code}/`

- **Operation ID:** `user_currencies_retrieve`
- **Summary:** Retrieve currency

### `/user/rates/`

- **Operation ID:** `user_rates_list`
- **Summary:** List rates

### `/user/rates/{identifier}/`

- **Operation ID:** `user_rates_retrieve`
- **Summary:** Retrieve rate

### `/user/rates/snapshot/`

- **Operation ID:** `user_rates_snapshot_retrieve`
- **Summary:** Retrieve rate snapshot

### `/user/rates/snapshots/`

- **Operation ID:** `user_rates_snapshots_list`
- **Summary:** List rate snapshots

### `/user/settings/`

- **Operation ID:** `user_settings_retrieve`
- **Summary:** Retrieve user settings

## PUT Methods (10)

### `/admin/company/`

- **Operation ID:** `admin_company_update`
- **Summary:** Update company

### `/admin/conversion-pairs/{identifier}/`

- **Operation ID:** `admin_conversion_pairs_update`
- **Summary:** Update conversion pair

### `/admin/conversions/{identifier}/`

- **Operation ID:** `admin_conversions_update`
- **Summary:** Update conversion

### `/admin/currencies/{code}/`

- **Operation ID:** `admin_currencies_update`
- **Summary:** Update currency

### `/admin/integrations/{identifier}/`

- **Operation ID:** `admin_integrations_update`
- **Summary:** Update integration

### `/admin/integrations/{integration_id}/webhooks/{webhook_id}/`

- **Operation ID:** `admin_integrations_webhooks_update`
- **Summary:** Update integration webhook

### `/admin/rate-pairs/{identifier}/`

- **Operation ID:** `admin_rate_pairs_update`
- **Summary:** Update rate pair

### `/admin/users/{identifier}/`

- **Operation ID:** `admin_users_update`
- **Summary:** Update user

### `/user/conversions/{identifier}/`

- **Operation ID:** `user_conversions_update`
- **Summary:** Update conversion

### `/user/settings/`

- **Operation ID:** `user_settings_update`
- **Summary:** Update user settings

## PATCH Methods (10)

### `/admin/company/`

- **Operation ID:** `admin_company_partial_update`
- **Summary:** Partially update company

### `/admin/conversion-pairs/{identifier}/`

- **Operation ID:** `admin_conversion_pairs_partial_update`
- **Summary:** Partially update conversion pair

### `/admin/conversions/{identifier}/`

- **Operation ID:** `admin_conversions_partial_update`
- **Summary:** Partially update conversion

### `/admin/currencies/{code}/`

- **Operation ID:** `admin_currencies_partial_update`
- **Summary:** Partially update currency

### `/admin/integrations/{identifier}/`

- **Operation ID:** `admin_integrations_partial_update`
- **Summary:** Partially update integration

### `/admin/integrations/{integration_id}/webhooks/{webhook_id}/`

- **Operation ID:** `admin_integrations_webhooks_partial_update`
- **Summary:** Partially update integration webhook

### `/admin/rate-pairs/{identifier}/`

- **Operation ID:** `admin_rate_pairs_partial_update`
- **Summary:** Partially update rate pair

### `/admin/users/{identifier}/`

- **Operation ID:** `admin_users_partial_update`
- **Summary:** Partially update user

### `/user/conversions/{identifier}/`

- **Operation ID:** `user_conversions_partial_update`
- **Summary:** Partially update conversion

### `/user/settings/`

- **Operation ID:** `user_settings_partial_update`
- **Summary:** Partially update user settings

## DELETE Methods (4)

### `/admin/conversion-pairs/{identifier}/`

- **Operation ID:** `admin_conversion_pairs_destroy`
- **Summary:** Delete conversion pair

### `/admin/integrations/{identifier}/`

- **Operation ID:** `admin_integrations_destroy`
- **Summary:** Delete integration

### `/admin/integrations/{integration_id}/webhooks/{webhook_id}/`

- **Operation ID:** `admin_integrations_webhooks_destroy`
- **Summary:** Delete integration webhook

### `/admin/rate-pairs/{identifier}/`

- **Operation ID:** `admin_rate_pairs_destroy`
- **Summary:** Delete rate pair

