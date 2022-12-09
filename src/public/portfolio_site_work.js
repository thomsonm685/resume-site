

import order_webhook_microservice1 from '../public/order_webhook_microservice1.png'
import ruby_debugging1 from '../public/ruby_debugging1.png'
import custom_recharge_widget1 from '../public/custom_recharge_widget1.png'
import custom_recharge_widget2 from '../public/custom_recharge_widget2.png'
import wicked_edge1 from '../public/wicked_edge1.png'
import wicked_edge2 from '../public/wicked_edge2.png'
import wicked_edge3 from '../public/wicked_edge3.png'
import puffbar1 from '../public/puffbar1.png'
import puffbar2 from '../public/puffbar2.png'
import puffbar3 from '../public/puffbar3.png'
import pih1 from '../public/pih1.png'
import plug1 from '../public/plug1.png'
import plug2 from '../public/plug2.png'
import plug3 from '../public/plug3.png'
import forgotten_skincare1 from '../public/forgotten_skincare1.png'
import forgotten_skincare2 from '../public/forgotten_skincare2.png'
import forgotten_skincare3 from '../public/forgotten_skincare3.png'
import forgotten_skincare4 from '../public/forgotten_skincare4.png'
import lume1 from '../public/lume1.png'
import james_brand1 from '../public/james_brand1.png'
import sita1 from '../public/sita1.png'
import sita2 from '../public/sita2.png'
import fixable1 from '../public/fixable1.png'
import fixable2 from '../public/fixable2.png'
import fixable3 from '../public/fixable3.png'
import fixable4 from '../public/fixable4.png'
import buttons1 from '../public/buttons1.png'
import buttons2 from '../public/buttons2.png'
import buttons3 from '../public/buttons3.png'


export default [
    {
        title: "Order Webhook Microservice",
        description: `Speaking in broad terms and without mention of the specific client, this was a microservice built for a Shopify store. The application would listen for any orders placed, extract order data, then structure and validate it. After all this, it would send it to another external API. The whole build to production was about 5 hours.`,
        images: [order_webhook_microservice1],
        url: null
    },
    {
        title: "Debugging Ruby App",
        description: `Essentially Dance-Ed Tips had a bug in the code for a membership management system, written in Ruby. I was tasked with working with Ruby and Postgres.As someone whose main language is JavaScript, the first step was to learn a bit a of Ruby. After that I got the local environment setup for Rails and Postgres. This process was trial and error until I could find the bug, which was a missing check in the code. After implementing the correct check, it went to production and has worked since!`,
        images: [ruby_debugging1],
        url: 'https://www.danceedtips.com'
    },
    {
        title: "Custom ReCharge Widget",
        description: `The idea was to create a fully custom ReCharge widget. The goal was to make it so the site owner had full control over the design and it dynamically added products to the cart based on multiple inputs. I was able to create this in a few hours, to the design specifications of the owner, along with some of my own creativity. It is editable in the Shopify theme editor and integrate ReCharge seamlessly.`,
        images: [custom_recharge_widget1, custom_recharge_widget2],
        url: 'https://bestiekitchen.com'
    },
    {
        title: "Wicked Edge",
        description: `This project was front-end development and entailed many sub-tasks for Wicked Edge. Some select examples of the work are:

        - Implemented Geo-Location API: Here we used an API to detect where customers were visiting from and apply custom logic based on their location.
        
        - Confetti Animation And Cart-Shipping Counter: This was a simple CSS animation to throw confetti on the page when a shopper had reached a cart minimum AND was in the U.S. This also included a shipping counter to let the shopper know how far away they were from free-shipping.
        
        - Sticky Scroll: Another very simple and very front-end piece, this was a task to create sticky product images on the product page to follower the shopper as they scrolled.`,
        images: [wicked_edge1, wicked_edge2, wicked_edge3],
        url: 'https://wickededgeusa.com'
    },
    {
        title: "Puffbar",
        description: `Worked with Puffbar to make some front-end edits to their site. I created a new shipping page based on the wireframe and fixed a couple of mobile optimization issues they had. Ended up having to cut off the work early due to some family medical issues, but had plans to keep working together and work on some backend updates for their CRM.`,
        images: [puffbar1, puffbar2, puffbar3],
        url: 'https://puffbar.com'
    },
    {
        title: "Fixing Error for P.I.H",
        description: `Worked a quick job with the Paideia Institute of Technology, fixing a pagination error in the theme. They were looking to paginate by a larger number per row, so I ended up just having to change a hard-coded limitation in the theme.`,
        images: [pih1],
        url: 'https://store.paideiainstitute.org'
    },
    {
        title: "Klarna Troubleshooting",
        description: `Worked with The Plug Kicks (no longer active) to redesign their product bar on the home page, as well as to help them integrate Klarna banners into their site.`,
        images: [plug1,plug2,plug3],
        url: null
    },
    {
        title: "Forgotten Skin Care",
        description: `Worked closely on many edits with the owner of forgotten skin care. Everything from custom product templates/before-and-after pages, to mobile optimization. We ended up launching her store again with a new theme, customizing about every page, creating new theme settings, and building some pages from scratch.`,
        images: [forgotten_skincare1,forgotten_skincare2,forgotten_skincare3, forgotten_skincare4],
        url: 'https://forgottenskincare.com'
    },
    {
        title: "Lume",
        description: `Worked with Lume.com for a month, making front-end CSS/HTML changes, for things such as banners, rearranging product pages, color themes. Also worked on the logic a bit with Javascript/Shopify liquid, fixing a few issues including pagination.`,
        images: [lume1],
        url: 'https://www.eatlume.co'
    },
    {
        title: "Store Locator For The James Brand",
        description: `They we're having problems implementing a store locator app, and adding the script into their theme. So I ended up adding the script into their theme for them, on their three stores (country based), and doing a bit of styling.`,
        images: [james_brand1],
        url: 'https://thejamesbrand.com'
    },
    {
        title: "Copying Theme For SitaPK",
        description: `The client wanted to copy the style of the theme from mimimethod.com, and bring it over to edit on their website. I copied the HTML/CSS of the target website's theme. Also went in and wrote custom UI into the theme editor to control the theme.`,
        images: [sita1, sita2],
        url: 'https://sitapk.uscreen.io'
    },
    {
        title: "Fixable Form",
        description: `I created a dynamic form that displayed corresponding questions based on inputs, with around 100 possible outcomes. It would then check the customer zip code against the database to make sure they're in the service area. Then, on submission, would send the data to a google sheet for the client and alert them and the customer with an email.`,
        images: [fixable1, fixable2, fixable3, fixable4],
        url: null
    },
    {
        title: "Buttons Phone Form",
        description: `I created a form to give customers instant pricing for their phones. Using JavaScript I created a series of if-then statements. Essentially a customer would answer a series of questions to evaluate their device, then based on the answers, one of 78 prices would be displayed for them to accept or decline. I then built a system to send the form submissions to live google sheet, to view the form submissions in real-time.`,
        images: [buttons1, buttons2, buttons3],
        url: null
    },
    
]
