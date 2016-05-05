require 'tags-import/import'

# rake import_tags_from_csv
task :import_tags_from_csv => :environment do
  Import.start_import
end
