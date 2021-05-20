//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract Calculator {
    function add(uint256 nb1, uint256 nb2) public pure returns (uint256) {
        return nb1 + nb2;
    }

    function sum(uint256 nb1, uint256 nb2) public pure returns (uint256) {
        return nb1 - nb2;
    }

    function mul(uint256 nb1, uint256 nb2) public pure returns (uint256) {
        return nb1 * nb2;
    }

    function div(uint256 nb1, uint256 nb2) public pure returns (uint256) {
        return nb1 / nb2;
    }

    function mod(uint256 nb1, uint256 nb2) public pure returns (uint256) {
        return nb1 % nb2;
    }
}
