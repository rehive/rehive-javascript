# Platform User API Methods

**Client:** `platform-user-api`
**Total Methods:** 203

## GET Methods (108)

### `/3/account-currencies/`

- **Operation ID:** `account_currencies_list`
- **Summary:** List account currencies

### `/3/account-definitions/`

- **Operation ID:** `account_definitions_list`
- **Summary:** List account definitions

### `/3/account-definitions/{definition_name}/`

- **Operation ID:** `account_definitions_retrieve`
- **Summary:** Retrieve account definition

### `/3/accounts/`

- **Operation ID:** `accounts_list`
- **Summary:** List accounts

### `/3/accounts/{reference}/`

- **Operation ID:** `accounts_retrieve`
- **Summary:** Retrieve account

### `/3/accounts/{reference}/currencies/`

- **Operation ID:** `accounts_currencies_list`
- **Summary:** List account currencies

### `/3/accounts/{reference}/currencies/{code}/`

- **Operation ID:** `accounts_currencies_retrieve`
- **Summary:** Retrieve account currency

### `/3/accounts/{reference}/currencies/{code}/fees/`

- **Operation ID:** `accounts_currencies_fees_list`
- **Summary:** List account currency fees

### `/3/accounts/{reference}/currencies/{code}/fees/{fee_id}/`

- **Operation ID:** `accounts_currencies_fees_retrieve`
- **Summary:** Retrieve account currency fees

### `/3/accounts/{reference}/currencies/{code}/limits/`

- **Operation ID:** `accounts_currencies_limits_list`
- **Summary:** List account currency limits

### `/3/accounts/{reference}/currencies/{code}/limits/{limit_id}/`

- **Operation ID:** `accounts_currencies_limits_retrieve`
- **Summary:** Retrieve account currency limit

### `/3/auth/`

- **Operation ID:** `auth_retrieve`
- **Summary:** Retrieve auth

### `/3/auth/mfa/authenticators/`

- **Operation ID:** `auth_mfa_authenticators_list`
- **Summary:** List MFA authenticators

### `/3/auth/mfa/authenticators/{identifier}/`

- **Operation ID:** `auth_mfa_authenticators_retrieve`
- **Summary:** Retreieve MFA authenticator

### `/3/auth/tokens/`

- **Operation ID:** `auth_tokens_list`
- **Summary:** List auth tokens

### `/3/auth/tokens/{token_key}/`

- **Operation ID:** `auth_tokens_retrieve`
- **Summary:** Retrieve auth token

### `/3/company/`

- **Operation ID:** `company_retrieve`
- **Summary:** Retrieve company

### `/3/company/bank-accounts/`

- **Operation ID:** `company_bank_accounts_list`
- **Summary:** List bank accounts

### `/3/company/currencies/`

- **Operation ID:** `company_currencies_list`
- **Summary:** List currencies

### `/3/company/currencies/{code}/`

- **Operation ID:** `company_currencies_retrieve`
- **Summary:** Retrieve currency

### `/3/company/wallet-accounts/`

- **Operation ID:** `company_wallet_accounts_list`
- **Summary:** List wallet accounts

### `/3/document-types/`

- **Operation ID:** `document_types_list`
- **Summary:** List document types

### `/3/document-types/{id}/`

- **Operation ID:** `document_types_retrieve`
- **Summary:** Retrieve document type

### `/3/exports/`

- **Operation ID:** `exports_list`
- **Summary:** List exports

### `/3/exports/{identifier}/`

- **Operation ID:** `exports_retrieve`
- **Summary:** Retrieve export

### `/3/groups/`

- **Operation ID:** `groups_list`
- **Summary:** List groups

### `/3/groups/{group_name}/`

- **Operation ID:** `groups_retrieve`
- **Summary:** Retrieve group

### `/3/groups/{group_name}/fees/`

- **Operation ID:** `groups_fees_list`
- **Summary:** List fees

### `/3/groups/{group_name}/fees/{fee_id}/`

- **Operation ID:** `groups_fees_retrieve`
- **Summary:** Retrieve fee

### `/3/groups/{group_name}/permissions/`

