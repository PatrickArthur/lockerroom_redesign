# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.create(name: 'patrick', email: "pa@arthurfamily.ws", password: "password", password_confirmation: "password", avatar: Rails.root.join("/Users/patrickarthur/Desktop/ivar.jpeg").open)
User.create(name: 'mike', email: "mike@test.com", password: "password", password_confirmation: "password", avatar: Rails.root.join("/Users/patrickarthur/Desktop/ragnar.jpeg").open)
User.create(name: 'bob', email: "bob@test.com", password: "password", password_confirmation: "password", avatar: Rails.root.join("/Users/patrickarthur/Desktop/floki.jpeg").open)
User.create(name: 'ted', email: "ted@test.com", password: "password", password_confirmation: "password", avatar: Rails.root.join("/Users/patrickarthur/Desktop/irving.jpeg").open)
User.create(name: 'dick', email: "dick@test.com", password: "password", password_confirmation: "password", avatar: Rails.root.join("/Users/patrickarthur/Desktop/uncledrew.jpeg").open)
User.create(name: 'steve', email: "steve@test.com", password: "password", password_confirmation: "password", avatar: Rails.root.join("/Users/patrickarthur/Desktop/jonas.jpeg").open)

