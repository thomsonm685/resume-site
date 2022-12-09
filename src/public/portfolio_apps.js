

import pekel1 from '../public/pekel1.png'
import pekel2 from '../public/pekel2.png'
import pekel3 from '../public/pekel3.png'
import pekelBanner from '../public/pekel_banner.jpg'

import easyEditsBanner from '../public/easy_edits_banner.svg'
import easy_edits1 from '../public/easy_edits1.png'
import easy_edits2 from '../public/easy_edits2.png'
import easy_edits3 from '../public/easy_edits3.png'
import easy_edits4 from '../public/easy_edits4.png'


import dropVoiceBanner from '../public/drop_voice_banner.svg'
import drop_voice1 from '../public/drop_voice1.webp'
import drop_voice2 from '../public/drop_voice2.webp'
import drop_voice3 from '../public/drop_voice3.webp'

import orderManagerBanner from '../public/order_manager_banner.svg'
import order_manager1 from '../public/order_manager1.png'
import order_manager2 from '../public/order_manager2.png'
import order_manager3 from '../public/order_manager3.png'
import order_manager4 from '../public/order_manager4.png'


import orderInsuranceBanner from '../public/order_insurance_banner.png'
import order_insurance1 from '../public/order_insurance1.jpg'
import order_insurance2 from '../public/order_insurance2.jpg'
import order_insurance3 from '../public/order_insurance3.jpg'
import order_insurance4 from '../public/order_insurance4.jpg'

import pMReportingBanner from '../public/pm_reporting_banner.svg'
import pm_reports1 from '../public/pm_reports1.jpg'



export default [
    {
        title: "Pekel",
        banner:pekelBanner,
        description: "Pekel is a publicly listed Shopify app that I was the sole developer on. It started off as a client project, (shown as 'PM Reporting' in my portfolio), then shifted to creating a public version. The app essentially parses and combines data from ReCharge pre-paid subscription orders with their Shopify counterparts. This lets the user pull in orders for any date range and get a G.A.A.P compliant report that shows what they have actually earned that month. This same app beta tested and brought a store up to speed on over 14,000 orders and a years worth of data. The app uses integrations with Shopify, ReCharge and AirTable. The Airtable integration is pending public approval, but essentially let you connect your AirTable account to the app and have the reports go directly to your table. Currently the reports export as CSV's. The app was a complicated but very rewarding project. It let's users properly file taxes, account revenue, and get appraised for public sale.",
        images: [pekel1,pekel2,pekel3],
        url: "https://apps.shopify.com/pekel"
    },
    {
        title: "Easy Edits",
        banner:easyEditsBanner,
        description: `Easy Edits is a public Shopify app, owned by me. It's a click and change, drag and drop editor for all existing pages on a site. It has the ability to edit for mobile and save/revert updates, and apply edits to single pages, multiple pages, and site-wide. It's an in admin editor that writes CSS code for the user and adds it to the theme.`,
        images: [easy_edits1,easy_edits2,easy_edits3,easy_edits4],
        url: "https://apps.shopify.com/easy-edits"
    },
    {
        title: "Drop Voice",
        banner:dropVoiceBanner,
        description: "Drop Voice is another publically listed Shopify App I was the sole developer of. The app uses MongoDB, and Amazon database, and the rest of the MERN stack. Drop Voice lets you upload voice memos to the app, attach them to products, and the have the voice note displayed on checkout. The app also sends a text and email upon product delivery.",
        images: [drop_voice1,drop_voice2,drop_voice3],
        url: "https://apps.shopify.com/drop-voice"
    },
    {
        title: "Order Manager",
        banner:orderManagerBanner,
        description: "Worked with an Australian farm that sold its products online. They had a problem with order fulfillment in their warehouse, as in the rush of things errors would be made packing orders and working off of a printed CSV. I build an order management app to pull in all orders for that day into lists for each packer, with large pictures, the ability to skip or cancel products, and to check off the orders/products as they go. It was built optimized for the tablets that each worker has. I also included an admin page where they could run the function to update the orders for that day, create new workers, select who all need a list for that day, remove workers, and get CSV's based on different citeria. Currently, we're in development to move to actually fulfill the orders within the app, and charge on fulfillment based on the actual product weight.",
        images: [order_manager1,order_manager2,order_manager3,order_manager4],
        url: "https://www.ritasfarm.com.au"
    },
    {
        title: "Order Insurance",
        banner:orderInsuranceBanner,
        description: "Worked with a motorsports company to create an app to sell optional order insurance, and track the sales and claims data. I went about it by using the draftOrder GQL mutation to create the insurance product as the customer goes to checkout with the 'add insurance' checked, making the price of insurance a % of the order that is set by the store owner, and redirecting to a new checkout with the insurance in cart. Then I also created an admin that lets you track sales, claims and profit by a date range.",
        images: [order_insurance1,order_insurance2,order_insurance3,order_insurance4],
        url: "https://www.kiesmotorsports.com"
    },
    {
        title: "PM Reporting",
        banner:pMReportingBanner,
        description: `This was a very complicated build for a site called PourMore, and was the private pre-cursor to Pekel. The problem was PourMore sold subscriptions on Shopify rising ReCharge, and upon using ReCharge they had no way to properly and accurately do accounting for their pre-paid subscriptions in a G.A.A.P compliant way.

        The goal of this project was to take order data from ReCharge and order data from Shopify, combine it so all revenue was reported in an accrual accounting sense, run the report every month to keep up to date, and finally export it automatically to an AirTable.
        
        The solution was a custom Shopify App using ReCharge, Shopify, and AirTable APIs. The app runs with monthly CRON jobs.

The custom app is currently in use and runs monthly with no problems. PourMore can now be G.A.A.P compliant, easing their tax reporting and letting them receive evaluation.`,
        images: [pm_reports1],
        url: "https://pourmore.com"
    },
]
