//Java Solution

class Solution {
    public String gcdOfStrings(String str1, String str2) {
        if (str1.length() < str2.length()) {
            return gcdOfStrings(str2, str1);
        }
        
        int left = 0;
        int right = 1;
        String ans = "";
        
        while (right <= str1.length()) {
            String substring = str1.substring(left, right++);
            int repeat1 = str1.length() / substring.length();
            int repeat2 = str2.length() / substring.length();
            
            if (substring.repeat(repeat1).equals(str1) && substring.repeat(repeat2).equals(str2)) {
                ans = (ans.length() < substring.length()) ? substring : ans;
            }
        }
        
        return ans;
    }
}