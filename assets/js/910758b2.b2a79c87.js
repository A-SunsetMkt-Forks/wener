"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[5655],{49613:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(59496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),f=a,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||o;return t?r.createElement(m,i(i({ref:n},u),{},{components:t})):r.createElement(m,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},47819:function(e,n,t){t.r(n),t.d(n,{assets:function(){return v},contentTitle:function(){return h},default:function(){return g},frontMatter:function(){return m},metadata:function(){return b},toc:function(){return w}});var r=t(49613),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,p=(e,n)=>{for(var t in n||(n={}))s.call(n,t)&&u(e,t,n[t]);if(l)for(var t of l(n))c.call(n,t)&&u(e,t,n[t]);return e},d=(e,n)=>o(e,i(n)),f=(e,n)=>{var t={};for(var r in e)s.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&l)for(var r of l(e))n.indexOf(r)<0&&c.call(e,r)&&(t[r]=e[r]);return t};const m={title:"ERC-20"},h="ERC-20",b={unversionedId:"blockchain/eth/eip-20",id:"blockchain/eth/eip-20",title:"ERC-20",description:"- \u5fc5\u987b\u63a5\u53e3 - totalSupply, balanceOf, transfer, transferFrom, approve, allowance",source:"@site/../notes/blockchain/eth/eip-20.md",sourceDirName:"blockchain/eth",slug:"/blockchain/eth/eip-20",permalink:"/notes/blockchain/eth/eip-20",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/blockchain/eth/eip-20.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1659031280,formattedLastUpdatedAt:"Jul 28, 2022",frontMatter:{title:"ERC-20"},sidebar:"docs",previous:{title:"Moloch",permalink:"/notes/blockchain/eth/dao/moloch"},next:{title:"ERC721",permalink:"/notes/blockchain/eth/eip-721"}},v={},w=[],k={toc:w},y="wrapper";function g(e){var n=e,{components:t}=n,a=f(n,["components"]);return(0,r.kt)(y,d(p(p({},k),a),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",p({},{id:"erc-20"}),"ERC-20"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5fc5\u987b\u63a5\u53e3 - totalSupply, balanceOf, transfer, transferFrom, approve, allowance"),(0,r.kt)("li",{parentName:"ul"},"\u4e8b\u4ef6 - Transfer, Approval"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u9009\u63a5\u53e3",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5143\u6570\u636e - name, symbol, decimals"))),(0,r.kt)("li",{parentName:"ul"},"\u6269\u5c55",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Burnable - burn, burnFrom"),(0,r.kt)("li",{parentName:"ul"},"Capped - cap - \u9650\u5b9a\u603b\u91cf"),(0,r.kt)("li",{parentName:"ul"},"FlashMint - maxFlashLoan, flashFee, flashLoan"))),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"https://eips.ethereum.org/EIPS/eip-20"}),"eip-20"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5b9a\u4e49\u4e86 Token \u5408\u7ea6\u6807\u51c6"),(0,r.kt)("li",{parentName:"ul"},"2015-11-19"))),(0,r.kt)("li",{parentName:"ul"},"Wikipedia ",(0,r.kt)("a",p({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Ethereum#ERC-20_tokens"}),"ERC-20")),(0,r.kt)("li",{parentName:"ul"},"OpenZeppelin ",(0,r.kt)("a",p({parentName:"li"},{href:"https://github.com/OpenZeppelin/openzeppelin-contracts/blob/07b1b472c0ac3e50963c8d52cd2dac6e7e05260c/contracts/token/ERC20/ERC20.sol"}),"ERC20.sol")),(0,r.kt)("li",{parentName:"ul"},"ConsenSys ",(0,r.kt)("a",p({parentName:"li"},{href:"https://github.com/ConsenSys/Tokens/blob/bbfa5b3544f19b2464efb05fa3179db4543816f1/contracts/eip20/EIP20.sol"}),"EIP20.sol"))))),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-solidity"}),"/**\n * @dev Interface of the ERC20 standard as defined in the EIP.\n */\ninterface IERC20 {\n  function name() public view returns (string);\n\n  function symbol() public view returns (string);\n\n  function decimals() public view returns (uint8);\n\n  /**\n   * @dev Emitted when `value` tokens are moved from one account (`from`) to\n   * another (`to`).\n   *\n   * Note that `value` may be zero.\n   */\n  event Transfer(address indexed from, address indexed to, uint256 value);\n\n  /**\n   * @dev Emitted when the allowance of a `spender` for an `owner` is set by\n   * a call to {approve}. `value` is the new allowance.\n   */\n  event Approval(address indexed owner, address indexed spender, uint256 value);\n\n  /**\n   * @dev Returns the amount of tokens in existence.\n   */\n  function totalSupply() external view returns (uint256);\n\n  /**\n   * @dev Returns the amount of tokens owned by `account`.\n   */\n  function balanceOf(address account) external view returns (uint256);\n\n  /**\n   * @dev Moves `amount` tokens from the caller's account to `to`.\n   *\n   * Returns a boolean value indicating whether the operation succeeded.\n   *\n   * Emits a {Transfer} event.\n   */\n  function transfer(address to, uint256 amount) external returns (bool);\n\n  /**\n   * @dev Returns the remaining number of tokens that `spender` will be\n   * allowed to spend on behalf of `owner` through {transferFrom}. This is\n   * zero by default.\n   *\n   * This value changes when {approve} or {transferFrom} are called.\n   */\n  function allowance(address owner, address spender) external view returns (uint256);\n\n  /**\n   * @dev Sets `amount` as the allowance of `spender` over the caller's tokens.\n   *\n   * Returns a boolean value indicating whether the operation succeeded.\n   *\n   * IMPORTANT: Beware that changing an allowance with this method brings the risk\n   * that someone may use both the old and the new allowance by unfortunate\n   * transaction ordering. One possible solution to mitigate this race\n   * condition is to first reduce the spender's allowance to 0 and set the\n   * desired value afterwards:\n   * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729\n   *\n   * Emits an {Approval} event.\n   */\n  function approve(address spender, uint256 amount) external returns (bool);\n\n  /**\n   * @dev Moves `amount` tokens from `from` to `to` using the\n   * allowance mechanism. `amount` is then deducted from the caller's\n   * allowance.\n   *\n   * Returns a boolean value indicating whether the operation succeeded.\n   *\n   * Emits a {Transfer} event.\n   */\n  function transferFrom(\n    address from,\n    address to,\n    uint256 amount\n  ) external returns (bool);\n}\n\n")))}g.isMDXComponent=!0}}]);