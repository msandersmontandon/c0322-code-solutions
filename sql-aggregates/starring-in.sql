  select count("f".*) as "HowManyMovies",
         "g"."name" as "whatGenre"
    from "actors" as "a"
    join "castMembers" using ("actorId")
    join "filmGenre" as "f" using ("filmId")
    join "genres" as "g" using ("genreId")
   where "a"."firstName" = 'Lisa'
     and "a"."lastName" = 'Monroe'
group by "g"."name"
order by count("f".*) desc;
