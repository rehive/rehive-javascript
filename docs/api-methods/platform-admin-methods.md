# Platform Admin API Methods

**Client:** `platform-admin-api`
**Total Methods:** 360

## GET Methods (144)

### `/3/admin/access-control-rules/`

- **Operation ID:** `access_control_rules_list`
- **Summary:** List access control rules

### `/3/admin/access-control-rules/{id}/`

- **Operation ID:** `access_control_rules_retrieve`
- **Summary:** Retrieve access control rule

### `/3/admin/account-currencies/`

- **Operation ID:** `account_currencies_list`
- **Summary:** List account asset

### `/3/admin/account-definitions/`

- **Operation ID:** `account_definitions_list`
- **Summary:** List account definitions

### `/3/admin/account-definitions/{definition_name}/`

- **Operation ID:** `account_definitions_retrieve`
- **Summary:** Retrieve account definition

### `/3/admin/account-definitions/{definition_name}/groups/`

- **Operation ID:** `account_definitions_groups_list`
- **Summary:** List account definitions groups

### `/3/admin/account-definitions/{definition_name}/groups/{definition_group_name}/`

- **Operation ID:** `account_definitions_groups_retrieve`
- **Summary:** Retrieve account definitions group

### `/3/admin/account-definitions/{definition_name}/groups/{definition_group_name}/currencies/`

- **Operation ID:** `account_definitions_groups_currencies_list`
- **Summary:** List account definition group currencies

### `/3/admin/account-definitions/{definition_name}/groups/{definition_group_name}/currencies/{currency_code}/`

- **Operation ID:** `account_definitions_groups_currencies_retrieve`
- **Summary:** Retrieve account definition group currency

### `/3/admin/accounts/`

- **Operation ID:** `accounts_list`
- **Summary:** List accounts

### `/3/admin/accounts/{reference}/`

- **Operation ID:** `accounts_retrieve`
- **Summary:** Retrieve account

### `/3/admin/accounts/{reference}/currencies/`

- **Operation ID:** `accounts_currencies_list`
- **Summary:** List account currencies

### `/3/admin/accounts/{reference}/currencies/{code}/`

- **Operation ID:** `accounts_currencies_retrieve`
- **Summary:** Retrieve account currency

### `/3/admin/accounts/{reference}/currencies/{code}/fees/`

- **Operation ID:** `accounts_currencies_fees_list`
- **Summary:** List account currency fees

### `/3/admin/accounts/{reference}/currencies/{code}/fees/{fee_id}/`

- **Operation ID:** `accounts_currencies_fees_retrieve`
- **Summary:** Retrieve account currency fee

### `/3/admin/accounts/{reference}/currencies/{code}/limits/`

- **Operation ID:** `accounts_currencies_limits_list`
- **Summary:** List account currency limits

### `/3/admin/accounts/{reference}/currencies/{code}/limits/{limit_id}/`

- **Operation ID:** `accounts_currencies_limits_retrieve`
- **Summary:** Retrieve account asset limit

### `/3/admin/accounts/{reference}/currencies/{code}/settings/`

- **Operation ID:** `accounts_currencies_settings_retrieve`
- **Summary:** List account currency settings

### `/3/admin/authenticator-rules/`

- **Operation ID:** `authenticator_rules_list`
- **Summary:** List authenticator rules

### `/3/admin/authenticator-rules/{identifier}/`

- **Operation ID:** `authenticator_rules_retrieve`
- **Summary:** Retrieve authenticator rule

### `/3/admin/bank-accounts/`

- **Operation ID:** `bank_accounts_list`
- **Summary:** List company bank accounts

### `/3/admin/bank-accounts/{id}/`

- **Operation ID:** `bank_accounts_retrieve`
- **Summary:** Retrieve company bank account

### `/3/admin/bank-accounts/{id}/currencies/`

- **Operation ID:** `bank_accounts_currencies_list`
- **Summary:** List company bank account currencies

### `/3/admin/bank-accounts/{id}/currencies/{code}/`

- **Operation ID:** `bank_accounts_currencies_retrieve`
- **Summary:** Retrieve company bank account currency

### `/3/admin/company/`

- **Operation ID:** `company_retrieve`
- **Summary:** Retrieve company

### `/3/admin/company/address/`

- **Operation ID:** `company_address_retrieve`
- **Summary:** Retrieve company address

### `/3/admin/company/links/`

- **Operation ID:** `company_links_list`
- **Summary:** List company links

### `/3/admin/company/links/{id}/`

- **Operation ID:** `company_links_retrieve`
- **Summary:** Retrieve company link

### `/3/admin/company/settings/`

- **Operation ID:** `company_settings_retrieve`
- **Summary:** Retrieve company settings

### `/3/admin/currencies/`

- **Operation ID:** `currencies_list`
- **Summary:** List currencies

### `/3/admin/currencies/{code}/`

- **Operation ID:** `currencies_retrieve`
- **Summary:** Retrieve currency

### `/3/admin/currencies/{code}/overview/`

- **Operation ID:** `currencies_overview_retrieve`
- **Summary:** Retrive currency overview

### `/3/admin/document-types/`

- **Operation ID:** `document_types_list`
- **Summary:** List document types

### `/3/admin/document-types/{id}/`

- **Operation ID:** `document_types_retrieve`
- **Summary:** Retrieve document type

### `/3/admin/exports/`

- **Operation ID:** `exports_list`
- **Summary:** List exports

### `/3/admin/exports/{identifier}/`

- **Operation ID:** `exports_retrieve`
- **Summary:** Retrieve export

### `/3/admin/groups/`

- **Operation ID:** `groups_list`
- **Summary:** List groups

### `/3/admin/groups/{group_name}/`

- **Operation ID:** `groups_retrieve`
- **Summary:** Retrieve group

### `/3/admin/groups/{group_name}/fees/`

- **Operation ID:** `groups_fees_list`
- **Summary:** List group fees

### `/3/admin/groups/{group_name}/fees/{fee_id}/`

- **Operation ID:** `groups_fees_retrieve`
- **Summary:** Retrieve group fee

### `/3/admin/groups/{group_name}/permissions/`

- **Operation ID:** `groups_permissions_list`
- **Summary:** List group permissions

### `/3/admin/groups/{group_name}/permissions/{permission_id}/`

- **Operation ID:** `groups_permissions_retrieve`
- **Summary:** Retrieve group permission

### `/3/admin/groups/{group_name}/settings/`

- **Operation ID:** `groups_settings_retrieve`
- **Summary:** Retrieve group settings

### `/3/admin/groups/{group_name}/tiers/`

- **Operation ID:** `groups_tiers_list`
- **Summary:** List group tiers

### `/3/admin/groups/{group_name}/tiers/{tier_id}/`

- **Operation ID:** `groups_tiers_retrieve`
- **Summary:** Retrieve group tiers

### `/3/admin/groups/{group_name}/tiers/{tier_id}/fees/`

