# Products Extension Methods

**Client:** `products-api`
**Total Methods:** 241

## POST Methods (43)

### `/activate/`

- **Operation ID:** `activate_create`
- **Summary:** Activate service

### `/admin/categories/`

- **Operation ID:** `admin_categories_create`
- **Summary:** Create category

### `/admin/integrations/`

- **Operation ID:** `admin_integrations_create`
- **Summary:** Create integration

### `/admin/integrations/{identifier}/webhooks/`

- **Operation ID:** `admin_integrations_webhooks_create`
- **Summary:** Create integration webhook

### `/admin/orders/`

- **Operation ID:** `admin_orders_create`
- **Summary:** Create order

### `/admin/orders/{identifier}/items/`

- **Operation ID:** `admin_orders_items_create`
- **Summary:** Create order item

### `/admin/orders/{identifier}/payments/`

- **Operation ID:** `admin_orders_payments_create`
- **Summary:** Create payment

### `/admin/orders/{identifier}/refunds/`

- **Operation ID:** `admin_orders_refunds_create`
- **Summary:** Create refund

### `/admin/products/`

- **Operation ID:** `admin_products_create`
- **Summary:** Create product

### `/admin/products/{identifier}/categories/`

- **Operation ID:** `admin_products_categories_create`
- **Summary:** Create product category

### `/admin/products/{identifier}/options/`

- **Operation ID:** `admin_products_options_create`
- **Summary:** Create product option

### `/admin/products/{identifier}/prices/`

- **Operation ID:** `admin_products_prices_create`
- **Summary:** Create product price

### `/admin/products/{identifier}/variants/`

- **Operation ID:** `admin_products_variants_create`
- **Summary:** Create product variant

### `/admin/products/{product_id}/images/`

- **Operation ID:** `admin_products_images_create`
- **Summary:** Create product image

### `/admin/products/{product_id}/variants/{variant_id}/prices/`

- **Operation ID:** `admin_products_variants_prices_create`
- **Summary:** Create product variant price

### `/admin/redemptions/`

- **Operation ID:** `admin_redemptions_create`
- **Summary:** Create redemption

### `/admin/voucher-imports/`

- **Operation ID:** `admin_voucher_imports_create`
- **Summary:** Create voucher imports

### `/admin/vouchers/`

- **Operation ID:** `admin_vouchers_create`
- **Summary:** Create voucher

### `/admin/vouchers/import/`

- **Operation ID:** `admin_vouchers_import_create`
- **Summary:** Import vouchers

### `/admin/vouchers/query/`

- **Operation ID:** `admin_vouchers_query_create`
- **Summary:** Query voucher

### `/deactivate/`

- **Operation ID:** `deactivate_create`
- **Summary:** Deactivate service

### `/manager/sellers/`

- **Operation ID:** `manager_sellers_create`
- **Summary:** Create seller

### `/manager/sellers/{identifier}/integrations/`

- **Operation ID:** `manager_sellers_integrations_create`
- **Summary:** Create integration

### `/manager/sellers/{seller_id}/integrations/{identifier}/webhooks/`

- **Operation ID:** `manager_sellers_integrations_webhooks_create`
- **Summary:** Create integration webhook

### `/manager/sellers/{seller_id}/orders/{identifier}/refunds/`

- **Operation ID:** `manager_sellers_orders_refunds_create`
- **Summary:** Create refund

### `/manager/sellers/{seller_id}/products/`

- **Operation ID:** `manager_sellers_products_create`
- **Summary:** Create product

### `/manager/sellers/{seller_id}/products/{identifier}/categories/`

- **Operation ID:** `manager_sellers_products_categories_create`
- **Summary:** Create product category

### `/manager/sellers/{seller_id}/products/{identifier}/options/`

- **Operation ID:** `manager_sellers_products_options_create`
- **Summary:** Create product option

### `/manager/sellers/{seller_id}/products/{identifier}/prices/`

- **Operation ID:** `manager_sellers_products_prices_create`
- **Summary:** Create product price

### `/manager/sellers/{seller_id}/products/{identifier}/variants/`

- **Operation ID:** `manager_sellers_products_variants_create`
- **Summary:** Create product variant

### `/manager/sellers/{seller_id}/products/{product_id}/images/`

- **Operation ID:** `manager_sellers_products_images_create`
- **Summary:** Create product image

### `/manager/sellers/{seller_id}/products/{product_id}/variants/{variant_id}/prices/`

- **Operation ID:** `manager_sellers_products_variants_prices_create`
- **Summary:** Create product variant price

### `/manager/sellers/{seller_id}/redemptions/`

