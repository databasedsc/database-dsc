# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160303104720) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "companies", force: :cascade do |t|
    t.datetime "created_at",            null: false
    t.datetime "updated_at",            null: false
    t.string   "name"
    t.string   "logo"
    t.text     "short_description"
    t.string   "headquarters"
    t.string   "formerly_known_as"
    t.text     "founders"
    t.text     "categories"
    t.text     "investors"
    t.text     "office_locations"
    t.string   "incubator"
    t.integer  "employees"
    t.string   "funding_stage"
    t.integer  "funding_amount"
    t.string   "product_stage"
    t.string   "geo_markets"
    t.string   "business_model"
    t.string   "company_stage"
    t.string   "operational_status"
    t.jsonb    "funding_rounds"
    t.text     "looking_for"
    t.boolean  "selling"
    t.string   "government_assistance"
    t.text     "contact"
    t.text     "long_description"
    t.string   "founded"
    t.text     "acquisitions"
  end

  add_index "companies", ["funding_rounds"], name: "index_companies_on_funding_rounds", using: :gin

  create_table "hubs", force: :cascade do |t|
    t.string   "name"
    t.string   "logo"
    t.text     "short_description"
    t.text     "programs"
    t.datetime "created_at",                        null: false
    t.datetime "updated_at",                        null: false
    t.text     "hub_type",             default: [],              array: true
    t.date     "application_deadline"
  end

  create_table "investors", force: :cascade do |t|
    t.string   "name"
    t.string   "logo"
    t.string   "headquarters"
    t.jsonb    "founders",          default: {}
    t.text     "short_description"
    t.string   "local_office"
    t.text     "tags",              default: [],              array: true
    t.text     "office_locations",  default: [],              array: true
    t.datetime "created_at",                     null: false
    t.datetime "updated_at",                     null: false
    t.text     "funding_types",     default: [],              array: true
    t.integer  "investment_size"
    t.text     "deal_structure"
  end

  add_index "investors", ["founders"], name: "index_investors_on_founders", using: :gin

  create_table "multinationals", force: :cascade do |t|
    t.string   "name"
    t.string   "logo"
    t.text     "short_description"
    t.string   "headquarters"
    t.string   "local_office"
    t.datetime "created_at",                        null: false
    t.datetime "updated_at",                        null: false
    t.boolean  "emea_hq",           default: false
    t.text     "startup_packages",  default: [],                 array: true
    t.integer  "employees"
    t.boolean  "events_space",      default: false
    t.text     "functions",         default: [],                 array: true
  end

  create_table "pg_search_documents", force: :cascade do |t|
    t.text     "content"
    t.string   "searchable_type"
    t.integer  "searchable_id"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "pg_search_documents", ["searchable_type", "searchable_id"], name: "index_pg_search_documents_on_searchable_type_and_searchable_id", using: :btree

end
