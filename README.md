# Before deploy

1) comment usdt contract that was just dummy and put the original usdt address 0x55d398326f99059fF775485246999027B3197955
2) set manager address in usdt constructor
3) change if you want to update deposit and withdraw fee
4) update network to bsc
```
npx hardhat run scripts/deploy.ts
```
4) Copy contract addresses and use it




## After you deploy your contract on any chain you can verify your contract by runing this command (if you are passing args make sure your args are correct in args file)
`npx hardhat verify --constructor-args arguments/arg_file_name.js contract_address`

### Args is optional