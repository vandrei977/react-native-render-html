require 'json'

package = JSON.parse(File.read(File.join(__dir__, 'package.json')))

Pod::Spec.new do |s|
  s.name         = "react-native-render-html"
  s.version      = package['version']
  s.summary      = package['description']
  s.license      = package['license']

  s.authors      = "Andrei Valeanu, Meliorence"
  s.homepage     = "https://github.com/vandrei977/react-native-render-html.git"
  s.platform     = :ios, "9.0"

  s.source       = { :git => "https://github.com/vandrei977/react-native-render-html.git", :tag => "v#{s.version}" }
  s.source_files  = "ios/**/*.{h,m}"

  s.dependency 'React-Core'
end
