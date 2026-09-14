-- Phase 3: Travel zones around Olten 4600 and pricing settings metadata
create table if not exists travel_zones (
  plz_from integer not null,
  plz_to integer not null,
  km integer not null,
  label text,
  primary key (plz_from, plz_to)
);

insert into travel_zones (plz_from, plz_to, km, label) values
  (4600, 4614, 3, 'Olten & immediate surroundings'),
  (4615, 4658, 12, 'Olten district'),
  (4800, 4856, 12, 'Zofingen / Oftringen region'),
  (5000, 5099, 15, 'Aarau region'),
  (4500, 4599, 25, 'Solothurn region'),
  (4000, 4499, 40, 'Basel region'),
  (6000, 6099, 55, 'Lucerne region'),
  (8000, 8999, 60, 'Zurich region'),
  (3000, 3999, 65, 'Bern region')
on conflict (plz_from, plz_to) do update set
  km = excluded.km,
  label = excluded.label;

-- Session rate limiting columns
alter table offer_calculator_sessions add column if not exists last_code_sent_at timestamptz;
alter table offer_calculator_sessions add column if not exists code_sent_count integer not null default 0;

-- Additional calculation factors
insert into pricing_settings (key, value, description, category) values
  ('service_blend_base', '0.82', 'Base factor for service blending formula', 'calculation_factors'),
  ('service_blend_weight', '0.18', 'Weight per service factor in blend formula', 'calculation_factors'),
  ('service_blend_min', '0.9', 'Minimum service blend clamp', 'calculation_factors'),
  ('service_blend_max', '1.9', 'Maximum service blend clamp', 'calculation_factors'),
  ('large_project_threshold_cents', '650000', 'Subtotal threshold for large project discount (cents)', 'calculation_factors'),
  ('small_project_threshold_cents', '180000', 'Subtotal threshold for small project surcharge (cents)', 'calculation_factors'),
  ('price_rounding_chf', '10', 'Round final price to nearest CHF multiple', 'calculation_factors')
on conflict (key) do nothing;
