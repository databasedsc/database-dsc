# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Company.delete_all

Company.create(
  [
    {
      "name": "Mustard",
      "logo": "https://crunchbase-production-res.cloudinary.com/image/upload/c_pad,w_250,h_140/v1455114908/tmpxdogqv3vysbaww9g3.png",
      "short_description": "The on demand staffing network",
      "long_description": "Mustard instantly connects those with short term positions to fill, with the best available candidates. A data-science focussed company, pairing gamification and on demand technology to build the worlds largest and most functional network of instant talent.",
      "headquarters": "Dublin",
      "formerly_known_as": "",
      "founded": "2015",
      "founders": "Gavin Fogarty",
      "categories": "Technology, Social Recruiting, Event Management",
      "investors": "Undisclosed",
      "office_locations": "NDRC at the Digital Exchange, Crane Street, Dublin 8",
      "incubator": "NDRC",
      "funding_stage": "Seed",
      "employees": 6,
      "funding_amount": 250000,
      "product_stage": "Complete",
      "geo_markets": "EU",
      "business_model": "B2B",
      "company_stage": "Growth",
      "operational_status": "Active",
      "government_assistance": "Enterprise Ireland",
      "selling": true,
      "looking_for": "Introductions to hiring managers",
      "contact": "heya@mustard.ie",
      "acquisitions": "",
      "funding_rounds": [
        {
          "amount": "200k",
          "date": "June 2015",
          "type": "Seed"
        }
      ]
    },
    {
      "name": "Boxever",
      "logo": "https://crunchbase-production-res.cloudinary.com/image/upload/c_pad,w_250,h_140/v1407341479/e8h5rkwhe0cnfsmwhppf.jpg",
      "short_description": "Software to analyse customer/client profiles for companies.",
      "long_description": "Boxever is a “big data” platform for airlines. It's a real-time customer intelligence solution that enables airlines to leverage their online, offline and offsite customer data to create stronger, more profitable customer relationships.",
      "headquarters": "Dublin",
      "formerly_known_as": "",
      "founded": "2011",
      "founders": "Dave O'Flanagan, Alan Giles, Dermot O'Connor",
      "categories": "Travel, Big Data Analytics, Personalization",
      "investors": "NDRC - Seed, Series A; Tadhgh O'Toole - Angel; Bloom Equity - Angel; Conor Stanley - Angel; Delta Partners - Angel, Series A; Frontline Ventures - Series B; Polaris Partners - Series B; Silicon Valley Bank - Series B",
      "office_locations": "Ashford House, Tara Street, Dublin, Dublin 2; 34 Farnsworth Street, Floor 4, Boston, MA 02110, USA",
      "incubator": "NDRC",
      "funding_stage": "Series B",
      "employees": 150,
      "funding_amount": 18000000,
      "product_stage": "Complete",
      "geo_markets": "G",
      "business_model": "B2B",
      "company_stage": "Growth",
      "operational_status": "Active",
      "government_assistance": "NDRC",
      "selling": true,
      "looking_for": "Introductions to senior directors in airlines",
      "contact": "hello@boxever.com",
      "acquisitions": "",
      "funding_rounds": [
        {
          "amount": "Undisclosed",
          "date": "January 2011",
          "type": "Pre-seed"},
        {
          "amount": "1M",
          "date": "January 2012",
          "type": "Seed"},
        {
          "amount": "6M",
          "date": "January 2014",
          "type": "Series A"},
        {
          "amount": "12M",
          "date": "January 2016",
          "type": "Series B"}
      ]
    },
    {
      "name": "Logentries",
      "logo": "https://crunchbase-production-res.cloudinary.com/image/upload/c_pad,w_250,h_140/v1415669358/cfx78b8ybfao4orxttaa.png",
      "short_description": "Real-time log management and analytics",
      "long_description": "Logentries is the leading real-time log management and analytics service built for the cloud, making business insights from machine-generated log data easily accessible to development, IT and business operations teams of all sizes. With the broadest platform support and an open API, Logentries brings the value of log-level data to any system, to any team member, and to a community of more than 35,000 worldwide users. While traditional log management and analytics solutions require advanced technical skills to use, and are costly to set-up, Logentries provides an alternative designed for managing huge amounts of data, visualizing insights that matter, and automating in-depth analytics and reporting across its global user community. To sign up for the free Logentries service, visit http://logentries.com",
      "headquarters": "Dublin",
      "formerly_known_as": "",
      "founded": "2010",
      "founders": "Viliam Holub, Trevor Parsons",
      "categories": "Business Analytics, Application Performance Monitoring, Big Data Analytics",
      "investors": "NDRC, Seed Polaris Partners - Seed, Series A; Floodgate - Seed, Series A; Frontline Ventures - Series A; RRE Ventures - Series A",
      "office_locations": "26-28 Lomard Street, Dublin 2, Dublin; 34 Farnsworth Street, Floor 4, Boston, MA 02110, USA",
      "incubator": "NDRC",
      "funding_stage": "Acquired",
      "employees": 40,
      "funding_amount": 18000000,
      "product_stage": "Complete",
      "geo_markets": "G",
      "business_model": "B2B",
      "company_stage": "Growth",
      "operational_status": "Active",
      "government_assistance": "NDRC",
      "selling": true,
      "looking_for": "Senior technical talent",
      "contact": "hello@logentries.com",
      "acquisitions": "Acquired by Rapid7, October 2015",
      "funding_rounds": [
        { "amount": "Undisclosed", "date": "January 2010", type: "Pre-seed" },
        { "amount": "1.1m", "date": "January 2012", type: "Seed" },
        { "amount": "10m", "date": "January 2013", type: "Series A" }
      ]
    },
    {
      "name": "Trustev",
      "logo": "https://crunchbase-production-res.cloudinary.com/image/upload/c_pad,w_250,h_140/v1397752755/f03a27e49c1560c29f3521d5926d163f.jpg",
      "short_description": "Trustev increases sales and stops fraud for e-commerce and financial companies.",
      "long_description": "Trustev offers a totally modern approach ecommerce fraud prevention through real-time online identity verification. It focuses on validating the individual making the transaction, not just the payment method they're using. The platform delivers individual, real time decisions for every one of your customers using multiple dynamic data sources (behavioral, transactional and social) instead of restrictive rules based decisioning and profiling. Trustev’s easy to integrate platform works by verifying consumer’s identities in real-time, using thousands of dynamic data points from sources such as deep location, email verification, device ID, social fingerprinting, proxy/VPN piercing, site velocity & behavior, browser ID and mobile location. It uses proprietary algorithms to combine all this data and compile it into a single, simple score of 1-100. This score is then used to provide a recommendation or allow, deny of flag the transaction. The Trustev platform enables rapid identity decisions in real time with an easy to integrate (very light touch), completely data driven and cost effective solution that works in the background, to ensure no disruption to the customer’s online experience. This results in a significant reduction in false positives leading to substantially increased revenues and increased sales opportunities while maintaining a customer centric experience at all times. Trustev's solution is focused on dramatically reducing the cost burden of fraud on your business, the cost of policing fraud and also maximizing revenues opportunities.",
      "headquarters": "Cork",
      "formerly_known_as": "",
      "founded": "2013",
      "founders": "Pat Phelan, Chris Kennedy",
      "categories": "Security, E-Commerce, Fraud Detection, Software",
      "investors": "Wayra - Angel, Seed, Convertible Note; Shane Naughton - Seed; Notion Capital - Seed; Mangrove Capital Partners - Seed, Convertible Note; Kevin Abosch - Seed; Greycroft Partners - Seed, Convertible Note; Enterprise Ireland - Seed; David Coallier - Seed; ACT Venture Capital - Seed, Convertible Note",
      "office_locations": "2100 Cork Airport Business Park, Cork; 355 Lexington Avenue, New York, NY 10017, USA; 15 West 28th Street, Floor 8, New York, NY 10001, USA",
      "incubator": "NDRC",
      "funding_stage": "Acquired",
      "employees": 29,
      "funding_amount": 7500000,
      "product_stage": "Complete",
      "geo_markets": "G",
      "business_model": "B2B",
      "company_stage": "Early-stage",
      "operational_status": "Active",
      "government_assistance": "Enterprise Ireland",
      "selling": true,
      "looking_for": "Front-end designers",
      "contact": "pat.phelan@trustev.com",
      "acquisitions": "Acquired by TransUnion, December 2015",
      "funding_rounds": [
        { "amount":  "300k", "date": "February 2013", "type": "Angel" },
        { "amount":  "3m", "date": "October 2013", "type": "Seed" },
        { "amount":  "500k", "date": "December 2013", "type": "Seed" },
        { "amount":  "3.21m", "date": "November 2013", "type": "Convertible Debt" }
      ]
    },
    {
      "name": "Soundwave",
      "logo": "https://crunchbase-production-res.cloudinary.com/image/upload/c_pad,w_250,h_140/v1397750808/76694a4fb67d1d5c5e5438b5a2668811.png",
      "short_description": "Soundwave tracks what songs people are listening to on their smartphones and where in real time",
      "long_description": "Backed by Mark Cuban and ACT Venture Capital, Soundwave is a mobile music-discovery startup founded in 2012. Soundwave tracks what songs people are listening to on their smartphones and where in real time. Powered by unique patent-pending technology, users can plug into different groups of people and locations in real time to see what songs are trending & discover new music as quickly as it is played. Voted as Best Innovation in Music 2013 by Apple.",
      "headquarters": "Dublin",
      "formerly_known_as": "",
      "founded": "2012",
      "founders": "Aidan Sliney, Craig Watson, Brendan O'Driscoll",
      "categories": "Music, Apps, Analytics, Local, Social Media, Real Time, Location Based Services",
      "investors": "ACT Venture Captal - Seed, Venture; Colin Wiel - Venture; Enterprise Ireland - Seed; Iain MacDonald - Venture; Matthew Le Merle - Seed; Mike Ryan - Venture; NDRC - Seed; Paddy Holahan - Venture; Per Brilloth - Venture; Radical Investments - Seed; Spark Labs Global - Venture; Trevor Bowen - Venture; Xandez Investments LLP - Venture",
      "office_locations": "1 Rathmines Road Upper, Rathmines, Dublin 6, Dublin",
      "incubator": "NDRC",
      "funding_stage": "Acquired",
      "employees": 23,
      "funding_amount": 3500000,
      "product_stage": "Complete",
      "geo_markets": "G",
      "business_model": "B2C",
      "company_stage": "Acquired",
      "operational_status": "Active",
      "government_assistance": "NDRC, Enterprise Ireland",
      "selling": true,
      "looking_for": "Senior advisors to join our board",
      "contact": "hello@soundwave.com",
      "acquisitions": "Acquired by Spotify, January 2016",
      "funding_rounds": [
        {
          "amount": "200k",
          "date": "June 2015",
          "type": "Seed"
        }
      ]
    },

    {
      "name": "Bizimply",
      "logo": "https://crunchbase-production-res.cloudinary.com/image/upload/c_pad,w_250,h_140/v1413433857/sgrxiqrbqingd8pemeh2.jpg",
      "short_description": "SaaS platform to assist in all aspects of running a business.",
      "long_description": "Bizimply is a new web tool for restaurateurs and retailers. The product allows managers replace their current end-of-shift reporting, with a cloud-based solution that allows the business owner track what's happening in their business anytime and anywhere.",
      "headquarters": "Dublin",
      "formerly_known_as": "",
      "founded": "2011",
      "founders": "Mikey Cannon, Norman Hewson,John Forde",
      "categories": "Enterprise Software, SaaS, Restaurants, Online Scheduling",
      "investors": "NDRC - Seed",
      "office_locations": "St. Martin's House, Waterloo Road, Dublin 4, Dublin",
      "incubator": "NDRC",
      "funding_stage": "Series A",
      "employees": 14,
      "funding_amount": 750000,
      "product_stage": "Complete",
      "geo_markets": "G",
      "business_model": "B2B",
      "company_stage": "Early-stage",
      "operational_status": "Active",
      "government_assistance": "NDRC",
      "selling": true,
      "looking_for": "Investment",
      "contact": "info@bizimply.com",
      "acquisitions": "",
      "funding_rounds": [
        {
          "amount": "200k",
          "date": "June 2015",
          "type": "Seed"
        }
      ]
    },
    {
      "name": "Storyful",
      "logo": "https://crunchbase-production-res.cloudinary.com/image/upload/c_pad,w_250,h_140/v1398512457/ktvqrctju1se8d5vlg1q.png",
      "short_description": "Social media news agency and destination for the shared curation of news and collaborative storytelling.",
      "long_description": "",
      "headquarters": "Dublin",
      "formerly_known_as": "",
      "founded": "2009",
      "founders": "Mark Little",
      "categories": "News, Publishing, Media, Social Media",
      "investors": "SOSV - Seed; ACT Venture Capital - Venture",
      "office_locations": "Ferry House, 48 Lower Mount Street, Dublin 2, Dublin",
      "incubator": "",
      "funding_stage": "Acquired",
      "employees": 93,
      "funding_amount": nil,
      "product_stage": "Complete",
      "geo_markets": "G",
      "business_model": "B2B",
      "company_stage": "Acquired",
      "operational_status": "Active",
      "government_assistance": "",
      "selling": true,
      "looking_for": "Larger office space",
      "contact": "contact@storyful.com",
      "acquisitions": "Acquired by News Corp, December 2013",
      "funding_rounds": [
        {
          "amount": "200k",
          "date": "June 2015",
          "type": "Seed"
        }
      ]
    },
    {
      "name": "CurrencyFair",
      "logo": "https://crunchbase-production-res.cloudinary.com/image/upload/c_pad,w_250,h_140/v1397180574/437b084cbaf38ffb6920c3c91880b4be.jpg",
      "short_description": "CurrencyFair is a P2P online marketplace enabling individuals and businesses to exchange currencies and send funds to bank accounts.",
      "long_description": "CurrencyFair allows individuals and businesses to exchange currencies and send funds to bank accounts worldwide. It uses a unique person-to-person online marketplace to facilitate currency exchange between users, in a simple and anonymous fashion.",
      "headquarters": "Dublin",
      "formerly_known_as": "",
      "founded": "2009",
      "founders": "Sean Barrett, Jonathan Potter, Brett Meyers",
      "categories": "Finance, Virtualization, Peer-to-Peer, P2P Money Transfer",
      "investors": "Frontline Ventures - Seed, Series A; Enterprise Ireland - Venture; Octopus Ventures - Series A",
      "office_locations": "Colm House, 91 Pembroke Rd, Ballsbridge, Dublin 4, Dublin",
      "incubator": "",
      "funding_stage": "Series A",
      "employees": 75,
      "funding_amount": 18000000,
      "product_stage": "Complete",
      "geo_markets": "G",
      "business_model": "B2C",
      "company_stage": "Growth",
      "operational_status": "Active",
      "government_assistance": "",
      "selling": true,
      "looking_for": "Product managers",
      "contact": "theteam@currencyfair.com",
      "acquisitions": "",
      "funding_rounds": [
        {
          "amount": "200k",
          "date": "June 2015",
          "type": "Seed"
        }
      ]
    },
    {
      "name": "PageFair",
      "logo": "https://crunchbase-production-res.cloudinary.com/image/upload/c_pad,w_250,h_140/v1417090159/umtr465tbqnet3z9t3sx.png",
      "short_description": "Adblocking will cost more than US$6 billion in 2014. PageFair allows websites to recover some of this lost revenue.",
      "long_description": "Our goal at PageFair is to protect the future of the free internet by re-establishing a fair deal between web users and the content creators who they want to support. We started PageFair because we personally experienced the damage adblocking can do to a website. While we recognize that visitors need to defend themselves from distracting, intrusive, inappropriate, disingenuous or malicious advertising, the rise of adblocking is now leading to the death of quality free websites.PageFair is an international startup based in Dublin, Ireland. Founded in 2012, the company was initially funded by its founders with additional seed capital from Tribal Ventures, Frontline Ventures, and Enterprise Ireland. Hundreds of publishers now use PageFair to measure the cost of adblocking and to display alternative non-intrusive advertising to adblockers.",
      "headquarters": "Dublin",
      "formerly_known_as": "",
      "founded": "2012",
      "founders": "Neil O'Connor, Brian McDonnell, Sean Blanchfield",
      "categories": "Advertising, Software, Digital Media",
      "investors": "Tribal Ventures - Angel, Seed; Frontline Ventures - Angel; Enterprise Ireland - Angel",
      "office_locations": "Unit D, Mount Pleasant Business Park, Mount Pleasant Avenue, Ranelagh, Dublin 6, Dublin",
      "incubator": "",
      "funding_stage": "Seed",
      "employees": 12,
      "funding_amount": 3500000,
      "product_stage": "Complete",
      "geo_markets": "G",
      "business_model": "B2B",
      "company_stage": "Early-stage",
      "operational_status": "Active",
      "government_assistance": "Enterprise Ireland",
      "selling": true,
      "looking_for": "Further investment",
      "contact": "info@pagefair.com",
      "acquisitions": "",
      "funding_rounds": [
        {
          "amount": "200k",
          "date": "June 2015",
          "type": "Seed"
        }
      ]
    },
    {
      "name": "Pointy",
      "logo": "https://crunchbase-production-res.cloudinary.com/image/upload/c_pad,w_250,h_140/v1441267664/hbcjrjrj5vch9bcuygr2.png",
      "short_description": "A Pointy box brings customers to your shop door by automatically displaying your products online.",
      "long_description": "Pointy makes it easy to find things in local shops. From coconut water to chisels, Pointy knows where to find it.",
      "headquarters": "Dublin",
      "formerly_known_as": "",
      "founded": "2014",
      "founders": "Mark Cummins, Charles Bibby",
      "categories": "Wireless, Internet, Services",
      "investors": "Frontline Ventures - Seed",
      "office_locations": "National College of Ireland Business Centre, Mayor Square, IFSC, Dublin 1, Dublin",
      "incubator": "",
      "funding_stage": "Seed",
      "employees": 4,
      "funding_amount": 3500000,
      "product_stage": "Complete",
      "geo_markets": "EU",
      "business_model": "B2B",
      "company_stage": "Early-stage",
      "operational_status": "Active",
      "government_assistance": "",
      "selling": true,
      "looking_for": "Senior sales people",
      "contact": "info@pointy.com",
      "acquisitions": "",
      "funding_rounds": [
        {
          "amount": "200k",
          "date": "June 2015",
          "type": "Seed"
        }
      ]
    }
  ]
)



