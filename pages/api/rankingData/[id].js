import data from '../../../data/rankingData.json';

export default function handler(req, res) {
  let returnData = data.find((curr) => curr.id == req.query.id);
  res.status(200).json(returnData);
}
