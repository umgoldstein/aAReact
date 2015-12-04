# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

new_york = Bench.create(description: "This is New York", lat: 40.7127 , lng: -74.0059, seating: 5)
bench1 = Bench.create(description: "First Bench", lng: -74.002845, lat: 40.725103, seating: 2)
bench2 = Bench.create(description: "Second Bench", lng: -73.985436, lat: 40.729772, seating: 4)
bench3 = Bench.create(description: "Third Bench", lng: -74.000881, lat: 40.740054, seating: 3)
bench4 = Bench.create(description: "Fourth Bench", lng: -73.981508, lat: 40.743436, seating: 2)
bench5 = Bench.create(description: "Fifth Bench", lng: -73.992310, lat: 40.753852, seating: 1)
