// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "./GenericToken.sol";

contract DogePokiToken is GenericToken {
    constructor() GenericToken("DOGEPOKI", "POKI", 300_000_000_000_000 * (10**18)) {}
}