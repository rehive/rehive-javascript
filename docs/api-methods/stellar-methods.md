# Stellar Mainnet Extension Methods

**Client:** `stellar-api`
**Total Methods:** 101

## POST Methods (31)

### `/activate/`

- **Operation ID:** `activate_create`
- **Description:** This endpoint is used by the Rehive Marketplace to add this service for a specific company. It requires an permanent API token for that company with admin permissions.

### `/admin/asset/`

- **Operation ID:** `admin_asset_create`
- **Description:** Add a new stellar asset to the service, or list existing assets. You'll need to include a valid stellar anchor issuing address and asset ID.

### `/admin/asset/{id}/authorise_holder/`

- **Operation ID:** `admin_asset_authorise_holder_create`
- **Description:** A simple APIView for funding asset accounts.

### `/admin/asset/{id}/fund/`

- **Operation ID:** `admin_asset_fund_create`
- **Description:** A simple APIView for funding asset accounts.

### `/admin/blacklisted-accounts/`

- **Operation ID:** `admin_blacklisted-accounts_create`

### `/admin/coldstorage/accounts/`

- **Operation ID:** `admin_coldstorage_accounts_create`
- **Description:** ### List or create coldstorage accounts for monitoring

### `/admin/company/configuration/account-groups/`

- **Operation ID:** `admin_company_configuration_account-groups_create`
- **Description:** Group/Account Pairs specified for the company

### `/admin/federation/`

- **Operation ID:** `admin_federation_create`
- **Description:** ### View or update a Stellar Account

### `/admin/hotwallet/`

- **Operation ID:** `admin_hotwallet_create`
- **Description:** ### View, create and update the hot wallet

### `/admin/hotwallet/enable_mss/`

- **Operation ID:** `admin_hotwallet_enable_mss_create`
- **Description:** A simple APIView for funding asset accounts.

### `/admin/hotwallet/merge/`

- **Operation ID:** `admin_hotwallet_merge_create`
- **Description:** ### Merges and deletes the current hotwallet

### `/admin/hotwallet/send/`

- **Operation ID:** `admin_hotwallet_send_create`
- **Description:** ### Sends an onchain transactions directly from the Hotwallet

### `/admin/known-public-addresses/`

- **Operation ID:** `admin_known-public-addresses_create`

### `/admin/memos/`

- **Operation ID:** `admin_memos_create`

### `/admin/stellar_accounts/generate/`

- **Operation ID:** `admin_stellar_accounts_generate_create`
- **Description:** ### View or update a Stellar Account

### `/admin/stellar_accounts/{id}/change_ownership/`

- **Operation ID:** `admin_stellar_accounts_change_ownership_create`
- **Description:** ### Change the ownership of a service generated account
### Adds a new primary signer and removes the services secret as a signer

### `/admin/transactions/send/`

- **Operation ID:** `admin_transactions_send_create`
- **Description:** View for sending assets directly out of the hotwallet account

### `/admin/users/`

- **Operation ID:** `admin_users_create`
- **Description:** ### List users

### `/admin/users/{id}/memos/`

- **Operation ID:** `admin_users_memos_create`

### `/admin/warmstorage/accounts/`

- **Operation ID:** `admin_warmstorage_accounts_create`
- **Description:** ### List or create warmstorage accounts for monitoring

### `/deactivate/`

- **Operation ID:** `deactivate_create`
- **Description:** This endpoint is used by the Rehive Marketplace to remove this service for a specific company. It requires a permanent API token for that company.

### `/hooks/prs/`

- **Operation ID:** `hooks_prs_create`

### `/transactions/send/`

- **Operation ID:** `transactions_send_create`
- **Description:** Create the send transaction on Rehive, and/or on the stellar blockchain. When the an email address, the transaction will be handled off-chain, only on the rehive ledger. When sent to a stellar address, the transaction is created on Rehive. Rehive then sends a webhook to the /hooks/debit/ endpoint and a blockchain transaction is created and broadcasted.