- **Operation ID:** `groups_permissions_list`
- **Summary:** List permissions

### `/3/groups/{group_name}/permissions/{permission_id}/`

- **Operation ID:** `groups_permissions_retrieve`
- **Summary:** Retrieve permission

### `/3/groups/{group_name}/tiers/`

- **Operation ID:** `groups_tiers_list`
- **Summary:** List tiers

### `/3/groups/{group_name}/tiers/{tier_id}/`

- **Operation ID:** `groups_tiers_retrieve`
- **Summary:** Retrieve tier

### `/3/groups/{group_name}/tiers/{tier_id}/fees/`

- **Operation ID:** `groups_tiers_fees_list`
- **Summary:** List tier fees

### `/3/groups/{group_name}/tiers/{tier_id}/fees/{fee_id}/`

- **Operation ID:** `groups_tiers_fees_retrieve`
- **Summary:** Retrieve tier fee

### `/3/groups/{group_name}/tiers/{tier_id}/limits/`

- **Operation ID:** `groups_tiers_limits_list`
- **Summary:** List tier limits

### `/3/groups/{group_name}/tiers/{tier_id}/limits/{limit_id}/`

- **Operation ID:** `groups_tiers_limits_retrieve`
- **Summary:** Retrieve tier limit

### `/3/groups/{group_name}/tiers/{tier_id}/requirement-sets/`

- **Operation ID:** `groups_tiers_requirement_sets_list`
- **Summary:** List tier requirement sets

### `/3/groups/{group_name}/tiers/{tier_id}/requirement-sets/{req_set_id}/`

- **Operation ID:** `groups_tiers_requirement_sets_retrieve`
- **Summary:** Retrieve tier requirement set

### `/3/groups/{group_name}/tiers/{tier_id}/requirement-sets/{req_set_id}/items/`

- **Operation ID:** `groups_tiers_requirement_sets_items_list`
- **Summary:** List tier requirement set items

### `/3/groups/{group_name}/tiers/{tier_id}/requirement-sets/{req_set_id}/items/{req_item_id}/`

- **Operation ID:** `groups_tiers_requirement_sets_items_retrieve`
- **Summary:** Retrieve tier requirement set item

### `/3/metrics/`

- **Operation ID:** `metrics_list`
- **Summary:** List metric

### `/3/metrics/{identifier}/`

- **Operation ID:** `metrics_retrieve`
- **Summary:** Retrieve metric

### `/3/metrics/{identifier}/points/`

- **Operation ID:** `metrics_points_list`
- **Summary:** List metric points

### `/3/permissions/`

- **Operation ID:** `permissions_list`
- **Summary:** List permissions

### `/3/permissions/{permission_id}/`

- **Operation ID:** `permissions_retrieve`
- **Summary:** Retrieve permission

### `/3/public/companies/`

- **Operation ID:** `public_companies_list`
- **Summary:** List public companies

### `/3/public/companies/{id}/`

- **Operation ID:** `public_companies_retrieve`
- **Summary:** Retrieve public company

### `/3/public/companies/{id}/groups/`

- **Operation ID:** `public_companies_groups_list`
- **Summary:** List public company groups

### `/3/public/companies/{id}/groups/{group_name}/`

- **Operation ID:** `public_companies_groups_retrieve`
- **Summary:** Retrieve public company group

### `/3/public/companies/{id}/legal-terms/`

- **Operation ID:** `public_companies_legal_terms_list`
- **Summary:** List public company legal terms

### `/3/public/companies/{id}/legal-terms/{term_id}/`

- **Operation ID:** `public_companies_legal_terms_retrieve`
- **Summary:** Retrieve public company legal terms

### `/3/public/companies/{id}/legal-terms/{term_id}/versions/`

- **Operation ID:** `public_companies_legal_terms_versions_list`
- **Summary:** List public company legal term versions

### `/3/public/companies/{id}/legal-terms/{term_id}/versions/{version_id}/`

- **Operation ID:** `public_companies_legal_terms_versions_retrieve`
- **Summary:** Retrieve public company legal term version

### `/3/public/companies/{id}/oauth-clients/`

