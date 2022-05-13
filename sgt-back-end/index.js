const express = require('express');
const app = express();
app.use(express.json());
const pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgress://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades', (req, res) => {
  const sql = `
    select *
      from "grades"
  `;
  db.query(sql).then(result => {
    res.json(result.rows);
  }).catch(err => {
    console.error(err);
    res.status(500).json({
      error: 'An unexpected error ocurred'
    });
  });
});

app.post('/api/grades', (req, res) => {
  if ((!req.body.name) || (typeof req.body.name !== 'string') ||
  (!req.body.course) || (typeof req.body.course !== 'string') ||
  (!req.body.score) || (!Number.isInteger(req.body.score)) ||
  (req.body.score < 0) || (req.body.score > 100)) {
    res.status(400).json({
      error: 'invalid grade'
    });
  } else {
    const sql = `
      insert into "grades" ("name", "course", "score")
           values ($1, $2, $3)
        returning *;
    `;
    const params = [req.body.name, req.body.course, req.body.score];
    db.query(sql, params).then(result => {
      res.status(201).json(result.rows[0]);
    }).catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error ocurred'
      });
    });
  }
});

app.put('/api/grades/:gradeId', (req, res) => {
  const gradeId = req.params.gradeId;
  if ((!req.body.name) || (typeof req.body.name !== 'string') ||
  (!req.body.course) || (typeof req.body.course !== 'string') ||
  (!req.body.score) || (!Number.isInteger(req.body.score)) ||
  (req.body.score < 0) || (req.body.score > 100)) {
    res.status(400).json({
      error: 'invalid grade'
    });
  } else if ((Number.isInteger(gradeId)) || (gradeId <= 0)) {
    res.status(400).json({
      error: 'invalid gradeId'
    });
  } else {
    const sql = `
          update "grades"
             set "name" = $1,
                 "course" = $2,
                 "score" = $3
           where "gradeId" = $4
       returning *;
    `;
    const params = [req.body.name, req.body.course, req.body.score, gradeId];
    db.query(sql, params).then(result => {
      if (!result.rows[0]) {
        res.status(404).json({
          error: 'gradeId not found'
        });
      } else {
        res.json(result.rows[0]);
      }
    }).catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error ocurred'
      });
    });
  }
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = req.params.gradeId;
  if ((Number.isInteger(gradeId)) || (gradeId <= 0)) {
    res.status(400).json({
      error: 'invalid gradeId'
    });
  } else {
    const sql = `
      delete from "grades"
            where "gradeId" = $1
        returning *;
    `;
    const params = [gradeId];
    db.query(sql, params).then(result => {
      if (!result.rows[0]) {
        res.status(404).json({
          error: 'gradeId not found'
        });
      } else {
        res.status(204).send();
      }
    }).catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error ocurred'
      });
    });
  }
});

app.listen(3000, () => {
  process.stdout.write('Express Server listening on port 3000\n');
});