- **Operation ID:** `manager_sellers_redemptions_create`
- **Summary:** Create redemption

### `/manager/sellers/{seller_id}/voucher-imports/`

- **Operation ID:** `manager_sellers_voucher_imports_create`
- **Summary:** Create voucher import

### `/manager/sellers/{seller_id}/voucher/import/`

- **Operation ID:** `manager_sellers_voucher_import_create`
- **Summary:** Import vouchers

### `/manager/sellers/{seller_id}/vouchers/`

- **Operation ID:** `manager_sellers_vouchers_create`
- **Summary:** Create voucher

### `/manager/sellers/{seller_id}/vouchers/query/`

- **Operation ID:** `manager_sellers_vouchers_query_create`
- **Summary:** Query voucher

### `/user/orders/`

- **Operation ID:** `user_orders_create`
- **Summary:** Create order

### `/user/orders/{identifier}/items/`

- **Operation ID:** `user_orders_items_create`
- **Summary:** Create order item

### `/user/orders/{identifier}/payments/`

- **Operation ID:** `user_orders_payments_create`
- **Summary:** Create payment

### `/user/redemptions/`

- **Operation ID:** `user_redemptions_create`
- **Summary:** Create redemption

### `/user/vouchers/query/`

- **Operation ID:** `user_vouchers_query_create`
- **Summary:** Query voucher

### `/webhook/`

- **Operation ID:** `webhook_create`
- **Summary:** Receive Platform webhook

## GET Methods (109)

### `/admin/categories/`

- **Operation ID:** `admin_categories_list`
- **Summary:** List categories

### `/admin/categories/{identifier}/`

- **Operation ID:** `admin_categories_retrieve`
- **Summary:** Retrieve category

### `/admin/company/`

- **Operation ID:** `admin_company_retrieve`
- **Summary:** Retrieve company

### `/admin/currencies/`

- **Operation ID:** `admin_currencies_list`
- **Summary:** List currencies

### `/admin/currencies/{code}/`

- **Operation ID:** `admin_currencies_retrieve`
- **Summary:** Retrieve currency

### `/admin/integrations/`

- **Operation ID:** `admin_integrations_list`
- **Summary:** List integrations

### `/admin/integrations/{identifier}/`

- **Operation ID:** `admin_integrations_retrieve`
- **Summary:** Retrieve integration

### `/admin/integrations/{identifier}/webhooks/`

- **Operation ID:** `admin_integrations_webhooks_list`
- **Summary:** List integration webhooks

### `/admin/integrations/{integration_id}/webhooks{webhook_id}/`

- **Operation ID:** `admin_integrations_webhooks_retrieve`
- **Summary:** Retrieve integration webhook

### `/admin/orders/`

- **Operation ID:** `admin_orders_list`
- **Summary:** List orders

### `/admin/orders/{identifier}/`

- **Operation ID:** `admin_orders_retrieve`
- **Summary:** Retrieve order

### `/admin/orders/{identifier}/items/`

- **Operation ID:** `admin_orders_items_list`
- **Summary:** List order items

### `/admin/orders/{identifier}/payments/`

- **Operation ID:** `admin_orders_payments_list`
- **Summary:** List payments

### `/admin/orders/{identifier}/refunds/`

- **Operation ID:** `admin_orders_refunds_list`
- **Summary:** List refunds

### `/admin/orders/{order_id}/items/{item_id}/`

- **Operation ID:** `admin_orders_items_retrieve`
- **Summary:** Retrieve order item

### `/admin/orders/{order_id}/payments/{payment_id}/`

- **Operation ID:** `admin_orders_payments_retrieve`
- **Summary:** Retrieve payment

### `/admin/orders/{order_id}/refunds/{refund_id}/`

- **Operation ID:** `admin_orders_refunds_retrieve`
- **Summary:** Retrieve refund

### `/admin/products/`

- **Operation ID:** `admin_products_list`
- **Summary:** List products

### `/admin/products/{identifier}/`

- **Operation ID:** `admin_products_retrieve`
- **Summary:** Retrieve product

### `/admin/products/{identifier}/categories/`

- **Operation ID:** `admin_products_categories_list`
- **Summary:** List product categories

### `/admin/products/{identifier}/options/`

- **Operation ID:** `admin_products_options_list`
- **Summary:** List product options

### `/admin/products/{identifier}/prices/`

- **Operation ID:** `admin_products_prices_list`
- **Summary:** List product prices

### `/admin/products/{identifier}/variants/`

- **Operation ID:** `admin_products_variants_list`
- **Summary:** List product variants

### `/admin/products/{product_id}/categories/{category_id}/`

- **Operation ID:** `admin_products_categories_retrieve`
- **Summary:** Retrieve product category

