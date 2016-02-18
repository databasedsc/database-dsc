# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Company.create(
  [
    {
      "name": "Mustard",
      "logo": "https://crunchbase-production-res.cloudinary.com/image/upload/c_pad,w_250,h_140/v1455114908/tmpxdogqv3vysbaww9g3.png",
      "short_description": "The on demand staffing network"
    },
    {
      "name": "Boxever",
      "logo": "https://crunchbase-production-res.cloudinary.com/image/upload/c_pad,w_250,h_140/v1407341479/e8h5rkwhe0cnfsmwhppf.jpg",
      "short_description": "The on demand staffing network"
    },
    {
      "name": "Logentries",
      "logo": "https://crunchbase-production-res.cloudinary.com/image/upload/c_pad,w_250,h_140/v1415669358/cfx78b8ybfao4orxttaa.png",
      "short_description": "Real-time log management and analytics"
    }
  ]
)
