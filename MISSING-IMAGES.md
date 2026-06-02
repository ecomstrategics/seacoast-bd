# Seacoast Building & Design — Missing Image Inventory

Status: the only real images in the repo are `public/logo.png` and `public/logo-mark.png`.
Every other image on the site is a CSS gradient placeholder (`ImagePlaceholder` component) showing "Image pending".

This file lists every placeholder location, its current alt/label text, aspect ratio, and tone.

## Aspect ratios in use
- `16/9` (aspect-video) — wide hero/banner
- `4/3` — standard content image
- BeforeAfter slider pair — two `4/3`-ish images for a slider

---

## Solutions pages (`/solutions/[slug]`) — 6 images (per pillar)
1. protect hero — 16/9 — "Seacoast crew preparing a Southwest Florida home for hurricane season. Shutters and boarding installed on a coastal property"
2. improve hero — 16/9 — "Seacoast exterior renovation in progress. New roofing, siding, and gutters on a Southwest Florida residential property."
3. expand hero — 16/9 — "Finished container guest house with Hardie siding and custom roof, matching the main residence in Southwest Florida"
4. protect secondary — 4/3 — "Southwest Florida property after hurricane. Seacoast storm damage assessment in progress, drone visible overhead."
5. improve secondary — 4/3 — "Before and after exterior renovation. New roofing and Hardie siding on a Southwest Florida home."
6. expand secondary — 4/3 — "Finished container guest house interior. Drywall, mini-split, kitchenette, and hardwood floor matching main residence style."

## Containers index (`/containers`) — 1 image
7. hero — 16/9 — "Finished container guest house with Hardie siding and stucco matching adjacent home exterior, palm trees, coastal SW Florida"

## Containers detail (`/containers/[slug]`) — 18 images
### Shared / process section
8. 4/3 — "Crane placing a 40-foot shipping container on a residential concrete pad, operator directing from ground"
9. 4/3 — "Finished 20-foot storage container with roll-up door and custom paint, parked next to residential garage"
### Before/After slider (1 pair)
10. before — "Raw unpainted 40-foot shipping container on bare ground, cargo doors open"
11. after — "Finished container guest house with Hardie board siding, gabled roof, front porch, mini-split outdoor unit, tropical landscaping"
### Guest houses slug
12. 4/3 — "Container guest house with white Hardie board lap siding, covered front porch, and standing-seam metal roof matching main house"
13. 4/3 — "Container guest house finished with stucco exterior and terra cotta roof tiles to match Spanish-style Florida home"
14. 4/3 — "Container guest house with board-and-batten cedar siding, large picture window, and tropical garden surround"
15. 4/3 — "Interior of finished container studio: open living and sleeping area, kitchenette, plank flooring, high-contrast trim"
16. 4/3 — "Interior bathroom of finished container guest house: walk-in tile shower, floating vanity, natural light from frosted window"
17. 4/3 — "Aerial view of container guest house installed behind main house with connected patio and pool area, SW Florida suburban neighborhood"
### Offices/workshops slug
18. 4/3 — "Finished container office exterior: glass entry door, painted metal siding, small sign, parking area, Florida suburban setting"
19. 4/3 — "Interior of finished container office: desk, monitor, shelving, mini-split, plank flooring, recessed lighting"
20. 4/3 — "Exterior of converted 40-foot container into a professional office with glass entry and commercial signage"
21. 4/3 — "Container workshop interior with roll-up door open, tool storage wall, and epoxy floor"
22. 4/3 — "Container podcast studio interior: acoustic panels, microphone setup, LED strip lighting"
### Storm shelters slug
23. 16/9 — "Anchored container storm shelter with reinforced entry door, ventilation grilles, and exterior signage on residential property"
24. 4/3 — "20-foot container storm shelter anchored to concrete pad with reinforced door and ventilation grilles, residential backyard"
25. 4/3 — "Interior of finished storm shelter with emergency lighting, storage shelving, sleeping bench, and ventilation unit"
26. 4/3 — "Container storm shelter with exterior painted to match adjacent residential exterior, landscaped to blend with yard"

## Services detail (`/services/[slug]`) — 3 images (storm-prep & storm-damage layouts only; 8 generic services have no hero image)
27. storm-preparedness hero — 16/9 — "Seacoast crew installing storm shutters on a coastal Southwest Florida home, stormy sky overhead"
28. storm-damage-repair hero — 16/9 — "Seacoast inspector documenting storm damage on a residential roof. Drone and photo documentation in progress."
29. storm-damage-repair secondary — 4/3 — "Seacoast completed storm repair. New roof installed after hurricane damage on a residential property in Southwest Florida."

## Service-area pages (`/service-area/[slug]`) — 2 templated (repeat for all 8 cities)
30. 4/3 — "Finished container guest house in {City}, {County}" (8 cities: Fort Myers/Lee, Sarasota/Sarasota, Naples/Collier, Cape Coral/Lee, Bonita Springs/Lee, Bradenton/Manatee, Venice/Sarasota, Punta Gorda/Charlotte)
31. 4/3 — "{City} neighborhood aerial or landmark photo" (same 8 cities)

## Container cards (`ContainerCard` component) — 1 templated (4 containers)
32. 16/9 — "{Container name} photo" (Storage, Guest Houses, Offices/Workshops, Storm Shelters)

---

## Totals
- 29 unique one-off images (#1-29)
- 2 templated images that vary per city (#30-31, 8 cities each — but one strong generic per template works, or 1 per city if you want unique)
- 1 templated container card image (#32, 4 containers — covered by the detail-page shots above)