- **Operation ID:** `groups_tiers_fees_list`
- **Summary:** List group tier fees

### `/3/admin/groups/{group_name}/tiers/{tier_id}/fees/{fee_id}/`

- **Operation ID:** `groups_tiers_fees_retrieve`
- **Summary:** Retrieve group tier fee

### `/3/admin/groups/{group_name}/tiers/{tier_id}/limits/`

- **Operation ID:** `groups_tiers_limits_list`
- **Summary:** List group tier limits

### `/3/admin/groups/{group_name}/tiers/{tier_id}/limits/{limit_id}/`

- **Operation ID:** `groups_tiers_limits_retrieve`
- **Summary:** Retrieve group tier limit

### `/3/admin/groups/{group_name}/tiers/{tier_id}/requirement-sets/`

- **Operation ID:** `groups_tiers_requirement_sets_list`
- **Summary:** List tier requirement sets

### `/3/admin/groups/{group_name}/tiers/{tier_id}/requirement-sets/{req_set_id}/`

- **Operation ID:** `groups_tiers_requirement_sets_retrieve`
- **Summary:** Retrieve tier requirement set

### `/3/admin/groups/{group_name}/tiers/{tier_id}/requirement-sets/{req_set_id}/items/`

- **Operation ID:** `groups_tiers_requirement_sets_items_list`
- **Summary:** List tier requirement set items

### `/3/admin/groups/{group_name}/tiers/{tier_id}/requirement-sets/{req_set_id}/items/{req_item_id}/`

- **Operation ID:** `groups_tiers_requirement_sets_items_retrieve`
- **Summary:** Retrieve tier requirement set item

### `/3/admin/groups/{group_name}/tiers/{tier_id}/settings/`

- **Operation ID:** `groups_tiers_settings_retrieve`
- **Summary:** Retrieve group tier settings

### `/3/admin/legal-terms/`

- **Operation ID:** `legal_terms_list`
- **Summary:** List legal terms

### `/3/admin/legal-terms/{id}/`

- **Operation ID:** `legal_terms_retrieve`
- **Summary:** Retrieve legal terms

### `/3/admin/legal-terms/{id}/versions/`

- **Operation ID:** `legal_terms_versions_list`
- **Summary:** List legal terms versions

### `/3/admin/legal-terms/{term_id}/versions/{version_id}/`

- **Operation ID:** `legal_terms_versions_retrieve`
- **Summary:** Retrieve legal terms version

### `/3/admin/metrics/`

- **Operation ID:** `metrics_list`
- **Summary:** List metrics

### `/3/admin/metrics/{identifier}/`

- **Operation ID:** `metrics_retrieve`
- **Summary:** Retrieve metric

### `/3/admin/metrics/{identifier}/points/`

- **Operation ID:** `metrics_points_list`
- **Summary:** List metric points

### `/3/admin/oauth-clients/`

- **Operation ID:** `oauth_clients_list`

### `/3/admin/oauth-clients/{identifier}/`

- **Operation ID:** `oauth_clients_retrieve`

### `/3/admin/permissions/`

- **Operation ID:** `permissions_list`
- **Summary:** List permissions

### `/3/admin/permissions/{permission_id}/`

- **Operation ID:** `permissions_retrieve`
- **Summary:** Retrive permission

### `/3/admin/requests/`

- **Operation ID:** `requests_list`
- **Summary:** List requests

### `/3/admin/requests/{request_id}/`

- **Operation ID:** `requests_retrieve`
- **Summary:** Retrieve request

### `/3/admin/search/`

- **Operation ID:** `search_retrieve`
- **Summary:** Retrieve search

### `/3/admin/services/`

- **Operation ID:** `services_list`
- **Summary:** List services

### `/3/admin/services/{service_id}/`

- **Operation ID:** `services_retrieve`
- **Summary:** Retrieve service

### `/3/admin/services/{service_id}/permissions/`

- **Operation ID:** `services_permissions_list`
- **Summary:** List service permissions

### `/3/admin/services/{service_id}/permissions/{permission_id}/`

- **Operation ID:** `services_permissions_retrieve`
- **Summary:** Retrieve service permission

### `/3/admin/statements/`

- **Operation ID:** `statements_list`

### `/3/admin/statements/{identifier}/`

- **Operation ID:** `statements_retrieve`

### `/3/admin/subtypes/`

- **Operation ID:** `subtypes_list`
- **Summary:** List subtypes

### `/3/admin/subtypes/{id}/`

- **Operation ID:** `subtypes_retrieve`
- **Summary:** Retrieve subtype

### `/3/admin/transaction-collections/`

- **Operation ID:** `transaction_collections_list`
- **Summary:** List transaction-collections

### `/3/admin/transaction-collections/{identifier}/`

- **Operation ID:** `transaction_collections_retrieve`
- **Summary:** Retrieve transaction-collection

### `/3/admin/transaction-collections/{identifier}/transactions/`

- **Operation ID:** `transaction_collections_transactions_list`
- **Summary:** List transaction-collection transactions

### `/3/admin/transaction-transitions/`

- **Operation ID:** `transaction_transitions_list`
- **Summary:** List transaction transitions

### `/3/admin/transaction-transitions/{identifier}/`

- **Operation ID:** `transaction_transitions_retrieve`
- **Summary:** Retrieve transaction transition

### `/3/admin/transactions/`

- **Operation ID:** `transactions_list`
- **Summary:** List transactions

### `/3/admin/transactions/{tx_code}/`

- **Operation ID:** `transactions_retrieve`
- **Summary:** Retrieve transaction

### `/3/admin/transactions/{tx_code}/messages/`

- **Operation ID:** `transactions_messages_list`
- **Summary:** List tansaction messages

### `/3/admin/transactions/{tx_code}/messages/{id}/`

- **Operation ID:** `transactions_messages_retrieve`
- **Summary:** Retrieve transaction message

### `/3/admin/transactions/totals/`

- **Operation ID:** `transactions_totals_retrieve`
- **Summary:** List transaction totals

### `/3/admin/users/`

- **Operation ID:** `users_list`
- **Summary:** List users

### `/3/admin/users/{identifier}/`

- **Operation ID:** `users_retrieve`
- **Summary:** Retrieve user

### `/3/admin/users/{identifier}/groups/`

- **Operation ID:** `users_groups_list`
- **Summary:** List user groups

### `/3/admin/users/{identifier}/groups/{group_name}/`

- **Operation ID:** `users_groups_retrieve`
- **Summary:** Retrieve user group

### `/3/admin/users/{identifier}/legal-terms/`

- **Operation ID:** `users_legal_terms_list`
- **Summary:** List user legal-terms

### `/3/admin/users/{identifier}/legal-terms/{term_id}/`

- **Operation ID:** `users_legal_terms_retrieve`
- **Summary:** Retrieve user legal-term

### `/3/admin/users/{identifier}/legal-terms/{term_id}/versions/`

