json.array!(@benches) do |bench|
  json.extract!(
    bench,
    :description, :lng, :lat
  )
end
