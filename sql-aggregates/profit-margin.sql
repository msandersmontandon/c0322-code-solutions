with "filmCost" as (
    select "films"."title",
           "films"."description",
           "films"."rating",
           sum("films"."replacementCost") as "cost"
      from "films"
      join "inventory" using ("filmId")
  group by "films"."title",
           "films"."description",
           "films"."rating"
),
     "filmProfit" as (
    select "films"."title",
           sum("payments"."amount") as "profit"
      from "films"
      join "inventory" using ("filmId")
      join "rentals" using ("inventoryId")
      join "payments" using ("rentalId")
  group by "films"."title"
     )

  select "filmCost"."title",
         "filmCost"."description",
         "filmCost"."rating",
         "filmProfit"."profit" - "filmCost"."cost" as "totalProfit"
    from "filmCost"
    join "filmProfit" using ("title")
order by "totalProfit" desc
   limit 5;
