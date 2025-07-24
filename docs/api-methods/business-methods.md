# Business Extension Methods

**Client:** `business-api`
**Total Methods:** 84

## POST Methods (17)

### `/activate/`

- **Operation ID:** `activate_create`
- **Summary:** Activate service

### `/admin/business-categories/`

- **Operation ID:** `admin_business_categories_create`
- **Summary:** Create category

### `/admin/business-users/`

- **Operation ID:** `admin_business_users_create`
- **Summary:** Create business user

### `/admin/businesses/{business_id}/documents/`

- **Operation ID:** `admin_businesses_documents_create`
- **Summary:** Create business document

### `/admin/businesses/{business_id}/payouts/`

- **Operation ID:** `admin_businesses_payouts_create`
- **Summary:** Create business payout

### `/admin/businesses/{identifier}/categories/`

- **Operation ID:** `admin_businesses_categories_create`
- **Summary:** Create business category

### `/admin/webhook/`

- **Operation ID:** `admin_webhook_create`
- **Summary:** Receive Platform webhook

### `/customer/enroll/`

- **Operation ID:** `customer_enroll_create`
- **Summary:** Enroll customer

### `/deactivate/`

- **Operation ID:** `deactivate_create`
- **Summary:** Deactivate service

### `/manager/businesses/`

- **Operation ID:** `manager_businesses_create`
- **Summary:** Create business

### `/manager/businesses/{business_id}/documents/`

- **Operation ID:** `manager_businesses_documents_create`
- **Summary:** Create business document

### `/manager/businesses/{business_id}/invoices/`

- **Operation ID:** `manager_businesses_invoices_create`
- **Summary:** Create business invoice

### `/manager/businesses/{business_id}/invoices/{invoice_id}/refunds/`

- **Operation ID:** `manager_businesses_invoices_refunds_create`
- **Summary:** Create business invoice refund

### `/manager/businesses/{business_id}/payouts/`

- **Operation ID:** `manager_businesses_payouts_create`
- **Summary:** Create business payout

### `/manager/businesses/{business_id}/users/`

- **Operation ID:** `manager_businesses_users_create`
- **Summary:** Create business user

### `/manager/businesses/{identifier}/categories/`

- **Operation ID:** `manager_businesses_categories_create`
- **Summary:** Create business category

### `/webhook/`

- **Operation ID:** `webhook_create`
- **Summary:** Receive Platform webhook

## GET Methods (47)

### `/admin/business-categories/`

- **Operation ID:** `admin_business_categories_list`
- **Summary:** List categories

### `/admin/business-categories/{identifier}/`

- **Operation ID:** `admin_business_categories_retrieve`
- **Summary:** Retrieve category

### `/admin/business-users/`

- **Operation ID:** `admin_business_users_list`
- **Summary:** List business users

### `/admin/business-users/{user_id}/`

- **Operation ID:** `admin_business_users_retrieve`
- **Summary:** Retrieve business user

### `/admin/businesses/`

- **Operation ID:** `admin_businesses_list`
- **Summary:** List businesses

### `/admin/businesses/{business_id}/`

- **Operation ID:** `admin_businesses_retrieve`
- **Summary:** Retrieve business

### `/admin/businesses/{business_id}/categories/{category_id}/`

- **Operation ID:** `admin_businesses_categories_retrieve`
- **Summary:** Retrieve business category

### `/admin/businesses/{business_id}/documents/`

- **Operation ID:** `admin_businesses_documents_list`
- **Summary:** List business documents

### `/admin/businesses/{business_id}/documents/{document_id}/`

- **Operation ID:** `admin_businesses_documents_retrieve`
- **Summary:** Retrieve business document

### `/admin/businesses/{business_id}/payouts/`

- **Operation ID:** `admin_businesses_payouts_list`
- **Summary:** List business payouts

### `/admin/businesses/{business_id}/payouts/{payout_id}/`

- **Operation ID:** `admin_businesses_payouts_retrieve`
- **Summary:** Retrieve business payout

### `/admin/businesses/{business_id}/payouts/{payout_id}/transactions/`