- **Operation ID:** `users_legal_terms_versions_list`
- **Summary:** List user legal-term versions

### `/3/admin/users/{identifier}/legal-terms/{term_id}/versions/{version_id}/`

- **Operation ID:** `users_legal_terms_versions_retrieve`
- **Summary:** Retrieve legal-term version

### `/3/admin/users/{identifier}/messages/`

- **Operation ID:** `users_messages_list`
- **Summary:** List user messages

### `/3/admin/users/{identifier}/messages/{id}/`

- **Operation ID:** `users_messages_retrieve`
- **Summary:** Retrieve user message

### `/3/admin/users/{identifier}/permissions/`

- **Operation ID:** `users_permissions_list`
- **Summary:** List user permissions

### `/3/admin/users/{identifier}/permissions/{permission_id}/`

- **Operation ID:** `users_permissions_retrieve`
- **Summary:** Retrieve user permission

### `/3/admin/users/{identifier}/settings/`

- **Operation ID:** `users_settings_retrieve`
- **Summary:** Retrieve user settings

### `/3/admin/users/addresses/`

- **Operation ID:** `users_addresses_list`
- **Summary:** List users addresses

### `/3/admin/users/addresses/{id}/`

- **Operation ID:** `users_addresses_retrieve`
- **Summary:** Retrieve user address

### `/3/admin/users/bank-accounts/`

- **Operation ID:** `users_bank_accounts_list`
- **Summary:** List users bank-accounts

### `/3/admin/users/bank-accounts/{id}/`

- **Operation ID:** `users_bank_accounts_retrieve`
- **Summary:** Retrieve users bank-account

### `/3/admin/users/bank-accounts/{id}/account-currencies/`

- **Operation ID:** `users_bank_accounts_account_currencies_list`
- **Summary:** List users bank-accounts account currencies

### `/3/admin/users/bank-accounts/{id}/account-currencies/{account_currency_id}/`

- **Operation ID:** `users_bank_accounts_account_currencies_retrieve`
- **Summary:** Retrieve users bank-account account currency

### `/3/admin/users/bank-accounts/{id}/currencies/`

- **Operation ID:** `users_bank_accounts_currencies_list`
- **Summary:** List user bank-account currencies

### `/3/admin/users/bank-accounts/{id}/currencies/{code}/`

- **Operation ID:** `users_bank_accounts_currencies_retrieve`
- **Summary:** Retrieve user bank-account currency

### `/3/admin/users/crypto-accounts/`

- **Operation ID:** `users_crypto_accounts_list`
- **Summary:** List users crypto-accounts

### `/3/admin/users/crypto-accounts/{id}/`

- **Operation ID:** `users_crypto_accounts_retrieve`
- **Summary:** Retrieve users crypto-account

### `/3/admin/users/crypto-accounts/{id}/account-currencies/`

- **Operation ID:** `users_crypto_accounts_account_currencies_list`
- **Summary:** List users crypto-accounts account currencies

### `/3/admin/users/crypto-accounts/{id}/account-currencies/{account_currency_id}/`

- **Operation ID:** `users_crypto_accounts_account_currencies_retrieve`
- **Summary:** Retrieve users crypto-account account currency

### `/3/admin/users/crypto-accounts/{id}/currencies/`

- **Operation ID:** `users_crypto_accounts_currencies_list`
- **Summary:** List user crypto-account currencies

### `/3/admin/users/crypto-accounts/{id}/currencies/{code}/`

- **Operation ID:** `users_crypto_accounts_currencies_retrieve`
- **Summary:** Retrieve user crypto-account currency

### `/3/admin/users/devices/`

- **Operation ID:** `users_devices_list`
- **Summary:** List users devices

### `/3/admin/users/devices/{device_id}/apps/{app_id}/`

- **Operation ID:** `users_devices_apps_retrieve`
- **Summary:** Retrieve users device app

### `/3/admin/users/devices/{id}/`

- **Operation ID:** `users_devices_retrieve`
- **Summary:** Retrieve users device

### `/3/admin/users/devices/{id}/apps/`

- **Operation ID:** `users_devices_apps_list`
- **Summary:** List users device apps

### `/3/admin/users/documents/`

- **Operation ID:** `users_documents_list`
- **Summary:** List users documents

### `/3/admin/users/documents/{id}/`

- **Operation ID:** `users_documents_retrieve`
- **Summary:** Retrieve users document

### `/3/admin/users/emails/`

- **Operation ID:** `users_emails_list`
- **Summary:** List users emails

### `/3/admin/users/emails/{id}/`

- **Operation ID:** `users_emails_retrieve`
- **Summary:** Retrieve users email

### `/3/admin/users/mfa/authenticators/`

- **Operation ID:** `users_mfa_authenticators_list`
- **Summary:** List mfa authenticators

### `/3/admin/users/mfa/authenticators/{identifier}/`

- **Operation ID:** `users_mfa_authenticators_retrieve`
- **Summary:** Retrieve mfa authenticator

### `/3/admin/users/mobiles/`

- **Operation ID:** `users_mobiles_list`
- **Summary:** List users mobiles

### `/3/admin/users/mobiles/{id}/`

- **Operation ID:** `users_mobiles_retrieve`
- **Summary:** Retrieve users mobile

### `/3/admin/users/overview/`

- **Operation ID:** `users_overview_retrieve`
- **Summary:** Retrieve users overview

### `/3/admin/users/tokens/`

- **Operation ID:** `users_tokens_list`
- **Summary:** List users tokens

### `/3/admin/users/tokens/{token_key}/`

- **Operation ID:** `users_tokens_retrieve`
- **Summary:** Retrieve users token

### `/3/admin/users/wallet-accounts/`

- **Operation ID:** `users_wallet_accounts_list`
- **Summary:** List users wallet-accounts

### `/3/admin/users/wallet-accounts/{id}/`

- **Operation ID:** `users_wallet_accounts_retrieve`
- **Summary:** Retrieve users wallet-account

### `/3/admin/users/wallet-accounts/{id}/account-currencies/`

- **Operation ID:** `users_wallet_accounts_account_currencies_list`
- **Summary:** List users wallet-accounts account currencies

### `/3/admin/users/wallet-accounts/{id}/account-currencies/{account_currency_id}/`

- **Operation ID:** `users_wallet_accounts_account_currencies_retrieve`
- **Summary:** Retrieve users wallet-account account currency

### `/3/admin/users/wallet-accounts/{id}/currencies/`

- **Operation ID:** `users_wallet_accounts_currencies_list`
- **Summary:** List users wallet-accounts currencies

### `/3/admin/users/wallet-accounts/{id}/currencies/{code}/`

- **Operation ID:** `users_wallet_accounts_currencies_retrieve`
- **Summary:** Retrieve users wallet-account currency

### `/3/admin/wallet-accounts/`

