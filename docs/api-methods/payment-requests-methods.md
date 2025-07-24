# Payment Requests Extension Methods

**Client:** `payment-requests-api`
**Total Methods:** 77

## POST Methods (20)

### `/activate/`

- **Operation ID:** `activate_create`
- **Summary:** Activate service

### `/admin/company_payment_processors/`

- **Operation ID:** `admin_company_payment_processors_create`
- **Summary:** Create company payment processor

### `/admin/payment_processors/`

- **Operation ID:** `admin_payment_processors_create`
- **Summary:** Create payment processor

### `/admin/requests/`

- **Operation ID:** `admin_requests_create`
- **Summary:** Create request

### `/admin/requests/{identifier}/refunds/`

- **Operation ID:** `admin_requests_refunds_create`
- **Summary:** Create request refund

### `/admin/webhooks/`

- **Operation ID:** `admin_webhooks_create`
- **Summary:** Create webhook

### `/deactivate/`

- **Operation ID:** `deactivate_create`
- **Summary:** Deactivate service

### `/requests/{identifier}/otp_challenge/`

- **Operation ID:** `requests_otp_challenge_create`
- **Summary:** Create OTP challenge

### `/requests/{identifier}/resend_otp/`

- **Operation ID:** `requests_resend_otp_create`
- **Summary:** Resend OTP challenge

### `/user/payment_processors/`

- **Operation ID:** `user_payment_processors_create`
- **Summary:** Create payment processor

### `/user/requests/`

- **Operation ID:** `user_requests_create`
- **Summary:** Create request

### `/user/requests/{identifier}/notify/`

- **Operation ID:** `user_requests_notify_create`
- **Summary:** Send notification

### `/user/requests/{identifier}/refunds/`

- **Operation ID:** `user_requests_refunds_create`
- **Summary:** Create request refund

### `/user/webhooks/`

- **Operation ID:** `user_webhooks_create`
- **Summary:** Create webhook

### `/webhook/`

- **Operation ID:** `webhook_create`
- **Summary:** Receive Platform webhook

### `/webhooks/rehive_transaction/executed/`

- **Operation ID:** `webhooks_rehive_transaction_executed_create`
- **Summary:** Receive Platform webhook

### `/webhooks/rehive_transaction/initiated/`

- **Operation ID:** `webhooks_rehive_transaction_initiated_create`
- **Summary:** Receive Platform webhook

### `/webhooks/rehive_user/create/`

- **Operation ID:** `webhooks_rehive_user_create_create`
- **Summary:** Receive Platform webhook

### `/webhooks/rehive_user/email_update/`

- **Operation ID:** `webhooks_rehive_user_email_update_create`
- **Summary:** Receive Platform webhook

### `/webhooks/rehive_user/update/`

- **Operation ID:** `webhooks_rehive_user_update_create`
- **Summary:** Receive Platform webhook

## GET Methods (30)

### `/admin/company/`

- **Operation ID:** `admin_company_retrieve`
- **Summary:** Retrieve company

### `/admin/company/configuration/`

- **Operation ID:** `admin_company_configuration_retrieve`
- **Summary:** Retrieve configuration

### `/admin/company_payment_processors/`

- **Operation ID:** `admin_company_payment_processors_list`
- **Summary:** List company payment processors

### `/admin/company_payment_processors/{identifier}/`

- **Operation ID:** `admin_company_payment_processors_retrieve`
- **Summary:** Retrieve company payment processor

### `/admin/payment_processor_quote/`

- **Operation ID:** `admin_payment_processor_quote_list`
- **Summary:** List payment processor quotes

### `/admin/payment_processors/`

- **Operation ID:** `admin_payment_processors_list`
- **Summary:** List payment processors

### `/admin/payment_processors/{identifier}/`

- **Operation ID:** `admin_payment_processors_retrieve`
- **Summary:** Retrieve payment processor

### `/admin/requests/`

- **Operation ID:** `admin_requests_list`
- **Summary:** List requests

### `/admin/requests/{identifier}/`

- **Operation ID:** `admin_requests_retrieve`
- **Summary:** Retrieve request

### `/admin/requests/{identifier}/logs/`

- **Operation ID:** `admin_requests_logs_list`
- **Summary:** List request logs

### `/admin/requests/{identifier}/payment-process-quotes/`

- **Operation ID:** `admin_requests_payment_process_quotes_list`
- **Summary:** List request payment processor quotes

### `/admin/requests/{identifier}/payment-process-quotes/{quote_identifier}/`

- **Operation ID:** `admin_requests_payment_process_quotes_retrieve`
- **Summary:** Retrieve request payment processor quote

### `/admin/requests/{identifier}/payment-process-quotes/{quote_identifier}/execute/`

- **Operation ID:** `admin_requests_payment_process_quotes_execute_retrieve`
- **Summary:** Retrieve request payment processor quote conversion

### `/admin/requests/{identifier}/refunds/`

- **Operation ID:** `admin_requests_refunds_list`
- **Summary:** List request refunds

### `/admin/requests/{identifier}/transactions/`

- **Operation ID:** `admin_requests_transactions_list`
- **Summary:** List request transactions

### `/admin/users/`

- **Operation ID:** `admin_users_list`
- **Summary:** List users

### `/admin/users/{identifier}/`

- **Operation ID:** `admin_users_retrieve`
- **Summary:** Retrieve user