- **Operation ID:** `public_companies_oauth_clients_list`

### `/3/public/companies/{id}/oauth-clients/{identifier}/`

- **Operation ID:** `public_companies_oauth_clients_retrieve`

### `/3/public/legal-terms/`

- **Operation ID:** `public_legal_terms_list`
- **Summary:** List public legal terms

### `/3/public/legal-terms/{term_id}/`

- **Operation ID:** `public_legal_terms_retrieve`
- **Summary:** Retrieve public legal terms

### `/3/public/legal-terms/{term_id}/versions/`

- **Operation ID:** `public_legal_terms_versions_list`
- **Summary:** List public legal term versions

### `/3/public/legal-terms/{term_id}/versions/{version_id}/`

- **Operation ID:** `public_legal_terms_versions_retrieve`
- **Summary:** Retrieve public legal term version

### `/3/statements/`

- **Operation ID:** `statements_list`

### `/3/statements/{identifier}/`

- **Operation ID:** `statements_retrieve`

### `/3/subtypes/`

- **Operation ID:** `subtypes_list`
- **Summary:** List subtypes

### `/3/subtypes/{id}/`

- **Operation ID:** `subtypes_retrieve`
- **Summary:** Retrieve subtype

### `/3/transaction-collections/`

- **Operation ID:** `transaction_collections_list`
- **Summary:** List transaction collections

### `/3/transaction-collections/{identifier}/`

- **Operation ID:** `transaction_collections_retrieve`
- **Summary:** Retrieve transaction collection

### `/3/transactions/`

- **Operation ID:** `transactions_list`
- **Summary:** List transactions

### `/3/transactions/{tx_code}/`

- **Operation ID:** `transactions_retrieve`
- **Summary:** Retrieve transaction

### `/3/transactions/{tx_code}/messages/`

- **Operation ID:** `transactions_messages_list`
- **Summary:** List transaction messages

### `/3/transactions/{tx_code}/messages/{id}/`

- **Operation ID:** `transactions_messages_retrieve`
- **Summary:** Retrieve transaction message

### `/3/transactions/totals/`

- **Operation ID:** `transaction_totals_retrieve`
- **Summary:** Retrieve transaction totals

### `/3/user/`

- **Operation ID:** `user_retrieve`
- **Summary:** Retrieve user

### `/3/user/addresses/`

- **Operation ID:** `user_addresses_list`
- **Summary:** List addresses

### `/3/user/addresses/{id}/`

- **Operation ID:** `user_addresses_retrieve`
- **Summary:** Retrieve address

### `/3/user/bank-accounts/`

- **Operation ID:** `user_bank_accounts_list`
- **Summary:** List bank accounts

### `/3/user/bank-accounts/{id}/`

- **Operation ID:** `user_bank_accounts_retrieve`
- **Summary:** Retrieve bank account

### `/3/user/bank-accounts/{id}/account-currencies/`

- **Operation ID:** `user_bank_accounts_account_currencies_list`
- **Summary:** List bank-accounts account currencies

### `/3/user/bank-accounts/{id}/account-currencies/{account_currency_id}/`

- **Operation ID:** `user_bank_accounts_account_currencies_retrieve`
- **Summary:** Retrieve bank-account account currency

### `/3/user/bank-accounts/{id}/currencies/`

- **Operation ID:** `user_bank_accounts_currencies_list`
- **Summary:** List bank account currencies

### `/3/user/bank-accounts/{id}/currencies/{code}/`

- **Operation ID:** `user_bank_accounts_currencies_retrieve`
- **Summary:** Retrieve bank account currency

### `/3/user/crypto-accounts/`

- **Operation ID:** `user_crypto_accounts_list`
- **Summary:** List crypto accounts

### `/3/user/crypto-accounts/{id}/`

- **Operation ID:** `user_crypto_accounts_retrieve`
- **Summary:** Retrieve crypto account

### `/3/user/crypto-accounts/{id}/account-currencies/`

- **Operation ID:** `user_crypto_accounts_account_currencies_list`
- **Summary:** List crypto-accounts account currencies

### `/3/user/crypto-accounts/{id}/account-currencies/{account_currency_id}/`