- **Operation ID:** `admin_businesses_payouts_transactions_list`
- **Summary:** List business payout transactions

### `/admin/businesses/{identifier}/categories/`

- **Operation ID:** `admin_businesses_categories_list`
- **Summary:** List business categories

### `/admin/company/`

- **Operation ID:** `admin_company_retrieve`
- **Summary:** Retrieve company

### `/admin/currencies/`

- **Operation ID:** `admin_currencies_list`
- **Summary:** List currencies

### `/admin/currencies/{code}/`

- **Operation ID:** `admin_currencies_retrieve`
- **Summary:** Retrieve currency

### `/customer/businesses/`

- **Operation ID:** `customer_businesses_list`
- **Summary:** List businesses

### `/customer/businesses/{business_id}/`

- **Operation ID:** `customer_businesses_retrieve`
- **Summary:** Retrieve business

### `/manager/business-categories/`

- **Operation ID:** `manager_business_categories_list`
- **Summary:** List categories

### `/manager/business-categories/{identifier}/`

- **Operation ID:** `manager_business_categories_retrieve`
- **Summary:** Retrieve business category

### `/manager/businesses/`

- **Operation ID:** `manager_businesses_list`
- **Summary:** List businesses

### `/manager/businesses/{business_id}/`

- **Operation ID:** `manager_businesses_retrieve`
- **Summary:** Retrieve business

### `/manager/businesses/{business_id}/categories/{category_id}/`

- **Operation ID:** `manager_businesses_categories_retrieve`
- **Summary:** Retrieve business category

### `/manager/businesses/{business_id}/documents/`

- **Operation ID:** `manager_businesses_documents_list`
- **Summary:** List business documents

### `/manager/businesses/{business_id}/documents/{document_id}/`

- **Operation ID:** `manager_businesses_documents_retrieve`
- **Summary:** Retrieve business document

### `/manager/businesses/{business_id}/invoices/`

- **Operation ID:** `manager_businesses_invoices_list`
- **Summary:** List business invoices

### `/manager/businesses/{business_id}/invoices/{invoice_id}/`

- **Operation ID:** `manager_businesses_invoices_retrieve`
- **Summary:** Retrieve business invoice

### `/manager/businesses/{business_id}/invoices/{invoice_id}/logs/`

- **Operation ID:** `manager_businesses_invoices_logs_list`
- **Summary:** List business invoice logs

### `/manager/businesses/{business_id}/invoices/{invoice_id}/refunds/`

- **Operation ID:** `manager_businesses_invoices_refunds_list`
- **Summary:** List business invoice refunds

### `/manager/businesses/{business_id}/invoices/{invoice_id}/transactions/`

- **Operation ID:** `manager_businesses_invoices_transactions_list`
- **Summary:** List business invoice transactions

### `/manager/businesses/{business_id}/metrics/`

- **Operation ID:** `manager_businesses_metrics_list`
- **Summary:** List business metrics

### `/manager/businesses/{business_id}/metrics/{metric_id}/`

- **Operation ID:** `manager_businesses_metrics_retrieve`
- **Summary:** Retrieve business metric

### `/manager/businesses/{business_id}/metrics/{metric_id}/points/`

- **Operation ID:** `manager_businesses_metrics_points_list`
- **Summary:** List business metric points

### `/manager/businesses/{business_id}/payouts/`

- **Operation ID:** `manager_businesses_payouts_list`
- **Summary:** List business payouts

### `/manager/businesses/{business_id}/payouts/{payout_id}/`

- **Operation ID:** `manager_businesses_payouts_retrieve`
- **Summary:** Retrieve business payout

### `/manager/businesses/{business_id}/payouts/{payout_id}/transactions/`

- **Operation ID:** `manager_businesses_payouts_transactions_list`
- **Summary:** List business payout transactions

### `/manager/businesses/{business_id}/transactions/`

- **Operation ID:** `manager_businesses_transactions_list`
- **Summary:** List business transactions

### `/manager/businesses/{business_id}/transactions/{transaction_id}/`

- **Operation ID:** `manager_businesses_transactions_retrieve`
- **Summary:** Retrieve business transaction

