let x = [1111, 2222, 2222, 3333, 4444]

let containsDuplicate = function (nums) {
    let ans;
    nums.forEach((oitem, outter, nums) => {
        console.log("  -----------------------------------  ")
        console.log(oitem, "  -  ")
        nums.forEach((iitem, inner, nums) => {

            if (outter !== inner) {
                if (oitem == iitem) {
                    console.log("success  -  ", iitem)
                    ans = true
                    return ans
                } else {
                    console.log(" fail -  ", iitem)
                    ans = false
                    return ans
                }


            }

        })
    })
}

console.log(containsDuplicate(x))