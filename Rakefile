require 'jekyll'
require 'jekyll-contentful-data-import'
require './_plugins/mappers'

desc "Import Contentful Data with Custom Mappers"
task :build do
  Jekyll::Commands::Contentful.process([], {}, Jekyll.configuration['contentful'])
  system("jekyll build")
end