insert into pricing_settings (key, value, description, category) values
  ('1_5_room_apartment_base_price', '1500', 'Base price (CHF) for 1.5-room apartment package', 'property_base'),
  ('2_5_room_apartment_base_price', '2500', 'Base price (CHF) for 2.5-room apartment package', 'property_base'),
  ('3_5_room_apartment_base_price', '3700', 'Base price (CHF) for 3.5-room apartment package', 'property_base'),
  ('4_5_room_apartment_base_price', '5000', 'Base price (CHF) for 4.5-room apartment package', 'property_base'),
  ('5_5_room_apartment_base_price', '5900', 'Base price (CHF) for 5.5-room apartment package', 'property_base'),
  ('6_5_room_apartment_base_price', '6900', 'Base price (CHF) for 6.5-room apartment package', 'property_base')
on conflict (key) do update set
  value = excluded.value,
  description = excluded.description,
  category = excluded.category,
  updated_at = now();