### `/admin/products/{product_id}/images/`

- **Operation ID:** `admin_products_images_list`
- **Summary:** List product images

### `/admin/products/{product_id}/images/{image_id}/`

- **Operation ID:** `admin_products_images_retrieve`
- **Summary:** Retrieve product image

### `/admin/products/{product_id}/options/{option_id}/`

- **Operation ID:** `admin_products_options_retrieve`
- **Summary:** Retrieve product option

### `/admin/products/{product_id}/prices/{price_id}/`

- **Operation ID:** `admin_products_prices_retrieve`
- **Summary:** Retrieve product price

### `/admin/products/{product_id}/variants/{variant_id}/`

- **Operation ID:** `admin_products_variants_retrieve`
- **Summary:** Retrieve product variant

### `/admin/products/{product_id}/variants/{variant_id}/prices/`

- **Operation ID:** `admin_products_variants_prices_list`
- **Summary:** List product variant prices

### `/admin/products/{product_id}/variants/{variant_id}/prices/{price_id}/`

- **Operation ID:** `admin_products_variants_prices_retrieve`
- **Summary:** Retrieve product variant price

### `/admin/redemptions/`

- **Operation ID:** `admin_redemptions_list`
- **Summary:** List redemptions

### `/admin/redemptions/{action_id}/`

- **Operation ID:** `admin_redemptions_retrieve`
- **Summary:** Retrieve redemption

### `/admin/sellers/`

- **Operation ID:** `admin_sellers_list`
- **Summary:** List sellers

### `/admin/sellers/{identifier}/`

- **Operation ID:** `admin_sellers_retrieve`
- **Summary:** Retrieve seller

### `/admin/voucher-imports/`

- **Operation ID:** `admin_voucher_imports_list`
- **Summary:** List voucher imports

### `/admin/voucher-imports/{identifier}/`

- **Operation ID:** `admin_voucher_imports_retrieve`
- **Summary:** Retrieve voucher import

### `/admin/vouchers/`

- **Operation ID:** `admin_vouchers_list`
- **Summary:** List vouchers

### `/admin/vouchers/{identifier}/`

- **Operation ID:** `admin_vouchers_retrieve`
- **Summary:** Retrieve voucher

### `/admin/vouchers/{identifier}/actions/`

- **Operation ID:** `admin_vouchers_actions_list`
- **Summary:** List voucher actions

### `/admin/vouchers/{voucher_id}/actions/{action_id}/`

- **Operation ID:** `admin_vouchers_actions_retrieve`
- **Summary:** Retrieve voucher action

### `/manager/categories/`

- **Operation ID:** `manager_categories_list`
- **Summary:** List categories

### `/manager/categories/{identifier}/`

- **Operation ID:** `manager_categories_retrieve`
- **Summary:** Retrieve category

### `/manager/company/`

- **Operation ID:** `manager_company_retrieve`
- **Summary:** Retrieve company

### `/manager/currencies/`

- **Operation ID:** `manager_currencies_list`
- **Summary:** List currencies

### `/manager/currencies/{code}/`

- **Operation ID:** `manager_currencies_retrieve`
- **Summary:** Retrieve currency

### `/manager/sellers/`

- **Operation ID:** `manager_sellers_list`
- **Summary:** List sellers

### `/manager/sellers/{identifier}/`

- **Operation ID:** `manager_sellers_retrieve`
- **Summary:** Retrieve seller

### `/manager/sellers/{identifier}/integrations/`

- **Operation ID:** `manager_sellers_integrations_list`
- **Summary:** List integrations

### `/manager/sellers/{seller_id}/integrations/{identifier}/`

- **Operation ID:** `manager_sellers_integrations_retrieve`
- **Summary:** Retrieve integration

### `/manager/sellers/{seller_id}/integrations/{identifier}/webhooks/`

- **Operation ID:** `manager_sellers_integrations_webhooks_list`
- **Summary:** List integration webhooks

### `/manager/sellers/{seller_id}/integrations/{integration_id}/webhooks/{webhook_id}/`

- **Operation ID:** `manager_sellers_integrations_webhooks_retrieve`
- **Summary:** Retrieve integration webhook

### `/manager/sellers/{seller_id}/orders/`

- **Operation ID:** `manager_sellers_orders_list`
- **Summary:** List orders

### `/manager/sellers/{seller_id}/orders/{identifier}/`

- **Operation ID:** `manager_sellers_orders_retrieve`
- **Summary:** Retrieve order

### `/manager/sellers/{seller_id}/orders/{identifier}/items/`

- **Operation ID:** `manager_sellers_orders_items_list`
- **Summary:** List order items