### `/manager/businesses/{business_id}/users/`

- **Operation ID:** `manager_businesses_users_list`
- **Summary:** List business users

### `/manager/businesses/{business_id}/users/{user_id}/`

- **Operation ID:** `manager_businesses_users_retrieve`
- **Summary:** Retrieve business user

### `/manager/businesses/{identifier}/categories/`

- **Operation ID:** `manager_businesses_categories_list`
- **Summary:** List business categories

### `/manager/company/`

- **Operation ID:** `manager_company_retrieve`
- **Summary:** Retrieve company

### `/user/business-categories/`

- **Operation ID:** `user_business_categories_list`
- **Summary:** List categories

### `/user/business-categories/{identifier}/`

- **Operation ID:** `user_business_categories_retrieve`
- **Summary:** Retrieve category

### `/user/businesses/`

- **Operation ID:** `user_businesses_list`
- **Summary:** List businesses

### `/user/businesses/{identifier}/`

- **Operation ID:** `user_businesses_retrieve`
- **Summary:** Retrieve business

### `/user/company/`

- **Operation ID:** `user_company_retrieve`
- **Summary:** Retrieve company

## PUT Methods (8)

### `/admin/business-categories/{identifier}/`

- **Operation ID:** `admin_business_categories_update`
- **Summary:** Update category

### `/admin/business-users/{user_id}/`

- **Operation ID:** `admin_business_users_update`
- **Summary:** Update business user

### `/admin/businesses/{business_id}/`

- **Operation ID:** `admin_businesses_update`
- **Summary:** Update business

### `/admin/businesses/{business_id}/documents/{document_id}/`

- **Operation ID:** `admin_businesses_documents_update`
- **Summary:** Update business document

### `/admin/company/`

- **Operation ID:** `admin_company_update`
- **Summary:** Update company

### `/manager/businesses/{business_id}/`

- **Operation ID:** `manager_businesses_update`
- **Summary:** Update business

### `/manager/businesses/{business_id}/invoices/{invoice_id}/`

- **Operation ID:** `manager_businesses_invoices_update`
- **Summary:** Update business invoice

### `/manager/businesses/{business_id}/users/{user_id}/`

- **Operation ID:** `manager_businesses_users_update`
- **Summary:** Update business user

## PATCH Methods (8)

### `/admin/business-categories/{identifier}/`

- **Operation ID:** `admin_business_categories_partial_update`
- **Summary:** Partially update category

### `/admin/business-users/{user_id}/`

- **Operation ID:** `admin_business_users_partial_update`
- **Summary:** Partially update business user

### `/admin/businesses/{business_id}/`

- **Operation ID:** `admin_businesses_partial_update`
- **Summary:** Partially update business

### `/admin/businesses/{business_id}/documents/{document_id}/`

- **Operation ID:** `admin_businesses_documents_partial_update`
- **Summary:** Partially update business document

### `/admin/company/`

- **Operation ID:** `admin_company_partial_update`
- **Summary:** Partially update company

### `/manager/businesses/{business_id}/`

- **Operation ID:** `manager_businesses_partial_update`
- **Summary:** Partially update business

### `/manager/businesses/{business_id}/invoices/{invoice_id}/`

- **Operation ID:** `manager_businesses_invoices_partial_update`
- **Summary:** Partially update business invoice

### `/manager/businesses/{business_id}/users/{user_id}/`

- **Operation ID:** `manager_businesses_users_partial_update`
- **Summary:** Partially update business user

## DELETE Methods (4)

### `/admin/business-categories/{identifier}/`

- **Operation ID:** `admin_business_categories_destroy`
- **Summary:** Delete category

### `/admin/businesses/{business_id}/categories/{category_id}/`

- **Operation ID:** `admin_businesses_categories_destroy`
- **Summary:** Delete business category

### `/admin/businesses/{business_id}/documents/{document_id}/`

- **Operation ID:** `admin_businesses_documents_destroy`
- **Summary:** Delete business document

### `/manager/businesses/{business_id}/categories/{category_id}/`

- **Operation ID:** `manager_businesses_categories_destroy`
- **Summary:** Delete business category