- **Operation ID:** `wallet_accounts_list`
- **Summary:** List company wallet-accounts

### `/3/admin/wallet-accounts/{id}/`

- **Operation ID:** `wallet_accounts_retrieve`
- **Summary:** Retrieve company wallet-account

### `/3/admin/wallet-accounts/{id}/currencies/`

- **Operation ID:** `wallet_accounts_currencies_list`
- **Summary:** List company wallet-account currencies

### `/3/admin/wallet-accounts/{id}/currencies/{code}/`

- **Operation ID:** `wallet_accounts_currencies_retrieve`
- **Summary:** Retrieve company wallet-account currency

### `/3/admin/webhook-tasks/`

- **Operation ID:** `webhook_tasks_list`
- **Summary:** List webhook tasks

### `/3/admin/webhook-tasks/{webhhook_task_id}/`

- **Operation ID:** `webhook_tasks_retrieve`
- **Summary:** Retrieve webhook task

### `/3/admin/webhook-tasks/{webhhook_task_id}/requests/`

- **Operation ID:** `webhook_tasks_requests_list`
- **Summary:** List webhook task requests

### `/3/admin/webhook-tasks/{webhhook_task_id}/requests/{webhook_request_id}/`

- **Operation ID:** `webhook_tasks_requests_retrieve`
- **Summary:** Retrieve webhook task request

### `/3/admin/webhooks/`

- **Operation ID:** `webhooks_list`
- **Summary:** List webhooks

### `/3/admin/webhooks/{webhhook_id}/`

- **Operation ID:** `webhooks_retrieve`
- **Summary:** Retrieve webhook

## POST Methods (69)

### `/3/admin/access-control-rules/`

- **Operation ID:** `access_control_rules_create`
- **Summary:** Create access control rule

### `/3/admin/account-definitions/`

- **Operation ID:** `account_definitions_create`
- **Summary:** Create account definitions

### `/3/admin/account-definitions/{definition_name}/groups/`

- **Operation ID:** `account_definitions_groups_create`
- **Summary:** Create account definitions

### `/3/admin/account-definitions/{definition_name}/groups/{definition_group_name}/currencies/`

- **Operation ID:** `account_definitions_groups_currencies_create`
- **Summary:** Create account deffinition group currency

### `/3/admin/accounts/`

- **Operation ID:** `accounts_create`
- **Summary:** Create accounts

### `/3/admin/accounts/{reference}/currencies/`

- **Operation ID:** `accounts_currencies_create`
- **Summary:** Create account currency

### `/3/admin/accounts/{reference}/currencies/{code}/fees/`

- **Operation ID:** `accounts_currencies_fees_create`
- **Summary:** Create account currency fees

### `/3/admin/accounts/{reference}/currencies/{code}/limits/`

- **Operation ID:** `accounts_currencies_limits_create`
- **Summary:** List account currency limits

### `/3/admin/auth/deactivate/`

- **Operation ID:** `auth_deactivate_create`
- **Summary:** Admin deactivate on behalf of a user

### `/3/admin/auth/deactivate/verify/`

- **Operation ID:** `auth_deactivate_verify_create`
- **Summary:** Admin verify deactivation on behalf of a user

### `/3/admin/auth/login/`

- **Operation ID:** `auth_login_create`
- **Summary:** Admin login on behalf of a user

### `/3/admin/auth/password/reset/`

- **Operation ID:** `auth_password_reset_create`
- **Summary:** Admin reset password on behalf of a user

### `/3/admin/auth/password/reset/confirm/`

- **Operation ID:** `auth_password_reset_confirm_create`
- **Summary:** Admin confirmation for reset password on behalf of a user

### `/3/admin/auth/register/`

- **Operation ID:** `auth_register_create`
- **Summary:** Admin register a new user on behalf of a user

### `/3/admin/auth/request-delete/`

- **Operation ID:** `auth_request_delete_create`
- **Summary:** Admin request delete on behalf of a user

### `/3/admin/auth/request-delete/verify/`

- **Operation ID:** `auth_request_delete_verify_create`
- **Summary:** Admin request delete on behalf of a user

### `/3/admin/authenticator-rules/`

- **Operation ID:** `authenticator_rules_create`
- **Summary:** Create authenticator rule

### `/3/admin/bank-accounts/`

- **Operation ID:** `bank_accounts_create`
- **Summary:** Create company bank account

### `/3/admin/bank-accounts/{id}/currencies/`

- **Operation ID:** `bank_accounts_currencies_create`
- **Summary:** Create company bank account currency

### `/3/admin/company/links/`

- **Operation ID:** `company_links_create`
- **Summary:** Create company link

### `/3/admin/currencies/`

- **Operation ID:** `currencies_create`
- **Summary:** Create currency

### `/3/admin/document-types/`

- **Operation ID:** `document_types_create`
- **Summary:** Create document type

### `/3/admin/exports/`

- **Operation ID:** `exports_create`
- **Summary:** Create export

### `/3/admin/groups/`

- **Operation ID:** `groups_create`
- **Summary:** Create group

### `/3/admin/groups/{group_name}/fees/`

- **Operation ID:** `groups_fees_create`
- **Summary:** Create group fee

### `/3/admin/groups/{group_name}/permissions/`

- **Operation ID:** `groups_permissions_create`
- **Summary:** Create group permission

### `/3/admin/groups/{group_name}/tiers/`

- **Operation ID:** `groups_tiers_create`
- **Summary:** Create group tiers

### `/3/admin/groups/{group_name}/tiers/{tier_id}/fees/`

- **Operation ID:** `groups_tiers_fees_create`
- **Summary:** Create group tier fees

### `/3/admin/groups/{group_name}/tiers/{tier_id}/limits/`

- **Operation ID:** `groups_tiers_limits_create`
- **Summary:** Create group tier limits

### `/3/admin/groups/{group_name}/tiers/{tier_id}/requirement-sets/`

- **Operation ID:** `groups_tiers_requirement_sets_create`
- **Summary:** Create tier requirement set

### `/3/admin/groups/{group_name}/tiers/{tier_id}/requirement-sets/{req_set_id}/items/`

- **Operation ID:** `groups_tiers_requirement_sets_items_create`
- **Summary:** Create tier requirement set item

### `/3/admin/legal-terms/`

- **Operation ID:** `legal_terms_create`
- **Summary:** Create legal terms

### `/3/admin/legal-terms/{id}/versions/`

- **Operation ID:** `legal_terms_versions_create`
- **Summary:** Create legal terms version

### `/3/admin/metrics/`

- **Operation ID:** `metrics_create`
- **Summary:** Create metric

### `/3/admin/oauth-clients/`

- **Operation ID:** `oauth_clients_create`

### `/3/admin/services/`

- **Operation ID:** `services_create`
- **Summary:** Create service

### `/3/admin/services/{service_id}/permissions/`

- **Operation ID:** `services_permissions_create`
- **Summary:** Create service permissions

