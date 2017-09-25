// Import the page's CSS. Webpack will know what to do with it.
import "../stylesheets/app.css";

// Import libraries we need.
import { default as Web3} from 'web3';
import { default as contract } from 'truffle-contract'

// The following code is simple to show off interacting with your contracts.
// As your needs grow you will likely need to change its form and structure.
// For application bootstrapping, check out window.addEventListener below.
var accounts;
var account;

var wei = 1000000000000000000;

var editPreICOStartDate;
var editPreICOEndDate;
var editICOStartDate;
var editICOEndDate;

var rqxTokenABI = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"maxCap","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"_bounties","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getTokenDetail","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"sendPartnershipAndAdvisorsFundSupplyToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_endTime","type":"uint256"}],"name":"changeEndTime","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"endTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_icoSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"multisig","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"preICOstartTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"minContribAmount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"sendRequitixCoreTeamFundSupplyToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"who","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_partnership","type":"uint256"},{"name":"_stackeholder","type":"uint256"},{"name":"_bountiesSupply","type":"uint256"},{"name":"_coreTeam","type":"uint256"}],"name":"updateDistributionSupply","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"startTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getDistributionSupply","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"sendResearchedForFuturedStackeholderFundSupplyToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_startTime","type":"uint256"}],"name":"changeStartTime","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"PRICE","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_requitixCoreTeamFundSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"softCap","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getPrice","outputs":[{"name":"result","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"preICOendTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"recipient","type":"address"}],"name":"tokensale","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"_researchedForFuturedStackeholderFundSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_preICOstartTime","type":"uint256"},{"name":"_preICOendTime","type":"uint256"},{"name":"_startTime","type":"uint256"},{"name":"_endTime","type":"uint256"}],"name":"updateICODate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"_distributionSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getNow","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"stage","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"fundRaised","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"sendBountiesToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_partnershipAndAdvisorsFundSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"hasEnded","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_preICOstartTime","type":"uint256"},{"name":"_preICOendTime","type":"uint256"},{"name":"_startTime","type":"uint256"},{"name":"_endTime","type":"uint256"},{"name":"_multisig","type":"address"}],"payable":true,"stateMutability":"payable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"purchaser","type":"address"},{"indexed":true,"name":"beneficiary","type":"address"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"TokenPurchase","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"}];

var rqxTokenAddress = "0x5c4b46173ee13411b91434984d49461eed8d3331";

var ownerAddress = "0x895324d4d8e9bf08db6c78d828b8498291e7ab4c";

var TQXToken;

