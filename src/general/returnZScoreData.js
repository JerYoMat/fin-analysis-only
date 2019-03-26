
function returnZScoreData(company) {
  const ary = [
    ((company[ebit]/company[totalassets])*3.107),
    ((company[totalrevenue]/company[totalassets])*0.998),
    ((company[totalassets]-company[totalliabilities])/company[totalliabilities]),
    (((company[totalcurrentassets]-company[totalcurrentliabilities])/company[totalassets])*0.717),
    ((company[retainedearnings]/company[totalassets])*0.847)
  ]
  return ary
}

export default returnZScoreData;