import data from '../../../data/NFTdata.json';

export default function handler(req, res) {
  let returnData = data.find((curr) => curr.id == req.query.nftDataID);
  res.status(200).json(returnData);
}