- **Operation ID:** `user_crypto_accounts_account_currencies_retrieve`
- **Summary:** Retrieve crypto-account account currency

### `/3/user/crypto-accounts/{id}/currencies/`

- **Operation ID:** `user_crypto_accounts_currencies_list`
- **Summary:** List crypto account currencies

### `/3/user/crypto-accounts/{id}/currencies/{code}/`

- **Operation ID:** `user_crypto_accounts_currencies_retrieve`
- **Summary:** Retrieve crypto account currency

### `/3/user/devices/`

- **Operation ID:** `user_devices_list`
- **Summary:** List devices

### `/3/user/devices/{device_id}/apps/{app_id}/`

- **Operation ID:** `user_devices_apps_retrieve`
- **Summary:** Retrieve device app

### `/3/user/devices/{id}/`

- **Operation ID:** `user_devices_retrieve`
- **Summary:** Retrieve device

### `/3/user/devices/{id}/apps/`

- **Operation ID:** `user_devices_apps_list`
- **Summary:** List device apps

### `/3/user/documents/`

- **Operation ID:** `user_documents_list`
- **Summary:** List documents

### `/3/user/documents/{id}/`

- **Operation ID:** `user_documents_retrieve`
- **Summary:** Retrieve document

### `/3/user/emails/`

- **Operation ID:** `user_emails_list`
- **Summary:** List emails

### `/3/user/emails/{id}/`

- **Operation ID:** `user_emails_retrieve`
- **Summary:** Retrieve email

### `/3/user/legal-terms/`

- **Operation ID:** `user_legal_terms_list`
- **Summary:** List legal terms

### `/3/user/legal-terms/{id}/`

- **Operation ID:** `user_legal_terms_retrieve`
- **Summary:** Retrieve legal term

### `/3/user/legal-terms/{id}/versions/`

- **Operation ID:** `user_legal_terms_versions_list`
- **Summary:** List legal term version

### `/3/user/legal-terms/{term_id}/versions/{version_id}/`

- **Operation ID:** `user_legal_terms_versions_retrieve`
- **Summary:** Retrieve legal term version

### `/3/user/messages/`

- **Operation ID:** `user_messages_list`
- **Summary:** List messages

### `/3/user/messages/{id}/`

- **Operation ID:** `user_messages_retrieve`
- **Summary:** Retrieve message

### `/3/user/mobiles/`

- **Operation ID:** `user_mobiles_list`
- **Summary:** List mobiles

### `/3/user/mobiles/{id}/`

- **Operation ID:** `user_mobiles_retrieve`
- **Summary:** Retrieve mobile

### `/3/user/wallet-accounts/`

- **Operation ID:** `user_wallet_accounts_list`
- **Summary:** List wallet accounts

### `/3/user/wallet-accounts/{id}/`

- **Operation ID:** `user_wallet_accounts_retrieve`
- **Summary:** Retrieve wallet account

### `/3/user/wallet-accounts/{id}/account-currencies/`

- **Operation ID:** `user_wallet_accounts_account_currencies_list`
- **Summary:** List wallet-accounts account currencies

### `/3/user/wallet-accounts/{id}/account-currencies/{account_currency_id}/`

- **Operation ID:** `user_wallet_accounts_account_currencies_retrieve`
- **Summary:** Retrieve wallet-account account currency

### `/3/user/wallet-accounts/{id}/currencies/`

- **Operation ID:** `user_wallet_accounts_currencies_list`
- **Summary:** List wallet account currencies

### `/3/user/wallet-accounts/{id}/currencies/{code}/`

- **Operation ID:** `user_wallet_accounts_currencies_retrieve`
- **Summary:** Retrieve wallet account currency

## POST Methods (51)

### `/3/accounts/`

- **Operation ID:** `accounts_create`
- **Summary:** Create account

### `/3/accounts/{reference}/currencies/`

- **Operation ID:** `accounts_currencies_create`
- **Summary:** Create account currency

### `/3/auth/company/register/`

- **Operation ID:** `auth_register_company`
- **Summary:** Register company

### `/3/auth/deactivate/`