### `/3/admin/statements/`

- **Operation ID:** `statements_create`

### `/3/admin/subtypes/`

- **Operation ID:** `subtypes_create`
- **Summary:** Create subtype

### `/3/admin/transaction-collections/`

- **Operation ID:** `transaction_collections_create`
- **Summary:** Create transaction-collections

### `/3/admin/transaction-collections/{identifier}/transactions/`

- **Operation ID:** `transaction_collections_transactions_create`
- **Summary:** Create transaction-collection transaction

### `/3/admin/transactions/`

- **Operation ID:** `transactions_create`
- **Summary:** Create transaction

### `/3/admin/transactions/{tx_code}/messages/`

- **Operation ID:** `transactions_messages_create`
- **Summary:** Create transaction message

### `/3/admin/transactions/credit/`

- **Operation ID:** `transactions_credit_create`
- **Summary:** Create transaction credit

### `/3/admin/transactions/debit/`

- **Operation ID:** `transactions_debit_create`
- **Summary:** Create transaction debit

### `/3/admin/transactions/transfer/`

- **Operation ID:** `transactions_transfer_create`
- **Summary:** Create transaction debit

### `/3/admin/users/`

- **Operation ID:** `users_create`
- **Summary:** Create user

### `/3/admin/users/{identifier}/groups/`

- **Operation ID:** `users_groups_create`
- **Summary:** Create account definitions

### `/3/admin/users/{identifier}/messages/`

- **Operation ID:** `users_messages_create`
- **Summary:** Create user message

### `/3/admin/users/{identifier}/permissions/`

- **Operation ID:** `users_permissions_create`
- **Summary:** Create user permission

### `/3/admin/users/addresses/`

- **Operation ID:** `users_addresses_create`
- **Summary:** Create user address

### `/3/admin/users/bank-accounts/`

- **Operation ID:** `users_bank_accounts_create`
- **Summary:** Create user bank-account

### `/3/admin/users/bank-accounts/{id}/account-currencies/`

- **Operation ID:** `users_bank_accounts_account_currencies_create`
- **Summary:** Create users bank-accounts account currency

### `/3/admin/users/bank-accounts/{id}/currencies/`

- **Operation ID:** `users_bank_accounts_currencies_create`
- **Summary:** Create user bank-account currency

### `/3/admin/users/crypto-accounts/`

- **Operation ID:** `users_crypto_accounts_create`
- **Summary:** Create user crypto-account

### `/3/admin/users/crypto-accounts/{id}/account-currencies/`

- **Operation ID:** `users_crypto_accounts_account_currencies_create`
- **Summary:** Create users crypto-accounts account currency

### `/3/admin/users/crypto-accounts/{id}/currencies/`

- **Operation ID:** `users_crypto_accounts_currencies_create`
- **Summary:** Create user crypto-account currency

### `/3/admin/users/devices/`

- **Operation ID:** `users_devices_create`
- **Summary:** Create user device

### `/3/admin/users/devices/{id}/apps/`

- **Operation ID:** `users_devices_apps_create`
- **Summary:** Create users device apps

### `/3/admin/users/documents/`

- **Operation ID:** `users_documents_create`
- **Summary:** Create users document

### `/3/admin/users/emails/`

- **Operation ID:** `users_emails_create`
- **Summary:** Create users email

### `/3/admin/users/mobiles/`

- **Operation ID:** `users_mobiles_create`
- **Summary:** Create users mobile

### `/3/admin/users/tokens/`

- **Operation ID:** `users_tokens_create`
- **Summary:** Create users token

### `/3/admin/users/wallet-accounts/`

- **Operation ID:** `users_wallet_accounts_create`
- **Summary:** Create users wallet-accounts

### `/3/admin/users/wallet-accounts/{id}/account-currencies/`

- **Operation ID:** `users_wallet_accounts_account_currencies_create`
- **Summary:** Create users wallet-accounts account currency

### `/3/admin/users/wallet-accounts/{id}/currencies/`

- **Operation ID:** `users_wallet_accounts_currencies_create`
- **Summary:** Create users wallet-accounts currency

### `/3/admin/wallet-accounts/`

- **Operation ID:** `wallet_accounts_create`
- **Summary:** Create company wallet-account

### `/3/admin/wallet-accounts/{id}/currencies/`

- **Operation ID:** `wallet_accounts_currencies_create`
- **Summary:** Create company wallet-account currency

### `/3/admin/webhooks/`

- **Operation ID:** `webhooks_create`
- **Summary:** Create webhook

## PUT Methods (50)

### `/3/admin/access-control-rules/{id}/`

- **Operation ID:** `access_control_rules_update`
- **Summary:** Updated access control rule

### `/3/admin/account-definitions/{definition_name}/`

- **Operation ID:** `account_definitions_update`
- **Summary:** Updated account definition

### `/3/admin/account-definitions/{definition_name}/groups/{definition_group_name}/`

- **Operation ID:** `account_definitions_groups_update`
- **Summary:** Update account definitions group

### `/3/admin/account-definitions/{definition_name}/groups/{definition_group_name}/currencies/{currency_code}/`

- **Operation ID:** `account_definitions_groups_currencies_update`
- **Summary:** Update account definition group currency

### `/3/admin/accounts/{reference}/`

- **Operation ID:** `accounts_update`
- **Summary:** Update account

### `/3/admin/accounts/{reference}/currencies/{code}/`

- **Operation ID:** `accounts_currencies_update`
- **Summary:** Update account currency

### `/3/admin/accounts/{reference}/currencies/{code}/fees/{fee_id}/`

- **Operation ID:** `accounts_currencies_fees_update`
- **Summary:** Update account currency fee

### `/3/admin/accounts/{reference}/currencies/{code}/limits/{limit_id}/`

- **Operation ID:** `accounts_currencies_limits_update`
- **Summary:** Update account currency limits

### `/3/admin/accounts/{reference}/currencies/{code}/settings/`

- **Operation ID:** `accounts_currencies_settings_update`
- **Summary:** Update account currency settings

### `/3/admin/authenticator-rules/{identifier}/`

- **Operation ID:** `authenticator_rules_update`
- **Summary:** Update athenticator rule

### `/3/admin/bank-accounts/{id}/`

- **Operation ID:** `bank_accounts_update`
- **Summary:** Update company bank account

### `/3/admin/company/`

- **Operation ID:** `company_update`
- **Summary:** Update company

### `/3/admin/company/address/`

- **Operation ID:** `company_address_update`
- **Summary:** Update company addresses

### `/3/admin/company/links/{id}/`

- **Operation ID:** `company_links_update`
- **Summary:** Update company link

### `/3/admin/company/settings/`

- **Operation ID:** `company_settings_update`
- **Summary:** Update company settings

### `/3/admin/currencies/{code}/`

- **Operation ID:** `currencies_update`
- **Summary:** Update currency

### `/3/admin/document-types/{id}/`

