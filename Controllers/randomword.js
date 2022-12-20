const getReandomWord = async(req,res) => {
    
  const words = [
    "escapology",
    "antifungal",
    "antifungals",
    "bifunctional",
    "cofunction",
    "cofunctions","brightwork",
    "verkrampte", 
    "protectrix",
    "grandchild",
    "flugelhorn"
  ];
  let rnd = Math.ceil(Math.random()*words.length-1)
  const word = words[rnd]
  res.send(word)
};

module.exports = { getReandomWord };
