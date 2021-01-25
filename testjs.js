const https = require('https');

function CallAPI(apiUrl) {
    console.log('called API');
    return new Promise(resolve => {
        let a = https.get(`https://random-data-api.com/api/${apiUrl}`, (resp) => {
            let data = '';
            resp.on('data', (chunk) => {
                data += chunk;
                console.log("Data: " + data);
                resolve('resolved');
            });
        }).on("error", (err) => {
            console.log("Error: " + err.message);
        });
    });
}

async function synchronousHttpCalls() {
    await CallAPI('phone_number/random_phone_number');
    console.log('call 1 done');
    await CallAPI('address/random_address');
    console.log('call 2 done');
    await CallAPI('appliance/random_appliance');
    console.log('call 3 done');
    await CallAPI('beer/random_beer');
    console.log('call 4 done');
    await CallAPI('blood/random_blood');
    console.log('call 5 done');
    await CallAPI('cannabis/random_cannabis');
    console.log('call 6 done');
    await CallAPI('coffee/random_coffee');
    console.log('call 7 done');
    await CallAPI('computer/random_computer');
    console.log('call 8 done');
    await CallAPI('color/random_color');
    console.log('call 9 done');
    await CallAPI('device/random_device');
    console.log('call 10 done');
}
async function AsynchronousHttpCalls() {
    CallAPI('phone_number/random_phone_number');
    console.log('call 1 done');
    CallAPI('address/random_address');
    console.log('call 2 done');
    CallAPI('appliance/random_appliance');
    console.log('call 3 done');
    CallAPI('beer/random_beer');
    console.log('call 4 done');
    CallAPI('blood/random_blood');
    console.log('call 5 done');
    CallAPI('cannabis/random_cannabis');
    console.log('call 6 done');
    CallAPI('coffee/random_coffee');
    console.log('call 7 done');
    CallAPI('computer/random_computer');
    console.log('call 8 done');
    CallAPI('color/random_color');
    console.log('call 9 done');
    CallAPI('device/random_device');
    console.log('call 10 done');
}


function CheckIfPalindrome(string) {
    // const a = str.splite()
    let reversStr = '';
    for (str of string) {
        reversStr = `${str}${reversStr}`
    }
    if (reversStr === string) {
        console.log(`${string} is a palindrome `);
    } else {
        console.log(`${string} is not a palindrome`);
    }
}

CheckIfPalindrome('mam');
CheckIfPalindrome('hay');
synchronousHttpCalls();
//AsynchronousHttpCalls();
// uncomment above  code to test the synchronous Http Calls
// the logs are added to understanbd the flow.