- **Operation ID:** `document_types_update`
- **Summary:** Update document type

### `/3/admin/groups/{group_name}/`

- **Operation ID:** `groups_update`
- **Summary:** Update group

### `/3/admin/groups/{group_name}/fees/{fee_id}/`

- **Operation ID:** `groups_fees_update`
- **Summary:** update group fee

### `/3/admin/groups/{group_name}/permissions/{permission_id}/`

- **Operation ID:** `groups_permissions_update`
- **Summary:** Update group permission

### `/3/admin/groups/{group_name}/settings/`

- **Operation ID:** `groups_settings_update`
- **Summary:** Update group settings

### `/3/admin/groups/{group_name}/tiers/{tier_id}/`

- **Operation ID:** `groups_tiers_update`
- **Summary:** Update group tiers

### `/3/admin/groups/{group_name}/tiers/{tier_id}/fees/{fee_id}/`

- **Operation ID:** `groups_tiers_fees_update`
- **Summary:** Update group tier fee

### `/3/admin/groups/{group_name}/tiers/{tier_id}/limits/{limit_id}/`

- **Operation ID:** `groups_tiers_limits_update`
- **Summary:** Update group tier limit

### `/3/admin/groups/{group_name}/tiers/{tier_id}/requirement-sets/{req_set_id}/`

- **Operation ID:** `groups_tiers_requirement_sets_update`
- **Summary:** Update tier requirement set

### `/3/admin/groups/{group_name}/tiers/{tier_id}/requirement-sets/{req_set_id}/items/{req_item_id}/`

- **Operation ID:** `groups_tiers_requirement_sets_items_update`
- **Summary:** Update tier requirement set item

### `/3/admin/groups/{group_name}/tiers/{tier_id}/settings/`

- **Operation ID:** `groups_tiers_settings_update`
- **Summary:** Update group tier settings

### `/3/admin/legal-terms/{id}/`

- **Operation ID:** `legal_terms_update`
- **Summary:** Update legal terms

### `/3/admin/legal-terms/{term_id}/versions/{version_id}/`

- **Operation ID:** `legal_terms_versions_update`
- **Summary:** Update legal terms version

### `/3/admin/oauth-clients/{identifier}/`

- **Operation ID:** `oauth_clients_update`

### `/3/admin/services/{service_id}/`

- **Operation ID:** `services_update`
- **Summary:** Update service

### `/3/admin/subtypes/{id}/`

- **Operation ID:** `subtypes_update`
- **Summary:** Update subtype

### `/3/admin/transaction-collections/{identifier}/`

- **Operation ID:** `transaction_collections_update`
- **Summary:** Update transaction-collection

### `/3/admin/transaction-transitions/{identifier}/`

- **Operation ID:** `transaction_transitions_update`
- **Summary:** Update transaction transition

### `/3/admin/transactions/{tx_code}/`

- **Operation ID:** `transactions_update`
- **Summary:** Update transaction

### `/3/admin/users/{identifier}/`

- **Operation ID:** `users_update`
- **Summary:** Update user

### `/3/admin/users/{identifier}/permissions/{permission_id}/`

- **Operation ID:** `users_permissions_update`
- **Summary:** Update user permission

### `/3/admin/users/{identifier}/settings/`

- **Operation ID:** `users_settings_update`
- **Summary:** Update user settings

### `/3/admin/users/addresses/{id}/`

- **Operation ID:** `users_addresses_update`
- **Summary:** Update user address

### `/3/admin/users/bank-accounts/{id}/`

- **Operation ID:** `users_bank_accounts_update`
- **Summary:** Update user bank-account

### `/3/admin/users/crypto-accounts/{id}/`

- **Operation ID:** `users_crypto_accounts_update`
- **Summary:** Update user crypto-account

### `/3/admin/users/devices/{device_id}/apps/{app_id}/`

- **Operation ID:** `users_devices_apps_update`
- **Summary:** Update user device app

### `/3/admin/users/devices/{id}/`

- **Operation ID:** `users_devices_update`
- **Summary:** Update user device

### `/3/admin/users/documents/{id}/`

- **Operation ID:** `users_documents_update`
- **Summary:** Update user document

### `/3/admin/users/emails/{id}/`

- **Operation ID:** `users_emails_update`
- **Summary:** Update users email

### `/3/admin/users/mobiles/{id}/`

- **Operation ID:** `users_mobiles_update`
- **Summary:** Update users mobile

### `/3/admin/users/tokens/{token_key}/`

- **Operation ID:** `users_tokens_update`
- **Summary:** Update users token

### `/3/admin/users/wallet-accounts/{id}/`

- **Operation ID:** `users_wallet_accounts_update`
- **Summary:** Update users wallet-account

### `/3/admin/wallet-accounts/{id}/`

- **Operation ID:** `wallet_accounts_update`
- **Summary:** Update company wallet-account

### `/3/admin/webhooks/{webhhook_id}/`

- **Operation ID:** `webhooks_update`
- **Summary:** Update webhook

## PATCH Methods (50)

### `/3/admin/access-control-rules/{id}/`

- **Operation ID:** `access_control_rules_partial_update`
- **Summary:** Prtially upadate access control rule

### `/3/admin/account-definitions/{definition_name}/`

- **Operation ID:** `account_definitions_partial_update`
- **Summary:** Partially update account definition

### `/3/admin/account-definitions/{definition_name}/groups/{definition_group_name}/`

- **Operation ID:** `account_definitions_groups_partial_update`
- **Summary:** Partially update account definitions group

### `/3/admin/account-definitions/{definition_name}/groups/{definition_group_name}/currencies/{currency_code}/`

- **Operation ID:** `account_definitions_groups_currencies_partial_update`
- **Summary:** Partially update account definition group currency

### `/3/admin/accounts/{reference}/`

- **Operation ID:** `accounts_partial_update`
- **Summary:** Update account

### `/3/admin/accounts/{reference}/currencies/{code}/`

- **Operation ID:** `accounts_currencies_partial_update`
- **Summary:** Partially update account currency

### `/3/admin/accounts/{reference}/currencies/{code}/fees/{fee_id}/`

- **Operation ID:** `accounts_currencies_fees_partial_update`
- **Summary:** Partially update account currency fee

### `/3/admin/accounts/{reference}/currencies/{code}/limits/{limit_id}/`

- **Operation ID:** `accounts_currencies_limits_partial_update`
- **Summary:** Partially update account currency limits

### `/3/admin/accounts/{reference}/currencies/{code}/settings/`

- **Operation ID:** `accounts_currencies_settings_partial_update`
- **Summary:** Partially update account currency settings

### `/3/admin/authenticator-rules/{identifier}/`

- **Operation ID:** `authenticator_rules_partial_update`
- **Summary:** Partially update athenticator rule

### `/3/admin/bank-accounts/{id}/`

- **Operation ID:** `bank_accounts_partial_update`
- **Summary:** Partially update company bank account