### `/user/anchor/sessions/{session_id}/validate/`

- **Operation ID:** `user_anchor_sessions_validate_create`
- **Description:** ### Endpoint for validating a specific session id using a valid Rehive user session

### `/user/anchor/sessions/{session_id}/validate_account/`

- **Operation ID:** `user_anchor_sessions_validate_account_create`
- **Description:** ### Endpoint for validating a specific session id using a valid Rehive user session

### `/user/anchor/sessions/{session_id}/validate_session/`

- **Operation ID:** `user_anchor_sessions_validate_session_create`
- **Description:** ### Endpoint for validating a specific session id using a valid Rehive user session

### `/user/anchor/transactions/{transaction_id}/`

- **Operation ID:** `user_anchor_transactions_create`
- **Description:** ### Endpoint for viewing all user SEP-10 sessions

### `/user/anchor/{company_id}/auth/`

- **Operation ID:** `user_anchor_auth_create`
- **Description:** ### Endpoint for generating a new unvalidated authentication session using a SEP 10 JWT

### `/user/memos/`

- **Operation ID:** `user_memos_create`

### `/user/transactions/send/`

- **Operation ID:** `user_transactions_send_create`
- **Description:** Create the send transaction on Rehive, and/or on the stellar blockchain. When the an email address, the transaction will be handled off-chain, only on the rehive ledger. When sent to a stellar address, the transaction is created on Rehive. Rehive then sends a webhook to the /hooks/debit/ endpoint and a blockchain transaction is created and broadcasted.

### `/user/username/set/`

- **Operation ID:** `user_username_set_create`

## GET Methods (47)

### `/admin/asset/`

- **Operation ID:** `admin_asset_list`
- **Description:** Add a new stellar asset to the service, or list existing assets. You'll need to include a valid stellar anchor issuing address and asset ID.

### `/admin/asset/{id}/`

- **Operation ID:** `admin_asset_read`

### `/admin/blacklisted-account/{id}/`

- **Operation ID:** `admin_blacklisted-account_read`

### `/admin/blacklisted-accounts/`

- **Operation ID:** `admin_blacklisted-accounts_list`

### `/admin/coldstorage/`

- **Operation ID:** `admin_coldstorage_list`
- **Description:** ### View coldstorage balance

### `/admin/coldstorage/accounts/`

- **Operation ID:** `admin_coldstorage_accounts_list`
- **Description:** ### List or create coldstorage accounts for monitoring

### `/admin/coldstorage/accounts/{id}/`

- **Operation ID:** `admin_coldstorage_accounts_read`
- **Description:** ### View or update a cold storage account

### `/admin/company/`

- **Operation ID:** `admin_company_list`
- **Description:** Details of Rehive company that was added via the /activate/ endpoint.

### `/admin/company/configuration/`

- **Operation ID:** `admin_company_configuration_list`
- **Description:** Details of Rehive company that was added via the /activate/ endpoint.

### `/admin/company/configuration/account-groups/`

- **Operation ID:** `admin_company_configuration_account-groups_list`
- **Description:** Group/Account Pairs specified for the company

### `/admin/company/configuration/account-groups/{id}/`

- **Operation ID:** `admin_company_configuration_account-groups_read`
- **Description:** Details for a Group/Account pair

### `/admin/company/configuration/anchor_platform/`

- **Operation ID:** `admin_company_configuration_anchor_platform_list`
- **Description:** Details of Rehive company that was added via the /activate/ endpoint.

### `/admin/company/stellar-toml/`

- **Operation ID:** `admin_company_stellar-toml_list`
- **Description:** Create and sends back a link to a Stellar.toml file

### `/admin/federation/`

- **Operation ID:** `admin_federation_list`
- **Description:** ### View or update a Stellar Account

### `/admin/hotwallet/`

