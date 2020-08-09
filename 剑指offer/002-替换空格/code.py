from leetcode_tester import Tester


class Solution (object):
	def replaceSpace(self, s):
	    # write code here
	    s_len = len(s)
	    space_count = 0
	    for i in s:
	        if i == ' ':
	            space_count += 1
	    s_len += 2 * space_count
	    new_array = [' '] * s_len
	    j = 0
	    for i in range(len(s)):
	        if s[i] == ' ':
	            new_array[j] = '%'
	            new_array[j+1] = '2'
	            new_array[j+2] = '0'
	            j += 3
	        else:
	            new_array[j] = s[i]
	            j += 1
	    return ''.join(new_array)


solution = Solution();
tester = Tester(solution.replaceSpace);
tester.addTest("We are happy","We%20are%20happy");
tester.doTest();
