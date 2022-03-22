function splitByStep(step, arr)
{
    var steppedString = "";

    for(i = 0 ; i < arr.length; i += step)
        steppedString += arr[i] + " ";

    console.log(steppedString);
}
splitByStep(['5', '20', '31', '4', '20', '2']);