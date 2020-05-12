test = {

    assert: function (method, testCase){
        return method(testCase[0]) == testCase[1];
    },
    
    doAsserts: function (method, testCases){

        const results = [];

        for (let i=0; i < testCases.length; i++){

            let testCase = testCases[i];

            results.push(this.assert(method, testCase) ? "OK" : `Failed for function: ${method} with n = ${testCase[0]}`);

        }
        return results;
    },
    
    fiboCases: [
        [0,0],
        [1,1],
        [2,1],
        [3,2],
        [4,3],
        [5,5],
        [6,8],
        [7,13]
    ],

    padoCases: [
        [0,1],
        [1,1],
        [2,1],
        [3,2],
        [4,2],
        [5,3],
        [6,4],
        [7,5]
    ],

    jacobCases: [
        [0,0],
        [1,1],
        [2,1],
        [3,3],
        [4,5],
        [5,11],
        [6,21],
        [7,43]
    ]
}

module.exports = test 