### `/3/admin/company/`

- **Operation ID:** `company_partial_update`
- **Summary:** Partilly update company

### `/3/admin/company/address/`

- **Operation ID:** `company_address_partial_update`
- **Summary:** Partially update company addresses

### `/3/admin/company/links/{id}/`

- **Operation ID:** `company_links_partial_update`
- **Summary:** Partially update company link

### `/3/admin/company/settings/`

- **Operation ID:** `company_settings_partial_update`
- **Summary:** Partially update company settings

### `/3/admin/currencies/{code}/`

- **Operation ID:** `currencies_partial_update`
- **Summary:** Partially update currency

### `/3/admin/document-types/{id}/`

- **Operation ID:** `document_types_partial_update`
- **Summary:** Partially update document type

### `/3/admin/groups/{group_name}/`

- **Operation ID:** `groups_partial_update`
- **Summary:** Partially update group

### `/3/admin/groups/{group_name}/fees/{fee_id}/`

- **Operation ID:** `groups_fees_partial_update`
- **Summary:** Partially group fee

### `/3/admin/groups/{group_name}/permissions/{permission_id}/`

- **Operation ID:** `groups_permissions_partial_update`
- **Summary:** Partially update group permission

### `/3/admin/groups/{group_name}/settings/`

- **Operation ID:** `groups_settings_partial_update`
- **Summary:** Partially update group settings

### `/3/admin/groups/{group_name}/tiers/{tier_id}/`

- **Operation ID:** `groups_tiers_partial_update`
- **Summary:** Partially update group tiers

### `/3/admin/groups/{group_name}/tiers/{tier_id}/fees/{fee_id}/`

- **Operation ID:** `groups_tiers_fees_partial_update`
- **Summary:** Partially update group tier fee

### `/3/admin/groups/{group_name}/tiers/{tier_id}/limits/{limit_id}/`

- **Operation ID:** `groups_tiers_limits_partial_update`
- **Summary:** Partially update group tier limit

### `/3/admin/groups/{group_name}/tiers/{tier_id}/requirement-sets/{req_set_id}/`

- **Operation ID:** `groups_tiers_requirement_sets_partial_update`
- **Summary:** Partially update tier requirement set

### `/3/admin/groups/{group_name}/tiers/{tier_id}/requirement-sets/{req_set_id}/items/{req_item_id}/`

- **Operation ID:** `groups_tiers_requirement_sets_items_partial_update`
- **Summary:** Partially update tier requirement set item

### `/3/admin/groups/{group_name}/tiers/{tier_id}/settings/`

- **Operation ID:** `groups_tiers_settings_partial_update`
- **Summary:** Partially update group tier settings

### `/3/admin/legal-terms/{id}/`

- **Operation ID:** `legal_terms_partial_update`
- **Summary:** Partially update legal terms

### `/3/admin/legal-terms/{term_id}/versions/{version_id}/`

- **Operation ID:** `legal_terms_versions_partial_update`
- **Summary:** Partially update legal terms version

### `/3/admin/oauth-clients/{identifier}/`

- **Operation ID:** `oauth_clients_partial_update`

### `/3/admin/services/{service_id}/`

- **Operation ID:** `services_partial_update`
- **Summary:** Partially update service

### `/3/admin/subtypes/{id}/`

- **Operation ID:** `subtypes_partial_update`
- **Summary:** Partially update subtype

### `/3/admin/transaction-collections/{identifier}/`

- **Operation ID:** `transaction_collections_partial_update`
- **Summary:** Partially update transaction-collection

### `/3/admin/transaction-transitions/{identifier}/`

- **Operation ID:** `transaction_transitions_partial_update`
- **Summary:** Partially update transaction transition

### `/3/admin/transactions/{tx_code}/`

- **Operation ID:** `transactions_partial_update`
- **Summary:** Partially update transaction

### `/3/admin/users/{identifier}/`

- **Operation ID:** `users_partial_update`
- **Summary:** Patially update user

### `/3/admin/users/{identifier}/permissions/{permission_id}/`

- **Operation ID:** `users_permissions_partial_update`
- **Summary:** Partially update user permission

### `/3/admin/users/{identifier}/settings/`

- **Operation ID:** `users_settings_partial_update`
- **Summary:** Partially update user settings

### `/3/admin/users/addresses/{id}/`

- **Operation ID:** `users_addresses_partial_update`
- **Summary:** Partially update user address

### `/3/admin/users/bank-accounts/{id}/`

- **Operation ID:** `users_bank_accounts_partial_update`
- **Summary:** Partially update user bank-account

### `/3/admin/users/crypto-accounts/{id}/`

- **Operation ID:** `users_crypto_accounts_partial_update`
- **Summary:** Partially update user crypto-account

### `/3/admin/users/devices/{device_id}/apps/{app_id}/`

- **Operation ID:** `users_devices_apps_partial_update`
- **Summary:** Partially update user device app

### `/3/admin/users/devices/{id}/`

- **Operation ID:** `users_devices_partial_update`
- **Summary:** Partially update user device

### `/3/admin/users/documents/{id}/`

- **Operation ID:** `users_documents_partial_update`
- **Summary:** Partially update user document

### `/3/admin/users/emails/{id}/`

- **Operation ID:** `users_emails_partial_update`
- **Summary:** Partially update users email

### `/3/admin/users/mobiles/{id}/`

- **Operation ID:** `users_mobiles_partial_update`
- **Summary:** Partially update users mobile

### `/3/admin/users/tokens/{token_key}/`

- **Operation ID:** `users_tokens_partial_update`
- **Summary:** Patially update users token

### `/3/admin/users/wallet-accounts/{id}/`

- **Operation ID:** `users_wallet_accounts_partial_update`
- **Summary:** Partially update users wallte-account

### `/3/admin/wallet-accounts/{id}/`

- **Operation ID:** `wallet_accounts_partial_update`
- **Summary:** Partially update company wallet-account

### `/3/admin/webhooks/{webhhook_id}/`

- **Operation ID:** `webhooks_partial_update`
- **Summary:** Partially update webhook

## DELETE Methods (47)

### `/3/admin/access-control-rules/{id}/`

- **Operation ID:** `access_control_rules_destroy`
- **Summary:** Delete access control rule

### `/3/admin/accounts/{reference}/currencies/{code}/fees/{fee_id}/`

- **Operation ID:** `accounts_currencies_fees_destroy`
- **Summary:** Delete account currency fee

### `/3/admin/accounts/{reference}/currencies/{code}/limits/{limit_id}/`

- **Operation ID:** `accounts_currencies_limits_destroy`
- **Summary:** Delete account currency limits

### `/3/admin/authenticator-rules/{identifier}/`

- **Operation ID:** `authenticator_rules_destroy`
- **Summary:** Delete authenticator rule

### `/3/admin/bank-accounts/{id}/`

