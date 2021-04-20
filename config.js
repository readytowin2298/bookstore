/** Common config for bookstore. */


let DB_URI = `postgresql://`;

if (process.env.NODE_ENV === "test") {
  DB_URI = `${DB_URI}mvufztlp:ca2cGTbkqTdtd70h6811rVtw7Bq0CdQ6@queenie.db.elephantsql.com:5432/mvufztlp`;
} else {
  DB_URI = process.env.DATABASE_URL || `${DB_URI}wftaktqp:XagABaqcfGJ68VPx3LWHdcH0zHWCgQcf@queenie.db.elephantsql.com:5432/wftaktqp`;
}


module.exports = { DB_URI };