### `/manager/sellers/{seller_id}/orders/{identifier}/payments/`

- **Operation ID:** `manager_sellers_orders_payments_list`
- **Summary:** List payments

### `/manager/sellers/{seller_id}/orders/{identifier}/refunds/`

- **Operation ID:** `manager_sellers_orders_refunds_list`
- **Summary:** List refund

### `/manager/sellers/{seller_id}/orders/{order_id}/items/{item_id}/`

- **Operation ID:** `manager_sellers_orders_items_retrieve`
- **Summary:** Retrieve order item

### `/manager/sellers/{seller_id}/orders/{order_id}/payments/{payment_id}/`

- **Operation ID:** `manager_sellers_orders_payments_retrieve`
- **Summary:** Retrieve payment

### `/manager/sellers/{seller_id}/orders/{order_id}/refunds/{refund_id}/`

- **Operation ID:** `manager_sellers_orders_refunds_retrieve`
- **Summary:** Retrieve refund

### `/manager/sellers/{seller_id}/products/`

- **Operation ID:** `manager_sellers_products_list`
- **Summary:** List products

### `/manager/sellers/{seller_id}/products/{identifier}/`

- **Operation ID:** `manager_sellers_products_retrieve`
- **Summary:** Retrieve product

### `/manager/sellers/{seller_id}/products/{identifier}/categories/`

- **Operation ID:** `manager_sellers_products_categories_list`
- **Summary:** List product categories

### `/manager/sellers/{seller_id}/products/{identifier}/options/`

- **Operation ID:** `manager_sellers_products_options_list`
- **Summary:** List product option

### `/manager/sellers/{seller_id}/products/{identifier}/prices/`

- **Operation ID:** `manager_sellers_products_prices_list`
- **Summary:** List product prices

### `/manager/sellers/{seller_id}/products/{identifier}/variants/`

- **Operation ID:** `manager_sellers_products_variants_list`
- **Summary:** List product variants

### `/manager/sellers/{seller_id}/products/{product_id}/categories/{category_id}/`

- **Operation ID:** `manager_sellers_products_categories_retrieve`
- **Summary:** Retrieve product category

### `/manager/sellers/{seller_id}/products/{product_id}/images/`

- **Operation ID:** `manager_sellers_products_images_list`
- **Summary:** List product image

### `/manager/sellers/{seller_id}/products/{product_id}/images/{image_id}/`

- **Operation ID:** `manager_sellers_products_images_retrieve`
- **Summary:** Retrieve product image

### `/manager/sellers/{seller_id}/products/{product_id}/options/{option_id}/`

- **Operation ID:** `manager_sellers_products_options_retrieve`
- **Summary:** Retrieve product option

### `/manager/sellers/{seller_id}/products/{product_id}/prices/{price_id}/`

- **Operation ID:** `manager_sellers_products_prices_retrieve`
- **Summary:** Retrieve product price

### `/manager/sellers/{seller_id}/products/{product_id}/variants/{variant_id}/`

- **Operation ID:** `manager_sellers_products_variants_retrieve`
- **Summary:** Retrieve product variant

### `/manager/sellers/{seller_id}/products/{product_id}/variants/{variant_id}/prices/`

- **Operation ID:** `manager_sellers_products_variants_prices_list`
- **Summary:** List product variant prices

### `/manager/sellers/{seller_id}/products/{product_id}/variants/{variant_id}/prices/{price_id}/`

- **Operation ID:** `manager_sellers_products_variants_prices_retrieve`
- **Summary:** Retrieve product variant price

### `/manager/sellers/{seller_id}/redemptions/`

- **Operation ID:** `manager_sellers_redemptions_list`
- **Summary:** List redemptions

### `/manager/sellers/{seller_id}/redemptions/{action_id}/`

- **Operation ID:** `manager_sellers_redemptions_retrieve`
- **Summary:** Retrieve redemption

### `/manager/sellers/{seller_id}/voucher-imports/`

- **Operation ID:** `manager_sellers_voucher_imports_list`
- **Summary:** List voucher imports

### `/manager/sellers/{seller_id}/voucher-imports/{identifier}/`

- **Operation ID:** `manager_sellers_voucher_imports_retrieve`
- **Summary:** Retrieve voucher import

### `/manager/sellers/{seller_id}/vouchers/`

- **Operation ID:** `manager_sellers_vouchers_list`
- **Summary:** List vouchers

### `/manager/sellers/{seller_id}/vouchers/{identifier}/`

- **Operation ID:** `manager_sellers_vouchers_retrieve`
- **Summary:** Retrieve voucher

