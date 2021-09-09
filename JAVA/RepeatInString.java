package com.example.demo;

public class RepeatInString {

    public int StringInString(String one, String two) {

        if(one==null || two==null)
            return 0;

        if(one.length()==0 || two.length()==0)
            return 0;

        int count = 0;


        int lastIndex = -1;
        do{

            lastIndex = one.indexOf(two,lastIndex);
            if(lastIndex!=-1) {
                count++;
                lastIndex++;
            }
        }while(lastIndex!=-1);

        return count;

    }

}