- **Operation ID:** `auth_deactivate`
- **Summary:** Deactivate

### `/3/auth/deactivate/verify/`

- **Operation ID:** `auth_deactivate_verify`
- **Summary:** Verify deactivation

### `/3/auth/email/verify/`

- **Operation ID:** `auth_email_verify`
- **Summary:** Verify email

### `/3/auth/email/verify/resend/`

- **Operation ID:** `auth_email_verify_resend`
- **Summary:** Resend email verify

### `/3/auth/jwt/`

- **Operation ID:** `auth_jwt_create`

### `/3/auth/login/`

- **Operation ID:** `auth_login`
- **Summary:** Login

### `/3/auth/logout/`

- **Operation ID:** `auth_logout`
- **Summary:** Logout

### `/3/auth/mfa/authenticators/`

- **Operation ID:** `auth_mfa_authenticators_create`
- **Summary:** Create MFA authenticator

### `/3/auth/mfa/deliver/`

- **Operation ID:** `auth_mfa_deliver`
- **Summary:** Deliver MFA

### `/3/auth/mfa/verify/`

- **Operation ID:** `auth_mfa_verify`
- **Summary:** Verify MFA

### `/3/auth/mobile/verify/`

- **Operation ID:** `auth_mobile_verify`
- **Summary:** Verify mobile

### `/3/auth/mobile/verify/resend/`

- **Operation ID:** `auth_mobile_verify_resend`
- **Summary:** Resend mobile verify

### `/3/auth/oauth/authorize/`

- **Operation ID:** `auth_oauth_authorize_create`

### `/3/auth/oauth/login/`

- **Operation ID:** `auth_oauth_login_create`

### `/3/auth/oauth/register/`

- **Operation ID:** `auth_oauth_register_create`

### `/3/auth/oauth/session/`

- **Operation ID:** `auth_oauth_session_create`

### `/3/auth/oauth/verify/`

- **Operation ID:** `auth_oauth_verify_create`

### `/3/auth/password/change/`

- **Operation ID:** `auth_password_change`
- **Summary:** Change password

### `/3/auth/password/reset/`

- **Operation ID:** `auth_password_reset`
- **Summary:** Reset password

### `/3/auth/password/reset/confirm/`

- **Operation ID:** `auth_password_reset_confirm`
- **Summary:** Confirm password reset

### `/3/auth/refresh/`

- **Operation ID:** `auth_refresh_create`

### `/3/auth/register/`

- **Operation ID:** `auth_register`
- **Summary:** Register

### `/3/auth/request-delete/`

- **Operation ID:** `auth_request_delete`
- **Summary:** Request delete

### `/3/auth/request-delete/verify/`

- **Operation ID:** `auth_request_delete_verify`
- **Summary:** Verify request delete

### `/3/auth/tokens/`

- **Operation ID:** `auth_tokens_create`
- **Summary:** Create auth token

### `/3/exports/`

- **Operation ID:** `exports_create`
- **Summary:** Create export

### `/3/metrics/`

- **Operation ID:** `metrics_create`
- **Summary:** Create metric

### `/3/statements/`

- **Operation ID:** `statements_create`

### `/3/transaction-collections/`

- **Operation ID:** `transaction_collections_create`
- **Summary:** Create transaction collection

### `/3/transactions/`

- **Operation ID:** `transactions_create`
- **Summary:** Create transaction

### `/3/transactions/credit/`

- **Operation ID:** `transactions_credit_create`
- **Summary:** Create credit transaction

### `/3/transactions/debit/`

- **Operation ID:** `transactions_debit_create`
- **Summary:** Create debit transaction

### `/3/transactions/transfer/`

- **Operation ID:** `transactions_transfer_create`
- **Summary:** Create transfer

### `/3/user/addresses/`

- **Operation ID:** `user_addresses_create`
- **Summary:** Create address

### `/3/user/bank-accounts/`

- **Operation ID:** `user_bank_accounts_create`
- **Summary:** Create bank account

### `/3/user/bank-accounts/{id}/account-currencies/`

- **Operation ID:** `user_bank_accounts_account_currencies_create`
- **Summary:** Create bank-accounts account currency