### `/manager/sellers/{seller_id}/vouchers/{voucher_id}/actions/`

- **Operation ID:** `manager_sellers_vouchers_actions_list`
- **Summary:** List voucher actions

### `/manager/sellers/{seller_id}/vouchers/{voucher_id}/actions/{action_id}/`

- **Operation ID:** `manager_sellers_vouchers_actions_retrieve`
- **Summary:** Retrieve voucher actions

### `/user/categories/`

- **Operation ID:** `user_categories_list`
- **Summary:** List categories

### `/user/categories/{identifier}/`

- **Operation ID:** `user_categories_retrieve`
- **Summary:** Retrieve category

### `/user/company/`

- **Operation ID:** `user_company_retrieve`
- **Summary:** Retrieve company

### `/user/orders/`

- **Operation ID:** `user_orders_list`
- **Summary:** List orders

### `/user/orders/{identifier}/`

- **Operation ID:** `user_orders_retrieve`
- **Summary:** Retrieve order

### `/user/orders/{identifier}/items/`

- **Operation ID:** `user_orders_items_list`
- **Summary:** List order items

### `/user/orders/{identifier}/payments/`

- **Operation ID:** `user_orders_payments_list`
- **Summary:** List payments

### `/user/orders/{identifier}/refunds/`

- **Operation ID:** `user_orders_refunds_list`
- **Summary:** List refunds

### `/user/orders/{order_id}/items/{item_id}/`

- **Operation ID:** `user_orders_items_retrieve`
- **Summary:** Retrieve order item

### `/user/orders/{order_id}/payments/{payment_id}/`

- **Operation ID:** `user_orders_payments_retrieve`
- **Summary:** Retrieve payment

### `/user/orders/{order_id}/refunds/{refund_id}/`

- **Operation ID:** `user_orders_refunds_retrieve`
- **Summary:** Retrieve refund

### `/user/products/`

- **Operation ID:** `user_products_list`
- **Summary:** List products

### `/user/products/{identifier}/`

- **Operation ID:** `user_products_retrieve`
- **Summary:** Retrieve product

### `/user/products/{identifier}/prices/`

- **Operation ID:** `user_products_prices_list`
- **Summary:** List product price

### `/user/products/{identifier}/variants/`

- **Operation ID:** `user_products_variants_list`
- **Summary:** List product variants

### `/user/products/{product_id}/images/`

- **Operation ID:** `user_products_images_list`
- **Summary:** List product images

### `/user/products/{product_id}/images/{image_id}/`

- **Operation ID:** `user_products_images_retrieve`
- **Summary:** Retrieve product image

### `/user/products/{product_id}/prices/{price_id}/`

- **Operation ID:** `user_products_prices_retrieve`
- **Summary:** Retrieve product price

### `/user/products/{product_id}/variants/{variant_id}/`

- **Operation ID:** `user_products_variants_retrieve`
- **Summary:** Retrieve product variant

### `/user/redemptions/`

- **Operation ID:** `user_redemptions_list`
- **Summary:** List redemptions

### `/user/redemptions/{action_id}/`

- **Operation ID:** `user_redemptions_retrieve`
- **Summary:** Retrieve redemption

### `/user/sellers/`

- **Operation ID:** `user_sellers_list`
- **Summary:** List sellers

### `/user/sellers/{seller_id}/`

- **Operation ID:** `user_sellers_retrieve`
- **Summary:** Retrieve seller

### `/user/vouchers/`

- **Operation ID:** `user_vouchers_list`
- **Summary:** List vouchers

### `/user/vouchers/{identifier}/`

- **Operation ID:** `user_vouchers_retrieve`
- **Summary:** Retrieve voucher

### `/user/vouchers/{identifier}/actions/`

- **Operation ID:** `user_vouchers_actions_list`
- **Summary:** List voucher actions

### `/user/vouchers/{voucher_id}/actions/{action_id}/`

- **Operation ID:** `user_vouchers_actions_retrieve`
- **Summary:** Retrieve voucher action

## PUT Methods (32)

### `/admin/categories/{identifier}/`

- **Operation ID:** `admin_categories_update`
- **Summary:** Update category

### `/admin/company/`

- **Operation ID:** `admin_company_update`
- **Summary:** Update company

### `/admin/integrations/{identifier}/`

- **Operation ID:** `admin_integrations_update`
- **Summary:** Update integration

### `/admin/integrations/{integration_id}/webhooks{webhook_id}/`

- **Operation ID:** `admin_integrations_webhooks_update`
- **Summary:** Update integration webhook

### `/admin/orders/{identifier}/`

- **Operation ID:** `admin_orders_update`
- **Summary:** Update order

