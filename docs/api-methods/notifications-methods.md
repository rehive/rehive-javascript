# Notifications Extension Methods

**Client:** `notifications-api`
**Total Methods:** 37

## POST Methods (9)

### `/activate/`

- **Operation ID:** `activate_create`
- **Summary:** Activate service

### `/admin/credentials/`

- **Operation ID:** `admin_credentials_create`
- **Summary:** Create credential

### `/admin/layouts/`

- **Operation ID:** `admin_layouts_create`
- **Summary:** Create layout

### `/admin/logs/{log_id}/send/`

- **Operation ID:** `admin_logs_send_create`
- **Summary:** Send notification

### `/admin/notifications/`

- **Operation ID:** `admin_notifications_create`
- **Summary:** Create notification

### `/admin/notifications/{notification_id}/trigger/`

- **Operation ID:** `admin_notifications_trigger_create`
- **Summary:** Trigger notification

### `/admin/webhook/`

- **Operation ID:** `admin_webhook_create`

### `/deactivate/`

- **Operation ID:** `deactivate_create`
- **Summary:** Deactivate service

### `/webhook/`

- **Operation ID:** `webhook_create`

## GET Methods (15)

### `/admin/company/`

- **Operation ID:** `admin_company_retrieve`
- **Summary:** Retrieve company

### `/admin/credentials/`

- **Operation ID:** `admin_credentials_list`
- **Summary:** List credentials

### `/admin/credentials/{credential_id}/`

- **Operation ID:** `admin_credentials_retrieve`
- **Summary:** Retrieve credential

### `/admin/layout-templates/`

- **Operation ID:** `admin_layout_templates_list`
- **Summary:** List layout templates

### `/admin/layout-templates/{id}/`

- **Operation ID:** `admin_layout_templates_retrieve`
- **Summary:** Retrieve layout template

### `/admin/layouts/`

- **Operation ID:** `admin_layouts_list`
- **Summary:** List layouts

### `/admin/layouts/{id}/`

- **Operation ID:** `admin_layouts_retrieve`
- **Summary:** Retrieve layout

### `/admin/logs/`

- **Operation ID:** `admin_logs_list`
- **Summary:** List logs

### `/admin/logs/{log_id}/`

- **Operation ID:** `admin_logs_retrieve`
- **Summary:** Retrieve log

### `/admin/notifications/`

- **Operation ID:** `admin_notifications_list`
- **Summary:** List notifications

### `/admin/notifications/{notification_id}/`

- **Operation ID:** `admin_notifications_retrieve`
- **Summary:** Retrieve notification

### `/admin/templates/`

- **Operation ID:** `admin_templates_list`
- **Summary:** List templates

### `/admin/templates/{template_id}/`

- **Operation ID:** `admin_templates_retrieve`
- **Summary:** Retrieve template

### `/user/notifications/`

- **Operation ID:** `user_notifications_list`
- **Summary:** List notifications

### `/user/notifications/{notification_id}/`

- **Operation ID:** `user_notifications_retrieve`
- **Summary:** Retrieve notification

## PUT Methods (5)

### `/admin/company/`

- **Operation ID:** `admin_company_update`
- **Summary:** Update company

### `/admin/credentials/{credential_id}/`

- **Operation ID:** `admin_credentials_update`
- **Summary:** Update credential

### `/admin/layouts/{id}/`

- **Operation ID:** `admin_layouts_update`
- **Summary:** Update layout

### `/admin/notifications/{notification_id}/`

- **Operation ID:** `admin_notifications_update`
- **Summary:** Update notification

### `/user/notifications/{notification_id}/`

- **Operation ID:** `user_notifications_update`
- **Summary:** Update notification

## PATCH Methods (5)

### `/admin/company/`

- **Operation ID:** `admin_company_partial_update`
- **Summary:** Partially update company

### `/admin/credentials/{credential_id}/`

- **Operation ID:** `admin_credentials_partial_update`
- **Summary:** Partially update credential

### `/admin/layouts/{id}/`

- **Operation ID:** `admin_layouts_partial_update`
- **Summary:** Partially update layout

### `/admin/notifications/{notification_id}/`

- **Operation ID:** `admin_notifications_partial_update`
- **Summary:** Partially update notification

### `/user/notifications/{notification_id}/`

- **Operation ID:** `user_notifications_partial_update`
- **Summary:** Partially update notification

## DELETE Methods (3)

### `/admin/credentials/{credential_id}/`

- **Operation ID:** `admin_credentials_destroy`
- **Summary:** Delete credential

### `/admin/layouts/{id}/`

- **Operation ID:** `admin_layouts_destroy`
- **Summary:** Delete layout

### `/admin/notifications/{notification_id}/`

- **Operation ID:** `admin_notifications_destroy`
- **Summary:** Delete notification