### `/3/user/bank-accounts/{id}/currencies/`

- **Operation ID:** `user_bank_accounts_currencies_create`
- **Summary:** Create bank account currency

### `/3/user/crypto-accounts/`

- **Operation ID:** `user_crypto_accounts_create`
- **Summary:** Create crypto account

### `/3/user/crypto-accounts/{id}/account-currencies/`

- **Operation ID:** `user_crypto_accounts_account_currencies_create`
- **Summary:** Create crypto-accounts account currency

### `/3/user/crypto-accounts/{id}/currencies/`

- **Operation ID:** `user_crypto_accounts_currencies_create`
- **Summary:** Create crypto account currency

### `/3/user/devices/`

- **Operation ID:** `user_devices_create`
- **Summary:** Create device

### `/3/user/devices/{id}/apps/`

- **Operation ID:** `user_devices_apps_create`
- **Summary:** Create device app

### `/3/user/documents/`

- **Operation ID:** `user_documents_create`
- **Summary:** Create document

### `/3/user/emails/`

- **Operation ID:** `user_emails_create`
- **Summary:** Create email

### `/3/user/mobiles/`

- **Operation ID:** `user_mobiles_create`
- **Summary:** Create mobile

### `/3/user/wallet-accounts/`

- **Operation ID:** `user_wallet_accounts_create`
- **Summary:** Create wallet account

### `/3/user/wallet-accounts/{id}/account-currencies/`

- **Operation ID:** `user_wallet_accounts_account_currencies_create`
- **Summary:** Create wallet-accounts account currency

### `/3/user/wallet-accounts/{id}/currencies/`

- **Operation ID:** `user_wallet_accounts_currencies_create`
- **Summary:** Create wallet account currency

## PUT Methods (12)

### `/3/accounts/{reference}/currencies/{code}/`

- **Operation ID:** `accounts_currencies_update`
- **Summary:** Update account currency

### `/3/transactions/{tx_code}/`

- **Operation ID:** `transactions_update`
- **Summary:** Update transaction

### `/3/user/`

- **Operation ID:** `user_update`
- **Summary:** Update user

### `/3/user/addresses/{id}/`

- **Operation ID:** `user_addresses_update`
- **Summary:** Update address

### `/3/user/bank-accounts/{id}/`

- **Operation ID:** `user_bank_accounts_update`
- **Summary:** Update bank account

### `/3/user/crypto-accounts/{id}/`

- **Operation ID:** `user_crypto_accounts_update`
- **Summary:** Update crypto account

### `/3/user/devices/{device_id}/apps/{app_id}/`

- **Operation ID:** `user_devices_apps_update`
- **Summary:** Update device app

### `/3/user/devices/{id}/`

- **Operation ID:** `user_devices_update`
- **Summary:** Update device

### `/3/user/emails/{id}/`

- **Operation ID:** `user_emails_update`
- **Summary:** Update email

### `/3/user/legal-terms/{term_id}/versions/{version_id}/`

- **Operation ID:** `user_legal_terms_versions_update`
- **Summary:** Update legal term version

### `/3/user/mobiles/{id}/`

- **Operation ID:** `user_mobiles_update`
- **Summary:** Update mobile

### `/3/user/wallet-accounts/{id}/`

- **Operation ID:** `user_wallet_accounts_update`
- **Summary:** Update wallet account

## PATCH Methods (12)

### `/3/accounts/{reference}/currencies/{code}/`

- **Operation ID:** `accounts_currencies_partial_update`
- **Summary:** Partially update account currency

### `/3/transactions/{tx_code}/`

- **Operation ID:** `transactions_partial_update`
- **Summary:** Partially update transaction

### `/3/user/`

- **Operation ID:** `user_partial_update`
- **Summary:** Partially update user

### `/3/user/addresses/{id}/`

- **Operation ID:** `user_addresses_partial_update`
- **Summary:** Partially update address

### `/3/user/bank-accounts/{id}/`

- **Operation ID:** `user_bank_accounts_partial_update`
- **Summary:** Partially update bank account

### `/3/user/crypto-accounts/{id}/`

