var miner="0xa00af22d07c87d96eeeb0ed583f8f6ac7812827e";
var deployer="0xa11aae29840fbb5c86e6fd4cf809eba183aef433";
var seller1="0xa22ab8a9d641ce77e06d98b7d7065d324d3d6976";
var seller2="0xa33a6c312d9ad0e0f2e95541beed0cc081621fd0";
var buyer1="0xa44a08d3f6933c69212114bb66e2df1813651844";
var buyer2="0xa55a151eb00fded1634d27d1127b4be4627079ea";
var uiFeeAccount="0xa66a85ede0cbe03694aa9d9de0bb19c99ff55bd9";
deployer=0xa11aae29840fbb5c86e6fd4cf809eba183aef433
defaultGasPrice=8100000000
var token0Address="0xeb15664af8082f2f310789e1fa3e03529ad052b8";
var tokenAbi=[{"inputs":[{"internalType":"string","name":"symbol","type":"string"},{"internalType":"string","name":"name","type":"string"},{"internalType":"uint8","name":"decimals","type":"uint8"},{"internalType":"address","name":"tokenOwner","type":"address"},{"internalType":"uint256","name":"initialSupply","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"tokenOwner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_from","type":"address"},{"indexed":true,"internalType":"address","name":"_to","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"acceptOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenOwner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"remaining","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"approveAndCall","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenOwner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenOwner","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenOwner","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"newOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"transferAnyERC20Token","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"transferOwnershipImmediately","outputs":[],"stateMutability":"nonpayable","type":"function"}];
var token0=eth.contract(tokenAbi).at(token0Address);
var token1Address="0xf7b11c3330808e65f995342ac7a4f145abe4274e";
var tokenAbi=[{"inputs":[{"internalType":"string","name":"symbol","type":"string"},{"internalType":"string","name":"name","type":"string"},{"internalType":"uint8","name":"decimals","type":"uint8"},{"internalType":"address","name":"tokenOwner","type":"address"},{"internalType":"uint256","name":"initialSupply","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"tokenOwner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_from","type":"address"},{"indexed":true,"internalType":"address","name":"_to","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"acceptOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenOwner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"remaining","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"approveAndCall","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenOwner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenOwner","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenOwner","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"newOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"transferAnyERC20Token","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"transferOwnershipImmediately","outputs":[],"stateMutability":"nonpayable","type":"function"}];
var token1=eth.contract(tokenAbi).at(token1Address);
var optinoTokenAddress="0x2c8c72c685db003581fd830709169574a7b20a76";
var optinoTokenAbi=[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"},{"indexed":false,"internalType":"bool","name":"hasValue","type":"bool"}],"name":"SetValue","type":"event"},{"inputs":[],"name":"hasValue","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"peek","outputs":[{"internalType":"bytes32","name":"_value","type":"bytes32"},{"internalType":"bool","name":"_hasValue","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_value","type":"uint256"},{"internalType":"bool","name":"_hasValue","type":"bool"}],"name":"setValue","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"value","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];
var optinoToken=eth.contract(optinoTokenAbi).at(optinoTokenAddress);
var priceFeed1Address="0x9b82fc2f37dfeb988cca92ffe0382a85580061bf";
var priceFeed1Abi=[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"},{"indexed":false,"internalType":"bool","name":"hasValue","type":"bool"}],"name":"SetValue","type":"event"},{"inputs":[],"name":"hasValue","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"peek","outputs":[{"internalType":"bytes32","name":"_value","type":"bytes32"},{"internalType":"bool","name":"_hasValue","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_value","type":"uint256"},{"internalType":"bool","name":"_hasValue","type":"bool"}],"name":"setValue","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"value","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];
var priceFeed1=eth.contract(priceFeed1Abi).at(priceFeed1Address);
var priceFeed2Address="0x02b65afa18a329f5563f042ccfae3edf27541fd8";
var priceFeed2Abi=[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"},{"indexed":false,"internalType":"bool","name":"hasValue","type":"bool"}],"name":"SetValue","type":"event"},{"inputs":[],"name":"hasValue","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"peek","outputs":[{"internalType":"bytes32","name":"_value","type":"bytes32"},{"internalType":"bool","name":"_hasValue","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_value","type":"uint256"},{"internalType":"bool","name":"_hasValue","type":"bool"}],"name":"setValue","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"value","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];
var priceFeed2=eth.contract(priceFeed2Abi).at(priceFeed2Address);
priceFeedAdaptorContract={"eth":{"_requestManager":{"provider":{},"polls":{},"timeout":null},"compile":{},"coinbase":"0xa00af22d07c87d96eeeb0ed583f8f6ac7812827e","mining":true,"hashrate":0,"syncing":false,"gasPrice":"8100000000","accounts":["0xa00af22d07c87d96eeeb0ed583f8f6ac7812827e","0xa11aae29840fbb5c86e6fd4cf809eba183aef433","0xa22ab8a9d641ce77e06d98b7d7065d324d3d6976","0xa33a6c312d9ad0e0f2e95541beed0cc081621fd0","0xa44a08d3f6933c69212114bb66e2df1813651844","0xa55a151eb00fded1634d27d1127b4be4627079ea","0xa66a85ede0cbe03694aa9d9de0bb19c99ff55bd9","0xa77a2b9d4b1c010a22a7c565dc418cef683dbcec","0xa88a05d2b88283ce84c8325760b72a64591279a2","0xa99a0ae3354c06b1459fd441a32a3f71005d7da0","0xaaaa9de1e6c564446ebca0fd102d8bd92093c756","0xabba43e7594e3b76afb157989e93c6621497fd4b","0xacca534c9f62ab495bd986e002ddf0f054caae4f","0xadda9b762a00ff12711113bfdc36958b73d7f915","0xaeea63b5479b50f79583ec49dacdcf86ddeff392","0xaffa4d3a80add8ce4018540e056dacb649589394","0xb00bfde102270687324f9205b693859df64f8923","0xb11be1d4ef8e94d01cb2695092a79d139a8dad98","0xb22be2d9eef0d7e260cf96a64feea0b95ed3e74f","0xb33b7ecf5e47be3981c74d989d3af8b665b4b649","0xb44b43d59b738b088b690ae276c1e979aba8268d","0xb55b57d113b45481e31aaf03d6f4e5ad4ef325f8","0xb66bcb4e473de80e2c8a47ced10c22c705a5e602","0xb77bbbaa7c1649547ae61de4b80b91568c28351a","0xb88b728490b417e29b0784db30535db343830dba","0xb99b3d1f72edb05a0321db58eddcf83fd73c4ade","0xbaab56da883edbe5314b8005be410022c510ccae","0xbbbb9809de0456ce0e0cd660e6e4ceabef3f521c","0xbccb68dd0ac87ef290aef49870d155f076c87868","0xbddb726ee06906e104db210e6d0506f2b062e477","0xbeeb24ff18203658d0a1d4682ee3f36ad663ec87","0xbffbd8f029ef0bd81cf754b53e8b3a5684f8b3ff"],"blockNumber":20756,"protocolVersion":"0x41","pendingTransactions":[]},"abi":[{"inputs":[{"internalType":"address","name":"_sourceAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"sourceAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"spot","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}]}
priceFeed1Address=0x9b82fc2f37dfeb988cca92ffe0382a85580061bf
var priceFeedAdaptorAddress="0x5907750fefa86731963241dfff89077822aef41f";
var priceFeedAdaptorAbi=[{"inputs":[{"internalType":"address","name":"_sourceAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"sourceAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"spot","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}];
var priceFeedAdaptor=eth.contract(priceFeedAdaptorAbi).at(priceFeedAdaptorAddress);
var optinoFactoryAddress="0x987f5903f8708269d8131704b5400f1a49a54ad1";
var optinoFactoryAbi=[{"inputs":[{"internalType":"address","name":"_optinoTokenTemplate","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"fee","type":"uint256"}],"name":"FeeUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"feed","type":"address"},{"indexed":false,"internalType":"string","name":"name","type":"string"},{"indexed":false,"internalType":"uint8","name":"feedType","type":"uint8"},{"indexed":false,"internalType":"uint8","name":"decimals","type":"uint8"},{"indexed":false,"internalType":"uint8","name":"locked","type":"uint8"}],"name":"FeedUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"note","type":"string"},{"indexed":false,"internalType":"address","name":"addr","type":"address"},{"indexed":false,"internalType":"uint256","name":"number","type":"uint256"}],"name":"LogInfo","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"_message","type":"string"}],"name":"MessageUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"seriesKey","type":"bytes32"},{"indexed":true,"internalType":"contract OptinoToken","name":"optinoToken","type":"address"},{"indexed":true,"internalType":"contract OptinoToken","name":"coverToken","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokens","type":"uint256"},{"indexed":false,"internalType":"contract ERC20","name":"collateralToken","type":"address"},{"indexed":false,"internalType":"uint256","name":"collateral","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"ownerFee","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"uiFee","type":"uint256"}],"name":"OptinoMinted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_from","type":"address"},{"indexed":true,"internalType":"address","name":"_to","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"pairKey","type":"bytes32"},{"indexed":true,"internalType":"uint256","name":"pairIndex","type":"uint256"},{"indexed":true,"internalType":"contract ERC20[2]","name":"pair","type":"address[2]"},{"indexed":false,"internalType":"address[2]","name":"feeds","type":"address[2]"},{"indexed":false,"internalType":"uint8[6]","name":"feedParameters","type":"uint8[6]"}],"name":"PairAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"pairKey","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"seriesKey","type":"bytes32"},{"indexed":true,"internalType":"uint256","name":"pairIndex","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"seriesIndex","type":"uint256"},{"indexed":false,"internalType":"uint256[4]","name":"data","type":"uint256[4]"},{"indexed":false,"internalType":"contract OptinoToken","name":"optinoToken","type":"address"},{"indexed":false,"internalType":"contract OptinoToken","name":"coverToken","type":"address"}],"name":"SeriesAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"seriesKey","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"spot","type":"uint256"}],"name":"SeriesSpotUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"contract ERC20","name":"token","type":"address"},{"indexed":false,"internalType":"uint8","name":"decimals","type":"uint8"},{"indexed":false,"internalType":"uint8","name":"locked","type":"uint8"}],"name":"TokenDecimalsUpdated","type":"event"},{"inputs":[],"name":"acceptOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract ERC20[2]","name":"pair","type":"address[2]"},{"internalType":"address[2]","name":"feeds","type":"address[2]"},{"internalType":"uint8[6]","name":"feedParameters","type":"uint8[6]"},{"internalType":"uint256[5]","name":"data","type":"uint256[5]"}],"name":"calcCollateralAndFee","outputs":[{"internalType":"contract ERC20","name":"_collateralToken","type":"address"},{"internalType":"uint256","name":"_collateral","type":"uint256"},{"internalType":"uint256","name":"_fee","type":"uint256"},{"internalType":"uint256","name":"_currentSpot","type":"uint256"},{"internalType":"uint8","name":"_feedDecimals0","type":"uint8"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract ERC20[2]","name":"pair","type":"address[2]"},{"internalType":"address[2]","name":"feeds","type":"address[2]"},{"internalType":"uint8[6]","name":"feedParameters","type":"uint8[6]"},{"internalType":"uint256[5]","name":"data","type":"uint256[5]"}],"name":"calcPayoff","outputs":[{"internalType":"contract ERC20","name":"_collateralToken","type":"address"},{"internalType":"uint256","name":"_collateral","type":"uint256"},{"internalType":"uint256","name":"_fee","type":"uint256"},{"internalType":"uint256","name":"_currentSpot","type":"uint256"},{"internalType":"uint8","name":"_feedDecimals0","type":"uint8"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"fee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feedLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"seriesKey","type":"bytes32"}],"name":"getCalcData","outputs":[{"internalType":"uint256[5]","name":"_seriesData","type":"uint256[5]"},{"internalType":"uint8[4]","name":"_decimalsData","type":"uint8[4]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"i","type":"uint256"}],"name":"getFeedByIndex","outputs":[{"internalType":"address","name":"_feed","type":"address"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"uint8[3]","name":"_data","type":"uint8[3]"},{"internalType":"uint256","name":"_spot","type":"uint256"},{"internalType":"bool","name":"_hasData","type":"bool"},{"internalType":"uint8","name":"_feedDecimals","type":"uint8"},{"internalType":"uint256","name":"_feedTimestamp","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"feed","type":"address"},{"internalType":"enum GetFeed.FeedType","name":"feedType","type":"uint8"}],"name":"getFeedRate","outputs":[{"internalType":"uint256","name":"_rate","type":"uint256"},{"internalType":"bool","name":"_hasData","type":"bool"},{"internalType":"uint8","name":"_decimals","type":"uint8"},{"internalType":"uint256","name":"_timestamp","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"seriesKey","type":"bytes32"}],"name":"getNameData","outputs":[{"internalType":"bool","name":"_isCustom","type":"bool"},{"internalType":"string","name":"_feedName","type":"string"},{"internalType":"uint256[5]","name":"_seriesData","type":"uint256[5]"},{"internalType":"uint8","name":"_feedDecimals","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"i","type":"uint256"}],"name":"getPairByIndex","outputs":[{"internalType":"bytes32","name":"_pairKey","type":"bytes32"},{"internalType":"contract ERC20[2]","name":"_pair","type":"address[2]"},{"internalType":"address[2]","name":"_feeds","type":"address[2]"},{"internalType":"uint8[6]","name":"_feedParameters","type":"uint8[6]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"pairKey","type":"bytes32"}],"name":"getPairByKey","outputs":[{"internalType":"contract ERC20[2]","name":"_pair","type":"address[2]"},{"internalType":"address[2]","name":"_feeds","type":"address[2]"},{"internalType":"uint8[6]","name":"_feedParameters","type":"uint8[6]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pairIndex","type":"uint256"},{"internalType":"uint256","name":"i","type":"uint256"}],"name":"getSeriesByIndex","outputs":[{"internalType":"bytes32","name":"_seriesKey","type":"bytes32"},{"internalType":"bytes32","name":"_pairKey","type":"bytes32"},{"internalType":"uint256[5]","name":"_data","type":"uint256[5]"},{"internalType":"uint256","name":"_timestamp","type":"uint256"},{"internalType":"contract OptinoToken","name":"_optinoToken","type":"address"},{"internalType":"contract OptinoToken","name":"_coverToken","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"seriesKey","type":"bytes32"}],"name":"getSeriesByKey","outputs":[{"internalType":"bytes32","name":"_pairKey","type":"bytes32"},{"internalType":"uint256[5]","name":"_data","type":"uint256[5]"},{"internalType":"contract OptinoToken","name":"_optinoToken","type":"address"},{"internalType":"contract OptinoToken","name":"_coverToken","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"seriesKey","type":"bytes32"}],"name":"getSeriesCurrentSpot","outputs":[{"internalType":"uint256","name":"_currentSpot","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"seriesKey","type":"bytes32"}],"name":"getSeriesSpot","outputs":[{"internalType":"uint256","name":"_spot","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"feed","type":"address"},{"internalType":"enum GetFeed.FeedType","name":"_feedType","type":"uint8"}],"name":"getSpot","outputs":[{"internalType":"uint256","name":"_spot","type":"uint256"},{"internalType":"bool","name":"_hasData","type":"bool"},{"internalType":"uint8","name":"_feedDecimals","type":"uint8"},{"internalType":"uint256","name":"_timestamp","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"feed","type":"address"}],"name":"lockFeed","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"message","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract ERC20[2]","name":"pair","type":"address[2]"},{"internalType":"address[2]","name":"feeds","type":"address[2]"},{"internalType":"uint8[6]","name":"feedParameters","type":"uint8[6]"},{"internalType":"uint256[5]","name":"data","type":"uint256[5]"},{"internalType":"address","name":"uiFeeAccount","type":"address"}],"name":"mint","outputs":[{"internalType":"contract OptinoToken","name":"_optinoToken","type":"address"},{"internalType":"contract OptinoToken","name":"_coverToken","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"newOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"optinoTokenTemplate","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pairLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pairIndex","type":"uint256"}],"name":"seriesLength","outputs":[{"internalType":"uint256","name":"_seriesLength","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"seriesKey","type":"bytes32"}],"name":"setSeriesSpot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"seriesKey","type":"bytes32"},{"internalType":"uint256","name":"spot","type":"uint256"}],"name":"setSeriesSpotIfPriceFeedFails","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fee","type":"uint256"}],"name":"updateFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"feed","type":"address"},{"internalType":"string","name":"name","type":"string"},{"internalType":"uint8","name":"feedType","type":"uint8"},{"internalType":"uint8","name":"decimals","type":"uint8"}],"name":"updateFeed","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_message","type":"string"}],"name":"updateMessage","outputs":[],"stateMutability":"nonpayable","type":"function"}];
var optinoFactory=eth.contract(optinoFactoryAbi).at(optinoFactoryAddress);
