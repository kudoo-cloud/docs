# Health

# Customers 

#### [Create a Customer](#create_Customer)
#### [View a Customer's details](#view_Customer_details)
#### [View a Customer's Invoices](#view_Customer_invoices)
#### [Archive a Customer](#archive_Customer)
#### [Delete a Customer](#delete_Customer)

## <a name="create_Customer"></a> Create a Customer 
First navigate to the Customer screen

![Customers unfilled](/assets/Customers/Customers_unfilled.png)

After clicking the `Create Customer` button, you'll be able to create a new `Customer`

![New Customer unfilled](/assets/Customers/new_Customer_unfilled.png)

Fill in all the `Customers` details.

![New Customer filled](/assets/Customers/new_Customer_filled.png)

And then click `Save new Customer`. Congratulations! You've created your first `Customer`.

![Customers filled](/assets/Customers/Customers_filled.png)

## <a name="view_Customer_details"></a> View a Customer's details 

To view a `Customers` details, navigate to the `Customers` screen.

![Customers filled](/assets/Customers/Customers_filled.png)

From there, you can click on the `Customer` whose details you'd like to see.

![Customer details](/assets/Customers/Customer_details.png)

You can perform a quick edit, if you'd like to change any of the `Customers` information.

![Customer quick edit](/assets/Customers/Customer_quickedit.png)
## <a name="view_Customer_invoices"></a> View a Customer's Invoices 

To view a `Customers` `Invoices`, navigate to the `Customers` screen.

![Customers filled](/assets/Customers/Customers_filled.png)

From there you can click on the `Customer` to open their details.

![Customer details](/assets/Customers/Customer_details.png)

Then click the `Invoices` button to view that `Customers Invoces`.


## <a name="archive_Customer"></a> Archive a Customer 
Sometimes you may want to clean up your `Customer` list. To do this we can archive `Customers`. Navigate to the `Customers` screen. Find the `Customer` you'd like to archive and then click on `X` on the `Customers` record.

![Customers filled](/assets/Customers/Customers_filled.png)

You'll be asked to confirm you really want to archive that `Customer` 

![Archive Customer](/assets/Customers/archive_Customer.png)

Once a `Customer` is archived, you can still view them, however you will no longer be able to `Invoice` them or submit `Timesheets` against them.

## <a name="delete_Customer"></a> Delete a Customer 