- **Operation ID:** `admin_hotwallet_list`
- **Description:** ### View, create and update the hot wallet

### `/admin/hotwallet/active/`

- **Operation ID:** `admin_hotwallet_active_list`
- **Description:** ### View hotwallet balance

### `/admin/hotwallet/fees/`

- **Operation ID:** `admin_hotwallet_fees_list`
- **Description:** ### View hotwallet balance

### `/admin/hotwallet/fund/`

- **Operation ID:** `admin_hotwallet_fund_list`
- **Description:** View and update company. Authenticates requests using a token in the
Authorization header.

### `/admin/known-public-addresses/`

- **Operation ID:** `admin_known-public-addresses_list`

### `/admin/known-public-addresses/{id}/`

- **Operation ID:** `admin_known-public-addresses_read`

### `/admin/memos/`

- **Operation ID:** `admin_memos_list`

### `/admin/sep10-authenticated-accounts/`

- **Operation ID:** `admin_sep10-authenticated-accounts_list`
- **Description:** ### List transactions

### `/admin/sep10-authenticated-accounts/{id}/`

- **Operation ID:** `admin_sep10-authenticated-accounts_read`
- **Description:** ### GET a single SEP10AuthenticatedAccount object

### `/admin/sep24-transactions/`

- **Operation ID:** `admin_sep24-transactions_list`
- **Description:** ### List all SEP24Transaction objects

### `/admin/sep24-transactions/{id}/`

- **Operation ID:** `admin_sep24-transactions_read`
- **Description:** ### GET a single SEP24Transaction object

### `/admin/stellar_accounts/`

- **Operation ID:** `admin_stellar_accounts_list`
- **Description:** ### List stellar accounts

### `/admin/stellar_accounts/{id}/`

- **Operation ID:** `admin_stellar_accounts_read`
- **Description:** ### View or update a Stellar Account

### `/admin/transactions/`

- **Operation ID:** `admin_transactions_list`
- **Description:** ### List transactions

### `/admin/transactions/{id}/`

- **Operation ID:** `admin_transactions_read`
- **Description:** ### GET and PATCH a single transaction on the Stellar service

### `/admin/users/`

- **Operation ID:** `admin_users_list`
- **Description:** ### List users

### `/admin/users/{id}/`

- **Operation ID:** `admin_users_read`
- **Description:** ### List users

### `/admin/users/{id}/memos/`

- **Operation ID:** `admin_users_memos_list`

### `/admin/warmstorage/`

- **Operation ID:** `admin_warmstorage_list`
- **Description:** ### View warmstorage balance

### `/admin/warmstorage/accounts/`

- **Operation ID:** `admin_warmstorage_accounts_list`
- **Description:** ### List or create warmstorage accounts for monitoring

### `/admin/warmstorage/accounts/{id}/`

- **Operation ID:** `admin_warmstorage_accounts_read`
- **Description:** ### View or update a warm storage account

### `/company/`

- **Operation ID:** `company_list`
- **Description:** Public details of the Rehive company that was added via the /activate/ endpoint.

### `/company/assets/`

- **Operation ID:** `company_assets_list`
- **Description:** Add a new stellar asset to the service, or list existing assets. You'll need to include a valid stellar anchor issuing address and asset ID.

### `/info/`

- **Operation ID:** `info_list`
- **Description:** Returns node and network data for the service

### `/known-assets/`

- **Operation ID:** `known-assets_list`
- **Description:** Returns node and network data for the service

### `/stellar_federation/{company}/`

- **Operation ID:** `stellar_federation_read`

### `/transactions/`

- **Operation ID:** `transactions_list`
- **Description:** ### List transactions

### `/user/`

- **Operation ID:** `user_list`

### `/user/account/`

- **Operation ID:** `user_account_list`

### `/user/anchor/transactions/`

- **Operation ID:** `user_anchor_transactions_list`
- **Description:** ### Endpoint for viewing all user SEP-10 sessions

