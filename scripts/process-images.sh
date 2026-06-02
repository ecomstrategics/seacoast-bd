#!/bin/zsh
# Process seacoast images: resize for web, convert to WebP, organize into folders
set -e

SRC="public/images"
OUT="public/images"
Q=82

mkdir -p "$OUT/solutions" "$OUT/containers" "$OUT/services" "$OUT/service-area"

convert_img() {
  local num="$1" target="$2" width="$3"
  local infile="$SRC/${num}.png"
  local outfile="$OUT/${target}.webp"
  if [ -f "$infile" ]; then
    magick "$infile" -resize "${width}x>" -quality "$Q" "$outfile"
    echo "  ${num}.png -> ${target}.webp (${width}w)"
  else
    echo "  MISSING: $infile"
  fi
}

convert_card() {
  local name="$1" target="$2" width="$3"
  local infile="$SRC/${name}.png"
  local outfile="$OUT/${target}.webp"
  if [ -f "$infile" ]; then
    magick "$infile" -resize "${width}x>" -quality "$Q" "$outfile"
    echo "  ${name}.png -> ${target}.webp (${width}w)"
  else
    echo "  MISSING: $infile"
  fi
}

echo "Processing numbered images..."
# Solutions (16:9 heroes = 1600w, 4:3 secondary = 1200w)
convert_img 1  "solutions/protect-hero" 1600
convert_img 2  "solutions/improve-hero" 1600
convert_img 3  "solutions/expand-hero" 1600
convert_img 4  "solutions/protect-secondary" 1200
convert_img 5  "solutions/improve-secondary" 1200
convert_img 6  "solutions/expand-secondary" 1200

# Containers
convert_img 7  "containers/containers-hero" 1600
convert_img 8  "containers/process-crane-placement" 1200
convert_img 9  "containers/process-finished-storage" 1200
convert_img 10 "containers/before-after-before" 1200
convert_img 11 "containers/before-after-after" 1200
convert_img 12 "containers/guest-house-hardie-metal" 1200
convert_img 13 "containers/guest-house-stucco-tile" 1200
convert_img 14 "containers/guest-house-cedar-batten" 1200
convert_img 15 "containers/guest-house-studio-interior" 1200
convert_img 16 "containers/guest-house-bathroom" 1200
convert_img 17 "containers/guest-house-aerial" 1200
convert_img 18 "containers/office-exterior-suburban" 1200
convert_img 19 "containers/office-interior" 1200
convert_img 20 "containers/office-40ft-commercial" 1200
convert_img 21 "containers/workshop-interior" 1200
convert_img 22 "containers/podcast-studio-interior" 1200
convert_img 23 "containers/storm-shelter-hero" 1600
convert_img 24 "containers/storm-shelter-backyard" 1200
convert_img 25 "containers/storm-shelter-interior" 1200
convert_img 26 "containers/storm-shelter-blended" 1200

# Services
convert_img 27 "services/storm-preparedness-hero" 1600
convert_img 28 "services/storm-damage-repair-hero" 1600
convert_img 29 "services/storm-damage-repair-completed" 1200

# Service-area (reusable generic)
convert_img 30 "service-area/generic-guest-house" 1200
convert_img 31 "service-area/generic-neighborhood" 1200

echo ""
echo "Processing container card thumbnails..."
convert_card "32-Storage_card"           "containers/card-storage" 800
convert_card "32-Guest_Houses_card"      "containers/card-guest-houses" 800
convert_card "32-Offices-Workshops_card" "containers/card-offices-workshops" 800
convert_card "32-Storm_Shelters_card"    "containers/card-storm-shelters" 800

echo ""
echo "Cleaning up source PNGs..."
rm -f "$SRC"/*.png

echo ""
echo "Done. WebP files:"
find "$OUT" -name "*.webp" -exec ls -lh {} \; | awk '{print $5, $NF}'
echo ""
echo "Total count: $(find "$OUT" -name "*.webp" | wc -l)"
