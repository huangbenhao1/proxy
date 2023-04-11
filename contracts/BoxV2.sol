// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.9;

contract BoxV2 {
    uint256  public x;

/*     constructor(uint256 _x) {
        x = _x;
    } */

    function inc() public {
         x += 1;
    }

     function getX() public view returns(uint256){
         return x;
    }
    
}