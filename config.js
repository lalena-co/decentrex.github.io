/* eslint-env browser */

module.exports = {
  homeURL: 'https://decentrex.com',
  contractDecentrEx: 'smart_contract/decentrex.sol',
  contractToken: 'smart_contract/token.sol',
  contractReserveToken: 'smart_contract/reservetoken.sol',
  contractDecentrExAddrs: [
    { addr: '0xbf29685856fae1e228878dfb35b280c0adcc3b05', info: 'Deployed 05/26/2017' },
  ],
  ethTestnet: false,
  ethProvider: 'http://localhost:8545',
  ethGasPrice: 20000000000,
  ethAddr: '0x0000000000000000000000000000000000000000',
  ethAddrPrivateKey: '',
  gasApprove: 250000,
  gasDeposit: 250000,
  gasWithdraw: 250000,
  gasTrade: 250000,
  gasOrder: 250000,
  ordersOnchain: false,
  apiServer: 'https://api.decentrex.com',
  userCookie: 'DecentrEx',
  eventsCacheCookie: 'DecentrEx_eventsCache',
  deadOrdersCacheCookie: 'DecentrEx_deadOrdersCache',
  ordersCacheCookie: 'DecentrEx_ordersCache',
  etherscanAPIKey: 'KF9ADFTHP4WJF1GV3WHJZCTFZIN5XZUXG1',
  tokens: [
{ addr: '0x0000000000000000000000000000000000000000', name: 'ETH', decimals: 18 },
{ addr: '0xce61f5e6d1fe5a86e246f68aff956f7757282ef0', name: '1LIFE', decimals: 18 },
{ addr: '0xaf30d2a7e90d7dc361c8c4585e9bb7d2f6f15bc7', name: '1ST', decimals: 18 },
{ addr: '0x422866a8f0b032c5cf1dfbdef31a20f4509562b0', name: 'ADST', decimals: 0 },
{ addr: '0xd0d6d6c5fe4a677d343cc433536bb717bae167dd', name: 'ADT', decimals: 9 },
{ addr: '0x4470bb87d77b963a013db939be332f927f2b992e', name: 'ADX', decimals: 4 },
{ addr: '0x5ca9a71b1d01849c0a95490cc00559717fcf0d1d', name: 'AE', decimals: 18 },
{ addr: '0x44f12955189e3f01be5daf1dd9002ee4d774f42b', name: 'AFST', decimals: 18 },
{ addr: '0x27dce1ec4d3f72c3e457cc50354f1f975ddef488', name: 'AIR', decimals: 8 },
{ addr: '0xa2f4fcb0fde2dd59f7a1873e121bc5623e3164eb', name: 'AIRA', decimals: 0 },
{ addr: '0x27dce1ec4d3f72c3e457cc50354f1f975ddef488', name: 'AIRT', decimals: 8 },
{ addr: '0xea610b1153477720748dc13ed378003941d84fab', name: 'ALIS', decimals: 18 },
{ addr: '0xbfd4a3c26996dfc9e85a951eb615aac3b84c758b', name: 'ALPC', decimals: 0 },
{ addr: '0x949bEd886c739f1A3273629b3320db0C5024c719', name: 'AMIS', decimals: 9 },    
{ addr: '0x960b236a07cf122663c4303350609a66a7b288c0', name: 'ANT', decimals: 18 },
{ addr: '0xac709fcb44a43c35f0da4e3163b117a17f3770f5', name: 'ARC', decimals: 18 },
{ addr: '0xf9c9da0c81fffd491458881410903561d1e40fd0', name: 'ARENA', decimals: 18 },
{ addr: '0xfec0cf7fe078a500abf15f1284958f22049c2c7e', name: 'ART', decimals: 18 },
{ addr: '0xe256bb0b2a3457e54db3a41cf5a8b826aca222a8', name: 'ARX', decimals: 18 },
{ addr: '0xb0d926c1bc3d78064f3e1075d5bd9a24f35ae6c5', name: 'ARXAI', decimals: 18 },
{ addr: '0x27054b13b1b798b345b591a4d22e6562d47ea75a', name: 'AST', decimals: 4 },
{ addr: '0x78b7fada55a64dd895d8c8c35779dd8b67fa8a05', name: 'ATL', decimals: 18 },
{ addr: '0x9b11efcaaa1890f6ee52c6bb7cf8153ac5d74139', name: 'ATM', decimals: 8 },
{ addr: '0x2daee1aa61d60a252dc80564499a69802853583a', name: 'ATS', decimals: 4 },
{ addr: '0x887834d3b8d450b6bab109c252df3da286d73ce4', name: 'ATT', decimals: 18 },
{ addr: '0xb29678a4805a7d787dc9589e179d27f7575bb9f7', name: 'AUA', decimals: 5 },
{ addr: '0x0d88ed6e74bbfd96b831231638b66c05571e824f', name: 'AVT', decimals: 18 },
{ addr: '0x56ba2ee7890461f463f7be02aac3099f6d5811a8', name: 'CAT', decimals: 18 },
{ addr: '0x336f646f87d9f6bc6ed42dd46e8b3fd9dbd15c22', name: 'CCT', decimals: 18 },
{ addr: '0x177d39ac676ed1c67a2b268ad7f1e58826e5b0af', name: 'CDT', decimals: 18 },
{ addr: '0x6fff3806bbac52a20e0d79bc538d527f6a22c96b', name: 'CDX', decimals: 18 },
{ addr: '0x12fef5e57bf45873cd9b62e9dbd7bfb99e32d73e', name: 'CFI', decimals: 18 },
{ addr: '0xc3951d77737733174152532e8b0f27e2c4e9f0dc', name: 'CLD', decimals: 6 },
{ addr: '0x08fd34559f2ed8585d3810b4d96ab8a05c9f97c5', name: 'CLRT', decimals: 18 },
{ addr: '0xd4c435f5b09f855c3317c8524cb1f586e42795fa', name: 'CND', decimals: 18 },
{ addr: '0x94d6b4fb35fb08cb34aa716ab40049ec88002079', name: 'CNX', decimals: 8 },
{ addr: '0xb2f7eb1f2c37645be61d73953035360e768d81e6', name: 'COB', decimals: 18 },
{ addr: '0x65292eeadf1426cd2df1c4793a3d7519f253913b', name: 'COSS', decimals: 18 },
{ addr: '0x4e0603e2a27a30480e5e3a4fe548e29ef12f64be', name: 'CREDO', decimals: 18 },
{ addr: '0x29d75277ac7f0335b2165d0895e8725cbf658d73', name: 'CSNO', decimals: 8 },
{ addr: '0x52514e3acaeb06cab050a69b025083082ebe5b54', name: 'CTC', decimals: 4 },
{ addr: '0x96a65609a7b84e8842732deb08f56c3e21ac6f8a', name: 'CTR', decimals: 18 },
{ addr: '0x41e5560054824ea6b0732e656e3ad64e20e94e45', name: 'CVC', decimals: 8 },
{ addr: '0x07d9e49ea402194bf48a8276dafb16e4ed633317', name: 'DALC', decimals: 8 },
{ addr: '0x7268f9c2bc9c9e65b4a16888cb5672531ce8e945', name: 'DAY', decimals: 18 },
{ addr: '0x540449e4d172cd9491c76320440cd74933d5691a', name: 'DBET', decimals: 18 },
{ addr: '0x08d32b0da63e2C3bcF8019c9c5d849d7a9d791e6', name: 'DCN', decimals: 0 },
{ addr: '0x6678e467fa5ccfbdc264d12f4b8b28fe4661606b', name: 'DCNT', decimals: 1 },
{ addr: '0xcc4ef9eeaf656ac1a2ab886743e98e97e090ed38', name: 'DDF', decimals: 18 },
{ addr: '0x02b9806a64cb05f02aa8dcc1c178b88159a61304', name: 'DEL', decimals: 18 },
{ addr: '0x3597bfd533a99c9aa083587b074434e61eb0a258', name: 'DENT', decimals: 8 },
{ addr: '0x7d49eaac4c70abc1a659122f08c0806ae44703ef', name: 'DET', decimals: 18 },
{ addr: '0x8ef59b92f21f9e5f21f5f71510d1a7f87a5420be', name: 'DEX', decimals: 2 },
{ addr: '0xe0b7927c4af23765cb51314a0e0521a9645f0e2a', name: 'DGD', decimals: 9 },
{ addr: '0x8b9c35c79af5319c70dd9a3e3850f368822ed64e', name: 'DGT', decimals: 18 },
{ addr: '0x2e071d2966aa7d8decb1005885ba1977d6038a65', name: 'DICE', decimals: 16 },
{ addr: '0x07e3c70653548b04f0a75970c1f81b4cbbfb606f', name: 'DLT', decimals: 18 },
{ addr: '0x0abdace70d3790235af448c88547603b945604ea', name: 'DNT', decimals: 18 },
{ addr: '0x621d78f2ef2fd937bfca696cabaf9a779f59b3ed', name: 'DRP', decimals: 2 },
{ addr: '0xeb9c0138d8ac10dd659640a4cc3d135c58b17b1b', name: 'DTC', decimals: 2 },
{ addr: '0xce5c603c78d047ef43032e96b5b785324f753a4f', name: 'E4ROW', decimals: 2 },
{ addr: '0x415116bad878730f5db008ff381a73222128ad39', name: 'EBCH', decimals: 18 },
{ addr: '0xafc39788c51f0c1ff7b55317f3e70299e521fff6', name: 'EBCH2', decimals: 8 },
{ addr: '0x84c2c31c04339c9938adfe3f8013315c8906f071', name: 'EBCSH', decimals: 18 },
{ addr: '0x7d5edcd23daa3fb94317d32ae253ee1af08ba14d', name: 'EBET', decimals: 2 },
{ addr: '0x2fd41f516fac94ed08e156f489f56ca3a80b04d0', name: 'EBTC', decimals: 8 },
{ addr: '0x5d21ef5f25a985380b65c8e943a0082feda0db84', name: 'ECASH', decimals: 18 },
{ addr: '0xa578acc0cb7875781b7880903f4594d13cfa8b98', name: 'ECN', decimals: 2 },
{ addr: '0x01a28adc0edd796b570ec4da734e1aa809f6f1fc', name: 'EDASH', decimals: 18 },
{ addr: '0x08711d3b02c8758f2fb3ab4e80228418a7f8e39c', name: 'EDG', decimals: 0 },
{ addr: '0x8a7b7b9b2f7d0c63f66171721339705a6188a7d5', name: 'EDOGE', decimals: 18 },
{ addr: '0xf152fca41bd23ff250292af391236db35e0e99c3', name: 'EETH', decimals: 8 },
{ addr: '0x0a76aad21948ea1ef447d26dee91a54370e151e0', name: 'ELITE', decimals: 18 },
{ addr: '0xc8c6a31a4a806d3710a7b38b7b296d2fabccdba8', name: 'ELIX', decimals: 18 },
{ addr: '0x6f1a769952c60b2d03f46419adeda91d87866dab', name: 'ELTC', decimals: 18 },
{ addr: '0x7e9d62e1ff4e34096f91ee0153222ab81f7184f0', name: 'ELTC2', decimals: 8 },
{ addr: '0x1f103fd7c4fa908c25387da70ed287b632bd22a2', name: 'ELTC3', decimals: 18 },
{ addr: '0x386467f1f3ddbe832448650418311a479eecfc57', name: 'EMB', decimals: 0 },
{ addr: '0xb802b24e0637c2b87d2e8b7784c055bbe921011a', name: 'EMV', decimals: 2 },
{ addr: '0xb915ff79170d606935bceaf000d77ca4ed92d993', name: 'ENEO', decimals: 18 },
{ addr: '0xf0ee6b27b759c9893ce4f094b49ad28fd15a23e4', name: 'ENG', decimals: 8 },
{ addr: '0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c', name: 'ENJ', decimals: 18 },
{ addr: '0x614ea929892ea43d3ea2c5e3311b01cc589bad6c', name: 'ENO', decimals: 18 },
{ addr: '0x86fa049857e0209aa7d9e616f7eb3b3b78ecfdb0', name: 'EOS', decimals: 18 },
{ addr: '0x289fe11c6f46e28f9f1cfc72119aee92c1da50d0', name: 'EPOSN', decimals: 18 },
{ addr: '0xce3d9c3f3d302436d12f18eca97a3b00e97be7cd', name: 'EPOSY', decimals: 18 },
{ addr: '0x1b9743f556d65e757c4c650b4555baf354cb8bd3', name: 'ETBS', decimals: 12 },
{ addr: '0x0000000000000000000000000000000000000000', name: 'ETH', decimals: 18 },
{ addr: '0x3a26746ddb79b1b8e4450e3f4ffe3285a307387e', name: 'ETHB', decimals: 8 },
{ addr: '0xb62d18dea74045e822352ce4b3ee77319dc5ff2f', name: 'EVC', decimals: 18 },
{ addr: '0xf3db5fa2c66b7af3eb0c0b782510816cbe4813b8', name: 'EVX', decimals: 4 },
{ addr: '0x43161bd5597b12afb83b4ecfec8f4f0f9e452f30', name: 'EXMR', decimals: 18 },
{ addr: '0x0766e79a6fd74469733e8330b3b461c0320ff059', name: 'EXN', decimals: 18 },
{ addr: '0x2f1b8c9d0a21b747d8ca370f93cb09d3daf222ef', name: 'EXRP', decimals: 18 },
{ addr: '0xb518d165398d9057ea8b73096edda5c7754bcd62', name: 'EXRP2', decimals: 18 },
{ addr: '0x0c6c9beeeb5de377210930f09a7ac9a99ff5e981', name: 'EZEC', decimals: 18 },
{ addr: '0xae4191a7eb25713ac90483ea75828ae8038f94dc', name: 'EZEC2', decimals: 18 },
{ addr: '0x190e569be071f40c704e15825f285481cb74b6cc', name: 'FAM', decimals: 12 },
{ addr: '0x6467882316dc6e206feef05fba6deaa69277f155', name: 'FAP', decimals: 18 },
{ addr: '0xe6923e9b56db1eed1c9f430ea761da7565e260fe', name: 'FC', decimals: 2 },
{ addr: '0x17fd666fa0784885fa1afec8ac624d9b7e72b752', name: 'FLIK', decimals: 14 },
{ addr: '0xc997d07b0bc607b6d1bcb6fb9d4a5579c466c3e5', name: 'FLIP', decimals: 0 },
{ addr: '0x4c5601164e2048a4154de91fa5e0b07e626cab7f', name: 'FNL', decimals: 3 },
{ addr: '0x0abefb7611cb3a01ea3fad85f33c3c934f8e2cf4', name: 'FRD', decimals: 18 },
{ addr: '0xab16e0d25c06cb376259cc18c1de4aca57605589', name: 'FUCK', decimals: 4 },
{ addr: '0xc63e7b1dece63a77ed7e4aeef5efb3b05c81438d', name: 'FUCKOLD', decimals: 4 },
{ addr: '0x419d0d8bdd9af5e606ae2232ed285aff190e711b', name: 'FUN', decimals: 8 },
{ addr: '0x88fcfbc22c6d3dbaa25af478c578978339bde77a', name: 'FYN', decimals: 18 },
{ addr: '0x68db10ecc599d9f5e657acdafdbf6449d658bb2d', name: 'GGS', decimals: 18 },
{ addr: '0x6810e776880c02933d47db1b9fc05908e5386b96', name: 'GNO', decimals: 18 },
{ addr: '0xa74476443119a942de498590fe1f2454d7d4ac0d', name: 'GNT', decimals: 18 },
{ addr: '0x01afc37f4f85babc47c0e2d0eababc7fb49793c8', name: 'GNTM', decimals: 18 },
{ addr: '0x936f78b9852d12f5cb93177c1f84fb8513d06263', name: 'GNTW', decimals: 18 },
{ addr: '0xdcb9ff81013c31ff686154b4502ef6bfaa102d2d', name: 'GOOC', decimals: 8 },
{ addr: '0xae616e72d3d89e847f74e8ace41ca68bbf56af79', name: 'GOOD', decimals: 6 },
{ addr: '0x025abad9e518516fdaafbdcdb9701b37fb7ef0fa', name: 'GTKT', decimals: 0 },
{ addr: '0x2ca72c9699b92b47272c9716c664cad6167c80b0', name: 'GUNS', decimals: 18 },
{ addr: '0xf7b098298f7c69fc14610bf71d5e02c60792894c', name: 'GUP', decimals: 3 },
{ addr: '0xdd6c68bb32462e01705011a4e2ad1a60740f217f', name: 'HBT', decimals: 15 },
{ addr: '0x14f37b574242d366558db61f3335289a5035c506', name: 'HKG', decimals: 3 },
{ addr: '0xcbcc0f036ed4788f63fc0fee32873d6a7487b908', name: 'HMQ', decimals: 8 },
{ addr: '0xe755f2fa95e47c5588c3037dd38e1268fa5fcecd', name: 'HOWL', decimals: 18 },
{ addr: '0xc0eb85285d83217cd7c891702bcbc0fc401e2d9d', name: 'HVN', decimals: 8 },
{ addr: '0x5a84969bb663fb64f6d015dcf9f622aedc796750', name: 'ICE', decimals: 18 },
{ addr: '0x888666ca69e0f178ded6d75b5726cee99a87d698', name: 'ICN', decimals: 18 },
{ addr: '0x014b50466590340d41307cc54dcee990c8d58aa8', name: 'ICOS', decimals: 6 },
{ addr: '0x814cafd4782d2e728170fda68257983f03321c58', name: 'IDEA', decimals: 0 },
{ addr: '0x7654915a1b82d6d2d0afc37c52af556ea8983c7e', name: 'IFT', decimals: 18 },
{ addr: '0xf8e386eda857484f5a12e4b5daa9984e06e73705', name: 'IND', decimals: 18 },
{ addr: '0x0b76544f6c413a555f309bf76260d1e02377c02a', name: 'INT', decimals: 6 },
{ addr: '0x51ee82641ac238bde34b9859f98f5f311d6e4954', name: 'IQT', decimals: 8 },
{ addr: '0xfd784da5c740c617aafb80399fa81b86e1da99a5', name: 'ITS', decimals: 8 },
{ addr: '0x0aef06dcccc531e581f0440059e6ffcc206039ee', name: 'ITT', decimals: 8 },
{ addr: '0x77faed976e187f26b49e78be8418ab074a341f26', name: 'IWT', decimals: 18 },
{ addr: '0xfca47962d45adfdfd1ab2d972315db4ce7ccf094', name: 'IXT', decimals: 8 },
{ addr: '0xa6e7172662379f1f4c72108655869abdbb7f7672', name: 'JADE', decimals: 5 },
{ addr: '0x8727c112c712c4a03371ac87a74dd6ab104af768', name: 'JET', decimals: 18 },
{ addr: '0x27695e09149adc738a978e9a678f99e4c39e9eb9', name: 'KICK', decimals: 8 },
{ addr: '0x818fc6c2ec5986bc6e2cbf00939d90556ab12ce5', name: 'KIN', decimals: 18 },
{ addr: '0xe1479d294807379320dca9a9e9002ac644539099', name: 'KING', decimals: 18 },
{ addr: '0xdd974d5c2e2928dea5f71b9825b8b646686bd200', name: 'KNC', decimals: 18 },
{ addr: '0xf94e44d8ea46ccd8451d7e15264c6c4a78d3e10f', name: 'KSS', decimals: 18 },
{ addr: '0xdc0c22285b61405aae01cba2530b6dd5cd328da7', name: 'KTN', decimals: 6 },
{ addr: '0x28a40acf39b1d3c932f42dd8068ad00a5ad6448f', name: 'LDM', decimals: 18 },
{ addr: '0x514910771af9ca656af840dff83e8264ecf986ca', name: 'LINK', decimals: 18 },
{ addr: '0x1db186898bccde66fa64a50e4d81078951a30dbe', name: 'LLA', decimals: 18 },
{ addr: '0x6d5cac36c1ae39f41d52393b7a425d0a610ad9f2', name: 'LLT', decimals: 8 },
{ addr: '0xe2e6d4be086c6938b53b22144855eef674281639', name: 'LNK', decimals: 18 },
{ addr: '0xa51d948ff15fbabac476af160cba6901ce47f4b0', name: 'LNT', decimals: 18 },
{ addr: '0xef68e7c694f40c8202821edf525de3782458639f', name: 'LRC', decimals: 18 },
{ addr: '0xfb12e3cca983b9f59d90912fd17f8d745a8b2953', name: 'LUCK', decimals: 0 },
{ addr: '0xfa05a73ffe78ef8f1a739473e462c54bae6567d9', name: 'LUN', decimals: 18 },
{ addr: '0x0f5d2fb29fb7d3cfee444a200298f468908cc942', name: 'MANA', decimals: 18 },
{ addr: '0xab130bc7ff83192656a4b3079741c296615899c0', name: 'MAYN', decimals: 18 },
{ addr: '0xbfa4d71a51b9e0968be4bc299f8ba6cbb2f86789', name: 'MAYY', decimals: 18 },
{ addr: '0x386467f1f3ddbe832448650418311a479eecfc57', name: 'MBRS', decimals: 0 },
{ addr: '0x93e682107d1e9defb0b5ee701c71707a4b2e46bc', name: 'MCAP', decimals: 8 },
{ addr: '0x5afda18caba69fe3af5e6d56e42e1c9f92c40d77', name: 'MCD', decimals: 18 },
{ addr: '0x138a8752093f4f9a79aaedf48d4b9248fab93c9c', name: 'MCI', decimals: 18 },
{ addr: '0xb63b606ac810a52cca15e44bb630fd42d8d1d83d', name: 'MCO', decimals: 8 },
{ addr: '0x51db5ad35c671a87207d88fc11d593ac0c8415bd', name: 'MDA', decimals: 18 },
{ addr: '0x37f014c64d186eaf879c0033846b51924ce42584', name: 'MDT', decimals: 0 },
{ addr: '0x40395044ac3c0c57051906da938b54bd6557f212', name: 'MGO', decimals: 8 },
{ addr: '0xc66ea802717bfb9833400264dd12c2bceaa34a6d', name: 'MKR', decimals: 18 },
{ addr: '0xbeb9ef514a379b997e0798fdcc901ee474b6d9a1', name: 'MLN', decimals: 18 },
{ addr: '0x09debe702678140c1be278213109719fab98d0d8', name: 'MOL', decimals: 18 },
{ addr: '0x5cf4e9dfd975c52aa523fb5945a12235624923dc', name: 'MPRM', decimals: 0 },
{ addr: '0xab6cf87a50f17d7f5e1feaf81b6fe9ffbe8ebf84', name: 'MRV', decimals: 18 },
{ addr: '0x68aa3f232da9bdc2343465545794ef3eea5209bd', name: 'MSP', decimals: 18 },
{ addr: '0xaf4dce16da2877f8c9e00544c93b62ac40631f16', name: 'MTH', decimals: 5 },
{ addr: '0xf433089366899d83a9f26a773d59ec7ecf30355e', name: 'MTL', decimals: 8 },
{ addr: '0xdab5dfa0966c3435da991b39d205c3ba1c64fe31', name: 'MTP', decimals: 1 },
{ addr: '0xb17df9a3b09583a9bdcf757d6367171476d4d8a3', name: 'MVC', decimals: 18 },
{ addr: '0x94298f1e0ab2dfad6eeffb1426846a3c29d98090', name: 'MyB', decimals: 8 },
{ addr: '0xa645264c5603e96c3b0b078cdab68733794b0a71', name: 'MYST', decimals: 8 },
{ addr: '0xedf2d3e5fb70ead2e6d8fe96845a5e59d52d2044', name: 'NCH', decimals: 12 },
{ addr: '0xa54ddc7b3cce7fc8b1e3fa0256d0db80d2c10970', name: 'NDC', decimals: 18 },
{ addr: '0xcfb98637bcae43c13323eaa1731ced2b716962fd', name: 'NET', decimals: 18 },
{ addr: '0x814964b1bceaf24e26296d031eadf134a2ca4105', name: 'NEWB', decimals: 0 },
{ addr: '0x202e295df742befa5e94e9123149360db9d9f2dc', name: 'NIH', decimals: 8 },
{ addr: '0xe26517a9967299453d3f1b48aa005e6127e67210', name: 'NIMFA', decimals: 18 },
{ addr: '0x1776e1f26f98b1a5df9cd347953a26dd3cb46671', name: 'NMR', decimals: 18 },
{ addr: '0x8d5a69dc82a47594881256f2eef81770274fa30f', name: 'NTC', decimals: 18 },
{ addr: '0x32c785e4e8477b277fea2ca2301727084d79d933', name: 'NUGD', decimals: 0 },
{ addr: '0x32c785e4e8477b277fea2ca2301727084d79d933', name: 'NUGD', decimals: 0 },
{ addr: '0x45e42d659d9f9466cd5df622506033145a9b89bc', name: 'NXC', decimals: 3 },
{ addr: '0x5c6183d10a00cd747a6dbb5f658ad514383e9419', name: 'NXX', decimals: 8 },
{ addr: '0x701c244b988a513c945973defa05de933b23fe1d', name: 'OAX', decimals: 18 },
{ addr: '0xd26114cd6ee289accf82350c8d8487fedb8a0c07', name: 'OMG', decimals: 18 },
{ addr: '0xb23be73573bc7e03db6e5dfc62405368716d28a8', name: 'ONEK', decimals: 18 },
{ addr: '0x4355fc160f74328f9b383df2ec589bb3dfd82ba0', name: 'OPT', decimals: 18 },
{ addr: '0x516e5436bafdc11083654de7bb9b95382d08d5de', name: 'ORME', decimals: 8 },
{ addr: '0x881ef48211982d01e2cb7092c915e647cd40d85c', name: 'OTN', decimals: 18 },
{ addr: '0x55e7c4a77821d5c50b4570b08f9f92896a25e012', name: 'P+', decimals: 0 },
{ addr: '0xf923ba61b43161a83afe2cab7d77ea1e41f27918', name: 'PAL', decimals: 18 },
{ addr: '0xb97048628db6b661d4c2aa833e95dbe1a905b280', name: 'PAY', decimals: 18 },
{ addr: '0x089a6d83282fb8988a656189f1e7a73fa6c1cac2', name: 'PGL', decimals: 18 },
{ addr: '0x8effd494eb698cc399af6231fccd39e08fd20b15', name: 'PIX', decimals: 0 },
{ addr: '0x473319898464ca640af692a0534175981ab78aa1', name: 'PKT', decimals: 4 },
{ addr: '0x0affa06e7fbe5bc9a764c979aa66e8256a631f02', name: 'PLBT', decimals: 6 },
{ addr: '0xe3818504c1b32bf1557b16c238b2e01fd3149c17', name: 'PLR', decimals: 18 },
{ addr: '0xd8912c10681d8b21fd3742244f44658dba12264e', name: 'PLU', decimals: 18 },
{ addr: '0xfb41f7b63c8e84f4ba1ecd4d393fd9daa5d14d61', name: 'PLY', decimals: 18 },
{ addr: '0xa51153d9cf9d3cf6d58697b68eccc158d1e40388', name: 'PME', decimals: 18 },
{ addr: '0x0e0989b1f9b8a38983c2ba8053269ca62ec9b195', name: 'POE', decimals: 8 },
{ addr: '0x779b7b713c86e3e6774f5040d9ccc2d43ad375f8', name: 'POOL', decimals: 8 },
{ addr: '0xee609fe292128cad03b786dbb9bc2634ccdbe7fc', name: 'POS', decimals: 18 },
{ addr: '0xeb2da9fac54284cea731d1f10bb34eecb3c00c14', name: 'POW', decimals: 18 },
{ addr: '0xc42209accc14029c1012fb5680d95fbd6036e2a0', name: 'PPP', decimals: 18 },
{ addr: '0xd4fa1460f537bb9085d22c7bccb5dd450ef28e3a', name: 'PPT', decimals: 8 },
{ addr: '0x226bb599a12c826476e3a771454697ea52e9e220', name: 'PRO', decimals: 8 },
{ addr: '0x163733bcc28dbf26b41a8cfa83e369b5b3af741b', name: 'PRS', decimals: 18 },
{ addr: '0xe3fedaecd47aa8eab6b23227b0ee56f092c967a9', name: 'PST', decimals: 18 },
{ addr: '0x66497a283e0a007ba3974e837784c6ae323447de', name: 'PT', decimals: 0 },
{ addr: '0x66497a283e0a007ba3974e837784c6ae323447de', name: 'PT', decimals: 18 },
{ addr: '0x8ae4bf2c33a8e667de34b54938b0ccd03eb8cc06', name: 'PTOY', decimals: 8 },
{ addr: '0x671abbe5ce652491985342e85428eb1b07bc6c64', name: 'QAU', decimals: 8 },
{ addr: '0x697beac28B09E122C4332D163985e8a73121b97F', name: 'QRL', decimals: 8 },
{ addr: '0x70c4eea814bee9b74cafeca0200991bb0d8a4320', name: 'QVT', decimals: 0 },
{ addr: '0x48f775efbe4f5ece6e0df2f7b5932df56823b990', name: 'R', decimals: 0 },
{ addr: '0x5ddab66da218fb05dfeda07f1afc4ea0738ee234', name: 'RARE', decimals: 8 },
{ addr: '0x9214ec02cb71cba0ada6896b8da260736a67ab10', name: 'REAL', decimals: 18 },
{ addr: '0x64c86899bc02dd9af823b131e5acd4369f72bd39', name: 'RENT', decimals: 18 },
{ addr: '0xe94327d07fc17907b4db788e5adf2ed424addff6', name: 'REP', decimals: 18 },
{ addr: '0xf05a9382a4c3f29e2784502754293d88b835109c', name: 'REX', decimals: 18 },
{ addr: '0x168296bb09e24a88805cb9c33356536b980d3fc5', name: 'RHOC', decimals: 8 },
{ addr: '0x0b1724cc9fda0186911ef6a75949e9c0d3f0f2f3', name: 'RIYA', decimals: 8 },
{ addr: '0x607f4c5bb672230e8672085532f7e901544a7375', name: 'RLC', decimals: 9 },
{ addr: '0x4a42d2c580f83dce404acad18dab26db11a1750e', name: 'RLX', decimals: 18 },
{ addr: '0x1bcbc54166f6ba149934870b60506199b6c9db6d', name: 'ROC', decimals: 10 },
{ addr: '0xb4efd85c19999d84251304bda99e90b92300bd93', name: 'RPL', decimals: 18 },
{ addr: '0xd884f9881e0aeabad79be8a69122cf998d067fff', name: 'RUB', decimals: 18 },
{ addr: '0x3d1ba9be9f66b8ee101911bc36d3fb562eac2244', name: 'RVT', decimals: 18 },
{ addr: '0x59adcf176ed2f6788a41b8ea4c4904518e62b6a4', name: 'SAI', decimals: 18 },
{ addr: '0x4156d3342d5c385a87d264f90653733592000581', name: 'SALT', decimals: 8 },
{ addr: '0x7c5a0ce9267ed19b22f8cae653f198e3e8daf098', name: 'SAN', decimals: 18 },
{ addr: '0xd7631787b4dcc87b1254cfd1e5ce48e96823dee8', name: 'SCL', decimals: 8 },
{ addr: '0x73b534fb6f07381a29a60b01eed5ae57d4ee24d7', name: 'SDRN', decimals: 18 },
{ addr: '0xb561fef0d624c0826ff869946f6076b7c4f2ba42', name: 'SER', decimals: 7 },
{ addr: '0xd248b0d48e44aaf9c49aea0312be7e13a6dc1468', name: 'SGT', decimals: 1 },
{ addr: '0xef2e9966eb61bb494e5375d5df8d67b7db8a780d', name: 'SHIT', decimals: 0 },
{ addr: '0xbc7de10afe530843e71dfb2e3872405191e8d14a', name: 'SHOUC', decimals: 18 },
{ addr: '0x1bb9e8ea817d56eccc212ce63f7da95298f98719', name: 'SHT', decimals: 2 },
{ addr: '0x8a187d5285d316bcbc9adafc08b51d70a0d8e000', name: 'SIFT', decimals: 0 },
{ addr: '0x2bdc0d42996017fce214b21607a515da41a9e0c5', name: 'SKIN', decimals: 6 },
{ addr: '0x82d193f8ee41d12aaa0a85cb006606d67f773e9c', name: 'SMT', decimals: 1 },
{ addr: '0xf4134146af2d511dd5ea8cdb1c4ac88c57d60404', name: 'SNC', decimals: 18 },
{ addr: '0xf333b2ace992ac2bbd8798bf57bc65a06184afba', name: 'SND', decimals: 0 },
{ addr: '0xaec2e87e0a235266d9c5adc9deb4b2e29b54d009', name: 'SNGLS', decimals: 0 },
{ addr: '0x744d70fdbe2ba4cf95131626614a1763df805b9e', name: 'SNT', decimals: 18 },
{ addr: '0xd65960facb8e4a2dfcb2c2212cb2e44a02e2a57e', name: 'SOAR', decimals: 6 },
{ addr: '0x983f6d60db79ea8ca4eb9968c6aff8cfa04b3c63', name: 'SONM', decimals: 18 },
{ addr: '0x24aef3bf1a47561500f9430d74ed4097c47f51f2', name: 'SPARTA', decimals: 4 },
{ addr: '0x1eab19e6623e8cbcafc252e275f5b51c27656faf', name: 'SPNK', decimals: 8 },
{ addr: '0xf99f901124cbbe180984a247ba94cfba0c764b2e', name: 'SQRL', decimals: 6 },
{ addr: '0xc301b935d0fd1f5d0b6d68491deca39d44e2da6e', name: 'STAR', decimals: 18 },
{ addr: '0xb64ef51c888972c908cfacf59b47c1afbc0ab8ac', name: 'STORJ', decimals: 8 },
{ addr: '0x46492473755e8df960f8034877f61732d718ce96', name: 'STRC', decimals: 8 },
{ addr: '0x0371a82e4a9d0a4312f3ee2ac9c6958512891372', name: 'STU', decimals: 18 },
{ addr: '0x006bea43baa3f7a6f765f14f10a1a1b08334ef45', name: 'STX', decimals: 18 },
{ addr: '0x4b35e0ab998ebe8414871c13cf778f9d0bbdf609', name: 'SWP', decimals: 18 },
{ addr: '0xb9e7f8568e08d5659f5d29c4997173d84cdf2607', name: 'SWT', decimals: 18 },
{ addr: '0x10b123fddde003243199aad03522065dc05827a0', name: 'SYN', decimals: 18 },
{ addr: '0xe7775a6e9bcf904eb39da2b68c5efb4f9360e08c', name: 'TAAS', decimals: 6 },
{ addr: '0xafe60511341a37488de25bef351952562e31fcc1', name: 'TBT', decimals: 8 },
{ addr: '0xeeac3f8da16bb0485a4a11c5128b0518dac81448', name: 'TEU', decimals: 18 },
{ addr: '0xa7f976c360ebbed4465c2855684d1aae5271efa9', name: 'TFL', decimals: 8 },
{ addr: '0x13ea82d5e1a811f55bda9c86fdd6195a6bd23aed', name: 'TFT', decimals: 8 },
{ addr: '0xac3da587eac229c9896d919abc235ca4fd7f72c1', name: 'TGT', decimals: 1 },
{ addr: '0x6531f133e6deebe7f2dce5a0441aa7ef330b4e53', name: 'TIME', decimals: 8 },
{ addr: '0xea1f346faf023f974eb5adaf088bbcdf02d761f4', name: 'TIX', decimals: 18 },
{ addr: '0xaaaf91d9b90df800df4f55c205fd6989c977e73a', name: 'TKN', decimals: 8 },
{ addr: '0xb45a50545beeab73f38f31e5973768c421805e5e', name: 'TKR', decimals: 18 },
{ addr: '0x08f5a9235b08173b7569f83645d2c7fb55e8ccd8', name: 'TNT', decimals: 8 },
{ addr: '0xaa26b73bfdc80b5c7d2cfbfc30930038fb7fa657', name: 'TOV', decimals: 0 },
{ addr: '0xc596bd09d652827b0106292d3e378d5938df4b12', name: 'TPT', decimals: 18 },
{ addr: '0xcb94be6f13a1182e4a4b6140cb7bf2025d28e41b', name: 'TRST', decimals: 6 },
{ addr: '0x23cb17d7d079518dbff4febb6efcc0de58d8c984', name: 'TRV', decimals: 16 },
{ addr: '0xf230b790e05390fc8295f4d3f60332c93bed42e2', name: 'TRX', decimals: 6 },
{ addr: '0x43ee79e379e7b78d871100ed696e803e7893b644', name: 'UGT', decimals: 18 },
{ addr: '0x190fb342aa6a15eb82903323ae78066ff8616746', name: 'UMC', decimals: 6 },
{ addr: '0xd850942ef8811f2a866692a623011bde52a462c1', name: 'VEN', decimals: 18 },
{ addr: '0x8f3470a7388c05ee4e7af3d01d8c722b0ff52374', name: 'VERI', decimals: 18 },
{ addr: '0x2c974b2d0ba1716e644c1fc59982a89ddd2ff724', name: 'VIB', decimals: 18 },
{ addr: '0xe8ff5c9c75deb346acac493c463c8950be03dfba', name: 'VIBE', decimals: 18 },
{ addr: '0x5c543e7ae0a1104f78406c340e9c64fd9fce5170', name: 'VSL', decimals: 18 },
{ addr: '0x82665764ea0b58157e1e5e9bab32f68c76ec0cdf', name: 'VSM', decimals: 0 },
{ addr: '0xd3c00772b24d997a812249ca637a921e81357701', name: 'WILD', decimals: 18 },
{ addr: '0x667088b212ce3d06a1b553a7221e1fd19000d9af', name: 'WINGS', decimals: 18 },
{ addr: '0x728781e75735dc0962df3a51d7ef47e798a7107e', name: 'WOLK', decimals: 18 },
{ addr: '0xb7cb1c96db6b22b0d3d9536e0108d062bd488f74', name: 'WTC', decimals: 18 },
{ addr: '0x84119cb33e8f590d75c2d6ea4e6b0741a7494eda', name: 'WTT', decimals: 0 },
{ addr: '0x268b7976e94e84a48bf8b2b57ba34b59ed836a74', name: 'XAI', decimals: 8 },
{ addr: '0x4df812f6064def1e5e029f1ca858777cc98d2d81', name: 'XAUR', decimals: 8 },
{ addr: '0x2f4baef93489b09b5e4b923795361a65a26f55e5', name: 'XHY', decimals: 8 },
{ addr: '0xab95e915c123fded5bdfb6325e35ef5515f1ea69', name: 'XNN', decimals: 18 },
{ addr: '0x90528aeb3a2b736b780fd1b6c478bb7e1d643170', name: 'XPA', decimals: 18 },
{ addr: '0xb24754be79281553dc1adc160ddf5cd9b74361a4', name: 'XRL', decimals: 9 },
{ addr: '0x4e260e3ca268e40133c84b142de73108a7c1ec99', name: 'YC', decimals: 0 },
{ addr: '0x6781a0f84c7e9e846dcb84a9a5bd49333067b104', name: 'ZAP', decimals: 18 },
{ addr: '0xe41d2489571d322189246dafa5ebde1f4699f498', name: 'ZRX', decimals: 18 }
  ],
  defaultPair: { token: '1ST', base: 'ETH' },
  pairs: [
{ token: '1LIFE', base: 'ETH' },
{ token: '1ST', base: 'ETH' },
{ token: 'ADST', base: 'ETH' },
{ token: 'ADT', base: 'ETH' },
{ token: 'ADX', base: 'ETH' },
{ token: 'AE', base: 'ETH' },
{ token: 'AFST', base: 'ETH' },
{ token: 'AIR', base: 'ETH' },
{ token: 'AIRA', base: 'ETH' },
{ token: 'AIRT', base: 'ETH' },
{ token: 'ALIS', base: 'ETH' },
{ token: 'ALPC', base: 'ETH' },
{ token: 'AMIS', base: 'ETH' },
{ token: 'ANT', base: 'ETH' },
{ token: 'ARC', base: 'ETH' },
{ token: 'ARENA', base: 'ETH' },
{ token: 'ART', base: 'ETH' },
{ token: 'ARX', base: 'ETH' },
{ token: 'ARXAI', base: 'ETH' },
{ token: 'AST', base: 'ETH' },
{ token: 'ATL', base: 'ETH' },
{ token: 'ATM', base: 'ETH' },
{ token: 'ATS', base: 'ETH' },
{ token: 'ATT', base: 'ETH' },
{ token: 'AUA', base: 'ETH' },
{ token: 'AVT', base: 'ETH' },
{ token: 'BAS', base: 'ETH' },
{ token: 'BAT', base: 'ETH' },
{ token: 'BBD', base: 'ETH' },
{ token: 'BCAP', base: 'ETH' },
{ token: 'BCD', base: 'ETH' },
{ token: 'BCO', base: 'ETH' },
{ token: 'BENJA', base: 'ETH' },
{ token: 'BET', base: 'ETH' },
{ token: 'BITS', base: 'ETH' },
{ token: 'BKB', base: 'ETH' },
{ token: 'BLX', base: 'ETH' },
{ token: 'BMC', base: 'ETH' },
{ token: 'BMT', base: 'ETH' },
{ token: 'BNB', base: 'ETH' },
{ token: 'BNC', base: 'ETH' },
{ token: 'BNT', base: 'ETH' },
{ token: 'BOP', base: 'ETH' },
{ token: 'BOTA', base: 'ETH' },
{ token: 'BPT', base: 'ETH' },
{ token: 'BQ', base: 'ETH' },
{ token: 'BQX', base: 'ETH' },
{ token: 'BRAT', base: 'ETH' },
{ token: 'BTE', base: 'ETH' },
{ token: 'BTH', base: 'ETH' },
{ token: 'BTH2', base: 'ETH' },
{ token: 'BTH2', base: 'ETH' },
{ token: 'BTN', base: 'ETH' },
{ token: 'CAT', base: 'ETH' },
{ token: 'CCT', base: 'ETH' },
{ token: 'CDT', base: 'ETH' },
{ token: 'CDX', base: 'ETH' },
{ token: 'CFI', base: 'ETH' },
{ token: 'CLD', base: 'ETH' },
{ token: 'CLRT', base: 'ETH' },
{ token: 'CND', base: 'ETH' },
{ token: 'CNX', base: 'ETH' },
{ token: 'COB', base: 'ETH' },
{ token: 'COSS', base: 'ETH' },
{ token: 'CREDO', base: 'ETH' },
{ token: 'CSNO', base: 'ETH' },
{ token: 'CTC', base: 'ETH' },
{ token: 'CTR', base: 'ETH' },
{ token: 'CVC', base: 'ETH' },
{ token: 'DALC', base: 'ETH' },
{ token: 'DAY', base: 'ETH' },
{ token: 'DBET', base: 'ETH' },
{ token: 'DCN', base: 'ETH' },
{ token: 'DCNT', base: 'ETH' },
{ token: 'DDF', base: 'ETH' },
{ token: 'DEL', base: 'ETH' },
{ token: 'DENT', base: 'ETH' },
{ token: 'DET', base: 'ETH' },
{ token: 'DEX', base: 'ETH' },
{ token: 'DGD', base: 'ETH' },
{ token: 'DGT', base: 'ETH' },
{ token: 'DICE', base: 'ETH' },
{ token: 'DLT', base: 'ETH' },
{ token: 'DNT', base: 'ETH' },
{ token: 'DRP', base: 'ETH' },
{ token: 'DTC', base: 'ETH' },
{ token: 'E4ROW', base: 'ETH' },
{ token: 'EBCH', base: 'ETH' },
{ token: 'EBCH2', base: 'ETH' },
{ token: 'EBCSH', base: 'ETH' },
{ token: 'EBET', base: 'ETH' },
{ token: 'EBTC', base: 'ETH' },
{ token: 'ECASH', base: 'ETH' },
{ token: 'ECN', base: 'ETH' },
{ token: 'EDASH', base: 'ETH' },
{ token: 'EDG', base: 'ETH' },
{ token: 'EDOGE', base: 'ETH' },
{ token: 'EETH', base: 'ETH' },
{ token: 'ELITE', base: 'ETH' },
{ token: 'ELIX', base: 'ETH' },
{ token: 'ELTC', base: 'ETH' },
{ token: 'ELTC2', base: 'ETH' },
{ token: 'ELTC3', base: 'ETH' },
{ token: 'EMB', base: 'ETH' },
{ token: 'EMV', base: 'ETH' },
{ token: 'ENEO', base: 'ETH' },
{ token: 'ENG', base: 'ETH' },
{ token: 'ENJ', base: 'ETH' },
{ token: 'ENO', base: 'ETH' },
{ token: 'EOS', base: 'ETH' },
{ token: 'EPOSN', base: 'ETH' },
{ token: 'EPOSY', base: 'ETH' },
{ token: 'ETBS', base: 'ETH' },
{ token: 'ETH', base: 'ETH' },
{ token: 'ETHB', base: 'ETH' },
{ token: 'EVC', base: 'ETH' },
{ token: 'EVX', base: 'ETH' },
{ token: 'EXMR', base: 'ETH' },
{ token: 'EXN', base: 'ETH' },
{ token: 'EXRP', base: 'ETH' },
{ token: 'EXRP2', base: 'ETH' },
{ token: 'EZEC', base: 'ETH' },
{ token: 'EZEC2', base: 'ETH' },
{ token: 'FAM', base: 'ETH' },
{ token: 'FAP', base: 'ETH' },
{ token: 'FC', base: 'ETH' },
{ token: 'FLIK', base: 'ETH' },
{ token: 'FLIP', base: 'ETH' },
{ token: 'FNL', base: 'ETH' },
{ token: 'FRD', base: 'ETH' },
{ token: 'FUCK', base: 'ETH' },
{ token: 'FUCKOLD', base: 'ETH' },
{ token: 'FUN', base: 'ETH' },
{ token: 'FYN', base: 'ETH' },
{ token: 'GGS', base: 'ETH' },
{ token: 'GNO', base: 'ETH' },
{ token: 'GNT', base: 'ETH' },
{ token: 'GNTM', base: 'ETH' },
{ token: 'GNTW', base: 'ETH' },
{ token: 'GOOC', base: 'ETH' },
{ token: 'GOOD', base: 'ETH' },
{ token: 'GTKT', base: 'ETH' },
{ token: 'GUNS', base: 'ETH' },
{ token: 'GUP', base: 'ETH' },
{ token: 'HBT', base: 'ETH' },
{ token: 'HKG', base: 'ETH' },
{ token: 'HMQ', base: 'ETH' },
{ token: 'HOWL', base: 'ETH' },
{ token: 'HVN', base: 'ETH' },
{ token: 'ICE', base: 'ETH' },
{ token: 'ICN', base: 'ETH' },
{ token: 'ICOS', base: 'ETH' },
{ token: 'IDEA', base: 'ETH' },
{ token: 'IFT', base: 'ETH' },
{ token: 'IND', base: 'ETH' },
{ token: 'INT', base: 'ETH' },
{ token: 'IQT', base: 'ETH' },
{ token: 'ITS', base: 'ETH' },
{ token: 'ITT', base: 'ETH' },
{ token: 'IWT', base: 'ETH' },
{ token: 'IXT', base: 'ETH' },
{ token: 'JADE', base: 'ETH' },
{ token: 'JET', base: 'ETH' },
{ token: 'KICK', base: 'ETH' },
{ token: 'KIN', base: 'ETH' },
{ token: 'KING', base: 'ETH' },
{ token: 'KNC', base: 'ETH' },
{ token: 'KSS', base: 'ETH' },
{ token: 'KTN', base: 'ETH' },
{ token: 'LDM', base: 'ETH' },
{ token: 'LINK', base: 'ETH' },
{ token: 'LLA', base: 'ETH' },
{ token: 'LLT', base: 'ETH' },
{ token: 'LNK', base: 'ETH' },
{ token: 'LNT', base: 'ETH' },
{ token: 'LRC', base: 'ETH' },
{ token: 'LUCK', base: 'ETH' },
{ token: 'LUN', base: 'ETH' },
{ token: 'MANA', base: 'ETH' },
{ token: 'MAYN', base: 'ETH' },
{ token: 'MAYY', base: 'ETH' },
{ token: 'MBRS', base: 'ETH' },
{ token: 'MCAP', base: 'ETH' },
{ token: 'MCD', base: 'ETH' },
{ token: 'MCI', base: 'ETH' },
{ token: 'MCO', base: 'ETH' },
{ token: 'MDA', base: 'ETH' },
{ token: 'MDT', base: 'ETH' },
{ token: 'MGO', base: 'ETH' },
{ token: 'MKR', base: 'ETH' },
{ token: 'MLN', base: 'ETH' },
{ token: 'MOL', base: 'ETH' },
{ token: 'MPRM', base: 'ETH' },
{ token: 'MRV', base: 'ETH' },
{ token: 'MSP', base: 'ETH' },
{ token: 'MTH', base: 'ETH' },
{ token: 'MTL', base: 'ETH' },
{ token: 'MTP', base: 'ETH' },
{ token: 'MVC', base: 'ETH' },
{ token: 'MyB', base: 'ETH' },
{ token: 'MYST', base: 'ETH' },
{ token: 'NCH', base: 'ETH' },
{ token: 'NDC', base: 'ETH' },
{ token: 'NET', base: 'ETH' },
{ token: 'NEWB', base: 'ETH' },
{ token: 'NIH', base: 'ETH' },
{ token: 'NIMFA', base: 'ETH' },
{ token: 'NMR', base: 'ETH' },
{ token: 'NTC', base: 'ETH' },
{ token: 'NUGD', base: 'ETH' },
{ token: 'NUGD', base: 'ETH' },
{ token: 'NXC', base: 'ETH' },
{ token: 'NXX', base: 'ETH' },
{ token: 'OAX', base: 'ETH' },
{ token: 'OMG', base: 'ETH' },
{ token: 'ONEK', base: 'ETH' },
{ token: 'OPT', base: 'ETH' },
{ token: 'ORME', base: 'ETH' },
{ token: 'OTN', base: 'ETH' },
{ token: 'P+', base: 'ETH' },
{ token: 'PAL', base: 'ETH' },
{ token: 'PAY', base: 'ETH' },
{ token: 'PGL', base: 'ETH' },
{ token: 'PIX', base: 'ETH' },
{ token: 'PKT', base: 'ETH' },
{ token: 'PLBT', base: 'ETH' },
{ token: 'PLR', base: 'ETH' },
{ token: 'PLU', base: 'ETH' },
{ token: 'PLY', base: 'ETH' },
{ token: 'PME', base: 'ETH' },
{ token: 'POE', base: 'ETH' },
{ token: 'POOL', base: 'ETH' },
{ token: 'POS', base: 'ETH' },
{ token: 'POW', base: 'ETH' },
{ token: 'PPP', base: 'ETH' },
{ token: 'PPT', base: 'ETH' },
{ token: 'PRO', base: 'ETH' },
{ token: 'PRS', base: 'ETH' },
{ token: 'PST', base: 'ETH' },
{ token: 'PT', base: 'ETH' },
{ token: 'PT', base: 'ETH' },
{ token: 'PTOY', base: 'ETH' },
{ token: 'QAU', base: 'ETH' },
{ token: 'QRL', base: 'ETH' },
{ token: 'QVT', base: 'ETH' },
{ token: 'R', base: 'ETH' },
{ token: 'RARE', base: 'ETH' },
{ token: 'REAL', base: 'ETH' },
{ token: 'RENT', base: 'ETH' },
{ token: 'REP', base: 'ETH' },
{ token: 'REX', base: 'ETH' },
{ token: 'RHOC', base: 'ETH' },
{ token: 'RIYA', base: 'ETH' },
{ token: 'RLC', base: 'ETH' },
{ token: 'RLX', base: 'ETH' },
{ token: 'ROC', base: 'ETH' },
{ token: 'RPL', base: 'ETH' },
{ token: 'RUB', base: 'ETH' },
{ token: 'RVT', base: 'ETH' },
{ token: 'SAI', base: 'ETH' },
{ token: 'SALT', base: 'ETH' },
{ token: 'SAN', base: 'ETH' },
{ token: 'SCL', base: 'ETH' },
{ token: 'SDRN', base: 'ETH' },
{ token: 'SER', base: 'ETH' },
{ token: 'SGT', base: 'ETH' },
{ token: 'SHIT', base: 'ETH' },
{ token: 'SHOUC', base: 'ETH' },
{ token: 'SHT', base: 'ETH' },
{ token: 'SIFT', base: 'ETH' },
{ token: 'SKIN', base: 'ETH' },
{ token: 'SMT', base: 'ETH' },
{ token: 'SNC', base: 'ETH' },
{ token: 'SND', base: 'ETH' },
{ token: 'SNGLS', base: 'ETH' },
{ token: 'SNT', base: 'ETH' },
{ token: 'SOAR', base: 'ETH' },
{ token: 'SONM', base: 'ETH' },
{ token: 'SPARTA', base: 'ETH' },
{ token: 'SPNK', base: 'ETH' },
{ token: 'SQRL', base: 'ETH' },
{ token: 'STAR', base: 'ETH' },
{ token: 'STORJ', base: 'ETH' },
{ token: 'STRC', base: 'ETH' },
{ token: 'STU', base: 'ETH' },
{ token: 'STX', base: 'ETH' },
{ token: 'SWP', base: 'ETH' },
{ token: 'SWT', base: 'ETH' },
{ token: 'SYN', base: 'ETH' },
{ token: 'TAAS', base: 'ETH' },
{ token: 'TBT', base: 'ETH' },
{ token: 'TEU', base: 'ETH' },
{ token: 'TFL', base: 'ETH' },
{ token: 'TFT', base: 'ETH' },
{ token: 'TGT', base: 'ETH' },
{ token: 'TIME', base: 'ETH' },
{ token: 'TIX', base: 'ETH' },
{ token: 'TKN', base: 'ETH' },
{ token: 'TKR', base: 'ETH' },
{ token: 'TNT', base: 'ETH' },
{ token: 'TOV', base: 'ETH' },
{ token: 'TPT', base: 'ETH' },
{ token: 'TRST', base: 'ETH' },
{ token: 'TRV', base: 'ETH' },
{ token: 'TRX', base: 'ETH' },
{ token: 'UGT', base: 'ETH' },
{ token: 'UMC', base: 'ETH' },
{ token: 'VEN', base: 'ETH' },
{ token: 'VERI', base: 'ETH' },
{ token: 'VIB', base: 'ETH' },
{ token: 'VIBE', base: 'ETH' },
{ token: 'VSL', base: 'ETH' },
{ token: 'VSM', base: 'ETH' },
{ token: 'WILD', base: 'ETH' },
{ token: 'WINGS', base: 'ETH' },
{ token: 'WOLK', base: 'ETH' },
{ token: 'WTC', base: 'ETH' },
{ token: 'WTT', base: 'ETH' },
{ token: 'XAI', base: 'ETH' },
{ token: 'XAUR', base: 'ETH' },
{ token: 'XHY', base: 'ETH' },
{ token: 'XNN', base: 'ETH' },
{ token: 'XPA', base: 'ETH' },
{ token: 'XRL', base: 'ETH' },
{ token: 'YC', base: 'ETH' },
{ token: 'ZAP', base: 'ETH' },
{ token: 'ZRX', base: 'ETH' },
  ],
};
