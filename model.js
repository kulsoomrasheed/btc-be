const {  mongoose } = require("mongoose");

const btcSchema = new mongoose.Schema({
  img: String,
    tokenName: String,
    symbol: String,
    decimals: Number,
    marketcap: Number,
    chain:String,
});
  
  const BTC = mongoose.model('btc', btcSchema);
  

  module.exports = {BTC}

  /*  end_year: String,
  intensity: Number,
  sector:String,
  topic: String,
  insight: String,
  url: String,
  region: String,
  start_year: String,
  impact: String,
  added: String,
  published: String,
  country: String,
  relevance: Number,
  pestle: String,
  source: String,
  title: String,
  likelihood: Number*/