If you'd like to delete a `Customer`, they'll first need to be [archived](#archive_Customer). First navigate to the `Customers` screen.

![Customers filled](/assets/Customers/Customers_filled.png)

Then navigate to the archived `Customers` tab.

![All Archived Customers](/assets/Customers/Customer_archived_all.png)

If you then click the `X` relevant to the `Customer` you'd like to delete, you'll be asked to confirm you're 100% positive you'd like to delete the `Customer`.

![Delete single Customer](/assets/Customers/delete_Customer.png)

You could also decide to delete all archived `Customers`.

![Delete all Archived Customers](/assets/Customers/delete_all_archived.png)

Once confirming you're happy to delete the `Customer`, the `Customer` will be removed from your company.

![Customer delete successful](/assets/Customers/delete_success.png)

# Healthcare Providers

#### [Create a Customer](#create_Customer)
#### [View a Customer's details](#view_Customer_details)
#### [View a Customer's Invoices](#view_Customer_invoices)
#### [Archive a Customer](#archive_Customer)
#### [Delete a Customer](#delete_Customer)

Health care providers are people employed by your company to provide Healthcare services. 

# Invoices
The following guides will help you process Invoices in Kudoo.

#### [Create a free text invoice](#fte)
#### [Create a project invoice](#prj_invoice)
#### [Convert timesheet(s) to invoice(s)](#timesheet_invoice)
#### [Mark invoice as paid](#pay_invoice)

## <a name="fte"></a> Create a free text invoice

A free text invoice is used when you would like to generate an ad hoc invoice for your `Patients`. These are great for when something small comes up or if you've made a mistake on a previous invoice.

To create a free text invoice, navigate to the `Invoices` screen.

![Invoices unfilled](/assets/invoices/invoices_unfilled.png)

Click the `Create new Invoice` button. From here you can see there are three types of `Invoices` within `Kudoo`. If you hover over the `?` you can see a popup explaining what the `Invoice` type is for. We're going to click `Free text Invoice`

![New Invoice](/assets/invoices/new_invoice.png)

We can now start creating an `Invoice`. The first step is to add a `Patient`.

![New Free Text Invoice](/assets/invoices/fte_unfilled.png)

We'll then be able to either add an existing `Service` or else we'll be able to add a free text line to the `Invoice`. We can also specify if we'd like to add [GST](https://en.wikipedia.org/wiki/Goods_and_services_tax_(Australia)) to the `Invoice` line.

![Filled Free Text Invoice](/assets/invoices/fte_filled.png)

Now that we've added a `Patient` and some `Invoice` lines, we can specify the date of the `Invoice` as well as when the `Invoice` should be paid by.

![Free Text Invoice details](/assets/invoices/fte_filled_details.png)

After clicking `Next` you'll be able to review all the details you entered.

![Review Free Text Invoice](/assets/invoices/fte_review.png)

From here you can then send `Invoice` to your `Patient`.

![Send Invoice](/assets/invoices/send_invoice.png)

Enter the name and the email address of the people you'd like to send the `Invoice` to.

![Send Invoice filled](/assets/invoices/send_invoice_filled.png)

After clicking `Submit`, the `Invoice` will be sent and the `Invoice` will be created for your company.

![Free Text Invoice created successfully](/assets/invoices/fte_created_success.png)
## <a name="prj_invoice"></a> Create a project invoice

Project `Invoices` allow you to `Invoice` your `Patients` for fixed price `Services`. Currently `Kudoo` allows you to `Invoice` your `Patients` when the `Project` starts and again when the `Project` is successfully completed.

To follow along with this guide, please ensure you've [created a project with fixed price services](../projects/#add_services). Now navigate to the `Invoices` screen.

![Invoices unfilled](/assets/invoices/invoices_unfilled.png)

Click `Create new Invoice`.

![New Invoice](/assets/invoices/new_invoice.png)

![Add Project to Invoice](/assets/invoices/prj_step1.png)


## <a name="timesheet_invoice"></a> Convert timesheet(s) to invoice(s)

Converting timsheet(s) to `Invoices` couldn't be easier in `Kudoo`. All you need to do is navigate to the `Invoices` screen.

![Invoices unfilled](/assets/invoices/invoices_unfilled.png)

Click `Create new Invoice`. From there you can click `Convert timesheet to Invoice`.

![New Invoice](/assets/invoices/new_invoice.png)

In the first step, you can select the `Patient` that the `Invoice` is for.

![Select patient](/assets/invoices/tm_invoice.png)

After clicking `Next` you'll be presented with a list of the `timesheets` of all `workers` within your company. 

**Please note** Timesheets with a status of `Draft` will not be included.

You can then select which `Timesheets` you'd like to convert.

![Select Timesheets](/assets/invoices/tm_invoice_timesheets.png)

In the details section you can then specify the date of the `Invoice` as well as when the `Invoice` is due.

![Add details to Invoice](/assets/invoices/tm_invoice_details.png)

You'll now be able to review the `Invoice` to make sure everything is correct before sending off to the `Patient`.

![Review Timesheet Invoice](/assets/invoices/tm_invoice_review.png)

You can now send the `Invoice` through the the `Patient`.

![Send Invoice](/assets/invoices/tm_send_invoice.png)

Congratulations. You have successfully converted timesheet(s) to an `Invoice`.

![Timesheet Invoice created successfully](/assets/invoices/tm_success.png)

## <a name="pay_invoice"></a> Mark Invoice as paid

Currently `Kudoo` does not integrate with any third party payment providers. As such when you receive payment in your bank account, you can then login to `Kudoo` and mark the `Invoices` as paid.

To do this navigate to the unpaid `Invoices` screen.

![Unpaid Invoices](/assets/invoices/unpaid_invoices.png)

Find the `Invoice` you'd like to mark as paid and then click on the `$` icon to mark it as paid.

![Unpaid Invoices hover](/assets/invoices/unpaid_invoices_hover.png)

You will receive a success message, indicating that it was successfully marked as paid.

![Invoice marked as Paid](/assets/invoices/invoice_paid.png)

You can now see the `Invoice` under the paid `Invoices` section.

![Paid Invoices screen](/assets/invoices/paid_invoices.png)

# Patients 

#### [Create a Patient](#create_Patient)
#### [View a Patient's details](#view_Patient_details)
#### [View a Patient's Invoices](#view_Patient_invoices)
#### [Archive a Patient](#archive_Patient)
#### [Delete a Patient](#delete_Patient)

## <a name="create_Patient"></a> Create a Patient 
First navigate to the Patient screen

![Patients unfilled](/assets/Patients/Patients_unfilled.png)

After clicking the `Create Patient` button, you'll be able to create a new `Patient`

![New Patient unfilled](/assets/Patients/new_Patient_unfilled.png)

Fill in all the `Patients` details.

![New Patient filled](/assets/Patients/new_Patient_filled.png)

And then click `Save new Patient`. Congratulations! You've created your first `Patient`.

![Patients filled](/assets/Patients/Patients_filled.png)

## <a name="view_Patient_details"></a> View a Patient's details 

To view a `Patients` details, navigate to the `Patients` screen.

![Patients filled](/assets/Patients/Patients_filled.png)

From there, you can click on the `Patient` whose details you'd like to see.

![Patient details](/assets/Patients/Patient_details.png)

You can perform a quick edit, if you'd like to change any of the `Patients` information.

![Patient quick edit](/assets/Patients/Patient_quickedit.png)
## <a name="view_Patient_invoices"></a> View a Patient's Invoices 

To view a `Patients` `Invoices`, navigate to the `Patients` screen.

![Patients filled](/assets/Patients/Patients_filled.png)

From there you can click on the `Patient` to open their details.

![Patient details](/assets/Patients/Patient_details.png)

Then click the `Invoices` button to view that `Patients Invoces`.


## <a name="archive_Patient"></a> Archive a Patient 
Sometimes you may want to clean up your `Patient` list. To do this we can archive `Patients`. Navigate to the `Patients` screen. Find the `Patient` you'd like to archive and then click on `X` on the `Patients` record.

![Patients filled](/assets/Patients/Patients_filled.png)

You'll be asked to confirm you really want to archive that `Patient` 

![Archive Patient](/assets/Patients/archive_Patient.png)

Once a `Patient` is archived, you can still view them, however you will no longer be able to `Invoice` them or submit `Timesheets` against them.

## <a name="delete_Patient"></a> Delete a Patient 

If you'd like to delete a `Patient`, they'll first need to be [archived](#archive_Patient). First navigate to the `Patients` screen.

![Patients filled](/assets/Patients/Patients_filled.png)

Then navigate to the archived `Patients` tab.

![All Archived Patients](/assets/Patients/Patient_archived_all.png)

If you then click the `X` relevant to the `Patient` you'd like to delete, you'll be asked to confirm you're 100% positive you'd like to delete the `Patient`.

![Delete single Patient](/assets/Patients/delete_Patient.png)

You could also decide to delete all archived `Patients`.

![Delete all Archived Patients](/assets/Patients/delete_all_archived.png)

Once confirming you're happy to delete the `Patient`, the `Patient` will be removed from your company.

![Patient delete successful](/assets/Patients/delete_success.png)

# Services

#### [Create a time based service](#time_service)
#### [Create a fixed price service](#fixed_service)
#### [Archive a service](#archive_service)
#### [Delete a service](#delete_service)

## <a name="time_service"></a> Create a time based service
A time based service can be used by [Workers](../workers) to log time in their [timesheets](../../../user/1.0/timesheets).

Navigate to the `timesheets` screen and then click the `Create new Service` button.

![Services empty](/assets/services/services_empty.png)

Here you'll be able to create a new `Service`.

![Create new service - empty](/assets/services/new_service_empty.png)

Enter the details of your new `Service`.

![New service - time based](/assets/services/new_service_time.png)

Click `Save Template` and you'll have successfully created a time based `Service`.

![New service - time based successfully create](/assets/services/new_service_timesuccess.png)

## <a name="fixed_service"></a> Create a fixed price service
Fixed price `Services` are `Services` that you charge a single price for.

To setup a fixed price `Service` navigate to the `Services` screen. From there you can click the `Create new Service` button.

![Services filled](/assets/services/services_filled.png)

Fill out the details for your new `Service` and then click `Save template`.

![Fixed services filled](/assets/services/fixed_service.png)

## <a name="archive_service"></a> Archive a service
Sometimes you'll need to archive a `Service` that is no longer offered by your company.

To do this navigate to the `Services` screen.

![Services filled](/assets/services/services_filled.png)

Click on the `X` next to the `Service` you'd like to archive.

![Archive a service](/assets/services/archive_service.png)

Once you've confirmed you would like to archive the `Service`, the `Service` will be moved to the archive section.

![Archive success](/assets/services/archive_success.png)

You'll then be able to see the newly archived `Service`.

![Archive service screen](/assets/services/archive_screen.png)

## <a name="delete_service"></a> Delete a service
In `Kudoo` you can only delete a `Service` that is archived.

Navigate to the archived `timesheets` screen.

![Archive service screen](/assets/services/archive_screen.png)

You can then click on the `X` next to the relevent `Service`.

![Delete service](/assets/services/service_delete.png)

You'll be notified that the `Service` has been successfully deleted.

![Successful delete](/assets/services/delete_success.png)