### `/admin/webhooks/`

- **Operation ID:** `admin_webhooks_list`
- **Summary:** List webhooks

### `/admin/webhooks/{identifier}/`

- **Operation ID:** `admin_webhooks_retrieve`
- **Summary:** Retrieve webhook

### `/requests/{identifier}/`

- **Operation ID:** `requests_retrieve`
- **Summary:** Retrieve request

### `/requests/{identifier}/payment_processors/`

- **Operation ID:** `requests_payment_processors_list`
- **Summary:** List request payment processors

### `/requests/{identifier}/transactions/`

- **Operation ID:** `requests_transactions_list`
- **Summary:** List request transactions

### `/user/payment_processors/`

- **Operation ID:** `user_payment_processors_list`
- **Summary:** List payment processors

### `/user/payment_processors/{id}/`

- **Operation ID:** `user_payment_processors_retrieve`
- **Summary:** Retrieve payment processor

### `/user/requests/`

- **Operation ID:** `user_requests_list`
- **Summary:** List request

### `/user/requests/{identifier}/`

- **Operation ID:** `user_requests_retrieve`
- **Summary:** Retrieve request

### `/user/requests/{identifier}/refunds/`

- **Operation ID:** `user_requests_refunds_list`
- **Summary:** List request refunds

### `/user/requests/{identifier}/transactions/`

- **Operation ID:** `user_requests_transactions_list`
- **Summary:** List request transactions

### `/user/webhooks/`

- **Operation ID:** `user_webhooks_list`
- **Summary:** List webhooks

### `/user/webhooks/{identifier}/`

- **Operation ID:** `user_webhooks_retrieve`
- **Summary:** Retrieve webhook

## PUT Methods (11)

### `/admin/company/`

- **Operation ID:** `admin_company_update`
- **Summary:** Update company

### `/admin/company/configuration/`

- **Operation ID:** `admin_company_configuration_update`
- **Summary:** Update configuration

### `/admin/company_payment_processors/{identifier}/`

- **Operation ID:** `admin_company_payment_processors_update`
- **Summary:** Update company payment processor

### `/admin/payment_processors/{identifier}/`

- **Operation ID:** `admin_payment_processors_update`
- **Summary:** Update payment processor

### `/admin/requests/{identifier}/`

- **Operation ID:** `admin_requests_update`
- **Summary:** Update request

### `/admin/users/{identifier}/`

- **Operation ID:** `admin_users_update`
- **Summary:** Update user

### `/admin/webhooks/{identifier}/`

- **Operation ID:** `admin_webhooks_update`
- **Summary:** Update webhook

### `/requests/{identifier}/`

- **Operation ID:** `requests_update`
- **Summary:** Update request

### `/user/payment_processors/{id}/`

- **Operation ID:** `user_payment_processors_update`
- **Summary:** Update payment processor

### `/user/requests/{identifier}/`

- **Operation ID:** `user_requests_update`
- **Summary:** Update request

### `/user/webhooks/{identifier}/`

- **Operation ID:** `user_webhooks_update`
- **Summary:** Update webhook

## PATCH Methods (11)

### `/admin/company/`

- **Operation ID:** `admin_company_partial_update`
- **Summary:** Partially update company

### `/admin/company/configuration/`

- **Operation ID:** `admin_company_configuration_partial_update`
- **Summary:** Partially update configuration

### `/admin/company_payment_processors/{identifier}/`

- **Operation ID:** `admin_company_payment_processors_partial_update`
- **Summary:** Partially update company payment processor

### `/admin/payment_processors/{identifier}/`

- **Operation ID:** `admin_payment_processors_partial_update`
- **Summary:** Partially update payment processor

### `/admin/requests/{identifier}/`

- **Operation ID:** `admin_requests_partial_update`
- **Summary:** Partially update request

### `/admin/users/{identifier}/`

- **Operation ID:** `admin_users_partial_update`
- **Summary:** Partially update user

### `/admin/webhooks/{identifier}/`

- **Operation ID:** `admin_webhooks_partial_update`
- **Summary:** Partially update webhook

### `/requests/{identifier}/`

- **Operation ID:** `requests_partial_update`
- **Summary:** Partially update request

### `/user/payment_processors/{id}/`

- **Operation ID:** `user_payment_processors_partial_update`
- **Summary:** Partially update payment processor

### `/user/requests/{identifier}/`

- **Operation ID:** `user_requests_partial_update`
- **Summary:** Partially update request

### `/user/webhooks/{identifier}/`

- **Operation ID:** `user_webhooks_partial_update`
- **Summary:** Partially webhook

## DELETE Methods (5)

### `/admin/company_payment_processors/{identifier}/`

- **Operation ID:** `admin_company_payment_processors_destroy`
- **Summary:** Delete company payment processor

### `/admin/payment_processors/{identifier}/`

- **Operation ID:** `admin_payment_processors_destroy`
- **Summary:** Delete payment processor

### `/admin/webhooks/{identifier}/`

- **Operation ID:** `admin_webhooks_destroy`
- **Summary:** Delete webhook

### `/user/payment_processors/{id}/`

- **Operation ID:** `user_payment_processors_destroy`
- **Summary:** Delete payment processor

### `/user/webhooks/{identifier}/`

- **Operation ID:** `user_webhooks_destroy`
- **Summary:** Delete webhook

