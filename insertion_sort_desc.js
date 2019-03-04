function insertion_sort_desc(input)
{
    var key=null;
    var j=null;
    for(i=1 ; i<input.length; i++)
    {
        key = input[i];
        j=i-1;
        while(j>=0 && input[j]<key)
        {
            input[j+1]=input[j];
            j--;
        }
        input[j+1]=key;
    }
    return input;
}