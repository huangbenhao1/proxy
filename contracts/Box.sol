// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.9;

contract Box {
    uint256  public x;

    function initializer(uint256 _x) external{
        x = _x;
    }


    function getX() public view returns (uint256)  {
        return x;
    }
}