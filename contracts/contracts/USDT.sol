// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract USDT is ERC20, Ownable{
    constructor() ERC20("USDT", "USDT"){
        _mint(msg.sender, 2000000000*10**18);

    }
}