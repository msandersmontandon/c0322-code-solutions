  select count("cities".*) as "cities",
         "countries"."name" as "country"
    from "cities"
    join "countries" using ("countryId")
group by "countries"."name"
order by count("cities".*) desc;
