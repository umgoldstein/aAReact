require 'byebug'
class Bench < ActiveRecord::Base

  def self.in_bounds(bounds)
  # bounds in the following format:
  # {
  #   "northEast"=> {"lat"=>"37.80971", "lng"=>"-122.39208"},
  #   "southWest"=> {"lat"=>"37.74187", "lng"=>"-122.47791"}
  # }

  latNE = bounds["northEast"]["lat"]
  lngNE = bounds["northEast"]["lng"]
  latSW = bounds["southWest"]["lat"]
  lngSW = bounds["southWest"]["lng"]

  return Bench
            .where("lat BETWEEN ? AND ?", latSW, latNE)
            .where("lng BETWEEN ? AND ?", lngSW, lngNE)

  end

  validates :description, :lat, :lng, presence: true
end