### `/user/anchor/transactions/{transaction_id}/`

- **Operation ID:** `user_anchor_transactions_read`
- **Description:** ### Endpoint for viewing all user SEP-10 sessions

### `/user/known-public-addresses/`

- **Operation ID:** `user_known-public-addresses_list`

### `/user/memos/`

- **Operation ID:** `user_memos_list`

## PATCH Methods (15)

### `/admin/asset/{id}/`

- **Operation ID:** `admin_asset_partial_update`

### `/admin/blacklisted-account/{id}/`

- **Operation ID:** `admin_blacklisted-account_partial_update`

### `/admin/coldstorage/accounts/{id}/`

- **Operation ID:** `admin_coldstorage_accounts_partial_update`
- **Description:** ### View or update a cold storage account

### `/admin/company/`

- **Operation ID:** `admin_company_partial_update`
- **Description:** Details of Rehive company that was added via the /activate/ endpoint.

### `/admin/company/configuration/`

- **Operation ID:** `admin_company_configuration_partial_update`
- **Description:** Details of Rehive company that was added via the /activate/ endpoint.

### `/admin/company/configuration/account-groups/{id}/`

- **Operation ID:** `admin_company_configuration_account-groups_partial_update`
- **Description:** Details for a Group/Account pair

### `/admin/company/configuration/anchor_platform/`

- **Operation ID:** `admin_company_configuration_anchor_platform_partial_update`
- **Description:** Details of Rehive company that was added via the /activate/ endpoint.

### `/admin/hotwallet/`

- **Operation ID:** `admin_hotwallet_partial_update`
- **Description:** ### View, create and update the hot wallet

### `/admin/known-public-addresses/{id}/`

- **Operation ID:** `admin_known-public-addresses_partial_update`

### `/admin/stellar_accounts/{id}/`

- **Operation ID:** `admin_stellar_accounts_partial_update`
- **Description:** ### View or update a Stellar Account

### `/admin/transactions/{id}/`

- **Operation ID:** `admin_transactions_partial_update`
- **Description:** ### GET and PATCH a single transaction on the Stellar service

### `/admin/users/{id}/`

- **Operation ID:** `admin_users_partial_update`
- **Description:** ### List users

### `/admin/warmstorage/accounts/{id}/`

- **Operation ID:** `admin_warmstorage_accounts_partial_update`
- **Description:** ### View or update a warm storage account

### `/user/`

- **Operation ID:** `user_partial_update`

### `/user/anchor/transactions/{transaction_id}/`

- **Operation ID:** `user_anchor_transactions_partial_update`
- **Description:** ### Endpoint for viewing all user SEP-10 sessions

## PUT Methods (5)

### `/admin/blacklisted-account/{id}/`

- **Operation ID:** `admin_blacklisted-account_update`

### `/admin/company/configuration/`

- **Operation ID:** `admin_company_configuration_update`
- **Description:** Details of Rehive company that was added via the /activate/ endpoint.

### `/admin/company/configuration/account-groups/{id}/`

- **Operation ID:** `admin_company_configuration_account-groups_update`
- **Description:** Details for a Group/Account pair

### `/admin/company/configuration/anchor_platform/`

- **Operation ID:** `admin_company_configuration_anchor_platform_update`
- **Description:** Details of Rehive company that was added via the /activate/ endpoint.

### `/admin/known-public-addresses/{id}/`

- **Operation ID:** `admin_known-public-addresses_update`

## DELETE Methods (3)

### `/admin/blacklisted-account/{id}/`

- **Operation ID:** `admin_blacklisted-account_delete`

### `/admin/company/configuration/account-groups/{id}/`

- **Operation ID:** `admin_company_configuration_account-groups_delete`
- **Description:** Details for a Group/Account pair

### `/admin/known-public-addresses/{id}/`

- **Operation ID:** `admin_known-public-addresses_delete`