### `/admin/orders/{order_id}/items/{item_id}/`

- **Operation ID:** `admin_orders_items_update`
- **Summary:** Update order item

### `/admin/orders/{order_id}/payments/{payment_id}/`

- **Operation ID:** `admin_orders_payments_update`
- **Summary:** Update payment

### `/admin/orders/{order_id}/refunds/{refund_id}/`

- **Operation ID:** `admin_orders_refunds_update`
- **Summary:** Update refund

### `/admin/products/{identifier}/`

- **Operation ID:** `admin_products_update`
- **Summary:** Update product

### `/admin/products/{product_id}/images/{image_id}/`

- **Operation ID:** `admin_products_images_update`
- **Summary:** Update product image

### `/admin/products/{product_id}/options/{option_id}/`

- **Operation ID:** `admin_products_options_update`
- **Summary:** Update product option

### `/admin/products/{product_id}/prices/{price_id}/`

- **Operation ID:** `admin_products_prices_update`
- **Summary:** Update product price

### `/admin/products/{product_id}/variants/{variant_id}/`

- **Operation ID:** `admin_products_variants_update`
- **Summary:** Update product variant

### `/admin/products/{product_id}/variants/{variant_id}/prices/{price_id}/`

- **Operation ID:** `admin_products_variants_prices_update`
- **Summary:** Update product variant price

### `/admin/sellers/{identifier}/`

- **Operation ID:** `admin_sellers_update`
- **Summary:** Update seller

### `/admin/vouchers/{identifier}/`

- **Operation ID:** `admin_vouchers_update`
- **Summary:** Update voucher

### `/manager/sellers/{identifier}/`

- **Operation ID:** `manager_sellers_update`
- **Summary:** Update seller

### `/manager/sellers/{seller_id}/integrations/{identifier}/`

- **Operation ID:** `manager_sellers_integrations_update`
- **Summary:** Update integration

### `/manager/sellers/{seller_id}/integrations/{integration_id}/webhooks/{webhook_id}/`

- **Operation ID:** `manager_sellers_integrations_webhooks_update`
- **Summary:** Update integration webhook

### `/manager/sellers/{seller_id}/orders/{identifier}/`

- **Operation ID:** `manager_sellers_orders_update`
- **Summary:** Update order

### `/manager/sellers/{seller_id}/orders/{order_id}/items/{item_id}/`

- **Operation ID:** `manager_sellers_orders_items_update`
- **Summary:** Update order item

### `/manager/sellers/{seller_id}/orders/{order_id}/payments/{payment_id}/`

- **Operation ID:** `manager_sellers_orders_payments_update`
- **Summary:** Update payment

### `/manager/sellers/{seller_id}/orders/{order_id}/refunds/{refund_id}/`

- **Operation ID:** `manager_sellers_orders_refunds_update`
- **Summary:** Update refund

### `/manager/sellers/{seller_id}/products/{identifier}/`

- **Operation ID:** `manager_sellers_products_update`
- **Summary:** Update product

### `/manager/sellers/{seller_id}/products/{product_id}/images/{image_id}/`

- **Operation ID:** `manager_sellers_products_images_update`
- **Summary:** Update product image

### `/manager/sellers/{seller_id}/products/{product_id}/options/{option_id}/`

- **Operation ID:** `manager_sellers_products_options_update`
- **Summary:** Update product option

### `/manager/sellers/{seller_id}/products/{product_id}/prices/{price_id}/`

- **Operation ID:** `manager_sellers_products_prices_update`
- **Summary:** Update product price

### `/manager/sellers/{seller_id}/products/{product_id}/variants/{variant_id}/`

- **Operation ID:** `manager_sellers_products_variants_update`
- **Summary:** Update product variant

### `/manager/sellers/{seller_id}/products/{product_id}/variants/{variant_id}/prices/{price_id}/`

- **Operation ID:** `manager_sellers_products_variants_prices_update`
- **Summary:** Update product variant price

### `/manager/sellers/{seller_id}/vouchers/{identifier}/`

- **Operation ID:** `manager_sellers_vouchers_update`
- **Summary:** Update voucher

### `/user/orders/{identifier}/`

- **Operation ID:** `user_orders_update`
- **Summary:** Update order

### `/user/orders/{order_id}/items/{item_id}/`

- **Operation ID:** `user_orders_items_update`
- **Summary:** Update order item

## PATCH Methods (32)

### `/admin/categories/{identifier}/`

- **Operation ID:** `admin_categories_partial_update`
- **Summary:** Partially update category

### `/admin/company/`

- **Operation ID:** `admin_company_partial_update`
- **Summary:** Partially update company

### `/admin/integrations/{identifier}/`

