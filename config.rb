# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions

activate :autoprefixer do |config|
  config.browsers = ['last 2 versions', 'Explorer >= 9']
end

# Layouts
# https://middlemanapp.com/basics/layouts/

# General configuration
# config[:url_root] = '//maat-digital.sites.grp.one'
config[:js_dir] = 'assets/js'
config[:css_dir] = 'assets/css'
# config[:fonts_dir] = 'assets/fonts'
config[:images_dir] = 'assets/img'
config[:layouts_dir] = 'layouts'

# Per-page layout changes
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
# page '/path/to/file.html', layout: 'other_layout'

# Proxy pages
# https://middlemanapp.com/advanced/dynamic-pages/

# proxy(
#   '/this-page-has-no-template.html',
#   '/template-file.html',
#   locals: {
#     which_fake_page: 'Rendering a fake page with a local variable'
#   },
# )

# Helpers
# Methods defined in the helpers block are available in templates
# https://middlemanapp.com/basics/helper-methods/

# helpers do
#   def some_helper
#     'Helping'
#   end
# end

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
end

# Build-specific configuration
# https://middlemanapp.com/advanced/configuration/#environment-specific-settings

configure :build do
  activate :relative_assets
  set :relative_links, true

  activate :minify_css
  activate :minify_javascript
  activate :gzip

  # Append a hash to asset urls (make sure to use the url helpers)
  activate :asset_hash
  # activate :asset_host, :host => config[:url_root]
end

# MUST be after :18n and :blog activation
activate :directory_indexes
