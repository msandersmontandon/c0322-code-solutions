select "addresses"."line1",
       "addresses"."district",
       "cities"."name" as "city",
       "countries"."name" as "country"
  from "cities"
  join "addresses" using ("cityId")
  join "countries" using ("countryId");