- **Operation ID:** `admin_integrations_partial_update`
- **Summary:** Partially update integration

### `/admin/integrations/{integration_id}/webhooks{webhook_id}/`

- **Operation ID:** `admin_integrations_webhooks_partial_update`
- **Summary:** Partially update integration webhook

### `/admin/orders/{identifier}/`

- **Operation ID:** `admin_orders_partial_update`
- **Summary:** Partially update order

### `/admin/orders/{order_id}/items/{item_id}/`

- **Operation ID:** `admin_orders_items_partial_update`
- **Summary:** Partially update order item

### `/admin/orders/{order_id}/payments/{payment_id}/`

- **Operation ID:** `admin_orders_payments_partial_update`
- **Summary:** Partially update payment

### `/admin/orders/{order_id}/refunds/{refund_id}/`

- **Operation ID:** `admin_orders_refunds_partial_update`
- **Summary:** Partially update refund

### `/admin/products/{identifier}/`

- **Operation ID:** `admin_products_partial_update`
- **Summary:** Partially update product

### `/admin/products/{product_id}/images/{image_id}/`

- **Operation ID:** `admin_products_images_partial_update`
- **Summary:** Partially update product image

### `/admin/products/{product_id}/options/{option_id}/`

- **Operation ID:** `admin_products_options_partial_update`
- **Summary:** Partially update product option

### `/admin/products/{product_id}/prices/{price_id}/`

- **Operation ID:** `admin_products_prices_partial_update`
- **Summary:** Partially update product price

### `/admin/products/{product_id}/variants/{variant_id}/`

- **Operation ID:** `admin_products_variants_partial_update`
- **Summary:** Partially update product variant

### `/admin/products/{product_id}/variants/{variant_id}/prices/{price_id}/`

- **Operation ID:** `admin_products_variants_prices_partial_update`
- **Summary:** Partially update product variant price

### `/admin/sellers/{identifier}/`

- **Operation ID:** `admin_sellers_partial_update`
- **Summary:** Partially update seller

### `/admin/vouchers/{identifier}/`

- **Operation ID:** `admin_vouchers_partial_update`
- **Summary:** Partially update voucher

### `/manager/sellers/{identifier}/`

- **Operation ID:** `manager_sellers_partial_update`
- **Summary:** Partially update seller

### `/manager/sellers/{seller_id}/integrations/{identifier}/`

- **Operation ID:** `manager_sellers_integrations_partial_update`
- **Summary:** Partially update integration

### `/manager/sellers/{seller_id}/integrations/{integration_id}/webhooks/{webhook_id}/`

- **Operation ID:** `manager_sellers_integrations_webhooks_partial_update`
- **Summary:** Partially update integration webhook

### `/manager/sellers/{seller_id}/orders/{identifier}/`

- **Operation ID:** `manager_sellers_orders_partial_update`
- **Summary:** Partially update order

### `/manager/sellers/{seller_id}/orders/{order_id}/items/{item_id}/`

- **Operation ID:** `manager_sellers_orders_items_partial_update`
- **Summary:** Partially update order item

### `/manager/sellers/{seller_id}/orders/{order_id}/payments/{payment_id}/`

- **Operation ID:** `manager_sellers_orders_payments_partial_update`
- **Summary:** Partially update payment

### `/manager/sellers/{seller_id}/orders/{order_id}/refunds/{refund_id}/`

- **Operation ID:** `manager_sellers_orders_refunds_partial_update`
- **Summary:** Partially update refund

### `/manager/sellers/{seller_id}/products/{identifier}/`

- **Operation ID:** `manager_sellers_products_partial_update`
- **Summary:** Partially update product

### `/manager/sellers/{seller_id}/products/{product_id}/images/{image_id}/`

- **Operation ID:** `manager_sellers_products_images_partial_update`
- **Summary:** Partially update product image

### `/manager/sellers/{seller_id}/products/{product_id}/options/{option_id}/`

- **Operation ID:** `manager_sellers_products_options_partial_update`
- **Summary:** Partially update product option

### `/manager/sellers/{seller_id}/products/{product_id}/prices/{price_id}/`

- **Operation ID:** `manager_sellers_products_prices_partial_update`
- **Summary:** Partially update product price

### `/manager/sellers/{seller_id}/products/{product_id}/variants/{variant_id}/`

- **Operation ID:** `manager_sellers_products_variants_partial_update`
- **Summary:** Partially update product variant

### `/manager/sellers/{seller_id}/products/{product_id}/variants/{variant_id}/prices/{price_id}/`

- **Operation ID:** `manager_sellers_products_variants_prices_partial_update`
- **Summary:** Partially update product variant price

