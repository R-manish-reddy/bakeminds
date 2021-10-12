// Bank Requests
// You've been asked to program a bot for a popular bank that will automate the management of
// incoming requests. There are three types of requests the bank can receive:
// • transfer i j sum : request to transfer sum amount of money from the ith account
// to the jth one ( i and j are 1-based);
// • deposit i sum : request to deposit sum amount of money in the ith account (1-
// based);
// • withdraw i sum : request to withdraw sum amount of money from the ith account
// (1-based).
// Your bot should also be able to process invalid requests. There are two types of invalid
// requests:
// • invalid account number in the requests;
// • withdrawal / transfer of a larger amount of money than is currently available.
// For the given list of balances and requests , return the state of balances after all requests
// have been processed, or an array of a single element [-<request_id>] (please note the
// minus sign), where <request_id> is the 1-based index of the first invalid request.
// Example
// • For balances = [10, 100, 20, 50, 30] and
// requests = ["withdraw 2 10", "transfer 5 1 20", "deposit 5 20", "transfer
// 3 4 15"] ,
// the output should be bankRequests(balances, requests) = [30, 90, 5, 65, 30] .
// Here are the states of balances after each request:
// o "withdraw 2 10" : [10, 90, 20, 50, 30] ;
// o "transfer 5 1 20" : [30, 90, 20, 50, 10] ;
// o "deposit 5 20" : [30, 90, 20, 50, 30] ;
// o "transfer 3 4 15" : [30, 90, 5, 65, 30] , which is the answer.
// • For balances = [20, 1000, 500, 40, 90] and
// requests = ["deposit 3 400", "transfer 1 2 30", "withdraw 4 50"] ,
// the output should be bankRequests(balances, requests) = [-2] .
// After the first request, balances becomes equal to [20, 1000, 900, 40, 90] , but
// the second one turns it into [-10, 1030, 900, 40, 90] , which is invalid. Thus, the
// second request is invalid, and the answer is [-2] . Note that the last request is also
// invalid, but it shouldn't be included in the answer.
// Input/Output
// • [execution time limit] 4 seconds (js)
// • [input] array.integer balances
// Array of integers, where balances[i] is the amount of money in the (i +
// 1)th account.
// Internal
// Guaranteed constraints:
// 0 < balances.length ≤ 100 ,
// 0 ≤ balances[i] ≤ 105 .
// • [input] array.string requests
// Array of requests in the order they should be processed. Each request is guaranteed
// to be in the format described above.
// It is guaranteed that for each i and j in a request 0 < i, j ≤ 1000 .
// Guaranteed constraints:
// 0 < requests.length ≤ 100 ,
// for each i , j and sum in each element of request :
// o 0 < i ≤ 1000 ,
// o 0 < j ≤ 1000 ,
// o 0 ≤ sum ≤ 105 .
// • [output] array.integer
// The balances after executing all of the requests or array with a single integer - the
// index of the first invalid request preceded by - .

const bankRequests = (balances, requests) => {
  const balStore = balances;
  const requests_Ops = requests;
  //console.log('ACTUAL',balStore);
  var shallContinue = true;
  // console.log(requests_Ops);

  for (let i = 0; i < requests_Ops.length; i++) {
    let cleanReq = requests_Ops[i].replace(/\d+/g, "");

    switch (cleanReq.trim()) {
      case "transfer":
        let transfer_i = parseInt(requests_Ops[i].match(/\d+/g)[0]);
        let transfer_j = parseInt(requests_Ops[i].match(/\d+/g)[1]);
        let transfer_amt = parseInt(requests_Ops[i].match(/\d+/g)[2]);

        if (balStore[transfer_i - 1] < transfer_amt) {
          //console.log("Breaked");
          shallContinue = false;
          break;
        } else {
          balStore[transfer_i - 1] = balStore[transfer_i - 1] - transfer_amt;
          balStore[transfer_j - 1] = balStore[transfer_j - 1] + transfer_amt;
          // console.log(balStore);
          break;
        }
      case "deposit":
        let deposit_target = parseInt(requests_Ops[i].match(/\d+/g)[0]);
        let deposit_amt = parseInt(requests_Ops[i].match(/\d+/g)[1]);

        balStore[deposit_target - 1] =
          balStore[deposit_target - 1] + deposit_amt;
        //console.log(balStore);
        break;

      case "withdraw":
        let withdraw_target = parseInt(requests_Ops[i].match(/\d+/g)[0]);
        let withdraw_amt = parseInt(requests_Ops[i].match(/\d+/g)[1]);
        if (balStore[withdraw_target - 1] < withdraw_amt) {
          console.log("ops");
          shallContinue = false;
          break;
        } else {
          balStore[withdraw_target - 1] =
            balStore[withdraw_target - 1] - withdraw_amt;
          //console.log(balStore);
          break;
        }
    }

    if (!shallContinue) {
      console.log(-(i + 1));
      break;
    }

  }//for loop ends here

  if (shallContinue != false) {
    console.log(balStore);
  }
};

bankRequests(
  [10, 100, 20, 50, 30],
  ["withdraw 2 10", "transfer 5 1 20", "deposit 5 20", "transfer 3 4 15"]
);

