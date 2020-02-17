# Inventory

# Inventory

#### [Create an Inventory item](#create_inventory)
#### [Inventory model](#inventory_model)

## <a name="create_inventory"></a> Create an Inventory Item

![Inventory base](/assets/inventory/base.png) 

![New Inventory Unfilled](/assets/inventory/newInventoryUnfilled.png) 

![New Inventory Filled](/assets/supplier/newInventoryFilled.png) 

![Inventory List](/assets/supplier/inventoryList.png) 

## <a name="inventory_model></a> Inventory model
An Inventory model determines how you'd like to determine the costing of your inventory. For example, when you compare the Profit of you inventory, you need to ensure that the cost of the inventory is accurately reflected to ensure that you have a true reflection on what your profit margins are.

Kudoo supports the following Inventory costing methodologies:
* [FIFO](https://en.wikipedia.org/wiki/FIFO_and_LIFO_accounting)
* [LIFO](https://www.investopedia.com/terms/l/lifo.asp)
* [Weighted average](https://www.investopedia.com/terms/w/weightedaverage.asp)

The reason we only support these is that these are the only ones that are supported by [GAAP](https://en.wikipedia.org/wiki/Generally_Accepted_Accounting_Principles_(United_States)) and [IFRS](https://en.wikipedia.org/wiki/International_Financial_Reporting_Standards).

This means when you run your [Financial Reporting](../../../finance/2.3/reporting) through Kudoo that means you'll be compliant with your countries Accounting standards.

# Purchase Orders

#### [Create a Purchase Order](#create_po)
#### [Email a Purchase Order](#email_po)
#### [Receipt a Purchase Order](#receipt_po)
#### [Invoice a Purchase Order](#invoice_po)

## <a name="create_po"></a> Create a Purchase Order
![Base PO](./assets/po/base.png)

![Step One](./assets/po/newPOStep1.png)

![Step Two](./assets/po/newPOstep2.png)

## <a name="email_po"></a> Email a Purchase Order

## <a name="receipt_po"></a> Receipt a Purchase Order

## <a name="invoice_po"></a> Invoice a Purchase Order

# Sales

#### [Create a Sales order](#create_so)

## <a name="create_so"></a> Create a Sales order

# Suppliers

#### [Create a Supplier](#create_supplier)
#### [Terms of payment](#terms_payment)

## <a name="create_supplier"> Create a Supplier
Suppliers are critical for your business in order for you to purchase inventory and services.

To load a Supplier navigate to the `Supplier` section

![Supplier base](/assets/supplier/base.png)

Click `Create new Supplier`

![New Supplier Unfilled](/assets/supplier/newSupplier.png)

Please fill in all the fields as per the Suppliers details.

![New Supplier Filled](/assets/supplier/newSupplierFilled.png)

Please ensure that the Terms of Payment are correct

![Supplier List](/assets/supplier/supplierList.png)

## <a name="terms_payment"></a> Terms of payment
Terms of payment are the conditions regarding the payment of the Suppliers Invoices. These terms specify the period allowed to pay off the amount due.

Kudoo provides the following options: 
* Cash on Delivery
* 14 days from date of Invoice
* 30 days from date of Invoice
* 60 days from date of Invoice

When running a Payment proposal, Kudoo will use the Suppliers terms of payment to determine whether to pay their Invoices on that payrun.

Please see [Payment proposals](../../../finance/2.3/banking#payment_proposal) for more information.

# Warehouse
A warehouse is used to store Inventory items. Do not be confused by the name. A warehouse can be a store shelf in your retail operation. It can be a physical warehouse. What is important to understand is a warehouse is a concept of storing items in a logical grouping, in order so that you can track quantities of those items as well as the associated costs.

#### [Create a Warehouse](#create_warehouse)

## <a name="create_warehouse"></a> Create a Warehouse
Navigate to the Warehouse section and create a Warehouse.
