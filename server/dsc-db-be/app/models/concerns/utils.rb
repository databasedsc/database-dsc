module Utils
  refine String do
    def parse_units
      gsub('k','000').gsub('m','000000')
    end
  end
end
