/*
            INSERTION SORT(ASCENDING ORDER)
            ================================
    1. Time complexity is n².
    2. This is inplace sorting algorithm
    3. Sorting is just like sorting handful of playing cards.
    4. The sorting is based on key. All the elements before key are sorted and all the elements after the key are
       unsorted.
    5. we compare key with elements on left until all the elements are compared or elment less than or 
       equal to key is found.
    6. Elements in this sorting are copied not swapped
*/


function insertion_sort(input)
{
    var key=null;
    var j=null;
    for(var i=1;i<input.length;i++)
    {
        key = input[i];
        j=i-1;
        while(j>=0 && a[j]>key)
        {
            a[j+1]=a[j];
            j--;
        }
        a[j+1]=key
    }
    return input;
}