- **Operation ID:** `bank_accounts_destroy`
- **Summary:** Delete company bank account

### `/3/admin/bank-accounts/{id}/currencies/{code}/`

- **Operation ID:** `bank_accounts_currencies_destroy`
- **Summary:** Delete company bank account currency

### `/3/admin/company/links/{id}/`

- **Operation ID:** `company_links_destroy`
- **Summary:** Delete company link

### `/3/admin/document-types/{id}/`

- **Operation ID:** `document_types_destroy`
- **Summary:** Delete document type

### `/3/admin/exports/{identifier}/`

- **Operation ID:** `exports_destroy`
- **Summary:** Delete export

### `/3/admin/groups/{group_name}/fees/{fee_id}/`

- **Operation ID:** `groups_fees_destroy`
- **Summary:** Delete group fee

### `/3/admin/groups/{group_name}/permissions/{permission_id}/`

- **Operation ID:** `groups_permissions_destroy`
- **Summary:** Delete group permission

### `/3/admin/groups/{group_name}/tiers/{tier_id}/`

- **Operation ID:** `groups_tiers_destroy`
- **Summary:** Delete group tiers

### `/3/admin/groups/{group_name}/tiers/{tier_id}/fees/{fee_id}/`

- **Operation ID:** `groups_tiers_fees_destroy`
- **Summary:** Delete group tier fee

### `/3/admin/groups/{group_name}/tiers/{tier_id}/limits/{limit_id}/`

- **Operation ID:** `groups_tiers_limits_destroy`
- **Summary:** Delete group tier limit

### `/3/admin/groups/{group_name}/tiers/{tier_id}/requirement-sets/{req_set_id}/`

- **Operation ID:** `groups_tiers_requirement_sets_destroy`
- **Summary:** Delete tier requirement set

### `/3/admin/groups/{group_name}/tiers/{tier_id}/requirement-sets/{req_set_id}/items/{req_item_id}/`

- **Operation ID:** `groups_tiers_requirement_sets_items_destroy`
- **Summary:** Delete tier requirement set item

### `/3/admin/legal-terms/{id}/`

- **Operation ID:** `legal_terms_destroy`
- **Summary:** Delete legal terms

### `/3/admin/legal-terms/{term_id}/versions/{version_id}/`

- **Operation ID:** `legal_terms_versions_destroy`
- **Summary:** Delete legal terms version

### `/3/admin/metrics/{identifier}/`

- **Operation ID:** `metrics_destroy`
- **Summary:** Delete metric

### `/3/admin/oauth-clients/{identifier}/`

- **Operation ID:** `oauth_clients_destroy`

### `/3/admin/services/{service_id}/`

- **Operation ID:** `services_destroy`
- **Summary:** Delete service

### `/3/admin/services/{service_id}/permissions/{permission_id}/`

- **Operation ID:** `services_permissions_destroy`
- **Summary:** Delete service permission

### `/3/admin/statements/{identifier}/`

- **Operation ID:** `statements_destroy`

### `/3/admin/subtypes/{id}/`

- **Operation ID:** `subtypes_destroy`
- **Summary:** Delete subtype

### `/3/admin/users/{identifier}/groups/{group_name}/`

- **Operation ID:** `users_groups_destroy`
- **Summary:** Delete user group

### `/3/admin/users/{identifier}/permissions/{permission_id}/`

- **Operation ID:** `users_permissions_destroy`
- **Summary:** Delete user permission

### `/3/admin/users/addresses/{id}/`

- **Operation ID:** `users_addresses_destroy`
- **Summary:** Delete user address

### `/3/admin/users/bank-accounts/{id}/`

- **Operation ID:** `users_bank_accounts_destroy`
- **Summary:** Delete user bank-account

### `/3/admin/users/bank-accounts/{id}/account-currencies/{account_currency_id}/`

- **Operation ID:** `users_bank_accounts_account_currencies_destroy`
- **Summary:** Delete users bank-account account currency

### `/3/admin/users/bank-accounts/{id}/currencies/{code}/`

- **Operation ID:** `users_bank_accounts_currencies_destroy`
- **Summary:** Delete user bank-account currency

### `/3/admin/users/crypto-accounts/{id}/`

- **Operation ID:** `users_crypto_accounts_destroy`
- **Summary:** Delete user crypto-account

### `/3/admin/users/crypto-accounts/{id}/account-currencies/{account_currency_id}/`

- **Operation ID:** `users_crypto_accounts_account_currencies_destroy`
- **Summary:** Delete users crypto-account account currency

### `/3/admin/users/crypto-accounts/{id}/currencies/{code}/`

- **Operation ID:** `users_crypto_accounts_currencies_destroy`
- **Summary:** Delete user crypto-account currency

### `/3/admin/users/devices/{device_id}/apps/{app_id}/`

- **Operation ID:** `users_devices_apps_destroy`
- **Summary:** Delete user device

### `/3/admin/users/devices/{id}/`

- **Operation ID:** `users_devices_destroy`
- **Summary:** Delete user device

### `/3/admin/users/documents/{id}/`

- **Operation ID:** `users_documents_destroy`
- **Summary:** Delete user document

### `/3/admin/users/emails/{id}/`

- **Operation ID:** `users_emails_destroy`
- **Summary:** Delete users email

### `/3/admin/users/mfa/authenticators/{identifier}/`

- **Operation ID:** `users_mfa_authenticators_destroy`
- **Summary:** Delete mfa authenticator

### `/3/admin/users/mobiles/{id}/`

- **Operation ID:** `users_mobiles_destroy`
- **Summary:** Delete users mobile

### `/3/admin/users/tokens/`

- **Operation ID:** `admin_users_tokens_list_destroy`
- **Summary:** Delete tokens

### `/3/admin/users/tokens/{token_key}/`

- **Operation ID:** `users_tokens_destroy`
- **Summary:** Delete users token

### `/3/admin/users/wallet-accounts/{id}/`

- **Operation ID:** `users_wallet_accounts_destroy`
- **Summary:** Delete users wallet-account

### `/3/admin/users/wallet-accounts/{id}/account-currencies/{account_currency_id}/`

- **Operation ID:** `users_wallet_accounts_account_currencies_destroy`
- **Summary:** Delete users wallet-account account currency

### `/3/admin/users/wallet-accounts/{id}/currencies/{code}/`

- **Operation ID:** `users_wallet_accounts_currencies_destroy`
- **Summary:** Delete users wallet-account currency

### `/3/admin/wallet-accounts/{id}/`

- **Operation ID:** `wallet_accounts_destroy`
- **Summary:** Delete company wallet-account

### `/3/admin/wallet-accounts/{id}/currencies/{code}/`

- **Operation ID:** `wallet_accounts_currencies_destroy`
- **Summary:** Delete company wallet-account currency

### `/3/admin/webhooks/{webhhook_id}/`

- **Operation ID:** `webhooks_destroy`
- **Summary:** Delete webhook

