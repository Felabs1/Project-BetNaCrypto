package io.github.jiangdequan;

public class arrayclass {
    public static void main(String[] args) {
        // we will define and initialize the array containing the names of he universities
        String[] universities = {"egerton", "Maseno", "Kenyatta", "Nairobi", "Moi"};
        // we will devine and initialize an integer i to 0;
        int i = 0;
        while(i < universities.length){  //university we loop through the universities array  
            System.out.println(universities[i]);
            i++; // incrementing i by 1 per loop
        }
    }
}