### `/manager/sellers/{seller_id}/vouchers/{identifier}/`

- **Operation ID:** `manager_sellers_vouchers_partial_update`
- **Summary:** Partially update voucher

### `/user/orders/{identifier}/`

- **Operation ID:** `user_orders_partial_update`
- **Summary:** Partially update order

### `/user/orders/{order_id}/items/{item_id}/`

- **Operation ID:** `user_orders_items_partial_update`
- **Summary:** Partially update order item

## DELETE Methods (25)

### `/admin/categories/{identifier}/`

- **Operation ID:** `admin_categories_destroy`
- **Summary:** Delete category

### `/admin/integrations/{identifier}/`

- **Operation ID:** `admin_integrations_destroy`
- **Summary:** Delete integration

### `/admin/integrations/{integration_id}/webhooks{webhook_id}/`

- **Operation ID:** `admin_integrations_webhooks_destroy`
- **Summary:** Delete integration webhook

### `/admin/orders/{identifier}/`

- **Operation ID:** `admin_orders_destroy`
- **Summary:** Delete order

### `/admin/orders/{order_id}/items/{item_id}/`

- **Operation ID:** `admin_orders_items_destroy`
- **Summary:** Delete order item

### `/admin/products/{identifier}/`

- **Operation ID:** `admin_products_destroy`
- **Summary:** Delete product

### `/admin/products/{product_id}/categories/{category_id}/`

- **Operation ID:** `admin_products_categories_destroy`
- **Summary:** Delete product category

### `/admin/products/{product_id}/images/{image_id}/`

- **Operation ID:** `admin_products_images_destroy`
- **Summary:** Delete product image

### `/admin/products/{product_id}/options/{option_id}/`

- **Operation ID:** `admin_products_options_destroy`
- **Summary:** Delete product option

### `/admin/products/{product_id}/prices/{price_id}/`

- **Operation ID:** `admin_products_prices_destroy`
- **Summary:** Delete product price

### `/admin/products/{product_id}/variants/{variant_id}/`

- **Operation ID:** `admin_products_variants_destroy`
- **Summary:** Delete product variant

### `/admin/products/{product_id}/variants/{variant_id}/prices/{price_id}/`

- **Operation ID:** `admin_products_variants_prices_destroy`
- **Summary:** Delete product variant price

### `/admin/vouchers/{identifier}/`

- **Operation ID:** `admin_vouchers_destroy`
- **Summary:** Delete voucher

### `/manager/sellers/{seller_id}/integrations/{identifier}/`

- **Operation ID:** `manager_sellers_integrations_destroy`
- **Summary:** Delete integration

### `/manager/sellers/{seller_id}/integrations/{integration_id}/webhooks/{webhook_id}/`

- **Operation ID:** `manager_sellers_integrations_webhooks_destroy`
- **Summary:** Delete integration webhook

### `/manager/sellers/{seller_id}/products/{identifier}/`

- **Operation ID:** `manager_sellers_products_destroy`
- **Summary:** Delete product

### `/manager/sellers/{seller_id}/products/{product_id}/categories/{category_id}/`

- **Operation ID:** `manager_sellers_products_categories_destroy`
- **Summary:** Delete product category

### `/manager/sellers/{seller_id}/products/{product_id}/images/{image_id}/`

- **Operation ID:** `manager_sellers_products_images_destroy`
- **Summary:** Delete product image

### `/manager/sellers/{seller_id}/products/{product_id}/options/{option_id}/`

- **Operation ID:** `manager_sellers_products_options_destroy`
- **Summary:** Delete product option

### `/manager/sellers/{seller_id}/products/{product_id}/prices/{price_id}/`

- **Operation ID:** `manager_sellers_products_prices_destroy`
- **Summary:** Delete product price

### `/manager/sellers/{seller_id}/products/{product_id}/variants/{variant_id}/`

- **Operation ID:** `manager_sellers_products_variants_destroy`
- **Summary:** Delete product variant

### `/manager/sellers/{seller_id}/products/{product_id}/variants/{variant_id}/prices/{price_id}/`

- **Operation ID:** `manager_sellers_products_variants_prices_destroy`
- **Summary:** Delete product variant price

### `/manager/sellers/{seller_id}/vouchers/{identifier}/`

- **Operation ID:** `manager_sellers_vouchers_destroy`
- **Summary:** Delete voucher

### `/user/orders/{identifier}/`

- **Operation ID:** `user_orders_destroy`
- **Summary:** Delete order

### `/user/orders/{order_id}/items/{item_id}/`

- **Operation ID:** `user_orders_items_destroy`
- **Summary:** Delete order item