- **Operation ID:** `user_crypto_accounts_partial_update`
- **Summary:** Partially update crypto account

### `/3/user/devices/{device_id}/apps/{app_id}/`

- **Operation ID:** `user_devices_apps_partial_update`
- **Summary:** Partially update device app

### `/3/user/devices/{id}/`

- **Operation ID:** `user_devices_partial_update`
- **Summary:** Partially update device

### `/3/user/emails/{id}/`

- **Operation ID:** `user_emails_partial_update`
- **Summary:** Partially update email

### `/3/user/legal-terms/{term_id}/versions/{version_id}/`

- **Operation ID:** `user_legal_terms_versions_partial_update`
- **Summary:** Partially update legal term version

### `/3/user/mobiles/{id}/`

- **Operation ID:** `user_mobiles_partial_update`
- **Summary:** Partially update mobile

### `/3/user/wallet-accounts/{id}/`

- **Operation ID:** `user_wallet_accounts_partial_update`
- **Summary:** Partially update wallet account

## DELETE Methods (20)

### `/3/auth/mfa/authenticators/{identifier}/`

- **Operation ID:** `auth_mfa_authenticators_destroy`
- **Summary:** Delete MFA authenticator

### `/3/auth/tokens/`

- **Operation ID:** `auth_tokens_list_destroy`
- **Summary:** Delete auth tokens

### `/3/auth/tokens/{token_key}/`

- **Operation ID:** `auth_tokens_destroy`
- **Summary:** Delete auth token

### `/3/metrics/{identifier}/`

- **Operation ID:** `metrics_destroy`
- **Summary:** Delete metric

### `/3/statements/{identifier}/`

- **Operation ID:** `statements_destroy`

### `/3/user/addresses/{id}/`

- **Operation ID:** `user_addresses_destroy`
- **Summary:** Delete address

### `/3/user/bank-accounts/{id}/`

- **Operation ID:** `user_bank_accounts_destroy`
- **Summary:** Delete bank account

### `/3/user/bank-accounts/{id}/account-currencies/{account_currency_id}/`

- **Operation ID:** `user_bank_accounts_account_currencies_destroy`
- **Summary:** Delete bank-account account currency

### `/3/user/bank-accounts/{id}/currencies/{code}/`

- **Operation ID:** `user_bank_accounts_currencies_destroy`
- **Summary:** Delete bank account currency

### `/3/user/crypto-accounts/{id}/`

- **Operation ID:** `user_crypto_accounts_destroy`
- **Summary:** Delete crypto account

### `/3/user/crypto-accounts/{id}/account-currencies/{account_currency_id}/`

- **Operation ID:** `user_crypto_accounts_account_currencies_destroy`
- **Summary:** Delete crypto-account account currency

### `/3/user/crypto-accounts/{id}/currencies/{code}/`

- **Operation ID:** `user_crypto_accounts_currencies_destroy`
- **Summary:** Delete crypto account currency

### `/3/user/devices/{device_id}/apps/{app_id}/`

- **Operation ID:** `user_devices_apps_destroy`
- **Summary:** Delete device app

### `/3/user/devices/{id}/`

- **Operation ID:** `user_devices_destroy`
- **Summary:** Delete device

### `/3/user/documents/{id}/`

- **Operation ID:** `user_documents_destroy`

### `/3/user/emails/{id}/`

- **Operation ID:** `user_emails_destroy`
- **Summary:** Delete email

### `/3/user/mobiles/{id}/`

- **Operation ID:** `user_mobiles_destroy`
- **Summary:** Delete mobile

### `/3/user/wallet-accounts/{id}/`

- **Operation ID:** `user_wallet_accounts_destroy`
- **Summary:** Delete wallet account

### `/3/user/wallet-accounts/{id}/account-currencies/{account_currency_id}/`

- **Operation ID:** `user_wallet_accounts_account_currencies_destroy`
- **Summary:** Delete wallet-account account currency

### `/3/user/wallet-accounts/{id}/currencies/{code}/`

- **Operation ID:** `user_wallet_accounts_currencies_destroy`
- **Summary:** Delete wallet account currency