window.App = {
  start: function() {
    var self = this;

    // Get the initial account balance so it can be displayed.
    web3.eth.getAccounts(function(err, accs) {
      if (err != null) {
        $('#currentUserName').html("YOU ARE OFFLINE");
        $('#tokenDetail').hide();
        return;
      }

      if (accs.length == 0) {
        $('#currentUserName').html("YOU ARE OFFLINE");
        $('#tokenDetail').hide();
        return;
      }

      accounts = accs;
      account = accounts[0];
      $('#currentUserName').html("Your Account: " + account);
      TQXToken = web3.eth.contract(rqxTokenABI).at(rqxTokenAddress);
      $('#tokenDetail').show();
      App.showTokenDetail();
    });
  },
  formatDate: function(date) {
    var monthNames = [
      "Jan", "Feb", "Mar",
      "Apr", "May", "Jun", "Jul",
      "Aug", "Sep", "Oct",
      "Nov", "Dec"
    ];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    var hours = date.getHours();
    var mins = date.getMinutes();

    if (day < 10) {
      day = '0' + day;
    }

    if (hours < 10) {
      hours = '0' + hours;
    }

    if (mins < 10) {
      mins = '0' + mins;
    }

    return day + '-' + monthNames[monthIndex] + '-' + year + ' ' + hours + ':' +  mins;
  },

  formatEditDate: function(date) {
    //2017-09-25T00:00
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();

    var hours = date.getHours();
    var mins = date.getMinutes();

    if (day < 10) {
      day = '0' + day;
    }

    if (month < 10) {
      month = '0' + month;
    }

    if (hours < 10) {
      hours = '0' + hours;
    }

    if (mins < 10) {
      mins = '0' + mins;
    }

    return year + '-' + month + '-' + day + 'T' + hours + ':' +  mins;
  },

  showTokenDetail: function() {
    var self = this;
    TQXToken.getTokenDetail.call({from: account}, function(err1, detail1) {
      if(err1) {
        console.log(err1);
      }
      if(detail1) {
        editPreICOStartDate = detail1[2];
        editPreICOEndDate = detail1[3];
        editICOStartDate = detail1[4];
        editICOEndDate = detail1[5];
        $('#tokenName').val(detail1[0]);
        $('#tokenSymbol').val(detail1[1]);
        $('#preICOstartTime').val(self.formatDate(new Date(parseInt(detail1[2]))));
        $('#preICOendTime').val(self.formatDate(new Date(parseInt(detail1[3]))));
        $('#startTime').val(self.formatDate(new Date(parseInt(detail1[4]))));
        $('#endTime').val(self.formatDate(new Date(parseInt(detail1[5]))));
        $('#totalSupply').val(parseFloat(detail1[6]) / wei);
        $('#icoSupply').val(parseFloat(detail1[7]) / wei);
        $('#distributionSupply').val(parseFloat(detail1[8]) / wei);
        if (account == ownerAddress) {
          $('#onlyOwnerAction').show();
        }
      }
    });
  },

  hideUpdateDateScreen : function() {
    $('#updateDate').hide();
  },
  showUpdateDateScreen : function() {
    var self = this;
    $('#updateDistribution').hide();
    $('#upreICOstartTime').val(self.formatEditDate(new Date(parseInt(editPreICOStartDate))));
    $('#upreICOendTime').val(self.formatEditDate(new Date(parseInt(editPreICOEndDate))));
    $('#ustartTime').val(self.formatEditDate(new Date(parseInt(editICOStartDate))));
    $('#uendTime').val(self.formatEditDate(new Date(parseInt(editICOEndDate))));
    $('#updateDate').show();
  },
  updateICODate : function() {
    var self = this;
    var upreICOstartTime = Date.parse(document.getElementById("upreICOstartTime").value);
    var upreICOendTime = Date.parse(document.getElementById("upreICOendTime").value);
    var ustartTime = Date.parse(document.getElementById("ustartTime").value);
    var uendTime = Date.parse(document.getElementById("uendTime").value);

    if (isNaN(upreICOstartTime)) {
      alert ("Pre ICO start date is empty!");
      $('#upreICOstartTime').focus();
      return;
    } else if (isNaN(upreICOendTime)) {
      alert ("Pre ICO end date is empty!");
      $('#upreICOendTime').focus();
      return;
    }  else if (isNaN(ustartTime)) {
      alert ("ICO start is empty!");
      $('#ustartTime').focus();
      return;
    }  else if (isNaN(uendTime)) {
      alert ("ICO end date is empty!");
      $('#uendTime').focus();
      return;
    } else {
      if (upreICOstartTime >= upreICOendTime) {
        alert ("Pre ICO start date should be less than end date!")
        $('#upreICOstartTime').focus();
        return;
      } else if (ustartTime >= uendTime) {
        alert ("ICO start date should be less than end date!");
        $('#ustartTime').focus();
        return;
      }  else if (upreICOendTime >= ustartTime) {
        alert ("ICO start date should be greater than Pre ICO end date!");
        $('#ustartTime').focus();
        return;
      } else {
        $('#btnUpdateDate').html("Updating... Awaiting Confirmation!");
        $('#btnUpdateDate').attr("disabled", true);
        TQXToken.updateICODate.sendTransaction(upreICOstartTime, upreICOendTime, ustartTime, uendTime, {from: account}, function(err, result) {
          if(err) {
            console.log(err);
            alert ("Could not update, please try again!");
            $('#btnUpdateDate').html("Update");
            $("#btnUpdateDate").removeAttr("disabled");
          }
          if(result) {
            alert ("Successfully Updated!");
            $('#btnUpdateDate').html("Update");
            $("#btnUpdateDate").removeAttr("disabled");
            self.showTokenDetail();
          }
          self.hideUpdateDateScreen();
        });
      }
    }
  },

  showDistributionSupplyScreen : function() {
    $('#updateDate').hide();
    TQXToken.getDistributionSupply.call({from: account}, function(err2, detail2) {
      if(err2) {
        console.log(err2);
      }
      if(detail2) {
        $('#totalDistributionSupply').val(parseFloat(detail2[0]) / wei);
        $('#partnershipSupply').val(parseFloat(detail2[1]) / wei);
        $('#stackholderSupply').val(parseFloat(detail2[2]) / wei);
        $('#bountiesSupply').val(parseFloat(detail2[3]) / wei);
        $('#coreTeamSupply').val(parseFloat(detail2[4]) / wei);
        $('#updateDistribution').show();
      }
    });
  },
  hideDistributionSupplyScreen : function() {
    $('#updateDistribution').hide();
  },
  updateDistributionSupply : function() {
    var self = this;
    var totalDistributionSupply = parseFloat(document.getElementById("totalDistributionSupply").value);
    var partnershipSupply = parseFloat(document.getElementById("partnershipSupply").value);
    var stackholderSupply = parseFloat(document.getElementById("stackholderSupply").value);
    var bountiesSupply = parseFloat(document.getElementById("bountiesSupply").value);
    var coreTeamSupply = parseFloat(document.getElementById("coreTeamSupply").value);

    if (isNaN(partnershipSupply)) {
      alert ("Partnership and Advisors supply is empty!");
      return;
    } else if (isNaN(stackholderSupply)) {
      alert ("Stackeholder supply is empty!");
      return;
    } else if (isNaN(bountiesSupply)) {
      alert ("Bounties supply is empty!");
      return;
    } else if (isNaN(coreTeamSupply)) {
      alert ("Requitix core Team supply is empty!");
      return;
    } else {
      var total = partnershipSupply + stackholderSupply + bountiesSupply + coreTeamSupply;
      if (total != totalDistributionSupply) {
        alert ("Distribution Supply doesn't match with the total, please try again!");
        return;
      } else {
        partnershipSupply = partnershipSupply * wei;
        stackholderSupply = stackholderSupply * wei;
        bountiesSupply = bountiesSupply * wei;
        coreTeamSupply = coreTeamSupply * wei;
        $('#transferButton').html("Updating... Awaiting Confirmation!");
        $('#transferButton').attr("disabled", true);
        TQXToken.updateDistributionSupply.sendTransaction(partnershipSupply, stackholderSupply, bountiesSupply, coreTeamSupply, {from: account}, function(err, result) {
          if(err) {
            console.log(err);
            alert ("Could not update, please try again!");
            $('#btnUpdateDistribution').html("Update");
            $("#btnUpdateDistribution").removeAttr("disabled");
          }
          if(result) {
            alert ("Successfully Updated!");
            $('#btnUpdateDistribution').html("Update");
            $("#btnUpdateDistribution").removeAttr("disabled");
          }
          self.hideDistributionSupplyScreen();
        });
      }
    }
  },
  setStatus: function(message) {
    var status = document.getElementById("status");
    status.innerHTML = message;
  }
};

window.addEventListener('load', function() {
  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== 'undefined') {
    console.warn("Using web3 detected from external source. If you find that your accounts don't appear or you have 0 MetaCoin, ensure you've configured that source properly. If using MetaMask, see the following link. Feel free to delete this warning. :) http://truffleframework.com/tutorials/truffle-and-metamask")
    // Use Mist/MetaMask's provider
    window.web3 = new Web3(web3.currentProvider);
    App.start();
  } else {
    // console.warn("No web3 detected. Falling back to http://localhost:8545. You should remove this fallback when you deploy live, as it's inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask");
    // // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    // window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    alert ("Please connect your metamask plugin to use this DApp.");
  }
});
