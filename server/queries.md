1. average score dari data berdasarkan masing-masing nama

```js
SELECT ROUND(AVG(score)) AS average_score FROM "Data" d ;
```

2.  mencari nilai modus emotion dari masing – masing nama

```js
SELECT name, mode() WITHIN GROUP (ORDER BY emotion) AS emotion_mode
FROM "Data" d
GROUP BY name;
```

3. mencari nilai average score dan modus emotion dari masing – masing nama dan tanggal yang sama

```js

SELECT name, created::date AS date, ROUND(AVG(score), 0) AS average_score,
       mode() WITHIN GROUP (ORDER BY emotion) AS emotion_mode
FROM "Data" d
GROUP BY name, created::date;


```
