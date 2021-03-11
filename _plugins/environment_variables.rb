# frozen_string_literal: true

module Jekyll
  # Generates and Sets Site URLs
  class EnvironmentVariablesGenerator < Generator
    priority :highest

    def generate(site)
      cv_site_url = ENV['CV_SITE_URL'] || false
      netlify_build = ENV['NETLIFY'] || false
      gp_url = system('which gp > /dev/null 2>&1')

      if cv_site_url
        site.config['url'] = cv_site_url
      elsif gp_url
        site.config['url'] = `gp url 4000`.strip
      elsif netlify_build
        site.config['url'] = ENV['DEPLOY_PRIME_URL']
      end
    end
  end
end
